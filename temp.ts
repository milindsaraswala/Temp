import { override } from '@microsoft/decorators';
import { BaseApplicationCustomizer } from '@microsoft/sp-application-base';
import * as marked from 'marked';
import { createAbortController, createTextDecorder, safeClipboardCopy, safeStorage } from '../../helpers/spfxCompat';

type Message = { from: 'user' | 'bot', message: string };

export default class ChatbotExtensionApplicationCustomizer
  extends BaseApplicationCustomizer<{}> {

  private messages: Message[] = [];

  @override
  public onInit(): Promise<void> {
    this.injectStyles();
    this.injectLauncher();
    // this.injectChatWidget();
    return Promise.resolve();
  }

  private injectStyles(): void {
    const style: HTMLStyleElement = document.createElement('style');

    style.innerHTML = `
      .chat-launcher {
        position: fixed;
        bottom: 30px;
        right: 30px;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        z-index: 9999;
        flex-direction: row-reverse;
      }

      .chat-launcher .chat-icon {
        width: 46px;
        height: 46px;
        background: #d0021b;
        border-radius: 50%;
        color: #fff;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 6px rgba(0,0,0,0.2);
      }

    .chat-launcher .chat-text {
        position: relative;
        background: #d0021b;
        color: #fff;
        padding: 10px 16px;
        border-radius: 22px;
        font-size: 14px;
        font-weight: 700;
        white-space: nowrap;
        opacity: 0;
        transform: translateX(8px) scale(0.98);
        pointer-events: none;
        transition: opacity .18s ease, transform .18s ease;
    }

    .chat-launcher .chat-text::after {
        content: "";
        position: absolute;
        bottom: 0;
        right: -8px;
        transform: translateY(-50%);
        top: 50%;
        width: 0;
        height: 0;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 10px solid #d0021b;
    }

    .chat-launcher .chat-text::before {
        content: "";
        position: absolute;
        top: 50%;
        right: -3px;
        transform: translateY(-50%);
        width: 14px;
        height: 14px;
        background: #d0021b;
        border-radius: 50%;
    }

    .chat-launcher:hover .chat-text,
    .chat-launcher:focus-within .chat-text {
        opacity: 1;
        transform: translateX(0) scale(1);
        pointer-events: auto;
    }

      .chat-launcher:not(.collapsed) {
        border-radius: 20px;
        padding: 10px 16px;
        width: auto;
      }

       .chat-launcher:not(.collapsed) .chat-text {
          display: inline;
          opacity: 1;
       }

      .chat-container {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 360px;
        height: 400px;
        background: #fff;
        border: 1px solid #ccc;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        display: flex;
        flex-direction: column;
        z-index: 9999;
        font-family: sans-serif;
        overflow: hidden;
      }

      .chat-header {
        background: #d0021b;
        color: white;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items:center;
        border-radius: 12px 12px 0 0;
        font-size: 14px;
      }

      .chat-header-buttons button {
        color: white;
        font-size: 18px;
        opacity: 0.85;
        transition: all 0.2s ease-in-out;
        background: transparent;
        border: none;
      }

      .chat-messages {
        flex: 1;
        padding: 10px;
        height: 300px;
        display:flex;
        flex-direction: column;
        overflow-y: auto;
      }

      .chat-input {
        display: flex;
        align-items: center;
        gap: 6px;
        border-top: 1px solid #eee;
        padding: 6px;
        flex-wrap: wrap;
        position: relative;
      }

      .chat-input input {
        flex: 1;
        border: 1px solid #ccc;
        border-radius: 20px;
        padding: 10px 12px;
        font-size: 14px;
      }

      .chat-input button {
        border: none;
        background: #d0021b;
        color: white;
        padding: 10px 16px;
        font-size: 16px;
        cursor: pointer;
        border-radius: 20px;
      }

      .chat-user {
        background: #d0021b;
        color: white;
        padding: 10px 16px;
        border-radius: 20px 20px 2px 20px;
        max-width: 80%;
        align-self: flex-end;
        font-weight: 500;
        margin-bottom: 8px;
      }

      .chat-bot {
        background: #f7f7f7;
        color: #333;
        padding: 10px 16px;
        border-radius: 20px 20px 2px 20px;
        max-width: 85%;
        align-self: flex-start;
        margin-bottom: 8px;
      }

      .copy-btn {
        margin-left: 8px;
        font-size: 12px;
        background: transparent;
        border: none;
        border-radius: 4px;
        padding: 2px 6px;
        cursor: pointer;
        float: right;
     }
     .chat-stop-btn {
        font-size: 12px;
        background: #f1f1f1;
        color: #555;
        padding: 4px 10px;
        border-radius: 20px;
        cursor: pointer;
        border: 1px solid #ccc;
        white-space: nowrap;
        margin: 6px auto;
        display: none;
     }

     .blinking-cursor {
       display: inline-block;
       width: 6px;
       height: 16px;
       background: #333;
       animation: blink 1s steps(1) infinite;
       margin-left: 4px;
     }
     @keyframes blink {
       0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; }
     }

     .chat-bot-typing {
        display: flex;
        align-items: center;
        gap: 4px;
        height: 16px;
        margin-top: 4px;
        margin-left: 6px;
     }

     .chat-bot-typing span {
        width: 6px;
        height: 6px;
        background-color: #555;
        border-radius: 50%;
        animation: typing-bounce 1.2s infinite ease-in-out;
     }

     .chat-bot-typing span:nth-child(1){
        animation-delay: 0s;
     }
     .chat-bot-typing span:nth-child(2){
        animation-delay: 0.2s;
     }
     .chat-bot-typing span:nth-child(3){
        animation-delay: 0.4s;
     }

     @keyframes typing-bounce{
        0%, 80%, 100% {
          transform: scale(0.6);
          opacity: 0.4;
        }
        40% {
          transform: scale(1);
          opacity: 1;
        }
     }

     .chat-header-buttons button:hover {
        opacity: 1;
        transform: scale(1.1);
     }

     .copy-btn:hover {
      color: #000;
     }
    `;

    document.head.appendChild(style);
  }

  private injectLauncher(): void {
    const launcher: HTMLDivElement = document.createElement('div');
    launcher.className = 'chat-launcher collapsed';

    launcher.innerHTML = `
      <div class="chat-icon">
        💬
      </div>
      <div class="chat-text">
        How can I help you?
      </div>
    `;

    launcher.title = 'Chat with us';

    launcher.onclick = () => {
      launcher.style.display = 'none';
      this.injectChatWidget();
    };

    document.body.appendChild(launcher);

    // setTimeout(() => {
    //   launcher.classList.remove('collapsed');
    // }, 5000);
  }

  private injectChatWidget(): void {
    const chatBox: HTMLDivElement = document.createElement('div');
    chatBox.className = 'chat-container';
    chatBox.innerHTML = `
      <div class="chat-header">
        <span>Chatbot 🗨️</span>
        <div class="chat-header-buttons button">
          <button id="clearChatBtn" title="Clear Chat">🗑</button>
          <button id="minimizeBtn" title="Minimize">X</button>
        </div>
      </div>
      <div class="chat-messages" id="chatMessages"></div>
      <div id="stopRespondingBtn" class="chat-stop-btn" style="display:none">
          ⏹	Stop Responding
      </div>
      <div class="chat-input">
        <input type="text" id="chatInput" placeholder="Type a message..." />
        <button id="sendBtn">▶</button>
      </div>
    `;

    document.body.appendChild(chatBox);

    const messagesDiv: HTMLElement = chatBox.querySelector('#chatMessages') as HTMLElement;
    const input: HTMLInputElement = chatBox.querySelector('#chatInput') as HTMLInputElement;
    const sendBtn: HTMLButtonElement = chatBox.querySelector('#sendBtn') as HTMLButtonElement;

    const minimizeBtn: HTMLButtonElement = chatBox.querySelector('#minimizeBtn') as HTMLButtonElement;
    minimizeBtn.addEventListener('click', () => {
      chatBox.remove();
      const launcher: HTMLElement = document.querySelector('.chat-launcher') as HTMLElement;
      if (launcher) {
        launcher.style.display = 'inline-flex';
        // launcher.classList.add('collapsed');
        // setTimeout(() => {
        //   launcher.classList.remove('collapsed');
        // }, 3000);
      }
    });

    const clearBtn: HTMLButtonElement = chatBox.querySelector('#clearChatBtn') as HTMLButtonElement;
    clearBtn.addEventListener('click', () => {
      this.messages = [];
      safeStorage.remove('chat_history');
      safeStorage.remove('chat_draft');
      messagesDiv.innerHTML = '';
      input.value = '';
    });

    this.messages = safeStorage.get<Message[]>('chat_history', []);
    for (const msg of this.messages) {
      this.renderMessage(messagesDiv, msg.from, msg.message);
    }
    this.scrollTopBottom(messagesDiv);

    const draft: string = safeStorage.get<string>('chat_draft', '');
    if (draft) { input.value = draft; }
    input.addEventListener('input', () => safeStorage.set('chat_draft', input.value));
    sendBtn.addEventListener('click', async () => {
      try {
        await this.sendMessage(input, messagesDiv, chatBox);
      } catch (err) {
        console.error('Error in sendMessage:', err);
      }
    });
    input.addEventListener('keypress', async (e) => {
      if (e.key === 'Enter') {
        try {
          await this.sendMessage(input, messagesDiv, chatBox);
        } catch (err) {
          console.error('Error in sendMessage:', err);
        }
      }
    });
  }

  private renderMessage(container: HTMLElement, from: 'user' | 'bot', message: string): void {
    const div: HTMLDivElement = document.createElement('div');
    div.className = from === 'user' ? 'chat-user' : 'chat-bot';
    div.innerHTML = from === 'bot' ? marked(message) : `You: ${message}`;

    if (from === 'bot') {
      const copyBtn: HTMLButtonElement = document.createElement('button');
      copyBtn.className = 'copy-btn';
      copyBtn.textContent = '📋 Copy';
      copyBtn.addEventListener('click', () => { safeClipboardCopy(message, copyBtn); });
      div.appendChild(copyBtn);
    }

    container.appendChild(div);
    this.scrollTopBottom(container);
  }

  private async sendMessage(input: HTMLInputElement, messagesDiv: HTMLElement, container: HTMLElement): Promise<void> {
    const text: string = input.value.trim();
    if (!text) { return; }

    this.renderMessage(messagesDiv, 'user', text);
    this.messages.push({ from: 'user', message: text });
    this.messages = this.messages.slice(-50);
    safeStorage.set('chat_history', this.messages);
    safeStorage.remove('chat_draft');
    input.value = '';

    // Bot message container
    const messageDiv: HTMLDivElement = document.createElement('div');
    messageDiv.className = 'chat-bot';
    messagesDiv.appendChild(messageDiv);

    // Typing indicator
    const typingIndicator: HTMLDivElement = document.createElement('div') as HTMLDivElement;
    typingIndicator.className = 'chat-bot-typing';
    // tslint:disable-next-line
    typingIndicator.innerHTML = `<span></span><span></span><span></span>`;
    messagesDiv.appendChild(typingIndicator);

    // const blinking = document.createElement('span');
    // blinking.className = 'blinking-cursor';
    // messageDiv.appendChild(blinking);

    // Abort Controller
    const { controller, signal } = createAbortController();
    // tslint:disable-next-line
    const decoder: any = createTextDecorder();
    let fullAnswer: string = '';
    let renderTimeout: number | null = undefined;
    let wasAbortedManually: boolean = false;

    // Stop button
    const oldStopButton: HTMLButtonElement = document.querySelector('#stopRespondingBtn') as HTMLButtonElement;
    if (oldStopButton && oldStopButton.parentNode) {
      const newStopButton: HTMLButtonElement = oldStopButton.cloneNode(true) as HTMLButtonElement;
      oldStopButton.parentNode.replaceChild(newStopButton, oldStopButton);

      newStopButton.style.display = 'block';
      newStopButton.style.display = 'block';
      newStopButton.addEventListener('click', () => {
        controller.abort();
        newStopButton.style.display = 'none';
        typingIndicator.remove();
        wasAbortedManually = true;
      });
    }

    try {
      const res: Response = await fetch('https://hubproxy.corp.bbynuat.com/v1/chat-messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Client-Authorization': 'Bearer app-GcoAguhduPR9TVnlS4WQp1DJ'
        },
        body: JSON.stringify({
          inputs: {},
          user: this.context.pageContext.user.loginName,
          query: text,
          response_mode: 'streaming'
        }),
        signal: signal
        // tslint:disable-next-line
      } as any);

      // tslint:disable-next-line
      const reader = res.body!.getReader();

      if (!res.body) { throw new Error('No stream avaialble'); }

      while (true) {
        const { done, value } = await reader.read();
        if (done) { break; }

        const chunk: string = decoder.decode(value, { stream: true });
        const lines: string[] = chunk.split('\n').filter(line => line.trim() !== '');

        for (const rawLine of lines) {
          try {
            const line: string = rawLine.replace(/^data:\s*/, '');
            // tslint:disable-next-line
            const json: any = JSON.parse(line);
            const piece: string = json.answer || '';
            fullAnswer += piece;

            if (renderTimeout) { clearTimeout(renderTimeout); }
            renderTimeout = window.setTimeout(() => {
              messageDiv.innerHTML = marked(fullAnswer + '<span class="blinking-cursor">▌</span>');
              messagesDiv.scrollTop = messagesDiv.scrollHeight;
            }, 30);
          } catch (e) {
            console.warn('Invalid chunk:', rawLine);
          }
        }
      }

      // Final render (no cursor)
      if (renderTimeout) { clearTimeout(renderTimeout); }
      messageDiv.innerHTML = marked(fullAnswer || '(No response)');
      this.scrollTopBottom(messagesDiv);

      const copyBtn: HTMLButtonElement = document.createElement('button');
      copyBtn.className = 'copy-btn';
      copyBtn.textContent = '📋 Copy';
      copyBtn.addEventListener('click', () => { safeClipboardCopy(fullAnswer, copyBtn); });
      messageDiv.appendChild(copyBtn);

      if (fullAnswer.trim() !== '') {
        this.messages.push({ from: 'bot', message: fullAnswer });
        safeStorage.set('chat_history', this.messages);
      }
    } catch (e) {
      const errorMessage: string = wasAbortedManually
        ? '<em>(Response Stopped)</em>'
        : '<em>Error reaching server</em>';
      messageDiv.innerHTML = errorMessage;
      this.messages.push({ from: 'bot', message: fullAnswer });
      safeStorage.set('chat_history', this.messages);
    }

    // Cleanup
    const stopButtonFinal: HTMLButtonElement = document.querySelector('#stopRespondingBtn') as HTMLButtonElement;
    if (stopButtonFinal) { stopButtonFinal.style.display = 'none'; }
    typingIndicator.remove();
    this.scrollTopBottom(messagesDiv);
    // messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }

  private scrollTopBottom(container: HTMLElement): void {
    let retries: number = 5;
    const delay: number = 100;

    const scroll: () => void = () => {
      container.scrollTop = container.scrollHeight;

      if (--retries > 0) {
        setTimeout(scroll, delay);
      }
    };
    setTimeout(scroll, delay);
  }
}
