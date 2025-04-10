/*!
* DevExtreme (dx.all.d.ts)
* Version: 20.2.7 (build 21146-1035)
* Build date: Wed May 26 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
/* #StartGlobalDeclaration */
interface JQuery {
}
interface JQueryPromise<T> {
}
interface JQueryEventObject {
    cancel?: boolean;
}
interface PromiseLike<T> {
}
interface Promise<T> {
    then<TResult1 = T, TResult2 = never>(
        onfulfilled?: ((value: T, extraParameters?: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
        onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): Promise<TResult1 | TResult2>;
}
/* #EndGlobalDeclaration */
/* #StartJQueryAugmentation */
interface JQuery {
    dxAccordion(): JQuery;
    dxAccordion(options: "instance"): DevExpress.ui.dxAccordion;
    dxAccordion(options: string): any;
    dxAccordion(options: string, ...params: any[]): any;
    dxAccordion(options: DevExpress.ui.dxAccordionOptions): JQuery;
}
interface JQuery {
    dxActionSheet(): JQuery;
    dxActionSheet(options: "instance"): DevExpress.ui.dxActionSheet;
    dxActionSheet(options: string): any;
    dxActionSheet(options: string, ...params: any[]): any;
    dxActionSheet(options: DevExpress.ui.dxActionSheetOptions): JQuery;
}
interface JQuery {
    dxAutocomplete(): JQuery;
    dxAutocomplete(options: "instance"): DevExpress.ui.dxAutocomplete;
    dxAutocomplete(options: string): any;
    dxAutocomplete(options: string, ...params: any[]): any;
    dxAutocomplete(options: DevExpress.ui.dxAutocompleteOptions): JQuery;
}
interface JQuery {
    dxBox(): JQuery;
    dxBox(options: "instance"): DevExpress.ui.dxBox;
    dxBox(options: string): any;
    dxBox(options: string, ...params: any[]): any;
    dxBox(options: DevExpress.ui.dxBoxOptions): JQuery;
}
interface JQuery {
    dxButton(): JQuery;
    dxButton(options: "instance"): DevExpress.ui.dxButton;
    dxButton(options: string): any;
    dxButton(options: string, ...params: any[]): any;
    dxButton(options: DevExpress.ui.dxButtonOptions): JQuery;
}
interface JQuery {
    dxButtonGroup(): JQuery;
    dxButtonGroup(options: "instance"): DevExpress.ui.dxButtonGroup;
    dxButtonGroup(options: string): any;
    dxButtonGroup(options: string, ...params: any[]): any;
    dxButtonGroup(options: DevExpress.ui.dxButtonGroupOptions): JQuery;
}
interface JQuery {
    dxCalendar(): JQuery;
    dxCalendar(options: "instance"): DevExpress.ui.dxCalendar;
    dxCalendar(options: string): any;
    dxCalendar(options: string, ...params: any[]): any;
    dxCalendar(options: DevExpress.ui.dxCalendarOptions): JQuery;
}
interface JQuery {
    dxCheckBox(): JQuery;
    dxCheckBox(options: "instance"): DevExpress.ui.dxCheckBox;
    dxCheckBox(options: string): any;
    dxCheckBox(options: string, ...params: any[]): any;
    dxCheckBox(options: DevExpress.ui.dxCheckBoxOptions): JQuery;
}
interface JQuery {
    dxColorBox(): JQuery;
    dxColorBox(options: "instance"): DevExpress.ui.dxColorBox;
    dxColorBox(options: string): any;
    dxColorBox(options: string, ...params: any[]): any;
    dxColorBox(options: DevExpress.ui.dxColorBoxOptions): JQuery;
}
interface JQuery {
    dxContextMenu(): JQuery;
    dxContextMenu(options: "instance"): DevExpress.ui.dxContextMenu;
    dxContextMenu(options: string): any;
    dxContextMenu(options: string, ...params: any[]): any;
    dxContextMenu(options: DevExpress.ui.dxContextMenuOptions): JQuery;
}
interface JQuery {
    dxDataGrid(): JQuery;
    dxDataGrid(options: "instance"): DevExpress.ui.dxDataGrid;
    dxDataGrid(options: string): any;
    dxDataGrid(options: string, ...params: any[]): any;
    dxDataGrid(options: DevExpress.ui.dxDataGridOptions): JQuery;
}
interface JQuery {
    dxDateBox(): JQuery;
    dxDateBox(options: "instance"): DevExpress.ui.dxDateBox;
    dxDateBox(options: string): any;
    dxDateBox(options: string, ...params: any[]): any;
    dxDateBox(options: DevExpress.ui.dxDateBoxOptions): JQuery;
}
interface JQuery {
    dxDeferRendering(): JQuery;
    dxDeferRendering(options: "instance"): DevExpress.ui.dxDeferRendering;
    dxDeferRendering(options: string): any;
    dxDeferRendering(options: string, ...params: any[]): any;
    dxDeferRendering(options: DevExpress.ui.dxDeferRenderingOptions): JQuery;
}
interface JQuery {
    dxDiagram(): JQuery;
    dxDiagram(options: "instance"): DevExpress.ui.dxDiagram;
    dxDiagram(options: string): any;
    dxDiagram(options: string, ...params: any[]): any;
    dxDiagram(options: DevExpress.ui.dxDiagramOptions): JQuery;
}
interface JQuery {
    dxDraggable(): JQuery;
    dxDraggable(options: "instance"): DevExpress.ui.dxDraggable;
    dxDraggable(options: string): any;
    dxDraggable(options: string, ...params: any[]): any;
    dxDraggable(options: DevExpress.ui.dxDraggableOptions): JQuery;
}
interface JQuery {
    dxDrawer(): JQuery;
    dxDrawer(options: "instance"): DevExpress.ui.dxDrawer;
    dxDrawer(options: string): any;
    dxDrawer(options: string, ...params: any[]): any;
    dxDrawer(options: DevExpress.ui.dxDrawerOptions): JQuery;
}
interface JQuery {
    dxDropDownBox(): JQuery;
    dxDropDownBox(options: "instance"): DevExpress.ui.dxDropDownBox;
    dxDropDownBox(options: string): any;
    dxDropDownBox(options: string, ...params: any[]): any;
    dxDropDownBox(options: DevExpress.ui.dxDropDownBoxOptions): JQuery;
}
interface JQuery {
    dxDropDownButton(): JQuery;
    dxDropDownButton(options: "instance"): DevExpress.ui.dxDropDownButton;
    dxDropDownButton(options: string): any;
    dxDropDownButton(options: string, ...params: any[]): any;
    dxDropDownButton(options: DevExpress.ui.dxDropDownButtonOptions): JQuery;
}
interface JQuery {
    dxFileManager(): JQuery;
    dxFileManager(options: "instance"): DevExpress.ui.dxFileManager;
    dxFileManager(options: string): any;
    dxFileManager(options: string, ...params: any[]): any;
    dxFileManager(options: DevExpress.ui.dxFileManagerOptions): JQuery;
}
interface JQuery {
    dxFileUploader(): JQuery;
    dxFileUploader(options: "instance"): DevExpress.ui.dxFileUploader;
    dxFileUploader(options: string): any;
    dxFileUploader(options: string, ...params: any[]): any;
    dxFileUploader(options: DevExpress.ui.dxFileUploaderOptions): JQuery;
}
interface JQuery {
    dxFilterBuilder(): JQuery;
    dxFilterBuilder(options: "instance"): DevExpress.ui.dxFilterBuilder;
    dxFilterBuilder(options: string): any;
    dxFilterBuilder(options: string, ...params: any[]): any;
    dxFilterBuilder(options: DevExpress.ui.dxFilterBuilderOptions): JQuery;
}
interface JQuery {
    dxForm(): JQuery;
    dxForm(options: "instance"): DevExpress.ui.dxForm;
    dxForm(options: string): any;
    dxForm(options: string, ...params: any[]): any;
    dxForm(options: DevExpress.ui.dxFormOptions): JQuery;
}
interface JQuery {
    dxGallery(): JQuery;
    dxGallery(options: "instance"): DevExpress.ui.dxGallery;
    dxGallery(options: string): any;
    dxGallery(options: string, ...params: any[]): any;
    dxGallery(options: DevExpress.ui.dxGalleryOptions): JQuery;
}
interface JQuery {
    dxGantt(): JQuery;
    dxGantt(options: "instance"): DevExpress.ui.dxGantt;
    dxGantt(options: string): any;
    dxGantt(options: string, ...params: any[]): any;
    dxGantt(options: DevExpress.ui.dxGanttOptions): JQuery;
}
interface JQuery {
    dxHtmlEditor(): JQuery;
    dxHtmlEditor(options: "instance"): DevExpress.ui.dxHtmlEditor;
    dxHtmlEditor(options: string): any;
    dxHtmlEditor(options: string, ...params: any[]): any;
    dxHtmlEditor(options: DevExpress.ui.dxHtmlEditorOptions): JQuery;
}
interface JQuery {
    dxList(): JQuery;
    dxList(options: "instance"): DevExpress.ui.dxList;
    dxList(options: string): any;
    dxList(options: string, ...params: any[]): any;
    dxList(options: DevExpress.ui.dxListOptions): JQuery;
}
interface JQuery {
    dxLoadIndicator(): JQuery;
    dxLoadIndicator(options: "instance"): DevExpress.ui.dxLoadIndicator;
    dxLoadIndicator(options: string): any;
    dxLoadIndicator(options: string, ...params: any[]): any;
    dxLoadIndicator(options: DevExpress.ui.dxLoadIndicatorOptions): JQuery;
}
interface JQuery {
    dxLoadPanel(): JQuery;
    dxLoadPanel(options: "instance"): DevExpress.ui.dxLoadPanel;
    dxLoadPanel(options: string): any;
    dxLoadPanel(options: string, ...params: any[]): any;
    dxLoadPanel(options: DevExpress.ui.dxLoadPanelOptions): JQuery;
}
interface JQuery {
    dxLookup(): JQuery;
    dxLookup(options: "instance"): DevExpress.ui.dxLookup;
    dxLookup(options: string): any;
    dxLookup(options: string, ...params: any[]): any;
    dxLookup(options: DevExpress.ui.dxLookupOptions): JQuery;
}
interface JQuery {
    dxMap(): JQuery;
    dxMap(options: "instance"): DevExpress.ui.dxMap;
    dxMap(options: string): any;
    dxMap(options: string, ...params: any[]): any;
    dxMap(options: DevExpress.ui.dxMapOptions): JQuery;
}
interface JQuery {
    dxMenu(): JQuery;
    dxMenu(options: "instance"): DevExpress.ui.dxMenu;
    dxMenu(options: string): any;
    dxMenu(options: string, ...params: any[]): any;
    dxMenu(options: DevExpress.ui.dxMenuOptions): JQuery;
}
interface JQuery {
    dxMultiView(): JQuery;
    dxMultiView(options: "instance"): DevExpress.ui.dxMultiView;
    dxMultiView(options: string): any;
    dxMultiView(options: string, ...params: any[]): any;
    dxMultiView(options: DevExpress.ui.dxMultiViewOptions): JQuery;
}
interface JQuery {
    dxNavBar(): JQuery;
    dxNavBar(options: "instance"): DevExpress.ui.dxNavBar;
    dxNavBar(options: string): any;
    dxNavBar(options: string, ...params: any[]): any;
    dxNavBar(options: DevExpress.ui.dxNavBarOptions): JQuery;
}
interface JQuery {
    dxNumberBox(): JQuery;
    dxNumberBox(options: "instance"): DevExpress.ui.dxNumberBox;
    dxNumberBox(options: string): any;
    dxNumberBox(options: string, ...params: any[]): any;
    dxNumberBox(options: DevExpress.ui.dxNumberBoxOptions): JQuery;
}
interface JQuery {
    dxPivotGrid(): JQuery;
    dxPivotGrid(options: "instance"): DevExpress.ui.dxPivotGrid;
    dxPivotGrid(options: string): any;
    dxPivotGrid(options: string, ...params: any[]): any;
    dxPivotGrid(options: DevExpress.ui.dxPivotGridOptions): JQuery;
}
interface JQuery {
    dxPivotGridFieldChooser(): JQuery;
    dxPivotGridFieldChooser(options: "instance"): DevExpress.ui.dxPivotGridFieldChooser;
    dxPivotGridFieldChooser(options: string): any;
    dxPivotGridFieldChooser(options: string, ...params: any[]): any;
    dxPivotGridFieldChooser(options: DevExpress.ui.dxPivotGridFieldChooserOptions): JQuery;
}
interface JQuery {
    dxPopover(): JQuery;
    dxPopover(options: "instance"): DevExpress.ui.dxPopover;
    dxPopover(options: string): any;
    dxPopover(options: string, ...params: any[]): any;
    dxPopover(options: DevExpress.ui.dxPopoverOptions): JQuery;
}
interface JQuery {
    dxPopup(): JQuery;
    dxPopup(options: "instance"): DevExpress.ui.dxPopup;
    dxPopup(options: string): any;
    dxPopup(options: string, ...params: any[]): any;
    dxPopup(options: DevExpress.ui.dxPopupOptions): JQuery;
}
interface JQuery {
    dxProgressBar(): JQuery;
    dxProgressBar(options: "instance"): DevExpress.ui.dxProgressBar;
    dxProgressBar(options: string): any;
    dxProgressBar(options: string, ...params: any[]): any;
    dxProgressBar(options: DevExpress.ui.dxProgressBarOptions): JQuery;
}
interface JQuery {
    dxRadioGroup(): JQuery;
    dxRadioGroup(options: "instance"): DevExpress.ui.dxRadioGroup;
    dxRadioGroup(options: string): any;
    dxRadioGroup(options: string, ...params: any[]): any;
    dxRadioGroup(options: DevExpress.ui.dxRadioGroupOptions): JQuery;
}
interface JQuery {
    dxRangeSlider(): JQuery;
    dxRangeSlider(options: "instance"): DevExpress.ui.dxRangeSlider;
    dxRangeSlider(options: string): any;
    dxRangeSlider(options: string, ...params: any[]): any;
    dxRangeSlider(options: DevExpress.ui.dxRangeSliderOptions): JQuery;
}
interface JQuery {
    dxRecurrenceEditor(): JQuery;
    dxRecurrenceEditor(options: "instance"): DevExpress.ui.dxRecurrenceEditor;
    dxRecurrenceEditor(options: string): any;
    dxRecurrenceEditor(options: string, ...params: any[]): any;
    dxRecurrenceEditor(options: DevExpress.ui.dxRecurrenceEditorOptions): JQuery;
}
interface JQuery {
    dxResizable(): JQuery;
    dxResizable(options: "instance"): DevExpress.ui.dxResizable;
    dxResizable(options: string): any;
    dxResizable(options: string, ...params: any[]): any;
    dxResizable(options: DevExpress.ui.dxResizableOptions): JQuery;
}
interface JQuery {
    dxResponsiveBox(): JQuery;
    dxResponsiveBox(options: "instance"): DevExpress.ui.dxResponsiveBox;
    dxResponsiveBox(options: string): any;
    dxResponsiveBox(options: string, ...params: any[]): any;
    dxResponsiveBox(options: DevExpress.ui.dxResponsiveBoxOptions): JQuery;
}
interface JQuery {
    dxScheduler(): JQuery;
    dxScheduler(options: "instance"): DevExpress.ui.dxScheduler;
    dxScheduler(options: string): any;
    dxScheduler(options: string, ...params: any[]): any;
    dxScheduler(options: DevExpress.ui.dxSchedulerOptions): JQuery;
}
interface JQuery {
    dxScrollView(): JQuery;
    dxScrollView(options: "instance"): DevExpress.ui.dxScrollView;
    dxScrollView(options: string): any;
    dxScrollView(options: string, ...params: any[]): any;
    dxScrollView(options: DevExpress.ui.dxScrollViewOptions): JQuery;
}
interface JQuery {
    dxSelectBox(): JQuery;
    dxSelectBox(options: "instance"): DevExpress.ui.dxSelectBox;
    dxSelectBox(options: string): any;
    dxSelectBox(options: string, ...params: any[]): any;
    dxSelectBox(options: DevExpress.ui.dxSelectBoxOptions): JQuery;
}
interface JQuery {
    dxSlideOut(): JQuery;
    dxSlideOut(options: "instance"): DevExpress.ui.dxSlideOut;
    dxSlideOut(options: string): any;
    dxSlideOut(options: string, ...params: any[]): any;
    dxSlideOut(options: DevExpress.ui.dxSlideOutOptions): JQuery;
}
interface JQuery {
    dxSlideOutView(): JQuery;
    dxSlideOutView(options: "instance"): DevExpress.ui.dxSlideOutView;
    dxSlideOutView(options: string): any;
    dxSlideOutView(options: string, ...params: any[]): any;
    dxSlideOutView(options: DevExpress.ui.dxSlideOutViewOptions): JQuery;
}
interface JQuery {
    dxSlider(): JQuery;
    dxSlider(options: "instance"): DevExpress.ui.dxSlider;
    dxSlider(options: string): any;
    dxSlider(options: string, ...params: any[]): any;
    dxSlider(options: DevExpress.ui.dxSliderOptions): JQuery;
}
interface JQuery {
    dxSortable(): JQuery;
    dxSortable(options: "instance"): DevExpress.ui.dxSortable;
    dxSortable(options: string): any;
    dxSortable(options: string, ...params: any[]): any;
    dxSortable(options: DevExpress.ui.dxSortableOptions): JQuery;
}
interface JQuery {
    dxSpeedDialAction(): JQuery;
    dxSpeedDialAction(options: "instance"): DevExpress.ui.dxSpeedDialAction;
    dxSpeedDialAction(options: string): any;
    dxSpeedDialAction(options: string, ...params: any[]): any;
    dxSpeedDialAction(options: DevExpress.ui.dxSpeedDialActionOptions): JQuery;
}
interface JQuery {
    dxSwitch(): JQuery;
    dxSwitch(options: "instance"): DevExpress.ui.dxSwitch;
    dxSwitch(options: string): any;
    dxSwitch(options: string, ...params: any[]): any;
    dxSwitch(options: DevExpress.ui.dxSwitchOptions): JQuery;
}
interface JQuery {
    dxTabPanel(): JQuery;
    dxTabPanel(options: "instance"): DevExpress.ui.dxTabPanel;
    dxTabPanel(options: string): any;
    dxTabPanel(options: string, ...params: any[]): any;
    dxTabPanel(options: DevExpress.ui.dxTabPanelOptions): JQuery;
}
interface JQuery {
    dxTabs(): JQuery;
    dxTabs(options: "instance"): DevExpress.ui.dxTabs;
    dxTabs(options: string): any;
    dxTabs(options: string, ...params: any[]): any;
    dxTabs(options: DevExpress.ui.dxTabsOptions): JQuery;
}
interface JQuery {
    dxTagBox(): JQuery;
    dxTagBox(options: "instance"): DevExpress.ui.dxTagBox;
    dxTagBox(options: string): any;
    dxTagBox(options: string, ...params: any[]): any;
    dxTagBox(options: DevExpress.ui.dxTagBoxOptions): JQuery;
}
interface JQuery {
    dxTextArea(): JQuery;
    dxTextArea(options: "instance"): DevExpress.ui.dxTextArea;
    dxTextArea(options: string): any;
    dxTextArea(options: string, ...params: any[]): any;
    dxTextArea(options: DevExpress.ui.dxTextAreaOptions): JQuery;
}
interface JQuery {
    dxTextBox(): JQuery;
    dxTextBox(options: "instance"): DevExpress.ui.dxTextBox;
    dxTextBox(options: string): any;
    dxTextBox(options: string, ...params: any[]): any;
    dxTextBox(options: DevExpress.ui.dxTextBoxOptions): JQuery;
}
interface JQuery {
    dxTileView(): JQuery;
    dxTileView(options: "instance"): DevExpress.ui.dxTileView;
    dxTileView(options: string): any;
    dxTileView(options: string, ...params: any[]): any;
    dxTileView(options: DevExpress.ui.dxTileViewOptions): JQuery;
}
interface JQuery {
    dxToast(): JQuery;
    dxToast(options: "instance"): DevExpress.ui.dxToast;
    dxToast(options: string): any;
    dxToast(options: string, ...params: any[]): any;
    dxToast(options: DevExpress.ui.dxToastOptions): JQuery;
}
interface JQuery {
    dxToolbar(): JQuery;
    dxToolbar(options: "instance"): DevExpress.ui.dxToolbar;
    dxToolbar(options: string): any;
    dxToolbar(options: string, ...params: any[]): any;
    dxToolbar(options: DevExpress.ui.dxToolbarOptions): JQuery;
}
interface JQuery {
    dxTooltip(): JQuery;
    dxTooltip(options: "instance"): DevExpress.ui.dxTooltip;
    dxTooltip(options: string): any;
    dxTooltip(options: string, ...params: any[]): any;
    dxTooltip(options: DevExpress.ui.dxTooltipOptions): JQuery;
}
interface JQuery {
    dxTreeList(): JQuery;
    dxTreeList(options: "instance"): DevExpress.ui.dxTreeList;
    dxTreeList(options: string): any;
    dxTreeList(options: string, ...params: any[]): any;
    dxTreeList(options: DevExpress.ui.dxTreeListOptions): JQuery;
}
interface JQuery {
    dxTreeView(): JQuery;
    dxTreeView(options: "instance"): DevExpress.ui.dxTreeView;
    dxTreeView(options: string): any;
    dxTreeView(options: string, ...params: any[]): any;
    dxTreeView(options: DevExpress.ui.dxTreeViewOptions): JQuery;
}
interface JQuery {
    dxValidationGroup(): JQuery;
    dxValidationGroup(options: "instance"): DevExpress.ui.dxValidationGroup;
    dxValidationGroup(options: string): any;
    dxValidationGroup(options: string, ...params: any[]): any;
    dxValidationGroup(options: DevExpress.ui.dxValidationGroupOptions): JQuery;
}
interface JQuery {
    dxValidationSummary(): JQuery;
    dxValidationSummary(options: "instance"): DevExpress.ui.dxValidationSummary;
    dxValidationSummary(options: string): any;
    dxValidationSummary(options: string, ...params: any[]): any;
    dxValidationSummary(options: DevExpress.ui.dxValidationSummaryOptions): JQuery;
}
interface JQuery {
    dxValidator(): JQuery;
    dxValidator(options: "instance"): DevExpress.ui.dxValidator;
    dxValidator(options: string): any;
    dxValidator(options: string, ...params: any[]): any;
    dxValidator(options: DevExpress.ui.dxValidatorOptions): JQuery;
}
interface JQuery {
    dxBarGauge(): JQuery;
    dxBarGauge(options: "instance"): DevExpress.viz.dxBarGauge;
    dxBarGauge(options: string): any;
    dxBarGauge(options: string, ...params: any[]): any;
    dxBarGauge(options: DevExpress.viz.dxBarGaugeOptions): JQuery;
}
interface JQuery {
    dxBullet(): JQuery;
    dxBullet(options: "instance"): DevExpress.viz.dxBullet;
    dxBullet(options: string): any;
    dxBullet(options: string, ...params: any[]): any;
    dxBullet(options: DevExpress.viz.dxBulletOptions): JQuery;
}
interface JQuery {
    dxChart(): JQuery;
    dxChart(options: "instance"): DevExpress.viz.dxChart;
    dxChart(options: string): any;
    dxChart(options: string, ...params: any[]): any;
    dxChart(options: DevExpress.viz.dxChartOptions): JQuery;
}
interface JQuery {
    dxCircularGauge(): JQuery;
    dxCircularGauge(options: "instance"): DevExpress.viz.dxCircularGauge;
    dxCircularGauge(options: string): any;
    dxCircularGauge(options: string, ...params: any[]): any;
    dxCircularGauge(options: DevExpress.viz.dxCircularGaugeOptions): JQuery;
}
interface JQuery {
    dxFunnel(): JQuery;
    dxFunnel(options: "instance"): DevExpress.viz.dxFunnel;
    dxFunnel(options: string): any;
    dxFunnel(options: string, ...params: any[]): any;
    dxFunnel(options: DevExpress.viz.dxFunnelOptions): JQuery;
}
interface JQuery {
    dxLinearGauge(): JQuery;
    dxLinearGauge(options: "instance"): DevExpress.viz.dxLinearGauge;
    dxLinearGauge(options: string): any;
    dxLinearGauge(options: string, ...params: any[]): any;
    dxLinearGauge(options: DevExpress.viz.dxLinearGaugeOptions): JQuery;
}
interface JQuery {
    dxPieChart(): JQuery;
    dxPieChart(options: "instance"): DevExpress.viz.dxPieChart;
    dxPieChart(options: string): any;
    dxPieChart(options: string, ...params: any[]): any;
    dxPieChart(options: DevExpress.viz.dxPieChartOptions): JQuery;
}
interface JQuery {
    dxPolarChart(): JQuery;
    dxPolarChart(options: "instance"): DevExpress.viz.dxPolarChart;
    dxPolarChart(options: string): any;
    dxPolarChart(options: string, ...params: any[]): any;
    dxPolarChart(options: DevExpress.viz.dxPolarChartOptions): JQuery;
}
interface JQuery {
    dxRangeSelector(): JQuery;
    dxRangeSelector(options: "instance"): DevExpress.viz.dxRangeSelector;
    dxRangeSelector(options: string): any;
    dxRangeSelector(options: string, ...params: any[]): any;
    dxRangeSelector(options: DevExpress.viz.dxRangeSelectorOptions): JQuery;
}
interface JQuery {
    dxSankey(): JQuery;
    dxSankey(options: "instance"): DevExpress.viz.dxSankey;
    dxSankey(options: string): any;
    dxSankey(options: string, ...params: any[]): any;
    dxSankey(options: DevExpress.viz.dxSankeyOptions): JQuery;
}
interface JQuery {
    dxSparkline(): JQuery;
    dxSparkline(options: "instance"): DevExpress.viz.dxSparkline;
    dxSparkline(options: string): any;
    dxSparkline(options: string, ...params: any[]): any;
    dxSparkline(options: DevExpress.viz.dxSparklineOptions): JQuery;
}
interface JQuery {
    dxTreeMap(): JQuery;
    dxTreeMap(options: "instance"): DevExpress.viz.dxTreeMap;
    dxTreeMap(options: string): any;
    dxTreeMap(options: string, ...params: any[]): any;
    dxTreeMap(options: DevExpress.viz.dxTreeMapOptions): JQuery;
}
interface JQuery {
    dxVectorMap(): JQuery;
    dxVectorMap(options: "instance"): DevExpress.viz.dxVectorMap;
    dxVectorMap(options: string): any;
    dxVectorMap(options: string, ...params: any[]): any;
    dxVectorMap(options: DevExpress.viz.dxVectorMapOptions): JQuery;
}
/* #EndJQueryAugmentation */
declare module DevExpress {
    /**
     * 
     */
    export interface ComponentOptions<T = Component> {
        /**
         * A function that is executed before the UI component is disposed of.
         */
        onDisposing?: ((e: { component?: T }) => any);
        /**
         * A function used in JavaScript frameworks to save the UI component instance.
         */
        onInitialized?: ((e: { component?: T, element?: DevExpress.core.dxElement }) => any);
        /**
         * A function that is executed after a UI component property is changed.
         */
        onOptionChanged?: ((e: { component?: T, name?: string, fullName?: string, value?: any }) => any);
    }
    /**
     * A base class for all components and UI components.
     */
    export class Component {
        constructor(options?: ComponentOptions);
        /**
         * Prevents the UI component from refreshing until the endUpdate() method is called.
         */
        beginUpdate(): void;
        /**
         * Refreshes the UI component after a call of the beginUpdate() method.
         */
        endUpdate(): void;
        /**
         * Gets the UI component's instance. Use it to access other methods of the UI component.
         */
        instance(): this;
        /**
         * Detaches all event handlers from a single event.
         */
        off(eventName: string): this;
        /**
         * Detaches a particular event handler from a single event.
         */
        off(eventName: string, eventHandler: Function): this;
        /**
         * Subscribes to an event.
         */
        on(eventName: string, eventHandler: Function): this;
        /**
         * Subscribes to events.
         */
        on(events: any): this;
        /**
         * Gets all UI component properties.
         */
        option(): any;
        /**
         * Gets the value of a single property.
         */
        option(optionName: string): any;
        /**
         * Updates the value of a single property.
         */
        option(optionName: string, optionValue: any): void;
        /**
         * Updates the values of several properties.
         */
        option(options: any): void;
        /**
         * Resets an property to its default value.
         */
        resetOption(optionName: string): void;
    }
    /**
     * 
     */
    export interface DOMComponentOptions<T = DOMComponent> extends ComponentOptions<T> {
        /**
         * 
         */
        bindingOptions?: any;
        /**
         * Specifies the global attributes to be attached to the UI component's container element.
         */
        elementAttr?: any;
        /**
         * Specifies the UI component's height.
         */
        height?: number | string | (() => number | string);
        /**
         * A function that is executed before the UI component is disposed of.
         */
        onDisposing?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any }) => any);
        /**
         * A function that is executed after a UI component property is changed.
         */
        onOptionChanged?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, name?: string, fullName?: string, value?: any }) => any);
        /**
         * Switches the UI component to a right-to-left representation.
         */
        rtlEnabled?: boolean;
        /**
         * Specifies the UI component's width.
         */
        width?: number | string | (() => number | string);
    }
    /**
     * A base class for all components.
     */
    export class DOMComponent extends Component {
        constructor(element: Element | JQuery, options?: DOMComponentOptions);
        /**
         * Specifies the device-dependent default configuration properties for this component.
         */
        static defaultOptions(rule: { device?: Device | Array<Device> | Function, options?: any }): void;
        /**
         * Disposes of all the resources allocated to the widget instance.
         */
        dispose(): void;
        /**
         * Gets the root UI component element.
         */
        element(): DevExpress.core.dxElement;
        /**
         * Gets the instance of a UI component found using its DOM node.
         */
        static getInstance(element: Element | JQuery): DOMComponent;
    }
    /**
     * 
     */
    export class DataHelperMixin {
        /**
         * Gets the DataSource instance.
         */
        getDataSource(): DevExpress.data.DataSource;
    }
    /**
     * The device object defines the device on which the application is running.
     */
    export interface Device {
        /**
         * Indicates whether or not the device platform is Android.
         */
        android?: boolean;
        /**
         * Specifies the type of the device on which the application is running.
         */
        deviceType?: 'phone' | 'tablet' | 'desktop';
        /**
         * Indicates whether or not the device platform is generic, which means that the application will look and behave according to a generic 'light' or 'dark' theme.
         */
        generic?: boolean;
        /**
         * Specifies a performance grade of the current device.
         */
        grade?: 'A' | 'B' | 'C';
        /**
         * Indicates whether or not the device platform is iOS.
         */
        ios?: boolean;
        /**
         * Indicates whether or not the device type is 'phone'.
         */
        phone?: boolean;
        /**
         * Specifies the platform of the device on which the application is running.
         */
        platform?: 'android' | 'ios' | 'generic';
        /**
         * Indicates whether or not the device type is 'tablet'.
         */
        tablet?: boolean;
        /**
         * Specifies an array with the major and minor versions of the device platform.
         */
        version?: Array<number>;
    }
    /**
     * An object that serves as a namespace for the methods and events specifying information on the current device.
     */
    export class DevicesObject {
        constructor(options: { window?: Window });
        /**
         * Gets information on the current device.
         */
        current(): Device;
        /**
         * Overrides actual device information to force the application to operate as if it was running on a specified device.
         */
        current(deviceName: string | Device): void;
        /**
         * 
         */
        off(eventName: string): this;
        /**
         * 
         */
        off(eventName: string, eventHandler: Function): this;
        /**
         * 
         */
        on(eventName: string, eventHandler: Function): this;
        /**
         * 
         */
        on(events: any): this;
        /**
         * Returns the current device orientation.
         */
        orientation(): string;
        /**
         * Returns real information about the current device regardless of the value passed to the DevExpress.devices.current(deviceName) method.
         */
        real(): Device;
    }
    /**
     * The EndpointSelector is an object for managing OData endpoints in your application.
     */
    export class EndpointSelector {
        constructor(options: any);
        /**
         * Gets an endpoint with a specific key.
         */
        urlFor(key: string): string;
    }
    /**
     * The manager that performs several specified animations at a time.
     */
    export class TransitionExecutor {
        /**
         * Registers the set of elements that should be animated as 'entering' using the specified animation configuration.
         */
        enter(elements: JQuery, animation: animationConfig | string): void;
        /**
         * Registers a set of elements that should be animated as 'leaving' using the specified animation configuration.
         */
        leave(elements: JQuery, animation: animationConfig | string): void;
        /**
         * Deletes all the animations registered in the Transition Executor by using the enter(elements, animation) and leave(elements, animation) methods.
         */
        reset(): void;
        /**
         * Starts all the animations registered using the enter(elements, animation) and leave(elements, animation) methods beforehand.
         */
        start(): Promise<void> & JQueryPromise<void>;
        /**
         * Stops all started animations.
         */
        stop(): void;
    }
    /**
     * Defines animation properties.
     */
    export interface animationConfig {
        /**
         * A function called after animation is completed.
         */
        complete?: (($element: DevExpress.core.dxElement, config: any) => any);
        /**
         * A number specifying wait time before animation execution.
         */
        delay?: number;
        /**
         * Specifies the animation direction for the 'slideIn' and 'slideOut' animation types.
         */
        direction?: 'bottom' | 'left' | 'right' | 'top';
        /**
         * A number specifying the time in milliseconds spent on animation.
         */
        duration?: number;
        /**
         * A string specifying the easing function for animation.
         */
        easing?: string;
        /**
         * Specifies the initial animation state.
         */
        from?: number | string | any;
        /**
         * A number specifying the time period to wait before the animation of the next stagger item starts.
         */
        staggerDelay?: number;
        /**
         * A function called before animation is started.
         */
        start?: (($element: DevExpress.core.dxElement, config: any) => any);
        /**
         * Specifies a final animation state.
         */
        to?: number | string | any;
        /**
         * A string value specifying the animation type.
         */
        type?: 'css' | 'fade' | 'fadeIn' | 'fadeOut' | 'pop' | 'slide' | 'slideIn' | 'slideOut';
    }
    /**
     * A repository of animations.
     */
    export class animationPresets {
        /**
         * Applies the changes made in the animation repository.
         */
        applyChanges(): void;
        /**
         * Removes all animations from the repository.
         */
        clear(): void;
        /**
         * Deletes an animation with a specific name.
         */
        clear(name: string): void;
        /**
         * Gets the configuration of an animation with a specific name.
         */
        getPreset(name: string): any;
        /**
         * Registers predefined animations in the animation repository.
         */
        registerDefaultPresets(): void;
        /**
         * Adds an animation with a specific name to the animation repository.
         */
        registerPreset(name: string, config: { animation?: animationConfig, device?: Device }): void;
        /**
         * Deletes all custom animations.
         */
        resetToDefaults(): void;
    }
    /**
     * Gets the current global configuration.
     */
    export function config(): globalConfig;
    /**
     * Configures your application before its launch.
     */
    export function config(config: globalConfig): void;
    /**
     * 
     */
    export var devices: DevicesObject;
    /**
     * A time zone object.
     */
    export interface dxSchedulerTimeZone {
        /**
         * A time zone text string from the IANA database.
         */
        id: string;
        /**
         * A GMT offset.
         */
        offset: number;
        /**
         * A time zone in the following format: `(GMT Â±[hh]:[mm]) [id]`.
         */
        title: string;
    }
    /**
     * Specifies settings that affect all DevExtreme UI components.
     */
    export interface globalConfig {
        /**
         * A decimal separator. No longer applies.
         * @deprecated 
         */
        decimalSeparator?: string;
        /**
         * The default currency. Accepts a 3-letter ISO 4217 code.
         */
        defaultCurrency?: string;
        /**
         * Specifies how editors' text fields are styled in your application.
         */
        editorStylingMode?: 'outlined' | 'underlined' | 'filled';
        /**
         * Configures a Floating Action Button (FAB) that emits a stack of related actions (speed dial).
         */
        floatingActionButtonConfig?: { closeIcon?: string, direction?: 'auto' | 'up' | 'down', icon?: string, label?: string, maxSpeedDialActionCount?: number, position?: 'bottom' | 'center' | 'left' | 'left bottom' | 'left top' | 'right' | 'right bottom' | 'right top' | 'top' | positionConfig | Function, shading?: boolean };
        /**
         * Specifies whether dates are parsed and serialized according to the ISO 8601 standard in all browsers.
         */
        forceIsoDateParsing?: boolean;
        /**
         * Specifies whether to convert string values to lowercase in filter and search requests to OData services. Applies to the following operations: 'startswith', 'endswith', 'contains', and 'notcontains'.
         */
        oDataFilterToLower?: boolean;
        /**
         * Specifies whether the UI components support a right-to-left representation. Available for individual UI components as well.
         */
        rtlEnabled?: boolean;
        /**
         * The decimal separator that is used when submitting a value to the server.
         */
        serverDecimalSeparator?: string;
        /**
         * A group separator. No longer applies.
         * @deprecated 
         */
        thousandsSeparator?: string;
        /**
         * 
         */
        useLegacyStoreResult?: boolean;
        /**
         * 
         */
        useLegacyVisibleIndex?: boolean;
    }
    /**
     * Hides the last displayed overlay UI component.
     */
    export function hideTopOverlay(): boolean;
    /**
     * An object that serves as a namespace for the methods that are used to localize an application.
     */
    export class localization {
        /**
         * Converts a Date object to a string using the specified format.
         */
        static formatDate(value: Date, format: DevExpress.ui.format): string;
        /**
         * Substitutes the provided value(s) for placeholders in a message that the key specifies.
         */
        static formatMessage(key: string, value: string | Array<string>): string;
        /**
         * Converts a numeric value to a string using the specified format.
         */
        static formatNumber(value: number, format: DevExpress.ui.format): string;
        /**
         * Loads localized messages.
         */
        static loadMessages(messages: any): void;
        /**
         * Gets the current locale identifier.
         */
        static locale(): string;
        /**
         * Sets the current locale identifier.
         */
        static locale(locale: string): void;
        /**
         * Parses a string into a Date object.
         */
        static parseDate(text: string, format: DevExpress.ui.format): Date;
        /**
         * Parses a string into a numeric value.
         */
        static parseNumber(text: string, format: DevExpress.ui.format): number;
    }
    /**
     * Configures the position of an overlay element.
     */
    export interface positionConfig {
        /**
         * Specifies the target element's side or corner where the overlay element should be positioned.
         */
        at?: 'bottom' | 'center' | 'left' | 'left bottom' | 'left top' | 'right' | 'right bottom' | 'right top' | 'top' | { x?: 'center' | 'left' | 'right', y?: 'bottom' | 'center' | 'top' };
        /**
         * A boundary element in which the overlay element must be positioned.
         */
        boundary?: string | Element | JQuery | Window;
        /**
         * Specifies the offset of boundaries from the boundary element.
         */
        boundaryOffset?: string | { x?: number, y?: number };
        /**
         * Specifies how to resolve collisions - when the overlay element exceeds the boundary element.
         */
        collision?: 'fit' | 'fit flip' | 'fit flipfit' | 'fit none' | 'flip' | 'flip fit' | 'flip none' | 'flipfit' | 'flipfit fit' | 'flipfit none' | 'none' | 'none fit' | 'none flip' | 'none flipfit' | { x?: 'fit' | 'flip' | 'flipfit' | 'none', y?: 'fit' | 'flip' | 'flipfit' | 'none' };
        /**
         * Specifies the overlay element's side or corner to align with a target element.
         */
        my?: 'bottom' | 'center' | 'left' | 'left bottom' | 'left top' | 'right' | 'right bottom' | 'right top' | 'top' | { x?: 'center' | 'left' | 'right', y?: 'bottom' | 'center' | 'top' };
        /**
         * The target element relative to which the overlay element should be positioned.
         */
        of?: string | Element | JQuery | Window;
        /**
         * Specifies the overlay element's offset from a specified position.
         */
        offset?: string | { x?: number, y?: number };
    }
    /**
     * Registers a new component in the DevExpress.ui namespace.
     */
    export function registerComponent(name: string, componentClass: any): void;
    /**
     * Registers a new component in the specified namespace.
     */
    export function registerComponent(name: string, namespace: any, componentClass: any): void;
    /**
     * Sets a supported template engine to use when using jQuery.
     */
    export function setTemplateEngine(templateEngineName: string): void;
    /**
     * Sets custom functions that compile and render templates.
     */
    export function setTemplateEngine(templateEngineOptions: { compile?: Function, render?: Function }): void;
    /**
     * An object that serves as a namespace for DevExtreme UI components as well as for methods implementing UI logic in DevExtreme sites/applications.
     */
    export class ui {
        /**
         * Creates a toast message.
         */
        static notify(message: string, type?: string, displayTime?: number): void;
        /**
         * Creates a toast message.
         */
        static notify(options: any, type?: string, displayTime?: number): void;
        /**
         * Repaints the Floating Action Button.
         */
        static repaintFloatingActionButton(): void;
        /**
         * Sets a template engine.
         */
        static setTemplateEngine(templateEngineName: string): void;
        /**
         * Sets a custom template engine defined via custom compile and render functions.
         */
        static setTemplateEngine(templateEngineOptions: { compile?: Function, render?: Function }): void;
    }
    /**
     * An object that serves as a namespace for the methods required to perform validation.
     */
    export class validationEngine {
        /**
         * Gets the default validation group.
         */
        static getGroupConfig(): any;
        /**
         * Gets a validation group with a specific key.
         */
        static getGroupConfig(group: string | any): any;
        /**
         * Registers all the Validator objects extending fields of the specified ViewModel.
         */
        static registerModelForValidation(model: any): void;
        /**
         * Resets the values and validation result of the editors that belong to the default validation group.
         */
        static resetGroup(): void;
        /**
         * Resets the values and validation result of the editors that belong to the specified validation group.
         */
        static resetGroup(group: string | any): void;
        /**
         * Unregisters all the Validator objects extending fields of the specified ViewModel.
         */
        static unregisterModelForValidation(model: any): void;
        /**
         * Validates editors from the default validation group.
         */
        static validateGroup(): DevExpress.ui.dxValidationGroupResult;
        /**
         * Validates editors from a specific validation group.
         */
        static validateGroup(group: string | any): DevExpress.ui.dxValidationGroupResult;
        /**
         * Validates a view model.
         */
        static validateModel(model: any): any;
    }
    /**
     * An object that serves as a namespace for DevExtreme Data Visualization Widgets.
     */
    export class viz {
        /**
         * Gets the current palette's name.
         */
        static currentPalette(): string;
        /**
         * Changes the current palette for all data visualization UI components on the page.
         */
        static currentPalette(paletteName: string): void;
        /**
         * Gets the current theme's name.
         */
        static currentTheme(): string;
        /**
         * Changes the current theme for all data visualization UI components on the page. The color scheme is defined separately.
         */
        static currentTheme(platform: string, colorScheme: string): void;
        /**
         * Changes the current theme for all data visualization UI components on the page.
         */
        static currentTheme(theme: string): void;
        /**
         * Allows you to export UI components using their SVG markup.
         */
        static exportFromMarkup(markup: string, options: { fileName?: string, format?: string, backgroundColor?: string, proxyUrl?: string, width?: number, height?: number, onExporting?: Function, onExported?: Function, onFileSaving?: Function, margin?: number, svgToCanvas?: Function }): void;
        /**
         * Exports one or several UI components to PNG.
         */
        static exportWidgets(widgetInstances: Array<Array<DOMComponent>>): void;
        /**
         * Exports one or several UI components.
         */
        static exportWidgets(widgetInstances: Array<Array<DOMComponent>>, options: { fileName?: string, format?: 'GIF' | 'JPEG' | 'PDF' | 'PNG' | 'SVG', backgroundColor?: string, margin?: number, gridLayout?: boolean, verticalAlignment?: 'bottom' | 'center' | 'top', horizontalAlignment?: 'center' | 'left' | 'right', proxyUrl?: string, onExporting?: Function, onExported?: Function, onFileSaving?: Function, svgToCanvas?: Function }): void;
        /**
         * Returns a subset of palette colors.
         */
        static generateColors(palette: 'Bright' | 'Harmony Light' | 'Ocean' | 'Pastel' | 'Soft' | 'Soft Pastel' | 'Vintage' | 'Violet' | 'Carmine' | 'Dark Moon' | 'Dark Violet' | 'Green Mist' | 'Soft Blue' | 'Material' | 'Office' | Array<string>, count: number, options: { paletteExtensionMode?: 'alternate' | 'blend' | 'extrapolate', baseColorSet?: 'simpleSet' | 'indicatingSet' | 'gradientSet' }): Array<string>;
        /**
         * Gets the SVG markup of specific UI components for their subsequent export.
         */
        static getMarkup(widgetInstances: Array<DOMComponent>): string;
        /**
         * Gets the color sets of a predefined or registered palette.
         */
        static getPalette(paletteName: string): any;
        /**
         * Gets a predefined or registered theme's settings.
         */
        static getTheme(theme: string): any;
        /**
         * The method to be called every time the active entry in the browser history is modified without reloading the current page.
         */
        static refreshPaths(): void;
        /**
         * Refreshes the current theme and palette in all data visualization UI components on the page.
         */
        static refreshTheme(): void;
        /**
         * Registers a new palette.
         */
        static registerPalette(paletteName: string, palette: any): void;
        /**
         * Registers a new theme based on the existing one.
         */
        static registerTheme(customTheme: any, baseTheme: string): void;
    }
}
declare module DevExpress.core {
    /**
     * 
     */
    export type dxElement = HTMLElement & JQuery;
    /**
     * 
     */
    export type dxSVGElement = SVGElement & JQuery;
    /**
     * 
     */
    export interface dxTemplateOptions {
        /**
         * Specifies the name of the template.
         */
        name?: string;
    }
    /**
     * A custom template's markup.
     */
    export class dxTemplate {
        constructor(options?: dxTemplateOptions)
    }
    /**
     * A template notation used to specify templates for UI component elements.
     */
    export type template = string | Function | Element | JQuery;
}
declare module DevExpress.data {
    /**
     * 
     */
    export interface ArrayStoreOptions<T = ArrayStore> extends StoreOptions<T> {
        /**
         * Specifies the store's associated array.
         */
        data?: Array<any>;
    }
    /**
     * The ArrayStore is a store that provides an interface for loading and editing an in-memory array and handling related events.
     */
    export class ArrayStore extends Store {
        constructor(options?: ArrayStoreOptions)
        /**
         * Clears all the ArrayStore's associated data.
         */
        clear(): void;
        /**
         * Creates a Query for the underlying array.
         */
        createQuery(): any;
    }
    /**
     * 
     */
    export interface CustomStoreOptions extends StoreOptions<CustomStore> {
        /**
         * Specifies a custom implementation of the byKey(key) method.
         */
        byKey?: ((key: any | string | number) => Promise<any> | JQueryPromise<any>);
        /**
         * Specifies whether raw data should be saved in the cache. Applies only if loadMode is 'raw'.
         */
        cacheRawData?: boolean;
        /**
         * Specifies a custom implementation of the insert(values) method.
         */
        insert?: ((values: any) => Promise<any> | JQueryPromise<any>);
        /**
         * Specifies a custom implementation of the load(options) method.
         */
        load?: ((options: LoadOptions) => Promise<any> | JQueryPromise<any> | Array<any>);
        /**
         * Specifies how data returned by the load function is treated.
         */
        loadMode?: 'processed' | 'raw';
        /**
         * Specifies a custom implementation of the remove(key) method.
         */
        remove?: ((key: any | string | number) => Promise<void> | JQueryPromise<void>);
        /**
         * Specifies a custom implementation of the totalCount(options) method.
         */
        totalCount?: ((loadOptions: { filter?: any, group?: any }) => Promise<number> | JQueryPromise<number>);
        /**
         * Specifies a custom implementation of the update(key, values) method.
         */
        update?: ((key: any | string | number, values: any) => Promise<any> | JQueryPromise<any>);
        /**
         * Specifies whether the store combines the search and filter expressions. Defaults to true if the loadMode is 'raw' and false if it is 'processed'.
         */
        useDefaultSearch?: boolean;
    }
    /**
     * The CustomStore enables you to implement custom data access logic for consuming data from any source.
     */
    export class CustomStore extends Store {
        constructor(options?: CustomStoreOptions)
        /**
         * Deletes data from the cache. Takes effect only if the cacheRawData property is true.
         */
        clearRawDataCache(): void;
    }
    /**
     * 
     */
    export interface DataSourceOptions {
        /**
         * Custom parameters that should be passed to an OData service with the load query. Available only for the ODataStore.
         */
        customQueryParams?: any;
        /**
         * Specifies the navigation properties to be loaded with the OData entity. Available only for the ODataStore.
         */
        expand?: Array<string> | string;
        /**
         * Specifies data filtering conditions.
         */
        filter?: string | Array<any> | Function;
        /**
         * Specifies data grouping properties.
         */
        group?: string | Array<any> | Function;
        /**
         * Specifies an item mapping function.
         */
        map?: ((dataItem: any) => any);
        /**
         * A function that is executed after data is loaded.
         */
        onChanged?: ((e: { changes?: Array<any> }) => any);
        /**
         * A function that is executed when data loading fails.
         */
        onLoadError?: ((error: { message?: string }) => any);
        /**
         * A function that is executed when the data loading status changes.
         */
        onLoadingChanged?: ((isLoading: boolean) => any);
        /**
         * Specifies the maximum number of data items per page. Applies only if paginate is true.
         */
        pageSize?: number;
        /**
         * Specifies whether the DataSource loads data items by pages or all at once. Defaults to false if group is set; otherwise, true.
         */
        paginate?: boolean;
        /**
         * Specifies a post processing function.
         */
        postProcess?: ((data: Array<any>) => Array<any>);
        /**
         * Specifies the period (in milliseconds) when changes are aggregated before pushing them to the DataSource.
         */
        pushAggregationTimeout?: number;
        /**
         * Specifies whether the DataSource requests the total count of data items in the storage.
         */
        requireTotalCount?: boolean;
        /**
         * Specifies whether to reapply sorting, filtering, grouping, and other data processing operations after receiving a push.
         */
        reshapeOnPush?: boolean;
        /**
         * Specifies the fields to search.
         */
        searchExpr?: string | Function | Array<string | Function>;
        /**
         * Specifies the comparison operation used in searching. The following values are accepted: '=', '<>', '>', '>=', '<', '<=', 'startswith', 'endswith', 'contains', 'notcontains'.
         */
        searchOperation?: string;
        /**
         * Specifies the value to which the search expression is compared.
         */
        searchValue?: any;
        /**
         * Specifies the fields to select from data objects.
         */
        select?: string | Array<any> | Function;
        /**
         * Specifies data sorting properties.
         */
        sort?: string | Array<any> | Function;
        /**
         * Configures the store underlying the DataSource.
         */
        store?: Store | StoreOptions | Array<any> | any;
    }
    /**
     * The DataSource is an object that provides an API for processing data from an underlying store.
     */
    export class DataSource {
        constructor(data: Array<any>);
        constructor(options: CustomStoreOptions | DataSourceOptions);
        constructor(store: Store);
        constructor(url: string);
        /**
         * Cancels the load operation with a specific identifier.
         */
        cancel(): boolean;
        /**
         * Disposes of all the resources allocated to the DataSource instance.
         */
        dispose(): void;
        /**
         * Gets the filter property's value.
         */
        filter(): any;
        /**
         * Sets the filter property's value.
         */
        filter(filterExpr: any): void;
        /**
         * Gets the group property's value.
         */
        group(): any;
        /**
         * Sets the group property's value.
         */
        group(groupExpr: any): void;
        /**
         * Checks whether the count of items on the current page is less than the pageSize. Takes effect only with enabled paging.
         */
        isLastPage(): boolean;
        /**
         * Checks whether data is loaded in the DataSource.
         */
        isLoaded(): boolean;
        /**
         * Checks whether data is being loaded in the DataSource.
         */
        isLoading(): boolean;
        /**
         * Gets an array of data items on the current page.
         */
        items(): Array<any>;
        /**
         * Gets the value of the underlying store's key property.
         */
        key(): any & string & number;
        /**
         * Starts loading data.
         */
        load(): Promise<any> & JQueryPromise<any>;
        /**
         * Gets an object with current data processing settings.
         */
        loadOptions(): any;
        /**
         * 
         */
        off(eventName: string): this;
        /**
         * 
         */
        off(eventName: string, eventHandler: Function): this;
        /**
         * 
         */
        on(eventName: string, eventHandler: Function): this;
        /**
         * 
         */
        on(events: any): this;
        /**
         * Gets the current page index.
         */
        pageIndex(): number;
        /**
         * Sets the index of the page that should be loaded on the next load() method call.
         */
        pageIndex(newIndex: number): void;
        /**
         * Gets the page size.
         */
        pageSize(): number;
        /**
         * Sets the page size.
         */
        pageSize(value: number): void;
        /**
         * Gets the paginate property's value.
         */
        paginate(): boolean;
        /**
         * Sets the paginate property's value.
         */
        paginate(value: boolean): void;
        /**
         * Clears currently loaded DataSource items and calls the load() method.
         */
        reload(): Promise<any> & JQueryPromise<any>;
        /**
         * Gets the requireTotalCount property's value.
         */
        requireTotalCount(): boolean;
        /**
         * Sets the requireTotalCount property's value.
         */
        requireTotalCount(value: boolean): void;
        /**
         * Gets the searchExpr property's value.
         */
        searchExpr(): string & Function & Array<string | Function>;
        /**
         * Sets the searchExpr property's value.
         */
        searchExpr(expr: string | Function | Array<string | Function>): void;
        /**
         * Gets the searchOperation property's value.
         */
        searchOperation(): string;
        /**
         * Sets the searchOperation property's value.
         */
        searchOperation(op: string): void;
        /**
         * Gets the searchValue property's value.
         */
        searchValue(): any;
        /**
         * Sets the searchValue property's value.
         */
        searchValue(value: any): void;
        /**
         * Gets the select property's value.
         */
        select(): any;
        /**
         * Sets the select property's value.
         */
        select(expr: any): void;
        /**
         * Gets the sort property's value.
         */
        sort(): any;
        /**
         * Sets the sort property's value.
         */
        sort(sortExpr: any): void;
        /**
         * Gets the instance of the store underlying the DataSource.
         */
        store(): any;
        /**
         * Gets the number of data items in the store after the last load() operation without paging. Takes effect only if requireTotalCount is true
         */
        totalCount(): number;
    }
    /**
     * The EdmLiteral is an object for working with primitive data types from the OData's Abstract Type System that are not supported in JavaScript.
     */
    export class EdmLiteral {
        constructor(value: string);
        /**
         * Gets the EdmLiteral's value converted to a string.
         */
        valueOf(): string;
    }
    /**
     * The Guid is an object used to generate and contain a GUID.
     */
    export class Guid {
        constructor();
        constructor(value: string);
        /**
         * Gets the GUID. Works identically to the valueOf() method.
         */
        toString(): string;
        /**
         * Gets the GUID. Works identically to the toString() method.
         */
        valueOf(): string;
    }
    /**
     * This section describes the loadOptions object's fields.
     */
    export interface LoadOptions {
        /**
         * An object for storing additional settings that should be sent to the server. Relevant to the ODataStore only.
         */
        customQueryParams?: any;
        /**
         * An array of strings that represent the names of navigation properties to be loaded simultaneously with the ODataStore.
         */
        expand?: any;
        /**
         * A filter expression.
         */
        filter?: any;
        /**
         * A group expression.
         */
        group?: any;
        /**
         * A group summary expression. Used with the group setting.
         */
        groupSummary?: any;
        /**
         * The IDs of the rows being expanded. Relevant only when the CustomStore is used in the TreeList UI component.
         */
        parentIds?: Array<any>;
        /**
         * Indicates whether a top-level group count is required. Used in conjunction with the filter, take, skip, requireTotalCount, and group settings.
         */
        requireGroupCount?: boolean;
        /**
         * Indicates whether the total count of data objects is needed.
         */
        requireTotalCount?: boolean;
        /**
         * A data field or expression whose value is compared to the search value.
         */
        searchExpr?: string | Function | Array<string | Function>;
        /**
         * A comparison operation. Can have one of the following values: '=', '<>', '>', '>=', '<', '<=', 'startswith', 'endswith', 'contains', 'notcontains', 'isblank' and 'isnotblank'.
         */
        searchOperation?: string;
        /**
         * The current search value.
         */
        searchValue?: any;
        /**
         * A select expression.
         */
        select?: any;
        /**
         * The number of data objects to be skipped from the result set's start. In conjunction with take, used to implement paging.
         */
        skip?: number;
        /**
         * A sort expression.
         */
        sort?: any;
        /**
         * The number of data objects to be loaded. In conjunction with skip, used to implement paging.
         */
        take?: number;
        /**
         * A total summary expression.
         */
        totalSummary?: any;
        /**
         * An object for storing additional settings that should be sent to the server.
         */
        userData?: any;
    }
    /**
     * 
     */
    export interface LocalStoreOptions extends ArrayStoreOptions<LocalStore> {
        /**
         * Specifies a delay in milliseconds between when data changes and the moment these changes are saved in the local storage. Applies only if immediate is false.
         */
        flushInterval?: number;
        /**
         * Specifies whether the LocalStore saves changes in the local storage immediately.
         */
        immediate?: boolean;
        /**
         * Specifies the name under which data should be saved in the local storage. The `dx-data-localStore-` prefix will be added to the name.
         */
        name?: string;
    }
    /**
     * The LocalStore is a store that provides an interface for loading and editing data from HTML Web Storage (also known as window.localStorage) and handling related events.
     */
    export class LocalStore extends ArrayStore {
        constructor(options?: LocalStoreOptions)
        /**
         * Removes data from the local storage.
         */
        clear(): void;
    }
    /**
     * 
     */
    export interface ODataContextOptions {
        /**
         * Specifies a function that customizes the request before it is sent to the server.
         */
        beforeSend?: ((options: { url?: string, async?: boolean, method?: string, timeout?: number, params?: any, payload?: any, headers?: any }) => any);
        /**
         * Specifies whether stores in the ODataContext serialize/parse date-time values.
         */
        deserializeDates?: boolean;
        /**
         * Specifies entity collections to be accessed.
         */
        entities?: any;
        /**
         * Specifies a function that is executed when the ODataContext throws an error.
         */
        errorHandler?: ((e: { httpStatus?: number, errorDetails?: any, requestOptions?: any }) => any);
        /**
         * Specifies whether to convert string values to lowercase in filter and search requests. Applies to the following operations: 'startswith', 'endswith', 'contains', and 'notcontains'.
         */
        filterToLower?: boolean;
        /**
         * Specifies whether data should be sent using JSONP.
         */
        jsonp?: boolean;
        /**
         * Specifies the URL of an OData service.
         */
        url?: string;
        /**
         * Specifies the OData version.
         */
        version?: number;
        /**
         * Specifies whether to send cookies, authorization headers, and client certificates in a cross-origin request.
         */
        withCredentials?: boolean;
    }
    /**
     * The ODataContent is an object that provides access to an entire OData service.
     */
    export class ODataContext {
        constructor(options?: ODataContextOptions)
        /**
         * Invokes an OData operation that returns a value.
         */
        get(operationName: string, params: any): Promise<any> & JQueryPromise<any>;
        /**
         * Invokes an OData operation that returns nothing.
         */
        invoke(operationName: string, params: any, httpMethod: any): Promise<void> & JQueryPromise<void>;
        /**
         * Gets a link to an entity with a specific key.
         */
        objectLink(entityAlias: string, key: any | string | number): any;
    }
    /**
     * 
     */
    export interface ODataStoreOptions extends StoreOptions<ODataStore> {
        /**
         * Specifies a function that customizes the request before it is sent to the server.
         */
        beforeSend?: ((options: { url?: string, async?: boolean, method?: string, timeout?: number, params?: any, payload?: any, headers?: any }) => any);
        /**
         * Specifies whether the store serializes/parses date-time values.
         */
        deserializeDates?: boolean;
        /**
         * Specifies a function that is executed when the ODataStore throws an error.
         */
        errorHandler?: ((e: { httpStatus?: number, errorDetails?: any, requestOptions?: any }) => any);
        /**
         * Specifies the data field types. Accepts the following types: 'String', 'Int32', 'Int64', 'Boolean', 'Single', 'Decimal' and 'Guid'.
         */
        fieldTypes?: any;
        /**
         * Specifies whether to convert string values to lowercase in filter and search requests. Applies to the following operations: 'startswith', 'endswith', 'contains', and 'notcontains'.
         */
        filterToLower?: boolean;
        /**
         * Specifies whether data should be sent using JSONP.
         */
        jsonp?: boolean;
        /**
         * Specifies the type of the key property or properties.
         */
        keyType?: 'String' | 'Int32' | 'Int64' | 'Guid' | 'Boolean' | 'Single' | 'Decimal' | any;
        /**
         * A function that is executed before data is loaded to the store.
         */
        onLoading?: ((loadOptions: LoadOptions) => any);
        /**
         * Specifies the URL of an OData entity collection.
         */
        url?: string;
        /**
         * Specifies the OData version.
         */
        version?: number;
        /**
         * Specifies whether to send cookies, authorization headers, and client certificates in a cross-origin request.
         */
        withCredentials?: boolean;
    }
    /**
     * The ODataStore is a store that provides an interface for loading and editing data from an individual OData entity collection and handling related events.
     */
    export class ODataStore extends Store {
        constructor(options?: ODataStoreOptions)
        /**
         * Gets a data item with a specific key.
         */
        byKey(key: any | string | number): Promise<any> & JQueryPromise<any>;
        /**
         * Gets an entity with a specific key.
         */
        byKey(key: any | string | number, extraOptions: { expand?: string | Array<string>, select?: string | Array<string> }): Promise<any> & JQueryPromise<any>;
        /**
         * Creates a Query for the OData endpoint.
         */
        createQuery(loadOptions: any): any;
    }
    /**
     * 
     */
    export interface PivotGridDataSourceOptions {
        /**
         * Configures pivot grid fields.
         */
        fields?: Array<PivotGridDataSourceField>;
        /**
         * Specifies data filtering conditions. Cannot be used with an XmlaStore.
         */
        filter?: string | Array<any> | Function;
        /**
         * A function that is executed after data is successfully loaded.
         */
        onChanged?: Function;
        /**
         * A function that is executed when all fields are loaded from the store and they are ready to be displayed in the PivotGrid.
         */
        onFieldsPrepared?: ((fields: Array<PivotGridDataSourceField>) => any);
        /**
         * A function that is executed when data loading fails.
         */
        onLoadError?: ((error: any) => any);
        /**
         * A function that is executed when the data loading status changes.
         */
        onLoadingChanged?: ((isLoading: boolean) => any);
        /**
         * Specifies whether the PivotGridDataSource should load data in portions. Can be used only with an XmlaStore.
         */
        paginate?: boolean;
        /**
         * Specifies whether the data processing operations (filtering, grouping, summary calculation) should be performed on the server.
         */
        remoteOperations?: boolean;
        /**
         * Specifies whether to auto-generate pivot grid fields from the store's data.
         */
        retrieveFields?: boolean;
        /**
         * Configures the DataSource's underlying store.
         */
        store?: Store | StoreOptions | XmlaStore | XmlaStoreOptions | Array<{ type?: 'array' | 'local' | 'odata' | 'xmla' }> | { type?: 'array' | 'local' | 'odata' | 'xmla' };
    }
    /**
     * Configures pivot grid fields.
     */
    export interface PivotGridDataSourceField {
        /**
         * Specifies whether to take neighboring groups' summary values into account when calculating a running total and absolute or percent variation.
         */
        allowCrossGroupCalculation?: boolean;
        /**
         * Specifies whether a user can expand/collapse all items within the same column or row header level using the context menu.
         */
        allowExpandAll?: boolean;
        /**
         * Specifies whether a user can filter the field's values.
         */
        allowFiltering?: boolean;
        /**
         * Specifies whether a user can change the field's sorting.
         */
        allowSorting?: boolean;
        /**
         * Specifies whether a user can sort the pivot grid by summary values instead of field values.
         */
        allowSortingBySummary?: boolean;
        /**
         * Specifies the field's area.
         */
        area?: 'column' | 'data' | 'filter' | 'row' | undefined;
        /**
         * Specifies the field's order among the other fields in the same area. Corresponds to the field's order in the fields array by default.
         */
        areaIndex?: number;
        /**
         * Specifies a custom aggregate function. Applies only if the summaryType is 'custom' and the remoteOperations is false. Cannot be used with an XmlaStore.
         */
        calculateCustomSummary?: ((options: { summaryProcess?: string, value?: any, totalValue?: any }) => any);
        /**
         * Specifies a custom post-processing function for summary values.
         */
        calculateSummaryValue?: ((e: DevExpress.ui.dxPivotGridSummaryCell) => number);
        /**
         * Specifies the field's caption to be displayed in the field chooser and on the field panel.
         */
        caption?: string;
        /**
         * Customizes the text displayed in summary cells.
         */
        customizeText?: ((cellInfo: { value?: string | number | Date, valueText?: string }) => string);
        /**
         * Specifies which data source field provides data for the pivot grid field.
         */
        dataField?: string;
        /**
         * Casts field values to a specific data type.
         */
        dataType?: 'date' | 'number' | 'string';
        /**
         * Specifies the name of the folder in which the field is located when displayed in the field chooser.
         */
        displayFolder?: string;
        /**
         * Specifies whether to expand all items within the field's header level.
         */
        expanded?: boolean;
        /**
         * Specifies whether a user changes the current filter by including (selecting) or excluding (clearing the selection of) values.
         */
        filterType?: 'exclude' | 'include';
        /**
         * Specifies the values by which the field is filtered.
         */
        filterValues?: Array<any>;
        /**
         * Formats field values before they are displayed.
         */
        format?: DevExpress.ui.format;
        /**
         * Specifies the field's index within its group.
         */
        groupIndex?: number;
        /**
         * Specifies how the field's values are combined into groups for the headers. Cannot be used with an XmlaStore.
         */
        groupInterval?: 'day' | 'dayOfWeek' | 'month' | 'quarter' | 'year' | number;
        /**
         * Specifies the name of the field's group.
         */
        groupName?: string;
        /**
         * Configures the field's header filter.
         */
        headerFilter?: { allowSearch?: boolean, height?: number, width?: number };
        /**
         * Specifies whether the field should be treated as a measure (a field providing data for calculation).
         */
        isMeasure?: boolean;
        /**
         * Specifies the field's identifier.
         */
        name?: string;
        /**
         * Specifies whether to calculate the running total by rows or by columns.
         */
        runningTotal?: 'column' | 'row';
        /**
         * Specifies a function that combines the field's values into groups for the headers. Cannot be used with an XmlaStore or remote operations.
         */
        selector?: Function;
        /**
         * Specifies whether to display the field's grand totals. Applies only if the field is in the data area.
         */
        showGrandTotals?: boolean;
        /**
         * Specifies whether to display the field's totals.
         */
        showTotals?: boolean;
        /**
         * Specifies whether to display the field's summary values. Applies only if the field is in the data area. Inherits the showTotals' value by default.
         */
        showValues?: boolean;
        /**
         * Specifies how the field's values in the headers should be sorted.
         */
        sortBy?: 'displayText' | 'value' | 'none';
        /**
         * Sorts the field's values in the headers by the specified measure's summary values. Accepts the measure's name, caption, dataField, or index in the fields array.
         */
        sortBySummaryField?: string;
        /**
         * Specifies a path to the column or row whose summary values should be used to sort the field's values in the headers.
         */
        sortBySummaryPath?: Array<number | string>;
        /**
         * Specifies the field values' sorting order.
         */
        sortOrder?: 'asc' | 'desc';
        /**
         * Specifies a custom comparison function that sorts the field's values in the headers.
         */
        sortingMethod?: ((a: { value?: string | number, children?: Array<any> }, b: { value?: string | number, children?: Array<any> }) => number);
        /**
         * Specifies a predefined post-processing function. Does not apply when the calculateSummaryValue property is set.
         */
        summaryDisplayMode?: 'absoluteVariation' | 'percentOfColumnGrandTotal' | 'percentOfColumnTotal' | 'percentOfGrandTotal' | 'percentOfRowGrandTotal' | 'percentOfRowTotal' | 'percentVariation';
        /**
         * Specifies how to aggregate the field's data. Cannot be used with an XmlaStore.
         */
        summaryType?: 'avg' | 'count' | 'custom' | 'max' | 'min' | 'sum' | string;
        /**
         * Specifies whether the field is visible in the pivot grid and field chooser.
         */
        visible?: boolean;
        /**
         * Specifies the field's width in pixels when the field is displayed in the pivot grid.
         */
        width?: number;
        /**
         * Specifies whether text that does not fit into a header item should be wrapped.
         */
        wordWrapEnabled?: boolean;
    }
    /**
     * The PivotGridDataSource is an object that provides an API for processing data from an underlying store. This object is used in the PivotGrid UI component.
     */
    export class PivotGridDataSource {
        constructor(options?: PivotGridDataSourceOptions)
        /**
         * Collapses all header items of a field with the specified identifier.
         */
        collapseAll(id: number | string): void;
        /**
         * Collapses a specific header item.
         */
        collapseHeaderItem(area: string, path: Array<string | number | Date>): void;
        /**
         * Provides access to the facts that were used to calculate a specific summary value.
         */
        createDrillDownDataSource(options: { columnPath?: Array<string | number | Date>, rowPath?: Array<string | number | Date>, dataIndex?: number, maxRowCount?: number, customColumns?: Array<string> }): DataSource;
        /**
         * Disposes of all the resources allocated to the PivotGridDataSource instance.
         */
        dispose(): void;
        /**
         * Expands all the header items of a field with the specified identifier.
         */
        expandAll(id: number | string): void;
        /**
         * Expands a specific header item.
         */
        expandHeaderItem(area: string, path: Array<any>): void;
        /**
         * Gets all the properties of a field with the specified identifier.
         */
        field(id: number | string): any;
        /**
         * Updates field options' values.
         */
        field(id: number | string, options: any): void;
        /**
         * Gets all the fields including those generated automatically.
         */
        fields(): Array<PivotGridDataSourceField>;
        /**
         * Specifies a new fields collection.
         */
        fields(fields: Array<PivotGridDataSourceField>): void;
        /**
         * Gets the filter property's value. Does not affect an XmlaStore.
         */
        filter(): any;
        /**
         * Sets the filter property's value. Does not affect an XmlaStore.
         */
        filter(filterExpr: any): void;
        /**
         * Gets all the fields within an area.
         */
        getAreaFields(area: string, collectGroups: boolean): Array<PivotGridDataSourceField>;
        /**
         * Gets the loaded data. Another data portion is loaded every time a header item is expanded.
         */
        getData(): any;
        /**
         * Checks whether the PivotGridDataSource is loading data.
         */
        isLoading(): boolean;
        /**
         * Starts loading data.
         */
        load(): Promise<any> & JQueryPromise<any>;
        /**
         * 
         */
        off(eventName: string): this;
        /**
         * 
         */
        off(eventName: string, eventHandler: Function): this;
        /**
         * 
         */
        on(eventName: string, eventHandler: Function): this;
        /**
         * 
         */
        on(events: any): this;
        /**
         * Clears the loaded PivotGridDataSource data and calls the load() method.
         */
        reload(): Promise<any> & JQueryPromise<any>;
        /**
         * Gets the current PivotGridDataSource state. Part of the PivotGrid UI component's state storing feature.
         */
        state(): any;
        /**
         * Sets the PivotGridDataSource state. Part of the PivotGrid UI component's state storing feature.
         */
        state(state: any): void;
    }
    /**
     * The Query is an object that provides a chainable interface for making data queries.
     */
    export class Query {
        /**
         * Calculates a custom summary for all data items.
         */
        aggregate(seed: any, step: Function, finalize: Function): Promise<any> & JQueryPromise<any>;
        /**
         * Calculates a custom summary for all data items.
         */
        aggregate(step: Function): Promise<any> & JQueryPromise<any>;
        /**
         * Calculates the average of all values. Applies only to numeric arrays.
         */
        avg(): Promise<number> & JQueryPromise<number>;
        /**
         * Calculates the average of all values found using a getter.
         */
        avg(getter: any): Promise<number> & JQueryPromise<number>;
        /**
         * Calculates the number of data items.
         */
        count(): Promise<number> & JQueryPromise<number>;
        /**
         * Executes the Query. This is an asynchronous alternative to the toArray() method.
         */
        enumerate(): Promise<any> & JQueryPromise<any>;
        /**
         * Filters data items using a filter expression.
         */
        filter(criteria: Array<any>): Query;
        /**
         * Filters data items using a custom function.
         */
        filter(predicate: Function): Query;
        /**
         * Groups data items by the specified getter.
         */
        groupBy(getter: any): Query;
        /**
         * Calculates the maximum value. Applies only to numeric arrays.
         */
        max(): Promise<number | Date> & JQueryPromise<number | Date>;
        /**
         * Calculates the maximum of all values found using a getter.
         */
        max(getter: any): Promise<number | Date> & JQueryPromise<number | Date>;
        /**
         * Calculates the minimum value. Applies only to numeric arrays.
         */
        min(): Promise<number | Date> & JQueryPromise<number | Date>;
        /**
         * Calculates the minumum of all values found using a getter.
         */
        min(getter: any): Promise<number | Date> & JQueryPromise<number | Date>;
        /**
         * Selects individual fields from data objects.
         */
        select(getter: any): Query;
        /**
         * Gets a specified number of data items starting from a given index.
         */
        slice(skip: number, take?: number): Query;
        /**
         * Sorts data items by the specified getter in ascending order.
         */
        sortBy(getter: any): Query;
        /**
         * Sorts data items by the specified getter in the specified sorting order.
         */
        sortBy(getter: any, desc: boolean): Query;
        /**
         * Calculates the sum of all values.
         */
        sum(): Promise<number> & JQueryPromise<number>;
        /**
         * Calculates the sum of all values found using a getter.
         */
        sum(getter: any): Promise<number> & JQueryPromise<number>;
        /**
         * Sorts data items by one more getter in ascending order.
         */
        thenBy(getter: any): Query;
        /**
         * Sorts data items by one more getter in the specified sorting order.
         */
        thenBy(getter: any, desc: boolean): Query;
        /**
         * Gets data items associated with the Query. This is a synchronous alternative to the enumerate() method.
         */
        toArray(): Array<any>;
    }
    /**
     * 
     */
    export interface StoreOptions<T = Store> {
        /**
         * Specifies the function that is executed when the store throws an error.
         */
        errorHandler?: Function;
        /**
         * Specifies the key property (or properties) that provide(s) key values to access data items. Each key value must be unique.
         */
        key?: string | Array<string>;
        /**
         * A function that is executed after a data item is added to the store.
         */
        onInserted?: ((values: any, key: any | string | number) => any);
        /**
         * A function that is executed before a data item is added to the store.
         */
        onInserting?: ((values: any) => any);
        /**
         * A function that is executed after data is loaded to the store.
         */
        onLoaded?: ((result: Array<any>) => any);
        /**
         * A function that is executed before data is loaded to the store.
         */
        onLoading?: ((loadOptions: LoadOptions) => any);
        /**
         * A function that is executed after a data item is added, updated, or removed from the store.
         */
        onModified?: Function;
        /**
         * A function that is executed before a data item is added, updated, or removed from the store.
         */
        onModifying?: Function;
        /**
         * The function executed before changes are pushed to the store.
         */
        onPush?: ((changes: Array<any>) => any);
        /**
         * A function that is executed after a data item is removed from the store.
         */
        onRemoved?: ((key: any | string | number) => any);
        /**
         * A function that is executed before a data item is removed from the store.
         */
        onRemoving?: ((key: any | string | number) => any);
        /**
         * A function that is executed after a data item is updated in the store.
         */
        onUpdated?: ((key: any | string | number, values: any) => any);
        /**
         * A function that is executed before a data item is updated in the store.
         */
        onUpdating?: ((key: any | string | number, values: any) => any);
    }
    /**
     * The base class for all Stores.
     */
    export class Store {
        constructor(options?: StoreOptions)
        /**
         * Gets a data item with a specific key.
         */
        byKey(key: any | string | number): Promise<any> & JQueryPromise<any>;
        /**
         * Adds a data item to the store.
         */
        insert(values: any): Promise<any> & JQueryPromise<any>;
        /**
         * Gets the key property (or properties) as specified in the key property.
         */
        key(): any;
        /**
         * Gets a data item's key value.
         */
        keyOf(obj: any): any;
        /**
         * Starts loading data.
         */
        load(): Promise<any> & JQueryPromise<any>;
        /**
         * Starts loading data.
         */
        load(options: LoadOptions): Promise<any> & JQueryPromise<any>;
        /**
         * 
         */
        off(eventName: string): this;
        /**
         * 
         */
        off(eventName: string, eventHandler: Function): this;
        /**
         * 
         */
        on(eventName: string, eventHandler: Function): this;
        /**
         * 
         */
        on(events: any): this;
        /**
         * Pushes data changes to the store and notifies the DataSource.
         */
        push(changes: Array<any>): void;
        /**
         * Removes a data item with a specific key from the store.
         */
        remove(key: any | string | number): Promise<void> & JQueryPromise<void>;
        /**
         * Gets the total count of items the load() function returns.
         */
        totalCount(obj: { filter?: any, group?: any }): Promise<number> & JQueryPromise<number>;
        /**
         * Updates a data item with a specific key.
         */
        update(key: any | string | number, values: any): Promise<any> & JQueryPromise<any>;
    }
    /**
     * 
     */
    export interface XmlaStoreOptions {
        /**
         * Specifies a function that customizes the request before it is sent to the server.
         */
        beforeSend?: ((options: { url?: string, method?: string, headers?: any, xhrFields?: any, data?: string, dataType?: string }) => any);
        /**
         * Specifies the database (or initial catalog) that contains the OLAP cube to use.
         */
        catalog?: string;
        /**
         * Specifies the name of the OLAP cube to use from the catalog.
         */
        cube?: string;
        /**
         * Specifies the OLAP server's URL.
         */
        url?: string;
    }
    /**
     * The XmlaStore is a store that provides an interface for accessing an OLAP cube according to the XMLA standard.
     */
    export class XmlaStore {
        constructor(options?: XmlaStoreOptions)
    }
    /**
     * Applies an array of changes to a source data array.
     */
    export function applyChanges(data: Array<any>, changes: Array<any>, options?: { keyExpr?: string | Array<string>, immutable?: boolean }): Array<any>;
    /**
     * Encodes a string or array of bytes in Base64.
     */
    export function base64_encode(input: string | Array<number>): string;
    /**
     * Specifies the function that is executed when a data layer object throws an error.
     */
    export function errorHandler(e: Error): void;
    /**
     * Creates a Query instance.
     */
    export function query(array: Array<any>): Query;
    /**
     * Creates a Query instance that accesses a remote data service using its URL.
     */
    export function query(url: string, queryOptions: any): Query;
}
declare module DevExpress.data.utils {
    /**
     * Compiles a getter function from a getter expression.
     */
    export function compileGetter(expr: string | Array<string>): Function;
    /**
     * Compiles a setter function from a setter expression.
     */
    export function compileSetter(expr: string | Array<string>): Function;
}
declare module DevExpress.data.utils.odata {
    /**
     * Contains built-in OData type converters (for String, Int32, Int64, Boolean, Single, Decimal, and Guid) and allows you to register a custom type converter.
     */
    export var keyConverters: any;
}
declare module DevExpress.events {
    /**
     * Describes dxEvent, a counterpart of the jQuery.Event to be used without jQuery.
     */
    export class dxEvent {
        /**
         * The DOM element within the current event propagation stage.
         */
        currentTarget: Element;
        /**
         * Data passed to the event handler.
         */
        data: any;
        /**
         * The DOM element to which the currently-called event handler was attached.
         */
        delegateTarget: Element;
        /**
         * The DOM element that initiated the event.
         */
        target: Element;
        /**
         * Checks if the preventDefault() method was called on this event object.
         */
        isDefaultPrevented(): boolean;
        /**
         * Checks if the stopImmediatePropagation() method was called on this event object.
         */
        isImmediatePropagationStopped(): boolean;
        /**
         * Checks if the stopPropagation() method was called on this event object.
         */
        isPropagationStopped(): boolean;
        /**
         * Prevents the event's default action from triggering.
         */
        preventDefault(): void;
        /**
         * Stops the event's propagation up the DOM tree, preventing the rest of the handlers from being executed.
         */
        stopImmediatePropagation(): void;
        /**
         * Stops the event's propagation up the DOM tree, keeping parent handlers unnotified of the event.
         */
        stopPropagation(): void;
    }
    /**
     * 
     */
    export type event = dxEvent | JQueryEventObject;
    /**
     * 
     */
    export function eventsHandler(event: dxEvent, extraParameters: any): boolean;
    /**
     * Detaches all handlers from the specified elements.
     */
    export function off(element: Element | Array<Element>): void;
    /**
     * Detaches all handlers of the specified event from the specified elements.
     */
    export function off(element: Element | Array<Element>, eventName: string): void;
    /**
     * Detaches an event handler from the specified elements.
     */
    export function off(element: Element | Array<Element>, eventName: string, handler: Function): void;
    /**
     * Detaches all event handlers of the specified type attached using the on(element, eventName, selector, data, handler) or on(element, eventName, selector, handler) method.
     */
    export function off(element: Element | Array<Element>, eventName: string, selector: string): void;
    /**
     * Detaches the specified event handler attached using the on(element, eventName, selector, data, handler) or on(element, eventName, selector, handler) method.
     */
    export function off(element: Element | Array<Element>, eventName: string, selector: string, handler: Function): void;
    /**
     * Attaches an event handler to the specified elements. Allows you to pass custom data to the handler.
     */
    export function on(element: Element | Array<Element>, eventName: string, data: any, handler: Function): void;
    /**
     * Attaches an event handler to the specified elements.
     */
    export function on(element: Element | Array<Element>, eventName: string, handler: Function): void;
    /**
     * Attaches an event handler to the specified elements' descendants. Allows you to pass custom data to the handler.
     */
    export function on(element: Element | Array<Element>, eventName: string, selector: string, data: any, handler: Function): void;
    /**
     * Attaches an event handler to the specified elements' descendants.
     */
    export function on(element: Element | Array<Element>, eventName: string, selector: string, handler: Function): void;
    /**
     * Attaches an event handler that is executed only once to the specified elements. Allows you to pass custom data to the handler.
     */
    export function one(element: Element | Array<Element>, eventName: string, data: any, handler: Function): void;
    /**
     * Attaches an event handler that is executed only once to the specified elements.
     */
    export function one(element: Element | Array<Element>, eventName: string, handler: Function): void;
    /**
     * Attaches an event handler that is executed only once to the specified elements' descendants. Allows you to pass custom data to the handler.
     */
    export function one(element: Element | Array<Element>, eventName: string, selector: string, data: any, handler: Function): void;
    /**
     * Attaches an event handler that is executed only once to the specified elements' descendants.
     */
    export function one(element: Element | Array<Element>, eventName: string, selector: string, handler: Function): void;
    /**
     * Triggers an event for the specified elements.
     */
    export function trigger(element: Element | Array<Element>, event: string | event): void;
    /**
     * Triggers an event for the specified elements. Allows you to pass custom parameters to event handlers.
     */
    export function trigger(element: Element | Array<Element>, event: string | event, extraParameters: any): void;
    /**
     * 
     */
    export function triggerHandler(element: Element | Array<Element>, event: string | event): void;
    /**
     * 
     */
    export function triggerHandler(element: Element | Array<Element>, event: string | event, extraParameters: any): void;
}
declare module DevExpress.excelExporter {
    /**
     * 
     */
    export interface CellAddress {
        /**
         * The index of a column that contains the cell.
         */
        column?: number;
        /**
         * The index of a row that contains the cell.
         */
        row?: number;
    }
    /**
     * The coordinates of the exported DataGrid in the Excel file.
     */
    export interface CellRange {
        /**
         * Coordinates of the top left cell.
         */
        from?: CellAddress;
        /**
         * Coordinates of the bottom right cell.
         */
        to?: CellAddress;
    }
    /**
     * A DataGrid cell to be exported to Excel.
     */
    export interface ExcelDataGridCell {
        /**
         * The configuration of the cell's column.
         */
        column?: DevExpress.ui.dxDataGridColumn;
        /**
         * The data object of the cell's row.
         */
        data?: any;
        /**
         * The group index of the cell's row. Available when the rowType is 'group'.
         */
        groupIndex?: number;
        /**
         * Information about group summary items the cell represents.
         */
        groupSummaryItems?: Array<{ name?: string, value?: any }>;
        /**
         * The type of the cell's row.
         */
        rowType?: string;
        /**
         * The identifier of the total summary item that the cell represents.
         */
        totalSummaryItemName?: string;
        /**
         * The cell's raw value.
         */
        value?: any;
    }
    /**
     * 
     */
    export interface ExcelExportBaseProps {
        /**
         * Specifies whether Excel columns should have the same width as their source UI component's columns.
         */
        keepColumnWidths?: boolean;
        /**
         * Configures the load panel.
         */
        loadPanel?: ExportLoadPanel;
        /**
         * A cell used as a start position for export.
         */
        topLeftCell?: CellAddress | string;
        /**
         * An Excel worksheet to which the grid should be exported.
         */
        worksheet?: any;
    }
    /**
     * Properties that can be passed to the exportDataGrid(options) method from the excelExporter module.
     */
    export interface ExcelExportDataGridProps extends ExcelExportBaseProps {
        /**
         * Specifies whether to enable Excel filtering in the document.
         */
        autoFilterEnabled?: boolean;
        /**
         * A DataGrid instance. This setting is required.
         */
        component?: DevExpress.ui.dxDataGrid;
        /**
         * Customizes an Excel cell after creation.
         */
        customizeCell?: ((options: { gridCell?: ExcelDataGridCell, excelCell?: any }) => any);
        /**
         * Specifies whether to export only selected rows.
         */
        selectedRowsOnly?: boolean;
    }
    /**
     * Properties that can be passed to the exportPivotGrid(options) method from the excelExporter module.
     */
    export interface ExcelExportPivotGridProps extends ExcelExportBaseProps {
        /**
         * A PivotGrid instance. This setting is required.
         */
        component?: DevExpress.ui.dxPivotGrid;
        /**
         * 
         */
        customizeCell?: ((options: { pivotCell?: ExcelPivotGridCell, excelCell?: any }) => any);
        /**
         * Specifies whether to merge neighbouring cells in the column field if they have the same values.
         */
        mergeColumnFieldValues?: boolean;
        /**
         * Specifies whether to merge neighbouring cells in the row field if they have the same values.
         */
        mergeRowFieldValues?: boolean;
    }
    /**
     * A PivotGrid cell to be exported to Excel.
     */
    export interface ExcelPivotGridCell extends DevExpress.ui.dxPivotGridPivotGridCell {
        /**
         * The area to which the cell belongs.
         */
        area?: string;
        /**
         * A zero-based index that indicates the position of the cell's column.
         */
        columnIndex?: number;
        /**
         * A zero-based index that indicates the position of the cell's row.
         */
        rowIndex?: number;
    }
    /**
     * Configures the load panel.
     */
    export interface ExportLoadPanel {
        /**
         * Specifies whether the load panel is enabled.
         */
        enabled?: boolean;
        /**
         * Specifies the height of the load panel in pixels.
         */
        height?: number;
        /**
         * Specifies a URL pointing to an image to be used as a loading indicator.
         */
        indicatorSrc?: string;
        /**
         * Specifies whether to shade the UI component when the load panel is shown.
         */
        shading?: boolean;
        /**
         * Specifies the shading color. Applies only if shading is true.
         */
        shadingColor?: string;
        /**
         * Specifies whether to show the loading indicator.
         */
        showIndicator?: boolean;
        /**
         * Specifies whether to show the pane of the load panel.
         */
        showPane?: boolean;
        /**
         * Specifies text displayed on the load panel.
         */
        text?: string;
        /**
         * Specifies the width of the load panel in pixels.
         */
        width?: number;
    }
    /**
     * [tags] xlsx, csv Exports grid data to Excel.
     */
    export function exportDataGrid(options: ExcelExportDataGridProps): Promise<CellRange> & JQueryPromise<CellRange>;
    /**
     * [tags] xlsx, csv Exports pivot grid data to Excel.
     */
    export function exportPivotGrid(options: ExcelExportPivotGridProps): Promise<CellRange> & JQueryPromise<CellRange>;
}
declare module DevExpress.exporter {
    /**
     * An object that configures the font in an Excel cell.
     * @deprecated 
     */
    export interface ExcelFont {
        /**
         * Specifies whether the text should be in bold.
         */
        bold?: boolean;
        /**
         * The text's color in hexadecimal characters.
         */
        color?: string;
        /**
         * Specifies whether the text should be in italic.
         */
        italic?: boolean;
        /**
         * The name of the typeface that should be applied to the text.
         */
        name?: string;
        /**
         * The font size specified in points (1/72 of an inch).
         */
        size?: number;
        /**
         * The underline formatting style.
         */
        underline?: 'double' | 'doubleAccounting' | 'none' | 'single' | 'singleAccounting';
    }
}
declare module DevExpress.fileManagement {
    /**
     * 
     */
    export interface CustomFileSystemProviderOptions extends FileSystemProviderBaseOptions<CustomFileSystemProvider> {
        /**
         * A function that cancels the file upload.
         */
        abortFileUpload?: ((file: File, uploadInfo: UploadInfo, destinationDirectory: FileSystemItem) => Promise<any> | JQueryPromise<any> | any);
        /**
         * A function that copies files or folders.
         */
        copyItem?: ((item: FileSystemItem, destinationDirectory: FileSystemItem) => Promise<any> | JQueryPromise<any> | any);
        /**
         * A function that creates a directory.
         */
        createDirectory?: ((parentDirectory: FileSystemItem, name: string) => Promise<any> | JQueryPromise<any> | any);
        /**
         * A function that deletes a file or folder.
         */
        deleteItem?: ((item: FileSystemItem) => Promise<any> | JQueryPromise<any> | any);
        /**
         * A function that downloads files.
         */
        downloadItems?: ((items: Array<FileSystemItem>) => any);
        /**
         * A function that gets file system items.
         */
        getItems?: ((parentDirectory: FileSystemItem) => Promise<Array<any>> | JQueryPromise<Array<any>> | Array<any>);
        /**
         * A function that get items content.
         */
        getItemsContent?: ((items: Array<FileSystemItem>) => Promise<any> | JQueryPromise<any> | any);
        /**
         * A function or the name of a data source field that provides information on whether a file or folder contains sub directories.
         */
        hasSubDirectoriesExpr?: string | Function;
        /**
         * A function that moves files and folders.
         */
        moveItem?: ((item: FileSystemItem, destinationDirectory: FileSystemItem) => Promise<any> | JQueryPromise<any> | any);
        /**
         * A function that renames files and folders.
         */
        renameItem?: ((item: FileSystemItem, newName: string) => Promise<any> | JQueryPromise<any> | any);
        /**
         * A function that uploads a file in chunks.
         */
        uploadFileChunk?: ((file: File, uploadInfo: UploadInfo, destinationDirectory: FileSystemItem) => Promise<any> | JQueryPromise<any> | any);
    }
    /**
     * A custom file system provider allows you to implement custom APIs to access and use file systems.
     */
    export class CustomFileSystemProvider extends FileSystemProviderBase {
        constructor(options?: CustomFileSystemProviderOptions)
    }
    /**
     * An object that provides information about a file system item (file or folder) in the FileManager UI component.
     */
    export class FileSystemItem {
        /**
         * The file system data object that stores information about the file system item (name, size, modification date, etc.).
         */
        dataItem: any;
        /**
         * A timestamp that indicates when the file system item was last modified.
         */
        dateModified: Date;
        /**
         * Specifies whether a directory has subdirectories.
         */
        hasSubDirectories: boolean;
        /**
         * Specifies whether the file system item is a directory.
         */
        isDirectory: boolean;
        /**
         * The file system item's key.
         */
        key: string;
        /**
         * The file system item's name.
         */
        name: string;
        /**
         * The file system item's path.
         */
        path: string;
        /**
         * The file system item's path specified in keys.
         */
        pathKeys: Array<string>;
        /**
         * The file system item's size (in bytes).
         */
        size: number;
        /**
         * An icon (URL) to be used as the file system item's thumbnail.
         */
        thumbnail: string;
        /**
         * Gets a file's extension.
         */
        getFileExtension(): string;
    }
    /**
     * 
     */
    export interface FileSystemProviderBaseOptions<T = FileSystemProviderBase> {
        /**
         * Specifies which data field provides timestamps that indicate when a file was last modified.
         */
        dateModifiedExpr?: string | Function;
        /**
         * Specifies which data field provides information about whether a file system item is a directory.
         */
        isDirectoryExpr?: string | Function;
        /**
         * Specifies the data field that provides keys.
         */
        keyExpr?: string | Function;
        /**
         * Specifies which data field provides file and directory names.
         */
        nameExpr?: string | Function;
        /**
         * Specifies which data field provides file sizes.
         */
        sizeExpr?: string | Function;
        /**
         * Specifies which data field provides icons to be used as thumbnails.
         */
        thumbnailExpr?: string | Function;
    }
    /**
     * Contains base provider settings.
     */
    export class FileSystemProviderBase {
        constructor(options?: FileSystemProviderBaseOptions)
        /**
         * Cancels the file upload.
         */
        abortFileUpload(fileData: File, uploadInfo: UploadInfo, destinationDirectory: FileSystemItem): Promise<any> & JQueryPromise<any>;
        /**
         * Copies files or folders.
         */
        copyItems(items: Array<FileSystemItem>, destinationDirectory: FileSystemItem): Array<Promise<any> | JQueryPromise<any>>;
        /**
         * Creates a directory.
         */
        createDirectory(parentDirectory: FileSystemItem, name: string): Promise<any> & JQueryPromise<any>;
        /**
         * Deletes files or folders.
         */
        deleteItems(items: Array<FileSystemItem>): Array<Promise<any> | JQueryPromise<any>>;
        /**
         * Downloads files.
         */
        downloadItems(items: Array<FileSystemItem>): void;
        /**
         * Gets file system items.
         */
        getItems(parentDirectory: FileSystemItem): Promise<Array<FileSystemItem>> & JQueryPromise<Array<FileSystemItem>>;
        /**
         * Gets items content.
         */
        getItemsContent(items: Array<FileSystemItem>): Promise<any> & JQueryPromise<any>;
        /**
         * Moves files and folders.
         */
        moveItems(items: Array<FileSystemItem>, destinationDirectory: FileSystemItem): Array<Promise<any> | JQueryPromise<any>>;
        /**
         * Renames a file or folder.
         */
        renameItem(item: FileSystemItem, newName: string): Promise<any> & JQueryPromise<any>;
        /**
         * Uploads a file in chunks.
         */
        uploadFileChunk(fileData: File, uploadInfo: UploadInfo, destinationDirectory: FileSystemItem): Promise<any> & JQueryPromise<any>;
    }
    /**
     * 
     */
    export interface ObjectFileSystemProviderOptions extends FileSystemProviderBaseOptions<ObjectFileSystemProvider> {
        /**
         * Specifies which data field provides information about files content.
         */
        contentExpr?: string | Function;
        /**
         * Specifies an array of data objects that represent files and directories.
         */
        data?: Array<any>;
        /**
         * Specifies which data field provides information about nested files and directories.
         */
        itemsExpr?: string | Function;
    }
    /**
     * The Object file system provider works with a file system represented by an in-memory array of JSON objects.
     */
    export class ObjectFileSystemProvider extends FileSystemProviderBase {
        constructor(options?: ObjectFileSystemProviderOptions)
    }
    /**
     * 
     */
    export interface RemoteFileSystemProviderOptions extends FileSystemProviderBaseOptions<RemoteFileSystemProvider> {
        /**
         * Specifies the URL of an endpoint used to access and modify a file system located on the server.
         */
        endpointUrl?: string;
        /**
         * Specifies which data field provides information about whether a directory has subdirectories.
         */
        hasSubDirectoriesExpr?: string | Function;
    }
    /**
     * The Remote file system provider works with a file system located on the server.
     */
    export class RemoteFileSystemProvider extends FileSystemProviderBase {
        constructor(options?: RemoteFileSystemProviderOptions)
    }
    /**
     * An object that provides information about the file upload session.
     */
    export interface UploadInfo {
        /**
         * The number of bytes that is uploaded to the server.
         */
        bytesUploaded: number;
        /**
         * The binary content of the uploading chunk.
         */
        chunkBlob: Blob;
        /**
         * The number of uploaded chunks and chunks that are to be uploaded.
         */
        chunkCount: number;
        /**
         * The index of the uploading chunk.
         */
        chunkIndex: number;
        /**
         * Information saved during the file upload.
         */
        customData: any;
    }
}
declare module DevExpress.fx {
    /**
     * Animates an element.
     */
    export function animate(element: Element, config: animationConfig): Promise<void> & JQueryPromise<void>;
    /**
     * Checks whether an element is being animated.
     */
    export function isAnimating(element: Element): boolean;
    /**
     * Stops an element's animation.
     */
    export function stop(element: Element, jumpToEnd: boolean): void;
}
declare module DevExpress.pdfExporter {
    /**
     * A DataGrid cell to be exported to PDF.
     */
    export interface PdfDataGridCell {
        /**
         * 
         */
        column?: DevExpress.ui.dxDataGridColumn;
        /**
         * 
         */
        data?: any;
        /**
         * 
         */
        groupIndex?: number;
        /**
         * 
         */
        groupSummaryItems?: Array<{ name?: string, value?: any }>;
        /**
         * 
         */
        rowType?: string;
        /**
         * 
         */
        totalSummaryItemName?: string;
        /**
         * 
         */
        value?: any;
    }
    /**
     * Properties that can be passed as a parameter to the exportDataGrid(options) method from the pdfExporter module.
     */
    export interface PdfExportDataGridProps {
        /**
         * Options of the generated PDF table. Refer to the jsPDF-autoTable plugin documentation to see the full list of available customizations.
         */
        autoTableOptions?: any;
        /**
         * A DataGrid instance. This setting is required.
         */
        component?: DevExpress.ui.dxDataGrid;
        /**
         * Customizes a cell in PDF after creation.
         */
        customizeCell?: ((options: { gridCell?: PdfDataGridCell, pdfCell?: any }) => any);
        /**
         * A jsPDF instance. This setting is required.
         */
        jsPDFDocument?: any;
        /**
         * Specifies whether columns in the PDF file should have the same width as their source UI component's columns.
         */
        keepColumnWidths?: boolean;
        /**
         * 
         */
        loadPanel?: DevExpress.excelExporter.ExportLoadPanel;
        /**
         * Specifies whether or not to export only selected rows.
         */
        selectedRowsOnly?: boolean;
    }
    /**
     * [tags] ctp Exports grid data to a PDF file.
     */
    export function exportDataGrid(options: PdfExportDataGridProps): Promise<void> & JQueryPromise<void>;
}
declare module DevExpress.ui {
    /**
     * A custom validation rule that is checked asynchronously. Use async rules for server-side validation.
     */
    export interface AsyncRule {
        /**
         * If true, the validationCallback is not executed for null, undefined, false, and empty strings.
         */
        ignoreEmptyValue?: boolean;
        /**
         * Specifies the message that is shown if the rule is broken.
         */
        message?: string;
        /**
         * Indicates whether the rule should always be checked for the target value or only when the value changes.
         */
        reevaluate?: boolean;
        /**
         * Specifies the rule type. Set it to 'async' to use the AsyncRule.
         */
        type?: 'required' | 'numeric' | 'range' | 'stringLength' | 'custom' | 'compare' | 'pattern' | 'email' | 'async';
        /**
         * A function that validates the target value.
         */
        validationCallback?: ((options: { value?: string | number, rule?: any, validator?: any, data?: any, column?: any, formItem?: any }) => Promise<any> | JQueryPromise<any>);
    }
    /**
     * Specifies dependency between the screen factor and the count of columns.
     */
    export interface ColCountResponsible {
        /**
         * The count of columns for a large screen size.
         */
        lg?: number;
        /**
         * The count of columns for a middle-sized screen.
         */
        md?: number;
        /**
         * The count of columns for a small-sized screen.
         */
        sm?: number;
        /**
         * The count of columns for an extra small-sized screen.
         */
        xs?: number;
    }
    /**
     * 
     */
    export interface CollectionWidgetOptions<T = CollectionWidget> extends WidgetOptions<T> {
        /**
         * Binds the UI component to data.
         */
        dataSource?: string | Array<string | CollectionWidgetItem> | DevExpress.data.DataSource | DevExpress.data.DataSourceOptions;
        /**
         * The time period in milliseconds before the onItemHold event is raised.
         */
        itemHoldTimeout?: number;
        /**
         * Specifies a custom template for items.
         */
        itemTemplate?: DevExpress.core.template | ((itemData: any, itemIndex: number, itemElement: DevExpress.core.dxElement) => string | Element | JQuery);
        /**
         * An array of items displayed by the UI component.
         */
        items?: Array<string | CollectionWidgetItem | any>;
        /**
         * Specifies the key property that provides key values to access data items. Each key value must be unique.
         */
        keyExpr?: string | Function;
        /**
         * The text or HTML markup displayed by the UI component if the item collection is empty.
         */
        noDataText?: string;
        /**
         * A function that is executed when a collection item is clicked or tapped.
         */
        onItemClick?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, itemData?: any, itemElement?: DevExpress.core.dxElement, itemIndex?: number, event?: DevExpress.events.event }) => any) | string;
        /**
         * A function that is executed when a collection item is right-clicked or pressed.
         */
        onItemContextMenu?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, itemData?: any, itemElement?: DevExpress.core.dxElement, itemIndex?: number, event?: DevExpress.events.event }) => any);
        /**
         * A function that is executed when a collection item has been held for a specified period.
         */
        onItemHold?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, itemData?: any, itemElement?: DevExpress.core.dxElement, itemIndex?: number, event?: DevExpress.events.event }) => any);
        /**
         * A function that is executed after a collection item is rendered.
         */
        onItemRendered?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, itemData?: any, itemElement?: DevExpress.core.dxElement, itemIndex?: number }) => any);
        /**
         * A function that is executed when a collection item is selected or selection is canceled.
         */
        onSelectionChanged?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, addedItems?: Array<any>, removedItems?: Array<any> }) => any);
        /**
         * The index of the currently selected UI component item.
         */
        selectedIndex?: number;
        /**
         * The selected item object.
         */
        selectedItem?: any;
        /**
         * Specifies an array of currently selected item keys.
         */
        selectedItemKeys?: Array<any>;
        /**
         * An array of currently selected item objects.
         */
        selectedItems?: Array<any>;
    }
    /**
     * The base class for UI components containing an item collection.
     */
    export class CollectionWidget extends Widget {
        constructor(element: Element, options?: CollectionWidgetOptions)
        constructor(element: JQuery, options?: CollectionWidgetOptions)
        /**
         * Gets the DataSource instance.
         */
        getDataSource(): DevExpress.data.DataSource;
    }
    /**
     * 
     */
    export interface CollectionWidgetItem {
        /**
         * Specifies whether the UI component item responds to user interaction.
         */
        disabled?: boolean;
        /**
         * Specifies html code inserted into the UI component item element.
         */
        html?: string;
        /**
         * Specifies a template that should be used to render this item only.
         */
        template?: DevExpress.core.template | (() => string | Element | JQuery);
        /**
         * Specifies text displayed for the UI component item.
         */
        text?: string;
        /**
         * Specifies whether or not a UI component item must be displayed.
         */
        visible?: boolean;
    }
    /**
     * A validation rule that demands that a validated editor has a value that is equal to a specified expression.
     */
    export interface CompareRule {
        /**
         * Specifies the function whose return value is used for comparison with the validated value.
         */
        comparisonTarget?: (() => any);
        /**
         * Specifies the operator to be used for comparing the validated value with the target.
         */
        comparisonType?: '!=' | '!==' | '<' | '<=' | '==' | '===' | '>' | '>=';
        /**
         * If set to true, empty values are valid.
         */
        ignoreEmptyValue?: boolean;
        /**
         * Specifies the message that is shown if the rule is broken.
         */
        message?: string;
        /**
         * Indicates whether or not the rule should be always checked for the target value or only when the target value changes.
         */
        reevaluate?: boolean;
        /**
         * Specifies the rule type. Set it to 'compare' to use the CompareRule.
         */
        type?: 'required' | 'numeric' | 'range' | 'stringLength' | 'custom' | 'compare' | 'pattern' | 'email' | 'async';
    }
    /**
     * A rule with custom validation logic.
     */
    export interface CustomRule {
        /**
         * If true, the validationCallback is not executed for null, undefined, false, and empty strings.
         */
        ignoreEmptyValue?: boolean;
        /**
         * Specifies the message that is shown if the rule is broken.
         */
        message?: string;
        /**
         * Indicates whether the rule should be always checked for the target value or only when the target value changes.
         */
        reevaluate?: boolean;
        /**
         * Specifies the rule type. Set it to 'custom' to use the CustomRule.
         */
        type?: 'required' | 'numeric' | 'range' | 'stringLength' | 'custom' | 'compare' | 'pattern' | 'email' | 'async';
        /**
         * A function that validates the target value.
         */
        validationCallback?: ((options: { value?: string | number, rule?: any, validator?: any, data?: any, column?: any, formItem?: any }) => boolean);
    }
    /**
     * 
     */
    export interface DataExpressionMixinOptions<T = DataExpressionMixin> {
        /**
         * Binds the UI component to data.
         */
        dataSource?: string | Array<CollectionWidgetItem | any> | DevExpress.data.DataSource | DevExpress.data.DataSourceOptions;
        /**
         * Specifies the data field whose values should be displayed.
         */
        displayExpr?: string | ((item: any) => string);
        /**
         * Specifies a custom template for items.
         */
        itemTemplate?: DevExpress.core.template | ((itemData: any, itemIndex: number, itemElement: DevExpress.core.dxElement) => string | Element | JQuery);
        /**
         * An array of items displayed by the UI component.
         */
        items?: Array<CollectionWidgetItem | any>;
        /**
         * Specifies the currently selected value. May be an object if dataSource contains objects and valueExpr is not set.
         */
        value?: any;
        /**
         * Specifies which data field provides unique values to the UI component's value.
         */
        valueExpr?: string | ((item: any) => string | number | boolean);
    }
    /**
     * 
     */
    export class DataExpressionMixin {
        constructor(options?: DataExpressionMixinOptions)
        /**
         * Gets the DataSource instance.
         */
        getDataSource(): DevExpress.data.DataSource;
    }
    /**
     * 
     */
    export interface DraggableBaseOptions<T = DraggableBase> extends DOMComponentOptions<T> {
        /**
         * Enables automatic scrolling while dragging an item beyond the viewport.
         */
        autoScroll?: boolean;
        /**
         * Specifies a DOM element that limits the dragging area.
         */
        boundary?: string | Element | JQuery;
        /**
         * Specifies a custom container in which the draggable item should be rendered.
         */
        container?: string | Element | JQuery;
        /**
         * Specifies the cursor offset from the dragged item.
         */
        cursorOffset?: string | { x?: number, y?: number };
        /**
         * A container for custom data.
         */
        data?: any;
        /**
         * Specifies the directions in which an item can be dragged.
         */
        dragDirection?: 'both' | 'horizontal' | 'vertical';
        /**
         * Allows you to group several UI components, so that users can drag and drop items between them.
         */
        group?: string;
        /**
         * Specifies a CSS selector (ID or class) that should act as the drag handle(s) for the item(s).
         */
        handle?: string;
        /**
         * Specifies the distance in pixels from the edge of viewport at which scrolling should start. Applies only if autoScroll is true.
         */
        scrollSensitivity?: number;
        /**
         * Specifies the scrolling speed when dragging an item beyond the viewport. Applies only if autoScroll is true.
         */
        scrollSpeed?: number;
    }
    /**
     * 
     */
    export class DraggableBase extends DOMComponent {
        constructor(element: Element, options?: DraggableBaseOptions)
        constructor(element: JQuery, options?: DraggableBaseOptions)
    }
    /**
     * 
     */
    export interface EditorOptions<T = Editor> extends WidgetOptions<T> {
        /**
         * Specifies or indicates whether the editor's value is valid.
         */
        isValid?: boolean;
        /**
         * A function that is executed after the UI component's value is changed.
         */
        onValueChanged?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, value?: any, previousValue?: any, event?: DevExpress.events.event }) => any);
        /**
         * Specifies whether the editor is read-only.
         */
        readOnly?: boolean;
        /**
         * Information on the broken validation rule. Contains the first item from the validationErrors array.
         */
        validationError?: any;
        /**
         * An array of the validation rules that failed.
         */
        validationErrors?: Array<any>;
        /**
         * Specifies how the message about the validation rules that are not satisfied by this editor's value is displayed.
         */
        validationMessageMode?: 'always' | 'auto';
        /**
         * Indicates or specifies the current validation status.
         */
        validationStatus?: 'valid' | 'invalid' | 'pending';
        /**
         * Specifies the UI component's value.
         */
        value?: any;
    }
    /**
     * A base class for editors.
     */
    export class Editor extends Widget {
        constructor(element: Element, options?: EditorOptions)
        constructor(element: JQuery, options?: EditorOptions)
        /**
         * Resets the value property to the default value.
         */
        reset(): void;
    }
    /**
     * A validation rule that demands that the validated field match the Email pattern.
     */
    export interface EmailRule {
        /**
         * If set to true, empty values are valid.
         */
        ignoreEmptyValue?: boolean;
        /**
         * Specifies the message that is shown if the rule is broken.
         */
        message?: string;
        /**
         * Specifies the rule type. Set it to 'email' to use the EmailRule.
         */
        type?: 'required' | 'numeric' | 'range' | 'stringLength' | 'custom' | 'compare' | 'pattern' | 'email' | 'async';
    }
    /**
     * 
     */
    export interface GridBaseOptions<T = GridBase> extends WidgetOptions<T> {
        /**
         * Specifies whether a user can reorder columns.
         */
        allowColumnReordering?: boolean;
        /**
         * Specifies whether a user can resize columns.
         */
        allowColumnResizing?: boolean;
        /**
         * Automatically scrolls to the focused row when the focusedRowKey is changed.
         */
        autoNavigateToFocusedRow?: boolean;
        /**
         * Specifies whether data should be cached.
         */
        cacheEnabled?: boolean;
        /**
         * Enables a hint that appears when a user hovers the mouse pointer over a cell with truncated content.
         */
        cellHintEnabled?: boolean;
        /**
         * Specifies whether columns should adjust their widths to the content.
         */
        columnAutoWidth?: boolean;
        /**
         * Configures the column chooser.
         */
        columnChooser?: { allowSearch?: boolean, emptyPanelText?: string, enabled?: boolean, height?: number, mode?: 'dragAndDrop' | 'select', searchTimeout?: number, title?: string, width?: number };
        /**
         * Configures column fixing.
         */
        columnFixing?: { enabled?: boolean, texts?: { fix?: string, leftPosition?: string, rightPosition?: string, unfix?: string } };
        /**
         * Specifies whether the UI component should hide columns to adapt to the screen or container size. Ignored if allowColumnResizing is true and columnResizingMode is 'widget'.
         */
        columnHidingEnabled?: boolean;
        /**
         * Specifies the minimum width of columns.
         */
        columnMinWidth?: number;
        /**
         * Specifies how the UI component resizes columns. Applies only if allowColumnResizing is true.
         */
        columnResizingMode?: 'nextColumn' | 'widget';
        /**
         * Specifies the width for all data columns. Has a lower priority than the column.width property.
         */
        columnWidth?: number;
        /**
         * Overridden.
         */
        columns?: Array<GridBaseColumn | string>;
        /**
         * Binds the UI component to data.
         */
        dataSource?: string | Array<any> | DevExpress.data.DataSource | DevExpress.data.DataSourceOptions;
        /**
         * Specifies the format in which date-time values should be sent to the server. Use it only if you do not specify the dataSource at design time.
         */
        dateSerializationFormat?: string;
        /**
         * Overriden.
         */
        editing?: GridBaseEditing;
        /**
         * Indicates whether to show the error row.
         */
        errorRowEnabled?: boolean;
        /**
         * Configures the integrated filter builder.
         */
        filterBuilder?: dxFilterBuilderOptions;
        /**
         * Configures the popup in which the integrated filter builder is shown.
         */
        filterBuilderPopup?: dxPopupOptions;
        /**
         * Configures the filter panel.
         */
        filterPanel?: { customizeText?: ((e: { component?: T, filterValue?: any, text?: string }) => string), filterEnabled?: boolean, texts?: { clearFilter?: string, createFilter?: string, filterEnabledHint?: string }, visible?: boolean };
        /**
         * Configures the filter row.
         */
        filterRow?: { applyFilter?: 'auto' | 'onClick', applyFilterText?: string, betweenEndText?: string, betweenStartText?: string, operationDescriptions?: { between?: string, contains?: string, endsWith?: string, equal?: string, greaterThan?: string, greaterThanOrEqual?: string, lessThan?: string, lessThanOrEqual?: string, notContains?: string, notEqual?: string, startsWith?: string }, resetOperationText?: string, showAllText?: string, showOperationChooser?: boolean, visible?: boolean };
        /**
         * Specifies whether to synchronize the filter row, header filter, and filter builder. The synchronized filter expression is stored in the filterValue property.
         */
        filterSyncEnabled?: boolean | 'auto';
        /**
         * Specifies a filter expression.
         */
        filterValue?: string | Array<any> | Function;
        /**
         * The index of the column that contains the focused data cell. This index is taken from the columns array.
         */
        focusedColumnIndex?: number;
        /**
         * Specifies whether the focused row feature is enabled.
         */
        focusedRowEnabled?: boolean;
        /**
         * Specifies or indicates the focused data row's index. Use this property when focusedRowEnabled is true.
         */
        focusedRowIndex?: number;
        /**
         * Specifies initially or currently focused grid row's key. Use it when focusedRowEnabled is true.
         */
        focusedRowKey?: any;
        /**
         * Configures the header filter feature.
         */
        headerFilter?: { allowSearch?: boolean, height?: number, searchTimeout?: number, texts?: { cancel?: string, emptyValue?: string, ok?: string }, visible?: boolean, width?: number };
        /**
         * Specifies whether to highlight rows and cells with edited data. repaintChangesOnly should be true.
         */
        highlightChanges?: boolean;
        /**
         * Configures keyboard navigation.
         */
        keyboardNavigation?: { editOnKeyPress?: boolean, enabled?: boolean, enterKeyAction?: 'startEdit' | 'moveFocus', enterKeyDirection?: 'none' | 'column' | 'row' };
        /**
         * Configures the load panel.
         */
        loadPanel?: { enabled?: boolean | 'auto', height?: number, indicatorSrc?: string, shading?: boolean, shadingColor?: string, showIndicator?: boolean, showPane?: boolean, text?: string, width?: number };
        /**
         * Specifies text shown when the UI component does not display any data.
         */
        noDataText?: string;
        /**
         * A function that is executed before an adaptive detail row is rendered.
         */
        onAdaptiveDetailRowPreparing?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, formOptions?: any }) => any);
        /**
         * A function that is executed when an error occurs in the data source.
         */
        onDataErrorOccurred?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, error?: Error }) => any);
        /**
         * A function that is executed after row changes are discarded.
         */
        onEditCanceled?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, changes?: Array<any> }) => any);
        /**
         * A function that is executed when the edit operation is canceled, but row changes are not yet discarded.
         */
        onEditCanceling?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, changes?: Array<any>, cancel?: boolean }) => any);
        /**
         * A function that is executed before a new row is added to the UI component.
         */
        onInitNewRow?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, data?: any, promise?: Promise<void> | JQueryPromise<void> }) => any);
        /**
         * A function that is executed when the UI component is in focus and a key has been pressed down.
         */
        onKeyDown?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, handled?: boolean }) => any);
        /**
         * A function that is executed after a row is collapsed.
         */
        onRowCollapsed?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, key?: any }) => any);
        /**
         * A function that is executed before a row is collapsed.
         */
        onRowCollapsing?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, key?: any, cancel?: boolean }) => any);
        /**
         * A function that is executed after a row is expanded.
         */
        onRowExpanded?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, key?: any }) => any);
        /**
         * A function that is executed before a row is expanded.
         */
        onRowExpanding?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, key?: any, cancel?: boolean }) => any);
        /**
         * A function that is executed after a new row has been inserted into the data source.
         */
        onRowInserted?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, data?: any, key?: any, error?: Error }) => any);
        /**
         * A function that is executed before a new row is inserted into the data source.
         */
        onRowInserting?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, data?: any, cancel?: boolean | Promise<void> | JQueryPromise<void> }) => any);
        /**
         * A function that is executed after a row has been removed from the data source.
         */
        onRowRemoved?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, data?: any, key?: any, error?: Error }) => any);
        /**
         * A function that is executed before a row is removed from the data source.
         */
        onRowRemoving?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, data?: any, key?: any, cancel?: boolean | Promise<void> | JQueryPromise<void> }) => any);
        /**
         * A function that is executed after a row has been updated in the data source.
         */
        onRowUpdated?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, data?: any, key?: any, error?: Error }) => any);
        /**
         * A function that is executed before a row is updated in the data source.
         */
        onRowUpdating?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, oldData?: any, newData?: any, key?: any, cancel?: boolean | Promise<void> | JQueryPromise<void> }) => any);
        /**
         * A function that is executed after cells in a row are validated against validation rules.
         */
        onRowValidating?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, brokenRules?: Array<RequiredRule | NumericRule | RangeRule | StringLengthRule | CustomRule | CompareRule | PatternRule | EmailRule | AsyncRule>, isValid?: boolean, key?: any, newData?: any, oldData?: any, errorText?: string, promise?: Promise<void> | JQueryPromise<void> }) => any);
        /**
         * A function that is executed after row changes are saved.
         */
        onSaved?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, changes?: Array<any> }) => any);
        /**
         * A function that is executed before pending row changes are saved.
         */
        onSaving?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, changes?: Array<any>, promise?: Promise<void> | JQueryPromise<void>, cancel?: boolean }) => any);
        /**
         * A function that is executed after selecting a row or clearing its selection.
         */
        onSelectionChanged?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, currentSelectedRowKeys?: Array<any>, currentDeselectedRowKeys?: Array<any>, selectedRowKeys?: Array<any>, selectedRowsData?: Array<any> }) => any);
        /**
         * A function that is executed before the toolbar is created.
         */
        onToolbarPreparing?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, toolbarOptions?: dxToolbarOptions }) => any);
        /**
         * Configures the pager.
         */
        pager?: { allowedPageSizes?: Array<number> | 'auto', infoText?: string, showInfo?: boolean, showNavigationButtons?: boolean, showPageSizeSelector?: boolean, visible?: boolean | 'auto' };
        /**
         * Configures paging.
         */
        paging?: GridBasePaging;
        /**
         * Specifies whether to render the filter row, command columns, and columns with showEditorAlways set to true after other elements.
         */
        renderAsync?: boolean;
        /**
         * Specifies whether to repaint only those cells whose data changed.
         */
        repaintChangesOnly?: boolean;
        /**
         * Specifies whether rows should be shaded differently.
         */
        rowAlternationEnabled?: boolean;
        /**
         * Configures row reordering using drag and drop gestures.
         */
        rowDragging?: { allowDropInsideItem?: boolean, allowReordering?: boolean, autoScroll?: boolean, boundary?: string | Element | JQuery, container?: string | Element | JQuery, cursorOffset?: string | { x?: number, y?: number }, data?: any, dragDirection?: 'both' | 'horizontal' | 'vertical', dragTemplate?: DevExpress.core.template | ((dragInfo: { itemData?: any, itemElement?: DevExpress.core.dxElement }, containerElement: DevExpress.core.dxElement) => string | Element | JQuery), dropFeedbackMode?: 'push' | 'indicate', filter?: string, group?: string, handle?: string, onAdd?: ((e: { component?: T, event?: DevExpress.events.event, itemData?: any, itemElement?: DevExpress.core.dxElement, fromIndex?: number, toIndex?: number, fromComponent?: dxSortable | dxDraggable, toComponent?: dxSortable | dxDraggable, fromData?: any, toData?: any, dropInsideItem?: boolean }) => any), onDragChange?: ((e: { component?: T, event?: DevExpress.events.event, cancel?: boolean, itemData?: any, itemElement?: DevExpress.core.dxElement, fromIndex?: number, toIndex?: number, fromComponent?: dxSortable | dxDraggable, toComponent?: dxSortable | dxDraggable, fromData?: any, toData?: any, dropInsideItem?: boolean }) => any), onDragEnd?: ((e: { component?: T, event?: DevExpress.events.event, cancel?: boolean, itemData?: any, itemElement?: DevExpress.core.dxElement, fromIndex?: number, toIndex?: number, fromComponent?: dxSortable | dxDraggable, toComponent?: dxSortable | dxDraggable, fromData?: any, toData?: any, dropInsideItem?: boolean }) => any), onDragMove?: ((e: { component?: T, event?: DevExpress.events.event, cancel?: boolean, itemData?: any, itemElement?: DevExpress.core.dxElement, fromIndex?: number, toIndex?: number, fromComponent?: dxSortable | dxDraggable, toComponent?: dxSortable | dxDraggable, fromData?: any, toData?: any, dropInsideItem?: boolean }) => any), onDragStart?: ((e: { component?: T, event?: DevExpress.events.event, cancel?: boolean, itemData?: any, itemElement?: DevExpress.core.dxElement, fromIndex?: number, fromData?: any }) => any), onRemove?: ((e: { component?: T, event?: DevExpress.events.event, itemData?: any, itemElement?: DevExpress.core.dxElement, fromIndex?: number, toIndex?: number, fromComponent?: dxSortable | dxDraggable, toComponent?: dxSortable | dxDraggable, fromData?: any, toData?: any }) => any), onReorder?: ((e: { component?: T, event?: DevExpress.events.event, itemData?: any, itemElement?: DevExpress.core.dxElement, fromIndex?: number, toIndex?: number, fromComponent?: dxSortable | dxDraggable, toComponent?: dxSortable | dxDraggable, fromData?: any, toData?: any, dropInsideItem?: boolean, promise?: Promise<void> | JQueryPromise<void> }) => any), scrollSensitivity?: number, scrollSpeed?: number, showDragIcons?: boolean };
        /**
         * Overridden. A configuration object specifying scrolling properties.
         */
        scrolling?: GridBaseScrolling;
        /**
         * Configures the search panel.
         */
        searchPanel?: { highlightCaseSensitive?: boolean, highlightSearchText?: boolean, placeholder?: string, searchVisibleColumnsOnly?: boolean, text?: string, visible?: boolean, width?: number };
        /**
         * Allows you to select rows or determine which rows are selected.
         */
        selectedRowKeys?: Array<any>;
        /**
         * Overridden.
         */
        selection?: GridBaseSelection;
        /**
         * Specifies whether the outer borders of the UI component are visible.
         */
        showBorders?: boolean;
        /**
         * Specifies whether column headers are visible.
         */
        showColumnHeaders?: boolean;
        /**
         * Specifies whether vertical lines that separate one column from another are visible.
         */
        showColumnLines?: boolean;
        /**
         * Specifies whether horizontal lines that separate one row from another are visible.
         */
        showRowLines?: boolean;
        /**
         * Configures runtime sorting.
         */
        sorting?: { ascendingText?: string, clearText?: string, descendingText?: string, mode?: 'multiple' | 'none' | 'single', showSortIndexes?: boolean };
        /**
         * Configures state storing.
         */
        stateStoring?: { customLoad?: (() => Promise<any> | JQueryPromise<any>), customSave?: ((gridState: any) => any), enabled?: boolean, savingTimeout?: number, storageKey?: string, type?: 'custom' | 'localStorage' | 'sessionStorage' };
        /**
         * Specifies whether to enable two-way data binding.
         */
        twoWayBindingEnabled?: boolean;
        /**
         * Specifies whether text that does not fit into a column should be wrapped.
         */
        wordWrapEnabled?: boolean;
    }
    /**
     * Overriden.
     */
    export interface GridBaseEditing {
        /**
         * [tags] ctp Pending row changes.
         */
        changes?: Array<any>;
        /**
         * Specifies if confirmation is required when a user deletes a row.
         */
        confirmDelete?: boolean;
        /**
         * The name of a column being edited. Applies only if editing.mode is 'cell' or 'batch'.
         */
        editColumnName?: string;
        /**
         * The key(s) of a row being edited.
         */
        editRowKey?: any;
        /**
         * Configures the form. Used only if editing.mode is 'form' or 'popup'.
         */
        form?: dxFormOptions;
        /**
         * Specifies how a user edits data.
         */
        mode?: 'batch' | 'cell' | 'row' | 'form' | 'popup';
        /**
         * Configures the popup. Used only if editing.mode is 'popup'.
         */
        popup?: dxPopupOptions;
        /**
         * Specifies operations that are performed after saving changes.
         */
        refreshMode?: 'full' | 'reshape' | 'repaint';
        /**
         * Specifies whether to select text in a cell when a user starts editing.
         */
        selectTextOnEditStart?: boolean;
        /**
         * Specifies whether a single or double click should switch a cell to the editing state. Applies if editing.mode is 'cell' or 'batch'.
         */
        startEditAction?: 'click' | 'dblClick';
        /**
         * Contains properties that specify texts for editing-related UI elements.
         */
        texts?: GridBaseEditingTexts;
        /**
         * Specifies whether the edit column uses icons instead of links.
         */
        useIcons?: boolean;
    }
    /**
     * Contains properties that specify texts for editing-related UI elements.
     */
    export interface GridBaseEditingTexts {
        /**
         * Specifies text for a hint that appears when a user pauses on the global 'Add' button. Applies only if editing.allowAdding is true.
         */
        addRow?: string;
        /**
         * Specifies text for a hint that appears when a user pauses on the 'Discard' button. Applies only if editing.mode is 'batch'.
         */
        cancelAllChanges?: string;
        /**
         * Specifies text for a button that cancels changes in a row. Applies only if editing.allowUpdating is true and editing.mode is 'row'.
         */
        cancelRowChanges?: string;
        /**
         * Specifies a message that prompts a user to confirm deletion.
         */
        confirmDeleteMessage?: string;
        /**
         * Specifies a title for the window that asks a user to confirm deletion.
         */
        confirmDeleteTitle?: string;
        /**
         * Specifies text for buttons that delete rows. Applies only if allowDeleting is true.
         */
        deleteRow?: string;
        /**
         * Specifies text for buttons that switch rows into the editing state. Applies only if allowUpdating is true.
         */
        editRow?: string;
        /**
         * Specifies text for a hint that appears when a user pauses on the global 'Save' button. Applies only if editing.mode is 'batch'.
         */
        saveAllChanges?: string;
        /**
         * Specifies text for a button that saves changes made in a row. Applies only if allowUpdating is true.
         */
        saveRowChanges?: string;
        /**
         * Specifies text for buttons that recover deleted rows. Applies only if allowDeleting is true and editing.mode is 'batch'.
         */
        undeleteRow?: string;
        /**
         * Specifies text for a hint appearing when a user pauses on the button that cancels changes in a cell. Applies only if editing.mode is 'cell' and data validation is enabled.
         */
        validationCancelChanges?: string;
    }
    /**
     * Configures paging.
     */
    export interface GridBasePaging {
        /**
         * Enables paging.
         */
        enabled?: boolean;
        /**
         * Specifies the page to be displayed using a zero-based index.
         */
        pageIndex?: number;
        /**
         * Specifies the page size.
         */
        pageSize?: number;
    }
    /**
     * Overridden. A configuration object specifying scrolling properties.
     */
    export interface GridBaseScrolling {
        /**
         * Specifies the rendering mode for columns. Applies when columns are left outside the viewport. Requires the columnWidth, columnAutoWidth, or width (for all columns) property specified.
         */
        columnRenderingMode?: 'standard' | 'virtual';
        /**
         * Specifies whether the UI component should load adjacent pages. Applies only if scrolling.mode is 'virtual' or 'infinite'.
         */
        preloadEnabled?: boolean;
        /**
         * Specifies the rendering mode for loaded rows.
         */
        rowRenderingMode?: 'standard' | 'virtual';
        /**
         * Specifies whether a user can scroll the content with a swipe gesture. Applies only if useNative is false.
         */
        scrollByContent?: boolean;
        /**
         * Specifies whether a user can scroll the content with the scrollbar. Applies only if useNative is false.
         */
        scrollByThumb?: boolean;
        /**
         * Specifies when to show scrollbars. Applies only if useNative is false.
         */
        showScrollbar?: 'always' | 'never' | 'onHover' | 'onScroll';
        /**
         * Specifies whether the UI component should use native or simulated scrolling.
         */
        useNative?: boolean | 'auto';
    }
    /**
     * Overridden.
     */
    export interface GridBaseSelection {
        /**
         * Allows users to simultaneously select all or current page rows (depending on the selectAllMode).
         */
        allowSelectAll?: boolean;
        /**
         * Specifies the selection mode.
         */
        mode?: 'multiple' | 'none' | 'single';
    }
    /**
     * 
     */
    export class GridBase extends Widget {
        constructor(element: Element, options?: GridBaseOptions)
        constructor(element: JQuery, options?: GridBaseOptions)
        /**
         * Shows the load panel.
         */
        beginCustomLoading(messageText: string): void;
        /**
         * Gets a data object with a specific key.
         */
        byKey(key: any | string | number): Promise<any> & JQueryPromise<any>;
        /**
         * Discards changes that a user made to data.
         */
        cancelEditData(): void;
        /**
         * Gets the value of a cell with a specific row index and a data field, column caption or name.
         */
        cellValue(rowIndex: number, dataField: string): any;
        /**
         * Sets a new value to a cell with a specific row index and a data field, column caption or name.
         */
        cellValue(rowIndex: number, dataField: string, value: any): void;
        /**
         * Gets the value of a cell with specific row and column indexes.
         */
        cellValue(rowIndex: number, visibleColumnIndex: number): any;
        /**
         * Sets a new value to a cell with specific row and column indexes.
         */
        cellValue(rowIndex: number, visibleColumnIndex: number, value: any): void;
        /**
         * Clears all filters applied to UI component rows.
         */
        clearFilter(): void;
        /**
         * Clears all row filters of a specific type.
         */
        clearFilter(filterName: string): void;
        /**
         * Clears selection of all rows on all pages.
         */
        clearSelection(): void;
        /**
         * Clears sorting settings of all columns at once.
         */
        clearSorting(): void;
        /**
         * Switches the cell being edited back to the normal state. Takes effect only if editing.mode is batch and showEditorAlways is false.
         */
        closeEditCell(): void;
        /**
         * Collapses the currently expanded adaptive detail row (if there is one).
         */
        collapseAdaptiveDetailRow(): void;
        /**
         * Gets the data column count. Includes visible and hidden columns, excludes command columns.
         */
        columnCount(): number;
        /**
         * Gets all properties of a column with a specific identifier.
         */
        columnOption(id: number | string): any;
        /**
         * Gets the value of a single column property.
         */
        columnOption(id: number | string, optionName: string): any;
        /**
         * Updates the value of a single column property.
         */
        columnOption(id: number | string, optionName: string, optionValue: any): void;
        /**
         * Updates the values of several column properties.
         */
        columnOption(id: number | string, options: any): void;
        /**
         * Removes a column.
         */
        deleteColumn(id: number | string): void;
        /**
         * Removes a row with a specific index.
         */
        deleteRow(rowIndex: number): void;
        /**
         * Clears the selection of all rows on all pages or the currently rendered page only.
         */
        deselectAll(): Promise<void> & JQueryPromise<void>;
        /**
         * Cancels the selection of rows with specific keys.
         */
        deselectRows(keys: Array<any>): Promise<any> & JQueryPromise<any>;
        /**
         * Switches a cell with a specific row index and a data field to the editing state. Takes effect only if the editing mode is 'batch' or 'cell'.
         */
        editCell(rowIndex: number, dataField: string): void;
        /**
         * Switches a cell with specific row and column indexes to the editing state. Takes effect only if the editing mode is 'batch' or 'cell'.
         */
        editCell(rowIndex: number, visibleColumnIndex: number): void;
        /**
         * Switches a row with a specific index to the editing state. Takes effect only if the editing mode is 'row', 'popup' or 'form'.
         */
        editRow(rowIndex: number): void;
        /**
         * Hides the load panel.
         */
        endCustomLoading(): void;
        /**
         * Expands an adaptive detail row.
         */
        expandAdaptiveDetailRow(key: any): void;
        /**
         * Gets a filter expression applied to the UI component's data source using the filter(filterExpr) method and the DataSource's filter property.
         */
        filter(): any;
        /**
         * Applies a filter to the UI component's data source.
         */
        filter(filterExpr: any): void;
        /**
         * Sets focus on the UI component.
         */
        focus(): void;
        /**
         * Sets focus on a specific cell.
         */
        focus(element: Element | JQuery): void;
        /**
         * Gets a cell with a specific row index and a data field, column caption or name.
         */
        getCellElement(rowIndex: number, dataField: string): DevExpress.core.dxElement | undefined;
        /**
         * Gets a cell with specific row and column indexes.
         */
        getCellElement(rowIndex: number, visibleColumnIndex: number): DevExpress.core.dxElement | undefined;
        /**
         * Gets the total filter that combines all the filters applied.
         */
        getCombinedFilter(): any;
        /**
         * Gets the total filter that combines all the filters applied.
         */
        getCombinedFilter(returnDataField: boolean): any;
        /**
         * Gets the DataSource instance.
         */
        getDataSource(): DevExpress.data.DataSource;
        /**
         * Gets the key of a row with a specific index.
         */
        getKeyByRowIndex(rowIndex: number): any;
        /**
         * Gets the container of a row with a specific index.
         */
        getRowElement(rowIndex: number): Array<Element> & JQuery | undefined;
        /**
         * Gets the index of a row with a specific key.
         */
        getRowIndexByKey(key: any | string | number): number;
        /**
         * Gets the instance of the UI component's scrollable part.
         */
        getScrollable(): dxScrollable;
        /**
         * Gets the index of a visible column.
         */
        getVisibleColumnIndex(id: number | string): number;
        /**
         * Checks whether the UI component has unsaved changes.
         */
        hasEditData(): boolean;
        /**
         * Hides the column chooser.
         */
        hideColumnChooser(): void;
        /**
         * Checks whether an adaptive detail row is expanded or collapsed.
         */
        isAdaptiveDetailRowExpanded(key: any): boolean;
        /**
         * Checks whether a row with a specific key is focused.
         */
        isRowFocused(key: any): boolean;
        /**
         * Checks whether a row with a specific key is selected.
         */
        isRowSelected(key: any): boolean;
        /**
         * Gets a data object's key.
         */
        keyOf(obj: any): any;
        /**
         * Navigates to a row with the specified key.
         */
        navigateToRow(key: any): void;
        /**
         * Gets the total page count.
         */
        pageCount(): number;
        /**
         * Gets the current page index.
         */
        pageIndex(): number;
        /**
         * Switches the UI component to a specific page using a zero-based index.
         */
        pageIndex(newIndex: number): Promise<void> & JQueryPromise<void>;
        /**
         * Gets the current page size.
         */
        pageSize(): number;
        /**
         * Sets the page size.
         */
        pageSize(value: number): void;
        /**
         * Reloads data and repaints the UI component.
         */
        refresh(): Promise<void> & JQueryPromise<void>;
        /**
         * Reloads data and repaints the UI component or elements whose data changed.
         */
        refresh(changesOnly: boolean): Promise<void> & JQueryPromise<void>;
        /**
         * Repaints specific rows.
         */
        repaintRows(rowIndexes: Array<number>): void;
        /**
         * Saves changes that a user made to data.
         */
        saveEditData(): Promise<void> & JQueryPromise<void>;
        /**
         * Seeks a search string in the columns whose allowSearch property is true.
         */
        searchByText(text: string): void;
        /**
         * Selects all rows.
         */
        selectAll(): Promise<void> & JQueryPromise<void>;
        /**
         * Selects rows with specific keys.
         */
        selectRows(keys: Array<any>, preserve: boolean): Promise<any> & JQueryPromise<any>;
        /**
         * Selects rows with specific indexes.
         */
        selectRowsByIndexes(indexes: Array<number>): Promise<any> & JQueryPromise<any>;
        /**
         * Shows the column chooser.
         */
        showColumnChooser(): void;
        /**
         * Gets the current UI component state.
         */
        state(): any;
        /**
         * Sets the UI component state.
         */
        state(state: any): void;
        /**
         * Recovers a row deleted in batch editing mode.
         */
        undeleteRow(rowIndex: number): void;
        /**
         * Updates the UI component's content after resizing.
         */
        updateDimensions(): void;
    }
    /**
     * 
     */
    export interface GridBaseColumn {
        /**
         * Aligns the content of the column.
         */
        alignment?: 'center' | 'left' | 'right' | undefined;
        /**
         * Specifies whether a user can edit values in the column at runtime. By default, inherits the value of the editing.allowUpdating property.
         */
        allowEditing?: boolean;
        /**
         * Specifies whether data can be filtered by this column. Applies only if filterRow.visible is true.
         */
        allowFiltering?: boolean;
        /**
         * Specifies whether a user can fix the column at runtime. Applies only if columnFixing.enabled is true.
         */
        allowFixing?: boolean;
        /**
         * Specifies whether the header filter can be used to filter data by this column. Applies only if headerFilter.visible is true. By default, inherits the value of the allowFiltering property.
         */
        allowHeaderFiltering?: boolean;
        /**
         * Specifies whether a user can hide the column using the column chooser at runtime. Applies only if columnChooser.enabled is true.
         */
        allowHiding?: boolean;
        /**
         * Specifies whether this column can be used in column reordering at runtime. Applies only if allowColumnReordering is true.
         */
        allowReordering?: boolean;
        /**
         * Specifies whether a user can resize the column at runtime. Applies only if allowColumnResizing is true.
         */
        allowResizing?: boolean;
        /**
         * Specifies whether this column can be searched. Applies only if searchPanel.visible is true. Inherits the value of the allowFiltering property by default.
         */
        allowSearch?: boolean;
        /**
         * Specifies whether a user can sort rows by this column at runtime. Applies only if sorting.mode differs from 'none'.
         */
        allowSorting?: boolean;
        /**
         * Calculates custom cell values. Use this function to create an unbound data column.
         */
        calculateCellValue?: ((rowData: any) => any);
        /**
         * Calculates custom display values for column cells. Requires specifying the dataField or calculateCellValue property. Used in lookup optimization.
         */
        calculateDisplayValue?: string | ((rowData: any) => any);
        /**
         * Specifies the column's custom filtering rules.
         */
        calculateFilterExpression?: ((filterValue: any, selectedFilterOperation: string, target: string) => string | Array<any> | Function);
        /**
         * Calculates custom values used to sort this column.
         */
        calculateSortValue?: string | ((rowData: any) => any);
        /**
         * Specifies a caption for the column.
         */
        caption?: string;
        /**
         * Specifies a CSS class to be applied to the column.
         */
        cssClass?: string;
        /**
         * Customizes the text displayed in column cells.
         */
        customizeText?: ((cellInfo: { value?: string | number | Date, valueText?: string, target?: string, groupInterval?: string | number }) => string);
        /**
         * Binds the column to a field of the dataSource.
         */
        dataField?: string;
        /**
         * Casts column values to a specific data type.
         */
        dataType?: 'string' | 'number' | 'date' | 'boolean' | 'object' | 'datetime';
        /**
         * Configures the default UI component used for editing and filtering in the filter row.
         */
        editorOptions?: any;
        /**
         * Specifies whether HTML tags are displayed as plain text or applied to the values of the column.
         */
        encodeHtml?: boolean;
        /**
         * In a boolean column, replaces all false items with a specified text. Applies only if showEditorAlways property is false.
         */
        falseText?: string;
        /**
         * Specifies the available filter operations. Applies if allowFiltering is true and the filterRow and/or filterPanel are visible.
         */
        filterOperations?: Array<'=' | '<>' | '<' | '<=' | '>' | '>=' | 'contains' | 'endswith' | 'isblank' | 'isnotblank' | 'notcontains' | 'startswith' | 'between' | 'anyof' | 'noneof' | string>;
        /**
         * Specifies whether a user changes the current filter by including (selecting) or excluding (clearing the selection of) values. Applies only if headerFilter.visible and allowHeaderFiltering are true.
         */
        filterType?: 'exclude' | 'include';
        /**
         * Specifies the column's filter value displayed in the filter row.
         */
        filterValue?: any;
        /**
         * Specifies values selected in the column's header filter.
         */
        filterValues?: Array<any>;
        /**
         * Fixes the column.
         */
        fixed?: boolean;
        /**
         * Specifies the UI component's edge to which the column is fixed. Applies only if columns[].fixed is true.
         */
        fixedPosition?: 'left' | 'right';
        /**
         * Configures the form item that the column produces in the editing state. Applies only if editing.mode is 'form' or 'popup'.
         */
        formItem?: dxFormSimpleItem;
        /**
         * Formats a value before it is displayed in a column cell.
         */
        format?: format;
        /**
         * Specifies data settings for the header filter.
         */
        headerFilter?: { allowSearch?: boolean, dataSource?: Array<any> | ((options: { component?: any, dataSource?: DevExpress.data.DataSourceOptions }) => any) | DevExpress.data.DataSourceOptions, groupInterval?: 'day' | 'hour' | 'minute' | 'month' | 'quarter' | 'second' | 'year' | number, height?: number, searchMode?: 'contains' | 'startswith' | 'equals', width?: number };
        /**
         * Specifies the order in which columns are hidden when the UI component adapts to the screen or container size. Ignored if allowColumnResizing is true and columnResizingMode is 'widget'.
         */
        hidingPriority?: number;
        /**
         * Specifies whether the column organizes other columns into bands.
         */
        isBand?: boolean;
        /**
         * Specifies properties of a lookup column.
         */
        lookup?: { allowClearing?: boolean, dataSource?: Array<any> | DevExpress.data.DataSourceOptions | DevExpress.data.Store | ((options: { data?: any, key?: any }) => Array<any> | DevExpress.data.DataSourceOptions | DevExpress.data.Store), displayExpr?: string | ((data: any) => string), valueExpr?: string };
        /**
         * Specifies the minimum width of the column.
         */
        minWidth?: number;
        /**
         * Specifies the column's unique identifier. If not set in code, this value is inherited from the dataField.
         */
        name?: string;
        /**
         * Specifies the band column that owns the current column. Accepts the index of the band column in the columns array.
         */
        ownerBand?: number;
        /**
         * Specifies whether to render the column after other columns and elements. Use if column cells have a complex template. Requires the width property specified.
         */
        renderAsync?: boolean;
        /**
         * Specifies the column's filter operation displayed in the filter row.
         */
        selectedFilterOperation?: '<' | '<=' | '<>' | '=' | '>' | '>=' | 'between' | 'contains' | 'endswith' | 'notcontains' | 'startswith';
        /**
         * Specifies a function to be invoked after the user has edited a cell value, but before it will be saved in the data source.
         */
        setCellValue?: ((newData: any, value: any, currentRowData: any) => void | Promise<void> | JQueryPromise<void>);
        /**
         * Specifies whether the column displays its values using editors.
         */
        showEditorAlways?: boolean;
        /**
         * Specifies whether the column chooser can contain the column header.
         */
        showInColumnChooser?: boolean;
        /**
         * Specifies the index according to which columns participate in sorting.
         */
        sortIndex?: number;
        /**
         * Specifies the sort order of column values.
         */
        sortOrder?: 'asc' | 'desc' | undefined;
        /**
         * Specifies a custom comparison function for sorting. Applies only when sorting is performed on the client.
         */
        sortingMethod?: ((value1: any, value2: any) => number);
        /**
         * In a boolean column, replaces all true items with a specified text. Applies only if showEditorAlways property is false.
         */
        trueText?: string;
        /**
         * Specifies validation rules to be checked when cell values are updated.
         */
        validationRules?: Array<RequiredRule | NumericRule | RangeRule | StringLengthRule | CustomRule | CompareRule | PatternRule | EmailRule | AsyncRule>;
        /**
         * Specifies whether the column is visible, that is, occupies space in the table.
         */
        visible?: boolean;
        /**
         * Specifies the position of the column regarding other columns in the resulting UI component.
         */
        visibleIndex?: number;
        /**
         * Specifies the column's width in pixels or as a percentage. Ignored if it is less than minWidth.
         */
        width?: number | string;
    }
    /**
     * Allows you to customize buttons in the edit column or create a custom command column. Applies only if the column's type is 'buttons'.
     */
    export interface GridBaseColumnButton {
        /**
         * Specifies a CSS class to be applied to the button.
         */
        cssClass?: string;
        /**
         * Specifies the text for the hint that appears when the button is hovered over or long-pressed.
         */
        hint?: string;
        /**
         * Specifies the button's icon.
         */
        icon?: string;
        /**
         * Specifies the button's text. Applies only if the button's icon is not specified.
         */
        text?: string;
    }
    /**
     * 
     */
    export interface HierarchicalCollectionWidgetOptions<T = HierarchicalCollectionWidget> extends CollectionWidgetOptions<T> {
        /**
         * Specifies the name of the data source item field whose value defines whether or not the corresponding UI component item is disabled.
         */
        disabledExpr?: string | Function;
        /**
         * Specifies the data field whose values should be displayed.
         */
        displayExpr?: string | ((item: any) => string);
        /**
         * Specifies whether the UI component can be focused using keyboard navigation.
         */
        focusStateEnabled?: boolean;
        /**
         * Specifies whether the UI component changes its state when a user pauses on it.
         */
        hoverStateEnabled?: boolean;
        /**
         * Specifies which data field contains nested items.
         */
        itemsExpr?: string | Function;
        /**
         * Specifies which data field provides keys for TreeView items.
         */
        keyExpr?: string | Function;
        /**
         * Specifies the name of the data source item field whose value defines whether or not the corresponding UI component items is selected.
         */
        selectedExpr?: string | Function;
    }
    /**
     * 
     */
    export class HierarchicalCollectionWidget extends CollectionWidget {
        constructor(element: Element, options?: HierarchicalCollectionWidgetOptions)
        constructor(element: JQuery, options?: HierarchicalCollectionWidgetOptions)
    }
    /**
     * 
     */
    export interface MapLocation {
        /**
         * The latitude location of the UI component.
         */
        lat?: number;
        /**
         * The longitude location of the UI component.
         */
        lng?: number;
    }
    /**
     * A validation rule that demands that the validated field has a numeric value.
     */
    export interface NumericRule {
        /**
         * If set to true, empty values are valid.
         */
        ignoreEmptyValue?: boolean;
        /**
         * Specifies the message that is shown if the rule is broken.
         */
        message?: string;
        /**
         * Specifies the rule type. Set it to 'numeric' to use the NumericRule.
         */
        type?: 'required' | 'numeric' | 'range' | 'stringLength' | 'custom' | 'compare' | 'pattern' | 'email' | 'async';
    }
    /**
     * A validation rule that demands that the validated field match a specified pattern.
     */
    export interface PatternRule {
        /**
         * If set to true, empty values are valid.
         */
        ignoreEmptyValue?: boolean;
        /**
         * Specifies the message that is shown if the rule is broken.
         */
        message?: string;
        /**
         * Specifies the regular expression that the validated value must match.
         */
        pattern?: RegExp | string;
        /**
         * Specifies the rule type. Set it to 'pattern' to use the PatternRule.
         */
        type?: 'required' | 'numeric' | 'range' | 'stringLength' | 'custom' | 'compare' | 'pattern' | 'email' | 'async';
    }
    /**
     * A validation rule that demands the target value be within the specified value range (including the range's end points).
     */
    export interface RangeRule {
        /**
         * If set to true, empty values are valid.
         */
        ignoreEmptyValue?: boolean;
        /**
         * Specifies the maximum value allowed for the validated value.
         */
        max?: Date | number;
        /**
         * Specifies the message that is shown if the rule is broken.
         */
        message?: string;
        /**
         * Specifies the minimum value allowed for the validated value.
         */
        min?: Date | number;
        /**
         * Indicates whether the rule should be always checked for the target value or only when the target value changes.
         */
        reevaluate?: boolean;
        /**
         * Specifies the rule type. Set it to 'range' to use the RangeRule.
         */
        type?: 'required' | 'numeric' | 'range' | 'stringLength' | 'custom' | 'compare' | 'pattern' | 'email' | 'async';
    }
    /**
     * A validation rule that demands that a validated field has a value.
     */
    export interface RequiredRule {
        /**
         * Specifies the message that is shown if the rule is broken.
         */
        message?: string;
        /**
         * Indicates whether to remove the Space characters from the validated value.
         */
        trim?: boolean;
        /**
         * Specifies the rule type. Set it to 'required' to use the RequiredRule.
         */
        type?: 'required' | 'numeric' | 'range' | 'stringLength' | 'custom' | 'compare' | 'pattern' | 'email' | 'async';
    }
    /**
     * 
     */
    export interface SearchBoxMixinOptions<T = SearchBoxMixin> {
        /**
         * Configures the search panel.
         */
        searchEditorOptions?: dxTextBoxOptions;
        /**
         * Specifies whether the search panel is visible.
         */
        searchEnabled?: boolean;
        /**
         * Specifies a data object's field name or an expression whose value is compared to the search string.
         */
        searchExpr?: string | Function | Array<string | Function>;
        /**
         * Specifies a comparison operation used to search UI component items.
         */
        searchMode?: 'contains' | 'startswith' | 'equals';
        /**
         * Specifies a delay in milliseconds between when a user finishes typing, and the search is executed.
         */
        searchTimeout?: number;
        /**
         * Specifies the current search string.
         */
        searchValue?: string;
    }
    /**
     * 
     */
    export class SearchBoxMixin {
        constructor(options?: SearchBoxMixinOptions)
    }
    /**
     * A validation rule that demands the target value length be within the specified value range (including the range's end points).
     */
    export interface StringLengthRule {
        /**
         * If set to true, empty values are valid.
         */
        ignoreEmptyValue?: boolean;
        /**
         * Specifies the maximum length allowed for the validated value.
         */
        max?: number;
        /**
         * Specifies the message that is shown if the rule is broken.
         */
        message?: string;
        /**
         * Specifies the minimum length allowed for the validated value.
         */
        min?: number;
        /**
         * Indicates whether or not to remove the Space characters from the validated value.
         */
        trim?: boolean;
        /**
         * Specifies the rule type. Set it to 'stringLength' to use the StringLengthRule.
         */
        type?: 'required' | 'numeric' | 'range' | 'stringLength' | 'custom' | 'compare' | 'pattern' | 'email' | 'async';
    }
    /**
     * 
     */
    export interface WidgetOptions<T = Widget> extends DOMComponentOptions<T> {
        /**
         * Specifies the shortcut key that sets focus on the UI component.
         */
        accessKey?: string;
        /**
         * Specifies whether or not the UI component changes its state when interacting with a user.
         */
        activeStateEnabled?: boolean;
        /**
         * Specifies whether the UI component responds to user interaction.
         */
        disabled?: boolean;
        /**
         * Specifies whether the UI component can be focused using keyboard navigation.
         */
        focusStateEnabled?: boolean;
        /**
         * Specifies text for a hint that appears when a user pauses on the UI component.
         */
        hint?: string;
        /**
         * Specifies whether the UI component changes its state when a user pauses on it.
         */
        hoverStateEnabled?: boolean;
        /**
         * A function that is executed when the UI component's content is ready and each time the content is changed.
         */
        onContentReady?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any }) => any);
        /**
         * Specifies the number of the element when the Tab key is used for navigating.
         */
        tabIndex?: number;
        /**
         * Specifies whether the UI component is visible.
         */
        visible?: boolean;
    }
    /**
     * The base class for UI components.
     */
    export class Widget extends DOMComponent {
        constructor(element: Element, options?: WidgetOptions)
        constructor(element: JQuery, options?: WidgetOptions)
        /**
         * Sets focus on the UI component.
         */
        focus(): void;
        /**
         * Registers a handler to be executed when a user presses a specific key.
         */
        registerKeyHandler(key: string, handler: Function): void;
        /**
         * Repaints the UI component without reloading data. Call it to update the UI component's markup.
         */
        repaint(): void;
    }
    /**
     * 
     */
    export interface dxAccordionOptions extends CollectionWidgetOptions<dxAccordion> {
        /**
         * A number specifying the time in milliseconds spent on the animation of the expanding or collapsing of a panel.
         */
        animationDuration?: number;
        /**
         * Specifies whether all items can be collapsed or whether at least one item must always be expanded.
         */
        collapsible?: boolean;
        /**
         * Binds the UI component to data.
         */
        dataSource?: string | Array<string | dxAccordionItem | any> | DevExpress.data.DataSource | DevExpress.data.DataSourceOptions;
        /**
         * Specifies whether to render the panel's content when it is displayed. If false, the content is rendered immediately.
         */
        deferRendering?: boolean;
        /**
         * Specifies whether the UI component can be focused using keyboard navigation.
         */
        focusStateEnabled?: boolean;
        /**
         * Specifies the UI component's height.
         */
        height?: number | string | (() => number | string);
        /**
         * Specifies whether the UI component changes its state when a user pauses on it.
         */
        hoverStateEnabled?: boolean;
        /**
         * Specifies a custom template for items.
         */
        itemTemplate?: DevExpress.core.template | ((itemData: any, itemIndex: number, itemElement: DevExpress.core.dxElement) => string | Element | JQuery);
        /**
         * Specifies a custom template for item titles.
         */
        itemTitleTemplate?: DevExpress.core.template | ((itemData: any, itemIndex: number, itemElement: DevExpress.core.dxElement) => string | Element | JQuery);
        /**
         * An array of items displayed by the UI component.
         */
        items?: Array<string | dxAccordionItem | any>;
        /**
         * Specifies whether the UI component can expand several items or only a single item at once.
         */
        multiple?: boolean;
        /**
         * A function that is executed when an accordion item's title is clicked or tapped.
         */
        onItemTitleClick?: ((e: { component?: dxAccordion, element?: DevExpress.core.dxElement, model?: any, itemData?: any, itemElement?: DevExpress.core.dxElement, itemIndex?: number, event?: DevExpress.events.event }) => any) | string;
        /**
         * Specifies whether to repaint only those elements whose data changed.
         */
        repaintChangesOnly?: boolean;
        /**
         * [tags] expandedItem, expand The index number of the currently expanded item.
         */
        selectedIndex?: number;
    }
    /**
     * The Accordion UI component contains several panels displayed one under another. These panels can be collapsed or expanded by an end user, which makes this UI component very useful for presenting information in a limited amount of space.
     */
    export class dxAccordion extends CollectionWidget {
        constructor(element: Element, options?: dxAccordionOptions)
        constructor(element: JQuery, options?: dxAccordionOptions)
        /**
         * Collapses an item with a specific index.
         */
        collapseItem(index: number): Promise<void> & JQueryPromise<void>;
        /**
         * Expands an item with a specific index.
         */
        expandItem(index: number): Promise<void> & JQueryPromise<void>;
        /**
         * Updates the dimensions of the UI component contents.
         */
        updateDimensions(): Promise<void> & JQueryPromise<void>;
    }
    /**
     * 
     */
    export interface dxAccordionItem extends CollectionWidgetItem {
        /**
         * Specifies the icon to be displayed in the panel's title.
         */
        icon?: string;
        /**
         * Specifies text displayed for the UI component item title.
         */
        title?: string;
    }
    /**
     * 
     */
    export interface dxActionSheetOptions extends CollectionWidgetOptions<dxActionSheet> {
        /**
         * The text displayed in the button that closes the action sheet.
         */
        cancelText?: string;
        /**
         * Binds the UI component to data.
         */
        dataSource?: string | Array<string | dxActionSheetItem | any> | DevExpress.data.DataSource | DevExpress.data.DataSourceOptions;
        /**
         * An array of items displayed by the UI component.
         */
        items?: Array<string | dxActionSheetItem | any>;
        /**
         * A function that is executed when the Cancel button is clicked or tapped.
         */
        onCancelClick?: ((e: { component?: dxActionSheet, element?: DevExpress.core.dxElement, model?: any, cancel?: boolean }) => any) | string;
        /**
         * Specifies whether or not to display the Cancel button in action sheet.
         */
        showCancelButton?: boolean;
        /**
         * A Boolean value specifying whether or not the title of the action sheet is visible.
         */
        showTitle?: boolean;
        /**
         * Specifies the element the action sheet popover points at. Applies only if usePopover is true.
         */
        target?: string | Element | JQuery;
        /**
         * The title of the action sheet.
         */
        title?: string;
        /**
         * Specifies whether or not to show the action sheet within a Popover UI component.
         */
        usePopover?: boolean;
        /**
         * A Boolean value specifying whether or not the ActionSheet UI component is visible.
         */
        visible?: boolean;
    }
    /**
     * The ActionSheet UI component is a sheet containing a set of buttons located one under the other. These buttons usually represent several choices relating to a single task.
     */
    export class dxActionSheet extends CollectionWidget {
        constructor(element: Element, options?: dxActionSheetOptions)
        constructor(element: JQuery, options?: dxActionSheetOptions)
        /**
         * Hides the UI component.
         */
        hide(): Promise<void> & JQueryPromise<void>;
        /**
         * Shows the UI component.
         */
        show(): Promise<void> & JQueryPromise<void>;
        /**
         * Shows or hides the UI component depending on the argument.
         */
        toggle(showing: boolean): Promise<void> & JQueryPromise<void>;
    }
    /**
     * 
     */
    export interface dxActionSheetItem extends CollectionWidgetItem {
        /**
         * Specifies the icon to be displayed on the action sheet button.
         */
        icon?: string;
        /**
         * A handler for the click event raised for the button representing the given action sheet button.
         */
        onClick?: ((e: { component?: dxActionSheet, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event }) => any) | string;
        /**
         * Specifies the type of the button that represents an action sheet item.
         */
        type?: 'back' | 'danger' | 'default' | 'normal' | 'success';
    }
    /**
     * 
     */
    export interface dxAutocompleteOptions extends dxDropDownListOptions<dxAutocomplete> {
        /**
         * Specifies the maximum count of items displayed by the UI component.
         */
        maxItemCount?: number;
        /**
         * The minimum number of characters that must be entered into the text box to begin a search.
         */
        minSearchLength?: number;
        /**
         * Specifies whether the drop-down button is visible.
         */
        showDropDownButton?: boolean;
        /**
         * Specifies the current value displayed by the UI component.
         */
        value?: string;
    }
    /**
     * The Autocomplete UI component is a textbox that provides suggestions while a user types into it.
     */
    export class dxAutocomplete extends dxDropDownList {
        constructor(element: Element, options?: dxAutocompleteOptions)
        constructor(element: JQuery, options?: dxAutocompleteOptions)
    }
    /**
     * 
     */
    export interface dxBoxOptions extends CollectionWidgetOptions<dxBox> {
        /**
         * Specifies how UI component items are aligned along the main direction.
         */
        align?: 'center' | 'end' | 'space-around' | 'space-between' | 'start';
        /**
         * Specifies how UI component items are aligned cross-wise.
         */
        crossAlign?: 'center' | 'end' | 'start' | 'stretch';
        /**
         * Binds the UI component to data.
         */
        dataSource?: string | Array<string | dxBoxItem | any> | DevExpress.data.DataSource | DevExpress.data.DataSourceOptions;
        /**
         * Specifies the direction of item positioning in the UI component.
         */
        direction?: 'col' | 'row';
        /**
         * An array of items displayed by the UI component.
         */
        items?: Array<string | dxBoxItem | any>;
    }
    /**
     * The Box UI component allows you to arrange various elements within it. Separate and adaptive, the Box UI component acts as a building block for the layout.
     */
    export class dxBox extends CollectionWidget {
        constructor(element: Element, options?: dxBoxOptions)
        constructor(element: JQuery, options?: dxBoxOptions)
    }
    /**
     * 
     */
    export interface dxBoxItem extends CollectionWidgetItem {
        /**
         * Specifies the base size of an item element along the main direction.
         */
        baseSize?: number | 'auto';
        /**
         * Holds a Box configuration object for the item.
         */
        box?: dxBoxOptions;
        /**
         * Specifies the ratio value used to count the item element size along the main direction.
         */
        ratio?: number;
        /**
         * A factor that defines how much an item shrinks relative to the rest of the items in the container.
         */
        shrink?: number;
    }
    /**
     * 
     */
    export interface dxButtonOptions extends WidgetOptions<dxButton> {
        /**
         * A Boolean value specifying whether or not the UI component changes its state when interacting with a user.
         */
        activeStateEnabled?: boolean;
        /**
         * Specifies whether the UI component can be focused using keyboard navigation.
         */
        focusStateEnabled?: boolean;
        /**
         * Specifies whether the UI component changes its state when a user pauses on it.
         */
        hoverStateEnabled?: boolean;
        /**
         * Specifies the icon to be displayed on the button.
         */
        icon?: string;
        /**
         * A function that is executed when the Button is clicked or tapped.
         */
        onClick?: ((e: { component?: dxButton, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, validationGroup?: any }) => any);
        /**
         * Specifies how the button is styled.
         */
        stylingMode?: 'text' | 'outlined' | 'contained';
        /**
         * Specifies a custom template for the Button UI component.
         */
        template?: DevExpress.core.template | ((buttonData: { text?: string, icon?: string }, contentElement: DevExpress.core.dxElement) => string | Element | JQuery);
        /**
         * The text displayed on the button.
         */
        text?: string;
        /**
         * Specifies the button type.
         */
        type?: 'back' | 'danger' | 'default' | 'normal' | 'success';
        /**
         * Specifies whether the button submits an HTML form.
         */
        useSubmitBehavior?: boolean;
        /**
         * Specifies the name of the validation group to be accessed in the click event handler.
         */
        validationGroup?: string;
    }
    /**
     * The Button UI component is a simple button that performs specified commands when a user clicks it.
     */
    export class dxButton extends Widget {
        constructor(element: Element, options?: dxButtonOptions)
        constructor(element: JQuery, options?: dxButtonOptions)
    }
    /**
     * 
     */
    export interface dxButtonGroupOptions extends WidgetOptions<dxButtonGroup> {
        /**
         * Specifies a template for all the buttons in the group.
         */
        buttonTemplate?: DevExpress.core.template | ((buttonData: any, buttonContent: DevExpress.core.dxElement) => string | Element | JQuery);
        /**
         * Specifies whether the UI component can be focused using keyboard navigation.
         */
        focusStateEnabled?: boolean;
        /**
         * Specifies whether the UI component changes its state when a user pauses on it.
         */
        hoverStateEnabled?: boolean;
        /**
         * Configures buttons in the group.
         */
        items?: Array<dxButtonGroupItem>;
        /**
         * Specifies which data field provides keys used to distinguish between the selected buttons.
         */
        keyExpr?: string | Function;
        /**
         * A function that is executed when a button is clicked or tapped.
         */
        onItemClick?: ((e: { component?: dxButtonGroup, element?: DevExpress.core.dxElement, model?: any, itemData?: any, itemElement?: DevExpress.core.dxElement, itemIndex?: number, event?: DevExpress.events.event }) => any);
        /**
         * A function that is executed when a button is selected or selection is canceled.
         */
        onSelectionChanged?: ((e: { component?: dxButtonGroup, element?: DevExpress.core.dxElement, model?: any, addedItems?: Array<any>, removedItems?: Array<any> }) => any);
        /**
         * Contains the keys of the selected buttons and allows selecting buttons initially.
         */
        selectedItemKeys?: Array<any>;
        /**
         * Contains the data objects that correspond to the selected buttons. The data objects are taken from the items array.
         */
        selectedItems?: Array<any>;
        /**
         * Specifies whether a single or multiple buttons can be in the selected state simultaneously.
         */
        selectionMode?: 'multiple' | 'single';
        /**
         * Specifies how buttons in the group are styled.
         */
        stylingMode?: 'text' | 'outlined' | 'contained';
    }
    /**
     * The ButtonGroup is a UI component that contains a set of toggle buttons and can be used as a mode switcher.
     */
    export class dxButtonGroup extends Widget {
        constructor(element: Element, options?: dxButtonGroupOptions)
        constructor(element: JQuery, options?: dxButtonGroupOptions)
    }
    /**
     * 
     */
    export interface dxButtonGroupItem extends CollectionWidgetItem {
        /**
         * Specifies a text for the hint that appears when the button is hovered over or long-pressed.
         */
        hint?: string;
        /**
         * Specifies the icon to be displayed on the button.
         */
        icon?: string;
        /**
         * Specifies the button type.
         */
        type?: 'back' | 'danger' | 'default' | 'normal' | 'success';
    }
    /**
     * 
     */
    export interface dxCalendarOptions extends EditorOptions<dxCalendar> {
        /**
         * Specifies whether or not the UI component changes its state when interacting with a user.
         */
        activeStateEnabled?: boolean;
        /**
         * Specifies a custom template for calendar cells.
         */
        cellTemplate?: DevExpress.core.template | ((itemData: { date?: Date, view?: string, text?: string }, itemIndex: number, itemElement: DevExpress.core.dxElement) => string | Element | JQuery);
        /**
         * Specifies the date-time value serialization format. Use it only if you do not specify the value at design time.
         */
        dateSerializationFormat?: string;
        /**
         * Specifies dates that users cannot select.
         */
        disabledDates?: Array<Date> | ((data: { component?: any, date?: Date, view?: string }) => boolean);
        /**
         * Specifies the first day of a week.
         */
        firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
        /**
         * Specifies whether the UI component can be focused using keyboard navigation.
         */
        focusStateEnabled?: boolean;
        /**
         * Specifies whether the UI component changes its state when a user pauses on it.
         */
        hoverStateEnabled?: boolean;
        /**
         * The latest date the UI component allows to select.
         */
        max?: Date | number | string;
        /**
         * Specifies the maximum zoom level of the calendar.
         */
        maxZoomLevel?: 'century' | 'decade' | 'month' | 'year';
        /**
         * The earliest date the UI component allows to select.
         */
        min?: Date | number | string;
        /**
         * Specifies the minimum zoom level of the calendar.
         */
        minZoomLevel?: 'century' | 'decade' | 'month' | 'year';
        /**
         * The value to be assigned to the `name` attribute of the underlying HTML element.
         */
        name?: string;
        /**
         * Specifies whether or not the UI component displays a button that selects the current date.
         */
        showTodayButton?: boolean;
        /**
         * An object or a value specifying the date and time currently selected in the calendar.
         */
        value?: Date | number | string;
        /**
         * Specifies the current calendar zoom level.
         */
        zoomLevel?: 'century' | 'decade' | 'month' | 'year';
    }
    /**
     * The Calendar is a UI component that displays a calendar and allows an end user to select the required date within a specified date range.
     */
    export class dxCalendar extends Editor {
        constructor(element: Element, options?: dxCalendarOptions)
        constructor(element: JQuery, options?: dxCalendarOptions)
    }
    /**
     * 
     */
    export interface dxCheckBoxOptions extends EditorOptions<dxCheckBox> {
        /**
         * Specifies whether or not the UI component changes its state when interacting with a user.
         */
        activeStateEnabled?: boolean;
        /**
         * Specifies whether the UI component can be focused using keyboard navigation.
         */
        focusStateEnabled?: boolean;
        /**
         * Specifies whether the UI component changes its state when a user pauses on it.
         */
        hoverStateEnabled?: boolean;
        /**
         * The value to be assigned to the `name` attribute of the underlying HTML element.
         */
        name?: string;
        /**
         * Specifies the text displayed by the check box.
         */
        text?: string;
        /**
         * Specifies the UI component state.
         */
        value?: boolean | undefined;
    }
    /**
     * The CheckBox is a small box, which when selected by the end user, shows that a particular feature has been enabled or a specific property has been chosen.
     */
    export class dxCheckBox extends Editor {
        constructor(element: Element, options?: dxCheckBoxOptions)
        constructor(element: JQuery, options?: dxCheckBoxOptions)
    }
    /**
     * 
     */
    export interface dxColorBoxOptions extends dxDropDownEditorOptions<dxColorBox> {
        /**
         * Specifies the text displayed on the button that applies changes and closes the drop-down editor.
         */
        applyButtonText?: string;
        /**
         * Specifies the way an end-user applies the selected value.
         */
        applyValueMode?: 'instantly' | 'useButtons';
        /**
         * Specifies the text displayed on the button that cancels changes and closes the drop-down editor.
         */
        cancelButtonText?: string;
        /**
         * Specifies whether or not the UI component value includes the alpha channel component.
         */
        editAlphaChannel?: boolean;
        /**
         * Specifies a custom template for the input field. Must contain the TextBox UI component.
         */
        fieldTemplate?: DevExpress.core.template | ((value: string, fieldElement: DevExpress.core.dxElement) => string | Element | JQuery);
        /**
         * Specifies the size of a step by which a handle is moved using a keyboard shortcut.
         */
        keyStep?: number;
        /**
         * Specifies the currently selected value.
         */
        value?: string;
    }
    /**
     * The ColorBox is a UI component that allows an end user to enter a color or pick it out from the drop-down editor.
     */
    export class dxColorBox extends dxDropDownEditor {
        constructor(element: Element, options?: dxColorBoxOptions)
        constructor(element: JQuery, options?: dxColorBoxOptions)
    }
    /**
     * 
     */
    export interface dxContextMenuOptions extends dxMenuBaseOptions<dxContextMenu> {
        /**
         * Specifies whether to close the UI component if a user clicks outside it.
         */
        closeOnOutsideClick?: boolean | ((event: DevExpress.events.event) => boolean);
        /**
         * Binds the UI component to data.
         */
        dataSource?: string | Array<dxContextMenuItem> | DevExpress.data.DataSource | DevExpress.data.DataSourceOptions;
        /**
         * Holds an array of menu items.
         */
        items?: Array<dxContextMenuItem>;
        /**
         * A function that is executed after the ContextMenu is hidden.
         */
        onHidden?: ((e: { component?: dxContextMenu, element?: DevExpress.core.dxElement, model?: any }) => any);
        /**
         * A function that is executed before the ContextMenu is hidden.
         */
        onHiding?: ((e: { component?: dxContextMenu, element?: DevExpress.core.dxElement, model?: any, cancel?: boolean }) => any);
        /**
         * A function that is executed before the ContextMenu is positioned.
         */
        onPositioning?: ((e: { component?: dxContextMenu, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, position?: positionConfig }) => any);
        /**
         * A function that is executed before the ContextMenu is shown.
         */
        onShowing?: ((e: { component?: dxContextMenu, element?: DevExpress.core.dxElement, model?: any, cancel?: boolean }) => any);
        /**
         * A function that is executed after the ContextMenu is shown.
         */
        onShown?: ((e: { component?: dxContextMenu, element?: DevExpress.core.dxElement, model?: any }) => any);
        /**
         * An object defining UI component positioning properties.
         */
        position?: positionConfig;
        /**
         * Specifies properties for displaying the UI component.
         */
        showEvent?: { delay?: number, name?: string } | string;
        /**
         * Specifies the direction at which submenus are displayed.
         */
        submenuDirection?: 'auto' | 'left' | 'right';
        /**
         * The target element associated with the context menu.
         */
        target?: string | Element | JQuery;
        /**
         * A Boolean value specifying whether or not the UI component is visible.
         */
        visible?: boolean;
    }
    /**
     * The ContextMenu UI component displays a single- or multi-level context menu. An end user invokes this menu by a right click or a long press.
     */
    export class dxContextMenu extends dxMenuBase {
        constructor(element: Element, options?: dxContextMenuOptions)
        constructor(element: JQuery, options?: dxContextMenuOptions)
        /**
         * Hides the UI component.
         */
        hide(): Promise<void> & JQueryPromise<void>;
        /**
         * Shows the UI component.
         */
        show(): Promise<void> & JQueryPromise<void>;
        /**
         * Shows or hides the UI component depending on the argument.
         */
        toggle(showing: boolean): Promise<void> & JQueryPromise<void>;
    }
    /**
     * 
     */
    export interface dxContextMenuItem extends dxMenuBaseItem {
        /**
         * Specifies nested menu items.
         */
        items?: Array<dxContextMenuItem>;
    }
    /**
     * 
     */
    export interface dxDataGridOptions extends GridBaseOptions<dxDataGrid> {
        /**
         * An array of grid columns.
         */
        columns?: Array<dxDataGridColumn | string>;
        /**
         * Customizes columns after they are created.
         */
        customizeColumns?: ((columns: Array<dxDataGridColumn>) => any);
        /**
         * Customizes data before export.
         * @deprecated Since v20.1, we recommend ExcelJS-based export which does not use this property.
         */
        customizeExportData?: ((columns: Array<dxDataGridColumn>, rows: Array<dxDataGridRowObject>) => any);
        /**
         * Configures editing.
         */
        editing?: dxDataGridEditing;
        /**
         * [tags] xlsx, csv Configures client-side exporting.
         */
        export?: { allowExportSelectedData?: boolean, customizeExcelCell?: ((options: { component?: dxDataGrid, horizontalAlignment?: 'center' | 'centerContinuous' | 'distributed' | 'fill' | 'general' | 'justify' | 'left' | 'right', verticalAlignment?: 'bottom' | 'center' | 'distributed' | 'justify' | 'top', wrapTextEnabled?: boolean, backgroundColor?: string, fillPatternType?: 'darkDown' | 'darkGray' | 'darkGrid' | 'darkHorizontal' | 'darkTrellis' | 'darkUp' | 'darkVertical' | 'gray0625' | 'gray125' | 'lightDown' | 'lightGray' | 'lightGrid' | 'lightHorizontal' | 'lightTrellis' | 'lightUp' | 'lightVertical' | 'mediumGray' | 'none' | 'solid', fillPatternColor?: string, font?: DevExpress.exporter.ExcelFont, value?: string | number | Date, numberFormat?: string, gridCell?: DevExpress.excelExporter.ExcelDataGridCell }) => any), enabled?: boolean, excelFilterEnabled?: boolean, excelWrapTextEnabled?: boolean, fileName?: string, ignoreExcelErrors?: boolean, proxyUrl?: string, texts?: { exportAll?: string, exportSelectedRows?: string, exportTo?: string } };
        /**
         * Configures the group panel.
         */
        groupPanel?: { allowColumnDragging?: boolean, emptyPanelText?: string, visible?: boolean | 'auto' };
        /**
         * Configures grouping.
         */
        grouping?: { allowCollapsing?: boolean, autoExpandAll?: boolean, contextMenuEnabled?: boolean, expandMode?: 'buttonClick' | 'rowClick', texts?: { groupByThisColumn?: string, groupContinuedMessage?: string, groupContinuesMessage?: string, ungroup?: string, ungroupAll?: string } };
        /**
         * Specifies the key property (or properties) that provide(s) key values to access data items. Each key value must be unique. This property applies only if data is a simple array.
         */
        keyExpr?: string | Array<string>;
        /**
         * Allows you to build a master-detail interface in the grid.
         */
        masterDetail?: { autoExpandAll?: boolean, enabled?: boolean, template?: DevExpress.core.template | ((detailElement: DevExpress.core.dxElement, detailInfo: { key?: any, data?: any, watch?: Function }) => any) };
        /**
         * A function that is executed when a cell is clicked or tapped. Executed before onRowClick.
         */
        onCellClick?: ((e: { component?: dxDataGrid, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, data?: any, key?: any, value?: any, displayValue?: any, text?: string, columnIndex?: number, column?: any, rowIndex?: number, rowType?: string, cellElement?: DevExpress.core.dxElement, row?: dxDataGridRowObject }) => any) | string;
        /**
         * A function that is executed when a cell is double-clicked or double-tapped. Executed before onRowDblClick.
         */
        onCellDblClick?: ((e: { component?: dxDataGrid, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, data?: any, key?: any, value?: any, displayValue?: any, text?: string, columnIndex?: number, column?: dxDataGridColumn, rowIndex?: number, rowType?: string, cellElement?: DevExpress.core.dxElement, row?: dxDataGridRowObject }) => any);
        /**
         * A function that is executed after the pointer enters or leaves a cell.
         */
        onCellHoverChanged?: ((e: { component?: dxDataGrid, element?: DevExpress.core.dxElement, model?: any, eventType?: string, data?: any, key?: any, value?: any, text?: string, displayValue?: any, columnIndex?: number, rowIndex?: number, column?: dxDataGridColumn, rowType?: string, cellElement?: DevExpress.core.dxElement, row?: dxDataGridRowObject }) => any);
        /**
         * A function that is executed after a grid cell is created.
         */
        onCellPrepared?: ((e: { component?: dxDataGrid, element?: DevExpress.core.dxElement, model?: any, data?: any, key?: any, value?: any, displayValue?: any, text?: string, columnIndex?: number, column?: dxDataGridColumn, rowIndex?: number, rowType?: string, row?: dxDataGridRowObject, isSelected?: boolean, isExpanded?: boolean, isNewRow?: boolean, cellElement?: DevExpress.core.dxElement, watch?: Function, oldValue?: any }) => any);
        /**
         * A function that is executed before the context menu is rendered.
         */
        onContextMenuPreparing?: ((e: { component?: dxDataGrid, element?: DevExpress.core.dxElement, model?: any, items?: Array<any>, target?: string, targetElement?: DevExpress.core.dxElement, columnIndex?: number, column?: dxDataGridColumn, rowIndex?: number, row?: dxDataGridRowObject }) => any);
        /**
         * A function that is executed before a cell or row switches to the editing state.
         */
        onEditingStart?: ((e: { component?: dxDataGrid, element?: DevExpress.core.dxElement, model?: any, data?: any, key?: any, cancel?: boolean, column?: any }) => any);
        /**
         * A function that is executed after an editor is created. Not executed for cells with an editCellTemplate.
         */
        onEditorPrepared?: ((options: { component?: dxDataGrid, element?: DevExpress.core.dxElement, model?: any, parentType?: string, value?: any, setValue?: any, updateValueTimeout?: number, width?: number, disabled?: boolean, rtlEnabled?: boolean, editorElement?: DevExpress.core.dxElement, readOnly?: boolean, dataField?: string, row?: dxDataGridRowObject }) => any);
        /**
         * A function used to customize a cell's editor. Not executed for cells with an editCellTemplate.
         */
        onEditorPreparing?: ((e: { component?: dxDataGrid, element?: DevExpress.core.dxElement, model?: any, parentType?: string, value?: any, setValue?: any, updateValueTimeout?: number, width?: number, disabled?: boolean, rtlEnabled?: boolean, cancel?: boolean, editorElement?: DevExpress.core.dxElement, readOnly?: boolean, editorName?: string, editorOptions?: any, dataField?: string, row?: dxDataGridRowObject }) => any);
        /**
         * A function that is executed after data is exported.
         * @deprecated Since v20.1, we recommend ExcelJS-based export which does not use this property.
         */
        onExported?: ((e: { component?: dxDataGrid, element?: DevExpress.core.dxElement, model?: any }) => any);
        /**
         * A function that is executed before data is exported.
         */
        onExporting?: ((e: { component?: dxDataGrid, element?: DevExpress.core.dxElement, model?: any, fileName?: string, cancel?: boolean }) => any);
        /**
         * A function that is executed before a file with exported data is saved to the user's local storage.
         * @deprecated Since v20.1, we recommend ExcelJS-based export which does not use this property.
         */
        onFileSaving?: ((e: { component?: dxDataGrid, element?: DevExpress.core.dxElement, fileName?: string, format?: string, data?: Blob, cancel?: boolean }) => any);
        /**
         * A function that is executed after the focused cell changes. Applies only to cells in data or group rows.
         */
        onFocusedCellChanged?: ((e: { component?: dxDataGrid, element?: DevExpress.core.dxElement, model?: any, cellElement?: DevExpress.core.dxElement, columnIndex?: number, rowIndex?: number, row?: dxDataGridRowObject, column?: dxDataGridColumn }) => any);
        /**
         * A function that is executed before the focused cell changes. Applies only to cells in data or group rows.
         */
        onFocusedCellChanging?: ((e: { component?: dxDataGrid, element?: DevExpress.core.dxElement, model?: any, cellElement?: DevExpress.core.dxElement, prevColumnIndex?: number, prevRowIndex?: number, newColumnIndex?: number, newRowIndex?: number, event?: DevExpress.events.event, rows?: Array<dxDataGridRowObject>, columns?: Array<dxDataGridColumn>, cancel?: boolean, isHighlighted?: boolean }) => any);
        /**
         * A function that is executed after the focused row changes. Applies only to data or group rows. focusedRowEnabled should be true.
         */
        onFocusedRowChanged?: ((e: { component?: dxDataGrid, element?: DevExpress.core.dxElement, model?: any, rowElement?: DevExpress.core.dxElement, rowIndex?: number, row?: dxDataGridRowObject }) => any);
        /**
         * A function that is executed before the focused row changes. Applies only to data or group rows. focusedRowEnabled should be true.
         */
        onFocusedRowChanging?: ((e: { component?: dxDataGrid, element?: DevExpress.core.dxElement, model?: any, rowElement?: DevExpress.core.dxElement, prevRowIndex?: number, newRowIndex?: number, event?: DevExpress.events.event, rows?: Array<dxDataGridRowObject>, cancel?: boolean }) => any);
        /**
         * A function that is executed when a row is clicked or tapped.
         */
        onRowClick?: ((e: { component?: dxDataGrid, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, data?: any, key?: any, values?: Array<any>, columns?: Array<any>, rowIndex?: number, rowType?: string, isSelected?: boolean, isExpanded?: boolean, isNewRow?: boolean, groupIndex?: number, rowElement?: DevExpress.core.dxElement, handled?: boolean }) => any) | string;
        /**
         * A function that is executed when a row is double-clicked or double-tapped. Executed after onCellDblClick.
         */
        onRowDblClick?: ((e: { component?: dxDataGrid, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, data?: any, key?: any, values?: Array<any>, columns?: Array<dxDataGridColumn>, rowIndex?: number, rowType?: string, isSelected?: boolean, isExpanded?: boolean, isNewRow?: boolean, groupIndex?: number, rowElement?: DevExpress.core.dxElement }) => any);
        /**
         * A function that is executed after a row is created.
         */
        onRowPrepared?: ((e: { component?: dxDataGrid, element?: DevExpress.core.dxElement, model?: any, data?: any, key?: any, values?: Array<any>, columns?: Array<dxDataGridColumn>, rowIndex?: number, rowType?: string, groupIndex?: number, isSelected?: boolean, isExpanded?: boolean, isNewRow?: boolean, rowElement?: DevExpress.core.dxElement }) => any);
        /**
         * Notifies the DataGrid of the server's data processing operations.
         */
        remoteOperations?: boolean | { filtering?: boolean, groupPaging?: boolean, grouping?: boolean, paging?: boolean, sorting?: boolean, summary?: boolean } | 'auto';
        /**
         * Specifies a custom template for rows.
         */
        rowTemplate?: DevExpress.core.template | ((rowElement: DevExpress.core.dxElement, rowInfo: { key?: any, data?: any, component?: dxDataGrid, values?: Array<any>, rowIndex?: number, columns?: Array<dxDataGridColumn>, isSelected?: boolean, rowType?: string, groupIndex?: number, isExpanded?: boolean }) => any);
        /**
         * Configures scrolling.
         */
        scrolling?: dxDataGridScrolling;
        /**
         * Configures runtime selection.
         */
        selection?: dxDataGridSelection;
        /**
         * Specifies filters for the rows that must be selected initially. Applies only if selection.deferred is true.
         */
        selectionFilter?: string | Array<any> | Function;
        /**
         * Allows you to sort groups according to the values of group summary items.
         */
        sortByGroupSummaryInfo?: Array<{ groupColumn?: string, sortOrder?: 'asc' | 'desc', summaryItem?: string | number }>;
        /**
         * Specifies the properties of the grid summary.
         */
        summary?: { calculateCustomSummary?: ((options: { component?: dxDataGrid, name?: string, summaryProcess?: string, value?: any, totalValue?: any, groupIndex?: number }) => any), groupItems?: Array<{ alignByColumn?: boolean, column?: string, customizeText?: ((itemInfo: { value?: string | number | Date, valueText?: string }) => string), displayFormat?: string, name?: string, showInColumn?: string, showInGroupFooter?: boolean, skipEmptyValues?: boolean, summaryType?: 'avg' | 'count' | 'custom' | 'max' | 'min' | 'sum' | string, valueFormat?: format }>, recalculateWhileEditing?: boolean, skipEmptyValues?: boolean, texts?: { avg?: string, avgOtherColumn?: string, count?: string, max?: string, maxOtherColumn?: string, min?: string, minOtherColumn?: string, sum?: string, sumOtherColumn?: string }, totalItems?: Array<{ alignment?: 'center' | 'left' | 'right', column?: string, cssClass?: string, customizeText?: ((itemInfo: { value?: string | number | Date, valueText?: string }) => string), displayFormat?: string, name?: string, showInColumn?: string, skipEmptyValues?: boolean, summaryType?: 'avg' | 'count' | 'custom' | 'max' | 'min' | 'sum' | string, valueFormat?: format }> };
    }
    /**
     * Configures editing.
     */
    export interface dxDataGridEditing extends GridBaseEditing {
        /**
         * Specifies whether a user can add new rows.
         */
        allowAdding?: boolean;
        /**
         * Specifies whether a user can delete rows. It is called for each data row when defined as a function.
         */
        allowDeleting?: boolean | ((options: { component?: dxDataGrid, row?: dxDataGridRowObject }) => boolean);
        /**
         * Specifies whether a user can update rows. It is called for each data row when defined as a function.
         */
        allowUpdating?: boolean | ((options: { component?: dxDataGrid, row?: dxDataGridRowObject }) => boolean);
        /**
         * Contains properties that specify texts for editing-related UI elements.
         */
        texts?: any;
    }
    /**
     * Configures scrolling.
     */
    export interface dxDataGridScrolling extends GridBaseScrolling {
        /**
         * Specifies the scrolling mode.
         */
        mode?: 'infinite' | 'standard' | 'virtual';
    }
    /**
     * Configures runtime selection.
     */
    export interface dxDataGridSelection extends GridBaseSelection {
        /**
         * Makes selection deferred.
         */
        deferred?: boolean;
        /**
         * Specifies the mode in which all the records are selected. Applies only if selection.allowSelectAll is true.
         */
        selectAllMode?: 'allPages' | 'page';
        /**
         * Specifies when to display the selection column and row selection checkboxes. Applies only if selection.mode is 'multiple'.
         */
        showCheckBoxesMode?: 'always' | 'none' | 'onClick' | 'onLongTap';
    }
    /**
     * The DataGrid is a UI component that represents data from a local or remote source in the form of a grid. This UI component offers such basic features as sorting, grouping, filtering, as well as more advanced capabilities, like state storing, client-side exporting, master-detail interface, and many others.
     */
    export class dxDataGrid extends GridBase {
        constructor(element: Element, options?: dxDataGridOptions)
        constructor(element: JQuery, options?: dxDataGridOptions)
        /**
         * Adds a new column.
         */
        addColumn(columnOptions: any | string): void;
        /**
         * Adds an empty data row and switches it to the editing state.
         */
        addRow(): Promise<void> & JQueryPromise<void>;
        /**
         * Ungroups grid records.
         */
        clearGrouping(): void;
        /**
         * Collapses master rows or groups of a specific level.
         */
        collapseAll(groupIndex?: number): void;
        /**
         * Collapses a group or a master row with a specific key.
         */
        collapseRow(key: any): Promise<void> & JQueryPromise<void>;
        /**
         * Expands master rows or groups of a specific level. Does not apply if data is remote.
         */
        expandAll(groupIndex?: number): void;
        /**
         * Expands a group or a master row with a specific key.
         */
        expandRow(key: any): Promise<void> & JQueryPromise<void>;
        /**
         * Exports grid data to Excel.
         * @deprecated Use exportDataGrid instead.
         */
        exportToExcel(selectionOnly: boolean): void;
        /**
         * Gets the currently selected rows' keys.
         */
        getSelectedRowKeys(): Array<any> & Promise<any> & JQueryPromise<any>;
        /**
         * Gets the selected rows' data objects.
         */
        getSelectedRowsData(): Array<any> & Promise<any> & JQueryPromise<any>;
        /**
         * Gets the value of a total summary item.
         */
        getTotalSummaryValue(summaryItemName: string): any;
        /**
         * Gets all visible columns.
         */
        getVisibleColumns(): Array<dxDataGridColumn>;
        /**
         * Gets all visible columns at a specific hierarchical level of column headers. Use it to access banded columns.
         */
        getVisibleColumns(headerLevel: number): Array<dxDataGridColumn>;
        /**
         * Gets currently rendered rows.
         */
        getVisibleRows(): Array<dxDataGridRowObject>;
        /**
         * Checks whether a specific group or master row is expanded or collapsed.
         */
        isRowExpanded(key: any): boolean;
        /**
         * Checks whether a row found using its data object is selected. Takes effect only if selection.deferred is true.
         */
        isRowSelected(data: any): boolean;
        /**
         * Checks whether a row with a specific key is selected.
         */
        isRowSelected(key: any): boolean;
        /**
         * Gets the total row count.
         */
        totalCount(): number;
    }
    /**
     * 
     */
    export interface dxDataGridColumn extends GridBaseColumn {
        /**
         * Specifies whether data from this column should be exported. Applies only if the column is visible.
         */
        allowExporting?: boolean;
        /**
         * Specifies whether the user can group data by values of this column. Applies only when grouping is enabled.
         */
        allowGrouping?: boolean;
        /**
         * Specifies whether groups appear expanded or not when records are grouped by a specific column. Setting this property makes sense only when grouping is allowed for this column.
         */
        autoExpandGroup?: boolean;
        /**
         * Allows you to customize buttons in the edit column or create a custom command column. Applies only if the column's type is 'buttons'.
         */
        buttons?: Array<'cancel' | 'delete' | 'edit' | 'save' | 'undelete' | dxDataGridColumnButton>;
        /**
         * Sets custom column values used to group grid records.
         */
        calculateGroupValue?: string | ((rowData: any) => any);
        /**
         * Specifies a custom template for data cells.
         */
        cellTemplate?: DevExpress.core.template | ((cellElement: DevExpress.core.dxElement, cellInfo: { data?: any, component?: dxDataGrid, value?: any, oldValue?: any, displayValue?: any, text?: string, columnIndex?: number, rowIndex?: number, column?: dxDataGridColumn, row?: dxDataGridRowObject, rowType?: string, watch?: Function }) => any);
        /**
         * An array of grid columns.
         */
        columns?: Array<dxDataGridColumn | string>;
        /**
         * Specifies a custom template for data cells in editing state.
         */
        editCellTemplate?: DevExpress.core.template | ((cellElement: DevExpress.core.dxElement, cellInfo: { setValue?: any, data?: any, component?: dxDataGrid, value?: any, displayValue?: any, text?: string, columnIndex?: number, rowIndex?: number, column?: dxDataGridColumn, row?: dxDataGridRowObject, rowType?: string, watch?: Function }) => any);
        /**
         * Specifies a custom template for group cells (group rows).
         */
        groupCellTemplate?: DevExpress.core.template | ((cellElement: DevExpress.core.dxElement, cellInfo: { data?: any, component?: dxDataGrid, value?: any, text?: string, displayValue?: any, columnIndex?: number, rowIndex?: number, column?: dxDataGridColumn, row?: dxDataGridRowObject, summaryItems?: Array<any>, groupContinuesMessage?: string, groupContinuedMessage?: string }) => any);
        /**
         * Specifies the index of a column when grid records are grouped by the values of this column.
         */
        groupIndex?: number;
        /**
         * Specifies a custom template for column headers.
         */
        headerCellTemplate?: DevExpress.core.template | ((columnHeader: DevExpress.core.dxElement, headerInfo: { component?: dxDataGrid, columnIndex?: number, column?: dxDataGridColumn }) => any);
        /**
         * Specifies whether or not to display the column when grid records are grouped by it.
         */
        showWhenGrouped?: boolean;
        /**
         * Specifies the command column that this object customizes.
         */
        type?: 'adaptive' | 'buttons' | 'detailExpand' | 'groupExpand' | 'selection' | 'drag';
    }
    /**
     * Allows you to customize buttons in the edit column or create a custom command column. Applies only if the column's type is 'buttons'.
     */
    export interface dxDataGridColumnButton extends GridBaseColumnButton {
        /**
         * The name used to identify a built-in button.
         */
        name?: 'cancel' | 'delete' | 'edit' | 'save' | 'undelete' | string;
        /**
         * A function that is executed when the button is clicked or tapped. Not executed if a template is used.
         */
        onClick?: ((e: { component?: dxDataGrid, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, row?: dxDataGridRowObject, column?: dxDataGridColumn }) => any) | string;
        /**
         * Specifies a custom button template.
         */
        template?: DevExpress.core.template | ((cellElement: DevExpress.core.dxElement, cellInfo: { component?: dxDataGrid, data?: any, key?: any, columnIndex?: number, column?: dxDataGridColumn, rowIndex?: number, rowType?: string, row?: dxDataGridRowObject }) => string | Element | JQuery);
        /**
         * Specifies the button's visibility.
         */
        visible?: boolean | ((options: { component?: dxDataGrid, row?: dxDataGridRowObject, column?: dxDataGridColumn }) => boolean);
    }
    /**
     * A grid row.
     */
    export interface dxDataGridRowObject {
        /**
         * The data object represented by the row.
         */
        data?: any;
        /**
         * The group index of the row. Available when the rowType is 'group'.
         */
        groupIndex?: number;
        /**
         * Indicates whether the row is in the editing state.
         */
        isEditing?: boolean;
        /**
         * Indicates whether the row is expanded or collapsed. Available if rowType is 'data', 'detail' or 'group'.
         */
        isExpanded?: boolean;
        /**
         * Indicates that the row is added, but not yet saved. Available if rowType is 'data'.
         */
        isNewRow?: boolean;
        /**
         * Indicates whether the row is selected. Available if rowType is 'data'.
         */
        isSelected?: boolean;
        /**
         * The key of the data object represented by the row.
         */
        key?: any;
        /**
         * The visible index of the row.
         */
        rowIndex?: number;
        /**
         * The row's type.
         */
        rowType?: string;
        /**
         * Values of the row as they exist in the data source.
         */
        values?: Array<any>;
    }
    /**
     * 
     */
    export interface dxDateBoxOptions extends dxDropDownEditorOptions<dxDateBox> {
        /**
         * Specifies whether or not adaptive UI component rendering is enabled on a small screen.
         */
        adaptivityEnabled?: boolean;
        /**
         * The text displayed on the Apply button.
         */
        applyButtonText?: string;
        /**
         * Configures the calendar's value picker. Applies only if the pickerType is 'calendar'.
         */
        calendarOptions?: dxCalendarOptions;
        /**
         * The text displayed on the Cancel button.
         */
        cancelButtonText?: string;
        /**
         * Specifies the message displayed if the specified date is later than the max value or earlier than the min value.
         */
        dateOutOfRangeMessage?: string;
        /**
         * Specifies the date-time value serialization format. Use it only if you do not specify the value at design time.
         */
        dateSerializationFormat?: string;
        /**
         * Specifies dates that users cannot select. Applies only if pickerType is 'calendar'.
         */
        disabledDates?: Array<Date> | ((data: { component?: dxDateBox, date?: Date, view?: string }) => boolean);
        /**
         * Specifies the date display format. Ignored if the pickerType property is 'native'
         */
        displayFormat?: format;
        /**
         * Specifies the interval between neighboring values in the popup list in minutes.
         */
        interval?: number;
        /**
         * Specifies the message displayed if the typed value is not a valid date or time.
         */
        invalidDateMessage?: string;
        /**
         * The last date that can be selected within the UI component.
         */
        max?: Date | number | string;
        /**
         * The minimum date that can be selected within the UI component.
         */
        min?: Date | number | string;
        /**
         * Specifies the type of the date/time picker.
         */
        pickerType?: 'calendar' | 'list' | 'native' | 'rollers';
        /**
         * Specifies a placeholder for the input field.
         */
        placeholder?: string;
        /**
         * Specifies whether to show the analog clock in the value picker. Applies only if type is 'datetime' and pickerType is 'calendar'.
         */
        showAnalogClock?: boolean;
        /**
         * A format used to display date/time information.
         */
        type?: 'date' | 'datetime' | 'time';
        /**
         * Specifies whether to control user input using a mask created based on the displayFormat.
         */
        useMaskBehavior?: boolean;
        /**
         * An object or a value specifying the date and time currently selected using the date box.
         */
        value?: Date | number | string;
    }
    /**
     * The DateBox is a UI component that displays date and time in a specified format, and enables a user to pick or type in the required date/time value.
     */
    export class dxDateBox extends dxDropDownEditor {
        constructor(element: Element, options?: dxDateBoxOptions)
        constructor(element: JQuery, options?: dxDateBoxOptions)
        /**
         * Closes the drop-down editor.
         */
        close(): void;
        /**
         * Opens the drop-down editor.
         */
        open(): void;
    }
    /**
     * 
     */
    export interface dxDeferRenderingOptions extends WidgetOptions<dxDeferRendering> {
        /**
         * Specifies the animation to be used to show the rendered content.
         */
        animation?: animationConfig;
        /**
         * A function that is executed when the content is rendered but not yet displayed.
         */
        onRendered?: ((e: { component?: dxDeferRendering, element?: DevExpress.core.dxElement, model?: any }) => any);
        /**
         * A function that is executed when the content is displayed and animation is completed.
         */
        onShown?: ((e: { component?: dxDeferRendering, element?: DevExpress.core.dxElement, model?: any }) => any);
        /**
         * Specifies when the UI component content is rendered.
         */
        renderWhen?: Promise<void> | JQueryPromise<void> | boolean;
        /**
         * Indicates if a load indicator should be shown until the UI component's content is rendered.
         */
        showLoadIndicator?: boolean;
        /**
         * Specifies a jQuery selector of items that should be rendered using a staggered animation.
         */
        staggerItemSelector?: string;
    }
    /**
     * The DeferRendering is a UI component that waits for its content to be ready before rendering it. While the content is getting ready, the DeferRendering displays a loading indicator.
     */
    export class dxDeferRendering extends Widget {
        constructor(element: Element, options?: dxDeferRenderingOptions)
        constructor(element: JQuery, options?: dxDeferRenderingOptions)
    }
    /**
     * 
     */
    export interface dxDiagramOptions extends WidgetOptions<dxDiagram> {
        /**
         * Specifies how the Diagram UI component automatically zooms the work area.
         */
        autoZoomMode?: 'fitContent' | 'fitWidth' | 'disabled';
        /**
         * Configures the context menu's settings.
         */
        contextMenu?: { commands?: Array<dxDiagramCustomCommand> | Array<'separator' | 'exportSvg' | 'exportPng' | 'exportJpg' | 'undo' | 'redo' | 'cut' | 'copy' | 'paste' | 'selectAll' | 'delete' | 'fontName' | 'fontSize' | 'bold' | 'italic' | 'underline' | 'fontColor' | 'lineColor' | 'fillColor' | 'textAlignLeft' | 'textAlignCenter' | 'textAlignRight' | 'lock' | 'unlock' | 'sendToBack' | 'bringToFront' | 'insertShapeImage' | 'editShapeImage' | 'deleteShapeImage' | 'connectorLineType' | 'connectorLineStart' | 'connectorLineEnd' | 'layoutTreeTopToBottom' | 'layoutTreeBottomToTop' | 'layoutTreeLeftToRight' | 'layoutTreeRightToLeft' | 'layoutLayeredTopToBottom' | 'layoutLayeredBottomToTop' | 'layoutLayeredLeftToRight' | 'layoutLayeredRightToLeft' | 'fullScreen' | 'zoomLevel' | 'showGrid' | 'snapToGrid' | 'gridSize' | 'units' | 'pageSize' | 'pageOrientation' | 'pageColor' | 'simpleView' | 'toolbox'>, enabled?: boolean };
        /**
         * Configures the context toolbox's settings.
         */
        contextToolbox?: { category?: 'general' | 'flowchart' | 'orgChart' | 'containers' | 'custom' | string, displayMode?: 'icons' | 'texts', enabled?: boolean, shapeIconsPerRow?: number, shapes?: Array<'text' | 'rectangle' | 'ellipse' | 'cross' | 'triangle' | 'diamond' | 'heart' | 'pentagon' | 'hexagon' | 'octagon' | 'star' | 'arrowLeft' | 'arrowTop' | 'arrowRight' | 'arrowBottom' | 'arrowNorthSouth' | 'arrowEastWest' | 'process' | 'decision' | 'terminator' | 'predefinedProcess' | 'document' | 'multipleDocuments' | 'manualInput' | 'preparation' | 'data' | 'database' | 'hardDisk' | 'internalStorage' | 'paperTape' | 'manualOperation' | 'delay' | 'storedData' | 'display' | 'merge' | 'connector' | 'or' | 'summingJunction' | 'verticalContainer' | 'horizontalContainer' | 'cardWithImageOnLeft' | 'cardWithImageOnTop' | 'cardWithImageOnRight'> | Array<string>, width?: number };
        /**
         * Specifies a custom template for shapes.
         */
        customShapeTemplate?: DevExpress.core.template | ((container: DevExpress.core.dxSVGElement, data: { item?: dxDiagramShape }) => any);
        /**
         * Specifies a custom template for shapes in the toolbox.
         */
        customShapeToolboxTemplate?: DevExpress.core.template | ((container: DevExpress.core.dxSVGElement, data: { item?: dxDiagramShape }) => any);
        /**
         * Provide access to an array of custom shapes.
         */
        customShapes?: Array<{ allowEditImage?: boolean, allowEditText?: boolean, allowResize?: boolean, backgroundImageHeight?: number, backgroundImageLeft?: number, backgroundImageToolboxUrl?: string, backgroundImageTop?: number, backgroundImageUrl?: string, backgroundImageWidth?: number, baseType?: 'text' | 'rectangle' | 'ellipse' | 'cross' | 'triangle' | 'diamond' | 'heart' | 'pentagon' | 'hexagon' | 'octagon' | 'star' | 'arrowLeft' | 'arrowTop' | 'arrowRight' | 'arrowBottom' | 'arrowNorthSouth' | 'arrowEastWest' | 'process' | 'decision' | 'terminator' | 'predefinedProcess' | 'document' | 'multipleDocuments' | 'manualInput' | 'preparation' | 'data' | 'database' | 'hardDisk' | 'internalStorage' | 'paperTape' | 'manualOperation' | 'delay' | 'storedData' | 'display' | 'merge' | 'connector' | 'or' | 'summingJunction' | 'verticalContainer' | 'horizontalContainer' | 'cardWithImageOnLeft' | 'cardWithImageOnTop' | 'cardWithImageOnRight' | string, category?: string, connectionPoints?: Array<{ x?: number, y?: number }>, defaultHeight?: number, defaultImageUrl?: string, defaultText?: string, defaultWidth?: number, imageHeight?: number, imageLeft?: number, imageTop?: number, imageWidth?: number, keepRatioOnAutoSize?: boolean, maxHeight?: number, maxWidth?: number, minHeight?: number, minWidth?: number, template?: DevExpress.core.template | ((container: DevExpress.core.dxSVGElement, data: { item?: dxDiagramShape }) => any), templateHeight?: number, templateLeft?: number, templateTop?: number, templateWidth?: number, textHeight?: number, textLeft?: number, textTop?: number, textWidth?: number, title?: string, toolboxTemplate?: DevExpress.core.template | ((container: DevExpress.core.dxSVGElement, data: { item?: dxDiagramShape }) => any), toolboxWidthToHeightRatio?: number, type?: string }>;
        /**
         * Configures default item properties.
         */
        defaultItemProperties?: { connectorLineEnd?: 'none' | 'arrow' | 'outlinedTriangle' | 'filledTriangle', connectorLineStart?: 'none' | 'arrow' | 'outlinedTriangle' | 'filledTriangle', connectorLineType?: 'straight' | 'orthogonal', shapeMaxHeight?: number, shapeMaxWidth?: number, shapeMinHeight?: number, shapeMinWidth?: number, style?: any, textStyle?: any };
        /**
         * Allows you to bind the collection of diagram edges to a data source. For more information, see the Data Binding section.
         */
        edges?: { customDataExpr?: string | ((data: any) => any), dataSource?: Array<any> | DevExpress.data.DataSource | DevExpress.data.DataSourceOptions, fromExpr?: string | ((data: any) => any), fromLineEndExpr?: string | ((data: any) => any), fromPointIndexExpr?: string | ((data: any) => any), keyExpr?: string | ((data: any) => any), lineTypeExpr?: string | ((data: any) => any), lockedExpr?: string | ((data: any) => any), pointsExpr?: string | ((data: any) => any), styleExpr?: string | ((data: any) => any), textExpr?: string | ((data: any) => any), textStyleExpr?: string | ((data: any) => any), toExpr?: string | ((data: any) => any), toLineEndExpr?: string | ((data: any) => any), toPointIndexExpr?: string | ((data: any) => any), zIndexExpr?: string | ((data: any) => any) };
        /**
         * Specifies which editing operations a user can perform.
         */
        editing?: { allowAddShape?: boolean, allowChangeConnection?: boolean, allowChangeConnectorPoints?: boolean, allowChangeConnectorText?: boolean, allowChangeShapeText?: boolean, allowDeleteConnector?: boolean, allowDeleteShape?: boolean, allowMoveShape?: boolean, allowResizeShape?: boolean };
        /**
         * Configures export settings.
         */
        export?: { fileName?: string, proxyUrl?: string };
        /**
         * Specifies whether or not to display the UI component in full-screen mode.
         */
        fullScreen?: boolean;
        /**
         * Specifies the grid pitch.
         */
        gridSize?: number | { items?: Array<number>, value?: number };
        /**
         * Indicates whether diagram content has been changed.
         */
        hasChanges?: boolean;
        /**
         * Configures the history toolbar's settings.
         */
        historyToolbar?: { commands?: Array<dxDiagramCustomCommand> | Array<'separator' | 'exportSvg' | 'exportPng' | 'exportJpg' | 'undo' | 'redo' | 'cut' | 'copy' | 'paste' | 'selectAll' | 'delete' | 'fontName' | 'fontSize' | 'bold' | 'italic' | 'underline' | 'fontColor' | 'lineColor' | 'fillColor' | 'textAlignLeft' | 'textAlignCenter' | 'textAlignRight' | 'lock' | 'unlock' | 'sendToBack' | 'bringToFront' | 'insertShapeImage' | 'editShapeImage' | 'deleteShapeImage' | 'connectorLineType' | 'connectorLineStart' | 'connectorLineEnd' | 'layoutTreeTopToBottom' | 'layoutTreeBottomToTop' | 'layoutTreeLeftToRight' | 'layoutTreeRightToLeft' | 'layoutLayeredTopToBottom' | 'layoutLayeredBottomToTop' | 'layoutLayeredLeftToRight' | 'layoutLayeredRightToLeft' | 'fullScreen' | 'zoomLevel' | 'showGrid' | 'snapToGrid' | 'gridSize' | 'units' | 'pageSize' | 'pageOrientation' | 'pageColor' | 'simpleView' | 'toolbox'>, visible?: boolean };
        /**
         * Configures the main toolbar settings.
         */
        mainToolbar?: { commands?: Array<dxDiagramCustomCommand> | Array<'separator' | 'exportSvg' | 'exportPng' | 'exportJpg' | 'undo' | 'redo' | 'cut' | 'copy' | 'paste' | 'selectAll' | 'delete' | 'fontName' | 'fontSize' | 'bold' | 'italic' | 'underline' | 'fontColor' | 'lineColor' | 'fillColor' | 'textAlignLeft' | 'textAlignCenter' | 'textAlignRight' | 'lock' | 'unlock' | 'sendToBack' | 'bringToFront' | 'insertShapeImage' | 'editShapeImage' | 'deleteShapeImage' | 'connectorLineType' | 'connectorLineStart' | 'connectorLineEnd' | 'layoutTreeTopToBottom' | 'layoutTreeBottomToTop' | 'layoutTreeLeftToRight' | 'layoutTreeRightToLeft' | 'layoutLayeredTopToBottom' | 'layoutLayeredBottomToTop' | 'layoutLayeredLeftToRight' | 'layoutLayeredRightToLeft' | 'fullScreen' | 'zoomLevel' | 'showGrid' | 'snapToGrid' | 'gridSize' | 'units' | 'pageSize' | 'pageOrientation' | 'pageColor' | 'simpleView' | 'toolbox'>, visible?: boolean };
        /**
         * Allows you to bind the collection of diagram nodes to a data source. For more information, see the Data Binding section.
         */
        nodes?: { autoLayout?: 'auto' | 'off' | 'tree' | 'layered' | { orientation?: 'vertical' | 'horizontal', type?: 'auto' | 'off' | 'tree' | 'layered' }, autoSizeEnabled?: boolean, containerChildrenExpr?: string | ((data: any) => any), containerKeyExpr?: string | ((data: any) => any), customDataExpr?: string | ((data: any) => any), dataSource?: Array<any> | DevExpress.data.DataSource | DevExpress.data.DataSourceOptions, heightExpr?: string | ((data: any) => any), imageUrlExpr?: string | ((data: any) => any), itemsExpr?: string | ((data: any) => any), keyExpr?: string | ((data: any) => any), leftExpr?: string | ((data: any) => any), lockedExpr?: string | ((data: any) => any), parentKeyExpr?: string | ((data: any) => any), styleExpr?: string | ((data: any) => any), textExpr?: string | ((data: any) => any), textStyleExpr?: string | ((data: any) => any), topExpr?: string | ((data: any) => any), typeExpr?: string | ((data: any) => any), widthExpr?: string | ((data: any) => any), zIndexExpr?: string | ((data: any) => any) };
        /**
         * A function that is executed after a custom command item was clicked and allows you to implement the custom command's logic.
         */
        onCustomCommand?: ((e: { component?: dxDiagram, element?: DevExpress.core.dxElement, name?: string }) => any);
        /**
         * A function that is executed after a shape or connector is clicked.
         */
        onItemClick?: ((e: { component?: dxDiagram, element?: DevExpress.core.dxElement, model?: any, item?: dxDiagramItem }) => any);
        /**
         * A function that is executed after a shape or connector is double-clicked.
         */
        onItemDblClick?: ((e: { component?: dxDiagram, element?: DevExpress.core.dxElement, model?: any, item?: dxDiagramItem }) => any);
        /**
         * A function that allows you to prohibit an edit operation at run time.
         */
        onRequestEditOperation?: ((e: { component?: dxDiagram, element?: DevExpress.core.dxElement, model?: any, operation?: 'addShape' | 'addShapeFromToolbox' | 'deleteShape' | 'deleteConnector' | 'changeConnection' | 'changeConnectorPoints' | 'beforeChangeShapeText' | 'changeShapeText' | 'beforeChangeConnectorText' | 'changeConnectorText' | 'resizeShape' | 'moveShape', args?: dxDiagramAddShapeArgs | dxDiagramAddShapeFromToolboxArgs | dxDiagramDeleteShapeArgs | dxDiagramDeleteConnectorArgs | dxDiagramChangeConnectionArgs | dxDiagramChangeConnectorPointsArgs | dxDiagramBeforeChangeShapeTextArgs | dxDiagramChangeShapeTextArgs | dxDiagramBeforeChangeConnectorTextArgs | dxDiagramChangeConnectorTextArgs | dxDiagramResizeShapeArgs | dxDiagramMoveShapeArgs, reason?: 'checkUIElementAvailability' | 'modelModification', allowed?: boolean }) => any);
        /**
         * A function that is executed after diagram data is reloaded and allows you to specify whether or not the UI component should update the diagram layout.
         */
        onRequestLayoutUpdate?: ((e: { component?: dxDiagram, element?: DevExpress.core.dxElement, model?: any, changes?: Array<any>, allowed?: boolean }) => any);
        /**
         * A function that is executed after the selection is changed in the Diagram.
         */
        onSelectionChanged?: ((e: { component?: dxDiagram, element?: DevExpress.core.dxElement, model?: any, items?: Array<dxDiagramItem> }) => any);
        /**
         * Specifies the color of a diagram page.
         */
        pageColor?: string;
        /**
         * Specifies the page orientation.
         */
        pageOrientation?: 'portrait' | 'landscape';
        /**
         * Specifies a size of pages.
         */
        pageSize?: { height?: number, items?: Array<{ height?: number, text?: string, width?: number }>, width?: number };
        /**
         * Configures the Properties panel settings.
         */
        propertiesPanel?: { tabs?: Array<{ commands?: Array<dxDiagramCustomCommand> | Array<'separator' | 'exportSvg' | 'exportPng' | 'exportJpg' | 'undo' | 'redo' | 'cut' | 'copy' | 'paste' | 'selectAll' | 'delete' | 'fontName' | 'fontSize' | 'bold' | 'italic' | 'underline' | 'fontColor' | 'lineColor' | 'fillColor' | 'textAlignLeft' | 'textAlignCenter' | 'textAlignRight' | 'lock' | 'unlock' | 'sendToBack' | 'bringToFront' | 'insertShapeImage' | 'editShapeImage' | 'deleteShapeImage' | 'connectorLineType' | 'connectorLineStart' | 'connectorLineEnd' | 'layoutTreeTopToBottom' | 'layoutTreeBottomToTop' | 'layoutTreeLeftToRight' | 'layoutTreeRightToLeft' | 'layoutLayeredTopToBottom' | 'layoutLayeredBottomToTop' | 'layoutLayeredLeftToRight' | 'layoutLayeredRightToLeft' | 'fullScreen' | 'zoomLevel' | 'showGrid' | 'snapToGrid' | 'gridSize' | 'units' | 'pageSize' | 'pageOrientation' | 'pageColor' | 'simpleView' | 'toolbox'>, groups?: Array<{ commands?: Array<dxDiagramCustomCommand> | Array<'separator' | 'exportSvg' | 'exportPng' | 'exportJpg' | 'undo' | 'redo' | 'cut' | 'copy' | 'paste' | 'selectAll' | 'delete' | 'fontName' | 'fontSize' | 'bold' | 'italic' | 'underline' | 'fontColor' | 'lineColor' | 'fillColor' | 'textAlignLeft' | 'textAlignCenter' | 'textAlignRight' | 'lock' | 'unlock' | 'sendToBack' | 'bringToFront' | 'insertShapeImage' | 'editShapeImage' | 'deleteShapeImage' | 'connectorLineType' | 'connectorLineStart' | 'connectorLineEnd' | 'layoutTreeTopToBottom' | 'layoutTreeBottomToTop' | 'layoutTreeLeftToRight' | 'layoutTreeRightToLeft' | 'layoutLayeredTopToBottom' | 'layoutLayeredBottomToTop' | 'layoutLayeredLeftToRight' | 'layoutLayeredRightToLeft' | 'fullScreen' | 'zoomLevel' | 'showGrid' | 'snapToGrid' | 'gridSize' | 'units' | 'pageSize' | 'pageOrientation' | 'pageColor' | 'simpleView' | 'toolbox'>, title?: string }>, title?: string }>, visibility?: 'auto' | 'visible' | 'collapsed' | 'disabled' };
        /**
         * Specifies whether the diagram is read-only.
         */
        readOnly?: boolean;
        /**
         * Specifies whether grid lines are visible.
         */
        showGrid?: boolean;
        /**
         * Switch the Diagram UI component to simple view mode.
         */
        simpleView?: boolean;
        /**
         * Specifies whether diagram elements should snap to grid lines.
         */
        snapToGrid?: boolean;
        /**
         * Configures the toolbox settings.
         */
        toolbox?: { groups?: Array<{ category?: 'general' | 'flowchart' | 'orgChart' | 'containers' | 'custom' | string, displayMode?: 'icons' | 'texts', expanded?: boolean, shapes?: Array<'text' | 'rectangle' | 'ellipse' | 'cross' | 'triangle' | 'diamond' | 'heart' | 'pentagon' | 'hexagon' | 'octagon' | 'star' | 'arrowLeft' | 'arrowTop' | 'arrowRight' | 'arrowBottom' | 'arrowNorthSouth' | 'arrowEastWest' | 'process' | 'decision' | 'terminator' | 'predefinedProcess' | 'document' | 'multipleDocuments' | 'manualInput' | 'preparation' | 'data' | 'database' | 'hardDisk' | 'internalStorage' | 'paperTape' | 'manualOperation' | 'delay' | 'storedData' | 'display' | 'merge' | 'connector' | 'or' | 'summingJunction' | 'verticalContainer' | 'horizontalContainer' | 'cardWithImageOnLeft' | 'cardWithImageOnTop' | 'cardWithImageOnRight'> | Array<string>, title?: string }> | Array<'general' | 'flowchart' | 'orgChart' | 'containers' | 'custom'>, shapeIconsPerRow?: number, showSearch?: boolean, visibility?: 'auto' | 'visible' | 'collapsed' | 'disabled', width?: number };
        /**
         * Specifies the measurement unit for size properties.
         */
        units?: 'in' | 'cm' | 'px';
        /**
         * Configures the view toolbar settings.
         */
        viewToolbar?: { commands?: Array<dxDiagramCustomCommand> | Array<'separator' | 'exportSvg' | 'exportPng' | 'exportJpg' | 'undo' | 'redo' | 'cut' | 'copy' | 'paste' | 'selectAll' | 'delete' | 'fontName' | 'fontSize' | 'bold' | 'italic' | 'underline' | 'fontColor' | 'lineColor' | 'fillColor' | 'textAlignLeft' | 'textAlignCenter' | 'textAlignRight' | 'lock' | 'unlock' | 'sendToBack' | 'bringToFront' | 'insertShapeImage' | 'editShapeImage' | 'deleteShapeImage' | 'connectorLineType' | 'connectorLineStart' | 'connectorLineEnd' | 'layoutTreeTopToBottom' | 'layoutTreeBottomToTop' | 'layoutTreeLeftToRight' | 'layoutTreeRightToLeft' | 'layoutLayeredTopToBottom' | 'layoutLayeredBottomToTop' | 'layoutLayeredLeftToRight' | 'layoutLayeredRightToLeft' | 'fullScreen' | 'zoomLevel' | 'showGrid' | 'snapToGrid' | 'gridSize' | 'units' | 'pageSize' | 'pageOrientation' | 'pageColor' | 'simpleView' | 'toolbox'>, visible?: boolean };
        /**
         * Specifies the measurement unit that is displayed in user interface elements.
         */
        viewUnits?: 'in' | 'cm' | 'px';
        /**
         * Specifies the zoom level.
         */
        zoomLevel?: number | { items?: Array<number>, value?: number };
    }
    /**
     * The Diagram UI component provides a visual interface to help you design new and modify existing diagrams.
     */
    export class dxDiagram extends Widget {
        constructor(element: Element, options?: dxDiagramOptions)
        constructor(element: JQuery, options?: dxDiagramOptions)
        /**
         * Exports the diagram data to a JSON object.
         */
        export(): string;
        /**
         * Exports the diagram to an image format.
         */
        exportTo(format: 'svg' | 'png' | 'jpg', callback: Function): void;
        /**
         * Returns the DataSource instance.
         */
        getEdgeDataSource(): DevExpress.data.DataSource;
        /**
         * Returns a shape or connector object specified by its internal identifier.
         */
        getItemById(id: string): dxDiagramItem;
        /**
         * Returns a shape or connector object specified by its key.
         */
        getItemByKey(key: any): dxDiagramItem;
        /**
         * Gets the DataSource instance.
         */
        getNodeDataSource(): DevExpress.data.DataSource;
        /**
         * Imports the diagram data.
         */
        import(data: string, updateExistingItemsOnly?: boolean): void;
        /**
         * Updates the diagram toolboxes.
         */
        updateToolbox(): void;
    }
    /**
     * Contains information about the processed shape.
     */
    export interface dxDiagramAddShapeArgs {
        /**
         * A position where the shape is being added.
         */
        position?: any;
        /**
         * The processed shape.
         */
        shape?: dxDiagramShape;
    }
    /**
     * Contains information about the processed shape.
     */
    export interface dxDiagramAddShapeFromToolboxArgs {
        /**
         * The type of the processed shape.
         */
        shapeType?: 'text' | 'rectangle' | 'ellipse' | 'cross' | 'triangle' | 'diamond' | 'heart' | 'pentagon' | 'hexagon' | 'octagon' | 'star' | 'arrowLeft' | 'arrowTop' | 'arrowRight' | 'arrowBottom' | 'arrowNorthSouth' | 'arrowEastWest' | 'process' | 'decision' | 'terminator' | 'predefinedProcess' | 'document' | 'multipleDocuments' | 'manualInput' | 'preparation' | 'data' | 'database' | 'hardDisk' | 'internalStorage' | 'paperTape' | 'manualOperation' | 'delay' | 'storedData' | 'display' | 'merge' | 'connector' | 'or' | 'summingJunction' | 'verticalContainer' | 'horizontalContainer' | 'cardWithImageOnLeft' | 'cardWithImageOnTop' | 'cardWithImageOnRight' | string;
    }
    /**
     * Contains information about the processed connector.
     */
    export interface dxDiagramBeforeChangeConnectorTextArgs {
        /**
         * The processed connector.
         */
        connector?: dxDiagramConnector;
        /**
         * The index of the processed text in the connector's texts collection.
         */
        index?: number;
    }
    /**
     * Contains information about the processed shape.
     */
    export interface dxDiagramBeforeChangeShapeTextArgs {
        /**
         * The processed shape.
         */
        shape?: dxDiagramShape;
    }
    /**
     * Contains information about the processed connection.
     */
    export interface dxDiagramChangeConnectionArgs {
        /**
         * The index of the processed point in the shape's connection point collection.
         */
        connectionPointIndex?: number;
        /**
         * The processed connector.
         */
        connector?: dxDiagramConnector;
        /**
         * The position of the connector in the processed point.
         */
        connectorPosition?: 'start' | 'end';
        /**
         * The new connected shape.
         */
        newShape?: dxDiagramShape;
        /**
         * The previous connected shape.
         */
        oldShape?: dxDiagramShape;
    }
    /**
     * Contains information about the processed connector.
     */
    export interface dxDiagramChangeConnectorPointsArgs {
        /**
         * The processed connector.
         */
        connector?: dxDiagramConnector;
        /**
         * The array of new connection points.
         */
        newPoints?: Array<any>;
        /**
         * The array of previous connection points.
         */
        oldPoints?: Array<any>;
    }
    /**
     * Contains information about the processed connector.
     */
    export interface dxDiagramChangeConnectorTextArgs {
        /**
         * The processed connector.
         */
        connector?: dxDiagramConnector;
        /**
         * The index of the processed text in the connector's texts collection.
         */
        index?: number;
        /**
         * The new connector text.
         */
        text?: string;
    }
    /**
     * Contains information about the processed shape.
     */
    export interface dxDiagramChangeShapeTextArgs {
        /**
         * The processed shape.
         */
        shape?: dxDiagramShape;
        /**
         * The new shape text.
         */
        text?: string;
    }
    /**
     * An object that provides information about a connector in the Diagram UI component.
     */
    export interface dxDiagramConnector extends dxDiagramItem {
        /**
         * Gets the connector's start node identifier.
         */
        fromId?: string;
        /**
         * Specifies the connector's start node key.
         */
        fromKey?: any;
        /**
         * The index of a shape connection point where the connector starts.
         */
        fromPointIndex?: number;
        /**
         * Gets the connector's key points.
         */
        points?: Array<any>;
        /**
         * Specifies the connector's text.
         */
        texts?: Array<string>;
        /**
         * Gets the connector's end node identifier.
         */
        toId?: string;
        /**
         * Specifies the connector's end node key.
         */
        toKey?: any;
        /**
         * The index of the shape connection point where the connector ends.
         */
        toPointIndex?: number;
    }
    /**
     * An object that provides information about a custom command in the Diagram UI component.
     */
    export interface dxDiagramCustomCommand {
        /**
         * Specifies the custom command's icon.
         */
        icon?: string;
        /**
         * Lists command sub items.
         */
        items?: Array<dxDiagramCustomCommand>;
        /**
         * Specifies the custom command's identifier.
         */
        name?: string | 'separator' | 'exportSvg' | 'exportPng' | 'exportJpg' | 'undo' | 'redo' | 'cut' | 'copy' | 'paste' | 'selectAll' | 'delete' | 'fontName' | 'fontSize' | 'bold' | 'italic' | 'underline' | 'fontColor' | 'lineColor' | 'fillColor' | 'textAlignLeft' | 'textAlignCenter' | 'textAlignRight' | 'lock' | 'unlock' | 'sendToBack' | 'bringToFront' | 'insertShapeImage' | 'editShapeImage' | 'deleteShapeImage' | 'connectorLineType' | 'connectorLineStart' | 'connectorLineEnd' | 'layoutTreeTopToBottom' | 'layoutTreeBottomToTop' | 'layoutTreeLeftToRight' | 'layoutTreeRightToLeft' | 'layoutLayeredTopToBottom' | 'layoutLayeredBottomToTop' | 'layoutLayeredLeftToRight' | 'layoutLayeredRightToLeft' | 'fullScreen' | 'zoomLevel' | 'showGrid' | 'snapToGrid' | 'gridSize' | 'units' | 'pageSize' | 'pageOrientation' | 'pageColor' | 'simpleView' | 'toolbox';
        /**
         * Specifies the custom command's text and tooltip text.
         */
        text?: string;
    }
    /**
     * Contains information about the processed connector.
     */
    export interface dxDiagramDeleteConnectorArgs {
        /**
         * The processed connector.
         */
        connector?: dxDiagramConnector;
    }
    /**
     * Contains information about the processed shape.
     */
    export interface dxDiagramDeleteShapeArgs {
        /**
         * The processed shape.
         */
        shape?: dxDiagramShape;
    }
    /**
     * An object that provides information about an item (shape or connector) in the Diagram UI component.
     */
    export interface dxDiagramItem {
        /**
         * Returns the data item that is bound to the diagram item.
         */
        dataItem?: any;
        /**
         * Specifies the item's internal identifier.
         */
        id?: string;
        /**
         * Returns the type of the item.
         */
        itemType?: 'shape' | 'connector';
        /**
         * Gets the item's key from a data source.
         */
        key?: any;
    }
    /**
     * Contains information about the processed shape.
     */
    export interface dxDiagramMoveShapeArgs {
        /**
         * The new shape position (x- and y-coordinates) specified in units.
         */
        newPosition?: Array<any>;
        /**
         * The previous shape position (x- and y-coordinates) specified in units.
         */
        oldPosition?: Array<any>;
        /**
         * The processed shape.
         */
        shape?: dxDiagramShape;
    }
    /**
     * Contains information about the processed shape.
     */
    export interface dxDiagramResizeShapeArgs {
        /**
         * The new shape size.
         */
        newSize?: Array<any>;
        /**
         * The previous shape size.
         */
        oldSize?: Array<any>;
        /**
         * The processed shape.
         */
        shape?: dxDiagramShape;
    }
    /**
     * An object that provides information about a shape in the Diagram UI component.
     */
    export interface dxDiagramShape extends dxDiagramItem {
        /**
         * Gets an array of attached connector identifiers.
         */
        attachedConnectorIds?: Array<string>;
        /**
         * Gets identifiers of shapes stored in the container.
         */
        containerChildItemIds?: Array<string>;
        /**
         * Gets whether the container is expanded.
         */
        containerExpanded?: boolean;
        /**
         * Gets the identifier of the container that stores the shape.
         */
        containerId?: string;
        /**
         * Specifies the shape position (x- and y-coordinates) in units.
         */
        position?: any;
        /**
         * Specifies the shape size in in units.
         */
        size?: any;
        /**
         * Specifies the shape's text.
         */
        text?: string;
        /**
         * Specifies the shape type. The built-in shape types are shown in the Shape Types section.
         */
        type?: 'text' | 'rectangle' | 'ellipse' | 'cross' | 'triangle' | 'diamond' | 'heart' | 'pentagon' | 'hexagon' | 'octagon' | 'star' | 'arrowLeft' | 'arrowTop' | 'arrowRight' | 'arrowBottom' | 'arrowNorthSouth' | 'arrowEastWest' | 'process' | 'decision' | 'terminator' | 'predefinedProcess' | 'document' | 'multipleDocuments' | 'manualInput' | 'preparation' | 'data' | 'database' | 'hardDisk' | 'internalStorage' | 'paperTape' | 'manualOperation' | 'delay' | 'storedData' | 'display' | 'merge' | 'connector' | 'or' | 'summingJunction' | 'verticalContainer' | 'horizontalContainer' | 'cardWithImageOnLeft' | 'cardWithImageOnTop' | 'cardWithImageOnRight' | string;
    }
    /**
     * 
     */
    export interface dxDraggableOptions extends DraggableBaseOptions<dxDraggable> {
        /**
         * Allows a user to drag clones of items instead of actual items.
         */
        clone?: boolean;
        /**
         * Specifies custom markup to be shown instead of the item being dragged.
         */
        dragTemplate?: DevExpress.core.template | ((dragInfo: { itemData?: any, itemElement?: DevExpress.core.dxElement }, containerElement: DevExpress.core.dxElement) => string | Element | JQuery);
        /**
         * A function that is called when drag gesture is finished.
         */
        onDragEnd?: ((e: { component?: dxDraggable, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, cancel?: boolean, itemData?: any, itemElement?: DevExpress.core.dxElement, fromComponent?: dxSortable | dxDraggable, toComponent?: dxSortable | dxDraggable, fromData?: any, toData?: any }) => any);
        /**
         * A function that is called every time a draggable item is moved.
         */
        onDragMove?: ((e: { component?: dxDraggable, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, cancel?: boolean, itemData?: any, itemElement?: DevExpress.core.dxElement, fromComponent?: dxSortable | dxDraggable, toComponent?: dxSortable | dxDraggable, fromData?: any, toData?: any }) => any);
        /**
         * A function that is called when the drag gesture is initialized.
         */
        onDragStart?: ((e: { component?: dxDraggable, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, cancel?: boolean, itemData?: any, itemElement?: DevExpress.core.dxElement, fromData?: any }) => any);
    }
    /**
     * Draggable is a user interface utility that allows UI component elements to be dragged and dropped.
     */
    export class dxDraggable extends DraggableBase {
        constructor(element: Element, options?: dxDraggableOptions)
        constructor(element: JQuery, options?: dxDraggableOptions)
    }
    /**
     * 
     */
    export interface dxDrawerOptions extends WidgetOptions<dxDrawer> {
        /**
         * Specifies the duration of the drawer's opening and closing animation (in milliseconds). Applies only if animationEnabled is true.
         */
        animationDuration?: number;
        /**
         * Specifies whether to use an opening and closing animation.
         */
        animationEnabled?: boolean;
        /**
         * Specifies whether to close the drawer if a user clicks or taps the view area.
         */
        closeOnOutsideClick?: boolean | ((event: DevExpress.events.event) => boolean);
        /**
         * Specifies the drawer's width or height (depending on the drawer's position) in the opened state.
         */
        maxSize?: number;
        /**
         * Specifies the drawer's width or height (depending on the drawer's position) in the closed state.
         */
        minSize?: number;
        /**
         * Specifies whether the drawer is opened.
         */
        opened?: boolean;
        /**
         * Specifies how the drawer interacts with the view in the opened state.
         */
        openedStateMode?: 'overlap' | 'shrink' | 'push';
        /**
         * Specifies the drawer's position in relation to the view.
         */
        position?: 'left' | 'right' | 'top' | 'bottom' | 'before' | 'after';
        /**
         * Specifies the drawer's reveal mode.
         */
        revealMode?: 'slide' | 'expand';
        /**
         * Specifies whether to shade the view when the drawer is opened.
         */
        shading?: boolean;
        /**
         * Specifies a CSS selector for the element in which the drawer should be rendered. Applies only when the openedStateMode is 'overlap'.
         * @deprecated 
         */
        target?: string | Element | JQuery;
        /**
         * Specifies the drawer's content.
         */
        template?: DevExpress.core.template | ((Element: DevExpress.core.dxElement) => any);
    }
    /**
     * The Drawer is a dismissible or permanently visible panel used for navigation in responsive web application layouts.
     */
    export class dxDrawer extends Widget {
        constructor(element: Element, options?: dxDrawerOptions)
        constructor(element: JQuery, options?: dxDrawerOptions)
        /**
         * Gets the drawer's content.
         */
        content(): DevExpress.core.dxElement;
        /**
         * Closes the drawer.
         */
        hide(): Promise<void> & JQueryPromise<void>;
        /**
         * Opens the drawer.
         */
        show(): Promise<void> & JQueryPromise<void>;
        /**
         * Opens or closes the drawer, reversing the current state.
         */
        toggle(): Promise<void> & JQueryPromise<void>;
    }
    /**
     * 
     */
    export interface dxDropDownBoxOptions extends DataExpressionMixinOptions<dxDropDownBox>, dxDropDownEditorOptions<dxDropDownBox> {
        /**
         * Specifies whether the UI component allows a user to enter a custom value.
         */
        acceptCustomValue?: boolean;
        /**
         * Specifies a custom template for the drop-down content.
         */
        contentTemplate?: DevExpress.core.template | ((templateData: { component?: dxDropDownBox, value?: any }, contentElement: DevExpress.core.dxElement) => string | Element | JQuery);
        /**
         * Binds the UI component to data.
         */
        dataSource?: string | Array<any> | DevExpress.data.DataSource | DevExpress.data.DataSourceOptions;
        /**
         * Customizes text before it is displayed in the input field.
         */
        displayValueFormatter?: ((value: string | Array<any>) => string);
        /**
         * Specifies a custom template for the text field. Must contain the TextBox UI component.
         */
        fieldTemplate?: DevExpress.core.template | ((value: any, fieldElement: DevExpress.core.dxElement) => string | Element | JQuery);
        /**
         * An array of items used to synchronize the DropDownBox with an embedded UI component.
         */
        items?: Array<any>;
        /**
         * Specifies whether a user can open the drop-down list by clicking a text field.
         */
        openOnFieldClick?: boolean;
        /**
         * Specifies the DOM events after which the UI component's value should be updated.
         */
        valueChangeEvent?: string;
    }
    /**
     * The DropDownBox UI component consists of a text field, which displays the current value, and a drop-down field, which can contain any UI element.
     */
    export class dxDropDownBox extends dxDropDownEditor {
        constructor(element: Element, options?: dxDropDownBoxOptions)
        constructor(element: JQuery, options?: dxDropDownBoxOptions)
        /**
         * Gets the DataSource instance.
         */
        getDataSource(): DevExpress.data.DataSource;
    }
    /**
     * 
     */
    export interface dxDropDownButtonOptions extends WidgetOptions<dxDropDownButton> {
        /**
         * Provides data for the drop-down menu.
         */
        dataSource?: string | Array<dxDropDownButtonItem | any> | DevExpress.data.DataSource | DevExpress.data.DataSourceOptions;
        /**
         * Specifies whether to wait until the drop-down menu is opened the first time to render its content.
         */
        deferRendering?: boolean;
        /**
         * Specifies the data field whose values should be displayed in the drop-down menu.
         */
        displayExpr?: string | ((itemData: any) => string);
        /**
         * Specifies custom content for the drop-down field.
         */
        dropDownContentTemplate?: DevExpress.core.template | ((data: Array<string | number | any> | DevExpress.data.DataSource, contentElement: DevExpress.core.dxElement) => string | Element | JQuery);
        /**
         * Configures the drop-down field.
         */
        dropDownOptions?: dxPopupOptions;
        /**
         * Specifies whether users can use keyboard to focus the UI component.
         */
        focusStateEnabled?: boolean;
        /**
         * Specifies whether the UI component changes its state when a user hovers the mouse pointer over it.
         */
        hoverStateEnabled?: boolean;
        /**
         * Specifies the button's icon.
         */
        icon?: string;
        /**
         * Specifies a custom template for drop-down menu items.
         */
        itemTemplate?: DevExpress.core.template | ((itemData: any, itemIndex: number, itemElement: DevExpress.core.dxElement) => string | Element | JQuery);
        /**
         * Provides drop-down menu items.
         */
        items?: Array<dxDropDownButtonItem | any>;
        /**
         * Specifies which data field provides keys used to distinguish between the selected drop-down menu items.
         */
        keyExpr?: string;
        /**
         * Specifies text or HTML markup displayed in the drop-down menu when it does not contain any items.
         */
        noDataText?: string;
        /**
         * A function that is executed when the button is clicked or tapped. If splitButton is true, this function is executed for the action button only.
         */
        onButtonClick?: ((e: { component?: dxDropDownButton, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, selectedItem?: any }) => any) | string;
        /**
         * A function that is executed when a drop-down menu item is clicked.
         */
        onItemClick?: ((e: { component?: dxDropDownButton, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, itemData?: any, itemElement?: DevExpress.core.dxElement }) => any) | string;
        /**
         * A function that is executed when an item is selected or selection is canceled. In effect when useSelectMode is true.
         */
        onSelectionChanged?: ((e: { component?: dxDropDownButton, element?: DevExpress.core.dxElement, model?: any, item?: any, previousItem?: any }) => any) | string;
        /**
         * Specifies whether the drop-down menu is opened.
         */
        opened?: boolean;
        /**
         * Contains the selected item's data. Available when useSelectMode is true.
         */
        selectedItem?: string | number | any;
        /**
         * Contains the selected item's key and allows you to specify the initially selected item. Applies when useSelectMode is true.
         */
        selectedItemKey?: string | number;
        /**
         * Specifies whether the arrow icon should be displayed.
         */
        showArrowIcon?: boolean;
        /**
         * Specifies whether to split the button in two: one executes an action, the other opens and closes the drop-down menu.
         */
        splitButton?: boolean;
        /**
         * Specifies how the button is styled.
         */
        stylingMode?: 'text' | 'outlined' | 'contained';
        /**
         * Specifies the button's text. Applies only if useSelectMode is false.
         */
        text?: string;
        /**
         * Specifies whether the UI component stores the selected drop-down menu item.
         */
        useSelectMode?: boolean;
        /**
         * Specifies whether text that exceeds the drop-down list width should be wrapped.
         */
        wrapItemText?: boolean;
    }
    /**
     * The DropDownButton is a button that opens a drop-down menu.
     */
    export class dxDropDownButton extends Widget {
        constructor(element: Element, options?: dxDropDownButtonOptions)
        constructor(element: JQuery, options?: dxDropDownButtonOptions)
        /**
         * Closes the drop-down menu.
         */
        close(): Promise<void> & JQueryPromise<void>;
        /**
         * Gets the DataSource instance.
         */
        getDataSource(): DevExpress.data.DataSource;
        /**
         * Opens the drop-down menu.
         */
        open(): Promise<void> & JQueryPromise<void>;
        /**
         * Opens or closes the drop-down menu, reversing the current state.
         */
        toggle(): Promise<void> & JQueryPromise<void>;
        /**
         * Opens or closes the drop-down menu, depending on the argument.
         */
        toggle(visibility: boolean): Promise<void> & JQueryPromise<void>;
    }
    /**
     * 
     */
    export interface dxDropDownButtonItem extends dxListItem {
        /**
         * A handler for the click event raised for a certain item in the drop-down field.
         */
        onClick?: ((e: { component?: dxDropDownButton, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event }) => any) | string;
    }
    /**
     * 
     */
    export interface dxDropDownEditorOptions<T = dxDropDownEditor> extends dxTextBoxOptions<T> {
        /**
         * Specifies whether or not the UI component allows an end-user to enter a custom value.
         */
        acceptCustomValue?: boolean;
        /**
         * Specifies whether or not the UI component changes its state when interacting with a user.
         */
        activeStateEnabled?: boolean;
        /**
         * Specifies the way an end-user applies the selected value.
         */
        applyValueMode?: 'instantly' | 'useButtons';
        /**
         * Allows you to add custom buttons to the input text field.
         */
        buttons?: Array<'clear' | 'dropDown' | dxTextEditorButton>;
        /**
         * Specifies whether to render the drop-down field's content when it is displayed. If false, the content is rendered immediately.
         */
        deferRendering?: boolean;
        /**
         * Specifies a custom template for the drop-down button.
         */
        dropDownButtonTemplate?: DevExpress.core.template | ((buttonData: { text?: string, icon?: string }, contentElement: DevExpress.core.dxElement) => string | Element | JQuery);
        /**
         * Configures the drop-down field which holds the content.
         */
        dropDownOptions?: dxPopupOptions;
        /**
         * A function that is executed once the drop-down editor is closed.
         */
        onClosed?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any }) => any);
        /**
         * A function that is executed once the drop-down editor is opened.
         */
        onOpened?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any }) => any);
        /**
         * Specifies whether a user can open the drop-down list by clicking a text field.
         */
        openOnFieldClick?: boolean;
        /**
         * Specifies whether or not the drop-down editor is displayed.
         */
        opened?: boolean;
        /**
         * Specifies whether the drop-down button is visible.
         */
        showDropDownButton?: boolean;
        /**
         * Specifies the currently selected value.
         */
        value?: any;
    }
    /**
     * A drop-down editor UI component.
     */
    export class dxDropDownEditor extends dxTextBox {
        constructor(element: Element, options?: dxDropDownEditorOptions)
        constructor(element: JQuery, options?: dxDropDownEditorOptions)
        /**
         * Closes the drop-down editor.
         */
        close(): void;
        /**
         * Gets the popup window's content.
         */
        content(): DevExpress.core.dxElement;
        /**
         * Gets the UI component's `` element.
         */
        field(): DevExpress.core.dxElement;
        /**
         * Opens the drop-down editor.
         */
        open(): void;
    }
    /**
     * 
     */
    export interface dxDropDownListOptions<T = dxDropDownList> extends DataExpressionMixinOptions<T>, dxDropDownEditorOptions<T> {
        /**
         * Returns the value currently displayed by the UI component.
         */
        displayValue?: string;
        /**
         * Specifies a custom template for group captions.
         */
        groupTemplate?: DevExpress.core.template | ((itemData: any, itemIndex: number, itemElement: DevExpress.core.dxElement) => string | Element | JQuery);
        /**
         * Specifies whether data items should be grouped.
         */
        grouped?: boolean;
        /**
         * The minimum number of characters that must be entered into the text box to begin a search. Applies only if searchEnabled is true.
         */
        minSearchLength?: number;
        /**
         * The text or HTML markup displayed by the UI component if the item collection is empty.
         */
        noDataText?: string;
        /**
         * A function that is executed when a list item is clicked or tapped.
         */
        onItemClick?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, itemData?: any, itemElement?: any, itemIndex?: number | any, event?: DevExpress.events.event }) => any);
        /**
         * A function that is executed when a list item is selected or selection is canceled.
         */
        onSelectionChanged?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, selectedItem?: any }) => any);
        /**
         * A function that is executed after the UI component's value is changed.
         */
        onValueChanged?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, value?: any, previousValue?: any, event?: DevExpress.events.event }) => any);
        /**
         * Specifies whether to allow searching.
         */
        searchEnabled?: boolean;
        /**
         * Specifies the name of a data source item field or an expression whose value is compared to the search criterion.
         */
        searchExpr?: string | Function | Array<string | Function>;
        /**
         * Specifies a comparison operation used to search UI component items.
         */
        searchMode?: 'contains' | 'startswith';
        /**
         * Specifies the time delay, in milliseconds, after the last character has been typed in, before a search is executed.
         */
        searchTimeout?: number;
        /**
         * Gets the currently selected item.
         */
        selectedItem?: any;
        /**
         * Specifies whether or not the UI component displays unfiltered values until a user types a number of characters exceeding the minSearchLength property value.
         */
        showDataBeforeSearch?: boolean;
        /**
         * Specifies the currently selected value. May be an object if dataSource contains objects and valueExpr is not set.
         */
        value?: any;
        /**
         * Specifies the DOM events after which the UI component's value should be updated.
         */
        valueChangeEvent?: string;
        /**
         * Specifies whether text that exceeds the drop-down list width should be wrapped.
         */
        wrapItemText?: boolean;
    }
    /**
     * A base class for drop-down list UI components.
     */
    export class dxDropDownList extends dxDropDownEditor {
        constructor(element: Element, options?: dxDropDownListOptions)
        constructor(element: JQuery, options?: dxDropDownListOptions)
        /**
         * Gets the DataSource instance.
         */
        getDataSource(): DevExpress.data.DataSource;
    }
    /**
     * 
     */
    export interface dxFileManagerOptions extends WidgetOptions<dxFileManager> {
        /**
         * Specifies the allowed upload file extensions.
         */
        allowedFileExtensions?: Array<string>;
        /**
         * Configures the context menu settings.
         */
        contextMenu?: dxFileManagerContextMenu;
        /**
         * Specifies the path that is used when the FileManager is initialized.
         */
        currentPath?: string;
        /**
         * Specifies an array of path keys to the current location.
         */
        currentPathKeys?: Array<string>;
        /**
         * Customizes columns in details view. Applies only if itemView.mode is 'details'.
         */
        customizeDetailColumns?: ((columns: Array<dxFileManagerDetailsColumn>) => Array<dxFileManagerDetailsColumn>);
        /**
         * Allows you to provide custom icons to be used as thumbnails.
         */
        customizeThumbnail?: ((fileSystemItem: DevExpress.fileManagement.FileSystemItem) => string);
        /**
         * Specifies the file system provider.
         */
        fileSystemProvider?: any;
        /**
         * Specifies a key of the initially or currently focused item.
         */
        focusedItemKey?: string;
        /**
         * Configures the file and folder view.
         */
        itemView?: { details?: { columns?: Array<dxFileManagerDetailsColumn | string> }, mode?: 'details' | 'thumbnails', showFolders?: boolean, showParentFolder?: boolean };
        /**
         * A function that is executed when a context menu item is clicked.
         */
        onContextMenuItemClick?: ((e: { component?: dxFileManager, element?: DevExpress.core.dxElement, model?: any, itemData?: any, itemElement?: DevExpress.core.dxElement, itemIndex?: number, event?: DevExpress.events.event, fileSystemItem?: DevExpress.fileManagement.FileSystemItem, viewArea?: 'navPane' | 'itemView' }) => any);
        /**
         * A function that is executed when the current directory is changed.
         */
        onCurrentDirectoryChanged?: ((e: { component?: dxFileManager, element?: DevExpress.core.dxElement, model?: any, directory?: DevExpress.fileManagement.FileSystemItem }) => any);
        /**
         * A function that is executed when an error occurs.
         */
        onErrorOccurred?: ((e: { component?: dxFileManager, element?: DevExpress.core.dxElement, model?: any, errorCode?: number, errorText?: string, fileSystemItem?: DevExpress.fileManagement.FileSystemItem }) => any);
        /**
         * A function that is executed when the focused item is changed.
         */
        onFocusedItemChanged?: ((e: { component?: dxFileManager, element?: DevExpress.core.dxElement, model?: any, item?: DevExpress.fileManagement.FileSystemItem, itemElement?: DevExpress.core.dxElement }) => any);
        /**
         * A function that is executed when the selected file is opened.
         */
        onSelectedFileOpened?: ((e: { component?: dxFileManager, element?: DevExpress.core.dxElement, model?: any, file?: DevExpress.fileManagement.FileSystemItem }) => any);
        /**
         * A function that is executed when a file system item is selected or selection is canceled.
         */
        onSelectionChanged?: ((e: { component?: dxFileManager, element?: DevExpress.core.dxElement, model?: any, currentSelectedItemKeys?: Array<string>, currentDeselectedItemKeys?: Array<string>, selectedItems?: Array<DevExpress.fileManagement.FileSystemItem>, selectedItemKeys?: Array<string> }) => any);
        /**
         * A function that is executed when a toolbar item is clicked.
         */
        onToolbarItemClick?: ((e: { component?: dxFileManager, element?: DevExpress.core.dxElement, model?: any, itemData?: any, itemElement?: DevExpress.core.dxElement, itemIndex?: number, event?: DevExpress.events.event }) => any);
        /**
         * Specifies actions that a user is allowed to perform on files and folders.
         */
        permissions?: { copy?: boolean, create?: boolean, delete?: boolean, download?: boolean, move?: boolean, rename?: boolean, upload?: boolean };
        /**
         * Specifies the root folder name.
         */
        rootFolderName?: string;
        /**
         * Contains an array of initially or currently selected files and directories' keys.
         */
        selectedItemKeys?: Array<string>;
        /**
         * Specifies whether a user can select a single or multiple files and folders in the item view simultaneously.
         */
        selectionMode?: 'multiple' | 'single';
        /**
         * Configures toolbar settings.
         */
        toolbar?: dxFileManagerToolbar;
        /**
         * Configures upload settings.
         */
        upload?: { chunkSize?: number, maxFileSize?: number };
    }
    /**
     * The FileManager is a UI component that allows users to upload, select, and manage files and directories in different file storages.
     */
    export class dxFileManager extends Widget {
        constructor(element: Element, options?: dxFileManagerOptions)
        constructor(element: JQuery, options?: dxFileManagerOptions)
        /**
         * Gets the current directory object.
         */
        getCurrentDirectory(): any;
        /**
         * Gets the selected items.
         */
        getSelectedItems(): Array<any>;
        /**
         * Reloads data and repaints the UI component.
         */
        refresh(): Promise<any> & JQueryPromise<any>;
    }
    /**
     * Configures the context menu.
     */
    export interface dxFileManagerContextMenu {
        /**
         * Configures context menu items' settings.
         */
        items?: Array<dxFileManagerContextMenuItem | 'create' | 'upload' | 'refresh' | 'download' | 'move' | 'copy' | 'rename' | 'delete'>;
    }
    /**
     * Configures the context menu item.
     */
    export interface dxFileManagerContextMenuItem extends dxContextMenuItem {
        /**
         * Configures settings of a context menu item's subitems.
         */
        items?: Array<dxFileManagerContextMenuItem>;
        /**
         * Specifies the context menu item's name.
         */
        name?: 'create' | 'upload' | 'refresh' | 'download' | 'move' | 'copy' | 'rename' | 'delete' | string;
        /**
         * Specifies the context menu item's visibility.
         */
        visible?: boolean;
    }
    /**
     * Configures the column.
     */
    export interface dxFileManagerDetailsColumn {
        /**
         * Specifies the column alignment.
         */
        alignment?: 'center' | 'left' | 'right' | undefined;
        /**
         * Specifies the column caption.
         */
        caption?: string;
        /**
         * Specifies a CSS class to be applied to the column.
         */
        cssClass?: string;
        /**
         * Specifies which data field provides data for the column.
         */
        dataField?: string;
        /**
         * Casts column values to a specific data type.
         */
        dataType?: 'string' | 'number' | 'date' | 'boolean' | 'object' | 'datetime';
        /**
         * Specifies the order in which columns are hidden when the UI component adapts to the screen or container size.
         */
        hidingPriority?: number;
        /**
         * Specifies the order in which the column is sorted.
         */
        sortIndex?: number;
        /**
         * Specifies the sort order of column values.
         */
        sortOrder?: 'asc' | 'desc' | undefined;
        /**
         * Specifies the column visibility.
         */
        visible?: boolean;
        /**
         * Specifies the position of the column in the resulting UI component.
         */
        visibleIndex?: number;
        /**
         * Specifies the column width.
         */
        width?: number | string;
    }
    /**
     * Configures the toolbar.
     */
    export interface dxFileManagerToolbar {
        /**
         * Configures settings of the toolbar items that are visible when users select files.
         */
        fileSelectionItems?: Array<dxFileManagerToolbarItem | 'showNavPane' | 'create' | 'upload' | 'refresh' | 'switchView' | 'download' | 'move' | 'copy' | 'rename' | 'delete' | 'clearSelection' | 'separator'>;
        /**
         * Configures toolbar items' settings.
         */
        items?: Array<dxFileManagerToolbarItem | 'showNavPane' | 'create' | 'upload' | 'refresh' | 'switchView' | 'download' | 'move' | 'copy' | 'rename' | 'delete' | 'clearSelection' | 'separator'>;
    }
    /**
     * Configures the toolbar item.
     */
    export interface dxFileManagerToolbarItem extends dxToolbarItem {
        /**
         * Specifies the icon to be displayed on the toolbar item.
         */
        icon?: string;
        /**
         * Specifies the toolbar item's location.
         */
        location?: 'after' | 'before' | 'center';
        /**
         * Specifies the toolbar item's name.
         */
        name?: 'showNavPane' | 'create' | 'upload' | 'refresh' | 'switchView' | 'download' | 'move' | 'copy' | 'rename' | 'delete' | 'clearSelection' | 'separator' | string;
        /**
         * Specifies the toolbar item's visibility.
         */
        visible?: boolean;
    }
    /**
     * 
     */
    export interface dxFileUploaderOptions extends EditorOptions<dxFileUploader> {
        /**
         * A function that cancels the file upload.
         */
        abortUpload?: ((file: File, uploadInfo?: DevExpress.fileManagement.UploadInfo) => Promise<any> | JQueryPromise<any> | any);
        /**
         * Specifies a file type or several types accepted by the UI component.
         */
        accept?: string;
        /**
         * Specifies if an end user can remove a file from the selection and interrupt uploading.
         */
        allowCanceling?: boolean;
        /**
         * Restricts file extensions that can be uploaded to the server.
         */
        allowedFileExtensions?: Array<string>;
        /**
         * Specifies the chunk size in bytes. Applies only if uploadMode is 'instantly' or 'useButtons'. Requires a server that can process file chunks.
         */
        chunkSize?: number;
        /**
         * Specifies the HTML element which invokes the file upload dialog.
         */
        dialogTrigger?: string | Element | JQuery;
        /**
         * Specifies the HTML element in which users can drag and drop files for upload.
         */
        dropZone?: string | Element | JQuery;
        /**
         * Specifies whether the UI component can be focused using keyboard navigation.
         */
        focusStateEnabled?: boolean;
        /**
         * Specifies the attributes to be passed on to the underlying `` element of the `file` type.
         */
        inputAttr?: any;
        /**
         * The text displayed when the extension of the file being uploaded is not an allowed file extension.
         */
        invalidFileExtensionMessage?: string;
        /**
         * The text displayed when the size of the file being uploaded is greater than the maxFileSize.
         */
        invalidMaxFileSizeMessage?: string;
        /**
         * The text displayed when the size of the file being uploaded is less than the minFileSize.
         */
        invalidMinFileSizeMessage?: string;
        /**
         * Specifies the text displayed on the area to which an end-user can drop a file.
         */
        labelText?: string;
        /**
         * Specifies the maximum file size (in bytes) allowed for uploading. Applies only if uploadMode is 'instantly' or 'useButtons'.
         */
        maxFileSize?: number;
        /**
         * Specifies the minimum file size (in bytes) allowed for uploading. Applies only if uploadMode is 'instantly' or 'useButtons'.
         */
        minFileSize?: number;
        /**
         * Specifies whether the UI component enables an end-user to select a single file or multiple files.
         */
        multiple?: boolean;
        /**
         * Specifies the value passed to the name attribute of the underlying input element. Required to access uploaded files on the server.
         */
        name?: string;
        /**
         * A function that allows you to customize the request before it is sent to the server.
         */
        onBeforeSend?: ((e: { component?: dxFileUploader, element?: DevExpress.core.dxElement, model?: any, request?: XMLHttpRequest, file?: File, uploadInfo?: DevExpress.fileManagement.UploadInfo }) => any);
        /**
         * A function that is executed when the mouse enters a drop zone while dragging a file.
         */
        onDropZoneEnter?: ((e: { component?: dxFileUploader, element?: DevExpress.core.dxElement, model?: any, dropZoneElement?: DevExpress.core.dxElement, event?: DevExpress.events.event }) => any);
        /**
         * A function that is executed when the mouse leaves a drop zone as it drags a file.
         */
        onDropZoneLeave?: ((e: { component?: dxFileUploader, element?: DevExpress.core.dxElement, model?: any, dropZoneElement?: DevExpress.core.dxElement, event?: DevExpress.events.event }) => any);
        /**
         * A function that is executed when all files are successfully uploaded.
         */
        onFilesUploaded?: ((e: { component?: dxFileUploader, element?: DevExpress.core.dxElement, model?: any }) => any);
        /**
         * A function that is executed when a file segment is uploaded.
         */
        onProgress?: ((e: { component?: dxFileUploader, element?: DevExpress.core.dxElement, model?: any, file?: File, segmentSize?: number, bytesLoaded?: number, bytesTotal?: number, event?: DevExpress.events.event, request?: XMLHttpRequest }) => any);
        /**
         * A function that is executed when the file upload is aborted.
         */
        onUploadAborted?: ((e: { component?: dxFileUploader, element?: DevExpress.core.dxElement, model?: any, file?: File, event?: DevExpress.events.event, request?: XMLHttpRequest, message?: string }) => any);
        /**
         * A function that is executed when an error occurs during the file upload.
         */
        onUploadError?: ((e: { component?: dxFileUploader, element?: DevExpress.core.dxElement, model?: any, file?: File, event?: DevExpress.events.event, request?: XMLHttpRequest, error?: any, message?: string }) => any);
        /**
         * A function that is executed when the file upload is started.
         */
        onUploadStarted?: ((e: { component?: dxFileUploader, element?: DevExpress.core.dxElement, model?: any, file?: File, event?: DevExpress.events.event, request?: XMLHttpRequest }) => any);
        /**
         * A function that is executed when a file is successfully uploaded.
         */
        onUploaded?: ((e: { component?: dxFileUploader, element?: DevExpress.core.dxElement, model?: any, file?: File, event?: DevExpress.events.event, request?: XMLHttpRequest, message?: string }) => any);
        /**
         * A function that is executed when one or several files are added to or removed from the selection.
         */
        onValueChanged?: ((e: { component?: dxFileUploader, element?: DevExpress.core.dxElement, model?: any, value?: Array<File>, previousValue?: Array<File>, event?: DevExpress.events.event }) => any);
        /**
         * Gets the current progress in percentages.
         */
        progress?: number;
        /**
         * The message displayed by the UI component when it is ready to upload the specified files.
         */
        readyToUploadMessage?: string;
        /**
         * The text displayed on the button that opens the file browser.
         */
        selectButtonText?: string;
        /**
         * Specifies whether or not the UI component displays the list of selected files.
         */
        showFileList?: boolean;
        /**
         * The message displayed by the UI component when the file upload is cancelled.
         */
        uploadAbortedMessage?: string;
        /**
         * The text displayed on the button that starts uploading.
         */
        uploadButtonText?: string;
        /**
         * A function that uploads a file in chunks.
         */
        uploadChunk?: ((file: File, uploadInfo: DevExpress.fileManagement.UploadInfo) => Promise<any> | JQueryPromise<any> | any);
        /**
         * Specifies custom data for the upload request.
         */
        uploadCustomData?: any;
        /**
         * The message displayed by the UI component on uploading failure.
         */
        uploadFailedMessage?: string;
        /**
         * A function that uploads a file.
         */
        uploadFile?: ((file: File, progressCallback: Function) => Promise<any> | JQueryPromise<any> | any);
        /**
         * Specifies headers for the upload request.
         */
        uploadHeaders?: any;
        /**
         * Specifies the method for the upload request.
         */
        uploadMethod?: 'POST' | 'PUT';
        /**
         * Specifies how the UI component uploads files.
         */
        uploadMode?: 'instantly' | 'useButtons' | 'useForm';
        /**
         * Specifies a target Url for the upload request.
         */
        uploadUrl?: string;
        /**
         * The message displayed by the UI component when uploading is finished.
         */
        uploadedMessage?: string;
        /**
         * Specifies a File instance representing the selected file. Read-only when uploadMode is 'useForm'.
         */
        value?: Array<File>;
    }
    /**
     * The FileUploader UI component enables an end user to upload files to the server. An end user can select files in the file explorer or drag and drop files to the FileUploader area on the page.
     */
    export class dxFileUploader extends Editor {
        constructor(element: Element, options?: dxFileUploaderOptions)
        constructor(element: JQuery, options?: dxFileUploaderOptions)
        /**
         * Cancels the file upload.
         */
        abortUpload(): void;
        /**
         * Cancels the file upload.
         */
        abortUpload(file: File): void;
        /**
         * Cancels the file upload.
         */
        abortUpload(fileIndex: number): void;
        /**
         * Removes a file.
         */
        removeFile(file: File): void;
        /**
         * Removes a file with the specified index.
         */
        removeFile(fileIndex: number): void;
        /**
         * Uploads all the selected files.
         */
        upload(): void;
        /**
         * Uploads the specified file.
         */
        upload(file: File): void;
        /**
         * Uploads a file with the specified index.
         */
        upload(fileIndex: number): void;
    }
    /**
     * 
     */
    export interface dxFilterBuilderOptions extends WidgetOptions<dxFilterBuilder> {
        /**
         * Specifies whether the UI component can display hierarchical data fields.
         */
        allowHierarchicalFields?: boolean;
        /**
         * Configures custom filter operations.
         */
        customOperations?: Array<dxFilterBuilderCustomOperation>;
        /**
         * Configures fields.
         */
        fields?: Array<dxFilterBuilderField>;
        /**
         * Specifies filter operation descriptions.
         */
        filterOperationDescriptions?: { between?: string, contains?: string, endsWith?: string, equal?: string, greaterThan?: string, greaterThanOrEqual?: string, isBlank?: string, isNotBlank?: string, lessThan?: string, lessThanOrEqual?: string, notContains?: string, notEqual?: string, startsWith?: string };
        /**
         * Specifies group operation descriptions.
         */
        groupOperationDescriptions?: { and?: string, notAnd?: string, notOr?: string, or?: string };
        /**
         * Specifies a set of available group operations.
         */
        groupOperations?: Array<'and' | 'or' | 'notAnd' | 'notOr'>;
        /**
         * Specifies groups' maximum nesting level.
         */
        maxGroupLevel?: number;
        /**
         * A function that is executed after an editor is created.
         */
        onEditorPrepared?: ((e: { component?: dxFilterBuilder, element?: DevExpress.core.dxElement, model?: any, value?: any, setValue?: any, editorElement?: DevExpress.core.dxElement, editorName?: string, dataField?: string, filterOperation?: string, updateValueTimeout?: number, width?: number, readOnly?: boolean, disabled?: boolean, rtlEnabled?: boolean }) => any);
        /**
         * A function that is executed before an editor is created.
         */
        onEditorPreparing?: ((e: { component?: dxFilterBuilder, element?: DevExpress.core.dxElement, model?: any, value?: any, setValue?: any, cancel?: boolean, editorElement?: DevExpress.core.dxElement, editorName?: string, editorOptions?: any, dataField?: string, filterOperation?: string, updateValueTimeout?: number, width?: number, readOnly?: boolean, disabled?: boolean, rtlEnabled?: boolean }) => any);
        /**
         * A function that is executed after the UI component's value is changed.
         */
        onValueChanged?: ((e: { component?: dxFilterBuilder, element?: DevExpress.core.dxElement, model?: any, value?: any, previousValue?: any }) => any);
        /**
         * Allows you to specify a filter.
         */
        value?: string | Array<any> | Function;
    }
    /**
     * The FilterBuilder UI component allows a user to build complex filter expressions with an unlimited number of filter conditions, combined by logical operations using the UI.
     */
    export class dxFilterBuilder extends Widget {
        constructor(element: Element, options?: dxFilterBuilderOptions)
        constructor(element: JQuery, options?: dxFilterBuilderOptions)
        /**
         * Gets a filter expression that contains only operations supported by the DataSource.
         */
        getFilterExpression(): string | Array<any> | Function;
    }
    /**
     * 
     */
    export interface dxFilterBuilderCustomOperation {
        /**
         * Specifies a function that returns a filter expression for this custom operation.
         */
        calculateFilterExpression?: ((filterValue: any, field: dxFilterBuilderField) => string | Array<any> | Function);
        /**
         * Specifies the operation's caption.
         */
        caption?: string;
        /**
         * Customizes the field value's text representation.
         */
        customizeText?: ((fieldInfo: { value?: string | number | Date, valueText?: string, field?: dxFilterBuilderField }) => string);
        /**
         * Specifies for which data types the operation is available by default.
         */
        dataTypes?: Array<'string' | 'number' | 'date' | 'boolean' | 'object' | 'datetime'>;
        /**
         * Specifies a custom template for the UI component used to edit the field value.
         */
        editorTemplate?: DevExpress.core.template | ((conditionInfo: { value?: string | number | Date, field?: dxFilterBuilderField, setValue?: Function }, container: DevExpress.core.dxElement) => string | Element | JQuery);
        /**
         * Specifies whether the operation can have a value. If it can, the editor is displayed.
         */
        hasValue?: boolean;
        /**
         * Specifies the icon that should represent the filter operation.
         */
        icon?: string;
        /**
         * Specifies the operation's identifier.
         */
        name?: string;
    }
    /**
     * The FilterBuilder's field structure.
     */
    export interface dxFilterBuilderField {
        /**
         * Specifies the field's custom filtering rules.
         */
        calculateFilterExpression?: ((filterValue: any, selectedFilterOperation: string) => string | Array<any> | Function);
        /**
         * Specifies the data field's caption.
         */
        caption?: string;
        /**
         * Customizes the input value's display text.
         */
        customizeText?: ((fieldInfo: { value?: string | number | Date, valueText?: string }) => string);
        /**
         * Specifies the name of a field to be filtered.
         */
        dataField?: string;
        /**
         * Casts field values to a specific data type.
         */
        dataType?: 'string' | 'number' | 'date' | 'boolean' | 'object' | 'datetime';
        /**
         * Configures the UI component used to edit the field value.
         */
        editorOptions?: any;
        /**
         * Specifies the editor's custom template.
         */
        editorTemplate?: DevExpress.core.template | ((conditionInfo: { value?: string | number | Date, filterOperation?: string, field?: dxFilterBuilderField, setValue?: Function }, container: DevExpress.core.dxElement) => string | Element | JQuery);
        /**
         * Specifies the false value text. Applies only if dataType is 'boolean'.
         */
        falseText?: string;
        /**
         * Specifies a set of available filter operations.
         */
        filterOperations?: Array<'=' | '<>' | '<' | '<=' | '>' | '>=' | 'contains' | 'endswith' | 'isblank' | 'isnotblank' | 'notcontains' | 'startswith' | 'between' | string>;
        /**
         * Formats a value before it is displayed.
         */
        format?: format;
        /**
         * Configures the lookup field.
         */
        lookup?: { allowClearing?: boolean, dataSource?: Array<any> | DevExpress.data.DataSourceOptions | DevExpress.data.Store, displayExpr?: string | ((data: any) => string), valueExpr?: string | ((data: any) => string | number | boolean) };
        /**
         * Specifies the field's name. Use it to distinguish the field from other fields when they have identical dataField values.
         */
        name?: string;
        /**
         * Specifies the true value text. Applies only if dataType is 'boolean'.
         */
        trueText?: string;
    }
    /**
     * 
     */
    export interface dxFormOptions extends WidgetOptions<dxForm> {
        /**
         * Specifies whether or not all root item labels are aligned.
         */
        alignItemLabels?: boolean;
        /**
         * Specifies whether or not item labels in all groups are aligned.
         */
        alignItemLabelsInAllGroups?: boolean;
        /**
         * The count of columns in the form layout.
         */
        colCount?: number | 'auto';
        /**
         * Specifies dependency between the screen factor and the count of columns in the form layout.
         */
        colCountByScreen?: any;
        /**
         * Specifies a function that customizes a form item after it has been created.
         */
        customizeItem?: ((item: dxFormSimpleItem | dxFormGroupItem | dxFormTabbedItem | dxFormEmptyItem | dxFormButtonItem) => any);
        /**
         * Provides the Form's data. Gets updated every time form fields change.
         */
        formData?: any;
        /**
         * Holds an array of form items.
         */
        items?: Array<dxFormSimpleItem | dxFormGroupItem | dxFormTabbedItem | dxFormEmptyItem | dxFormButtonItem>;
        /**
         * Specifies the location of a label against the editor.
         */
        labelLocation?: 'left' | 'right' | 'top';
        /**
         * The minimum column width used for calculating column count in the form layout.
         */
        minColWidth?: number;
        /**
         * A function that is executed when the Enter key has been pressed while an editor is focused.
         */
        onEditorEnterKey?: ((e: { component?: dxForm, element?: DevExpress.core.dxElement, model?: any, dataField?: string }) => any);
        /**
         * A function that is executed when the value of a formData object field is changed.
         */
        onFieldDataChanged?: ((e: { component?: dxForm, element?: DevExpress.core.dxElement, model?: any, dataField?: string, value?: any }) => any);
        /**
         * The text displayed for optional fields.
         */
        optionalMark?: string;
        /**
         * Specifies whether all editors on the form are read-only. Applies only to non-templated items.
         */
        readOnly?: boolean;
        /**
         * The text displayed for required fields.
         */
        requiredMark?: string;
        /**
         * Specifies the message that is shown for end-users if a required field value is not specified.
         */
        requiredMessage?: string;
        /**
         * Specifies a function that categorizes screens by their width.
         */
        screenByWidth?: Function;
        /**
         * A Boolean value specifying whether to enable or disable form scrolling.
         */
        scrollingEnabled?: boolean;
        /**
         * Specifies whether or not a colon is displayed at the end of form labels.
         */
        showColonAfterLabel?: boolean;
        /**
         * Specifies whether or not the optional mark is displayed for optional fields.
         */
        showOptionalMark?: boolean;
        /**
         * Specifies whether or not the required mark is displayed for required fields.
         */
        showRequiredMark?: boolean;
        /**
         * Specifies whether or not the total validation summary is displayed on the form.
         */
        showValidationSummary?: boolean;
        /**
         * Gives a name to the internal validation group.
         */
        validationGroup?: string;
    }
    /**
     * The Form UI component represents fields of a data object as a collection of label-editor pairs. These pairs can be arranged in several groups, tabs and columns.
     */
    export class dxForm extends Widget {
        constructor(element: Element, options?: dxFormOptions)
        constructor(element: JQuery, options?: dxFormOptions)
        /**
         * Gets a button's instance.
         */
        getButton(name: string): dxButton | undefined;
        /**
         * Gets an editor instance. Takes effect only if the form item is visible.
         */
        getEditor(dataField: string): Editor | undefined;
        /**
         * Gets a form item's configuration.
         */
        itemOption(id: string): any;
        /**
         * Updates the value of a single item property.
         */
        itemOption(id: string, option: string, value: any): void;
        /**
         * Updates the values of several item properties.
         */
        itemOption(id: string, options: any): void;
        /**
         * Resets the editor's value to undefined.
         */
        resetValues(): void;
        /**
         * Merges the passed `data` object with formData. Matching properties in formData are overwritten and new properties added.
         */
        updateData(data: any): void;
        /**
         * Updates a formData field and the corresponding editor.
         */
        updateData(dataField: string, value: any): void;
        /**
         * Updates the dimensions of the UI component contents.
         */
        updateDimensions(): Promise<void> & JQueryPromise<void>;
        /**
         * Validates the values of all editors on the form against the list of the validation rules specified for each form item.
         */
        validate(): dxValidationGroupResult;
    }
    /**
     * Configures a button form item.
     */
    export interface dxFormButtonItem {
        /**
         * Configures the button.
         */
        buttonOptions?: dxButtonOptions;
        /**
         * Specifies how many columns the item spans.
         */
        colSpan?: number;
        /**
         * Specifies a CSS class to be applied to the item.
         */
        cssClass?: string;
        /**
         * Specifies the button's horizontal alignment.
         */
        horizontalAlignment?: 'center' | 'left' | 'right';
        /**
         * Specifies the item's type. Set it to 'button' to create a button item.
         */
        itemType?: 'empty' | 'group' | 'simple' | 'tabbed' | 'button';
        /**
         * Specifies the item's identifier.
         */
        name?: string;
        /**
         * Specifies the button's vertical alignment.
         */
        verticalAlignment?: 'bottom' | 'center' | 'top';
        /**
         * Specifies whether the item is visible.
         */
        visible?: boolean;
        /**
         * Specifies the item's position regarding other items in a group, tab, or the whole UI component.
         */
        visibleIndex?: number;
    }
    /**
     * This article describes configuration properties of an empty form item.
     */
    export interface dxFormEmptyItem {
        /**
         * Specifies the number of columns spanned by the item.
         */
        colSpan?: number;
        /**
         * Specifies a CSS class to be applied to the form item.
         */
        cssClass?: string;
        /**
         * Specifies the item's type. Set it to 'empty' to create an empty item.
         */
        itemType?: 'empty' | 'group' | 'simple' | 'tabbed' | 'button';
        /**
         * Specifies a name that identifies the form item.
         */
        name?: string;
        /**
         * Specifies whether or not the current form item is visible.
         */
        visible?: boolean;
        /**
         * Specifies the sequence number of the item in a form, group or tab.
         */
        visibleIndex?: number;
    }
    /**
     * This article describes configuration properties of a group form item.
     */
    export interface dxFormGroupItem {
        /**
         * Specifies whether or not all group item labels are aligned.
         */
        alignItemLabels?: boolean;
        /**
         * Specifies the group caption.
         */
        caption?: string;
        /**
         * The count of columns in the group layout.
         */
        colCount?: number;
        /**
         * Specifies the relation between the screen size qualifier and the number of columns in the grouped layout.
         */
        colCountByScreen?: any;
        /**
         * Specifies the number of columns spanned by the item.
         */
        colSpan?: number;
        /**
         * Specifies a CSS class to be applied to the form item.
         */
        cssClass?: string;
        /**
         * Specifies the item's type. Set it to 'group' to create a group item.
         */
        itemType?: 'empty' | 'group' | 'simple' | 'tabbed' | 'button';
        /**
         * Holds an array of form items displayed within the group.
         */
        items?: Array<dxFormSimpleItem | dxFormGroupItem | dxFormTabbedItem | dxFormEmptyItem | dxFormButtonItem>;
        /**
         * Specifies a name that identifies the form item.
         */
        name?: string;
        /**
         * A template to be used for rendering a group item.
         */
        template?: DevExpress.core.template | ((data: { component?: dxForm, formData?: any }, itemElement: DevExpress.core.dxElement) => string | Element | JQuery);
        /**
         * Specifies whether or not the current form item is visible.
         */
        visible?: boolean;
        /**
         * Specifies the sequence number of the item in a form, group or tab.
         */
        visibleIndex?: number;
    }
    /**
     * This article describes configuration properties of a simple form item.
     */
    export interface dxFormSimpleItem {
        /**
         * Specifies the number of columns spanned by the item.
         */
        colSpan?: number;
        /**
         * Specifies a CSS class to be applied to the form item.
         */
        cssClass?: string;
        /**
         * Specifies the path to the formData object field bound to the current form item.
         */
        dataField?: string;
        /**
         * Configures the form item's editor.
         */
        editorOptions?: any;
        /**
         * Specifies which editor UI component is used to display and edit the form item value.
         */
        editorType?: 'dxAutocomplete' | 'dxCalendar' | 'dxCheckBox' | 'dxColorBox' | 'dxDateBox' | 'dxDropDownBox' | 'dxHtmlEditor' | 'dxLookup' | 'dxNumberBox' | 'dxRadioGroup' | 'dxRangeSlider' | 'dxSelectBox' | 'dxSlider' | 'dxSwitch' | 'dxTagBox' | 'dxTextArea' | 'dxTextBox';
        /**
         * Specifies the help text displayed for the current form item.
         */
        helpText?: string;
        /**
         * Specifies whether the current form item is required.
         */
        isRequired?: boolean;
        /**
         * Specifies the item's type. Set it to 'simple' to create a simple item.
         */
        itemType?: 'empty' | 'group' | 'simple' | 'tabbed' | 'button';
        /**
         * Specifies properties for the form item label.
         */
        label?: { alignment?: 'center' | 'left' | 'right', location?: 'left' | 'right' | 'top', showColon?: boolean, text?: string, visible?: boolean };
        /**
         * Specifies a name that identifies the form item.
         */
        name?: string;
        /**
         * A template that can be used to replace the default editor with custom content.
         */
        template?: DevExpress.core.template | ((data: { component?: dxForm, dataField?: string, editorOptions?: any, editorType?: string, name?: string }, itemElement: DevExpress.core.dxElement) => string | Element | JQuery);
        /**
         * An array of validation rules to be checked for the form item editor.
         */
        validationRules?: Array<RequiredRule | NumericRule | RangeRule | StringLengthRule | CustomRule | CompareRule | PatternRule | EmailRule | AsyncRule>;
        /**
         * Specifies whether or not the current form item is visible.
         */
        visible?: boolean;
        /**
         * Specifies the sequence number of the item in a form, group or tab.
         */
        visibleIndex?: number;
    }
    /**
     * This article describes configuration properties of a tabbed form item.
     */
    export interface dxFormTabbedItem {
        /**
         * Specifies the number of columns spanned by the item.
         */
        colSpan?: number;
        /**
         * Specifies a CSS class to be applied to the form item.
         */
        cssClass?: string;
        /**
         * Specifies the item's type. Set it to 'tabbed' to create a tabbed item.
         */
        itemType?: 'empty' | 'group' | 'simple' | 'tabbed' | 'button';
        /**
         * Specifies a name that identifies the form item.
         */
        name?: string;
        /**
         * Holds a configuration object for the TabPanel UI component used to display the current form item.
         */
        tabPanelOptions?: dxTabPanelOptions;
        /**
         * An array of tab configuration objects.
         */
        tabs?: Array<{ alignItemLabels?: boolean, badge?: string, colCount?: number, colCountByScreen?: any, disabled?: boolean, icon?: string, items?: Array<dxFormSimpleItem | dxFormGroupItem | dxFormTabbedItem | dxFormEmptyItem | dxFormButtonItem>, tabTemplate?: DevExpress.core.template | ((tabData: any, tabIndex: number, tabElement: DevExpress.core.dxElement) => any), template?: DevExpress.core.template | ((tabData: any, tabIndex: number, tabElement: DevExpress.core.dxElement) => any), title?: string }>;
        /**
         * Specifies whether or not the current form item is visible.
         */
        visible?: boolean;
        /**
         * Specifies the sequence number of the item in a form, group or tab.
         */
        visibleIndex?: number;
    }
    /**
     * 
     */
    export interface dxGalleryOptions extends CollectionWidgetOptions<dxGallery> {
        /**
         * The time, in milliseconds, spent on slide animation.
         */
        animationDuration?: number;
        /**
         * Specifies whether or not to animate the displayed item change.
         */
        animationEnabled?: boolean;
        /**
         * Binds the UI component to data.
         */
        dataSource?: string | Array<string | dxGalleryItem | any> | DevExpress.data.DataSource | DevExpress.data.DataSourceOptions;
        /**
         * Specifies whether the UI component can be focused using keyboard navigation.
         */
        focusStateEnabled?: boolean;
        /**
         * A Boolean value specifying whether or not to allow users to switch between items by clicking an indicator.
         */
        indicatorEnabled?: boolean;
        /**
         * Specifies the width of an area used to display a single image.
         */
        initialItemWidth?: number;
        /**
         * An array of items displayed by the UI component.
         */
        items?: Array<string | dxGalleryItem | any>;
        /**
         * A Boolean value specifying whether or not to scroll back to the first item after the last item is swiped.
         */
        loop?: boolean;
        /**
         * The text or HTML markup displayed by the UI component if the item collection is empty.
         */
        noDataText?: string;
        /**
         * The index of the currently active gallery item.
         */
        selectedIndex?: number;
        /**
         * A Boolean value specifying whether or not to display an indicator that points to the selected gallery item.
         */
        showIndicator?: boolean;
        /**
         * A Boolean value that specifies the availability of the 'Forward' and 'Back' navigation buttons.
         */
        showNavButtons?: boolean;
        /**
         * The time interval in milliseconds, after which the gallery switches to the next item.
         */
        slideshowDelay?: number;
        /**
         * Specifies if the UI component stretches images to fit the total gallery width.
         */
        stretchImages?: boolean;
        /**
         * A Boolean value specifying whether or not to allow users to switch between items by swiping.
         */
        swipeEnabled?: boolean;
        /**
         * Specifies whether or not to display parts of previous and next images along the sides of the current image.
         */
        wrapAround?: boolean;
    }
    /**
     * The Gallery is a UI component that displays a collection of images in a carousel. The UI component is supplied with various navigation controls that allow a user to switch between images.
     */
    export class dxGallery extends CollectionWidget {
        constructor(element: Element, options?: dxGalleryOptions)
        constructor(element: JQuery, options?: dxGalleryOptions)
        /**
         * Shows a specific image.
         */
        goToItem(itemIndex: number, animation: boolean): Promise<void> & JQueryPromise<void>;
        /**
         * Shows the next image.
         */
        nextItem(animation: boolean): Promise<void> & JQueryPromise<void>;
        /**
         * Shows the previous image.
         */
        prevItem(animation: boolean): Promise<void> & JQueryPromise<void>;
    }
    /**
     * 
     */
    export interface dxGalleryItem extends CollectionWidgetItem {
        /**
         * Specifies the text passed to the alt attribute of the image markup element.
         */
        imageAlt?: string;
        /**
         * Specifies the URL of the image displayed by the item.
         */
        imageSrc?: string;
    }
    /**
     * 
     */
    export interface dxGanttOptions extends WidgetOptions<dxGantt> {
        /**
         * Specifies whether users can select tasks in the Gantt.
         */
        allowSelection?: boolean;
        /**
         * An array of columns in the Gantt.
         */
        columns?: Array<dxTreeListColumn | string>;
        /**
         * Configures the context menu settings.
         */
        contextMenu?: dxGanttContextMenu;
        /**
         * Configures dependencies.
         */
        dependencies?: { dataSource?: Array<any> | DevExpress.data.DataSource | DevExpress.data.DataSourceOptions, keyExpr?: string | Function, predecessorIdExpr?: string | Function, successorIdExpr?: string | Function, typeExpr?: string | Function };
        /**
         * Configures edit properties.
         */
        editing?: { allowDependencyAdding?: boolean, allowDependencyDeleting?: boolean, allowResourceAdding?: boolean, allowResourceDeleting?: boolean, allowResourceUpdating?: boolean, allowTaskAdding?: boolean, allowTaskDeleting?: boolean, allowTaskResourceUpdating?: boolean, allowTaskUpdating?: boolean, enabled?: boolean };
        /**
         * Specifies the first day of a week.
         */
        firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
        /**
         * A function that is executed before the context menu is rendered.
         */
        onContextMenuPreparing?: ((e: { component?: dxGantt, element?: DevExpress.core.dxElement, cancel?: boolean, event?: DevExpress.events.event, targetKey?: any, targetType?: string, data?: any, items?: Array<any> }) => any);
        /**
         * A function that is executed after a custom command item was clicked. Allows you to implement a custom command's functionality.
         */
        onCustomCommand?: ((e: { component?: dxGantt, element?: DevExpress.core.dxElement, name?: string }) => any);
        /**
         * A function that is executed when a dependency is deleted.
         */
        onDependencyDeleted?: ((e: { component?: dxGantt, element?: DevExpress.core.dxElement, model?: any, values?: any, key?: any }) => any);
        /**
         * A function that is executed before a dependency is deleted.
         */
        onDependencyDeleting?: ((e: { component?: dxGantt, element?: DevExpress.core.dxElement, model?: any, cancel?: boolean, values?: any, key?: any }) => any);
        /**
         * A function that is executed when a dependency is inserted.
         */
        onDependencyInserted?: ((e: { component?: dxGantt, element?: DevExpress.core.dxElement, model?: any, values?: any, key?: any }) => any);
        /**
         * A function that is executed before a dependency is inserted.
         */
        onDependencyInserting?: ((e: { component?: dxGantt, element?: DevExpress.core.dxElement, model?: any, cancel?: boolean, values?: any }) => any);
        /**
         * A function that is executed when a resource is assigned to a task.
         */
        onResourceAssigned?: ((e: { component?: dxGantt, element?: DevExpress.core.dxElement, model?: any, values?: any, key?: any }) => any);
        /**
         * A function that is executed before a resource is assigned to a task.
         */
        onResourceAssigning?: ((e: { component?: dxGantt, element?: DevExpress.core.dxElement, model?: any, cancel?: boolean, values?: any }) => any);
        /**
         * A function that is executed when a resource is deleted.
         */
        onResourceDeleted?: ((e: { component?: dxGantt, element?: DevExpress.core.dxElement, model?: any, values?: any, key?: any }) => any);
        /**
         * A function that is executed before a resource is deleted.
         */
        onResourceDeleting?: ((e: { component?: dxGantt, element?: DevExpress.core.dxElement, model?: any, cancel?: boolean, values?: any, key?: any }) => any);
        /**
         * A function that is executed when a resource is inserted.
         */
        onResourceInserted?: ((e: { component?: dxGantt, element?: DevExpress.core.dxElement, model?: any, values?: any, key?: any }) => any);
        /**
         * A function that is executed before a resource is inserted.
         */
        onResourceInserting?: ((e: { component?: dxGantt, element?: DevExpress.core.dxElement, model?: any, cancel?: boolean, values?: any }) => any);
        /**
         * A function that is executed when a resource is unassigned from a task.
         */
        onResourceUnassigned?: ((e: { component?: dxGantt, element?: DevExpress.core.dxElement, model?: any, values?: any, key?: any }) => any);
        /**
         * A function that is executed before a resource is unassigned from a task.
         */
        onResourceUnassigning?: ((e: { component?: dxGantt, element?: DevExpress.core.dxElement, model?: any, cancel?: boolean, values?: any, key?: any }) => any);
        /**
         * A function that is executed after users select a task or clear its selection.
         */
        onSelectionChanged?: ((e: { component?: dxGantt, element?: DevExpress.core.dxElement, model?: any, selectedRowKey?: any }) => any);
        /**
         * A function that is executed when a user clicks a task.
         */
        onTaskClick?: ((e: { component?: dxGantt, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, key?: any, data?: any }) => any);
        /**
         * A function that is executed when a user double-clicks a task.
         */
        onTaskDblClick?: ((e: { component?: dxGantt, element?: DevExpress.core.dxElement, model?: any, cancel?: boolean, event?: DevExpress.events.event, key?: any, data?: any }) => any);
        /**
         * A function that is executed when a task is deleted.
         */
        onTaskDeleted?: ((e: { component?: dxGantt, element?: DevExpress.core.dxElement, model?: any, values?: any, key?: any }) => any);
        /**
         * A function that is executed before a task is deleted.
         */
        onTaskDeleting?: ((e: { component?: dxGantt, element?: DevExpress.core.dxElement, model?: any, cancel?: boolean, values?: any, key?: any }) => any);
        /**
         * A function that is executed before the edit dialog is shown.
         */
        onTaskEditDialogShowing?: ((e: { component?: dxGantt, element?: DevExpress.core.dxElement, model?: any, cancel?: boolean, values?: any, key?: any, readOnlyFields?: Array<string>, hiddenFields?: Array<string> }) => any);
        /**
         * A function that is executed when a task is inserted.
         */
        onTaskInserted?: ((e: { component?: dxGantt, element?: DevExpress.core.dxElement, model?: any, values?: any, key?: any }) => any);
        /**
         * A function that is executed before a task is inserted.
         */
        onTaskInserting?: ((e: { component?: dxGantt, element?: DevExpress.core.dxElement, model?: any, cancel?: boolean, values?: any }) => any);
        /**
         * A function that is executed before a task is moved.
         */
        onTaskMoving?: ((e: { component?: dxGantt, element?: DevExpress.core.dxElement, model?: any, cancel?: boolean, newValues?: any, values?: any, key?: any }) => any);
        /**
         * A function that is executed when a task is updated.
         */
        onTaskUpdated?: ((e: { component?: dxGantt, element?: DevExpress.core.dxElement, model?: any, values?: any, key?: any }) => any);
        /**
         * A function that is executed before a task is updated.
         */
        onTaskUpdating?: ((e: { component?: dxGantt, element?: DevExpress.core.dxElement, model?: any, cancel?: boolean, newValues?: any, values?: any, key?: any }) => any);
        /**
         * Configures resource assignments.
         */
        resourceAssignments?: { dataSource?: Array<any> | DevExpress.data.DataSource | DevExpress.data.DataSourceOptions, keyExpr?: string | Function, resourceIdExpr?: string | Function, taskIdExpr?: string | Function };
        /**
         * Configures task resources.
         */
        resources?: { colorExpr?: string | Function, dataSource?: Array<any> | DevExpress.data.DataSource | DevExpress.data.DataSourceOptions, keyExpr?: string | Function, textExpr?: string | Function };
        /**
         * Specifies the root task's identifier.
         */
        rootValue?: any;
        /**
         * Specifies the zoom level of tasks in the Gantt chart.
         */
        scaleType?: 'auto' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'quarters' | 'years';
        /**
         * Allows you to select a row or determine which row is selected.
         */
        selectedRowKey?: any;
        /**
         * Specifies whether to display task resources.
         */
        showResources?: boolean;
        /**
         * Specifies whether to show/hide horizontal faint lines that separate tasks.
         */
        showRowLines?: boolean;
        /**
         * Configures strip lines.
         */
        stripLines?: Array<dxGanttStripLine>;
        /**
         * Specifies the width of the task list in pixels.
         */
        taskListWidth?: number;
        /**
         * Specifies a task's title position.
         */
        taskTitlePosition?: 'inside' | 'outside' | 'none';
        /**
         * Specifies custom content for the task tooltip.
         */
        taskTooltipContentTemplate?: DevExpress.core.template | ((container: DevExpress.core.dxElement, task: any) => any);
        /**
         * Configures tasks.
         */
        tasks?: { colorExpr?: string | Function, dataSource?: Array<any> | DevExpress.data.DataSource | DevExpress.data.DataSourceOptions, endExpr?: string | Function, keyExpr?: string | Function, parentIdExpr?: string | Function, progressExpr?: string | Function, startExpr?: string | Function, titleExpr?: string | Function };
        /**
         * Configures toolbar settings.
         */
        toolbar?: dxGanttToolbar;
        /**
         * Configures validation properties.
         */
        validation?: { autoUpdateParentTasks?: boolean, validateDependencies?: boolean };
    }
    /**
     * The Gantt is a UI component that displays the task flow and dependencies between tasks.
     */
    export class dxGantt extends Widget {
        constructor(element: Element, options?: dxGanttOptions)
        constructor(element: JQuery, options?: dxGanttOptions)
        /**
         * Assigns a resource to a task.
         */
        assignResourceToTask(resourceKey: any, taskKey: any): void;
        /**
         * Deletes a dependency.
         */
        deleteDependency(key: any): void;
        /**
         * Deletes a resource.
         */
        deleteResource(key: any): void;
        /**
         * Deletes a task.
         */
        deleteTask(key: any): void;
        /**
         * Gets the dependency data.
         */
        getDependencyData(key: any): any;
        /**
         * Gets the resource assignment data.
         */
        getResourceAssignmentData(key: any): any;
        /**
         * Gets the resource data.
         */
        getResourceData(key: any): any;
        /**
         * Gets the task data.
         */
        getTaskData(key: any): any;
        /**
         * Gets resources assigned to a task.
         */
        getTaskResources(key: any): Array<any>;
        /**
         * Gets the keys of the visible dependencies.
         */
        getVisibleDependencyKeys(): Array<any>;
        /**
         * Gets the keys of the visible resource assignments.
         */
        getVisibleResourceAssignmentKeys(): Array<any>;
        /**
         * Gets the keys of the visible resources.
         */
        getVisibleResourceKeys(): Array<any>;
        /**
         * Gets the keys of the visible tasks.
         */
        getVisibleTaskKeys(): Array<any>;
        /**
         * Inserts a new dependency.
         */
        insertDependency(data: any): void;
        /**
         * Inserts a new resource.
         */
        insertResource(data: any, taskKeys?: Array<any>): void;
        /**
         * Inserts a new task.
         */
        insertTask(data: any): void;
        /**
         * Removes a resource from the task.
         */
        unassignResourceFromTask(resourceKey: any, taskKey: any): void;
        /**
         * Updates the dimensions of the UI component contents.
         */
        updateDimensions(): void;
        /**
         * Updates the task data.
         */
        updateTask(key: any, data: any): void;
    }
    /**
     * Configures the context menu.
     */
    export interface dxGanttContextMenu {
        /**
         * Specifies whether the context menu is enabled in the UI component.
         */
        enabled?: boolean;
        /**
         * Configures context menu item settings.
         */
        items?: Array<dxGanttContextMenuItem | 'undo' | 'redo' | 'expandAll' | 'collapseAll' | 'addTask' | 'deleteTask' | 'zoomIn' | 'zoomOut' | 'deleteDependency' | 'taskDetails'>;
    }
    /**
     * Configures the context menu item.
     */
    export interface dxGanttContextMenuItem extends dxContextMenuItem {
        /**
         * Specifies the context menu item name.
         */
        name?: 'undo' | 'redo' | 'expandAll' | 'collapseAll' | 'addTask' | 'deleteTask' | 'zoomIn' | 'zoomOut' | 'deleteDependency' | 'taskDetails' | string;
    }
    /**
     * Configures a strip line.
     */
    export interface dxGanttStripLine {
        /**
         * Specifies the name of the cascading style sheet (CSS) class associated with the strip line.
         */
        cssClass?: string;
        /**
         * Specifies the end point of the strip line.
         */
        end?: Date | number | string | (() => Date | number | string);
        /**
         * Specifies the start point of the strip line.
         */
        start?: Date | number | string | (() => Date | number | string);
        /**
         * Specifies the strip line's title.
         */
        title?: string;
    }
    /**
     * Configures the toolbar.
     */
    export interface dxGanttToolbar {
        /**
         * Configures toolbar items' settings.
         */
        items?: Array<dxGanttToolbarItem | 'separator' | 'undo' | 'redo' | 'expandAll' | 'collapseAll' | 'addTask' | 'deleteTask' | 'zoomIn' | 'zoomOut'>;
    }
    /**
     * Configures the toolbar item.
     */
    export interface dxGanttToolbarItem extends dxToolbarItem {
        /**
         * Specifies the toolbar item's location.
         */
        location?: 'after' | 'before' | 'center';
        /**
         * Specifies the toolbar item's name.
         */
        name?: 'separator' | 'undo' | 'redo' | 'expandAll' | 'collapseAll' | 'addTask' | 'deleteTask' | 'zoomIn' | 'zoomOut' | string;
    }
    /**
     * 
     */
    export interface dxHtmlEditorOptions extends EditorOptions<dxHtmlEditor> {
        /**
         * Allows you to customize the DevExtreme Quill and 3rd-party modules.
         */
        customizeModules?: ((config: any) => any);
        /**
         * Specifies whether the UI component can be focused using keyboard navigation.
         */
        focusStateEnabled?: boolean;
        /**
         * Configures media resizing.
         */
        mediaResizing?: dxHtmlEditorMediaResizing;
        /**
         * Configures mentions.
         */
        mentions?: Array<dxHtmlEditorMention>;
        /**
         * The value to be assigned to the `name` attribute of the underlying HTML element.
         */
        name?: string;
        /**
         * A function that is executed when the UI component gets focus.
         */
        onFocusIn?: ((e: { component?: dxHtmlEditor, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event }) => any);
        /**
         * A function that is executed when the UI component loses focus.
         */
        onFocusOut?: ((e: { component?: dxHtmlEditor, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event }) => any);
        /**
         * Specifies the text displayed when the input field is empty.
         */
        placeholder?: string;
        /**
         * Configures the UI component's toolbar.
         */
        toolbar?: dxHtmlEditorToolbar;
        /**
         * Specifies in which markup language the value is stored.
         */
        valueType?: 'html' | 'markdown';
        /**
         * Configures variables, which are placeholders to be replaced with actual values when processing text.
         */
        variables?: dxHtmlEditorVariables;
    }
    /**
     * [tags] ctp HtmlEditor is a WYSIWYG editor that allows you to format textual and visual content and to output it in HTML or Markdown. HtmlEditor is built on top of and requires the DevExtreme Quill. #include common-ctp-note with { component: 'HtmlEditor' }
     */
    export class dxHtmlEditor extends Editor {
        constructor(element: Element, options?: dxHtmlEditorOptions)
        constructor(element: JQuery, options?: dxHtmlEditorOptions)
        /**
         * Clears the history of changes.
         */
        clearHistory(): void;
        /**
         * Deletes content from the given range.
         */
        delete(index: number, length: number): void;
        /**
         * Applies a format to the selected content. Cannot be used with embedded formats.
         */
        format(formatName: 'background' | 'bold' | 'color' | 'font' | 'italic' | 'link' | 'size' | 'strike' | 'script' | 'underline' | 'blockquote' | 'header' | 'indent' | 'list' | 'align' | 'code-block' | string, formatValue: any): void;
        /**
         * Applies a single block format to all lines in the given range.
         */
        formatLine(index: number, length: number, formatName: 'background' | 'bold' | 'color' | 'font' | 'italic' | 'link' | 'size' | 'strike' | 'script' | 'underline' | 'blockquote' | 'header' | 'indent' | 'list' | 'align' | 'code-block' | string, formatValue: any): void;
        /**
         * Applies several block formats to all lines in the given range.
         */
        formatLine(index: number, length: number, formats: any): void;
        /**
         * Applies a single text format to all characters in the given range.
         */
        formatText(index: number, length: number, formatName: 'background' | 'bold' | 'color' | 'font' | 'italic' | 'link' | 'size' | 'strike' | 'script' | 'underline' | 'blockquote' | 'header' | 'indent' | 'list' | 'align' | 'code-block' | string, formatValue: any): void;
        /**
         * Applies several text formats to all characters in the given range.
         */
        formatText(index: number, length: number, formats: any): void;
        /**
         * Gets a format, module, or Parchment.
         */
        get(componentPath: string): any;
        /**
         * Gets formats applied to the content in the specified range.
         */
        getFormat(index: number, length: number): any;
        /**
         * Gets the entire content's length.
         */
        getLength(): number;
        /**
         * Gets the instance of a module.
         */
        getModule(moduleName: string): any;
        /**
         * Gets the DevExtreme Quill's instance.
         */
        getQuillInstance(): any;
        /**
         * Gets the selected content's position and length.
         */
        getSelection(): any;
        /**
         * Inserts an embedded content at the specified position.
         */
        insertEmbed(index: number, type: string, config: any): void;
        /**
         * Inserts formatted text at the specified position. Used with all formats except embedded.
         */
        insertText(index: number, text: string, formats: any): void;
        /**
         * Reapplies the most recent undone change. Repeated calls reapply preceding undone changes.
         */
        redo(): void;
        /**
         * Registers custom formats and modules.
         */
        register(modules: any): void;
        /**
         * Removes all formatting and embedded content from the specified range.
         */
        removeFormat(index: number, length: number): void;
        /**
         * Selects and highlights content in the specified range.
         */
        setSelection(index: number, length: number): void;
        /**
         * Reverses the most recent change. Repeated calls reverse preceding changes.
         */
        undo(): void;
    }
    /**
     * 
     */
    export interface dxHtmlEditorMediaResizing {
        /**
         * Specifies media types that can be resized. Currently, only images are supported.
         */
        allowedTargets?: Array<string>;
        /**
         * Enables media resizing.
         */
        enabled?: boolean;
    }
    /**
     * 
     */
    export interface dxHtmlEditorMention {
        /**
         * Provides data for the suggestion list.
         */
        dataSource?: Array<string> | DevExpress.data.DataSource | DevExpress.data.DataSourceOptions;
        /**
         * Specifies the data field whose values should be displayed in the suggestion list.
         */
        displayExpr?: string | ((item: any) => string);
        /**
         * Specifies a custom template for suggestion list items.
         */
        itemTemplate?: DevExpress.core.template | ((itemData: any, itemIndex: number, itemElement: DevExpress.core.dxElement) => string | Element | JQuery);
        /**
         * Specifies the prefix that a user enters to activate mentions. You can use different prefixes with different dataSources.
         */
        marker?: string;
        /**
         * Specifies the minimum number of characters that a user should type to trigger the search.
         */
        minSearchLength?: number;
        /**
         * Specifies one or several data fields to search.
         */
        searchExpr?: string | Function | Array<string | Function>;
        /**
         * Specifies the delay between when a user stops typing and when the search is executed.
         */
        searchTimeout?: number;
        /**
         * Specifies a custom template for mentions.
         */
        template?: DevExpress.core.template | ((mentionData: { marker?: string, id?: string | number, value?: any }, contentElement: DevExpress.core.dxElement) => string | Element | JQuery);
        /**
         * Specifies which data field provides unique values to the template's `id` parameter.
         */
        valueExpr?: string | Function;
    }
    /**
     * 
     */
    export interface dxHtmlEditorToolbar {
        /**
         * Specifies the container in which to place the toolbar.
         */
        container?: string | Element | JQuery;
        /**
         * Configures toolbar items. These items allow users to format text and execute commands.
         */
        items?: Array<dxHtmlEditorToolbarItem | 'background' | 'bold' | 'color' | 'font' | 'italic' | 'link' | 'image' | 'size' | 'strike' | 'subscript' | 'superscript' | 'underline' | 'blockquote' | 'header' | 'increaseIndent' | 'decreaseIndent' | 'orderedList' | 'bulletList' | 'alignLeft' | 'alignCenter' | 'alignRight' | 'alignJustify' | 'codeBlock' | 'variable' | 'separator' | 'undo' | 'redo' | 'clear' | 'insertTable' | 'insertRowAbove' | 'insertRowBelow' | 'insertColumnLeft' | 'insertColumnRight' | 'deleteColumn' | 'deleteRow' | 'deleteTable'>;
        /**
         * Specifies whether or not items are arranged into multiple lines when their combined width exceeds the toolbar width.
         */
        multiline?: boolean;
    }
    /**
     * 
     */
    export interface dxHtmlEditorToolbarItem extends dxToolbarItem {
        /**
         * Specifies the predefined item that this object customizes or a format with multiple choices.
         */
        formatName?: 'background' | 'bold' | 'color' | 'font' | 'italic' | 'link' | 'image' | 'size' | 'strike' | 'subscript' | 'superscript' | 'underline' | 'blockquote' | 'header' | 'increaseIndent' | 'decreaseIndent' | 'orderedList' | 'bulletList' | 'alignLeft' | 'alignCenter' | 'alignRight' | 'alignJustify' | 'codeBlock' | 'variable' | 'separator' | 'undo' | 'redo' | 'clear' | 'insertTable' | 'insertRowAbove' | 'insertRowBelow' | 'insertColumnLeft' | 'insertColumnRight' | 'deleteColumn' | 'deleteRow' | 'deleteTable' | string;
        /**
         * Specifies values for a format with multiple choices. Should be used with the formatName.
         */
        formatValues?: Array<string | number | boolean>;
        /**
         * Specifies a location for the item on the toolbar.
         */
        location?: 'after' | 'before' | 'center';
    }
    /**
     * 
     */
    export interface dxHtmlEditorVariables {
        /**
         * Specifies a collection of variables available for a user.
         */
        dataSource?: string | Array<string> | DevExpress.data.DataSource | DevExpress.data.DataSourceOptions;
        /**
         * Specifies the special character(s) that should surround the variables.
         */
        escapeChar?: string | Array<string>;
    }
    /**
     * Specifies markup for a UI component item.
     */
    export var dxItem: any;
    /**
     * 
     */
    export interface dxListOptions extends CollectionWidgetOptions<dxList>, SearchBoxMixinOptions<dxList> {
        /**
         * Specifies whether or not the UI component changes its state when interacting with a user.
         */
        activeStateEnabled?: boolean;
        /**
         * Specifies whether or not an end user can delete list items.
         */
        allowItemDeleting?: boolean;
        /**
         * A Boolean value specifying whether to enable or disable the bounce-back effect.
         */
        bounceEnabled?: boolean;
        /**
         * Specifies whether or not an end-user can collapse groups.
         */
        collapsibleGroups?: boolean;
        /**
         * Binds the UI component to data.
         */
        dataSource?: string | Array<string | dxListItem | any> | DevExpress.data.DataSource | DevExpress.data.DataSourceOptions;
        /**
         * Specifies the data field whose values should be displayed. Defaults to 'text' when the data source contains objects.
         */
        displayExpr?: string | ((item: any) => string);
        /**
         * Specifies whether the UI component can be focused using keyboard navigation.
         */
        focusStateEnabled?: boolean;
        /**
         * Specifies a custom template for group captions.
         */
        groupTemplate?: DevExpress.core.template | ((groupData: any, groupIndex: number, groupElement: DevExpress.core.dxElement) => string | Element | JQuery);
        /**
         * Specifies whether data items should be grouped.
         */
        grouped?: boolean;
        /**
         * Specifies whether the UI component changes its state when a user pauses on it.
         */
        hoverStateEnabled?: boolean;
        /**
         * Specifies whether or not to show the loading panel when the DataSource bound to the UI component is loading data.
         */
        indicateLoading?: boolean;
        /**
         * Specifies the way a user can delete items from the list.
         */
        itemDeleteMode?: 'context' | 'slideButton' | 'slideItem' | 'static' | 'swipe' | 'toggle';
        /**
         * Configures item reordering using drag and drop gestures.
         */
        itemDragging?: dxSortableOptions;
        /**
         * An array of items displayed by the UI component.
         */
        items?: Array<string | dxListItem | any>;
        /**
         * Specifies the array of items for a context menu called for a list item.
         */
        menuItems?: Array<{ action?: ((itemElement: DevExpress.core.dxElement, itemData: any) => any), text?: string }>;
        /**
         * Specifies whether an item context menu is shown when a user holds or swipes an item.
         */
        menuMode?: 'context' | 'slide';
        /**
         * The text displayed on the button used to load the next page from the data source.
         */
        nextButtonText?: string;
        /**
         * A function that is executed when a group element is rendered.
         */
        onGroupRendered?: ((e: { component?: dxList, element?: DevExpress.core.dxElement, model?: any, groupData?: any, groupElement?: DevExpress.core.dxElement, groupIndex?: number }) => any);
        /**
         * A function that is executed when a collection item is clicked or tapped.
         */
        onItemClick?: ((e: { component?: dxList, element?: DevExpress.core.dxElement, model?: any, itemData?: any, itemElement?: DevExpress.core.dxElement, itemIndex?: number | any, event?: DevExpress.events.event }) => any) | string;
        /**
         * A function that is executed when a collection item is right-clicked or pressed.
         */
        onItemContextMenu?: ((e: { component?: dxList, element?: DevExpress.core.dxElement, model?: any, itemData?: any, itemElement?: DevExpress.core.dxElement, itemIndex?: number | any, event?: DevExpress.events.event }) => any);
        /**
         * A function that is executed after a list item is deleted from the data source.
         */
        onItemDeleted?: ((e: { component?: dxList, element?: DevExpress.core.dxElement, model?: any, itemData?: any, itemElement?: DevExpress.core.dxElement, itemIndex?: number | any }) => any);
        /**
         * A function that is executed before a collection item is deleted from the data source.
         */
        onItemDeleting?: ((e: { component?: dxList, element?: DevExpress.core.dxElement, model?: any, itemData?: any, itemElement?: DevExpress.core.dxElement, itemIndex?: number | any, cancel?: boolean | Promise<void> | JQueryPromise<void> }) => any);
        /**
         * A function that is executed when a collection item has been held for a specified period.
         */
        onItemHold?: ((e: { component?: dxList, element?: DevExpress.core.dxElement, model?: any, itemData?: any, itemElement?: DevExpress.core.dxElement, itemIndex?: number | any, event?: DevExpress.events.event }) => any);
        /**
         * A function that is executed after a list item is moved to another position.
         */
        onItemReordered?: ((e: { component?: dxList, element?: DevExpress.core.dxElement, model?: any, itemData?: any, itemElement?: DevExpress.core.dxElement, itemIndex?: number | any, fromIndex?: number, toIndex?: number }) => any);
        /**
         * A function that is executed when a list item is swiped.
         */
        onItemSwipe?: ((e: { component?: dxList, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, itemData?: any, itemElement?: DevExpress.core.dxElement, itemIndex?: number | any, direction?: string }) => any);
        /**
         * A function that is executed before the next page is loaded.
         */
        onPageLoading?: ((e: { component?: dxList, element?: DevExpress.core.dxElement, model?: any }) => any);
        /**
         * A function that is executed when the 'pull to refresh' gesture is performed. Supported on mobile devices only.
         */
        onPullRefresh?: ((e: { component?: dxList, element?: DevExpress.core.dxElement, model?: any }) => any);
        /**
         * A function that is executed on each scroll gesture.
         */
        onScroll?: ((e: { component?: dxList, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, scrollOffset?: any, reachedLeft?: boolean, reachedRight?: boolean, reachedTop?: boolean, reachedBottom?: boolean }) => any);
        /**
         * A function that is executed when the 'Select All' check box value is changed. Applies only if the selectionMode is 'all'.
         */
        onSelectAllValueChanged?: ((e: { component?: dxList, element?: DevExpress.core.dxElement, model?: any, value?: boolean }) => any);
        /**
         * Specifies whether the next page is loaded when a user scrolls the UI component to the bottom or when the 'next' button is clicked.
         */
        pageLoadMode?: 'nextButton' | 'scrollBottom';
        /**
         * Specifies the text shown in the pullDown panel, which is displayed when the list is scrolled to the bottom.
         */
        pageLoadingText?: string;
        /**
         * A Boolean value specifying whether or not the UI component supports the 'pull down to refresh' gesture.
         */
        pullRefreshEnabled?: boolean;
        /**
         * Specifies the text displayed in the pullDown panel when the list is pulled below the refresh threshold.
         */
        pulledDownText?: string;
        /**
         * Specifies the text shown in the pullDown panel while the list is being pulled down to the refresh threshold.
         */
        pullingDownText?: string;
        /**
         * Specifies the text displayed in the pullDown panel while the list is being refreshed.
         */
        refreshingText?: string;
        /**
         * Specifies whether to repaint only those elements whose data changed.
         */
        repaintChangesOnly?: boolean;
        /**
         * A Boolean value specifying if the list is scrolled by content.
         */
        scrollByContent?: boolean;
        /**
         * Specifies whether a user can scroll the content with the scrollbar. Applies only if useNativeScrolling is false.
         */
        scrollByThumb?: boolean;
        /**
         * A Boolean value specifying whether to enable or disable list scrolling.
         */
        scrollingEnabled?: boolean;
        /**
         * Specifies the mode in which all items are selected.
         */
        selectAllMode?: 'allPages' | 'page';
        /**
         * Specifies item selection mode.
         */
        selectionMode?: 'all' | 'multiple' | 'none' | 'single';
        /**
         * Specifies when the UI component shows the scrollbar.
         */
        showScrollbar?: 'always' | 'never' | 'onHover' | 'onScroll';
        /**
         * Specifies whether or not to display controls used to select list items.
         */
        showSelectionControls?: boolean;
        /**
         * Specifies whether or not the UI component uses native scrolling.
         */
        useNativeScrolling?: boolean;
    }
    /**
     * The List is a UI component that represents a collection of items in a scrollable list.
     */
    export class dxList extends CollectionWidget {
        constructor(element: Element, options?: dxListOptions)
        constructor(element: JQuery, options?: dxListOptions)
        /**
         * Gets the UI component's height in pixels.
         */
        clientHeight(): number;
        /**
         * Collapses a group with a specific index.
         */
        collapseGroup(groupIndex: number): Promise<void> & JQueryPromise<void>;
        /**
         * Removes an item found using its DOM node.
         */
        deleteItem(itemElement: Element): Promise<void> & JQueryPromise<void>;
        /**
         * Removes an item with a specific index.
         */
        deleteItem(itemIndex: number | any): Promise<void> & JQueryPromise<void>;
        /**
         * Expands a group with a specific index.
         */
        expandGroup(groupIndex: number): Promise<void> & JQueryPromise<void>;
        /**
         * Checks whether an item found using its DOM node is selected.
         */
        isItemSelected(itemElement: Element): boolean;
        /**
         * Checks whether an item with a specific index is selected.
         */
        isItemSelected(itemIndex: number | any): boolean;
        /**
         * Reloads list data.
         */
        reload(): void;
        /**
         * Reorders items found using their DOM nodes.
         */
        reorderItem(itemElement: Element, toItemElement: Element): Promise<void> & JQueryPromise<void>;
        /**
         * Reorders items with specific indexes.
         */
        reorderItem(itemIndex: number | any, toItemIndex: number | any): Promise<void> & JQueryPromise<void>;
        /**
         * Scrolls the content by a specified distance.
         */
        scrollBy(distance: number): void;
        /**
         * Gets the content's height in pixels.
         */
        scrollHeight(): number;
        /**
         * Scrolls the content to a specific position.
         */
        scrollTo(location: number): void;
        /**
         * Scrolls the content to an item found using its DOM node.
         */
        scrollToItem(itemElement: Element): void;
        /**
         * Scrolls the content to an item with a specific index.
         */
        scrollToItem(itemIndex: number | any): void;
        /**
         * Gets the top scroll offset.
         */
        scrollTop(): number;
        /**
         * Selects all items.
         */
        selectAll(): void;
        /**
         * Selects an item found using its DOM node.
         */
        selectItem(itemElement: Element): void;
        /**
         * Selects an item with a specific index.
         */
        selectItem(itemIndex: number | any): void;
        /**
         * Cancels the selection of all items.
         */
        unselectAll(): void;
        /**
         * Cancels the selection of an item found using its DOM node.
         */
        unselectItem(itemElement: Element): void;
        /**
         * Cancels the selection of an item with a specific index.
         */
        unselectItem(itemIndex: number | any): void;
        /**
         * Updates the UI component scrollbar according to UI component content size.
         */
        updateDimensions(): Promise<void> & JQueryPromise<void>;
    }
    /**
     * 
     */
    export interface dxListItem extends CollectionWidgetItem {
        /**
         * Specifies the text of a badge displayed for the list item.
         */
        badge?: string;
        /**
         * Specifies the list item's icon.
         */
        icon?: string;
        /**
         * Specifies the name of the list items group in a grouped list.
         */
        key?: string;
        /**
         * Specifies whether or not to display a chevron for the list item.
         */
        showChevron?: boolean;
    }
    /**
     * 
     */
    export interface dxLoadIndicatorOptions extends WidgetOptions<dxLoadIndicator> {
        /**
         * Specifies the path to an image used as the indicator.
         */
        indicatorSrc?: string;
    }
    /**
     * The LoadIndicator is a UI element notifying the viewer that a process is in progress.
     */
    export class dxLoadIndicator extends Widget {
        constructor(element: Element, options?: dxLoadIndicatorOptions)
        constructor(element: JQuery, options?: dxLoadIndicatorOptions)
    }
    /**
     * 
     */
    export interface dxLoadPanelOptions extends dxOverlayOptions<dxLoadPanel> {
        /**
         * Configures UI component visibility animations. This object contains two fields: show and hide.
         */
        animation?: dxLoadPanelAnimation;
        /**
         * Specifies the UI component's container.
         */
        container?: string | Element | JQuery;
        /**
         * The delay in milliseconds after which the load panel is displayed.
         */
        delay?: number;
        /**
         * Specifies whether or not the UI component can be focused.
         */
        focusStateEnabled?: boolean;
        /**
         * Specifies the UI component's height in pixels.
         */
        height?: number | string | (() => number | string);
        /**
         * A URL pointing to an image to be used as a load indicator.
         */
        indicatorSrc?: string;
        /**
         * Specifies the maximum height the UI component can reach while resizing.
         */
        maxHeight?: number | string | (() => number | string);
        /**
         * Specifies the maximum width the UI component can reach while resizing.
         */
        maxWidth?: number | string | (() => number | string);
        /**
         * Specifies the text displayed in the load panel. Ignored in the Material Design theme.
         */
        message?: string;
        /**
         * Positions the UI component.
         */
        position?: 'bottom' | 'center' | 'left' | 'left bottom' | 'left top' | 'right' | 'right bottom' | 'right top' | 'top' | positionConfig | Function;
        /**
         * Specifies the shading color. Applies only if shading is enabled.
         */
        shadingColor?: string;
        /**
         * A Boolean value specifying whether or not to show a load indicator.
         */
        showIndicator?: boolean;
        /**
         * A Boolean value specifying whether or not to show the pane behind the load indicator.
         */
        showPane?: boolean;
        /**
         * Specifies the UI component's width in pixels.
         */
        width?: number | string | (() => number | string);
    }
    /**
     * Configures UI component visibility animations. This object contains two fields: show and hide.
     */
    export interface dxLoadPanelAnimation extends dxOverlayAnimation {
        /**
         * An object that defines the animation properties used when the UI component is being hidden.
         */
        hide?: animationConfig;
        /**
         * An object that defines the animation properties used when the UI component is being shown.
         */
        show?: animationConfig;
    }
    /**
     * The LoadPanel is an overlay UI component notifying the viewer that loading is in progress.
     */
    export class dxLoadPanel extends dxOverlay {
        constructor(element: Element, options?: dxLoadPanelOptions)
        constructor(element: JQuery, options?: dxLoadPanelOptions)
    }
    /**
     * 
     */
    export interface dxLookupOptions extends dxDropDownListOptions<dxLookup> {
        /**
         * Configures UI component visibility animations. This object contains two fields: show and hide.
         * @deprecated Use the dropDownOptions option instead.
         */
        animation?: { hide?: animationConfig, show?: animationConfig };
        /**
         * The text displayed on the Apply button.
         */
        applyButtonText?: string;
        /**
         * Specifies the way an end-user applies the selected value.
         */
        applyValueMode?: 'instantly' | 'useButtons';
        /**
         * The text displayed on the Cancel button.
         */
        cancelButtonText?: string;
        /**
         * Specifies whether or not the UI component cleans the search box when the popup window is displayed.
         */
        cleanSearchOnOpening?: boolean;
        /**
         * The text displayed on the Clear button.
         */
        clearButtonText?: string;
        /**
         * Specifies whether to close the drop-down menu if a user clicks outside it.
         * @deprecated Use the dropDownOptions option instead.
         */
        closeOnOutsideClick?: boolean | (() => boolean);
        /**
         * Specifies whether to vertically align the drop-down menu so that the selected item is in its center. Applies only in Material Design themes.
         */
        dropDownCentered?: boolean;
        /**
         * Configures the drop-down field.
         */
        dropDownOptions?: dxPopoverOptions;
        /**
         * Specifies a custom template for the input field.
         */
        fieldTemplate?: DevExpress.core.template | ((selectedItem: any, fieldElement: DevExpress.core.dxElement) => string | Element | JQuery);
        /**
         * Specifies whether the UI component can be focused using keyboard navigation.
         */
        focusStateEnabled?: boolean;
        /**
         * A Boolean value specifying whether or not to display the lookup in full-screen mode.
         * @deprecated Use the dropDownOptions option instead.
         */
        fullScreen?: boolean;
        /**
         * Specifies a custom template for group captions.
         */
        groupTemplate?: DevExpress.core.template | ((itemData: any, itemIndex: number, itemElement: DevExpress.core.dxElement) => string | Element | JQuery);
        /**
         * A Boolean value specifying whether or not to group UI component items.
         */
        grouped?: boolean;
        /**
         * The text displayed on the button used to load the next page from the data source.
         */
        nextButtonText?: string;
        /**
         * A function that is executed before the next page is loaded.
         */
        onPageLoading?: ((e: { component?: dxLookup, element?: DevExpress.core.dxElement, model?: any }) => any);
        /**
         * A function that is executed when the 'pull to refresh' gesture is performed on the drop-down item list. Supported on mobile devices only.
         */
        onPullRefresh?: ((e: { component?: dxLookup, element?: DevExpress.core.dxElement, model?: any }) => any);
        /**
         * A function that is executed on each scroll gesture performed on the drop-down item list.
         */
        onScroll?: ((e: { component?: dxLookup, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, scrollOffset?: any, reachedLeft?: boolean, reachedRight?: boolean, reachedTop?: boolean, reachedBottom?: boolean }) => any);
        /**
         * A function that is executed when the drop-down list's title is rendered.
         * @deprecated Use the dropDownOptions option instead.
         */
        onTitleRendered?: ((e: { component?: dxLookup, element?: DevExpress.core.dxElement, model?: any, titleElement?: DevExpress.core.dxElement }) => any);
        /**
         * A function that is executed after the UI component's value is changed.
         */
        onValueChanged?: ((e: { component?: dxLookup, element?: DevExpress.core.dxElement, model?: any, value?: any, previousValue?: any, event?: DevExpress.events.event }) => any);
        /**
         * Specifies whether the next page is loaded when a user scrolls the UI component to the bottom or when the 'next' button is clicked.
         */
        pageLoadMode?: 'nextButton' | 'scrollBottom';
        /**
         * Specifies the text shown in the pullDown panel, which is displayed when the UI component is scrolled to the bottom.
         */
        pageLoadingText?: string;
        /**
         * The text displayed by the UI component when nothing is selected.
         */
        placeholder?: string;
        /**
         * Specifies the popup element's height. Applies only if fullScreen is false.
         * @deprecated Use the dropDownOptions option instead.
         */
        popupHeight?: number | string | (() => number | string);
        /**
         * Specifies the popup element's width. Applies only if fullScreen is false.
         * @deprecated Use the dropDownOptions option instead.
         */
        popupWidth?: number | string | (() => number | string);
        /**
         * An object defining UI component positioning properties.
         * @deprecated Use the dropDownOptions option instead.
         */
        position?: positionConfig;
        /**
         * A Boolean value specifying whether or not the UI component supports the 'pull down to refresh' gesture.
         */
        pullRefreshEnabled?: boolean;
        /**
         * Specifies the text displayed in the pullDown panel when the UI component is pulled below the refresh threshold.
         */
        pulledDownText?: string;
        /**
         * Specifies the text shown in the pullDown panel while the list is being pulled down to the refresh threshold.
         */
        pullingDownText?: string;
        /**
         * Specifies the text displayed in the pullDown panel while the UI component is being refreshed.
         */
        refreshingText?: string;
        /**
         * Specifies whether the search box is visible.
         */
        searchEnabled?: boolean;
        /**
         * The text that is provided as a hint in the lookup's search bar.
         */
        searchPlaceholder?: string;
        /**
         * Specifies whether to shade the container when the lookup is active. Applies only if usePopover is false.
         * @deprecated Use the dropDownOptions option instead.
         */
        shading?: boolean;
        /**
         * Specifies whether to display the Cancel button in the lookup window.
         */
        showCancelButton?: boolean;
        /**
         * Specifies whether to display the Clear button in the lookup window.
         */
        showClearButton?: boolean;
        /**
         * A Boolean value specifying whether or not to display the title in the popup window.
         * @deprecated Use the dropDownOptions option instead.
         */
        showPopupTitle?: boolean;
        /**
         * The title of the lookup window.
         * @deprecated Use the dropDownOptions option instead.
         */
        title?: string;
        /**
         * Specifies a custom template for the title.
         * @deprecated Use the dropDownOptions option instead.
         */
        titleTemplate?: DevExpress.core.template | ((titleElement: DevExpress.core.dxElement) => string | Element | JQuery);
        /**
         * Specifies whether or not the UI component uses native scrolling.
         */
        useNativeScrolling?: boolean;
        /**
         * Specifies whether to show lookup contents in the Popover UI component.
         */
        usePopover?: boolean;
    }
    /**
     * The Lookup is a UI component that allows an end user to search for an item in a collection shown in a drop-down menu.
     */
    export class dxLookup extends dxDropDownList {
        constructor(element: Element, options?: dxLookupOptions)
        constructor(element: JQuery, options?: dxLookupOptions)
    }
    /**
     * 
     */
    export interface dxMapOptions extends WidgetOptions<dxMap> {
        /**
         * Keys to authenticate the component within map providers.
         */
        apiKey?: string | { bing?: string, google?: string, googleStatic?: string };
        /**
         * Specifies whether the UI component automatically adjusts center and zoom property values when adding a new marker or route, or if a new UI component contains markers or routes by default.
         */
        autoAdjust?: boolean;
        /**
         * An object, a string, or an array specifying which part of the map is displayed at the UI component's center using coordinates. The UI component can change this value if autoAdjust is enabled.
         */
        center?: any | string | Array<number>;
        /**
         * Specifies whether or not map UI component controls are available.
         */
        controls?: boolean;
        /**
         * Specifies whether the UI component can be focused using keyboard navigation.
         */
        focusStateEnabled?: boolean;
        /**
         * Specifies the UI component's height.
         */
        height?: number | string | (() => number | string);
        /**
         * A key used to authenticate the application within the required map provider.
         * @deprecated Use the apiKey option instead.
         */
        key?: string | { bing?: string, google?: string, googleStatic?: string };
        /**
         * A URL pointing to the custom icon to be used for map markers.
         */
        markerIconSrc?: string;
        /**
         * An array of markers displayed on a map.
         */
        markers?: Array<{ iconSrc?: string, location?: any | string | Array<number>, onClick?: Function, tooltip?: string | { isShown?: boolean, text?: string } }>;
        /**
         * A function that is executed when any location on the map is clicked or tapped.
         */
        onClick?: ((e: { component?: dxMap, element?: DevExpress.core.dxElement, model?: any, location?: any, event?: DevExpress.events.event }) => any) | string;
        /**
         * A function that is executed when a marker is created on the map.
         */
        onMarkerAdded?: ((e: { component?: dxMap, element?: DevExpress.core.dxElement, model?: any, options?: any, originalMarker?: any }) => any);
        /**
         * A function that is executed when a marker is removed from the map.
         */
        onMarkerRemoved?: ((e: { component?: dxMap, element?: DevExpress.core.dxElement, model?: any, options?: any }) => any);
        /**
         * A function that is executed when the map is ready.
         */
        onReady?: ((e: { component?: dxMap, element?: DevExpress.core.dxElement, model?: any, originalMap?: any }) => any);
        /**
         * A function that is executed when a route is created on the map.
         */
        onRouteAdded?: ((e: { component?: dxMap, element?: DevExpress.core.dxElement, model?: any, options?: any, originalRoute?: any }) => any);
        /**
         * A function that is executed when a route is removed from the map.
         */
        onRouteRemoved?: ((e: { component?: dxMap, element?: DevExpress.core.dxElement, model?: any, options?: any }) => any);
        /**
         * The name of the current map data provider.
         */
        provider?: 'bing' | 'google' | 'googleStatic';
        /**
         * An array of routes shown on the map.
         */
        routes?: Array<{ color?: string, locations?: Array<any>, mode?: 'driving' | 'walking', opacity?: number, weight?: number }>;
        /**
         * The type of a map to display.
         */
        type?: 'hybrid' | 'roadmap' | 'satellite';
        /**
         * Specifies the UI component's width.
         */
        width?: number | string | (() => number | string);
        /**
         * The map's zoom level. The UI component can change this value if autoAdjust is enabled.
         */
        zoom?: number;
    }
    /**
     * The Map is an interactive UI component that displays a geographic map with markers and routes.
     */
    export class dxMap extends Widget {
        constructor(element: Element, options?: dxMapOptions)
        constructor(element: JQuery, options?: dxMapOptions)
        /**
         * Adds a marker to the map.
         */
        addMarker(markerOptions: any | Array<any>): Promise<any> & JQueryPromise<any>;
        /**
         * Adds a route to the map.
         */
        addRoute(options: any | Array<any>): Promise<any> & JQueryPromise<any>;
        /**
         * Removes a marker from the map.
         */
        removeMarker(marker: any | number | Array<any>): Promise<void> & JQueryPromise<void>;
        /**
         * Removes a route from the map.
         */
        removeRoute(route: any | number | Array<any>): Promise<void> & JQueryPromise<void>;
    }
    /**
     * 
     */
    export interface dxMenuOptions extends dxMenuBaseOptions<dxMenu> {
        /**
         * Specifies whether adaptive UI component rendering is enabled on small screens. Applies only if the orientation is 'horizontal'.
         */
        adaptivityEnabled?: boolean;
        /**
         * Binds the UI component to data.
         */
        dataSource?: string | Array<dxMenuItem> | DevExpress.data.DataSource | DevExpress.data.DataSourceOptions;
        /**
         * Specifies whether or not the submenu is hidden when the mouse pointer leaves it.
         */
        hideSubmenuOnMouseLeave?: boolean;
        /**
         * Holds an array of menu items.
         */
        items?: Array<dxMenuItem>;
        /**
         * A function that is executed after a submenu is hidden.
         */
        onSubmenuHidden?: ((e: { component?: dxMenu, element?: DevExpress.core.dxElement, model?: any, rootItem?: DevExpress.core.dxElement }) => any);
        /**
         * A function that is executed before a submenu is hidden.
         */
        onSubmenuHiding?: ((e: { component?: dxMenu, element?: DevExpress.core.dxElement, model?: any, rootItem?: DevExpress.core.dxElement, cancel?: boolean }) => any);
        /**
         * A function that is executed before a submenu is displayed.
         */
        onSubmenuShowing?: ((e: { component?: dxMenu, element?: DevExpress.core.dxElement, model?: any, rootItem?: DevExpress.core.dxElement }) => any);
        /**
         * A function that is executed after a submenu is displayed.
         */
        onSubmenuShown?: ((e: { component?: dxMenu, element?: DevExpress.core.dxElement, model?: any, rootItem?: DevExpress.core.dxElement }) => any);
        /**
         * Specifies whether the menu has horizontal or vertical orientation.
         */
        orientation?: 'horizontal' | 'vertical';
        /**
         * Specifies properties for showing and hiding the first level submenu.
         */
        showFirstSubmenuMode?: { delay?: { hide?: number, show?: number } | number, name?: 'onClick' | 'onHover' } | 'onClick' | 'onHover';
        /**
         * Specifies the direction at which the submenus are displayed.
         */
        submenuDirection?: 'auto' | 'leftOrTop' | 'rightOrBottom';
    }
    /**
     * The Menu UI component is a panel with clickable items. A click on an item opens a drop-down menu, which can contain several submenus.
     */
    export class dxMenu extends dxMenuBase {
        constructor(element: Element, options?: dxMenuOptions)
        constructor(element: JQuery, options?: dxMenuOptions)
    }
    /**
     * 
     */
    export interface dxMenuBaseOptions<T = dxMenuBase> extends HierarchicalCollectionWidgetOptions<T> {
        /**
         * A Boolean value specifying whether or not the UI component changes its state when interacting with a user.
         */
        activeStateEnabled?: boolean;
        /**
         * Configures UI component visibility animations. This object contains two fields: show and hide.
         */
        animation?: { hide?: animationConfig, show?: animationConfig };
        /**
         * Specifies the name of the CSS class to be applied to the root menu level and all submenus.
         */
        cssClass?: string;
        /**
         * Binds the UI component to data.
         */
        dataSource?: string | Array<dxMenuBaseItem> | DevExpress.data.DataSource | DevExpress.data.DataSourceOptions;
        /**
         * Holds an array of menu items.
         */
        items?: Array<dxMenuBaseItem>;
        /**
         * Specifies whether or not an item becomes selected if a user clicks it.
         */
        selectByClick?: boolean;
        /**
         * Specifies the selection mode supported by the menu.
         */
        selectionMode?: 'none' | 'single';
        /**
         * Specifies properties of submenu showing and hiding.
         */
        showSubmenuMode?: { delay?: { hide?: number, show?: number } | number, name?: 'onClick' | 'onHover' } | 'onClick' | 'onHover';
    }
    /**
     * 
     */
    export class dxMenuBase extends HierarchicalCollectionWidget {
        constructor(element: Element, options?: dxMenuBaseOptions)
        constructor(element: JQuery, options?: dxMenuBaseOptions)
        /**
         * Selects an item found using its DOM node.
         */
        selectItem(itemElement: Element): void;
        /**
         * Cancels the selection of an item found using its DOM node.
         */
        unselectItem(itemElement: Element): void;
    }
    /**
     * 
     */
    export interface dxMenuBaseItem extends CollectionWidgetItem {
        /**
         * Specifies whether a group separator is displayed over the item.
         */
        beginGroup?: boolean;
        /**
         * Specifies if a menu is closed when a user clicks the item.
         */
        closeMenuOnClick?: boolean;
        /**
         * Specifies whether the menu item responds to user interaction.
         */
        disabled?: boolean;
        /**
         * Specifies the menu item's icon.
         */
        icon?: string;
        /**
         * Specifies nested menu items.
         */
        items?: Array<dxMenuBaseItem>;
        /**
         * Specifies whether or not a user can select a menu item.
         */
        selectable?: boolean;
        /**
         * Specifies whether or not the item is selected.
         */
        selected?: boolean;
        /**
         * Specifies the text inserted into the item element.
         */
        text?: string;
        /**
         * Specifies whether or not the menu item is visible.
         */
        visible?: boolean;
    }
    /**
     * 
     */
    export interface dxMenuItem extends dxMenuBaseItem {
        /**
         * Specifies nested menu items.
         */
        items?: Array<dxMenuItem>;
    }
    /**
     * 
     */
    export interface dxMultiViewOptions<T = dxMultiView> extends CollectionWidgetOptions<T> {
        /**
         * Specifies whether or not to animate the displayed item change.
         */
        animationEnabled?: boolean;
        /**
         * Binds the UI component to data.
         */
        dataSource?: string | Array<string | dxMultiViewItem | any> | DevExpress.data.DataSource | DevExpress.data.DataSourceOptions;
        /**
         * Specifies whether to render the view's content when it is displayed. If false, the content is rendered immediately.
         */
        deferRendering?: boolean;
        /**
         * Specifies whether the UI component can be focused using keyboard navigation.
         */
        focusStateEnabled?: boolean;
        /**
         * An array of items displayed by the UI component.
         */
        items?: Array<string | dxMultiViewItem | any>;
        /**
         * A Boolean value specifying whether or not to scroll back to the first item after the last item is swiped.
         */
        loop?: boolean;
        /**
         * The index of the currently displayed item.
         */
        selectedIndex?: number;
        /**
         * A Boolean value specifying whether or not to allow users to change the selected index by swiping.
         */
        swipeEnabled?: boolean;
    }
    /**
     * The MultiView is a UI component that contains several views. An end user navigates through the views by swiping them in the horizontal direction.
     */
    export class dxMultiView extends CollectionWidget {
        constructor(element: Element, options?: dxMultiViewOptions)
        constructor(element: JQuery, options?: dxMultiViewOptions)
    }
    /**
     * 
     */
    export interface dxMultiViewItem extends CollectionWidgetItem {
    }
    /**
     * 
     */
    export interface dxNavBarOptions extends dxTabsOptions<dxNavBar> {
        /**
         * Specifies whether or not an end-user can scroll tabs by swiping.
         */
        scrollByContent?: boolean;
    }
    /**
     * The NavBar is a UI component that navigates the application views.
     */
    export class dxNavBar extends dxTabs {
        constructor(element: Element, options?: dxNavBarOptions)
        constructor(element: JQuery, options?: dxNavBarOptions)
    }
    /**
     * 
     */
    export interface dxNavBarItem extends dxTabsItem {
        /**
         * Specifies a badge text for the navbar item.
         */
        badge?: string;
    }
    /**
     * 
     */
    export interface dxNumberBoxOptions extends dxTextEditorOptions<dxNumberBox> {
        /**
         * Allows you to add custom buttons to the input text field.
         */
        buttons?: Array<'clear' | 'spins' | dxTextEditorButton>;
        /**
         * Specifies the value's display format and controls user input accordingly.
         */
        format?: format;
        /**
         * Specifies the text of the message displayed if the specified value is not a number.
         */
        invalidValueMessage?: string;
        /**
         * The maximum value accepted by the number box.
         */
        max?: number;
        /**
         * The minimum value accepted by the number box.
         */
        min?: number;
        /**
         * Specifies the value to be passed to the type attribute of the underlying `` element.
         */
        mode?: 'number' | 'text' | 'tel';
        /**
         * Specifies whether to show the buttons that change the value by a step.
         */
        showSpinButtons?: boolean;
        /**
         * Specifies how much the UI component's value changes when using the spin buttons, Up/Down arrow keys, or mouse wheel.
         */
        step?: number;
        /**
         * Specifies whether to use touch friendly spin buttons. Applies only if showSpinButtons is true.
         */
        useLargeSpinButtons?: boolean;
        /**
         * The current number box value.
         */
        value?: number;
    }
    /**
     * The NumberBox is a UI component that displays a numeric value and allows a user to modify it by typing in a value, and incrementing or decrementing it using the keyboard or mouse.
     */
    export class dxNumberBox extends dxTextEditor {
        constructor(element: Element, options?: dxNumberBoxOptions)
        constructor(element: JQuery, options?: dxNumberBoxOptions)
    }
    /**
     * 
     */
    export interface dxOverlayOptions<T = dxOverlay> extends WidgetOptions<T> {
        /**
         * Configures UI component visibility animations. This object contains two fields: show and hide.
         */
        animation?: dxOverlayAnimation;
        /**
         * 
         */
        closeOnOutsideClick?: boolean | ((event: DevExpress.events.event) => boolean);
        /**
         * Specifies a custom template for the UI component content.
         */
        contentTemplate?: DevExpress.core.template | ((contentElement: DevExpress.core.dxElement) => string | Element | JQuery);
        /**
         * Specifies whether to render the UI component's content when it is displayed. If false, the content is rendered immediately.
         */
        deferRendering?: boolean;
        /**
         * Specifies whether or not an end-user can drag the UI component.
         */
        dragEnabled?: boolean;
        /**
         * Specifies the UI component's height in pixels.
         */
        height?: number | string | (() => number | string);
        /**
         * Specifies the maximum height the UI component can reach while resizing.
         */
        maxHeight?: number | string | (() => number | string);
        /**
         * Specifies the maximum width the UI component can reach while resizing.
         */
        maxWidth?: number | string | (() => number | string);
        /**
         * Specifies the minimum height the UI component can reach while resizing.
         */
        minHeight?: number | string | (() => number | string);
        /**
         * Specifies the minimum width the UI component can reach while resizing.
         */
        minWidth?: number | string | (() => number | string);
        /**
         * A function that is executed after the UI component is hidden.
         */
        onHidden?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any }) => any);
        /**
         * A function that is executed before the UI component is hidden.
         */
        onHiding?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, cancel?: boolean }) => any);
        /**
         * A function that is executed before the UI component is displayed.
         */
        onShowing?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any }) => any);
        /**
         * A function that is executed after the UI component is displayed.
         */
        onShown?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any }) => any);
        /**
         * Positions the UI component.
         */
        position?: any;
        /**
         * Specifies whether to shade the background when the UI component is active.
         */
        shading?: boolean;
        /**
         * Specifies the shading color. Applies only if shading is enabled.
         */
        shadingColor?: string;
        /**
         * A Boolean value specifying whether or not the UI component is visible.
         */
        visible?: boolean;
        /**
         * Specifies the UI component's width in pixels.
         */
        width?: number | string | (() => number | string);
    }
    /**
     * Configures UI component visibility animations. This object contains two fields: show and hide.
     */
    export interface dxOverlayAnimation {
        /**
         * An object that defines the animation properties used when the UI component is being hidden.
         */
        hide?: animationConfig;
        /**
         * An object that defines the animation properties used when the UI component is being shown.
         */
        show?: animationConfig;
    }
    /**
     * The Overlay UI component represents a window overlaying the current view. It displays data located within the HTML element representing the UI component.
     */
    export class dxOverlay extends Widget {
        constructor(element: Element, options?: dxOverlayOptions)
        constructor(element: JQuery, options?: dxOverlayOptions)
        /**
         * Gets the UI component's content.
         */
        content(): DevExpress.core.dxElement;
        /**
         * Hides the UI component.
         */
        hide(): Promise<boolean> & JQueryPromise<boolean>;
        /**
         * Recalculates the UI component's size and position without rerendering.
         */
        repaint(): void;
        /**
         * Shows the UI component.
         */
        show(): Promise<boolean> & JQueryPromise<boolean>;
        /**
         * Shows or hides the UI component depending on the argument.
         */
        toggle(showing: boolean): Promise<boolean> & JQueryPromise<boolean>;
    }
    /**
     * 
     */
    export interface dxPivotGridOptions extends WidgetOptions<dxPivotGrid> {
        /**
         * Allows an end-user to expand/collapse all header items within a header level.
         */
        allowExpandAll?: boolean;
        /**
         * Allows a user to filter fields by selecting or deselecting values in the popup menu.
         */
        allowFiltering?: boolean;
        /**
         * Allows an end-user to change sorting properties.
         */
        allowSorting?: boolean;
        /**
         * Allows an end-user to sort columns by summary values.
         */
        allowSortingBySummary?: boolean;
        /**
         * Specifies the area to which data field headers must belong.
         */
        dataFieldArea?: 'column' | 'row';
        /**
         * Binds the UI component to data.
         */
        dataSource?: Array<any> | DevExpress.data.PivotGridDataSource | DevExpress.data.PivotGridDataSourceOptions;
        /**
         * [tags] xlsx, csv Configures client-side exporting.
         */
        export?: { enabled?: boolean, fileName?: string, ignoreExcelErrors?: boolean, proxyUrl?: string };
        /**
         * The Field Chooser configuration properties.
         */
        fieldChooser?: { allowSearch?: boolean, applyChangesMode?: 'instantly' | 'onDemand', enabled?: boolean, height?: number, layout?: 0 | 1 | 2, searchTimeout?: number, texts?: { allFields?: string, columnFields?: string, dataFields?: string, filterFields?: string, rowFields?: string }, title?: string, width?: number };
        /**
         * Configures the field panel.
         */
        fieldPanel?: { allowFieldDragging?: boolean, showColumnFields?: boolean, showDataFields?: boolean, showFilterFields?: boolean, showRowFields?: boolean, texts?: { columnFieldArea?: string, dataFieldArea?: string, filterFieldArea?: string, rowFieldArea?: string }, visible?: boolean };
        /**
         * Configures the header filter feature.
         */
        headerFilter?: { allowSearch?: boolean, height?: number, searchTimeout?: number, showRelevantValues?: boolean, texts?: { cancel?: string, emptyValue?: string, ok?: string }, width?: number };
        /**
         * Specifies whether or not to hide rows and columns with no data.
         */
        hideEmptySummaryCells?: boolean;
        /**
         * Specifies properties configuring the load panel.
         */
        loadPanel?: { enabled?: boolean, height?: number, indicatorSrc?: string, shading?: boolean, shadingColor?: string, showIndicator?: boolean, showPane?: boolean, text?: string, width?: number };
        /**
         * A function that is executed when a pivot grid cell is clicked or tapped.
         */
        onCellClick?: ((e: { component?: dxPivotGrid, element?: DevExpress.core.dxElement, model?: any, area?: string, cellElement?: DevExpress.core.dxElement, cell?: dxPivotGridPivotGridCell, rowIndex?: number, columnIndex?: number, columnFields?: Array<DevExpress.data.PivotGridDataSourceField>, rowFields?: Array<DevExpress.data.PivotGridDataSourceField>, dataFields?: Array<DevExpress.data.PivotGridDataSourceField>, event?: DevExpress.events.event, cancel?: boolean }) => any);
        /**
         * A function that is executed after a pivot grid cell is created.
         */
        onCellPrepared?: ((e: { component?: dxPivotGrid, element?: DevExpress.core.dxElement, model?: any, area?: string, cellElement?: DevExpress.core.dxElement, cell?: dxPivotGridPivotGridCell, rowIndex?: number, columnIndex?: number }) => any);
        /**
         * A function that is executed before the context menu is rendered.
         */
        onContextMenuPreparing?: ((e: { component?: dxPivotGrid, element?: DevExpress.core.dxElement, model?: any, items?: Array<any>, area?: string, cell?: dxPivotGridPivotGridCell, cellElement?: DevExpress.core.dxElement, columnIndex?: number, rowIndex?: number, dataFields?: Array<DevExpress.data.PivotGridDataSourceField>, rowFields?: Array<DevExpress.data.PivotGridDataSourceField>, columnFields?: Array<DevExpress.data.PivotGridDataSourceField>, field?: DevExpress.data.PivotGridDataSourceField }) => any);
        /**
         * A function that is executed after data is exported.
         * @deprecated Since v20.2, we recommend ExcelJS-based export which does not use this property.
         */
        onExported?: ((e: { component?: dxPivotGrid, element?: DevExpress.core.dxElement, model?: any }) => any);
        /**
         * A function that is executed before data is exported.
         */
        onExporting?: ((e: { component?: dxPivotGrid, element?: DevExpress.core.dxElement, model?: any, fileName?: string, cancel?: boolean }) => any);
        /**
         * A function that is executed before a file with exported data is saved to the user's local storage.
         * @deprecated Since v20.2, we recommend ExcelJS-based export which does not use this property.
         */
        onFileSaving?: ((e: { component?: dxPivotGrid, element?: DevExpress.core.dxElement, fileName?: string, format?: string, data?: Blob, cancel?: boolean }) => any);
        /**
         * Specifies the layout of items in the row header.
         */
        rowHeaderLayout?: 'standard' | 'tree';
        /**
         * A configuration object specifying scrolling properties.
         */
        scrolling?: { mode?: 'standard' | 'virtual', useNative?: boolean | 'auto' };
        /**
         * Specifies whether the outer borders of the grid are visible or not.
         */
        showBorders?: boolean;
        /**
         * Specifies whether to display the Grand Total column.
         */
        showColumnGrandTotals?: boolean;
        /**
         * Specifies whether to display the Total columns.
         */
        showColumnTotals?: boolean;
        /**
         * Specifies whether to display the Grand Total row.
         */
        showRowGrandTotals?: boolean;
        /**
         * Specifies whether to display the Total rows. Applies only if rowHeaderLayout is 'standard'.
         */
        showRowTotals?: boolean;
        /**
         * Specifies where to show the total rows or columns. Applies only if rowHeaderLayout is 'standard'.
         */
        showTotalsPrior?: 'both' | 'columns' | 'none' | 'rows';
        /**
         * A configuration object specifying properties related to state storing.
         */
        stateStoring?: { customLoad?: (() => Promise<any> | JQueryPromise<any>), customSave?: ((state: any) => any), enabled?: boolean, savingTimeout?: number, storageKey?: string, type?: 'custom' | 'localStorage' | 'sessionStorage' };
        /**
         * Strings that can be changed or localized in the PivotGrid UI component.
         */
        texts?: { collapseAll?: string, dataNotAvailable?: string, expandAll?: string, exportToExcel?: string, grandTotal?: string, noData?: string, removeAllSorting?: string, showFieldChooser?: string, sortColumnBySummary?: string, sortRowBySummary?: string, total?: string };
        /**
         * Specifies whether long text in header items should be wrapped.
         */
        wordWrapEnabled?: boolean;
    }
    /**
     * The PivotGrid is a UI component that allows you to display and analyze multi-dimensional data from a local storage or an OLAP cube.
     */
    export class dxPivotGrid extends Widget {
        constructor(element: Element, options?: dxPivotGridOptions)
        constructor(element: JQuery, options?: dxPivotGridOptions)
        /**
         * Binds a Chart to the PivotGrid.
         */
        bindChart(chart: string | JQuery | any, integrationOptions: { inverted?: boolean, dataFieldsDisplayMode?: string, putDataFieldsInto?: string, alternateDataFields?: boolean, processCell?: Function, customizeChart?: Function, customizeSeries?: Function }): Function & null;
        /**
         * Exports pivot grid data to the Excel file.
         * @deprecated Use exportPivotGrid instead.
         */
        exportToExcel(): void;
        /**
         * Gets the PivotGridDataSource instance.
         */
        getDataSource(): DevExpress.data.PivotGridDataSource;
        /**
         * Gets the Popup instance of the field chooser window.
         */
        getFieldChooserPopup(): dxPopup;
        /**
         * Updates the UI component to the size of its content.
         */
        updateDimensions(): void;
    }
    /**
     * 
     */
    export interface dxPivotGridFieldChooserOptions extends WidgetOptions<dxPivotGridFieldChooser> {
        /**
         * Specifies whether the field chooser allows searching in the 'All Fields' section.
         */
        allowSearch?: boolean;
        /**
         * Specifies when to apply changes made in the UI component to the PivotGrid.
         */
        applyChangesMode?: 'instantly' | 'onDemand';
        /**
         * The data source of a PivotGrid UI component.
         */
        dataSource?: DevExpress.data.PivotGridDataSource;
        /**
         * Configures the header filter feature.
         */
        headerFilter?: { allowSearch?: boolean, height?: number, searchTimeout?: number, showRelevantValues?: boolean, texts?: { cancel?: string, emptyValue?: string, ok?: string }, width?: number };
        /**
         * Specifies the UI component's height.
         */
        height?: number | string | (() => number | string);
        /**
         * Specifies the field chooser layout.
         */
        layout?: 0 | 1 | 2;
        /**
         * A function that is executed before the context menu is rendered.
         */
        onContextMenuPreparing?: ((e: { component?: dxPivotGridFieldChooser, element?: DevExpress.core.dxElement, model?: any, items?: Array<any>, area?: string, field?: DevExpress.data.PivotGridDataSourceField, event?: DevExpress.events.event }) => any);
        /**
         * Specifies a delay in milliseconds between when a user finishes typing in the field chooser's search panel, and when the search is executed.
         */
        searchTimeout?: number;
        /**
         * The UI component's state.
         */
        state?: any;
        /**
         * Strings that can be changed or localized in the PivotGridFieldChooser UI component.
         */
        texts?: { allFields?: string, columnFields?: string, dataFields?: string, filterFields?: string, rowFields?: string };
    }
    /**
     * A complementary UI component for the PivotGrid that allows you to manage data displayed in the PivotGrid. The field chooser is already integrated in the PivotGrid and can be invoked using the context menu. If you need to continuously display the field chooser near the PivotGrid UI component, use the PivotGridFieldChooser UI component.
     */
    export class dxPivotGridFieldChooser extends Widget {
        constructor(element: Element, options?: dxPivotGridFieldChooserOptions)
        constructor(element: JQuery, options?: dxPivotGridFieldChooserOptions)
        /**
         * Applies changes made in the UI component to the PivotGrid. Takes effect only if applyChangesMode is 'onDemand'.
         */
        applyChanges(): void;
        /**
         * Cancels changes made in the UI component without applying them to the PivotGrid. Takes effect only if applyChangesMode is 'onDemand'.
         */
        cancelChanges(): void;
        /**
         * Gets the PivotGridDataSource instance.
         */
        getDataSource(): DevExpress.data.PivotGridDataSource;
        /**
         * Updates the UI component to the size of its content.
         */
        updateDimensions(): void;
    }
    /**
     * An object containing information about the pivot grid cell.
     */
    export interface dxPivotGridPivotGridCell {
        /**
         * The cell's column path. Available for data area cells only.
         */
        columnPath?: Array<string | number | Date>;
        /**
         * The type of the column to which the cell belongs. Available for data area cells only.
         */
        columnType?: 'D' | 'T' | 'GT';
        /**
         * The data field's index. Available for data area cells only.
         */
        dataIndex?: number;
        /**
         * Indicates whether the cell is expanded. Available for row or column area cells only.
         */
        expanded?: boolean;
        /**
         * The path to the row/column cell. Available for row or column area cells only.
         */
        path?: Array<string | number | Date>;
        /**
         * The cell's row path. Available for data area cells only.
         */
        rowPath?: Array<string | number | Date>;
        /**
         * The type of the row to which the cell belongs. Available for data area cells only.
         */
        rowType?: 'D' | 'T' | 'GT';
        /**
         * The text displayed in the cell.
         */
        text?: string;
        /**
         * The cell's type. Available for row or column area cells only.
         */
        type?: 'D' | 'T' | 'GT';
        /**
         * The cell's value.
         */
        value?: any;
    }
    /**
     * An object exposing methods that manipulate a summary cell and provide access to its neighboring cells.
     */
    export class dxPivotGridSummaryCell {
        /**
         * Gets the child cell in a specified direction.
         */
        child(direction: string, fieldValue: number | string): dxPivotGridSummaryCell;
        /**
         * Gets all child cells in a specified direction.
         */
        children(direction: string): Array<dxPivotGridSummaryCell>;
        /**
         * Gets a pivot grid field that corresponds to the summary cell.
         */
        field(area: string): DevExpress.data.PivotGridDataSourceField;
        /**
         * Gets the Grand Total of the entire pivot grid.
         */
        grandTotal(): dxPivotGridSummaryCell;
        /**
         * Gets a partial Grand Total cell of a row or column.
         */
        grandTotal(direction: string): dxPivotGridSummaryCell;
        /**
         * Indicates whether the summaryDisplayMode or calculateSummaryValue post-processed the summary value.
         */
        isPostProcessed(field: DevExpress.data.PivotGridDataSourceField | string): boolean;
        /**
         * Gets the cell next to the current one in a specified direction.
         */
        next(direction: string): dxPivotGridSummaryCell;
        /**
         * Gets the cell next to current in a specified direction.
         */
        next(direction: string, allowCrossGroup: boolean): dxPivotGridSummaryCell;
        /**
         * Gets the parent cell in a specified direction.
         */
        parent(direction: string): dxPivotGridSummaryCell;
        /**
         * Gets the cell prior to the current one in a specified direction.
         */
        prev(direction: string): dxPivotGridSummaryCell;
        /**
         * Gets the cell previous to current in a specified direction.
         */
        prev(direction: string, allowCrossGroup: boolean): dxPivotGridSummaryCell;
        /**
         * Gets the cell located by the path of the source cell with one field value changed.
         */
        slice(field: DevExpress.data.PivotGridDataSourceField, value: number | string): dxPivotGridSummaryCell;
        /**
         * Gets the summary cell value.
         */
        value(): any;
        /**
         * Gets the value of any field associated with the summary cell.
         */
        value(field: DevExpress.data.PivotGridDataSourceField | string): any;
        /**
         * Gets the value of any field associated with the summary cell.
         */
        value(field: DevExpress.data.PivotGridDataSourceField | string, postProcessed: boolean): any;
        /**
         * Gets the summary cell value.
         */
        value(postProcessed: boolean): any;
    }
    /**
     * 
     */
    export interface dxPopoverOptions<T = dxPopover> extends dxPopupOptions<T> {
        /**
         * Configures UI component visibility animations. This object contains two fields: show and hide.
         */
        animation?: dxPopoverAnimation;
        /**
         * Specifies whether to close the UI component if a user clicks outside the popover window or outside the target element.
         */
        closeOnOutsideClick?: boolean | ((event: DevExpress.events.event) => boolean);
        /**
         * Specifies the UI component's height.
         */
        height?: number | string | (() => number | string);
        /**
         * Specifies properties of popover hiding.
         */
        hideEvent?: { delay?: number, name?: string } | string;
        /**
         * An object defining UI component positioning properties.
         */
        position?: 'bottom' | 'left' | 'right' | 'top' | positionConfig;
        /**
         * Specifies whether to shade the background when the UI component is active.
         */
        shading?: boolean;
        /**
         * Specifies properties for displaying the UI component.
         */
        showEvent?: { delay?: number, name?: string } | string;
        /**
         * A Boolean value specifying whether or not to display the title in the overlay window.
         */
        showTitle?: boolean;
        /**
         * The target element associated with the widget.
         */
        target?: string | Element | JQuery;
        /**
         * Specifies the UI component's width.
         */
        width?: number | string | (() => number | string);
    }
    /**
     * Configures UI component visibility animations. This object contains two fields: show and hide.
     */
    export interface dxPopoverAnimation extends dxPopupAnimation {
        /**
         * An object that defines the animation properties used when the UI component is being hidden.
         */
        hide?: animationConfig;
        /**
         * An object that defines the animation properties used when the UI component is being shown.
         */
        show?: animationConfig;
    }
    /**
     * The Popover is a UI component that shows notifications within a box with an arrow pointing to a specified UI element.
     */
    export class dxPopover extends dxPopup {
        constructor(element: Element, options?: dxPopoverOptions)
        constructor(element: JQuery, options?: dxPopoverOptions)
        /**
         * Shows the UI component.
         */
        show(): Promise<boolean> & JQueryPromise<boolean>;
        /**
         * Shows the UI component for a target element.
         */
        show(target: string | Element | JQuery): Promise<boolean> & JQueryPromise<boolean>;
    }
    /**
     * 
     */
    export interface dxPopupOptions<T = dxPopup> extends dxOverlayOptions<T> {
        /**
         * Configures UI component visibility animations. This object contains two fields: show and hide.
         */
        animation?: dxPopupAnimation;
        /**
         * Specifies the container in which to render the UI component.
         */
        container?: string | Element | JQuery;
        /**
         * Specifies whether or not to allow a user to drag the popup window.
         */
        dragEnabled?: boolean;
        /**
         * Specifies whether the UI component can be focused using keyboard navigation.
         */
        focusStateEnabled?: boolean;
        /**
         * Specifies whether to display the Popup in full-screen mode.
         */
        fullScreen?: boolean;
        /**
         * Specifies the UI component's height in pixels.
         */
        height?: number | string | (() => number | string);
        /**
         * A function that is executed each time the UI component is resized by one pixel.
         */
        onResize?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any }) => any);
        /**
         * A function that is executed when resizing ends.
         */
        onResizeEnd?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any }) => any);
        /**
         * A function that is executed when resizing starts.
         */
        onResizeStart?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any }) => any);
        /**
         * A function that is executed when the UI component's title is rendered.
         */
        onTitleRendered?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, titleElement?: DevExpress.core.dxElement }) => any);
        /**
         * Positions the UI component.
         */
        position?: 'bottom' | 'center' | 'left' | 'left bottom' | 'left top' | 'right' | 'right bottom' | 'right top' | 'top' | positionConfig | Function;
        /**
         * Specifies whether or not an end user can resize the UI component.
         */
        resizeEnabled?: boolean;
        /**
         * Specifies whether or not the UI component displays the Close button.
         */
        showCloseButton?: boolean;
        /**
         * A Boolean value specifying whether or not to display the title in the popup window.
         */
        showTitle?: boolean;
        /**
         * The title in the overlay window.
         */
        title?: string;
        /**
         * Specifies a custom template for the UI component title. Does not apply if the title is defined.
         */
        titleTemplate?: DevExpress.core.template | ((titleElement: DevExpress.core.dxElement) => string | Element | JQuery);
        /**
         * Configures toolbar items.
         */
        toolbarItems?: Array<dxPopupToolbarItem>;
        /**
         * Specifies the UI component's width in pixels.
         */
        width?: number | string | (() => number | string);
    }
    /**
     * Configures UI component visibility animations. This object contains two fields: show and hide.
     */
    export interface dxPopupAnimation extends dxOverlayAnimation {
        /**
         * An object that defines the animation properties used when the UI component is being hidden.
         */
        hide?: animationConfig;
        /**
         * An object that defines the animation properties used when the UI component is being shown.
         */
        show?: animationConfig;
    }
    /**
     * Configures toolbar items.
     */
    export interface dxPopupToolbarItem {
        /**
         * Specifies whether the toolbar item responds to user interaction.
         */
        disabled?: boolean;
        /**
         * Specifies html code inserted into the toolbar item element.
         */
        html?: string;
        /**
         * Specifies a location for the item on the toolbar.
         */
        location?: 'after' | 'before' | 'center';
        /**
         * Configures the DevExtreme UI component used as a toolbar item.
         */
        options?: any;
        /**
         * Specifies a template that should be used to render this item only.
         */
        template?: DevExpress.core.template;
        /**
         * Specifies text displayed for the toolbar item.
         */
        text?: string;
        /**
         * Specifies whether the item is displayed on a top or bottom toolbar.
         */
        toolbar?: 'bottom' | 'top';
        /**
         * Specifies whether or not a UI component item must be displayed.
         */
        visible?: boolean;
        /**
         * A UI component that presents a toolbar item.
         */
        widget?: 'dxAutocomplete' | 'dxButton' | 'dxCheckBox' | 'dxDateBox' | 'dxMenu' | 'dxSelectBox' | 'dxTabs' | 'dxTextBox' | 'dxButtonGroup' | 'dxDropDownButton';
    }
    /**
     * The Popup UI component is a pop-up window overlaying the current view.
     */
    export class dxPopup extends dxOverlay {
        constructor(element: Element, options?: dxPopupOptions)
        constructor(element: JQuery, options?: dxPopupOptions)
    }
    /**
     * 
     */
    export interface dxProgressBarOptions extends dxTrackBarOptions<dxProgressBar> {
        /**
         * A function that is executed when the value reaches the maximum.
         */
        onComplete?: ((e: { component?: dxProgressBar, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event }) => any);
        /**
         * Specifies whether or not the UI component displays a progress status.
         */
        showStatus?: boolean;
        /**
         * Specifies a format for the progress status.
         */
        statusFormat?: string | ((ratio: number, value: number) => string);
        /**
         * The current UI component value.
         */
        value?: number;
    }
    /**
     * The ProgressBar is a UI component that shows current progress.
     */
    export class dxProgressBar extends dxTrackBar {
        constructor(element: Element, options?: dxProgressBarOptions)
        constructor(element: JQuery, options?: dxProgressBarOptions)
    }
    /**
     * 
     */
    export interface dxRadioGroupOptions extends EditorOptions<dxRadioGroup>, DataExpressionMixinOptions<dxRadioGroup> {
        /**
         * Specifies whether or not the UI component changes its state when interacting with a user.
         */
        activeStateEnabled?: boolean;
        /**
         * Specifies whether the UI component can be focused using keyboard navigation.
         */
        focusStateEnabled?: boolean;
        /**
         * Specifies whether the UI component changes its state when a user pauses on it.
         */
        hoverStateEnabled?: boolean;
        /**
         * Specifies the radio group layout.
         */
        layout?: 'horizontal' | 'vertical';
        /**
         * The value to be assigned to the `name` attribute of the underlying HTML element.
         */
        name?: string;
        /**
         * Specifies the UI component's value.
         */
        value?: any;
    }
    /**
     * The RadioGroup is a UI component that contains a set of radio buttons and allows an end user to make a single selection from the set.
     */
    export class dxRadioGroup extends Editor {
        constructor(element: Element, options?: dxRadioGroupOptions)
        constructor(element: JQuery, options?: dxRadioGroupOptions)
        /**
         * Gets the DataSource instance.
         */
        getDataSource(): DevExpress.data.DataSource;
    }
    /**
     * 
     */
    export interface dxRangeSliderOptions extends dxSliderBaseOptions<dxRangeSlider> {
        /**
         * The right edge of the interval currently selected using the range slider.
         */
        end?: number;
        /**
         * The value to be assigned to the name attribute of the underlying `` element.
         */
        endName?: string;
        /**
         * A function that is executed after the UI component's value is changed.
         */
        onValueChanged?: ((e: { component?: dxRangeSlider, element?: DevExpress.core.dxElement, model?: any, start?: number, end?: number, value?: Array<number> }) => any);
        /**
         * The left edge of the interval currently selected using the range slider.
         */
        start?: number;
        /**
         * The value to be assigned to the name attribute of the underlying `` element.
         */
        startName?: string;
        /**
         * Specifies the UI component's value.
         */
        value?: Array<number>;
    }
    /**
     * The RangeSlider is a UI component that allows an end user to choose a range of numeric values.
     */
    export class dxRangeSlider extends dxSliderBase {
        constructor(element: Element, options?: dxRangeSliderOptions)
        constructor(element: JQuery, options?: dxRangeSliderOptions)
    }
    /**
     * 
     */
    export interface dxRecurrenceEditorOptions extends EditorOptions<dxRecurrenceEditor> {
        /**
         * Specifies the UI component's value.
         */
        value?: string;
    }
    /**
     * A base class for editors.
     */
    export class dxRecurrenceEditor extends Editor {
        constructor(element: Element, options?: dxRecurrenceEditorOptions)
        constructor(element: JQuery, options?: dxRecurrenceEditorOptions)
    }
    /**
     * 
     */
    export interface dxResizableOptions extends DOMComponentOptions<dxResizable> {
        /**
         * Specifies which borders of the UI component element are used as a handle.
         */
        handles?: 'bottom' | 'left' | 'right' | 'top' | 'all' | string;
        /**
         * Specifies the UI component's height.
         */
        height?: number | string | (() => number | string);
        /**
         * Specifies the upper height boundary for resizing.
         */
        maxHeight?: number;
        /**
         * Specifies the upper width boundary for resizing.
         */
        maxWidth?: number;
        /**
         * Specifies the lower height boundary for resizing.
         */
        minHeight?: number;
        /**
         * Specifies the lower width boundary for resizing.
         */
        minWidth?: number;
        /**
         * A function that is executed each time the UI component is resized by one pixel.
         */
        onResize?: ((e: { component?: dxResizable, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, width?: number, height?: number }) => any);
        /**
         * A function that is executed when resizing ends.
         */
        onResizeEnd?: ((e: { component?: dxResizable, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, width?: number, height?: number }) => any);
        /**
         * A function that is executed when resizing starts.
         */
        onResizeStart?: ((e: { component?: dxResizable, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, width?: number, height?: number }) => any);
        /**
         * Specifies the UI component's width.
         */
        width?: number | string | (() => number | string);
    }
    /**
     * The Resizable UI component enables its content to be resizable in the UI.
     */
    export class dxResizable extends DOMComponent {
        constructor(element: Element, options?: dxResizableOptions)
        constructor(element: JQuery, options?: dxResizableOptions)
    }
    /**
     * 
     */
    export interface dxResponsiveBoxOptions extends CollectionWidgetOptions<dxResponsiveBox> {
        /**
         * Specifies the collection of columns for the grid used to position layout elements.
         */
        cols?: Array<{ baseSize?: number | 'auto', ratio?: number, screen?: string, shrink?: number }>;
        /**
         * Binds the UI component to data.
         */
        dataSource?: string | Array<string | dxResponsiveBoxItem | any> | DevExpress.data.DataSource | DevExpress.data.DataSourceOptions;
        /**
         * Specifies the UI component's height.
         */
        height?: number | string | (() => number | string);
        /**
         * An array of items displayed by the UI component.
         */
        items?: Array<string | dxResponsiveBoxItem | any>;
        /**
         * Specifies the collection of rows for the grid used to position layout elements.
         */
        rows?: Array<{ baseSize?: number | 'auto', ratio?: number, screen?: string, shrink?: number }>;
        /**
         * Specifies the function returning the size qualifier depending on the screen's width.
         */
        screenByWidth?: Function;
        /**
         * Specifies on which screens all layout elements should be arranged in a single column. Accepts a single or several size qualifiers separated by a space.
         */
        singleColumnScreen?: string;
        /**
         * Specifies the UI component's width.
         */
        width?: number | string | (() => number | string);
    }
    /**
     * The ResponsiveBox UI component allows you to create an application or a website with a layout adapted to different screen sizes.
     */
    export class dxResponsiveBox extends CollectionWidget {
        constructor(element: Element, options?: dxResponsiveBoxOptions)
        constructor(element: JQuery, options?: dxResponsiveBoxOptions)
    }
    /**
     * 
     */
    export interface dxResponsiveBoxItem extends CollectionWidgetItem {
        /**
         * Specifies the item location and size against the UI component grid.
         */
        location?: { col?: number, colspan?: number, row?: number, rowspan?: number, screen?: string } | Array<{ col?: number, colspan?: number, row?: number, rowspan?: number, screen?: string }>;
    }
    /**
     * 
     */
    export interface dxSchedulerOptions extends WidgetOptions<dxScheduler> {
        /**
         * Specifies whether the UI component adapts to small screens.
         */
        adaptivityEnabled?: boolean;
        /**
         * Specifies the name of the data source item field whose value defines whether or not the corresponding appointment is an all-day appointment.
         */
        allDayExpr?: string;
        /**
         * Specifies a custom template for cell overflow indicators.
         */
        appointmentCollectorTemplate?: DevExpress.core.template | ((data: { appointmentCount?: number, isCompact?: boolean }, collectorElement: DevExpress.core.dxElement) => string | Element | JQuery);
        /**
         * Configures appointment reordering using drag and drop gestures.
         */
        appointmentDragging?: { autoScroll?: boolean, data?: any, group?: string, onAdd?: ((e: { component?: dxScheduler, event?: DevExpress.events.event, itemData?: any, itemElement?: DevExpress.core.dxElement, fromComponent?: dxSortable | dxDraggable, toComponent?: dxSortable | dxDraggable, fromData?: any, toData?: any }) => any), onDragEnd?: ((e: { component?: dxScheduler, event?: DevExpress.events.event, cancel?: boolean, itemData?: any, itemElement?: DevExpress.core.dxElement, fromComponent?: dxSortable | dxDraggable, toComponent?: dxSortable | dxDraggable, fromData?: any, toData?: any }) => any), onDragMove?: ((e: { component?: dxScheduler, event?: DevExpress.events.event, cancel?: boolean, itemData?: any, itemElement?: DevExpress.core.dxElement, fromComponent?: dxSortable | dxDraggable, toComponent?: dxSortable | dxDraggable, fromData?: any, toData?: any }) => any), onDragStart?: ((e: { component?: dxScheduler, event?: DevExpress.events.event, cancel?: boolean, itemData?: any, itemElement?: DevExpress.core.dxElement, fromData?: any }) => any), onRemove?: ((e: { component?: dxScheduler, event?: DevExpress.events.event, itemData?: any, itemElement?: DevExpress.core.dxElement, fromComponent?: dxSortable | dxDraggable, toComponent?: dxSortable | dxDraggable, fromData?: any }) => any), scrollSensitivity?: number, scrollSpeed?: number };
        /**
         * Specifies a custom template for appointments.
         */
        appointmentTemplate?: DevExpress.core.template | ((model: { appointmentData?: any, targetedAppointmentData?: any }, itemIndex: number, contentElement: DevExpress.core.dxElement) => string | Element | JQuery);
        /**
         * Specifies a custom template for tooltips displayed when users click an appointment or cell overflow indicator.
         */
        appointmentTooltipTemplate?: DevExpress.core.template | ((model: { appointmentData?: any, targetedAppointmentData?: any }, itemIndex: number, contentElement: DevExpress.core.dxElement) => string | Element | JQuery);
        /**
         * Specifies cell duration in minutes. This property's value should divide the interval between startDayHour and endDayHour into even parts.
         */
        cellDuration?: number;
        /**
         * Specifies whether or not an end-user can scroll the view in both directions at the same time.
         */
        crossScrollingEnabled?: boolean;
        /**
         * Specifies the current date.
         */
        currentDate?: Date | number | string;
        /**
         * Specifies the currently displayed view. Accepts the view's name or type.
         */
        currentView?: 'agenda' | 'day' | 'month' | 'timelineDay' | 'timelineMonth' | 'timelineWeek' | 'timelineWorkWeek' | 'week' | 'workWeek';
        /**
         * Customizes the date navigator's text.
         */
        customizeDateNavigatorText?: ((info: { startDate?: Date, endDate?: Date, text?: string }) => string);
        /**
         * Specifies a custom template for table cells.
         */
        dataCellTemplate?: DevExpress.core.template | ((itemData: any, itemIndex: number, itemElement: DevExpress.core.dxElement) => string | Element | JQuery);
        /**
         * Binds the UI component to data.
         */
        dataSource?: string | Array<dxSchedulerAppointment> | DevExpress.data.DataSource | DevExpress.data.DataSourceOptions;
        /**
         * Specifies a custom template for day scale items.
         */
        dateCellTemplate?: DevExpress.core.template | ((itemData: any, itemIndex: number, itemElement: DevExpress.core.dxElement) => string | Element | JQuery);
        /**
         * Specifies the date-time values' serialization format. Use it only if you do not specify the dataSource at design time.
         */
        dateSerializationFormat?: string;
        /**
         * Specifies the name of the data source item field whose value holds the description of the corresponding appointment.
         */
        descriptionExpr?: string;
        /**
         * Specifies a custom template for tooltips displayed when users click a cell overflow indicator.
         * @deprecated Use the appointmentTooltipTemplate option instead.
         */
        dropDownAppointmentTemplate?: DevExpress.core.template | ((itemData: any, itemIndex: number, contentElement: DevExpress.core.dxElement) => string | Element | JQuery);
        /**
         * Specifies which editing operations a user can perform on appointments.
         */
        editing?: boolean | { allowAdding?: boolean, allowDeleting?: boolean, allowDragging?: boolean, allowEditingTimeZones?: boolean, allowResizing?: boolean, allowTimeZoneEditing?: boolean, allowUpdating?: boolean };
        /**
         * Specifies the name of the data source item field that defines the ending of an appointment.
         */
        endDateExpr?: string;
        /**
         * Specifies the name of the data source item field that defines the timezone of the appointment end date.
         */
        endDateTimeZoneExpr?: string;
        /**
         * Specifies the last hour on the time scale. Accepts integer values from 0 to 24.
         */
        endDayHour?: number;
        /**
         * Specifies the first day of a week. Does not apply to the agenda view.
         */
        firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
        /**
         * Specifies whether the UI component can be focused using keyboard navigation.
         */
        focusStateEnabled?: boolean;
        /**
         * If true, appointments are grouped by date first and then by resource; opposite if false. Applies only if appointments are grouped and groupOrientation is 'horizontal'.
         */
        groupByDate?: boolean;
        /**
         * Specifies the resource kinds by which the scheduler's appointments are grouped in a timetable.
         */
        groups?: Array<string>;
        /**
         * Specifies the time interval between when the date-time indicator changes its position, in milliseconds.
         */
        indicatorUpdateInterval?: number;
        /**
         * The latest date the UI component allows you to select.
         */
        max?: Date | number | string;
        /**
         * Specifies the limit of full-sized appointments displayed per cell. Applies to all views except 'agenda'.
         */
        maxAppointmentsPerCell?: number | 'auto' | 'unlimited';
        /**
         * The earliest date the UI component allows you to select.
         */
        min?: Date | number | string;
        /**
         * The text or HTML markup displayed by the UI component if the item collection is empty. Available for the Agenda view only.
         */
        noDataText?: string;
        /**
         * A function that is executed after an appointment is added to the data source.
         */
        onAppointmentAdded?: ((e: { component?: dxScheduler, element?: DevExpress.core.dxElement, model?: any, appointmentData?: any, error?: Error }) => any);
        /**
         * A function that is executed before an appointment is added to the data source.
         */
        onAppointmentAdding?: ((e: { component?: dxScheduler, element?: DevExpress.core.dxElement, model?: any, appointmentData?: any, cancel?: boolean | Promise<boolean> | JQueryPromise<boolean> }) => any);
        /**
         * A function that is executed when an appointment is clicked or tapped.
         */
        onAppointmentClick?: ((e: { component?: dxScheduler, element?: DevExpress.core.dxElement, model?: any, appointmentData?: any, targetedAppointmentData?: any, appointmentElement?: DevExpress.core.dxElement, event?: DevExpress.events.event, cancel?: boolean }) => any) | string;
        /**
         * A function that is executed when a user attempts to open the browser's context menu for an appointment. Allows you to replace this context menu with a custom context menu.
         */
        onAppointmentContextMenu?: ((e: { component?: dxScheduler, element?: DevExpress.core.dxElement, model?: any, appointmentData?: any, targetedAppointmentData?: any, appointmentElement?: DevExpress.core.dxElement, event?: DevExpress.events.event }) => any) | string;
        /**
         * A function that is executed when an appointment is double-clicked or double-tapped.
         */
        onAppointmentDblClick?: ((e: { component?: dxScheduler, element?: DevExpress.core.dxElement, model?: any, appointmentData?: any, targetedAppointmentData?: any, appointmentElement?: DevExpress.core.dxElement, event?: DevExpress.events.event, cancel?: boolean }) => any) | string;
        /**
         * A function that is executed after an appointment is deleted from the data source.
         */
        onAppointmentDeleted?: ((e: { component?: dxScheduler, element?: DevExpress.core.dxElement, model?: any, appointmentData?: any, error?: Error }) => any);
        /**
         * A function that is executed before an appointment is deleted from the data source.
         */
        onAppointmentDeleting?: ((e: { component?: dxScheduler, element?: DevExpress.core.dxElement, model?: any, appointmentData?: any, cancel?: boolean | Promise<boolean> | JQueryPromise<boolean> }) => any);
        /**
         * A function that is executed before an appointment details form is opened. Use this function to customize the form.
         */
        onAppointmentFormOpening?: ((e: { component?: dxScheduler, element?: DevExpress.core.dxElement, model?: any, appointmentData?: any, form?: dxForm, popup?: dxPopup, cancel?: boolean }) => any);
        /**
         * A function that is executed when an appointment is rendered.
         */
        onAppointmentRendered?: ((e: { component?: dxScheduler, element?: DevExpress.core.dxElement, model?: any, appointmentData?: any, targetedAppointmentData?: any | undefined, appointmentElement?: DevExpress.core.dxElement }) => any);
        /**
         * A function that is executed after an appointment is updated in the data source.
         */
        onAppointmentUpdated?: ((e: { component?: dxScheduler, element?: DevExpress.core.dxElement, model?: any, appointmentData?: any, error?: Error }) => any);
        /**
         * A function that is executed before an appointment is updated in the data source.
         */
        onAppointmentUpdating?: ((e: { component?: dxScheduler, element?: DevExpress.core.dxElement, model?: any, oldData?: any, newData?: any, cancel?: boolean | Promise<boolean> | JQueryPromise<boolean> }) => any);
        /**
         * A function that is executed when a view cell is clicked.
         */
        onCellClick?: ((e: { component?: dxScheduler, element?: DevExpress.core.dxElement, model?: any, cellData?: any, cellElement?: DevExpress.core.dxElement, event?: DevExpress.events.event, cancel?: boolean }) => any) | string;
        /**
         * A function that is executed when a user attempts to open the browser's context menu for a cell. Allows you to replace this context menu with a custom context menu.
         */
        onCellContextMenu?: ((e: { component?: dxScheduler, element?: DevExpress.core.dxElement, model?: any, cellData?: any, cellElement?: DevExpress.core.dxElement, event?: DevExpress.events.event }) => any) | string;
        /**
         * Specifies the edit mode for recurring appointments.
         */
        recurrenceEditMode?: 'dialog' | 'occurrence' | 'series';
        /**
         * Specifies the name of the data source item field that defines exceptions for the current recurring appointment.
         */
        recurrenceExceptionExpr?: string;
        /**
         * Specifies the name of the data source item field that defines a recurrence rule for generating recurring appointments.
         */
        recurrenceRuleExpr?: string;
        /**
         * Specifies whether filtering is performed on the server or client side.
         */
        remoteFiltering?: boolean;
        /**
         * Specifies a custom template for resource headers.
         */
        resourceCellTemplate?: DevExpress.core.template | ((itemData: any, itemIndex: number, itemElement: DevExpress.core.dxElement) => string | Element | JQuery);
        /**
         * Specifies an array of resources available in the scheduler.
         */
        resources?: Array<{ allowMultiple?: boolean, colorExpr?: string, dataSource?: string | Array<any> | DevExpress.data.DataSource | DevExpress.data.DataSourceOptions, displayExpr?: string | ((resource: any) => string), fieldExpr?: string, label?: string, useColorAsDefault?: boolean, valueExpr?: string | Function }>;
        /**
         * Configures scrolling.
         */
        scrolling?: dxSchedulerScrolling;
        /**
         * Currently selected cells' data.
         */
        selectedCellData?: Array<any>;
        /**
         * Specifies whether to apply shading to cover the timetable up to the current time.
         */
        shadeUntilCurrentTime?: boolean;
        /**
         * Specifies the 'All-day' panel's visibility. Setting this property to false hides the panel along with the all-day appointments.
         */
        showAllDayPanel?: boolean;
        /**
         * Specifies the current date-time indicator's visibility.
         */
        showCurrentTimeIndicator?: boolean;
        /**
         * Specifies the name of the data source item field that defines the start of an appointment.
         */
        startDateExpr?: string;
        /**
         * Specifies the name of the data source item field that defines the timezone of the appointment start date.
         */
        startDateTimeZoneExpr?: string;
        /**
         * Specifies the first hour on the time scale. Accepts integer values from 0 to 24.
         */
        startDayHour?: number;
        /**
         * Specifies the name of the data source item field that holds the subject of an appointment.
         */
        textExpr?: string;
        /**
         * Specifies a custom template for time scale items.
         */
        timeCellTemplate?: DevExpress.core.template | ((itemData: any, itemIndex: number, itemElement: DevExpress.core.dxElement) => string | Element | JQuery);
        /**
         * Specifies the time zone for the Scheduler's grid. Accepts values from the IANA time zone database.
         */
        timeZone?: string;
        /**
         * Specifies whether a user can switch views using tabs or a drop-down menu.
         */
        useDropDownViewSwitcher?: boolean;
        /**
         * Specifies and configures the views to be available in the view switcher.
         */
        views?: Array<'day' | 'week' | 'workWeek' | 'month' | 'timelineDay' | 'timelineWeek' | 'timelineWorkWeek' | 'timelineMonth' | 'agenda' | { agendaDuration?: number, appointmentCollectorTemplate?: DevExpress.core.template | ((data: { appointmentCount?: number, isCompact?: boolean }, collectorElement: DevExpress.core.dxElement) => string | Element | JQuery), appointmentTemplate?: DevExpress.core.template | ((model: { appointmentData?: any, targetedAppointmentData?: any }, itemIndex: number, contentElement: DevExpress.core.dxElement) => string | Element | JQuery), appointmentTooltipTemplate?: DevExpress.core.template | ((model: { appointmentData?: any, targetedAppointmentData?: any }, itemIndex: number, contentElement: DevExpress.core.dxElement) => string | Element | JQuery), cellDuration?: number, dataCellTemplate?: DevExpress.core.template | ((itemData: any, itemIndex: number, itemElement: DevExpress.core.dxElement) => string | Element | JQuery), dateCellTemplate?: DevExpress.core.template | ((itemData: any, itemIndex: number, itemElement: DevExpress.core.dxElement) => string | Element | JQuery), dropDownAppointmentTemplate?: DevExpress.core.template | ((itemData: any, itemIndex: number, contentElement: DevExpress.core.dxElement) => string | Element | JQuery), endDayHour?: number, firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6, groupByDate?: boolean, groupOrientation?: 'horizontal' | 'vertical', groups?: Array<string>, intervalCount?: number, maxAppointmentsPerCell?: number | 'auto' | 'unlimited', name?: string, resourceCellTemplate?: DevExpress.core.template | ((itemData: any, itemIndex: number, itemElement: DevExpress.core.dxElement) => string | Element | JQuery), scrolling?: dxSchedulerScrolling, startDate?: Date | number | string, startDayHour?: number, timeCellTemplate?: DevExpress.core.template | ((itemData: any, itemIndex: number, itemElement: DevExpress.core.dxElement) => string | Element | JQuery), type?: 'agenda' | 'day' | 'month' | 'timelineDay' | 'timelineMonth' | 'timelineWeek' | 'timelineWorkWeek' | 'week' | 'workWeek' }>;
    }
    /**
     * The Scheduler is a UI component that represents scheduled data and allows a user to manage and edit it.
     */
    export class dxScheduler extends Widget {
        constructor(element: Element, options?: dxSchedulerOptions)
        constructor(element: JQuery, options?: dxSchedulerOptions)
        /**
         * Adds an appointment.
         */
        addAppointment(appointment: any): void;
        /**
         * Deletes an appointment from the timetable and its object from the data source.
         */
        deleteAppointment(appointment: any): void;
        /**
         * Gets the DataSource instance.
         */
        getDataSource(): DevExpress.data.DataSource;
        /**
         * Gets the current view's end date.
         */
        getEndViewDate(): Date;
        /**
         * Gets the current view's start date.
         */
        getStartViewDate(): Date;
        /**
         * Hides an appointment details form.
         */
        hideAppointmentPopup(saveChanges?: boolean): void;
        /**
         * Hides an appointment's or cell overflow indicator's tooltip.
         */
        hideAppointmentTooltip(): void;
        /**
         * Scrolls the current view to a specified position. Available for all views except 'agenda'. You should specify the height property to use this method.
         */
        scrollTo(date: Date, group?: any, allDay?: boolean): void;
        /**
         * Scrolls the current view to a specific day and time.
         * @deprecated 
         */
        scrollToTime(hours: number, minutes: number, date?: Date): void;
        /**
         * Shows the appointment details form.
         */
        showAppointmentPopup(appointmentData?: any, createNewAppointment?: boolean, currentAppointmentData?: any): void;
        /**
         * Shows a tooltip for a target element.
         */
        showAppointmentTooltip(appointmentData: any, target: string | Element | JQuery, currentAppointmentData?: any): void;
        /**
         * Updates an appointment.
         */
        updateAppointment(target: any, appointment: any): void;
    }
    /**
     * An object that describes an appointment in the Scheduler UI component.
     */
    export interface dxSchedulerAppointment extends CollectionWidgetItem {
        /**
         * Specifies whether the appointment lasts all day.
         */
        allDay?: boolean;
        /**
         * Specifies a detail description of the appointment.
         */
        description?: string;
        /**
         * Specifies whether the appointment responds to user interaction.
         */
        disabled?: boolean;
        /**
         * Specifies the ending of the appointment.
         */
        endDate?: Date | string;
        /**
         * Specifies the time zone for an appointment's endDate. Accepts values from the IANA time zone database.
         */
        endDateTimeZone?: string;
        /**
         * Specifies HTML code inserted into the appointment element.
         */
        html?: string;
        /**
         * Specifies the start date and time of one or more appointments to exclude from a series. This property requires that you also set recurrenceRule.
         */
        recurrenceException?: string;
        /**
         * Specifies a recurrence rule for generating recurring appointments in the scheduler.
         */
        recurrenceRule?: string;
        /**
         * Specifies the start of the appointment.
         */
        startDate?: Date | string;
        /**
         * Specifies the time zone for an appointment's startDate. Accepts values from the IANA time zone database.
         */
        startDateTimeZone?: string;
        /**
         * Specifies a template that should be used to render this appointment only.
         */
        template?: DevExpress.core.template;
        /**
         * Specifies the subject of the appointment.
         */
        text?: string;
        /**
         * Specifies whether or not an appointment must be displayed.
         */
        visible?: boolean;
    }
    /**
     * 
     */
    export interface dxSchedulerScrolling {
        /**
         * Specifies the scrolling mode.
         */
        mode?: 'standard' | 'virtual';
    }
    /**
     * 
     */
    export interface dxScrollViewOptions extends dxScrollableOptions<dxScrollView> {
        /**
         * A function that is executed when the 'pull to refresh' gesture is performed. Supported on mobile devices only.
         */
        onPullDown?: ((e: { component?: dxScrollView, element?: DevExpress.core.dxElement, model?: any }) => any);
        /**
         * A function that is executed when the content is scrolled down to the bottom.
         */
        onReachBottom?: ((e: { component?: dxScrollView, element?: DevExpress.core.dxElement, model?: any }) => any);
        /**
         * Specifies the text shown in the pullDown panel when pulling the content down lowers the refresh threshold.
         */
        pulledDownText?: string;
        /**
         * Specifies the text shown in the pullDown panel while pulling the content down to the refresh threshold.
         */
        pullingDownText?: string;
        /**
         * Specifies the text shown in the pullDown panel displayed when content is scrolled to the bottom.
         */
        reachBottomText?: string;
        /**
         * Specifies the text shown in the pullDown panel displayed when the content is being refreshed.
         */
        refreshingText?: string;
    }
    /**
     * The ScrollView is a UI component that enables a user to scroll its content.
     */
    export class dxScrollView extends dxScrollable {
        constructor(element: Element, options?: dxScrollViewOptions)
        constructor(element: JQuery, options?: dxScrollViewOptions)
        /**
         * Locks the UI component until the release(preventScrollBottom) method is called and executes the function passed to the onPullDown property and the handler assigned to the pullDown event.
         */
        refresh(): void;
        /**
         * Notifies the ScrollView that data loading is finished.
         */
        release(preventScrollBottom: boolean): Promise<void> & JQueryPromise<void>;
    }
    /**
     * 
     */
    export interface dxScrollableOptions<T = dxScrollable> extends DOMComponentOptions<T> {
        /**
         * A Boolean value specifying whether to enable or disable the bounce-back effect.
         */
        bounceEnabled?: boolean;
        /**
         * A string value specifying the available scrolling directions.
         */
        direction?: 'both' | 'horizontal' | 'vertical';
        /**
         * Specifies whether the UI component responds to user interaction.
         */
        disabled?: boolean;
        /**
         * A function that is executed on each scroll gesture.
         */
        onScroll?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, scrollOffset?: any, reachedLeft?: boolean, reachedRight?: boolean, reachedTop?: boolean, reachedBottom?: boolean }) => any);
        /**
         * A function that is executed each time the UI component is updated.
         */
        onUpdated?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, scrollOffset?: any, reachedLeft?: boolean, reachedRight?: boolean, reachedTop?: boolean, reachedBottom?: boolean }) => any);
        /**
         * A Boolean value specifying whether or not an end-user can scroll the UI component content swiping it up or down. Applies only if useNative is false
         */
        scrollByContent?: boolean;
        /**
         * Specifies whether a user can scroll the content with the scrollbar. Applies only if useNative is false.
         */
        scrollByThumb?: boolean;
        /**
         * Specifies when the UI component shows the scrollbar.
         */
        showScrollbar?: 'onScroll' | 'onHover' | 'always' | 'never';
        /**
         * Indicates whether to use native or simulated scrolling.
         */
        useNative?: boolean;
    }
    /**
     * A UI component used to display scrollable content.
     */
    export class dxScrollable extends DOMComponent {
        constructor(element: Element, options?: dxScrollableOptions)
        constructor(element: JQuery, options?: dxScrollableOptions)
        /**
         * Gets the UI component's height.
         */
        clientHeight(): number;
        /**
         * Gets the UI component's width.
         */
        clientWidth(): number;
        /**
         * Gets the UI component's content.
         */
        content(): DevExpress.core.dxElement;
        /**
         * Scrolls the content by a specific distance.
         */
        scrollBy(distance: number | any): void;
        /**
         * Gets the scrollable content's height in pixels.
         */
        scrollHeight(): number;
        /**
         * Gets the left scroll offset.
         */
        scrollLeft(): number;
        /**
         * Gets the scroll offset.
         */
        scrollOffset(): any;
        /**
         * Scrolls the content to a specific position.
         */
        scrollTo(targetLocation: number | any): void;
        /**
         * Scrolls content to an element.
         */
        scrollToElement(element: Element | JQuery): void;
        /**
         * Gets the top scroll offset.
         */
        scrollTop(): number;
        /**
         * Gets the scrollable content's width in pixels.
         */
        scrollWidth(): number;
        /**
         * Updates the scrollable contents' dimensions.
         */
        update(): Promise<void> & JQueryPromise<void>;
    }
    /**
     * 
     */
    export interface dxSelectBoxOptions<T = dxSelectBox> extends dxDropDownListOptions<T> {
        /**
         * Specifies whether the UI component allows a user to enter a custom value. Requires the onCustomItemCreating handler implementation.
         */
        acceptCustomValue?: boolean;
        /**
         * Specifies a custom template for the text field. Must contain the TextBox UI component.
         */
        fieldTemplate?: DevExpress.core.template | ((selectedItem: any, fieldElement: DevExpress.core.dxElement) => string | Element | JQuery);
        /**
         * A function that is executed when a user adds a custom item. Requires acceptCustomValue to be set to true.
         */
        onCustomItemCreating?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, text?: string, customItem?: string | any | Promise<any> | JQueryPromise<any> }) => any);
        /**
         * Specifies whether a user can open the drop-down list by clicking a text field.
         */
        openOnFieldClick?: boolean;
        /**
         * The text that is provided as a hint in the select box editor.
         */
        placeholder?: string;
        /**
         * Specifies whether the drop-down button is visible.
         */
        showDropDownButton?: boolean;
        /**
         * Specifies whether or not to display selection controls.
         */
        showSelectionControls?: boolean;
        /**
         * Specifies the DOM events after which the UI component's value should be updated. Applies only if acceptCustomValue is set to true.
         */
        valueChangeEvent?: string;
    }
    /**
     * The SelectBox UI component is an editor that allows an end user to select an item from a drop-down list.
     */
    export class dxSelectBox extends dxDropDownList {
        constructor(element: Element, options?: dxSelectBoxOptions)
        constructor(element: JQuery, options?: dxSelectBoxOptions)
    }
    /**
     * 
     */
    export interface dxSlideOutOptions extends CollectionWidgetOptions<dxSlideOut> {
        /**
         * A Boolean value specifying whether or not the UI component changes its state when interacting with a user.
         */
        activeStateEnabled?: boolean;
        /**
         * Specifies a custom template for the UI component content. Rendered only once - when the UI component is created.
         */
        contentTemplate?: DevExpress.core.template | ((container: DevExpress.core.dxElement) => string | Element | JQuery);
        /**
         * Binds the UI component to data.
         */
        dataSource?: string | Array<string | dxSlideOutItem | any> | DevExpress.data.DataSource | DevExpress.data.DataSourceOptions;
        /**
         * An array of items displayed by the UI component.
         */
        items?: Array<string | dxSlideOutItem | any>;
        /**
         * Specifies a custom template for group captions.
         */
        menuGroupTemplate?: DevExpress.core.template | ((groupData: any, groupIndex: number, groupElement: any) => string | Element | JQuery);
        /**
         * A Boolean value specifying whether or not to display a grouped menu.
         */
        menuGrouped?: boolean;
        /**
         * Specifies a custom template for menu items.
         */
        menuItemTemplate?: DevExpress.core.template | ((itemData: any, itemIndex: number, itemElement: DevExpress.core.dxElement) => string | Element | JQuery);
        /**
         * Specifies the current menu position.
         */
        menuPosition?: 'inverted' | 'normal';
        /**
         * Specifies whether or not the slide-out menu is displayed.
         */
        menuVisible?: boolean;
        /**
         * A function that is executed when a group menu item is rendered.
         */
        onMenuGroupRendered?: ((e: { component?: dxSlideOut, element?: DevExpress.core.dxElement, model?: any }) => any);
        /**
         * A function that is executed when a regular menu item is rendered.
         */
        onMenuItemRendered?: ((e: { component?: dxSlideOut, element?: DevExpress.core.dxElement, model?: any }) => any);
        /**
         * The index number of the currently selected item.
         */
        selectedIndex?: number;
        /**
         * Indicates whether the menu can be shown/hidden by swiping the UI component's main panel.
         */
        swipeEnabled?: boolean;
    }
    /**
     * The SlideOut UI component is a classic slide-out menu paired with a view. An end user opens the menu by swiping away the view.
     */
    export class dxSlideOut extends CollectionWidget {
        constructor(element: Element, options?: dxSlideOutOptions)
        constructor(element: JQuery, options?: dxSlideOutOptions)
        /**
         * Hides the UI component's slide-out menu.
         */
        hideMenu(): Promise<void> & JQueryPromise<void>;
        /**
         * Displays the UI component's slide-out menu.
         */
        showMenu(): Promise<void> & JQueryPromise<void>;
        /**
         * Shows or hides the slide-out menu depending on the argument.
         */
        toggleMenuVisibility(showing: boolean): Promise<void> & JQueryPromise<void>;
    }
    /**
     * 
     */
    export interface dxSlideOutItem extends CollectionWidgetItem {
        /**
         * Specifies a template that should be used to render a menu item.
         */
        menuTemplate?: DevExpress.core.template | (() => string | Element | JQuery);
    }
    /**
     * 
     */
    export interface dxSlideOutViewOptions extends WidgetOptions<dxSlideOutView> {
        /**
         * Specifies a custom template for the UI component content.
         */
        contentTemplate?: DevExpress.core.template | ((contentElement: DevExpress.core.dxElement) => any);
        /**
         * Specifies the current menu position.
         */
        menuPosition?: 'inverted' | 'normal';
        /**
         * Specifies a custom template for the menu content.
         */
        menuTemplate?: DevExpress.core.template | ((menuElement: DevExpress.core.dxElement) => any);
        /**
         * Specifies whether or not the menu panel is visible.
         */
        menuVisible?: boolean;
        /**
         * Specifies whether or not the menu is shown when a user swipes the UI component content.
         */
        swipeEnabled?: boolean;
    }
    /**
     * The SlideOutView UI component is a classic slide-out menu paired with a view. This UI component is very similar to the SlideOut with only one difference - the SlideOut always contains the List in the slide-out menu, while the SlideOutView can hold any collection there.
     */
    export class dxSlideOutView extends Widget {
        constructor(element: Element, options?: dxSlideOutViewOptions)
        constructor(element: JQuery, options?: dxSlideOutViewOptions)
        /**
         * Gets the UI component's content.
         */
        content(): DevExpress.core.dxElement;
        /**
         * Hides the UI component's slide-out menu.
         */
        hideMenu(): Promise<void> & JQueryPromise<void>;
        /**
         * Gets the slide-out menu's content.
         */
        menuContent(): DevExpress.core.dxElement;
        /**
         * Shows the slide-out menu.
         */
        showMenu(): Promise<void> & JQueryPromise<void>;
        /**
         * Shows or hides the slide-out menu depending on the argument.
         */
        toggleMenuVisibility(): Promise<void> & JQueryPromise<void>;
    }
    /**
     * 
     */
    export interface dxSliderOptions extends dxSliderBaseOptions<dxSlider> {
        /**
         * The current slider value.
         */
        value?: number;
    }
    /**
     * The Slider is a UI component that allows an end user to set a numeric value on a continuous range of possible values.
     */
    export class dxSlider extends dxSliderBase {
        constructor(element: Element, options?: dxSliderOptions)
        constructor(element: JQuery, options?: dxSliderOptions)
    }
    /**
     * 
     */
    export interface dxSliderBaseOptions<T = dxSliderBase> extends dxTrackBarOptions<T> {
        /**
         * Specifies whether or not the UI component changes its state when interacting with a user.
         */
        activeStateEnabled?: boolean;
        /**
         * Specifies whether the UI component can be focused using keyboard navigation.
         */
        focusStateEnabled?: boolean;
        /**
         * Specifies whether the UI component changes its state when a user pauses on it.
         */
        hoverStateEnabled?: boolean;
        /**
         * Specifies the step by which a handle moves when a user presses Page Up or Page Down.
         */
        keyStep?: number;
        /**
         * Configures the labels displayed at the min and max values.
         */
        label?: { format?: format, position?: 'bottom' | 'top', visible?: boolean };
        /**
         * The value to be assigned to the `name` attribute of the underlying HTML element.
         */
        name?: string;
        /**
         * Specifies whether to highlight the selected range.
         */
        showRange?: boolean;
        /**
         * Specifies the step by which the UI component's value changes when a user drags a handler.
         */
        step?: number;
        /**
         * Configures a tooltip.
         */
        tooltip?: { enabled?: boolean, format?: format, position?: 'bottom' | 'top', showMode?: 'always' | 'onHover' };
    }
    /**
     * 
     */
    export class dxSliderBase extends dxTrackBar {
        constructor(element: Element, options?: dxSliderBaseOptions)
        constructor(element: JQuery, options?: dxSliderBaseOptions)
    }
    /**
     * 
     */
    export interface dxSortableOptions extends DraggableBaseOptions<dxSortable> {
        /**
         * Allows a user to drop an item inside another item.
         */
        allowDropInsideItem?: boolean;
        /**
         * Allows a user to reorder sortable items.
         */
        allowReordering?: boolean;
        /**
         * Specifies custom markup to be shown instead of the item being dragged.
         */
        dragTemplate?: DevExpress.core.template | ((dragInfo: { itemData?: any, itemElement?: DevExpress.core.dxElement, fromIndex?: number }, containerElement: DevExpress.core.dxElement) => string | Element | JQuery);
        /**
         * Specifies how to highlight the item's drop position.
         */
        dropFeedbackMode?: 'push' | 'indicate';
        /**
         * Specifies a CSS selector for the items that can be dragged.
         */
        filter?: string;
        /**
         * Notifies the UI component of the items' orientation.
         */
        itemOrientation?: 'horizontal' | 'vertical';
        /**
         * Moves an element in the HTML markup when it is dropped.
         */
        moveItemOnDrop?: boolean;
        /**
         * A function that is called when a new item is added.
         */
        onAdd?: ((e: { component?: dxSortable, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, itemData?: any, itemElement?: DevExpress.core.dxElement, fromIndex?: number, toIndex?: number, fromComponent?: dxSortable | dxDraggable, toComponent?: dxSortable | dxDraggable, fromData?: any, toData?: any, dropInsideItem?: boolean }) => any);
        /**
         * A function that is called when the dragged item's position in the list is changed.
         */
        onDragChange?: ((e: { component?: dxSortable, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, cancel?: boolean, itemData?: any, itemElement?: DevExpress.core.dxElement, fromIndex?: number, toIndex?: number, fromComponent?: dxSortable | dxDraggable, toComponent?: dxSortable | dxDraggable, fromData?: any, toData?: any, dropInsideItem?: boolean }) => any);
        /**
         * A function that is called when the drag gesture is finished.
         */
        onDragEnd?: ((e: { component?: dxSortable, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, cancel?: boolean, itemData?: any, itemElement?: DevExpress.core.dxElement, fromIndex?: number, toIndex?: number, fromComponent?: dxSortable | dxDraggable, toComponent?: dxSortable | dxDraggable, fromData?: any, toData?: any, dropInsideItem?: boolean }) => any);
        /**
         * A function that is called every time a draggable item is moved.
         */
        onDragMove?: ((e: { component?: dxSortable, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, cancel?: boolean, itemData?: any, itemElement?: DevExpress.core.dxElement, fromIndex?: number, toIndex?: number, fromComponent?: dxSortable | dxDraggable, toComponent?: dxSortable | dxDraggable, fromData?: any, toData?: any, dropInsideItem?: boolean }) => any);
        /**
         * A function that is called when drag gesture is initialized.
         */
        onDragStart?: ((e: { component?: dxSortable, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, cancel?: boolean, itemData?: any, itemElement?: DevExpress.core.dxElement, fromIndex?: number, fromData?: any }) => any);
        /**
         * A function that is called when a draggable item is removed.
         */
        onRemove?: ((e: { component?: dxSortable, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, itemData?: any, itemElement?: DevExpress.core.dxElement, fromIndex?: number, toIndex?: number, fromComponent?: dxSortable | dxDraggable, toComponent?: dxSortable | dxDraggable, fromData?: any, toData?: any }) => any);
        /**
         * A function that is called when the draggable items are reordered.
         */
        onReorder?: ((e: { component?: dxSortable, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, itemData?: any, itemElement?: DevExpress.core.dxElement, fromIndex?: number, toIndex?: number, fromComponent?: dxSortable | dxDraggable, toComponent?: dxSortable | dxDraggable, fromData?: any, toData?: any, dropInsideItem?: boolean, promise?: Promise<void> | JQueryPromise<void> }) => any);
    }
    /**
     * Sortable is a user interface utility that allows a UI component's items to be reordered via drag and drop gestures.
     */
    export class dxSortable extends DraggableBase {
        constructor(element: Element, options?: dxSortableOptions)
        constructor(element: JQuery, options?: dxSortableOptions)
        /**
         * Updates Sortable's dimensions. Call this method after items are added or their dimensions are changed during dragging.
         */
        update(): void;
    }
    /**
     * 
     */
    export interface dxSpeedDialActionOptions extends WidgetOptions<dxSpeedDialAction> {
        /**
         * Specifies the icon the FAB or speed dial action button displays.
         */
        icon?: string;
        /**
         * Allows you to reorder action buttons in the speed dial menu.
         */
        index?: number;
        /**
         * Specifies the text label displayed inside the FAB or near the speed dial action button.
         */
        label?: string;
        /**
         * A function that is executed when the FAB or speed dial action button is clicked or tapped.
         */
        onClick?: ((e: { event?: DevExpress.events.event, component?: dxSpeedDialAction, element?: DevExpress.core.dxElement, actionElement?: DevExpress.core.dxElement }) => any);
        /**
         * A function that is executed when the UI component's content is ready and each time the content is changed.
         */
        onContentReady?: ((e: { component?: dxSpeedDialAction, element?: DevExpress.core.dxElement, model?: any, actionElement?: DevExpress.core.dxElement }) => any);
        /**
         * Allows you to hide the FAB from the view or the action from the speed dial menu.
         */
        visible?: boolean;
    }
    /**
     * The SpeedDialAction is a button that performs a custom action. It can be represented by a Floating Action Button (FAB) or a button in a speed dial menu opened with the FAB.
     */
    export class dxSpeedDialAction extends Widget {
        constructor(element: Element, options?: dxSpeedDialActionOptions)
        constructor(element: JQuery, options?: dxSpeedDialActionOptions)
    }
    /**
     * 
     */
    export interface dxSwitchOptions extends EditorOptions<dxSwitch> {
        /**
         * Specifies whether or not the UI component changes its state when interacting with a user.
         */
        activeStateEnabled?: boolean;
        /**
         * Specifies whether the UI component can be focused using keyboard navigation.
         */
        focusStateEnabled?: boolean;
        /**
         * Specifies whether the UI component changes its state when a user pauses on it.
         */
        hoverStateEnabled?: boolean;
        /**
         * The value to be assigned to the `name` attribute of the underlying HTML element.
         */
        name?: string;
        /**
         * Specifies the text displayed when the UI component is switched off.
         */
        switchedOffText?: string;
        /**
         * Specifies the text displayed when the UI component is switched on.
         */
        switchedOnText?: string;
        /**
         * A Boolean value specifying whether the current switch state is 'On' or 'Off'.
         */
        value?: boolean;
    }
    /**
     * The Switch is a UI component that can be in two states: 'On' and 'Off'.
     */
    export class dxSwitch extends Editor {
        constructor(element: Element, options?: dxSwitchOptions)
        constructor(element: JQuery, options?: dxSwitchOptions)
    }
    /**
     * 
     */
    export interface dxTabPanelOptions extends dxMultiViewOptions<dxTabPanel> {
        /**
         * Specifies whether or not to animate the displayed item change.
         */
        animationEnabled?: boolean;
        /**
         * Binds the UI component to data.
         */
        dataSource?: string | Array<string | dxTabPanelItem | any> | DevExpress.data.DataSource | DevExpress.data.DataSourceOptions;
        /**
         * Specifies whether the UI component changes its state when a user pauses on it.
         */
        hoverStateEnabled?: boolean;
        /**
         * Specifies a custom template for item titles.
         */
        itemTitleTemplate?: DevExpress.core.template | ((itemData: any, itemIndex: number, itemElement: DevExpress.core.dxElement) => string | Element | JQuery);
        /**
         * An array of items displayed by the UI component.
         */
        items?: Array<string | dxTabPanelItem | any>;
        /**
         * A function that is executed when a tab is clicked or tapped.
         */
        onTitleClick?: ((e: { component?: dxTabPanel, element?: DevExpress.core.dxElement, model?: any, itemData?: any, itemElement?: DevExpress.core.dxElement, event?: DevExpress.events.event }) => any) | string;
        /**
         * A function that is executed when a tab has been held for a specified period.
         */
        onTitleHold?: ((e: { component?: dxTabPanel, element?: DevExpress.core.dxElement, model?: any, itemData?: any, itemElement?: DevExpress.core.dxElement, event?: DevExpress.events.event }) => any);
        /**
         * A function that is executed after a tab is rendered.
         */
        onTitleRendered?: ((e: { component?: dxTabPanel, element?: DevExpress.core.dxElement, model?: any, itemData?: any, itemElement?: DevExpress.core.dxElement }) => any);
        /**
         * Specifies whether to repaint only those elements whose data changed.
         */
        repaintChangesOnly?: boolean;
        /**
         * A Boolean value specifying if tabs in the title are scrolled by content.
         */
        scrollByContent?: boolean;
        /**
         * A Boolean indicating whether or not to add scrolling support for tabs in the title.
         */
        scrollingEnabled?: boolean;
        /**
         * Specifies whether navigation buttons should be available when tabs exceed the UI component's width.
         */
        showNavButtons?: boolean;
        /**
         * A Boolean value specifying whether or not to allow users to change the selected index by swiping.
         */
        swipeEnabled?: boolean;
    }
    /**
     * The TabPanel is a UI component consisting of the Tabs and MultiView UI components. It automatically synchronizes the selected tab with the currently displayed view and vice versa.
     */
    export class dxTabPanel extends dxMultiView {
        constructor(element: Element, options?: dxTabPanelOptions)
        constructor(element: JQuery, options?: dxTabPanelOptions)
    }
    /**
     * 
     */
    export interface dxTabPanelItem extends dxMultiViewItem {
        /**
         * Specifies a badge text for the tab.
         */
        badge?: string;
        /**
         * Specifies the icon to be displayed in the tab's title.
         */
        icon?: string;
        /**
         * Specifies a template that should be used to render the tab for this item only.
         */
        tabTemplate?: DevExpress.core.template | (() => string | Element | JQuery);
        /**
         * Specifies the item title text displayed on a corresponding tab.
         */
        title?: string;
    }
    /**
     * 
     */
    export interface dxTabsOptions<T = dxTabs> extends CollectionWidgetOptions<T> {
        /**
         * Binds the UI component to data.
         */
        dataSource?: string | Array<string | dxTabsItem | any> | DevExpress.data.DataSource | DevExpress.data.DataSourceOptions;
        /**
         * Specifies whether the UI component can be focused using keyboard navigation.
         */
        focusStateEnabled?: boolean;
        /**
         * Specifies whether the UI component changes its state when a user pauses on it.
         */
        hoverStateEnabled?: boolean;
        /**
         * An array of items displayed by the UI component.
         */
        items?: Array<string | dxTabsItem | any>;
        /**
         * Specifies whether to repaint only those elements whose data changed.
         */
        repaintChangesOnly?: boolean;
        /**
         * Specifies whether or not an end-user can scroll tabs by swiping.
         */
        scrollByContent?: boolean;
        /**
         * Specifies whether or not an end-user can scroll tabs.
         */
        scrollingEnabled?: boolean;
        /**
         * An array of currently selected item objects.
         */
        selectedItems?: Array<string | number | any>;
        /**
         * Specifies whether the UI component enables an end-user to select only a single item or multiple items.
         */
        selectionMode?: 'multiple' | 'single';
        /**
         * Specifies whether navigation buttons should be available when tabs exceed the UI component's width.
         */
        showNavButtons?: boolean;
    }
    /**
     * The Tabs is a tab strip used to switch between pages or views. This UI component is included in the TabPanel UI component, but you can use the Tabs separately as well.
     */
    export class dxTabs extends CollectionWidget {
        constructor(element: Element, options?: dxTabsOptions)
        constructor(element: JQuery, options?: dxTabsOptions)
    }
    /**
     * 
     */
    export interface dxTabsItem extends CollectionWidgetItem {
        /**
         * Specifies a badge text for the tab.
         */
        badge?: string;
        /**
         * Specifies the icon to be displayed on the tab.
         */
        icon?: string;
    }
    /**
     * 
     */
    export interface dxTagBoxOptions extends dxSelectBoxOptions<dxTagBox> {
        /**
         * Specifies how the UI component applies values.
         */
        applyValueMode?: 'instantly' | 'useButtons';
        /**
         * A Boolean value specifying whether or not to hide selected items.
         */
        hideSelectedItems?: boolean;
        /**
         * Specifies the limit on displayed tags. On exceeding it, the UI component replaces all tags with a single multi-tag that displays the number of selected items.
         */
        maxDisplayedTags?: number;
        /**
         * A Boolean value specifying whether or not the UI component is multiline.
         */
        multiline?: boolean;
        /**
         * A function that is executed before the multi-tag is rendered.
         */
        onMultiTagPreparing?: ((e: { component?: dxTagBox, element?: DevExpress.core.dxElement, model?: any, multiTagElement?: DevExpress.core.dxElement, selectedItems?: Array<string | number | any>, text?: string, cancel?: boolean }) => any);
        /**
         * A function that is executed when the 'Select All' check box value is changed. Applies only if showSelectionControls is true.
         */
        onSelectAllValueChanged?: ((e: { component?: dxTagBox, element?: DevExpress.core.dxElement, model?: any, value?: boolean }) => any);
        /**
         * A function that is executed when a list item is selected or selection is canceled.
         */
        onSelectionChanged?: ((e: { component?: dxTagBox, element?: DevExpress.core.dxElement, model?: any, addedItems?: Array<string | number | any>, removedItems?: Array<string | number | any> }) => any);
        /**
         * Specifies the mode in which all items are selected.
         */
        selectAllMode?: 'allPages' | 'page';
        /**
         * Gets the currently selected items.
         */
        selectedItems?: Array<string | number | any>;
        /**
         * Specifies whether the drop-down button is visible.
         */
        showDropDownButton?: boolean;
        /**
         * Specifies whether the multi-tag is shown without ordinary tags.
         */
        showMultiTagOnly?: boolean;
        /**
         * Specifies a custom template for tags.
         */
        tagTemplate?: DevExpress.core.template | ((itemData: any, itemElement: DevExpress.core.dxElement) => string | Element | JQuery);
        /**
         * Specifies the selected items.
         */
        value?: Array<string | number | any>;
    }
    /**
     * The TagBox UI component is an editor that allows an end user to select multiple items from a drop-down list.
     */
    export class dxTagBox extends dxSelectBox {
        constructor(element: Element, options?: dxTagBoxOptions)
        constructor(element: JQuery, options?: dxTagBoxOptions)
    }
    /**
     * 
     */
    export interface dxTextAreaOptions extends dxTextBoxOptions<dxTextArea> {
        /**
         * A Boolean value specifying whether or not the auto resizing mode is enabled.
         */
        autoResizeEnabled?: boolean;
        /**
         * Specifies the maximum height of the UI component.
         */
        maxHeight?: number | string;
        /**
         * Specifies the minimum height of the UI component.
         */
        minHeight?: number | string;
        /**
         * Specifies whether or not the UI component checks the inner text for spelling mistakes.
         */
        spellcheck?: boolean;
    }
    /**
     * The TextArea is a UI component that enables a user to enter and edit a multi-line text.
     */
    export class dxTextArea extends dxTextBox {
        constructor(element: Element, options?: dxTextAreaOptions)
        constructor(element: JQuery, options?: dxTextAreaOptions)
    }
    /**
     * 
     */
    export interface dxTextBoxOptions<T = dxTextBox> extends dxTextEditorOptions<T> {
        /**
         * Specifies the maximum number of characters you can enter into the textbox.
         */
        maxLength?: string | number;
        /**
         * The 'mode' attribute value of the actual HTML input element representing the text box.
         */
        mode?: 'email' | 'password' | 'search' | 'tel' | 'text' | 'url';
        /**
         * Specifies a value the UI component displays.
         */
        value?: string;
    }
    /**
     * The TextBox is a UI component that enables a user to enter and edit a single line of text.
     */
    export class dxTextBox extends dxTextEditor {
        constructor(element: Element, options?: dxTextBoxOptions)
        constructor(element: JQuery, options?: dxTextBoxOptions)
    }
    /**
     * 
     */
    export interface dxTextEditorOptions<T = dxTextEditor> extends EditorOptions<T> {
        /**
         * Allows you to add custom buttons to the input text field.
         */
        buttons?: Array<string | 'clear' | dxTextEditorButton>;
        /**
         * Specifies whether the UI component can be focused using keyboard navigation.
         */
        focusStateEnabled?: boolean;
        /**
         * Specifies whether the UI component changes its state when a user pauses on it.
         */
        hoverStateEnabled?: boolean;
        /**
         * Specifies the attributes to be passed on to the underlying HTML element.
         */
        inputAttr?: any;
        /**
         * The editor mask that specifies the custom format of the entered string.
         */
        mask?: string;
        /**
         * Specifies a mask placeholder. A single character is recommended.
         */
        maskChar?: string;
        /**
         * A message displayed when the entered text does not match the specified pattern.
         */
        maskInvalidMessage?: string;
        /**
         * Specifies custom mask rules.
         */
        maskRules?: any;
        /**
         * The value to be assigned to the `name` attribute of the underlying HTML element.
         */
        name?: string;
        /**
         * A function that is executed when the UI component loses focus after the text field's content was changed using the keyboard.
         */
        onChange?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event }) => any);
        /**
         * A function that is executed when the UI component's input has been copied.
         */
        onCopy?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event }) => any);
        /**
         * A function that is executed when the UI component's input has been cut.
         */
        onCut?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event }) => any);
        /**
         * A function that is executed when the Enter key has been pressed while the UI component is focused.
         */
        onEnterKey?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event }) => any);
        /**
         * A function that is executed when the UI component gets focus.
         */
        onFocusIn?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event }) => any);
        /**
         * A function that is executed when the UI component loses focus.
         */
        onFocusOut?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event }) => any);
        /**
         * A function that is executed each time the UI component's input is changed while the UI component is focused.
         */
        onInput?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event }) => any);
        /**
         * A function that is executed when a user is pressing a key on the keyboard.
         */
        onKeyDown?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event }) => any);
        /**
         * A function that is executed when a user presses a key on the keyboard.
         * @deprecated The `keyPress` event is removed from the web standards and will be deprecated in modern browsers soon. Refer to the MDN topic for details.
         */
        onKeyPress?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event }) => any);
        /**
         * A function that is executed when a user releases a key on the keyboard.
         */
        onKeyUp?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event }) => any);
        /**
         * A function that is executed when the UI component's input has been pasted.
         */
        onPaste?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event }) => any);
        /**
         * The text displayed by the UI component when the UI component value is empty.
         */
        placeholder?: string;
        /**
         * Specifies whether to display the Clear button in the UI component.
         */
        showClearButton?: boolean;
        /**
         * Specifies when the UI component shows the mask. Applies only if useMaskedValue is true.
         */
        showMaskMode?: 'always' | 'onFocus';
        /**
         * Specifies whether or not the UI component checks the inner text for spelling mistakes.
         */
        spellcheck?: boolean;
        /**
         * Specifies how the UI component's text field is styled.
         */
        stylingMode?: 'outlined' | 'underlined' | 'filled';
        /**
         * The read-only property that holds the text displayed by the UI component input element.
         */
        text?: string;
        /**
         * Specifies whether the value should contain mask characters or not.
         */
        useMaskedValue?: boolean;
        /**
         * Specifies the current value displayed by the UI component.
         */
        value?: any;
        /**
         * Specifies the DOM events after which the UI component's value should be updated.
         */
        valueChangeEvent?: string;
    }
    /**
     * A base class for text editing UI components.
     */
    export class dxTextEditor extends Editor {
        constructor(element: Element, options?: dxTextEditorOptions)
        constructor(element: JQuery, options?: dxTextEditorOptions)
        /**
         * Removes focus from the input element.
         */
        blur(): void;
        /**
         * Sets focus to the input element representing the UI component.
         */
        focus(): void;
        /**
         * Gets an instance of a custom action button.
         */
        getButton(name: string): dxButton | undefined;
    }
    /**
     * 
     */
    export interface dxTextEditorButton {
        /**
         * Specifies whether to place the button before or after the input text field.
         */
        location?: 'after' | 'before';
        /**
         * Specifies the button's name.
         */
        name?: string;
        /**
         * Configures the Button UI component used as the action button.
         */
        options?: dxButtonOptions;
    }
    /**
     * 
     */
    export interface dxTileViewOptions extends CollectionWidgetOptions<dxTileView> {
        /**
         * A Boolean value specifying whether or not the UI component changes its state when interacting with a user.
         */
        activeStateEnabled?: boolean;
        /**
         * Specifies the height of the base tile view item.
         */
        baseItemHeight?: number;
        /**
         * Specifies the width of the base tile view item.
         */
        baseItemWidth?: number;
        /**
         * Binds the UI component to data.
         */
        dataSource?: string | Array<string | dxTileViewItem | any> | DevExpress.data.DataSource | DevExpress.data.DataSourceOptions;
        /**
         * Specifies whether the UI component is oriented horizontally or vertically.
         */
        direction?: 'horizontal' | 'vertical';
        /**
         * Specifies whether the UI component can be focused using keyboard navigation.
         */
        focusStateEnabled?: boolean;
        /**
         * Specifies the UI component's height.
         */
        height?: number | string | (() => number | string);
        /**
         * Specifies whether the UI component changes its state when a user pauses on it.
         */
        hoverStateEnabled?: boolean;
        /**
         * Specifies the distance in pixels between adjacent tiles.
         */
        itemMargin?: number;
        /**
         * An array of items displayed by the UI component.
         */
        items?: Array<string | dxTileViewItem | any>;
        /**
         * A Boolean value specifying whether or not to display a scrollbar.
         */
        showScrollbar?: boolean;
    }
    /**
     * The TileView UI component contains a collection of tiles. Tiles can store much more information than ordinary buttons, that is why they are very popular in apps designed for touch devices.
     */
    export class dxTileView extends CollectionWidget {
        constructor(element: Element, options?: dxTileViewOptions)
        constructor(element: JQuery, options?: dxTileViewOptions)
        /**
         * Gets the current scroll position.
         */
        scrollPosition(): number;
    }
    /**
     * 
     */
    export interface dxTileViewItem extends CollectionWidgetItem {
        /**
         * Specifies a multiplier for the baseItemHeight property value (for the purpose of obtaining the actual item height).
         */
        heightRatio?: number;
        /**
         * Specifies a multiplier for the baseItemWidth property value (for the purpose of obtaining the actual item width).
         */
        widthRatio?: number;
    }
    /**
     * 
     */
    export interface dxToastOptions extends dxOverlayOptions<dxToast> {
        /**
         * Configures UI component visibility animations. This object contains two fields: show and hide.
         */
        animation?: dxToastAnimation;
        /**
         * A Boolean value specifying whether or not the toast is closed if a user clicks it.
         */
        closeOnClick?: boolean;
        /**
         * 
         */
        closeOnOutsideClick?: boolean | ((event: DevExpress.events.event) => boolean);
        /**
         * A Boolean value specifying whether or not the toast is closed if a user swipes it out of the screen boundaries.
         */
        closeOnSwipe?: boolean;
        /**
         * The time span in milliseconds during which the Toast UI component is visible.
         */
        displayTime?: number;
        /**
         * Specifies the UI component's height in pixels.
         */
        height?: number | string | (() => number | string);
        /**
         * Specifies the maximum width the UI component can reach while resizing.
         */
        maxWidth?: number | string | (() => number | string);
        /**
         * The Toast message text.
         */
        message?: string;
        /**
         * Specifies the minimum width the UI component can reach while resizing.
         */
        minWidth?: number | string | (() => number | string);
        /**
         * Positions the UI component.
         */
        position?: positionConfig | string;
        /**
         * Specifies whether to shade the background when the UI component is active.
         */
        shading?: boolean;
        /**
         * Specifies the Toast UI component type.
         */
        type?: 'custom' | 'error' | 'info' | 'success' | 'warning';
        /**
         * Specifies the UI component's width in pixels.
         */
        width?: number | string | (() => number | string);
    }
    /**
     * Configures UI component visibility animations. This object contains two fields: show and hide.
     */
    export interface dxToastAnimation extends dxOverlayAnimation {
        /**
         * An object that defines the animation properties used when the UI component is being hidden.
         */
        hide?: animationConfig;
        /**
         * An object that defines the animation properties used when the UI component is being shown.
         */
        show?: animationConfig;
    }
    /**
     * The Toast is a UI component that provides pop-up notifications.
     */
    export class dxToast extends dxOverlay {
        constructor(element: Element, options?: dxToastOptions)
        constructor(element: JQuery, options?: dxToastOptions)
    }
    /**
     * 
     */
    export interface dxToolbarOptions extends CollectionWidgetOptions<dxToolbar> {
        /**
         * Binds the UI component to data.
         */
        dataSource?: string | Array<string | dxToolbarItem | any> | DevExpress.data.DataSource | DevExpress.data.DataSourceOptions;
        /**
         * Specifies the UI component's height in pixels.
         * @deprecated 
         */
        height?: number | string | (() => number | string);
        /**
         * An array of items displayed by the UI component.
         */
        items?: Array<string | dxToolbarItem | any>;
        /**
         * Specifies a custom template for menu items.
         */
        menuItemTemplate?: DevExpress.core.template | ((itemData: any, itemIndex: number, itemElement: DevExpress.core.dxElement) => string | Element | JQuery);
    }
    /**
     * The Toolbar is a UI component containing items that usually manage screen content. Those items can be plain text or UI components.
     */
    export class dxToolbar extends CollectionWidget {
        constructor(element: Element, options?: dxToolbarOptions)
        constructor(element: JQuery, options?: dxToolbarOptions)
    }
    /**
     * 
     */
    export interface dxToolbarItem extends CollectionWidgetItem {
        /**
         * Specifies a CSS class to be applied to the item.
         */
        cssClass?: string;
        /**
         * Specifies when to display an item in the toolbar's overflow menu.
         */
        locateInMenu?: 'always' | 'auto' | 'never';
        /**
         * Specifies a location for the item on the toolbar.
         */
        location?: 'after' | 'before' | 'center';
        /**
         * Specifies a template that should be used to render a menu item.
         */
        menuItemTemplate?: DevExpress.core.template | (() => string | Element | JQuery);
        /**
         * Configures the DevExtreme UI component used as a toolbar item.
         */
        options?: any;
        /**
         * Specifies when to display the text for the UI component item.
         */
        showText?: 'always' | 'inMenu';
        /**
         * A UI component that presents a toolbar item. To configure it, use the options object.
         */
        widget?: 'dxAutocomplete' | 'dxButton' | 'dxCheckBox' | 'dxDateBox' | 'dxMenu' | 'dxSelectBox' | 'dxTabs' | 'dxTextBox' | 'dxButtonGroup' | 'dxDropDownButton';
    }
    /**
     * 
     */
    export interface dxTooltipOptions extends dxPopoverOptions<dxTooltip> {
    }
    /**
     * The Tooltip UI component displays a tooltip for a specified element on the page.
     */
    export class dxTooltip extends dxPopover {
        constructor(element: Element, options?: dxTooltipOptions)
        constructor(element: JQuery, options?: dxTooltipOptions)
    }
    /**
     * 
     */
    export interface dxTrackBarOptions<T = dxTrackBar> extends EditorOptions<T> {
        /**
         * The maximum value the UI component can accept.
         */
        max?: number;
        /**
         * The minimum value the UI component can accept.
         */
        min?: number;
    }
    /**
     * A base class for track bar UI components.
     */
    export class dxTrackBar extends Editor {
        constructor(element: Element, options?: dxTrackBarOptions)
        constructor(element: JQuery, options?: dxTrackBarOptions)
    }
    /**
     * 
     */
    export interface dxTreeListOptions extends GridBaseOptions<dxTreeList> {
        /**
         * Specifies whether all rows are expanded initially.
         */
        autoExpandAll?: boolean;
        /**
         * Configures columns.
         */
        columns?: Array<dxTreeListColumn | string>;
        /**
         * Customizes columns after they are created.
         */
        customizeColumns?: ((columns: Array<dxTreeListColumn>) => any);
        /**
         * Notifies the UI component of the used data structure.
         */
        dataStructure?: 'plain' | 'tree';
        /**
         * Configures editing.
         */
        editing?: dxTreeListEditing;
        /**
         * Specifies whether nodes appear expanded or collapsed after filtering is applied.
         */
        expandNodesOnFiltering?: boolean;
        /**
         * Specifies keys of the initially expanded rows.
         */
        expandedRowKeys?: Array<any>;
        /**
         * Specifies whether filter and search results should include matching rows only, matching rows with ancestors, or matching rows with ancestors and descendants (full branch).
         */
        filterMode?: 'fullBranch' | 'withAncestors' | 'matchOnly';
        /**
         * Specifies which data field defines whether the node has children.
         */
        hasItemsExpr?: string | Function;
        /**
         * Specifies which data field contains nested items. Set this property when your data has a hierarchical structure.
         */
        itemsExpr?: string | Function;
        /**
         * Specifies the key property (or properties) that provide(s) key values to access data items. Each key value must be unique.
         */
        keyExpr?: string | Function;
        /**
         * A function that is executed when a cell is clicked or tapped. Executed before onRowClick.
         */
        onCellClick?: ((e: { component?: dxTreeList, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, data?: any, key?: any, value?: any, displayValue?: any, text?: string, columnIndex?: number, column?: any, rowIndex?: number, rowType?: string, cellElement?: DevExpress.core.dxElement, row?: dxTreeListRowObject }) => any) | string;
        /**
         * A function that is executed when a cell is double-clicked or double-tapped. Executed before onRowDblClick.
         */
        onCellDblClick?: ((e: { component?: dxTreeList, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, data?: any, key?: any, value?: any, displayValue?: any, text?: string, columnIndex?: number, column?: dxTreeListColumn, rowIndex?: number, rowType?: string, cellElement?: DevExpress.core.dxElement, row?: dxTreeListRowObject }) => any);
        /**
         * A function that is executed after the pointer enters or leaves a cell.
         */
        onCellHoverChanged?: ((e: { component?: dxTreeList, element?: DevExpress.core.dxElement, model?: any, eventType?: string, data?: any, key?: any, value?: any, text?: string, displayValue?: any, columnIndex?: number, rowIndex?: number, column?: dxTreeListColumn, rowType?: string, cellElement?: DevExpress.core.dxElement, row?: dxTreeListRowObject }) => any);
        /**
         * 
         */
        onCellPrepared?: ((e: { component?: dxTreeList, element?: DevExpress.core.dxElement, model?: any, data?: any, key?: any, value?: any, displayValue?: any, text?: string, columnIndex?: number, column?: dxTreeListColumn, rowIndex?: number, rowType?: string, row?: dxTreeListRowObject, isSelected?: boolean, isExpanded?: boolean, isNewRow?: boolean, cellElement?: DevExpress.core.dxElement, watch?: Function, oldValue?: any }) => any);
        /**
         * A function that is executed before the context menu is rendered.
         */
        onContextMenuPreparing?: ((e: { component?: dxTreeList, element?: DevExpress.core.dxElement, model?: any, items?: Array<any>, target?: string, targetElement?: DevExpress.core.dxElement, columnIndex?: number, column?: dxTreeListColumn, rowIndex?: number, row?: dxTreeListRowObject }) => any);
        /**
         * A function that is executed before a cell or row switches to the editing state.
         */
        onEditingStart?: ((e: { component?: dxTreeList, element?: DevExpress.core.dxElement, model?: any, data?: any, key?: any, cancel?: boolean, column?: any }) => any);
        /**
         * A function that is executed after an editor is created. Not executed for cells with an editCellTemplate.
         */
        onEditorPrepared?: ((options: { component?: dxTreeList, element?: DevExpress.core.dxElement, model?: any, parentType?: string, value?: any, setValue?: any, updateValueTimeout?: number, width?: number, disabled?: boolean, rtlEnabled?: boolean, editorElement?: DevExpress.core.dxElement, readOnly?: boolean, dataField?: string, row?: dxTreeListRowObject }) => any);
        /**
         * 
         */
        onEditorPreparing?: ((e: { component?: dxTreeList, element?: DevExpress.core.dxElement, model?: any, parentType?: string, value?: any, setValue?: any, updateValueTimeout?: number, width?: number, disabled?: boolean, rtlEnabled?: boolean, cancel?: boolean, editorElement?: DevExpress.core.dxElement, readOnly?: boolean, editorName?: string, editorOptions?: any, dataField?: string, row?: dxTreeListRowObject }) => any);
        /**
         * A function that is executed after the focused cell changes. Applies only to cells in data rows.
         */
        onFocusedCellChanged?: ((e: { component?: dxTreeList, element?: DevExpress.core.dxElement, model?: any, cellElement?: DevExpress.core.dxElement, columnIndex?: number, rowIndex?: number, row?: dxTreeListRowObject, column?: dxTreeListColumn }) => any);
        /**
         * A function that is executed before the focused cell changes. Applies only to cells in data rows.
         */
        onFocusedCellChanging?: ((e: { component?: dxTreeList, element?: DevExpress.core.dxElement, model?: any, cellElement?: DevExpress.core.dxElement, prevColumnIndex?: number, prevRowIndex?: number, newColumnIndex?: number, newRowIndex?: number, event?: DevExpress.events.event, rows?: Array<dxTreeListRowObject>, columns?: Array<dxTreeListColumn>, cancel?: boolean, isHighlighted?: boolean }) => any);
        /**
         * A function that executed when the focused row changes. Applies only to data rows. focusedRowEnabled should be true.
         */
        onFocusedRowChanged?: ((e: { component?: dxTreeList, element?: DevExpress.core.dxElement, model?: any, rowElement?: DevExpress.core.dxElement, rowIndex?: number, row?: dxTreeListRowObject }) => any);
        /**
         * A function that is executed before the focused row changes. Applies only to data rows. focusedRowEnabled should be true.
         */
        onFocusedRowChanging?: ((e: { component?: dxTreeList, element?: DevExpress.core.dxElement, model?: any, rowElement?: DevExpress.core.dxElement, prevRowIndex?: number, newRowIndex?: number, event?: DevExpress.events.event, rows?: Array<dxTreeListRowObject>, cancel?: boolean }) => any);
        /**
         * A function that is executed after the loaded nodes are initialized.
         */
        onNodesInitialized?: ((e: { component?: dxTreeList, element?: DevExpress.core.dxElement, model?: any, root?: dxTreeListNode }) => any);
        /**
         * A function that is executed when a grid row is clicked or tapped.
         */
        onRowClick?: ((e: { component?: dxTreeList, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, data?: any, key?: any, values?: Array<any>, columns?: Array<any>, rowIndex?: number, rowType?: string, isSelected?: boolean, isExpanded?: boolean, isNewRow?: boolean, rowElement?: DevExpress.core.dxElement, handled?: boolean, node?: dxTreeListNode, level?: number }) => any) | string;
        /**
         * A function that is executed when a row is double-clicked or double-tapped. Executed after onCellDblClick.
         */
        onRowDblClick?: ((e: { component?: dxTreeList, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, data?: any, key?: any, values?: Array<any>, columns?: Array<dxTreeListColumn>, rowIndex?: number, rowType?: string, isSelected?: boolean, isExpanded?: boolean, isNewRow?: boolean, rowElement?: DevExpress.core.dxElement }) => any);
        /**
         * A function that is executed after a row is created.
         */
        onRowPrepared?: ((e: { component?: dxTreeList, element?: DevExpress.core.dxElement, model?: any, data?: any, key?: any, values?: Array<any>, columns?: Array<dxTreeListColumn>, rowIndex?: number, rowType?: string, isSelected?: boolean, isExpanded?: boolean, isNewRow?: boolean, rowElement?: DevExpress.core.dxElement, node?: dxTreeListNode, level?: number }) => any);
        /**
         * Configures paging.
         */
        paging?: dxTreeListPaging;
        /**
         * Specifies which data field provides parent keys.
         */
        parentIdExpr?: string | Function;
        /**
         * Notifies the TreeList of the server's data processing operations. Applies only if data has a plain structure.
         */
        remoteOperations?: { filtering?: boolean, grouping?: boolean, sorting?: boolean } | 'auto';
        /**
         * Specifies the root node's identifier. Applies if dataStructure is 'plain'.
         */
        rootValue?: any;
        /**
         * Configures scrolling.
         */
        scrolling?: dxTreeListScrolling;
        /**
         * Configures runtime selection.
         */
        selection?: dxTreeListSelection;
    }
    /**
     * Configures editing.
     */
    export interface dxTreeListEditing extends GridBaseEditing {
        /**
         * Specifies whether a user can add new rows. It is called for each data row when defined as a function.
         */
        allowAdding?: boolean | ((options: { component?: dxTreeList, row?: dxTreeListRowObject }) => boolean);
        /**
         * Specifies whether a user can delete rows. It is called for each data row when defined as a function.
         */
        allowDeleting?: boolean | ((options: { component?: dxTreeList, row?: dxTreeListRowObject }) => boolean);
        /**
         * Specifies whether a user can update rows. It is called for each data row when defined as a function
         */
        allowUpdating?: boolean | ((options: { component?: dxTreeList, row?: dxTreeListRowObject }) => boolean);
        /**
         * Contains properties that specify texts for editing-related UI elements.
         */
        texts?: dxTreeListEditingTexts;
    }
    /**
     * Contains properties that specify texts for editing-related UI elements.
     */
    export interface dxTreeListEditingTexts extends GridBaseEditingTexts {
        /**
         * Specifies text for the button that adds a new nested row. Applies if the editing.mode is 'batch' or 'cell'.
         */
        addRowToNode?: string;
    }
    /**
     * Configures paging.
     */
    export interface dxTreeListPaging extends GridBasePaging {
        /**
         * Enables paging.
         */
        enabled?: boolean;
    }
    /**
     * Configures scrolling.
     */
    export interface dxTreeListScrolling extends GridBaseScrolling {
        /**
         * Specifies the scrolling mode.
         */
        mode?: 'standard' | 'virtual';
    }
    /**
     * Configures runtime selection.
     */
    export interface dxTreeListSelection extends GridBaseSelection {
        /**
         * Specifies whether selection is recursive.
         */
        recursive?: boolean;
    }
    /**
     * The TreeList is a UI component that represents data from a local or remote source in the form of a multi-column tree view. This UI component offers such features as sorting, filtering, editing, selection, etc.
     */
    export class dxTreeList extends GridBase {
        constructor(element: Element, options?: dxTreeListOptions)
        constructor(element: JQuery, options?: dxTreeListOptions)
        /**
         * Adds a new column.
         */
        addColumn(columnOptions: any | string): void;
        /**
         * Adds an empty data row to the highest hierarchical level and switches it to the editing state.
         */
        addRow(): Promise<void> & JQueryPromise<void>;
        /**
         * Adds an empty data row to a specified parent row.
         */
        addRow(parentId: any): Promise<void> & JQueryPromise<void>;
        /**
         * Collapses a row with a specific key.
         */
        collapseRow(key: any): Promise<void> & JQueryPromise<void>;
        /**
         * Expands a row with a specific key.
         */
        expandRow(key: any): Promise<void> & JQueryPromise<void>;
        /**
         * Performs a pre-order tree traversal, executing a function on each visited node. Starts traversing from the top level nodes.
         */
        forEachNode(callback: Function): void;
        /**
         * Performs a pre-order tree traversal, executing a function on each visited node. Starts traversing from the specified nodes.
         */
        forEachNode(nodes: Array<dxTreeListNode>, callback: Function): void;
        /**
         * Gets a node with a specific key.
         */
        getNodeByKey(key: any | string | number): dxTreeListNode;
        /**
         * Gets the root node.
         */
        getRootNode(): dxTreeListNode;
        /**
         * Gets the keys of the rows selected explicitly via the API or via a click or tap.
         */
        getSelectedRowKeys(): Array<any>;
        /**
         * Gets the selected rows' keys.
         */
        getSelectedRowKeys(mode: string): Array<any>;
        /**
         * Gets the data objects of the rows selected explicitly via the API or via a click or tap.
         */
        getSelectedRowsData(): Array<any>;
        /**
         * Gets the selected rows' data objects.
         */
        getSelectedRowsData(mode: string): Array<any>;
        /**
         * Gets all visible columns.
         */
        getVisibleColumns(): Array<dxTreeListColumn>;
        /**
         * Gets all visible columns at a specific hierarchical level of column headers. Use it to access banded columns.
         */
        getVisibleColumns(headerLevel: number): Array<dxTreeListColumn>;
        /**
         * Gets currently rendered rows.
         */
        getVisibleRows(): Array<dxTreeListRowObject>;
        /**
         * Checks whether a row is expanded or collapsed.
         */
        isRowExpanded(key: any): boolean;
        /**
         * Loads all root node descendants (all data items). Takes effect only if data has the plain structure and remoteOperations | filtering is true.
         */
        loadDescendants(): Promise<void> & JQueryPromise<void>;
        /**
         * Loads a specific node's descendants. Takes effect only if data has the plain structure and remoteOperations | filtering is true.
         */
        loadDescendants(keys: Array<any>): Promise<void> & JQueryPromise<void>;
        /**
         * Loads all or only direct descendants of specific nodes. Takes effect only if data has the plain structure and remoteOperations | filtering is true.
         */
        loadDescendants(keys: Array<any>, childrenOnly: boolean): Promise<void> & JQueryPromise<void>;
    }
    /**
     * 
     */
    export interface dxTreeListColumn extends GridBaseColumn {
        /**
         * Allows you to customize buttons in the edit column or create a custom command column. Applies only if the column's type is 'buttons'.
         */
        buttons?: Array<'add' | 'cancel' | 'delete' | 'edit' | 'save' | 'undelete' | dxTreeListColumnButton>;
        /**
         * Specifies a custom template for data cells.
         */
        cellTemplate?: DevExpress.core.template | ((cellElement: DevExpress.core.dxElement, cellInfo: { data?: any, component?: dxTreeList, value?: any, oldValue?: any, displayValue?: any, text?: string, columnIndex?: number, rowIndex?: number, column?: dxTreeListColumn, row?: dxTreeListRowObject, rowType?: string, watch?: Function }) => any);
        /**
         * Configures columns.
         */
        columns?: Array<dxTreeListColumn | string>;
        /**
         * Specifies a custom template for data cells in editing state.
         */
        editCellTemplate?: DevExpress.core.template | ((cellElement: DevExpress.core.dxElement, cellInfo: { setValue?: any, data?: any, component?: dxTreeList, value?: any, displayValue?: any, text?: string, columnIndex?: number, rowIndex?: number, column?: dxTreeListColumn, row?: dxTreeListRowObject, rowType?: string, watch?: Function }) => any);
        /**
         * Specifies a custom template for column headers.
         */
        headerCellTemplate?: DevExpress.core.template | ((columnHeader: DevExpress.core.dxElement, headerInfo: { component?: dxTreeList, columnIndex?: number, column?: dxTreeListColumn }) => any);
        /**
         * Specifies the command column that this object customizes.
         */
        type?: 'adaptive' | 'buttons' | 'drag';
    }
    /**
     * Allows you to customize buttons in the edit column or create a custom command column. Applies only if the column's type is 'buttons'.
     */
    export interface dxTreeListColumnButton extends GridBaseColumnButton {
        /**
         * 
         */
        name?: 'add' | 'cancel' | 'delete' | 'edit' | 'save' | 'undelete' | string;
        /**
         * A function that is executed when the button is clicked or tapped. Not executed if a template is used.
         */
        onClick?: ((e: { component?: dxTreeList, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, row?: dxTreeListRowObject, column?: dxTreeListColumn }) => any) | string;
        /**
         * Specifies a custom button template.
         */
        template?: DevExpress.core.template | ((cellElement: DevExpress.core.dxElement, cellInfo: { component?: dxTreeList, data?: any, key?: any, columnIndex?: number, column?: dxTreeListColumn, rowIndex?: number, rowType?: string, row?: dxTreeListRowObject }) => string | Element | JQuery);
        /**
         * 
         */
        visible?: boolean | ((options: { component?: dxTreeList, row?: dxTreeListRowObject, column?: dxTreeListColumn }) => boolean);
    }
    /**
     * A TreeList node's structure.
     */
    export interface dxTreeListNode {
        /**
         * Contains all child nodes.
         */
        children?: Array<dxTreeListNode>;
        /**
         * The node's data object.
         */
        data?: any;
        /**
         * Indicates whether the node has child nodes.
         */
        hasChildren?: boolean;
        /**
         * The node's key.
         */
        key?: any;
        /**
         * The node's hierarchical level.
         */
        level?: number;
        /**
         * The parent node.
         */
        parent?: dxTreeListNode;
        /**
         * Indicates whether the node is visualized as a row.
         */
        visible?: boolean;
    }
    /**
     * A grid row.
     */
    export interface dxTreeListRowObject {
        /**
         * Indicates whether the row is in the editing state.
         */
        isEditing?: boolean;
        /**
         * Indicates whether the row is expanded or collapsed. Available if rowType is 'data' or 'detail'.
         */
        isExpanded?: boolean;
        /**
         * Indicates that the row is added, but not yet saved. Available if rowType is 'data'.
         */
        isNewRow?: boolean;
        /**
         * Indicates whether the row is selected. Available if rowType is 'data' or 'detail'.
         */
        isSelected?: boolean;
        /**
         * The row's key. Available if rowType is 'data', 'detail' or 'detailAdaptive'.
         */
        key?: any;
        /**
         * The row's hierarchical level. Available if rowType is 'data' or 'detail'.
         */
        level?: number;
        /**
         * The row's node. Available if rowType is 'data' or 'detail'.
         */
        node?: dxTreeListNode;
        /**
         * The row's visible index. This index is zero-based and available if rowType is 'data', 'detail' or 'detailAdaptive'.
         */
        rowIndex?: number;
        /**
         * The row's type.
         */
        rowType?: string;
        /**
         * Values displayed in the row's cells.
         */
        values?: Array<any>;
    }
    /**
     * 
     */
    export interface dxTreeViewOptions extends HierarchicalCollectionWidgetOptions<dxTreeView>, SearchBoxMixinOptions<dxTreeView> {
        /**
         * Specifies whether or not to animate item collapsing and expanding.
         */
        animationEnabled?: boolean;
        /**
         * Allows you to load nodes on demand.
         */
        createChildren?: ((parentNode: dxTreeViewNode) => Promise<any> | JQueryPromise<any> | Array<any>);
        /**
         * Binds the UI component to data.
         */
        dataSource?: string | Array<dxTreeViewItem> | DevExpress.data.DataSource | DevExpress.data.DataSourceOptions;
        /**
         * Notifies the UI component of the used data structure.
         */
        dataStructure?: 'plain' | 'tree';
        /**
         * Specifies whether or not a user can expand all tree view items by the '*' hot key.
         */
        expandAllEnabled?: boolean;
        /**
         * Specifies the event on which to expand/collapse a node.
         */
        expandEvent?: 'dblclick' | 'click';
        /**
         * Specifies whether or not all parent nodes of an initially expanded node are displayed expanded.
         */
        expandNodesRecursive?: boolean;
        /**
         * Specifies which data source field specifies whether an item is expanded.
         */
        expandedExpr?: string | Function;
        /**
         * Specifies the name of the data source item field whose value defines whether or not the corresponding node includes child nodes.
         */
        hasItemsExpr?: string | Function;
        /**
         * An array of items displayed by the UI component.
         */
        items?: Array<dxTreeViewItem>;
        /**
         * A function that is executed when a collection item is clicked or tapped.
         */
        onItemClick?: ((e: { component?: dxTreeView, element?: DevExpress.core.dxElement, model?: any, itemData?: any, itemElement?: DevExpress.core.dxElement, itemIndex?: number | any, event?: DevExpress.events.event, node?: dxTreeViewNode }) => any);
        /**
         * A function that is executed when a tree view item is collapsed.
         */
        onItemCollapsed?: ((e: { component?: dxTreeView, element?: DevExpress.core.dxElement, model?: any, itemData?: any, itemElement?: DevExpress.core.dxElement, itemIndex?: number, event?: DevExpress.events.event, node?: dxTreeViewNode }) => any);
        /**
         * A function that is executed when a collection item is right-clicked or pressed.
         */
        onItemContextMenu?: ((e: { component?: dxTreeView, element?: DevExpress.core.dxElement, model?: any, itemData?: any, itemElement?: DevExpress.core.dxElement, itemIndex?: number | any, event?: DevExpress.events.event, node?: dxTreeViewNode }) => any);
        /**
         * A function that is executed when a tree view item is expanded.
         */
        onItemExpanded?: ((e: { component?: dxTreeView, element?: DevExpress.core.dxElement, model?: any, itemData?: any, itemElement?: DevExpress.core.dxElement, itemIndex?: number, event?: DevExpress.events.event, node?: dxTreeViewNode }) => any);
        /**
         * A function that is executed when a collection item has been held for a specified period.
         */
        onItemHold?: ((e: { component?: dxTreeView, element?: DevExpress.core.dxElement, model?: any, itemData?: any, itemElement?: DevExpress.core.dxElement, itemIndex?: number, event?: DevExpress.events.event, node?: dxTreeViewNode }) => any);
        /**
         * A function that is executed after a collection item is rendered.
         */
        onItemRendered?: ((e: { component?: dxTreeView, element?: DevExpress.core.dxElement, model?: any, itemData?: any, itemElement?: DevExpress.core.dxElement, itemIndex?: number, node?: dxTreeViewNode }) => any);
        /**
         * A function that is executed when a single TreeView item is selected or selection is canceled.
         */
        onItemSelectionChanged?: ((e: { component?: dxTreeView, element?: DevExpress.core.dxElement, model?: any, node?: dxTreeViewNode, itemElement?: DevExpress.core.dxElement, itemData?: any, itemIndex?: number }) => any);
        /**
         * A function that is executed when the 'Select All' check box value is changed. Applies only if showCheckBoxesMode is 'selectAll' and selectionMode is 'multiple'.
         */
        onSelectAllValueChanged?: ((e: { component?: dxTreeView, element?: DevExpress.core.dxElement, model?: any, value?: boolean | undefined }) => any);
        /**
         * A function that is executed when a TreeView item is selected or selection is canceled.
         */
        onSelectionChanged?: ((e: { component?: dxTreeView, element?: DevExpress.core.dxElement, model?: any }) => any);
        /**
         * Specifies the name of the data source item field for holding the parent key of the corresponding node.
         */
        parentIdExpr?: string | Function;
        /**
         * Specifies the parent ID value of the root item.
         */
        rootValue?: any;
        /**
         * A string value specifying available scrolling directions.
         */
        scrollDirection?: 'both' | 'horizontal' | 'vertical';
        /**
         * Specifies the text displayed at the 'Select All' check box.
         */
        selectAllText?: string;
        /**
         * Specifies whether an item becomes selected if a user clicks it.
         */
        selectByClick?: boolean;
        /**
         * Specifies whether all child nodes should be selected when their parent node is selected. Applies only if the selectionMode is 'multiple'.
         */
        selectNodesRecursive?: boolean;
        /**
         * Specifies item selection mode. Applies only if selection is enabled.
         */
        selectionMode?: 'multiple' | 'single';
        /**
         * Specifies the checkbox display mode.
         */
        showCheckBoxesMode?: 'none' | 'normal' | 'selectAll';
        /**
         * Enables the virtual mode in which nodes are loaded on demand. Use it to enhance the performance on large datasets.
         */
        virtualModeEnabled?: boolean;
    }
    /**
     * The TreeView UI component is a tree-like representation of textual data.
     */
    export class dxTreeView extends HierarchicalCollectionWidget {
        constructor(element: Element, options?: dxTreeViewOptions)
        constructor(element: JQuery, options?: dxTreeViewOptions)
        /**
         * Collapses all items.
         */
        collapseAll(): void;
        /**
         * Collapses an item with a specific key.
         */
        collapseItem(itemData: any): Promise<void> & JQueryPromise<void>;
        /**
         * Collapses an item found using its DOM node.
         */
        collapseItem(itemElement: Element): Promise<void> & JQueryPromise<void>;
        /**
         * Collapses an item with a specific key.
         */
        collapseItem(key: any): Promise<void> & JQueryPromise<void>;
        /**
         * Expands all items. If you load items on demand, this method expands only the loaded items.
         */
        expandAll(): void;
        /**
         * Expands an item found using its data object.
         */
        expandItem(itemData: any): Promise<void> & JQueryPromise<void>;
        /**
         * Expands an item found using its DOM node.
         */
        expandItem(itemElement: Element): Promise<void> & JQueryPromise<void>;
        /**
         * Expands an item with a specific key.
         */
        expandItem(key: any): Promise<void> & JQueryPromise<void>;
        /**
         * Gets all nodes.
         */
        getNodes(): Array<dxTreeViewNode>;
        /**
         * Gets the keys of selected nodes.
         */
        getSelectedNodeKeys(): Array<any>;
        /**
         * Gets selected nodes.
         */
        getSelectedNodes(): Array<dxTreeViewNode>;
        /**
         * Scrolls the content to an item found using its data.
         */
        scrollToItem(itemData: any): Promise<void> & JQueryPromise<void>;
        /**
         * Scrolls the content to an item found using its DOM node.
         */
        scrollToItem(itemElement: Element): Promise<void> & JQueryPromise<void>;
        /**
         * Scrolls the content to an item found using its key.
         */
        scrollToItem(key: any): Promise<void> & JQueryPromise<void>;
        /**
         * Selects all nodes.
         */
        selectAll(): void;
        /**
         * Selects a node found using its data object.
         */
        selectItem(itemData: any): boolean;
        /**
         * Selects a TreeView node found using its DOM node.
         */
        selectItem(itemElement: Element): boolean;
        /**
         * Selects a node with a specific key.
         */
        selectItem(key: any): boolean;
        /**
         * Cancels the selection of all nodes.
         */
        unselectAll(): void;
        /**
         * Cancels the selection of a node found using its data object.
         */
        unselectItem(itemData: any): boolean;
        /**
         * Cancels the selection of a TreeView node found using its DOM node.
         */
        unselectItem(itemElement: Element): boolean;
        /**
         * Cancels the selection of a node with a specific key.
         */
        unselectItem(key: any): boolean;
        /**
         * Updates the tree view scrollbars according to the current size of the UI component content.
         */
        updateDimensions(): Promise<void> & JQueryPromise<void>;
    }
    /**
     * 
     */
    export interface dxTreeViewItem extends CollectionWidgetItem {
        /**
         * Specifies whether or not the tree view item is displayed expanded.
         */
        expanded?: boolean;
        /**
         * Specifies whether or not the tree view item has children.
         */
        hasItems?: boolean;
        /**
         * Specifies the tree view item's icon.
         */
        icon?: string;
        /**
         * Specifies nested tree view items.
         */
        items?: Array<dxTreeViewItem>;
        /**
         * Holds the key of the parent item.
         */
        parentId?: number | string;
        /**
         * Specifies whether the TreeView item should be displayed as selected.
         */
        selected?: boolean;
    }
    /**
     * A TreeView node.
     */
    export interface dxTreeViewNode {
        /**
         * Contains all the child nodes of the current node.
         */
        children?: Array<dxTreeViewNode>;
        /**
         * Equals to true if the node is disabled; otherwise false.
         */
        disabled?: boolean;
        /**
         * Equals true if the node is expanded; false if collapsed.
         */
        expanded?: boolean;
        /**
         * Contains the data source object corresponding to the node.
         */
        itemData?: any;
        /**
         * Contains the key value of the node.
         */
        key?: any;
        /**
         * Refers to the parent node of the current node.
         */
        parent?: dxTreeViewNode;
        /**
         * Equals to true if the node is selected; false if not.
         */
        selected?: boolean;
        /**
         * Contains the text displayed by the node.
         */
        text?: string;
    }
    /**
     * 
     */
    export interface dxValidationGroupOptions extends DOMComponentOptions<dxValidationGroup> {
    }
    /**
     * The ValidationGroup is a UI component that allows you to validate several editors simultaneously.
     */
    export class dxValidationGroup extends DOMComponent {
        constructor(element: Element, options?: dxValidationGroupOptions)
        constructor(element: JQuery, options?: dxValidationGroupOptions)
        /**
         * Resets the value and validation result of the editors that are included to the current validation group.
         */
        reset(): void;
        /**
         * Validates rules of the validators that belong to the current validation group.
         */
        validate(): dxValidationGroupResult;
    }
    /**
     * A group validation result.
     */
    export interface dxValidationGroupResult {
        /**
         * An array of the validation rules that failed.
         */
        brokenRules?: Array<RequiredRule | NumericRule | RangeRule | StringLengthRule | CustomRule | CompareRule | PatternRule | EmailRule | AsyncRule>;
        /**
         * A promise that is fulfilled when all async rules are validated.
         */
        complete?: Promise<dxValidationGroupResult> | JQueryPromise<dxValidationGroupResult>;
        /**
         * Indicates whether all the rules checked for the group are satisfied.
         */
        isValid?: boolean;
        /**
         * Indicates the validation status.
         */
        status?: 'valid' | 'invalid' | 'pending';
        /**
         * Validator UI components included in the validated group.
         */
        validators?: Array<any>;
    }
    /**
     * 
     */
    export interface dxValidationSummaryOptions extends CollectionWidgetOptions<dxValidationSummary> {
        /**
         * Specifies the validation group for which summary should be generated.
         */
        validationGroup?: string;
    }
    /**
     * A UI component for displaying the result of checking validation rules for editors.
     */
    export class dxValidationSummary extends CollectionWidget {
        constructor(element: Element, options?: dxValidationSummaryOptions)
        constructor(element: JQuery, options?: dxValidationSummaryOptions)
    }
    /**
     * 
     */
    export interface dxValidatorOptions extends DOMComponentOptions<dxValidator> {
        /**
         * An object that specifies what and when to validate, and how to apply the validation result.
         */
        adapter?: { applyValidationResults?: Function, bypass?: Function, focus?: Function, getValue?: Function, reset?: Function, validationRequestsCallbacks?: Array<Function> };
        /**
         * Specifies the editor name to be used in the validation default messages.
         */
        name?: string;
        /**
         * A function that is executed after a value is validated.
         */
        onValidated?: ((validatedInfo: { name?: string, isValid?: boolean, value?: any, validationRules?: Array<RequiredRule | NumericRule | RangeRule | StringLengthRule | CustomRule | CompareRule | PatternRule | EmailRule | AsyncRule>, brokenRule?: RequiredRule | NumericRule | RangeRule | StringLengthRule | CustomRule | CompareRule | PatternRule | EmailRule | AsyncRule, brokenRules?: Array<RequiredRule | NumericRule | RangeRule | StringLengthRule | CustomRule | CompareRule | PatternRule | EmailRule | AsyncRule>, status?: 'valid' | 'invalid' | 'pending' }) => any);
        /**
         * Specifies the validation group the editor will be related to.
         */
        validationGroup?: string;
        /**
         * An array of validation rules to be checked for the editor with which the dxValidator object is associated.
         */
        validationRules?: Array<RequiredRule | NumericRule | RangeRule | StringLengthRule | CustomRule | CompareRule | PatternRule | EmailRule | AsyncRule>;
    }
    /**
     * A UI component that is used to validate the associated DevExtreme editors against the defined validation rules.
     */
    export class dxValidator extends DOMComponent {
        constructor(element: Element, options?: dxValidatorOptions)
        constructor(element: JQuery, options?: dxValidatorOptions)
        /**
         * Sets focus to the editor associated with the current Validator object.
         */
        focus(): void;
        /**
         * Resets the value and validation result of the editor associated with the current Validator object.
         */
        reset(): void;
        /**
         * Validates the value of the editor that is controlled by the current Validator object against the list of the specified validation rules.
         */
        validate(): dxValidatorResult;
    }
    /**
     * A validation result.
     */
    export interface dxValidatorResult {
        /**
         * A rule that failed to pass the check. Contains the first item from the brokenRules array.
         */
        brokenRule?: RequiredRule | NumericRule | RangeRule | StringLengthRule | CustomRule | CompareRule | PatternRule | EmailRule | AsyncRule;
        /**
         * An array of the validationRules that failed to pass the check.
         */
        brokenRules?: Array<RequiredRule | NumericRule | RangeRule | StringLengthRule | CustomRule | CompareRule | PatternRule | EmailRule | AsyncRule>;
        /**
         * A promise that is fulfilled when all async rules are validated.
         */
        complete?: Promise<dxValidatorResult> | JQueryPromise<dxValidatorResult>;
        /**
         * Indicates whether all the checked rules are satisfied.
         */
        isValid?: boolean;
        /**
         * An array of async rules whose promises are not fulfilled or rejected. Contains items only when the status is 'pending'.
         */
        pendingRules?: Array<AsyncRule>;
        /**
         * Indicates the validation status.
         */
        status?: 'valid' | 'invalid' | 'pending';
        /**
         * Validation rules specified for the Validator.
         */
        validationRules?: Array<RequiredRule | NumericRule | RangeRule | StringLengthRule | CustomRule | CompareRule | PatternRule | EmailRule | AsyncRule>;
        /**
         * The value being validated.
         */
        value?: any;
    }
    /**
     * Formats values.
     */
    export type format = 'billions' | 'currency' | 'day' | 'decimal' | 'exponential' | 'fixedPoint' | 'largeNumber' | 'longDate' | 'longTime' | 'millions' | 'millisecond' | 'month' | 'monthAndDay' | 'monthAndYear' | 'percent' | 'quarter' | 'quarterAndYear' | 'shortDate' | 'shortTime' | 'thousands' | 'trillions' | 'year' | 'dayOfWeek' | 'hour' | 'longDateLongTime' | 'minute' | 'second' | 'shortDateShortTime' | string | ((value: number | Date) => string) | { currency?: string, formatter?: ((value: number | Date) => string), parser?: ((value: string) => number | Date), precision?: number, type?: 'billions' | 'currency' | 'day' | 'decimal' | 'exponential' | 'fixedPoint' | 'largeNumber' | 'longDate' | 'longTime' | 'millions' | 'millisecond' | 'month' | 'monthAndDay' | 'monthAndYear' | 'percent' | 'quarter' | 'quarterAndYear' | 'shortDate' | 'shortTime' | 'thousands' | 'trillions' | 'year' | 'dayOfWeek' | 'hour' | 'longDateLongTime' | 'minute' | 'second' | 'shortDateShortTime' };
    /**
     * 
     * @deprecated 
     */
    export type template = DevExpress.core.template;
    /**
     * An object that serves as a namespace for the methods that work with DevExtreme CSS Themes.
     */
    export class themes {
        /**
         * Gets the current theme's name.
         */
        static current(): string;
        /**
         * Sets a theme with a specific name.
         */
        static current(themeName: string): void;
        /**
         * Specifies a function to be executed after a theme is loaded.
         */
        static initialized(callback: Function): void;
        /**
         * Specifies a function to be executed each time a theme is switched.
         */
        static ready(callback: Function): void;
    }
}
declare module DevExpress.ui.dialog {
    /**
     * Displays an alert dialog with a message and OK button.
     */
    export function alert(messageHtml: string, title: string): Promise<void> & JQueryPromise<void>;
    /**
     * Creates a confirmation dialog with a message and Yes and No buttons.
     */
    export function confirm(messageHtml: string, title: string): Promise<boolean> & JQueryPromise<boolean>;
    /**
     * Creates a dialog with custom buttons.
     */
    export function custom(options: { title?: string, messageHtml?: string, buttons?: Array<dxButtonOptions>, showTitle?: boolean, message?: string, dragEnabled?: boolean }): any;
}
declare module DevExpress.ui.dxOverlay {
    /**
     * Specifies the base z-index for all overlay UI components.
     */
    export function baseZIndex(zIndex: number): void;
}
declare module DevExpress.utils {
    /**
     * Cancels an animation frame request scheduled with the requestAnimationFrame method.
     */
    export function cancelAnimationFrame(requestID: number): void;
    /**
     * Gets the list of IANA time zone objects.
     */
    export function getTimeZones(date?: Date): Array<dxSchedulerTimeZone>;
    /**
     * Sets parameters for the viewport meta tag. Takes effect for mobile applications only.
     */
    export function initMobileViewport(options: { allowZoom?: boolean, allowPan?: boolean, allowSelection?: boolean }): void;
    /**
     * Makes the browser call a function to update animation before the next repaint.
     */
    export function requestAnimationFrame(callback: Function): number;
}
declare module DevExpress.viz {
    /**
     * An object that provides information about a bar in the BarGauge UI component.
     */
    export interface BarGaugeBarInfo {
        /**
         * The bar's hexadecimal color code.
         */
        color?: string;
        /**
         * The bar's zero-based index. Bars closest to the gauge's center have higher indexes.
         */
        index?: number;
        /**
         * The bar's value.
         */
        value?: number;
    }
    /**
     * An object that provides information about a legend item in the BarGauge UI component.
     */
    export interface BarGaugeLegendItem extends BaseLegendItem {
        /**
         * The bar that the legend item represents.
         */
        item?: BarGaugeBarInfo;
    }
    /**
     * 
     */
    export interface BaseChartOptions<T = BaseChart> extends BaseWidgetOptions<T> {
        /**
         * Specifies adaptive layout properties.
         */
        adaptiveLayout?: BaseChartAdaptiveLayout;
        /**
         * Specifies animation properties.
         */
        animation?: { duration?: number, easing?: 'easeOutCubic' | 'linear', enabled?: boolean, maxPointCountSupported?: number } | boolean;
        /**
         * Customizes the appearance of an individual point label.
         */
        customizeLabel?: ((pointInfo: any) => dxChartSeriesTypesCommonSeriesLabel);
        /**
         * Customizes the appearance of an individual series point.
         */
        customizePoint?: ((pointInfo: any) => dxChartSeriesTypesCommonSeriesPoint);
        /**
         * Binds the UI component to data.
         */
        dataSource?: Array<any> | DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string;
        /**
         * Specifies properties of the legend.
         */
        legend?: BaseChartLegend;
        /**
         * A function that is executed when all series are ready.
         */
        onDone?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any }) => any);
        /**
         * A function that is executed when a series point is clicked or tapped.
         */
        onPointClick?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, target?: basePointObject }) => any) | string;
        /**
         * A function that is executed after the pointer enters or leaves a series point.
         */
        onPointHoverChanged?: ((e: { component?: any, element?: any, target?: basePointObject }) => any);
        /**
         * A function that is executed when a series point is selected or selection is canceled.
         */
        onPointSelectionChanged?: ((e: { component?: any, element?: any, target?: basePointObject }) => any);
        /**
         * A function that is executed when a tooltip becomes hidden.
         */
        onTooltipHidden?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, target?: basePointObject | dxChartAnnotationConfig | any }) => any);
        /**
         * A function that is executed when a tooltip appears.
         */
        onTooltipShown?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, target?: basePointObject | dxChartAnnotationConfig | any }) => any);
        /**
         * Sets the palette to be used for colorizing series and their elements.
         */
        palette?: Array<string> | 'Bright' | 'Harmony Light' | 'Ocean' | 'Pastel' | 'Soft' | 'Soft Pastel' | 'Vintage' | 'Violet' | 'Carmine' | 'Dark Moon' | 'Dark Violet' | 'Green Mist' | 'Soft Blue' | 'Material' | 'Office';
        /**
         * Specifies what to do with colors in the palette when their number is less than the number of series (in the Chart UI component) or points in a series (in the PieChart UI component).
         */
        paletteExtensionMode?: 'alternate' | 'blend' | 'extrapolate';
        /**
         * Specifies whether a single point or multiple points can be selected in the chart.
         */
        pointSelectionMode?: 'multiple' | 'single';
        /**
         * Specifies properties for series.
         */
        series?: any | Array<any>;
        /**
         * Configures tooltips.
         */
        tooltip?: BaseChartTooltip;
    }
    /**
     * Specifies adaptive layout properties.
     */
    interface BaseChartAdaptiveLayout {
        /**
         * Specifies the minimum container height at which the layout begins to adapt.
         */
        height?: number;
        /**
         * Specifies whether point labels should be kept when the UI component adapts the layout.
         */
        keepLabels?: boolean;
        /**
         * Specifies the minimum container width at which the layout begins to adapt.
         */
        width?: number;
    }
    /**
     * Specifies properties of the legend.
     */
    interface BaseChartLegend extends BaseLegend {
        /**
         * Allows you to change the order, text, and visibility of legend items.
         */
        customizeItems?: ((items: Array<BaseChartLegendItem>) => Array<BaseChartLegendItem>);
        /**
         * Specifies an SVG element that serves as a custom legend item marker.
         */
        markerTemplate?: DevExpress.core.template | ((legendItem: BaseChartLegendItem, element: SVGGElement) => string | SVGElement | JQuery);
    }
    /**
     * Configures tooltips.
     */
    interface BaseChartTooltip extends BaseWidgetTooltip {
        /**
         * Formats the point argument before it is displayed in the tooltip. To format the point value, use the format property.
         */
        argumentFormat?: DevExpress.ui.format;
        /**
         * Specifies a custom template for a tooltip.
         */
        contentTemplate?: DevExpress.core.template | ((pointInfo: any, element: DevExpress.core.dxElement) => string | Element | JQuery);
        /**
         * Allows you to change tooltip appearance.
         */
        customizeTooltip?: ((pointInfo: any) => any);
        /**
         * Allows users to interact with the tooltip content.
         */
        interactive?: boolean;
        /**
         * Specifies whether the tooltip is shared across all series points with the same argument.
         */
        shared?: boolean;
    }
    /**
     * A base class for all chart UI components included in the ChartJS library.
     */
    export class BaseChart extends BaseWidget {
        constructor(element: Element, options?: BaseChartOptions)
        constructor(element: JQuery, options?: BaseChartOptions)
        /**
         * Deselects the chart's selected series. The series is displayed in an initial style.
         */
        clearSelection(): void;
        /**
         * Gets all the series.
         */
        getAllSeries(): Array<baseSeriesObject>;
        /**
         * Gets the DataSource instance.
         */
        getDataSource(): DevExpress.data.DataSource;
        /**
         * Gets a series with a specific name.
         */
        getSeriesByName(seriesName: any): chartSeriesObject;
        /**
         * Gets a series with a specific index.
         */
        getSeriesByPos(seriesIndex: number): chartSeriesObject;
        /**
         * Hides all UI component tooltips.
         */
        hideTooltip(): void;
        /**
         * Reloads data and repaints the UI component.
         */
        refresh(): void;
        /**
         * Redraws the UI component.
         */
        render(): void;
        /**
         * Redraws the UI component.
         */
        render(renderOptions: any): void;
    }
    /**
     * 
     */
    export interface BaseChartAnnotationConfig extends BaseWidgetAnnotationConfig {
        /**
         * Positions the annotation relative to a specific argument.
         */
        argument?: number | Date | string;
        /**
         * Anchors the annotation to a series point. Accepts the name of the point's series.
         */
        series?: string;
        /**
         * Positions the annotation relative to a value on the specified value axis.
         */
        value?: number | Date | string;
    }
    /**
     * An object that provides information about a legend item in the Chart and PolarChart UI components.
     */
    export interface BaseChartLegendItem extends BaseLegendItem {
        /**
         * The series that the item represents on the legend.
         */
        series?: baseSeriesObject;
    }
    /**
     * 
     */
    export interface BaseGaugeOptions<T = BaseGauge> extends BaseWidgetOptions<T> {
        /**
         * Specifies animation properties.
         */
        animation?: BaseGaugeAnimation;
        /**
         * Specifies the color of the parent page element.
         */
        containerBackgroundColor?: string;
        /**
         * Configures the loading indicator.
         */
        loadingIndicator?: BaseGaugeLoadingIndicator;
        /**
         * A function that is executed when a tooltip becomes hidden.
         */
        onTooltipHidden?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, target?: any }) => any);
        /**
         * A function that is executed when a tooltip appears.
         */
        onTooltipShown?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, target?: any }) => any);
        /**
         * Specifies properties of the gauge's range container.
         */
        rangeContainer?: BaseGaugeRangeContainer;
        /**
         * Specifies properties of the gauge's scale.
         */
        scale?: BaseGaugeScale;
        /**
         * Specifies a set of subvalues to be designated by the subvalue indicators.
         */
        subvalues?: Array<number>;
        /**
         * Configures tooltips.
         */
        tooltip?: BaseGaugeTooltip;
        /**
         * Specifies the main value on a gauge.
         */
        value?: number;
    }
    /**
     * Specifies animation properties.
     */
    interface BaseGaugeAnimation {
        /**
         * Determines how long animation runs.
         */
        duration?: number;
        /**
         * Specifies the animation easing mode.
         */
        easing?: 'easeOutCubic' | 'linear';
        /**
         * Indicates whether or not animation is enabled.
         */
        enabled?: boolean;
    }
    /**
     * Configures the loading indicator.
     */
    interface BaseGaugeLoadingIndicator extends BaseWidgetLoadingIndicator {
    }
    /**
     * Specifies properties of the gauge's range container.
     */
    interface BaseGaugeRangeContainer {
        /**
         * Specifies a range container's background color.
         */
        backgroundColor?: string;
        /**
         * Specifies the offset of the range container from an invisible scale line in pixels.
         */
        offset?: number;
        /**
         * Specifies the palette to be used for colorizing ranges in the range container.
         */
        palette?: Array<string> | 'Bright' | 'Harmony Light' | 'Ocean' | 'Pastel' | 'Soft' | 'Soft Pastel' | 'Vintage' | 'Violet' | 'Carmine' | 'Dark Moon' | 'Dark Violet' | 'Green Mist' | 'Soft Blue' | 'Material' | 'Office';
        /**
         * Specifies what to do with colors in the palette when their number is less than the number of ranges in the range container.
         */
        paletteExtensionMode?: 'alternate' | 'blend' | 'extrapolate';
        /**
         * An array of objects representing ranges contained in the range container.
         */
        ranges?: Array<{ color?: string, endValue?: number, startValue?: number }>;
    }
    /**
     * Specifies properties of the gauge's scale.
     */
    interface BaseGaugeScale {
        /**
         * Specifies whether to allow decimal values on the scale. When false, the scale contains integer values only.
         */
        allowDecimals?: boolean;
        /**
         * Specifies an array of custom minor ticks.
         */
        customMinorTicks?: Array<number>;
        /**
         * Specifies an array of custom major ticks.
         */
        customTicks?: Array<number>;
        /**
         * Specifies the end value for the scale of the gauge.
         */
        endValue?: number;
        /**
         * Specifies common properties for scale labels.
         */
        label?: BaseGaugeScaleLabel;
        /**
         * Specifies properties of the gauge's minor ticks.
         */
        minorTick?: { color?: string, length?: number, opacity?: number, visible?: boolean, width?: number };
        /**
         * Specifies an interval between minor ticks.
         */
        minorTickInterval?: number;
        /**
         * Specifies the minimum distance between two neighboring major ticks in pixels.
         */
        scaleDivisionFactor?: number;
        /**
         * Specifies the start value for the scale of the gauge.
         */
        startValue?: number;
        /**
         * Specifies properties of the gauge's major ticks.
         */
        tick?: { color?: string, length?: number, opacity?: number, visible?: boolean, width?: number };
        /**
         * Specifies an interval between major ticks.
         */
        tickInterval?: number;
    }
    /**
     * Specifies common properties for scale labels.
     */
    interface BaseGaugeScaleLabel {
        /**
         * Specifies a callback function that returns the text to be displayed in scale labels.
         */
        customizeText?: ((scaleValue: { value?: number, valueText?: string }) => string);
        /**
         * Specifies font properties for the text displayed in the scale labels of the gauge.
         */
        font?: Font;
        /**
         * Formats a value before it is displayed in a scale label. Accepts only numeric formats.
         */
        format?: DevExpress.ui.format;
        /**
         * Decides how to arrange scale labels when there is not enough space to keep all of them.
         */
        overlappingBehavior?: 'hide' | 'none';
        /**
         * Specifies whether or not scale labels should be colored similarly to their corresponding ranges in the range container.
         */
        useRangeColors?: boolean;
        /**
         * Specifies whether or not scale labels are visible on the gauge.
         */
        visible?: boolean;
    }
    /**
     * Configures tooltips.
     */
    interface BaseGaugeTooltip extends BaseWidgetTooltip {
        /**
         * Specifies a custom template for a tooltip.
         */
        contentTemplate?: DevExpress.core.template | ((scaleValue: { value?: number, valueText?: string }, element: DevExpress.core.dxElement) => string | Element | JQuery);
        /**
         * Allows you to change the appearance of specified tooltips.
         */
        customizeTooltip?: ((scaleValue: { value?: number, valueText?: string }) => any);
        /**
         * 
         */
        interactive?: boolean;
    }
    /**
     * A gauge UI component.
     */
    export class BaseGauge extends BaseWidget {
        constructor(element: Element, options?: BaseGaugeOptions)
        constructor(element: JQuery, options?: BaseGaugeOptions)
        /**
         * Gets subvalues.
         */
        subvalues(): Array<number>;
        /**
         * Updates subvalues.
         */
        subvalues(subvalues: Array<number>): void;
        /**
         * Gets the main value.
         */
        value(): number;
        /**
         * Updates the main value.
         */
        value(value: number): void;
    }
    /**
     * 
     */
    export interface BaseLegend {
        /**
         * Colors the legend's background.
         */
        backgroundColor?: string;
        /**
         * Configures the legend's border.
         */
        border?: { color?: string, cornerRadius?: number, dashStyle?: 'dash' | 'dot' | 'longDash' | 'solid', opacity?: number, visible?: boolean, width?: number };
        /**
         * Arranges legend items into several columns.
         */
        columnCount?: number;
        /**
         * Specifies an empty space between item columns in pixels.
         */
        columnItemSpacing?: number;
        /**
         * Specifies the legend items' font properties.
         */
        font?: Font;
        /**
         * Along with verticalAlignment, specifies the legend's position.
         */
        horizontalAlignment?: 'center' | 'left' | 'right';
        /**
         * Specifies the text's position relative to the marker in a legend item.
         */
        itemTextPosition?: 'bottom' | 'left' | 'right' | 'top';
        /**
         * Aligns items in the last column or row (depending on the legend's orientation). Applies when legend items are not divided into columns or rows equally.
         */
        itemsAlignment?: 'center' | 'left' | 'right';
        /**
         * Generates an empty space, measured in pixels, around the legend.
         */
        margin?: number | { bottom?: number, left?: number, right?: number, top?: number };
        /**
         * Specifies the marker's size in a legend item in pixels.
         */
        markerSize?: number;
        /**
         * Arranges legend items vertically (in a column) or horizontally (in a row). The default value is 'horizontal' if the legend.horizontalAlignment is 'center'. Otherwise, it is 'vertical'.
         */
        orientation?: 'horizontal' | 'vertical';
        /**
         * Generates an empty space, measured in pixels, between the legend's left/right border and its items.
         */
        paddingLeftRight?: number;
        /**
         * Generates an empty space, measured in pixels, between the legend's top/bottom border and its items.
         */
        paddingTopBottom?: number;
        /**
         * Arranges legend items in several rows.
         */
        rowCount?: number;
        /**
         * Specifies an empty space between item rows in pixels.
         */
        rowItemSpacing?: number;
        /**
         * Configures the legend title.
         */
        title?: { font?: Font, horizontalAlignment?: 'center' | 'left' | 'right', margin?: { bottom?: number, left?: number, right?: number, top?: number }, placeholderSize?: number, subtitle?: { font?: Font, offset?: number, text?: string } | string, text?: string, verticalAlignment?: 'bottom' | 'top' } | string;
        /**
         * Along with horizontalAlignment, specifies the legend's position.
         */
        verticalAlignment?: 'bottom' | 'top';
        /**
         * Specifies the legend's visibility.
         */
        visible?: boolean;
    }
    /**
     * 
     */
    export interface BaseLegendItem {
        /**
         * A legend item marker.
         */
        marker?: { fill?: string, opacity?: number, size?: number, state?: 'normal' | 'hovered' | 'selected' };
        /**
         * The text that the legend item displays.
         */
        text?: string;
        /**
         * Indicates and specifies whether the legend item is visible.
         */
        visible?: boolean;
    }
    /**
     * 
     */
    export interface BaseSparklineOptions<T = BaseSparkline> extends BaseWidgetOptions<T> {
        /**
         * A function that is executed when a tooltip becomes hidden.
         */
        onTooltipHidden?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any }) => any);
        /**
         * A function that is executed when a tooltip appears.
         */
        onTooltipShown?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any }) => any);
        /**
         * Configures the tooltip.
         */
        tooltip?: BaseSparklineTooltip;
    }
    /**
     * Configures the tooltip.
     */
    interface BaseSparklineTooltip extends BaseWidgetTooltip {
        /**
         * Specifies a custom template for tooltips.
         */
        contentTemplate?: DevExpress.core.template | ((pointsInfo: any, element: DevExpress.core.dxElement) => string | Element | JQuery);
        /**
         * Allows you to change tooltip appearance.
         */
        customizeTooltip?: ((pointsInfo: any) => any);
        /**
         * Enables tooltips.
         */
        enabled?: boolean;
        /**
         * 
         */
        interactive?: boolean;
    }
    /**
     * Overridden by descriptions for particular UI components.
     */
    export class BaseSparkline extends BaseWidget {
        constructor(element: Element, options?: BaseSparklineOptions)
        constructor(element: JQuery, options?: BaseSparklineOptions)
    }
    /**
     * 
     */
    export interface BaseWidgetOptions<T = BaseWidget> extends DOMComponentOptions<T> {
        /**
         * Specifies whether the UI component responds to user interaction.
         */
        disabled?: boolean;
        /**
         * Configures the exporting and printing features.
         */
        export?: BaseWidgetExport;
        /**
         * Configures the loading indicator.
         */
        loadingIndicator?: BaseWidgetLoadingIndicator;
        /**
         * Generates space around the UI component.
         */
        margin?: BaseWidgetMargin;
        /**
         * A function that is executed when the UI component's rendering has finished.
         */
        onDrawn?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any }) => any);
        /**
         * A function that is executed after the UI component is exported.
         */
        onExported?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any }) => any);
        /**
         * A function that is executed before the UI component is exported.
         */
        onExporting?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, fileName?: string, cancel?: boolean, format?: string }) => any);
        /**
         * A function that is executed before a file with exported UI component is saved to the user's local storage.
         */
        onFileSaving?: ((e: { component?: T, element?: DevExpress.core.dxElement, fileName?: string, format?: string, data?: Blob, cancel?: boolean }) => any);
        /**
         * A function that is executed when an error or warning occurs.
         */
        onIncidentOccurred?: ((e: { component?: T, element?: DevExpress.core.dxElement, model?: any, target?: any }) => any);
        /**
         * Notifies the UI component that it is embedded into an HTML page that uses a tag modifying the path.
         */
        pathModified?: boolean;
        /**
         * Specifies whether to redraw the UI component when the size of the parent browser window changes or a mobile device rotates.
         */
        redrawOnResize?: boolean;
        /**
         * Switches the UI component to a right-to-left representation.
         */
        rtlEnabled?: boolean;
        /**
         * Specifies the UI component's size in pixels.
         */
        size?: BaseWidgetSize;
        /**
         * Sets the name of the theme the UI component uses.
         */
        theme?: 'generic.dark' | 'generic.light' | 'generic.contrast' | 'generic.carmine' | 'generic.darkmoon' | 'generic.darkviolet' | 'generic.greenmist' | 'generic.softblue' | 'material.blue.light' | 'material.lime.light' | 'material.orange.light' | 'material.purple.light' | 'material.teal.light';
        /**
         * Configures the UI component's title.
         */
        title?: BaseWidgetTitle | string;
        /**
         * Configures tooltips - small pop-up rectangles that display information about a data-visualizing UI component element being pressed or hovered over with the mouse pointer.
         */
        tooltip?: BaseWidgetTooltip;
    }
    /**
     * Configures the exporting and printing features.
     */
    interface BaseWidgetExport {
        /**
         * Specifies the color that will fill transparent regions in the resulting file or document.
         */
        backgroundColor?: string;
        /**
         * Enables the client-side exporting in the UI component.
         */
        enabled?: boolean;
        /**
         * Specifies a default name for the file to which the UI component will be exported.
         */
        fileName?: string;
        /**
         * Specifies a set of export formats.
         */
        formats?: Array<'GIF' | 'JPEG' | 'PDF' | 'PNG' | 'SVG'>;
        /**
         * Adds an empty space around the exported UI component; measured in pixels.
         */
        margin?: number;
        /**
         * Enables the printing feature in the UI component. Applies only if the export.enabled property is true.
         */
        printingEnabled?: boolean;
        /**
         * Specifies the URL of the server-side proxy that streams the resulting file to the end user to enable exporting in the Safari browser.
         * @deprecated Since v10, Safari browser supports API for saving files, and this property is no longer required.
         */
        proxyUrl?: string;
        /**
         * A function that renders SVG markup on the HTML canvas. Required to export custom SVG elements (for example, markerTemplate).
         */
        svgToCanvas?: ((svg: SVGElement, canvas: HTMLCanvasElement) => Promise<void> | JQueryPromise<void>);
    }
    /**
     * Configures the loading indicator.
     */
    interface BaseWidgetLoadingIndicator {
        /**
         * Colors the background of the loading indicator.
         */
        backgroundColor?: string;
        /**
         * Specifies whether the loading indicator should be displayed and hidden automatically.
         */
        enabled?: boolean;
        /**
         * Specifies font properties for the loading indicator.
         */
        font?: Font;
        /**
         * Allows you to change the loading indicator's visibility.
         */
        show?: boolean;
        /**
         * Specifies the text to be displayed by the loading indicator.
         */
        text?: string;
    }
    /**
     * Generates space around the UI component.
     */
    interface BaseWidgetMargin {
        /**
         * Specifies the bottom margin of the UI component in pixels.
         */
        bottom?: number;
        /**
         * Specifies the left margin of the UI component in pixels.
         */
        left?: number;
        /**
         * Specifies the right margin of the UI component in pixels.
         */
        right?: number;
        /**
         * Specifies the top margin of the UI component in pixels.
         */
        top?: number;
    }
    /**
     * Specifies the UI component's size in pixels.
     */
    interface BaseWidgetSize {
        /**
         * Specifies the height of the UI component in pixels.
         */
        height?: number;
        /**
         * Specifies the width of the UI component in pixels.
         */
        width?: number;
    }
    /**
     * Configures the UI component's title.
     */
    interface BaseWidgetTitle {
        /**
         * Specifies font properties for the title.
         */
        font?: Font;
        /**
         * Specifies the title's alignment in a horizontal direction.
         */
        horizontalAlignment?: 'center' | 'left' | 'right';
        /**
         * Generates space around the title.
         */
        margin?: number | { bottom?: number, left?: number, right?: number, top?: number };
        /**
         * Reserves a pixel-measured space for the title.
         */
        placeholderSize?: number;
        /**
         * Configures the UI component's subtitle.
         */
        subtitle?: { font?: Font, offset?: number, text?: string, textOverflow?: 'ellipsis' | 'hide' | 'none', wordWrap?: 'normal' | 'breakWord' | 'none' } | string;
        /**
         * Specifies the title's text.
         */
        text?: string;
        /**
         * Specifies what to do with the title when it overflows the allocated space after applying wordWrap: hide, truncate it and display an ellipsis, or do nothing.
         */
        textOverflow?: 'ellipsis' | 'hide' | 'none';
        /**
         * Specifies the title's alignment in a vertical direction.
         */
        verticalAlignment?: 'bottom' | 'top';
        /**
         * Specifies how to wrap the title if it does not fit into a single line.
         */
        wordWrap?: 'normal' | 'breakWord' | 'none';
    }
    /**
     * Configures tooltips - small pop-up rectangles that display information about a data-visualizing UI component element being pressed or hovered over with the mouse pointer.
     */
    interface BaseWidgetTooltip {
        /**
         * Specifies the length of a tooltip's arrow in pixels.
         */
        arrowLength?: number;
        /**
         * Configures a tooltip's border.
         */
        border?: { color?: string, dashStyle?: 'dash' | 'dot' | 'longDash' | 'solid', opacity?: number, visible?: boolean, width?: number };
        /**
         * Colors all tooltips.
         */
        color?: string;
        /**
         * Specifies the container in which to draw tooltips. The default container is the HTML DOM `` element.
         */
        container?: string | Element | JQuery;
        /**
         * Makes all the tooltip's corners rounded.
         */
        cornerRadius?: number;
        /**
         * Enables tooltips.
         */
        enabled?: boolean;
        /**
         * Specifies tooltips' font properties.
         */
        font?: Font;
        /**
         * Formats a value before it is displayed it in a tooltip.
         */
        format?: DevExpress.ui.format;
        /**
         * Specifies tooltips' transparency.
         */
        opacity?: number;
        /**
         * Generates an empty space, measured in pixels, between a tooltip's left/right border and its text.
         */
        paddingLeftRight?: number;
        /**
         * Generates an empty space, measured in pixels, between a tooltip's top/bottom border and its text.
         */
        paddingTopBottom?: number;
        /**
         * Configures a tooltip's shadow.
         */
        shadow?: { blur?: number, color?: string, offsetX?: number, offsetY?: number, opacity?: number };
        /**
         * Specifies a tooltip's z-index.
         */
        zIndex?: number;
    }
    /**
     * This section describes properties and methods that are common to all UI components.
     */
    export class BaseWidget extends DOMComponent {
        constructor(element: Element, options?: BaseWidgetOptions)
        constructor(element: JQuery, options?: BaseWidgetOptions)
        /**
         * Exports the UI component.
         */
        exportTo(fileName: string, format: string): void;
        /**
         * Gets the current UI component size.
         */
        getSize(): BaseWidgetSize;
        /**
         * Hides the loading indicator.
         */
        hideLoadingIndicator(): void;
        /**
         * Opens the browser's print window.
         */
        print(): void;
        /**
         * Redraws the UI component.
         */
        render(): void;
        /**
         * Shows the loading indicator.
         */
        showLoadingIndicator(): void;
        /**
         * Gets the UI component's SVG markup.
         */
        svg(): string;
    }
    /**
     * 
     */
    export interface BaseWidgetAnnotationConfig {
        /**
         * Specifies whether users can drag and drop the annotation.
         */
        allowDragging?: boolean;
        /**
         * Specifies the length of the annotation's arrow in pixels.
         */
        arrowLength?: number;
        /**
         * Specifies the width of the annotation's arrow at its junction with the annotation rectangle.
         */
        arrowWidth?: number;
        /**
         * Configures the appearance of the annotation's border.
         */
        border?: { color?: string, cornerRadius?: number, dashStyle?: 'dash' | 'dot' | 'longDash' | 'solid', opacity?: number, visible?: boolean, width?: number };
        /**
         * Specifies the color that fills the annotation.
         */
        color?: string;
        /**
         * A container for custom data.
         */
        data?: any;
        /**
         * Specifies the annotation's description in the tooltip.
         */
        description?: string;
        /**
         * Specifies the annotation's font properties. Applies to text annotations only.
         */
        font?: Font;
        /**
         * Specifies the annotation's height in pixels.
         */
        height?: number;
        /**
         * Configures the image to be displayed in the annotation. Applies only if the type is 'image'.
         */
        image?: string | { height?: number, url?: string, width?: number };
        /**
         * Moves the annotation horizontally.
         */
        offsetX?: number;
        /**
         * Moves the annotation vertically.
         */
        offsetY?: number;
        /**
         * Specifies the annotation's opacity.
         */
        opacity?: number;
        /**
         * Used with paddingTopBottom to generate an empty space around the annotation's text or image (specified in pixels).
         */
        paddingLeftRight?: number;
        /**
         * Along with paddingLeftRight, generates an empty space around the annotation's text or image; specified in pixels.
         */
        paddingTopBottom?: number;
        /**
         * Configures the annotation's shadows.
         */
        shadow?: { blur?: number, color?: string, offsetX?: number, offsetY?: number, opacity?: number };
        /**
         * Specifies the annotation's text. Applies only if the type is 'text'.
         */
        text?: string;
        /**
         * Specifies what to do with the annotation's text when it overflows the allocated space after applying wordWrap: hide, truncate it and display an ellipsis, or do nothing.
         */
        textOverflow?: 'ellipsis' | 'hide' | 'none';
        /**
         * Specifies whether the annotation tooltip is enabled.
         */
        tooltipEnabled?: boolean;
        /**
         * Specifies whether the annotation displays text, an image, or a template. This is a required setting.
         */
        type?: 'text' | 'image' | 'custom';
        /**
         * Specifies the annotation's width in pixels.
         */
        width?: number;
        /**
         * Specifies how to wrap the annotation's text if it does not fit into a single line.
         */
        wordWrap?: 'normal' | 'breakWord' | 'none';
        /**
         * Used with y to position the annotation's center at a specific pixel coordinate. (0, 0) is the upper left corner of the UI component.
         */
        x?: number;
        /**
         * Used with x to position the annotation's center at a specific pixel coordinate. (0, 0) is the upper left corner of the UI component.
         */
        y?: number;
    }
    /**
     * Specifies properties for Chart UI component series.
     */
    export interface ChartSeries extends dxChartSeriesTypesCommonSeries {
        /**
         * Specifies the name that identifies the series.
         */
        name?: string;
        /**
         * Specifies data about a series.
         */
        tag?: any;
        /**
         * Sets the series type.
         */
        type?: 'area' | 'bar' | 'bubble' | 'candlestick' | 'fullstackedarea' | 'fullstackedbar' | 'fullstackedline' | 'fullstackedspline' | 'fullstackedsplinearea' | 'line' | 'rangearea' | 'rangebar' | 'scatter' | 'spline' | 'splinearea' | 'stackedarea' | 'stackedbar' | 'stackedline' | 'stackedspline' | 'stackedsplinearea' | 'steparea' | 'stepline' | 'stock';
    }
    /**
     * A base object for gauge value and subvalue indicators. Includes the properties of indicators of all types.
     */
    export interface CommonIndicator {
        /**
         * Specifies the length of an arrow for the indicator of the textCloud type in pixels.
         */
        arrowLength?: number;
        /**
         * Specifies the background color for the indicator of the rangeBar type.
         */
        backgroundColor?: string;
        /**
         * Specifies the base value for the indicator of the rangeBar type.
         */
        baseValue?: number;
        /**
         * Specifies a radius small enough for the indicator to begin adapting.
         */
        beginAdaptingAtRadius?: number;
        /**
         * Specifies a color of the indicator.
         */
        color?: string;
        /**
         * Specifies the orientation of the rangeBar indicator. Applies only if the geometry.orientation property is 'vertical'.
         */
        horizontalOrientation?: 'left' | 'right';
        /**
         * Specifies the distance between the needle and the center of a gauge for the indicator of a needle-like type.
         */
        indentFromCenter?: number;
        /**
         * Specifies the indicator length.
         */
        length?: number;
        /**
         * Specifies the distance between the indicator and the invisible scale line.
         */
        offset?: number;
        /**
         * Sets the palette to be used to colorize indicators differently.
         */
        palette?: Array<string> | 'Bright' | 'Harmony Light' | 'Ocean' | 'Pastel' | 'Soft' | 'Soft Pastel' | 'Vintage' | 'Violet' | 'Carmine' | 'Dark Moon' | 'Dark Violet' | 'Green Mist' | 'Soft Blue' | 'Material' | 'Office';
        /**
         * Specifies the second color for the indicator of the twoColorNeedle type.
         */
        secondColor?: string;
        /**
         * Specifies the length of a twoNeedleColor type indicator tip as a percentage.
         */
        secondFraction?: number;
        /**
         * Specifies the range bar size for an indicator of the rangeBar type.
         */
        size?: number;
        /**
         * Specifies the inner diameter in pixels, so that the spindle has the shape of a ring.
         */
        spindleGapSize?: number;
        /**
         * Specifies the spindle's diameter in pixels for the indicator of a needle-like type.
         */
        spindleSize?: number;
        /**
         * Specifies the appearance of the text displayed in an indicator of the rangeBar type.
         */
        text?: { customizeText?: ((indicatedValue: { value?: number, valueText?: string }) => string), font?: Font, format?: DevExpress.ui.format, indent?: number };
        /**
         * Specifies the orientation of the rangeBar indicator. Applies only if the geometry.orientation property is 'horizontal'.
         */
        verticalOrientation?: 'bottom' | 'top';
        /**
         * Specifies the width of an indicator in pixels.
         */
        width?: number;
    }
    /**
     * Font properties.
     */
    export interface Font {
        /**
         * Specifies font color.
         */
        color?: string;
        /**
         * Specifies font family.
         */
        family?: string;
        /**
         * Specifies font opacity.
         */
        opacity?: number;
        /**
         * Specifies font size.
         */
        size?: string | number;
        /**
         * Specifies font weight. Accepts values from 100 to 900 in increments of 100. Higher values increase boldness.
         */
        weight?: number;
    }
    /**
     * An object that provides information about a legend item in the Funnel UI component.
     */
    export interface FunnelLegendItem extends BaseLegendItem {
        /**
         * The funnel item that the legend item represents.
         */
        item?: dxFunnelItem;
    }
    /**
     * 
     */
    export interface GaugeIndicator extends CommonIndicator {
        /**
         * Specifies the type of gauge indicators.
         */
        type?: 'circle' | 'rangeBar' | 'rectangle' | 'rectangleNeedle' | 'rhombus' | 'textCloud' | 'triangleMarker' | 'triangleNeedle' | 'twoColorNeedle';
    }
    /**
     * This section describes the Layer object, which represents a vector map layer.
     */
    export class MapLayer {
        /**
         * The type of the layer elements.
         */
        elementType?: string;
        /**
         * The layer index in the layers array.
         */
        index?: number;
        /**
         * The name of the layer.
         */
        name?: string;
        /**
         * The layer type. Can be 'area', 'line' or 'marker'.
         */
        type?: string;
        /**
         * Deselects all layer elements.
         */
        clearSelection(): void;
        /**
         * Returns the DataSource instance.
         */
        getDataSource(): DevExpress.data.DataSource;
        /**
         * Gets all layer elements.
         */
        getElements(): Array<MapLayerElement>;
    }
    /**
     * This section describes the Layer Element object, which represents a vector map layer element.
     */
    export class MapLayerElement {
        /**
         * The parent layer of the layer element.
         */
        layer?: any;
        /**
         * Applies the layer element settings and updates element appearance.
         */
        applySettings(settings: any): void;
        /**
         * Gets the value of an attribute.
         */
        attribute(name: string): any;
        /**
         * Sets the value of an attribute.
         */
        attribute(name: string, value: any): void;
        /**
         * Gets the layer element coordinates.
         */
        coordinates(): any;
        /**
         * Gets the selection state of the layer element.
         */
        selected(): boolean;
        /**
         * Sets the selection state of the layer element.
         */
        selected(state: boolean): void;
    }
    /**
     * An object that provides information about a legend item in the PieChart UI component.
     */
    export interface PieChartLegendItem extends BaseLegendItem {
        /**
         * The argument of the point(s) that the legend item represents.
         */
        argument?: string | Date | number;
        /**
         * The zero-based index of the legend item used to identify the item among other legend items with the same argument.
         */
        argumentIndex?: number;
        /**
         * An array of points that the legend item represents. Can contain more than one point only in a multi-series PieChart.
         */
        points?: Array<piePointObject>;
        /**
         * The text that the legend item displays.
         */
        text?: any;
    }
    /**
     * Specifies properties for the series of the PieChart UI component.
     */
    export interface PieChartSeries extends dxPieChartSeriesTypesCommonPieChartSeries {
        /**
         * Specifies the name that identifies the series.
         */
        name?: string;
        /**
         * Specifies data about a series.
         */
        tag?: any;
    }
    /**
     * Specifies properties for PolarChart UI component series.
     */
    export interface PolarChartSeries extends dxPolarChartSeriesTypesCommonPolarChartSeries {
        /**
         * Specifies the name that identifies the series.
         */
        name?: string;
        /**
         * Specifies data about a series.
         */
        tag?: any;
        /**
         * Sets the series type.
         */
        type?: 'area' | 'bar' | 'line' | 'scatter' | 'stackedbar';
    }
    /**
     * A class describing a scale break range. Inherited by scale breaks in the Chart and RangeSelector.
     */
    export interface ScaleBreak {
        /**
         * Along with the startValue property, limits the scale break.
         */
        endValue?: number | Date | string;
        /**
         * Along with the endValue property, limits the scale break.
         */
        startValue?: number | Date | string;
    }
    /**
     * An object that provides information about a legend item in the VectorMap UI component.
     */
    export interface VectorMapLegendItem extends BaseLegendItem {
        /**
         * The color of the legend item's marker.
         */
        color?: string;
        /**
         * The end value of the group that the legend item indicates.
         */
        end?: number;
        /**
         * The diameter of the legend item's marker in pixels.
         */
        size?: number;
        /**
         * The start value of the group that the legend item indicates.
         */
        start?: number;
    }
    /**
     * 
     */
    export interface VectorMapProjectionConfig {
        /**
         * Specifies the projection's ratio of the width to the height.
         */
        aspectRatio?: number;
        /**
         * Converts coordinates from [x, y] to [lon, lat].
         */
        from?: ((coordinates: Array<number>) => Array<number>);
        /**
         * Converts coordinates from [lon, lat] to [x, y].
         */
        to?: ((coordinates: Array<number>) => Array<number>);
    }
    /**
     * 
     */
    export interface VizRange {
        /**
         * The range's end value.
         */
        endValue?: number | Date | string;
        /**
         * The range's length.
         */
        length?: number | any | 'day' | 'hour' | 'millisecond' | 'minute' | 'month' | 'quarter' | 'second' | 'week' | 'year';
        /**
         * The range's start value.
         */
        startValue?: number | Date | string;
    }
    /**
     * A class describing various time intervals. Inherited by tick intervals in Chart and RangeSelector.
     */
    export type VizTimeInterval = number | { days?: number, hours?: number, milliseconds?: number, minutes?: number, months?: number, quarters?: number, seconds?: number, weeks?: number, years?: number } | 'day' | 'hour' | 'millisecond' | 'minute' | 'month' | 'quarter' | 'second' | 'week' | 'year';
    /**
     * This section describes the Label object, which represents a point label.
     */
    export class baseLabelObject {
        /**
         * Gets the parameters of the label's minimum bounding rectangle (MBR).
         */
        getBoundingRect(): any;
        /**
         * Hides the point label.
         */
        hide(): void;
        /**
         * Hides the point label and keeps it invisible until the show() method is called.
         */
        hide(holdInvisible: boolean): void;
        /**
         * Checks whether the point label is visible.
         */
        isVisible(): boolean;
        /**
         * Shows the point label.
         */
        show(): void;
        /**
         * Shows the point label and keeps it visible until the hide() method is called.
         */
        show(holdVisible: boolean): void;
    }
    /**
     * This section describes the Point object, which represents a series point.
     */
    export class basePointObject {
        /**
         * Contains the data object that the series point represents.
         */
        data?: any;
        /**
         * Provides information about the state of the point object.
         */
        fullState?: number;
        /**
         * Returns the point's argument value that was set in the data source.
         */
        originalArgument?: string | number | Date;
        /**
         * Returns the point's value that was set in the data source.
         */
        originalValue?: string | number | Date;
        /**
         * Returns the series object to which the point belongs.
         */
        series?: any;
        /**
         * Returns the tag of the point.
         */
        tag?: any;
        /**
         * Switches the point from the hover state back to normal.
         */
        clearHover(): void;
        /**
         * Deselects the point.
         */
        clearSelection(): void;
        /**
         * Gets the color of a particular point.
         */
        getColor(): string;
        /**
         * Allows you to obtain the label(s) of the series point.
         */
        getLabel(): baseLabelObject & Array<baseLabelObject>;
        /**
         * Hides the tooltip of the point.
         */
        hideTooltip(): void;
        /**
         * Switches the point into the hover state, the same as when a user places the mouse pointer on it.
         */
        hover(): void;
        /**
         * Provides information about the hover state of a point.
         */
        isHovered(): boolean;
        /**
         * Provides information about the selection state of a point.
         */
        isSelected(): boolean;
        /**
         * Selects the point. The point is displayed in a 'selected' style until another point is selected or the current point is deselected programmatically.
         */
        select(): void;
        /**
         * Shows the tooltip of the point.
         */
        showTooltip(): void;
    }
    /**
     * This section describes the Series object, which represents a series.
     */
    export class baseSeriesObject {
        /**
         * Provides information about the state of the series object.
         */
        fullState?: number;
        /**
         * Returns the name of the series.
         */
        name?: any;
        /**
         * Returns the tag of the series.
         */
        tag?: any;
        /**
         * Returns the type of the series.
         */
        type?: string;
        /**
         * Switches the series from the hover state back to normal.
         */
        clearHover(): void;
        /**
         * Cancels the selection of this particular series. The series is displayed in its initial style.
         */
        clearSelection(): void;
        /**
         * Deselects the specified point. The point is displayed in an initial style.
         */
        deselectPoint(point: basePointObject): void;
        /**
         * Gets all points in the series.
         */
        getAllPoints(): Array<basePointObject>;
        /**
         * Gets the color of a particular series.
         */
        getColor(): string;
        /**
         * Gets a series point with the specified index.
         */
        getPointByPos(positionIndex: number): basePointObject;
        /**
         * Gets a series point with the specified argument value.
         */
        getPointsByArg(pointArg: number | string | Date): Array<basePointObject>;
        /**
         * Gets visible series points.
         */
        getVisiblePoints(): Array<basePointObject>;
        /**
         * Hides a series at runtime.
         */
        hide(): void;
        /**
         * Switches the series into the hover state, the same as when a user places the mouse pointer on it.
         */
        hover(): void;
        /**
         * Provides information about the hover state of a series.
         */
        isHovered(): boolean;
        /**
         * Provides information about the selection state of a series.
         */
        isSelected(): boolean;
        /**
         * Provides information about the visibility state of a series.
         */
        isVisible(): boolean;
        /**
         * Selects the series.
         */
        select(): void;
        /**
         * Selects the specified point. The point is displayed in a 'selected' style.
         */
        selectPoint(point: basePointObject): void;
        /**
         * Makes a particular series visible.
         */
        show(): void;
    }
    /**
     * This section describes the Axis object. This object represents a chart axis.
     */
    export class chartAxisObject {
        /**
         * Gets the axis' displayed range.
         */
        visualRange(): VizRange;
        /**
         * Sets the axis's displayed range.
         */
        visualRange(visualRange: Array<number | string | Date> | VizRange): void;
    }
    /**
     * 
     */
    export interface chartPointAggregationInfoObject {
        /**
         * Contains the length of the aggregation interval in axis units (numbers or dates). If the interval is set in pixels (using the aggregationGroupWidth property), it will be converted to axis units.
         */
        aggregationInterval?: any;
        /**
         * Contains data objects that were aggregated into this point.
         */
        data?: Array<any>;
        /**
         * Contains the end value of the interval to which the point belongs.
         */
        intervalEnd?: any;
        /**
         * Contains the start value of the interval to which the point belongs.
         */
        intervalStart?: any;
    }
    /**
     * This section describes the Point object, which represents a series point.
     */
    export class chartPointObject extends basePointObject {
        /**
         * Provides information about the aggregation interval and the data objects that fall within it.
         */
        aggregationInfo?: chartPointAggregationInfoObject;
        /**
         * Contains the close value of the point. This field is useful for points belonging to a series of the candle stick or stock type only.
         */
        originalCloseValue?: number | string;
        /**
         * Contains the high value of the point. This field is useful for points belonging to a series of the candle stick or stock type only.
         */
        originalHighValue?: number | string;
        /**
         * Contains the low value of the point. This field is useful for points belonging to a series of the candle stick or stock type only.
         */
        originalLowValue?: number | string;
        /**
         * Contains the first value of the point. This field is useful for points belonging to a series of the range area or range bar type only.
         */
        originalMinValue?: string | number | Date;
        /**
         * Contains the open value of the point. This field is useful for points belonging to a series of the candle stick or stock type only.
         */
        originalOpenValue?: number | string;
        /**
         * Contains the size of the bubble as it was set in the data source. This field is useful for points belonging to a series of the bubble type only.
         */
        size?: number | string;
        /**
         * Gets the parameters of the point's minimum bounding rectangle (MBR).
         */
        getBoundingRect(): any;
    }
    /**
     * This section describes the Series object, which represents a series.
     */
    export class chartSeriesObject extends baseSeriesObject {
        /**
         * Returns the name of the value axis of the series.
         */
        axis?: string;
        /**
         * The name of the series' barOverlapGroup.
         */
        barOverlapGroup?: string;
        /**
         * Returns the name of the series pane.
         */
        pane?: string;
        /**
         * The name of the series' stack.
         */
        stack?: string;
        /**
         * Gets the argument axis to which the series belongs.
         */
        getArgumentAxis(): chartAxisObject;
        /**
         * Gets the value axis to which the series belongs.
         */
        getValueAxis(): chartAxisObject;
    }
    /**
     * An object that defines a gauge indicator of the rangeBar type.
     */
    export type circularRangeBar = CommonIndicator;
    /**
     * An object that defines a gauge indicator of the rectangleNeedle type.
     */
    export type circularRectangleNeedle = CommonIndicator;
    /**
     * An object that defines a gauge indicator of the textCloud type.
     */
    export type circularTextCloud = CommonIndicator;
    /**
     * An object that defines a gauge indicator of the triangleMarker type.
     */
    export type circularTriangleMarker = CommonIndicator;
    /**
     * An object that defines a gauge indicator of the triangleNeedle type.
     */
    export type circularTriangleNeedle = CommonIndicator;
    /**
     * An object that defines a gauge indicator of the twoColorNeedle type.
     */
    export type circularTwoColorNeedle = CommonIndicator;
    /**
     * 
     */
    export interface dxBarGaugeOptions extends BaseWidgetOptions<dxBarGauge> {
        /**
         * Specifies animation properties.
         */
        animation?: any;
        /**
         * Specifies a color for the remaining segment of the bar's track.
         */
        backgroundColor?: string;
        /**
         * Specifies a distance between bars in pixels.
         */
        barSpacing?: number;
        /**
         * Specifies a base value for bars.
         */
        baseValue?: number;
        /**
         * Specifies an end value for the gauge's invisible scale.
         */
        endValue?: number;
        /**
         * Defines the shape of the gauge's arc.
         */
        geometry?: { endAngle?: number, startAngle?: number };
        /**
         * Specifies the properties of the labels that accompany gauge bars.
         */
        label?: { connectorColor?: string, connectorWidth?: number, customizeText?: ((barValue: { value?: number, valueText?: string }) => string), font?: Font, format?: DevExpress.ui.format, indent?: number, visible?: boolean };
        /**
         * Configures the legend.
         */
        legend?: dxBarGaugeLegend;
        /**
         * Configures the loading indicator.
         */
        loadingIndicator?: dxBarGaugeLoadingIndicator;
        /**
         * A function that is executed when a tooltip becomes hidden.
         */
        onTooltipHidden?: ((e: { component?: dxBarGauge, element?: DevExpress.core.dxElement, model?: any, target?: any }) => any);
        /**
         * A function that is executed when a tooltip appears.
         */
        onTooltipShown?: ((e: { component?: dxBarGauge, element?: DevExpress.core.dxElement, model?: any, target?: any }) => any);
        /**
         * Sets the palette to be used for colorizing bars in the gauge.
         */
        palette?: Array<string> | 'Bright' | 'Harmony Light' | 'Ocean' | 'Pastel' | 'Soft' | 'Soft Pastel' | 'Vintage' | 'Violet' | 'Carmine' | 'Dark Moon' | 'Dark Violet' | 'Green Mist' | 'Soft Blue' | 'Material' | 'Office';
        /**
         * Specifies what to do with colors in the palette when their number is less than the number of bars in the gauge.
         */
        paletteExtensionMode?: 'alternate' | 'blend' | 'extrapolate';
        /**
         * Defines the radius of the bar that is closest to the center relatively to the radius of the topmost bar.
         */
        relativeInnerRadius?: number;
        /**
         * Specifies how the UI component should behave when bar labels overlap: hide certain labels or leave them overlapped.
         */
        resolveLabelOverlapping?: 'hide' | 'none';
        /**
         * Specifies a start value for the gauge's invisible scale.
         */
        startValue?: number;
        /**
         * Configures tooltips.
         */
        tooltip?: dxBarGaugeTooltip;
        /**
         * Specifies the array of values to be indicated on a bar gauge.
         */
        values?: Array<number>;
    }
    /**
     * Configures the legend.
     */
    export interface dxBarGaugeLegend extends BaseLegend {
        /**
         * Specifies the hint that appears when a user hovers the mouse pointer over a legend item.
         */
        customizeHint?: ((arg: { item?: BarGaugeBarInfo, text?: string }) => string);
        /**
         * Allows you to change the order, text, and visibility of legend items.
         */
        customizeItems?: ((items: Array<BarGaugeLegendItem>) => Array<BarGaugeLegendItem>);
        /**
         * Customizes the text displayed by legend items.
         */
        customizeText?: ((arg: { item?: BarGaugeBarInfo, text?: string }) => string);
        /**
         * Formats the item text before it is displayed. Accepts only numeric formats. When unspecified, it inherits the label's format.
         */
        itemTextFormat?: DevExpress.ui.format;
        /**
         * Specifies an SVG element that serves as a custom legend item marker.
         */
        markerTemplate?: DevExpress.core.template | ((legendItem: BarGaugeLegendItem, element: SVGGElement) => string | SVGElement | JQuery);
        /**
         * Specifies the legend's visibility.
         */
        visible?: boolean;
    }
    /**
     * Configures the loading indicator.
     */
    export interface dxBarGaugeLoadingIndicator extends BaseWidgetLoadingIndicator {
    }
    /**
     * Configures tooltips.
     */
    export interface dxBarGaugeTooltip extends BaseWidgetTooltip {
        /**
         * Specifies a custom template for a tooltip.
         */
        contentTemplate?: DevExpress.core.template | ((scaleValue: { value?: number, valueText?: string, index?: number }, element: DevExpress.core.dxElement) => string | Element | JQuery);
        /**
         * Allows you to change tooltip appearance.
         */
        customizeTooltip?: ((scaleValue: { value?: number, valueText?: string, index?: number }) => any);
        /**
         * 
         */
        interactive?: boolean;
    }
    /**
     * The BarGauge UI component contains several circular bars that each indicates a single value.
     */
    export class dxBarGauge extends BaseWidget {
        constructor(element: Element, options?: dxBarGaugeOptions)
        constructor(element: JQuery, options?: dxBarGaugeOptions)
        /**
         * Gets all the values.
         */
        values(): Array<number>;
        /**
         * Updates all the values.
         */
        values(values: Array<number>): void;
    }
    /**
     * 
     */
    export interface dxBulletOptions extends BaseSparklineOptions<dxBullet> {
        /**
         * Specifies a color for the bullet bar.
         */
        color?: string;
        /**
         * Specifies an end value for the invisible scale.
         */
        endScaleValue?: number;
        /**
         * Specifies whether or not to show the target line.
         */
        showTarget?: boolean;
        /**
         * Specifies whether or not to show the line indicating zero on the invisible scale.
         */
        showZeroLevel?: boolean;
        /**
         * Specifies a start value for the invisible scale.
         */
        startScaleValue?: number;
        /**
         * Specifies the value indicated by the target line.
         */
        target?: number;
        /**
         * Specifies a color for both the target and zero level lines.
         */
        targetColor?: string;
        /**
         * Specifies the width of the target line.
         */
        targetWidth?: number;
        /**
         * Specifies the primary value indicated by the bullet bar.
         */
        value?: number;
    }
    /**
     * The Bullet UI component is useful when you need to compare a single measure to a target value. The UI component comprises a horizontal bar indicating the measure and a vertical line indicating the target value.
     */
    export class dxBullet extends BaseSparkline {
        constructor(element: Element, options?: dxBulletOptions)
        constructor(element: JQuery, options?: dxBulletOptions)
    }
    /**
     * 
     */
    export interface dxChartOptions extends BaseChartOptions<dxChart> {
        /**
         * Specifies whether to adjust the value axis's visualRange when the argument axis is being zoomed or panned.
         */
        adjustOnZoom?: boolean;
        /**
         * Specifies the annotation collection.
         */
        annotations?: Array<dxChartAnnotationConfig | any>;
        /**
         * Configures the argument axis.
         */
        argumentAxis?: dxChartArgumentAxis;
        /**
         * Specifies whether to hide series point markers automatically to reduce visual clutter.
         */
        autoHidePointMarkers?: boolean;
        /**
         * Controls the padding and consequently the width of a group of bars with the same argument using relative units. Ignored if the barGroupWidth property is set.
         */
        barGroupPadding?: number;
        /**
         * Specifies a fixed width for groups of bars with the same argument, measured in pixels. Takes precedence over the barGroupPadding property.
         */
        barGroupWidth?: number;
        /**
         * Specifies settings common for all annotations in the chart.
         */
        commonAnnotationSettings?: dxChartCommonAnnotationConfig;
        /**
         * Defines common settings for both the argument and value axis in a chart.
         */
        commonAxisSettings?: dxChartCommonAxisSettings;
        /**
         * Defines common settings for all panes in a chart.
         */
        commonPaneSettings?: dxChartCommonPaneSettings;
        /**
         * Specifies settings common for all series in the chart.
         */
        commonSeriesSettings?: dxChartCommonSeriesSettings;
        /**
         * Colors the background of the chart container.
         */
        containerBackgroundColor?: string;
        /**
         * Configures the crosshair feature.
         */
        crosshair?: { color?: string, dashStyle?: 'dash' | 'dot' | 'longDash' | 'solid', enabled?: boolean, horizontalLine?: { color?: string, dashStyle?: 'dash' | 'dot' | 'longDash' | 'solid', label?: { backgroundColor?: string, customizeText?: ((info: { value?: Date | number | string, valueText?: string, point?: chartPointObject }) => string), font?: Font, format?: DevExpress.ui.format, visible?: boolean }, opacity?: number, visible?: boolean, width?: number } | boolean, label?: { backgroundColor?: string, customizeText?: ((info: { value?: Date | number | string, valueText?: string, point?: chartPointObject }) => string), font?: Font, format?: DevExpress.ui.format, visible?: boolean }, opacity?: number, verticalLine?: { color?: string, dashStyle?: 'dash' | 'dot' | 'longDash' | 'solid', label?: { backgroundColor?: string, customizeText?: ((info: { value?: Date | number | string, valueText?: string, point?: chartPointObject }) => string), font?: Font, format?: DevExpress.ui.format, visible?: boolean }, opacity?: number, visible?: boolean, width?: number } | boolean, width?: number };
        /**
         * Customizes an individual annotation.
         */
        customizeAnnotation?: ((annotation: dxChartAnnotationConfig | any) => dxChartAnnotationConfig);
        /**
         * Processes data before visualizing it.
         */
        dataPrepareSettings?: { checkTypeForAllData?: boolean, convertToAxisDataType?: boolean, sortingMethod?: boolean | ((a: any, b: any) => number) };
        /**
         * Specifies which pane should be used by default.
         */
        defaultPane?: string;
        /**
         * Specifies the properties of a chart's legend.
         */
        legend?: dxChartLegend;
        /**
         * Specifies a coefficient determining the diameter of the largest bubble.
         */
        maxBubbleSize?: number;
        /**
         * Specifies the diameter of the smallest bubble measured in pixels.
         */
        minBubbleSize?: number;
        /**
         * Forces the UI component to treat negative values as zeroes. Applies to stacked-like series only.
         */
        negativesAsZeroes?: boolean;
        /**
         * A function that is executed when a label on the argument axis is clicked or tapped.
         */
        onArgumentAxisClick?: ((e: { component?: dxChart, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, argument?: Date | number | string }) => any) | string;
        /**
         * A function that is executed when a legend item is clicked or tapped.
         */
        onLegendClick?: ((e: { component?: dxChart, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, target?: chartSeriesObject }) => any) | string;
        /**
         * A function that is executed when a series is clicked or tapped.
         */
        onSeriesClick?: ((e: { component?: dxChart, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, target?: chartSeriesObject }) => any) | string;
        /**
         * A function that is executed after the pointer enters or leaves a series.
         */
        onSeriesHoverChanged?: ((e: { component?: dxChart, element?: DevExpress.core.dxElement, model?: any, target?: chartSeriesObject }) => any);
        /**
         * A function that is executed when a series is selected or selection is canceled.
         */
        onSeriesSelectionChanged?: ((e: { component?: dxChart, element?: DevExpress.core.dxElement, model?: any, target?: chartSeriesObject }) => any);
        /**
         * A function that is executed when zooming or panning ends.
         */
        onZoomEnd?: ((e: { component?: dxChart, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, rangeStart?: Date | number, rangeEnd?: Date | number, axis?: chartAxisObject, range?: VizRange, previousRange?: VizRange, cancel?: boolean, actionType?: 'zoom' | 'pan', zoomFactor?: number, shift?: number }) => any);
        /**
         * A function that is executed when zooming or panning begins.
         */
        onZoomStart?: ((e: { component?: dxChart, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, axis?: chartAxisObject, range?: VizRange, cancel?: boolean, actionType?: 'zoom' | 'pan' }) => any);
        /**
         * Declares a collection of panes.
         */
        panes?: dxChartPanes | Array<dxChartPanes>;
        /**
         * Specifies whether panes can be resized if other chart elements require more space after zooming or panning.
         */
        resizePanesOnZoom?: boolean;
        /**
         * Specifies how the chart must behave when series point labels overlap.
         */
        resolveLabelOverlapping?: 'hide' | 'none' | 'stack';
        /**
         * Swaps the axes around making the value axis horizontal and the argument axis vertical.
         */
        rotated?: boolean;
        /**
         * Specifies the settings of the scroll bar.
         */
        scrollBar?: { color?: string, offset?: number, opacity?: number, position?: 'bottom' | 'left' | 'right' | 'top', visible?: boolean, width?: number };
        /**
         * Specifies properties for Chart UI component series.
         */
        series?: ChartSeries | Array<ChartSeries>;
        /**
         * Specifies whether a single series or multiple series can be selected in the chart.
         */
        seriesSelectionMode?: 'multiple' | 'single';
        /**
         * Defines properties for the series template.
         */
        seriesTemplate?: { customizeSeries?: ((seriesName: any) => ChartSeries), nameField?: string };
        /**
         * Specifies whether a point should remain in the hover state when the mouse pointer moves away.
         */
        stickyHovering?: boolean;
        /**
         * Indicates whether or not to synchronize value axes when they are displayed on a single pane.
         */
        synchronizeMultiAxes?: boolean;
        /**
         * Configures tooltips.
         */
        tooltip?: dxChartTooltip;
        /**
         * Configures the value axis.
         */
        valueAxis?: dxChartValueAxis | Array<dxChartValueAxis>;
        /**
         * Configures zooming and panning.
         */
        zoomAndPan?: { allowMouseWheel?: boolean, allowTouchGestures?: boolean, argumentAxis?: 'both' | 'none' | 'pan' | 'zoom', dragBoxStyle?: { color?: string, opacity?: number }, dragToZoom?: boolean, panKey?: 'alt' | 'ctrl' | 'meta' | 'shift', valueAxis?: 'both' | 'none' | 'pan' | 'zoom' };
    }
    /**
     * Configures the argument axis.
     */
    export interface dxChartArgumentAxis extends dxChartCommonAxisSettings {
        /**
         * Aggregates series points that fall into the same category.
         */
        aggregateByCategory?: boolean;
        /**
         * Specifies the length of aggregation intervals in pixels. Does not apply if aggregateByCategory is true. May be ignored in favor of the aggregationInterval property.
         */
        aggregationGroupWidth?: number;
        /**
         * Specifies the length of aggregation intervals in axis units. Applies only to axes of continuous and logarithmic types.
         */
        aggregationInterval?: number | any | 'day' | 'hour' | 'millisecond' | 'minute' | 'month' | 'quarter' | 'second' | 'week' | 'year';
        /**
         * Casts arguments to a specified data type.
         */
        argumentType?: 'datetime' | 'numeric' | 'string';
        /**
         * Specifies the minimum distance between two neighboring major ticks in pixels. Applies only to the axes of the 'continuous' and 'logarithmic' types.
         */
        axisDivisionFactor?: number;
        /**
         * Declares a scale break collection. Applies only if the axis' type is 'continuous' or 'logarithmic'.
         */
        breaks?: Array<ScaleBreak>;
        /**
         * Specifies the order of categories on an axis of the 'discrete' type.
         */
        categories?: Array<number | string | Date>;
        /**
         * Specifies the appearance of those constant lines that belong to the argument axis.
         */
        constantLineStyle?: dxChartArgumentAxisConstantLineStyle;
        /**
         * Declares a collection of constant lines belonging to the argument axis.
         */
        constantLines?: Array<dxChartArgumentAxisConstantLines>;
        /**
         * Specifies the position of the argument axis on the value axis.
         */
        customPosition?: number | Date | string;
        /**
         * Specifies the name of a value axis on which the argument axis should be positioned. Applies only to multi-axis charts.
         */
        customPositionAxis?: string;
        /**
         * Specifies whether to force the axis to start and end on ticks.
         */
        endOnTick?: boolean;
        /**
         * Dates to be excluded from the axis when workdaysOnly is true.
         */
        holidays?: Array<Date | string> | Array<number>;
        /**
         * Specifies chart elements to be highlighted when a user points to an axis label.
         */
        hoverMode?: 'allArgumentPoints' | 'none';
        /**
         * Configures the labels of the argument axis.
         */
        label?: dxChartArgumentAxisLabel;
        /**
         * Specifies a value used to calculate the range on a logarithmic axis within which the axis should be linear. Applies only if the data source contains negative values or zeroes.
         */
        linearThreshold?: number;
        /**
         * Specifies the value to be raised to a power when generating ticks for an axis of the 'logarithmic' type.
         */
        logarithmBase?: number;
        /**
         * Specifies the minimum length of the visual range.
         */
        minVisualRangeLength?: number | any | 'day' | 'hour' | 'millisecond' | 'minute' | 'month' | 'quarter' | 'second' | 'week' | 'year';
        /**
         * Specifies how many minor ticks to place between two neighboring major ticks.
         */
        minorTickCount?: number;
        /**
         * Specifies the interval between minor ticks. Applies only to the axes of the 'continuous' type.
         */
        minorTickInterval?: number | any | 'day' | 'hour' | 'millisecond' | 'minute' | 'month' | 'quarter' | 'second' | 'week' | 'year';
        /**
         * Specifies the shift in pixels of the argument axis.
         */
        offset?: number;
        /**
         * Relocates the argument axis.
         */
        position?: 'bottom' | 'left' | 'right' | 'top';
        /**
         * Dates to be included on the axis when workdaysOnly is true.
         */
        singleWorkdays?: Array<Date | string> | Array<number>;
        /**
         * Declares a collection of strips belonging to the argument axis.
         */
        strips?: Array<dxChartArgumentAxisStrips>;
        /**
         * Specifies the interval between major ticks.
         */
        tickInterval?: number | any | 'day' | 'hour' | 'millisecond' | 'minute' | 'month' | 'quarter' | 'second' | 'week' | 'year';
        /**
         * Configures the axis title.
         */
        title?: dxChartArgumentAxisTitle;
        /**
         * Specifies the type of the argument axis.
         */
        type?: 'continuous' | 'discrete' | 'logarithmic';
        /**
         * Defines the axis' displayed range. Cannot be wider than the wholeRange.
         */
        visualRange?: VizRange | Array<number | string | Date>;
        /**
         * Specifies how the axis's visual range should behave when chart data is updated.
         */
        visualRangeUpdateMode?: 'auto' | 'keep' | 'reset' | 'shift';
        /**
         * Defines the range where the axis can be zoomed and panned.
         */
        wholeRange?: VizRange | Array<number | string | Date>;
        /**
         * Specifies which days are workdays. The array can contain values from 0 (Sunday) to 6 (Saturday). Applies only if workdaysOnly is true.
         */
        workWeek?: Array<number>;
        /**
         * Leaves only workdays on the axis: the work week days plus single workdays minus holidays. Applies only if the axis' argumentType is 'datetime'.
         */
        workdaysOnly?: boolean;
    }
    /**
     * Specifies the appearance of those constant lines that belong to the argument axis.
     */
    export interface dxChartArgumentAxisConstantLineStyle extends dxChartCommonAxisSettingsConstantLineStyle {
        /**
         * Specifies the appearance of the labels of those constant lines that belong to the argument axis.
         */
        label?: dxChartArgumentAxisConstantLineStyleLabel;
    }
    /**
     * Specifies the appearance of the labels of those constant lines that belong to the argument axis.
     */
    export interface dxChartArgumentAxisConstantLineStyleLabel extends dxChartCommonAxisSettingsConstantLineStyleLabel {
        /**
         * Aligns constant line labels in the horizontal direction.
         */
        horizontalAlignment?: 'center' | 'left' | 'right';
        /**
         * Aligns constant line labels in the vertical direction.
         */
        verticalAlignment?: 'bottom' | 'center' | 'top';
    }
    /**
     * Declares a collection of constant lines belonging to the argument axis.
     */
    export interface dxChartArgumentAxisConstantLines extends dxChartCommonAxisSettingsConstantLineStyle {
        /**
         * Specifies whether to display the constant line behind or in front of the series.
         */
        displayBehindSeries?: boolean;
        /**
         * Specifies whether to extend the axis's default visual range to display the constant line.
         */
        extendAxis?: boolean;
        /**
         * Configures the constant line label.
         */
        label?: dxChartArgumentAxisConstantLinesLabel;
        /**
         * Specifies the value indicated by a constant line. Setting this property is necessary.
         */
        value?: number | Date | string;
    }
    /**
     * Configures the constant line label.
     */
    export interface dxChartArgumentAxisConstantLinesLabel extends dxChartCommonAxisSettingsConstantLineStyleLabel {
        /**
         * Aligns constant line labels in the horizontal direction.
         */
        horizontalAlignment?: 'center' | 'left' | 'right';
        /**
         * Specifies the text of a constant line label. By default, equals to the value of the constant line.
         */
        text?: string;
        /**
         * Aligns constant line labels in the vertical direction.
         */
        verticalAlignment?: 'bottom' | 'center' | 'top';
    }
    /**
     * Configures the labels of the argument axis.
     */
    export interface dxChartArgumentAxisLabel extends dxChartCommonAxisSettingsLabel {
        /**
         * Specifies the hint that appears when a user points to an axis label.
         */
        customizeHint?: ((argument: { value?: Date | number | string, valueText?: string }) => string);
        /**
         * Customizes the text displayed by axis labels.
         */
        customizeText?: ((argument: { value?: Date | number | string, valueText?: string }) => string);
        /**
         * Formats a value before it is displayed in an axis label.
         */
        format?: DevExpress.ui.format;
    }
    /**
     * Declares a collection of strips belonging to the argument axis.
     */
    export interface dxChartArgumentAxisStrips extends dxChartCommonAxisSettingsStripStyle {
        /**
         * Specifies the color of the strip.
         */
        color?: string;
        /**
         * Along with the startValue property, limits the strip.
         */
        endValue?: number | Date | string;
        /**
         * Configures the strip label.
         */
        label?: dxChartArgumentAxisStripsLabel;
        /**
         * Along with the endValue property, limits the strip.
         */
        startValue?: number | Date | string;
    }
    /**
     * Configures the strip label.
     */
    export interface dxChartArgumentAxisStripsLabel extends dxChartCommonAxisSettingsStripStyleLabel {
        /**
         * Specifies the text of the strip label.
         */
        text?: string;
    }
    /**
     * Configures the axis title.
     */
    export interface dxChartArgumentAxisTitle extends dxChartCommonAxisSettingsTitle {
        /**
         * Specifies the text of the axis title.
         */
        text?: string;
    }
    /**
     * Defines common settings for both the argument and value axis in a chart.
     */
    export interface dxChartCommonAxisSettings {
        /**
         * Specifies whether to allow decimal values on the axis. When false, the axis contains integer values only.
         */
        allowDecimals?: boolean;
        /**
         * Configures the scale breaks' appearance.
         */
        breakStyle?: { color?: string, line?: 'straight' | 'waved', width?: number };
        /**
         * Specifies the color of the axis line.
         */
        color?: string;
        /**
         * Configures the appearance of all constant lines in the UI component.
         */
        constantLineStyle?: dxChartCommonAxisSettingsConstantLineStyle;
        /**
         * Specifies whether ticks and grid lines should cross axis labels or lie between them. Applies only to the axes of the 'discrete' type.
         */
        discreteAxisDivisionMode?: 'betweenLabels' | 'crossLabels';
        /**
         * Specifies whether to force the axis to start and end on ticks.
         */
        endOnTick?: boolean;
        /**
         * Configures the grid.
         */
        grid?: { color?: string, opacity?: number, visible?: boolean, width?: number };
        /**
         * Inverts the axis.
         */
        inverted?: boolean;
        /**
         * Configures axis labels.
         */
        label?: dxChartCommonAxisSettingsLabel;
        /**
         * Controls the empty space between the maximum series points and the axis. Applies only to the axes of the 'continuous' and 'logarithmic' type.
         */
        maxValueMargin?: number;
        /**
         * Controls the empty space between the minimum series points and the axis. Applies only to the axes of the 'continuous' and 'logarithmic' type.
         */
        minValueMargin?: number;
        /**
         * Configures the minor grid.
         */
        minorGrid?: { color?: string, opacity?: number, visible?: boolean, width?: number };
        /**
         * Configures the appearance of minor axis ticks.
         */
        minorTick?: { color?: string, length?: number, opacity?: number, shift?: number, visible?: boolean, width?: number };
        /**
         * Specifies how transparent the axis line should be.
         */
        opacity?: number;
        /**
         * Reserves a pixel-measured space for the axis.
         */
        placeholderSize?: number;
        /**
         * Configures the appearance of strips.
         */
        stripStyle?: dxChartCommonAxisSettingsStripStyle;
        /**
         * Configures the appearance of major axis ticks.
         */
        tick?: { color?: string, length?: number, opacity?: number, shift?: number, visible?: boolean, width?: number };
        /**
         * Configures axis titles.
         */
        title?: dxChartCommonAxisSettingsTitle;
        /**
         * Adds an empty space between the axis and the minimum and maximum series points.
         */
        valueMarginsEnabled?: boolean;
        /**
         * Makes the axis line visible.
         */
        visible?: boolean;
        /**
         * Specifies the width of the axis line in pixels.
         */
        width?: number;
    }
    /**
     * Configures the appearance of all constant lines in the UI component.
     */
    export interface dxChartCommonAxisSettingsConstantLineStyle {
        /**
         * Specifies the color of constant lines.
         */
        color?: string;
        /**
         * Specifies the dash style of constant lines.
         */
        dashStyle?: 'dash' | 'dot' | 'longDash' | 'solid';
        /**
         * Configures constant line labels.
         */
        label?: dxChartCommonAxisSettingsConstantLineStyleLabel;
        /**
         * Generates a pixel-measured empty space between the left/right side of a constant line and the constant line label.
         */
        paddingLeftRight?: number;
        /**
         * Generates a pixel-measured empty space between the top/bottom side of a constant line and the constant line label.
         */
        paddingTopBottom?: number;
        /**
         * Specifies the width of constant lines in pixels.
         */
        width?: number;
    }
    /**
     * Configures constant line labels.
     */
    export interface dxChartCommonAxisSettingsConstantLineStyleLabel {
        /**
         * Specifies font properties for constant line labels.
         */
        font?: Font;
        /**
         * Specifies the position of constant line labels on the chart plot.
         */
        position?: 'inside' | 'outside';
        /**
         * Makes constant line labels visible.
         */
        visible?: boolean;
    }
    /**
     * Configures axis labels.
     */
    export interface dxChartCommonAxisSettingsLabel {
        /**
         * Aligns axis labels in relation to ticks.
         */
        alignment?: 'center' | 'left' | 'right';
        /**
         * Allows you to rotate or stagger axis labels. Applies to the horizontal axis only.
         */
        displayMode?: 'rotate' | 'stagger' | 'standard';
        /**
         * Specifies font properties for axis labels.
         */
        font?: Font;
        /**
         * Adds a pixel-measured empty space between an axis and its labels.
         */
        indentFromAxis?: number;
        /**
         * Decides how to arrange axis labels when there is not enough space to keep all of them.
         */
        overlappingBehavior?: 'rotate' | 'stagger' | 'none' | 'hide';
        /**
         * Specifies the position of labels relative to the chart or its axis.
         */
        position?: 'inside' | 'outside' | 'bottom' | 'left' | 'right' | 'top';
        /**
         * Specifies the rotation angle of axis labels. Applies only if displayMode or overlappingBehavior is 'rotate'.
         */
        rotationAngle?: number;
        /**
         * Adds a pixel-measured empty space between two staggered rows of axis labels. Applies only if displayMode or overlappingBehavior is 'stagger'.
         */
        staggeringSpacing?: number;
        /**
         * Specifies a custom template for axis labels.
         */
        template?: DevExpress.core.template | ((data: { value?: Date | number | string, valueText?: string }, element: SVGGElement) => string | SVGElement | JQuery);
        /**
         * Specifies what to do with axis labels that overflow the allocated space after applying wordWrap: hide, truncate them and display an ellipsis, or do nothing.
         */
        textOverflow?: 'ellipsis' | 'hide' | 'none';
        /**
         * Shows/hides axis labels.
         */
        visible?: boolean;
        /**
         * Specifies how to wrap texts that do not fit into a single line.
         */
        wordWrap?: 'normal' | 'breakWord' | 'none';
    }
    /**
     * Configures the appearance of strips.
     */
    export interface dxChartCommonAxisSettingsStripStyle {
        /**
         * Configures the appearance of strip labels.
         */
        label?: dxChartCommonAxisSettingsStripStyleLabel;
        /**
         * Generates a pixel-measured empty space between the left/right border of a strip and the strip label.
         */
        paddingLeftRight?: number;
        /**
         * Generates a pixel-measured empty space between the top/bottom border of a strip and the strip label.
         */
        paddingTopBottom?: number;
    }
    /**
     * Configures the appearance of strip labels.
     */
    export interface dxChartCommonAxisSettingsStripStyleLabel {
        /**
         * Specifies font properties for strip labels.
         */
        font?: Font;
        /**
         * Aligns strip labels in the horizontal direction.
         */
        horizontalAlignment?: 'center' | 'left' | 'right';
        /**
         * Aligns strip labels in the vertical direction.
         */
        verticalAlignment?: 'bottom' | 'center' | 'top';
    }
    /**
     * Configures axis titles.
     */
    export interface dxChartCommonAxisSettingsTitle {
        /**
         * Aligns the axis title to the left, center, or right of the axis.
         */
        alignment?: 'center' | 'left' | 'right';
        /**
         * Specifies font properties for the axis title.
         */
        font?: Font;
        /**
         * Adds a pixel-measured empty space between the axis title and axis labels.
         */
        margin?: number;
        /**
         * Specifies what to do with the axis title when it overflows the allocated space after applying wordWrap: hide, truncate them and display an ellipsis, or do nothing.
         */
        textOverflow?: 'ellipsis' | 'hide' | 'none';
        /**
         * Specifies how to wrap the axis title if it does not fit into a single line.
         */
        wordWrap?: 'normal' | 'breakWord' | 'none';
    }
    /**
     * Defines common settings for all panes in a chart.
     */
    export interface dxChartCommonPaneSettings {
        /**
         * Specifies the color of the pane's background.
         */
        backgroundColor?: string;
        /**
         * Configures the pane border.
         */
        border?: { bottom?: boolean, color?: string, dashStyle?: 'dash' | 'dot' | 'longDash' | 'solid', left?: boolean, opacity?: number, right?: boolean, top?: boolean, visible?: boolean, width?: number };
    }
    /**
     * Specifies settings common for all series in the chart.
     */
    export interface dxChartCommonSeriesSettings extends dxChartSeriesTypesCommonSeries {
        /**
         * Defines common settings for all area series.
         */
        area?: any;
        /**
         * Defines common settings for all bar series.
         */
        bar?: any;
        /**
         * Defines common settings for all bubble series.
         */
        bubble?: any;
        /**
         * Defines common settings for all candlestick series.
         */
        candlestick?: any;
        /**
         * Defines common settings for all full-stacked area series.
         */
        fullstackedarea?: any;
        /**
         * Defines common settings for all full-stacked bar series.
         */
        fullstackedbar?: any;
        /**
         * Defines common settings for all full-stacked line series.
         */
        fullstackedline?: any;
        /**
         * Defines common settings for all full-stacked spline series.
         */
        fullstackedspline?: any;
        /**
         * Defines common settings for all full-stacked spline area series.
         */
        fullstackedsplinearea?: any;
        /**
         * Defines common settings for all line series.
         */
        line?: any;
        /**
         * Defines common settings for all range area series.
         */
        rangearea?: any;
        /**
         * Defines common settings for all range bar series.
         */
        rangebar?: any;
        /**
         * Defines common settings for all scatter series.
         */
        scatter?: any;
        /**
         * Defines common settings for all spline series.
         */
        spline?: any;
        /**
         * Defines common settings for all spline area series.
         */
        splinearea?: any;
        /**
         * Defines common settings for all stacked area series.
         */
        stackedarea?: any;
        /**
         * Defines common settings for all stacked bar series.
         */
        stackedbar?: any;
        /**
         * Defines common settings for all stacked line series.
         */
        stackedline?: any;
        /**
         * Defines common settings for all stacked spline series.
         */
        stackedspline?: any;
        /**
         * Defines common settings for all stacked spline area series.
         */
        stackedsplinearea?: any;
        /**
         * Defines common settings for all step area series.
         */
        steparea?: any;
        /**
         * Defines common settings for all step line series.
         */
        stepline?: any;
        /**
         * Defines common settings for all stock series.
         */
        stock?: any;
        /**
         * Specifies the type of the series.
         */
        type?: 'area' | 'bar' | 'bubble' | 'candlestick' | 'fullstackedarea' | 'fullstackedbar' | 'fullstackedline' | 'fullstackedspline' | 'fullstackedsplinearea' | 'line' | 'rangearea' | 'rangebar' | 'scatter' | 'spline' | 'splinearea' | 'stackedarea' | 'stackedbar' | 'stackedline' | 'stackedspline' | 'stackedsplinearea' | 'steparea' | 'stepline' | 'stock';
    }
    /**
     * Specifies the properties of a chart's legend.
     */
    export interface dxChartLegend extends BaseChartLegend {
        /**
         * Specifies the text for a hint that appears when a user hovers the mouse pointer over a legend item.
         */
        customizeHint?: ((seriesInfo: { seriesName?: any, seriesIndex?: number, seriesColor?: string }) => string);
        /**
         * Specifies a callback function that returns the text to be displayed by a legend item.
         */
        customizeText?: ((seriesInfo: { seriesName?: any, seriesIndex?: number, seriesColor?: string }) => string);
        /**
         * Specifies what series elements to highlight when a corresponding item in the legend is hovered over.
         */
        hoverMode?: 'excludePoints' | 'includePoints' | 'none';
        /**
         * Specifies whether the legend is located outside or inside the chart's plot.
         */
        position?: 'inside' | 'outside';
    }
    /**
     * Declares a collection of panes.
     */
    export interface dxChartPanes extends dxChartCommonPaneSettings {
        /**
         * Specifies the pane's height (or width when the chart is rotated) in a multi-pane chart.
         */
        height?: number | string;
        /**
         * Specifies the name of the pane.
         */
        name?: string;
    }
    /**
     * Configures tooltips.
     */
    export interface dxChartTooltip extends BaseChartTooltip {
        /**
         * Specifies whether the tooltip must be located in the center of a series point or on its edge. Applies to bar-like and bubble series only.
         */
        location?: 'center' | 'edge';
    }
    /**
     * Configures the value axis.
     */
    export interface dxChartValueAxis extends dxChartCommonAxisSettings {
        /**
         * Enables auto-calculated scale breaks. Applies only if the axis' type is 'continuous' or 'logarithmic' and valueType is 'numeric'.
         */
        autoBreaksEnabled?: boolean;
        /**
         * Specifies the minimum distance between two neighboring major ticks in pixels. Applies only to the axes of the 'continuous' and 'logarithmic' types.
         */
        axisDivisionFactor?: number;
        /**
         * Declares a custom scale break collection. Applies only if the axis' type is 'continuous' or 'logarithmic'.
         */
        breaks?: Array<ScaleBreak>;
        /**
         * Specifies the order of categories on an axis of the 'discrete' type.
         */
        categories?: Array<number | string | Date>;
        /**
         * Specifies the appearance of those constant lines that belong to the value axis.
         */
        constantLineStyle?: dxChartValueAxisConstantLineStyle;
        /**
         * Declares a collection of constant lines belonging to the value axis.
         */
        constantLines?: Array<dxChartValueAxisConstantLines>;
        /**
         * Specifies the position of the value axis on the argument axis.
         */
        customPosition?: number | Date | string;
        /**
         * Specifies whether to force the axis to start and end on ticks.
         */
        endOnTick?: boolean;
        /**
         * Configures the labels of the value axis.
         */
        label?: dxChartValueAxisLabel;
        /**
         * Specifies a value used to calculate the range on a logarithmic axis within which the axis should be linear. Applies only if the data source contains negative values or zeroes.
         */
        linearThreshold?: number;
        /**
         * Specifies the value to be raised to a power when generating ticks for an axis of the 'logarithmic' type.
         */
        logarithmBase?: number;
        /**
         * Sets a limit on auto-calculated scale breaks. Custom scale breaks are not counted.
         */
        maxAutoBreakCount?: number;
        /**
         * Specifies the minimum length of the visual range.
         */
        minVisualRangeLength?: number | any | 'day' | 'hour' | 'millisecond' | 'minute' | 'month' | 'quarter' | 'second' | 'week' | 'year';
        /**
         * Specifies how many minor ticks to place between two neighboring major ticks.
         */
        minorTickCount?: number;
        /**
         * Specifies the interval between minor ticks. Applies only to continuous axes.
         */
        minorTickInterval?: number | any | 'day' | 'hour' | 'millisecond' | 'minute' | 'month' | 'quarter' | 'second' | 'week' | 'year';
        /**
         * Adds a pixel-measured empty space between two side-by-side value axes. Applies if several value axes are located on one side of the chart.
         */
        multipleAxesSpacing?: number;
        /**
         * Specifies the name of the value axis.
         */
        name?: string;
        /**
         * Specifies the shift in pixels of the value axis.
         */
        offset?: number;
        /**
         * Binds the value axis to a pane.
         */
        pane?: string;
        /**
         * Relocates the value axis.
         */
        position?: 'bottom' | 'left' | 'right' | 'top';
        /**
         * Specifies whether or not to show zero on the value axis.
         */
        showZero?: boolean;
        /**
         * Declares a collection of strips belonging to the value axis.
         */
        strips?: Array<dxChartValueAxisStrips>;
        /**
         * Synchronizes two or more value axes with each other at a specific value.
         */
        synchronizedValue?: number;
        /**
         * Specifies the interval between major ticks. Does not apply to discrete axes.
         */
        tickInterval?: number | any | 'day' | 'hour' | 'millisecond' | 'minute' | 'month' | 'quarter' | 'second' | 'week' | 'year';
        /**
         * Configures the axis title.
         */
        title?: dxChartValueAxisTitle;
        /**
         * Specifies the type of the value axis.
         */
        type?: 'continuous' | 'discrete' | 'logarithmic';
        /**
         * Casts values to a specified data type.
         */
        valueType?: 'datetime' | 'numeric' | 'string';
        /**
         * Defines the axis' displayed range. Cannot be wider than the wholeRange.
         */
        visualRange?: VizRange | Array<number | string | Date>;
        /**
         * Specifies how the axis's visual range should behave when chart data is updated.
         */
        visualRangeUpdateMode?: 'auto' | 'keep' | 'reset' | 'shift';
        /**
         * Defines the range where the axis can be zoomed and panned.
         */
        wholeRange?: VizRange | Array<number | string | Date>;
    }
    /**
     * Specifies the appearance of those constant lines that belong to the value axis.
     */
    export interface dxChartValueAxisConstantLineStyle extends dxChartCommonAxisSettingsConstantLineStyle {
        /**
         * Specifies the appearance of the labels of those constant lines that belong to the value axis.
         */
        label?: dxChartValueAxisConstantLineStyleLabel;
    }
    /**
     * Specifies the appearance of the labels of those constant lines that belong to the value axis.
     */
    export interface dxChartValueAxisConstantLineStyleLabel extends dxChartCommonAxisSettingsConstantLineStyleLabel {
        /**
         * Aligns constant line labels in the horizontal direction.
         */
        horizontalAlignment?: 'center' | 'left' | 'right';
        /**
         * Aligns constant line labels in the vertical direction.
         */
        verticalAlignment?: 'bottom' | 'center' | 'top';
    }
    /**
     * Declares a collection of constant lines belonging to the value axis.
     */
    export interface dxChartValueAxisConstantLines extends dxChartCommonAxisSettingsConstantLineStyle {
        /**
         * Specifies whether to display the constant line behind or in front of the series.
         */
        displayBehindSeries?: boolean;
        /**
         * Specifies whether to extend the axis's default visual range to display the constant line.
         */
        extendAxis?: boolean;
        /**
         * Configures the constant line label.
         */
        label?: dxChartValueAxisConstantLinesLabel;
        /**
         * Specifies the value indicated by a constant line. Setting this property is necessary.
         */
        value?: number | Date | string;
    }
    /**
     * Configures the constant line label.
     */
    export interface dxChartValueAxisConstantLinesLabel extends dxChartCommonAxisSettingsConstantLineStyleLabel {
        /**
         * Aligns constant line labels in the horizontal direction.
         */
        horizontalAlignment?: 'center' | 'left' | 'right';
        /**
         * Specifies the text of a constant line label. By default, equals to the value of the constant line.
         */
        text?: string;
        /**
         * Aligns constant line labels in the vertical direction.
         */
        verticalAlignment?: 'bottom' | 'center' | 'top';
    }
    /**
     * Configures the labels of the value axis.
     */
    export interface dxChartValueAxisLabel extends dxChartCommonAxisSettingsLabel {
        /**
         * Specifies the hint that appears when a user points to an axis label.
         */
        customizeHint?: ((axisValue: { value?: Date | number | string, valueText?: string }) => string);
        /**
         * Customizes the text displayed by axis labels.
         */
        customizeText?: ((axisValue: { value?: Date | number | string, valueText?: string }) => string);
        /**
         * Formats a value before it is displayed in an axis label.
         */
        format?: DevExpress.ui.format;
    }
    /**
     * Declares a collection of strips belonging to the value axis.
     */
    export interface dxChartValueAxisStrips extends dxChartCommonAxisSettingsStripStyle {
        /**
         * Specifies the color of the strip.
         */
        color?: string;
        /**
         * Along with the startValue property, limits the strip.
         */
        endValue?: number | Date | string;
        /**
         * Configures the strip label.
         */
        label?: dxChartValueAxisStripsLabel;
        /**
         * Along with the endValue property, limits the strip.
         */
        startValue?: number | Date | string;
    }
    /**
     * Configures the strip label.
     */
    export interface dxChartValueAxisStripsLabel extends dxChartCommonAxisSettingsStripStyleLabel {
        /**
         * Specifies the text of the strip label.
         */
        text?: string;
    }
    /**
     * Configures the axis title.
     */
    export interface dxChartValueAxisTitle extends dxChartCommonAxisSettingsTitle {
        /**
         * Specifies the text of the axis title.
         */
        text?: string;
    }
    /**
     * The Chart is a UI component that visualizes data from a local or remote storage using a great variety of series types along with different interactive elements, such as tooltips, crosshair pointer, legend, etc.
     */
    export class dxChart extends BaseChart {
        constructor(element: Element, options?: dxChartOptions)
        constructor(element: JQuery, options?: dxChartOptions)
        /**
         * Gets the argument axis.
         */
        getArgumentAxis(): chartAxisObject;
        /**
         * Gets a value axis.
         */
        getValueAxis(): chartAxisObject;
        /**
         * Gets a value axis with the specified name.
         */
        getValueAxis(name: string): chartAxisObject;
        /**
         * Resets the visual ranges of both axes to the data range or to the whole range if it is within the data range.
         */
        resetVisualRange(): void;
        /**
         * Sets the argument axis' start and end values.
         */
        zoomArgument(startValue: number | Date | string, endValue: number | Date | string): void;
    }
    /**
     * 
     */
    export interface dxChartAnnotationConfig extends dxChartCommonAnnotationConfig {
        /**
         * Specifies the annotation's name.
         */
        name?: string;
    }
    /**
     * 
     */
    export interface dxChartCommonAnnotationConfig extends BaseChartAnnotationConfig {
        /**
         * Specifies the name of the value axis on which the value is specified. Useful for a multi-axis chart.
         */
        axis?: string;
        /**
         * Customizes the text and appearance of the annotation's tooltip.
         */
        customizeTooltip?: ((annotation: dxChartAnnotationConfig | any) => any);
        /**
         * Specifies a custom template for the annotation. Applies only if the type is 'custom'.
         */
        template?: DevExpress.core.template | ((annotation: dxChartAnnotationConfig | any, element: SVGGElement) => string | SVGElement | JQuery);
        /**
         * Specifies a custom template for an annotation's tooltip.
         */
        tooltipTemplate?: DevExpress.core.template | ((annotation: dxChartAnnotationConfig | any, element: DevExpress.core.dxElement) => string | Element | JQuery);
    }
    /**
     * This section lists objects that define properties used to configure series of specific types.
     */
    interface dxChartSeriesTypes {
        /**
         * Describes settings supported by a series of the area type.
         */
        AreaSeries?: dxChartSeriesTypesAreaSeries;
        /**
         * Describes settings supported by a series of the bar type.
         */
        BarSeries?: dxChartSeriesTypesBarSeries;
        /**
         * Describes settings supported by a series of the bubble type.
         */
        BubbleSeries?: dxChartSeriesTypesBubbleSeries;
        /**
         * Describes settings supported by a series of the candlestick type.
         */
        CandleStickSeries?: dxChartSeriesTypesCandleStickSeries;
        /**
         * An object that defines configuration properties for chart series.
         */
        CommonSeries?: dxChartSeriesTypesCommonSeries;
        /**
         * Describes settings supported by a series of the full-stacked area type.
         */
        FullStackedAreaSeries?: dxChartSeriesTypesFullStackedAreaSeries;
        /**
         * Describes settings supported by a series of the full-stacked bar type.
         */
        FullStackedBarSeries?: dxChartSeriesTypesFullStackedBarSeries;
        /**
         * Describes settings supported by a series of the full-stacked line type.
         */
        FullStackedLineSeries?: dxChartSeriesTypesFullStackedLineSeries;
        /**
         * Describes settings supported by a series of the full-stacked spline area type.
         */
        FullStackedSplineAreaSeries?: dxChartSeriesTypesFullStackedSplineAreaSeries;
        /**
         * Describes settings supported by a series of the full-stacked spline area type. An object defining a series of the fullStackedSpline type.
         */
        FullStackedSplineSeries?: dxChartSeriesTypesFullStackedSplineSeries;
        /**
         * Describes settings supported by a series of the line type.
         */
        LineSeries?: dxChartSeriesTypesLineSeries;
        /**
         * Describes settings supported by a series of the range area type.
         */
        RangeAreaSeries?: dxChartSeriesTypesRangeAreaSeries;
        /**
         * Describes settings supported by a series of the range bar type.
         */
        RangeBarSeries?: dxChartSeriesTypesRangeBarSeries;
        /**
         * Describes settings supported by a series of the scatter type.
         */
        ScatterSeries?: dxChartSeriesTypesScatterSeries;
        /**
         * Describes settings supported by a series of the spline area type.
         */
        SplineAreaSeries?: dxChartSeriesTypesSplineAreaSeries;
        /**
         * Describes settings supported by a series of the spline type.
         */
        SplineSeries?: dxChartSeriesTypesSplineSeries;
        /**
         * Describes settings supported by a series of the stacked area type.
         */
        StackedAreaSeries?: dxChartSeriesTypesStackedAreaSeries;
        /**
         * Describes settings supported by a series of the stacked bar type.
         */
        StackedBarSeries?: dxChartSeriesTypesStackedBarSeries;
        /**
         * Describes settings supported by a series of the stacked line type.
         */
        StackedLineSeries?: dxChartSeriesTypesStackedLineSeries;
        /**
         * Describes settings supported by a series of the stacked spline area type.
         */
        StackedSplineAreaSeries?: dxChartSeriesTypesStackedSplineAreaSeries;
        /**
         * Describes settings supported by a series of the stacked spline type.
         */
        StackedSplineSeries?: dxChartSeriesTypesStackedSplineSeries;
        /**
         * Describes settings supported by a series of the step rea type.
         */
        StepAreaSeries?: dxChartSeriesTypesStepAreaSeries;
        /**
         * Describes settings supported by a series of the step line type.
         */
        StepLineSeries?: dxChartSeriesTypesStepLineSeries;
        /**
         * Describes settings supported by a series of the stock type.
         */
        StockSeries?: dxChartSeriesTypesStockSeries;
    }
    /**
     * Describes settings supported by a series of the area type.
     */
    interface dxChartSeriesTypesAreaSeries extends dxChartSeriesTypesCommonSeries {
        /**
         * Configures data aggregation for the series.
         */
        aggregation?: dxChartSeriesTypesAreaSeriesAggregation;
        /**
         * Specifies series elements to be highlighted when a user points to a series.
         */
        hoverMode?: 'nearestPoint' | 'includePoints' | 'excludePoints' | 'none';
        /**
         * Configures point labels.
         */
        label?: dxChartSeriesTypesAreaSeriesLabel;
        /**
         * Configures series points in scatter, line- and area-like series.
         */
        point?: dxChartSeriesTypesAreaSeriesPoint;
        /**
         * Specifies series elements to be highlighted when a user selects a series.
         */
        selectionMode?: 'includePoints' | 'excludePoints' | 'none';
    }
    /**
     * Configures data aggregation for the series.
     */
    interface dxChartSeriesTypesAreaSeriesAggregation extends dxChartSeriesTypesCommonSeriesAggregation {
        /**
         * Specifies how to aggregate series points.
         */
        method?: 'avg' | 'count' | 'max' | 'min' | 'sum' | 'custom';
    }
    /**
     * Configures point labels.
     */
    interface dxChartSeriesTypesAreaSeriesLabel extends dxChartSeriesTypesCommonSeriesLabel {
        /**
         * Customizes the text displayed by point labels.
         */
        customizeText?: ((pointInfo: any) => string);
    }
    /**
     * Configures series points in scatter, line- and area-like series.
     */
    interface dxChartSeriesTypesAreaSeriesPoint extends dxChartSeriesTypesCommonSeriesPoint {
        /**
         * Makes the series points visible.
         */
        visible?: boolean;
    }
    /**
     * Describes settings supported by a series of the bar type.
     */
    interface dxChartSeriesTypesBarSeries extends dxChartSeriesTypesCommonSeries {
        /**
         * Configures data aggregation for the series.
         */
        aggregation?: dxChartSeriesTypesBarSeriesAggregation;
        /**
         * Specifies series elements to be highlighted when a user points to a series.
         */
        hoverMode?: 'onlyPoint' | 'allSeriesPoints' | 'allArgumentPoints' | 'none';
        /**
         * Configures point labels.
         */
        label?: dxChartSeriesTypesBarSeriesLabel;
        /**
         * Specifies series elements to be highlighted when a user selects a bar.
         */
        selectionMode?: 'onlyPoint' | 'allSeriesPoints' | 'allArgumentPoints' | 'none';
    }
    /**
     * Configures data aggregation for the series.
     */
    interface dxChartSeriesTypesBarSeriesAggregation extends dxChartSeriesTypesCommonSeriesAggregation {
        /**
         * Specifies how to aggregate series points.
         */
        method?: 'avg' | 'count' | 'max' | 'min' | 'sum' | 'custom';
    }
    /**
     * Configures point labels.
     */
    interface dxChartSeriesTypesBarSeriesLabel extends dxChartSeriesTypesCommonSeriesLabel {
        /**
         * Customizes the text displayed by point labels.
         */
        customizeText?: ((pointInfo: any) => string);
    }
    /**
     * Describes settings supported by a series of the bubble type.
     */
    interface dxChartSeriesTypesBubbleSeries extends dxChartSeriesTypesCommonSeries {
        /**
         * Configures data aggregation for the series.
         */
        aggregation?: dxChartSeriesTypesBubbleSeriesAggregation;
        /**
         * Specifies series elements to be highlighted when a user points to a series.
         */
        hoverMode?: 'onlyPoint' | 'allSeriesPoints' | 'allArgumentPoints' | 'none';
        /**
         * Configures point labels.
         */
        label?: dxChartSeriesTypesBubbleSeriesLabel;
        /**
         * Specifies series elements to be highlighted when a user selects a bubble.
         */
        selectionMode?: 'onlyPoint' | 'allSeriesPoints' | 'allArgumentPoints' | 'none';
    }
    /**
     * Configures data aggregation for the series.
     */
    interface dxChartSeriesTypesBubbleSeriesAggregation extends dxChartSeriesTypesCommonSeriesAggregation {
        /**
         * Specifies how to aggregate series points.
         */
        method?: 'avg' | 'custom';
    }
    /**
     * Configures point labels.
     */
    interface dxChartSeriesTypesBubbleSeriesLabel extends dxChartSeriesTypesCommonSeriesLabel {
        /**
         * Customizes the text displayed by point labels.
         */
        customizeText?: ((pointInfo: any) => string);
    }
    /**
     * Describes settings supported by a series of the candlestick type.
     */
    interface dxChartSeriesTypesCandleStickSeries extends dxChartSeriesTypesCommonSeries {
        /**
         * Configures data aggregation for the series.
         */
        aggregation?: dxChartSeriesTypesCandleStickSeriesAggregation;
        /**
         * Specifies which data source field provides arguments for series points.
         */
        argumentField?: string;
        /**
         * Specifies series elements to be highlighted when a user pauses on a series.
         */
        hoverMode?: 'onlyPoint' | 'allSeriesPoints' | 'allArgumentPoints' | 'none';
        /**
         * Configures the appearance adopted by the series when a user points to it.
         */
        hoverStyle?: dxChartSeriesTypesCandleStickSeriesHoverStyle;
        /**
         * Configures point labels.
         */
        label?: dxChartSeriesTypesCandleStickSeriesLabel;
        /**
         * Specifies series elements to be highlighted when a user selects a point.
         */
        selectionMode?: 'onlyPoint' | 'allSeriesPoints' | 'allArgumentPoints' | 'none';
        /**
         * Configures the appearance adopted by the series when a user selects it.
         */
        selectionStyle?: dxChartSeriesTypesCandleStickSeriesSelectionStyle;
    }
    /**
     * Configures data aggregation for the series.
     */
    interface dxChartSeriesTypesCandleStickSeriesAggregation extends dxChartSeriesTypesCommonSeriesAggregation {
        /**
         * Specifies how to aggregate series points.
         */
        method?: 'ohlc' | 'custom';
    }
    /**
     * Configures the appearance adopted by the series when a user points to it.
     */
    interface dxChartSeriesTypesCandleStickSeriesHoverStyle extends dxChartSeriesTypesCommonSeriesHoverStyle {
        /**
         * Configures hatching that applies when a user points to the series.
         */
        hatching?: dxChartSeriesTypesCandleStickSeriesHoverStyleHatching;
    }
    /**
     * Configures hatching that applies when a user points to the series.
     */
    interface dxChartSeriesTypesCandleStickSeriesHoverStyleHatching extends dxChartSeriesTypesCommonSeriesHoverStyleHatching {
        /**
         * Specifies the direction of hatching lines.
         */
        direction?: 'left' | 'none' | 'right';
    }
    /**
     * Configures point labels.
     */
    interface dxChartSeriesTypesCandleStickSeriesLabel extends dxChartSeriesTypesCommonSeriesLabel {
        /**
         * Customizes the text displayed by point labels.
         */
        customizeText?: ((pointInfo: any) => string);
    }
    /**
     * Configures the appearance adopted by the series when a user selects it.
     */
    interface dxChartSeriesTypesCandleStickSeriesSelectionStyle extends dxChartSeriesTypesCommonSeriesSelectionStyle {
        /**
         * Configures hatching that applies when a user selects the series.
         */
        hatching?: dxChartSeriesTypesCandleStickSeriesSelectionStyleHatching;
    }
    /**
     * Configures hatching that applies when a user selects the series.
     */
    interface dxChartSeriesTypesCandleStickSeriesSelectionStyleHatching extends dxChartSeriesTypesCommonSeriesSelectionStyleHatching {
        /**
         * Specifies the direction of hatching lines.
         */
        direction?: 'left' | 'none' | 'right';
    }
    /**
     * An object that defines configuration properties for chart series.
     */
    interface dxChartSeriesTypesCommonSeries {
        /**
         * Configures data aggregation for the series.
         */
        aggregation?: dxChartSeriesTypesCommonSeriesAggregation;
        /**
         * Specifies which data source field provides arguments for series points.
         */
        argumentField?: string;
        /**
         * Binds the series to a value axis.
         */
        axis?: string;
        /**
         * Allows you to group bar series so that bars with the same argument overlap.
         */
        barOverlapGroup?: string;
        /**
         * Controls the padding and consequently the width of all bars in a series using relative units. Ignored if the barWidth property is set.
         */
        barPadding?: number;
        /**
         * Specifies a fixed width for all bars in a series, measured in pixels. Takes precedence over the barPadding property.
         */
        barWidth?: number;
        /**
         * Configures the series border (in area-like series) or the series point border (in bar-like and bubble series).
         */
        border?: dxChartSeriesTypesCommonSeriesBorder;
        /**
         * Specifies which data source field provides close values for points of a financial series.
         */
        closeValueField?: string;
        /**
         * Specifies the color of the series.
         */
        color?: string;
        /**
         * Makes bars look rounded. Applies only to bar-like series.
         */
        cornerRadius?: number;
        /**
         * Specifies the dash style of the series line. Applies only to line-like series.
         */
        dashStyle?: 'dash' | 'dot' | 'longDash' | 'solid';
        /**
         * Specifies which data source field provides high values for points of a financial series.
         */
        highValueField?: string;
        /**
         * Specifies series elements to be highlighted when a user points to a series.
         */
        hoverMode?: 'allArgumentPoints' | 'allSeriesPoints' | 'excludePoints' | 'includePoints' | 'nearestPoint' | 'none' | 'onlyPoint';
        /**
         * Configures the appearance adopted by the series when a user points to it.
         */
        hoverStyle?: dxChartSeriesTypesCommonSeriesHoverStyle;
        /**
         * Specifies whether the series should ignore null data points.
         */
        ignoreEmptyPoints?: boolean;
        /**
         * Specifies a filling color for the body of a series point that visualizes a non-reduced value. Applies only to candlestick series.
         */
        innerColor?: string;
        /**
         * Configures point labels.
         */
        label?: dxChartSeriesTypesCommonSeriesLabel;
        /**
         * Specifies which data source field provides low values for points of a financial series.
         */
        lowValueField?: string;
        /**
         * Specifies a limit for the number of point labels.
         */
        maxLabelCount?: number;
        /**
         * Specifies the minimal possible height (or length if the chart is rotated) of a bar in pixels. Applies only to bar-like series.
         */
        minBarSize?: number;
        /**
         * Specifies how transparent the series should be.
         */
        opacity?: number;
        /**
         * Specifies which data source field provides open values for points of a financial series.
         */
        openValueField?: string;
        /**
         * Specifies which pane the series should belong to. Accepts the name of the pane.
         */
        pane?: string;
        /**
         * Configures series points in scatter, line- and area-like series.
         */
        point?: dxChartSeriesTypesCommonSeriesPoint;
        /**
         * Coupled with the rangeValue2Field property, specifies which data source field provides values for a range-like series.
         */
        rangeValue1Field?: string;
        /**
         * Coupled with the rangeValue1Field property, specifies which data source field provides values for a range-like series.
         */
        rangeValue2Field?: string;
        /**
         * Specifies reduction properties for financial series.
         */
        reduction?: { color?: string, level?: 'close' | 'high' | 'low' | 'open' };
        /**
         * Specifies series elements to be highlighted when a user selects a series.
         */
        selectionMode?: 'allArgumentPoints' | 'allSeriesPoints' | 'excludePoints' | 'includePoints' | 'none' | 'onlyPoint';
        /**
         * Configures the appearance adopted by the series when a user selects it.
         */
        selectionStyle?: dxChartSeriesTypesCommonSeriesSelectionStyle;
        /**
         * Specifies whether to show the series in the legend or not.
         */
        showInLegend?: boolean;
        /**
         * Specifies which data source field provides size values for bubbles. Required by and applies only to bubble series.
         */
        sizeField?: string;
        /**
         * Specifies which stack the series should belongs to. Applies only to stacked bar and full-stacked bar series.
         */
        stack?: string;
        /**
         * Specifies which data source field provides auxiliary data for series points.
         */
        tagField?: string;
        /**
         * Configures error bars.
         */
        valueErrorBar?: { color?: string, displayMode?: 'auto' | 'high' | 'low' | 'none', edgeLength?: number, highValueField?: string, lineWidth?: number, lowValueField?: string, opacity?: number, type?: 'fixed' | 'percent' | 'stdDeviation' | 'stdError' | 'variance', value?: number };
        /**
         * Specifies which data source field provides values for series points.
         */
        valueField?: string;
        /**
         * Specifies whether the series is visible or not.
         */
        visible?: boolean;
        /**
         * Specifies the width of the series line in pixels. Applies only to line-like series.
         */
        width?: number;
    }
    /**
     * Configures data aggregation for the series.
     */
    interface dxChartSeriesTypesCommonSeriesAggregation {
        /**
         * Specifies a custom aggregate function. Applies only if the aggregation method is 'custom'.
         */
        calculate?: ((aggregationInfo: chartPointAggregationInfoObject, series: chartSeriesObject) => any | Array<any>);
        /**
         * Enables data aggregation for the series.
         */
        enabled?: boolean;
        /**
         * Specifies how to aggregate series points.
         */
        method?: 'avg' | 'count' | 'max' | 'min' | 'ohlc' | 'range' | 'sum' | 'custom';
    }
    /**
     * Configures the series border (in area-like series) or the series point border (in bar-like and bubble series).
     */
    interface dxChartSeriesTypesCommonSeriesBorder {
        /**
         * Colors the series border (in area-like series) or the series point border (in bar-like and bubble series).
         */
        color?: string;
        /**
         * Sets a dash style for the series border (in area-like series) or for the series point border (in bar-like and bubble series).
         */
        dashStyle?: 'dash' | 'dot' | 'longDash' | 'solid';
        /**
         * Shows the series border (in area-like series) or the series point border (in bar-like and bubble series).
         */
        visible?: boolean;
        /**
         * Sets a pixel-measured width for the series border (in area-like series) or for the series point border (in bar-like and bubble series).
         */
        width?: number;
    }
    /**
     * Configures the appearance adopted by the series when a user points to it.
     */
    interface dxChartSeriesTypesCommonSeriesHoverStyle {
        /**
         * Configures the appearance adopted by the series border (in area-like series) or the series point border (in bar-like and bubble series) when a user points to the series.
         */
        border?: dxChartSeriesTypesCommonSeriesHoverStyleBorder;
        /**
         * Specifies the color of the series in the hovered state.
         */
        color?: string;
        /**
         * Specifies the dash style of the series line when the series is in the hovered state. Applies only to line-like series.
         */
        dashStyle?: 'dash' | 'dot' | 'longDash' | 'solid';
        /**
         * Configures hatching that applies when a user points to the series.
         */
        hatching?: dxChartSeriesTypesCommonSeriesHoverStyleHatching;
        /**
         * Specifies the pixel-measured width of the series line when the series is in the hovered state.
         */
        width?: number;
    }
    /**
     * Configures the appearance adopted by the series border (in area-like series) or the series point border (in bar-like and bubble series) when a user points to the series.
     */
    interface dxChartSeriesTypesCommonSeriesHoverStyleBorder {
        /**
         * Colors the series border (in area-like series) or the series point border (in bar-like and bubble series) when a user points to the series.
         */
        color?: string;
        /**
         * Sets a dash style for the series border (in area-like series) or for the series point border (in bar-like and bubble series) when a user points to the series.
         */
        dashStyle?: 'dash' | 'dot' | 'longDash' | 'solid';
        /**
         * Shows the series border (in area-like series) or the series point border (in bar-like and bubble series) when a user points to the series.
         */
        visible?: boolean;
        /**
         * Sets a pixel-measured width for the series border (in area-like series) or for the series point border (in bar-like and bubble series) when a user points to the series.
         */
        width?: number;
    }
    /**
     * Configures hatching that applies when a user points to the series.
     */
    interface dxChartSeriesTypesCommonSeriesHoverStyleHatching {
        /**
         * Specifies the direction of hatching lines.
         */
        direction?: 'left' | 'none' | 'right';
        /**
         * Specifies how transparent hatching lines should be.
         */
        opacity?: number;
        /**
         * Specifies the distance between two side-by-side hatching lines in pixels.
         */
        step?: number;
        /**
         * Specifies the width of hatching lines in pixels.
         */
        width?: number;
    }
    /**
     * Configures point labels.
     */
    interface dxChartSeriesTypesCommonSeriesLabel {
        /**
         * Aligns point labels in relation to their points.
         */
        alignment?: 'center' | 'left' | 'right';
        /**
         * Formats the point argument before it is displayed in the point label. To format the point value, use the format property.
         */
        argumentFormat?: DevExpress.ui.format;
        /**
         * Colors the point labels' background. The default color is inherited from the points.
         */
        backgroundColor?: string;
        /**
         * Configures the borders of point labels.
         */
        border?: { color?: string, dashStyle?: 'dash' | 'dot' | 'longDash' | 'solid', visible?: boolean, width?: number };
        /**
         * Configures the label connectors.
         */
        connector?: { color?: string, visible?: boolean, width?: number };
        /**
         * Customizes the text displayed by point labels.
         */
        customizeText?: ((pointInfo: any) => string);
        /**
         * Specifies font properties for point labels.
         */
        font?: Font;
        /**
         * Formats the point value before it will be displayed in the point label.
         */
        format?: DevExpress.ui.format;
        /**
         * Along with verticalOffset, shifts point labels from their initial positions.
         */
        horizontalOffset?: number;
        /**
         * Specifies whether to display point labels inside or outside of series points. Applies only to bubble, range-like and bar-like series.
         */
        position?: 'inside' | 'outside';
        /**
         * Rotates point labels.
         */
        rotationAngle?: number;
        /**
         * Specifies whether or not to show labels for points with zero value. Applies only to bar-like series.
         */
        showForZeroValues?: boolean;
        /**
         * Along with horizontalOffset, shifts point labels from their initial positions.
         */
        verticalOffset?: number;
        /**
         * Makes the point labels visible.
         */
        visible?: boolean;
    }
    /**
     * Configures series points in scatter, line- and area-like series.
     */
    interface dxChartSeriesTypesCommonSeriesPoint {
        /**
         * Configures the appearance of the series point border in scatter, line- and area-like series.
         */
        border?: { color?: string, visible?: boolean, width?: number };
        /**
         * Colors the series points.
         */
        color?: string;
        /**
         * Specifies series elements to be highlighted when a user pauses on a series point.
         */
        hoverMode?: 'allArgumentPoints' | 'allSeriesPoints' | 'none' | 'onlyPoint';
        /**
         * Configures the appearance adopted by a series point when a user pauses on it.
         */
        hoverStyle?: { border?: { color?: string, visible?: boolean, width?: number }, color?: string, size?: number };
        /**
         * Substitutes the standard point symbols with an image.
         */
        image?: string | { height?: number | { rangeMaxPoint?: number, rangeMinPoint?: number }, url?: string | { rangeMaxPoint?: string, rangeMinPoint?: string }, width?: number | { rangeMaxPoint?: number, rangeMinPoint?: number } };
        /**
         * Specifies series elements to be highlighted when a user selects a series point.
         */
        selectionMode?: 'allArgumentPoints' | 'allSeriesPoints' | 'none' | 'onlyPoint';
        /**
         * Configures the appearance of a selected series point.
         */
        selectionStyle?: { border?: { color?: string, visible?: boolean, width?: number }, color?: string, size?: number };
        /**
         * Specifies the diameter of series points in pixels.
         */
        size?: number;
        /**
         * Specifies which symbol should represent series points in scatter, line- and area-like series.
         */
        symbol?: 'circle' | 'cross' | 'polygon' | 'square' | 'triangleDown' | 'triangleUp';
        /**
         * Makes the series points visible.
         */
        visible?: boolean;
    }
    /**
     * Configures the appearance adopted by the series when a user selects it.
     */
    interface dxChartSeriesTypesCommonSeriesSelectionStyle {
        /**
         * Configures the appearance adopted by the series border (in area-like series) or the series point border (in bar-like and bubble series) when a user selects the series.
         */
        border?: dxChartSeriesTypesCommonSeriesSelectionStyleBorder;
        /**
         * Specifies the color of the series in the selected state.
         */
        color?: string;
        /**
         * Specifies the dash style of the series line when the series is in the selected state. Applies only to line-like series.
         */
        dashStyle?: 'dash' | 'dot' | 'longDash' | 'solid';
        /**
         * Configures hatching that applies when a user selects the series.
         */
        hatching?: dxChartSeriesTypesCommonSeriesSelectionStyleHatching;
        /**
         * Specifies the pixel-measured width of the series line when the series is in the selected state.
         */
        width?: number;
    }
    /**
     * Configures the appearance adopted by the series border (in area-like series) or the series point border (in bar-like and bubble series) when a user selects the series.
     */
    interface dxChartSeriesTypesCommonSeriesSelectionStyleBorder {
        /**
         * Colors the series border (in area-like series) or the series point border (in bar-like and bubble series) when a user selects the series.
         */
        color?: string;
        /**
         * Sets a dash style for the series border (in area-like series) or for the series point border (in bar-like and bubble series) when a user selects the series.
         */
        dashStyle?: 'dash' | 'dot' | 'longDash' | 'solid';
        /**
         * Shows the series border (in area-like series) or the series point border (in bar-like and bubble series) when a user selects the series.
         */
        visible?: boolean;
        /**
         * Sets a pixel-measured width for the series border (in area-like series) or for the series point border (in bar-like and bubble series) when a user selects the series.
         */
        width?: number;
    }
    /**
     * Configures hatching that applies when a user selects the series.
     */
    interface dxChartSeriesTypesCommonSeriesSelectionStyleHatching {
        /**
         * Specifies the direction of hatching lines.
         */
        direction?: 'left' | 'none' | 'right';
        /**
         * Specifies how transparent hatching lines should be.
         */
        opacity?: number;
        /**
         * Specifies the distance between two side-by-side hatching lines in pixels.
         */
        step?: number;
        /**
         * Specifies the width of hatching lines in pixels.
         */
        width?: number;
    }
    /**
     * Describes settings supported by a series of the full-stacked area type.
     */
    interface dxChartSeriesTypesFullStackedAreaSeries extends dxChartSeriesTypesCommonSeries {
        /**
         * Configures data aggregation for the series.
         */
        aggregation?: dxChartSeriesTypesFullStackedAreaSeriesAggregation;
        /**
         * Specifies series elements to be highlighted when a user points to a series.
         */
        hoverMode?: 'nearestPoint' | 'includePoints' | 'excludePoints' | 'none';
        /**
         * An object defining the label configuration properties.
         */
        label?: dxChartSeriesTypesFullStackedAreaSeriesLabel;
        /**
         * Configures series points in scatter, line- and area-like series.
         */
        point?: dxChartSeriesTypesFullStackedAreaSeriesPoint;
        /**
         * Specifies series elements to be highlighted when a user selects a series.
         */
        selectionMode?: 'includePoints' | 'excludePoints' | 'none';
    }
    /**
     * Configures data aggregation for the series.
     */
    interface dxChartSeriesTypesFullStackedAreaSeriesAggregation extends dxChartSeriesTypesCommonSeriesAggregation {
        /**
         * Specifies how to aggregate series points.
         */
        method?: 'avg' | 'count' | 'max' | 'min' | 'sum' | 'custom';
    }
    /**
     * An object defining the label configuration properties.
     */
    interface dxChartSeriesTypesFullStackedAreaSeriesLabel extends dxChartSeriesTypesCommonSeriesLabel {
        /**
         * Customizes the text displayed by point labels.
         */
        customizeText?: ((pointInfo: any) => string);
    }
    /**
     * Configures series points in scatter, line- and area-like series.
     */
    interface dxChartSeriesTypesFullStackedAreaSeriesPoint extends dxChartSeriesTypesCommonSeriesPoint {
        /**
         * Makes the series points visible.
         */
        visible?: boolean;
    }
    /**
     * Describes settings supported by a series of the full-stacked bar type.
     */
    interface dxChartSeriesTypesFullStackedBarSeries extends dxChartSeriesTypesCommonSeries {
        /**
         * Configures data aggregation for the series.
         */
        aggregation?: dxChartSeriesTypesFullStackedBarSeriesAggregation;
        /**
         * Specifies series elements to be highlighted when a user points to a series.
         */
        hoverMode?: 'onlyPoint' | 'allSeriesPoints' | 'allArgumentPoints' | 'none';
        /**
         * Configures point labels.
         */
        label?: dxChartSeriesTypesFullStackedBarSeriesLabel;
        /**
         * Specifies series elements to be highlighted when a user selects a bar.
         */
        selectionMode?: 'onlyPoint' | 'allSeriesPoints' | 'allArgumentPoints' | 'none';
    }
    /**
     * Configures data aggregation for the series.
     */
    interface dxChartSeriesTypesFullStackedBarSeriesAggregation extends dxChartSeriesTypesCommonSeriesAggregation {
        /**
         * Specifies how to aggregate series points.
         */
        method?: 'avg' | 'count' | 'max' | 'min' | 'sum' | 'custom';
    }
    /**
     * Configures point labels.
     */
    interface dxChartSeriesTypesFullStackedBarSeriesLabel extends dxChartSeriesTypesCommonSeriesLabel {
        /**
         * Customizes the text displayed by point labels.
         */
        customizeText?: ((pointInfo: any) => string);
        /**
         * Specifies whether to display point labels inside or outside of series points. Applies only to bubble, range-like and bar-like series.
         */
        position?: 'inside' | 'outside';
    }
    /**
     * Describes settings supported by a series of the full-stacked line type.
     */
    interface dxChartSeriesTypesFullStackedLineSeries extends dxChartSeriesTypesCommonSeries {
        /**
         * Configures data aggregation for the series.
         */
        aggregation?: dxChartSeriesTypesFullStackedLineSeriesAggregation;
        /**
         * Specifies series elements to be highlighted when a user points to a series.
         */
        hoverMode?: 'nearestPoint' | 'includePoints' | 'excludePoints' | 'none';
        /**
         * Configures point labels.
         */
        label?: dxChartSeriesTypesFullStackedLineSeriesLabel;
        /**
         * Specifies series elements to be highlighted when a user selects a series.
         */
        selectionMode?: 'includePoints' | 'excludePoints' | 'none';
    }
    /**
     * Configures data aggregation for the series.
     */
    interface dxChartSeriesTypesFullStackedLineSeriesAggregation extends dxChartSeriesTypesCommonSeriesAggregation {
        /**
         * Specifies how to aggregate series points.
         */
        method?: 'avg' | 'count' | 'max' | 'min' | 'sum' | 'custom';
    }
    /**
     * Configures point labels.
     */
    interface dxChartSeriesTypesFullStackedLineSeriesLabel extends dxChartSeriesTypesCommonSeriesLabel {
        /**
         * Customizes the text displayed by point labels.
         */
        customizeText?: ((pointInfo: any) => string);
    }
    /**
     * Describes settings supported by a series of the full-stacked spline area type.
     */
    interface dxChartSeriesTypesFullStackedSplineAreaSeries extends dxChartSeriesTypesCommonSeries {
        /**
         * Configures data aggregation for the series.
         */
        aggregation?: dxChartSeriesTypesFullStackedSplineAreaSeriesAggregation;
        /**
         * Specifies series elements to be highlighted when a user points to a series.
         */
        hoverMode?: 'nearestPoint' | 'includePoints' | 'excludePoints' | 'none';
        /**
         * Configures point labels.
         */
        label?: dxChartSeriesTypesFullStackedSplineAreaSeriesLabel;
        /**
         * Configures series points in scatter, line- and area-like series.
         */
        point?: dxChartSeriesTypesFullStackedSplineAreaSeriesPoint;
        /**
         * Specifies series elements to be highlighted when a user selects a series.
         */
        selectionMode?: 'includePoints' | 'excludePoints' | 'none';
    }
    /**
     * Configures data aggregation for the series.
     */
    interface dxChartSeriesTypesFullStackedSplineAreaSeriesAggregation extends dxChartSeriesTypesCommonSeriesAggregation {
        /**
         * Specifies how to aggregate series points.
         */
        method?: 'avg' | 'count' | 'max' | 'min' | 'sum' | 'custom';
    }
    /**
     * Configures point labels.
     */
    interface dxChartSeriesTypesFullStackedSplineAreaSeriesLabel extends dxChartSeriesTypesCommonSeriesLabel {
        /**
         * Customizes the text displayed by point labels.
         */
        customizeText?: ((pointInfo: any) => string);
    }
    /**
     * Configures series points in scatter, line- and area-like series.
     */
    interface dxChartSeriesTypesFullStackedSplineAreaSeriesPoint extends dxChartSeriesTypesCommonSeriesPoint {
        /**
         * Makes the series points visible.
         */
        visible?: boolean;
    }
    /**
     * Describes settings supported by a series of the full-stacked spline area type. An object defining a series of the fullStackedSpline type.
     */
    interface dxChartSeriesTypesFullStackedSplineSeries extends dxChartSeriesTypesCommonSeries {
        /**
         * Configures data aggregation for the series.
         */
        aggregation?: dxChartSeriesTypesFullStackedSplineSeriesAggregation;
        /**
         * Specifies series elements to be highlighted when a user points to a series.
         */
        hoverMode?: 'nearestPoint' | 'includePoints' | 'excludePoints' | 'none';
        /**
         * Configures point labels.
         */
        label?: dxChartSeriesTypesFullStackedSplineSeriesLabel;
        /**
         * Specifies series elements to be highlighted when a user selects a series.
         */
        selectionMode?: 'includePoints' | 'excludePoints' | 'none';
    }
    /**
     * Configures data aggregation for the series.
     */
    interface dxChartSeriesTypesFullStackedSplineSeriesAggregation extends dxChartSeriesTypesCommonSeriesAggregation {
        /**
         * Specifies how to aggregate series points.
         */
        method?: 'avg' | 'count' | 'max' | 'min' | 'sum' | 'custom';
    }
    /**
     * Configures point labels.
     */
    interface dxChartSeriesTypesFullStackedSplineSeriesLabel extends dxChartSeriesTypesCommonSeriesLabel {
        /**
         * Customizes the text displayed by point labels.
         */
        customizeText?: ((pointInfo: any) => string);
    }
    /**
     * Describes settings supported by a series of the line type.
     */
    interface dxChartSeriesTypesLineSeries extends dxChartSeriesTypesCommonSeries {
        /**
         * Configures data aggregation for the series.
         */
        aggregation?: dxChartSeriesTypesLineSeriesAggregation;
        /**
         * Specifies series elements to be highlighted when a user points to a series.
         */
        hoverMode?: 'nearestPoint' | 'includePoints' | 'excludePoints' | 'none';
        /**
         * Configures point labels.
         */
        label?: dxChartSeriesTypesLineSeriesLabel;
        /**
         * Specifies series elements to be highlighted when a user selects a series.
         */
        selectionMode?: 'includePoints' | 'excludePoints' | 'none';
    }
    /**
     * Configures data aggregation for the series.
     */
    interface dxChartSeriesTypesLineSeriesAggregation extends dxChartSeriesTypesCommonSeriesAggregation {
        /**
         * Specifies how to aggregate series points.
         */
        method?: 'avg' | 'count' | 'max' | 'min' | 'sum' | 'custom';
    }
    /**
     * Configures point labels.
     */
    interface dxChartSeriesTypesLineSeriesLabel extends dxChartSeriesTypesCommonSeriesLabel {
        /**
         * Customizes the text displayed by point labels.
         */
        customizeText?: ((pointInfo: any) => string);
    }
    /**
     * Describes settings supported by a series of the range area type.
     */
    interface dxChartSeriesTypesRangeAreaSeries extends dxChartSeriesTypesCommonSeries {
        /**
         * Configures data aggregation for the series.
         */
        aggregation?: dxChartSeriesTypesRangeAreaSeriesAggregation;
        /**
         * Specifies series elements to be highlighted when a user points to a series.
         */
        hoverMode?: 'nearestPoint' | 'includePoints' | 'excludePoints' | 'none';
        /**
         * Configures point labels.
         */
        label?: dxChartSeriesTypesRangeAreaSeriesLabel;
        /**
         * Configures series points in scatter, line- and area-like series.
         */
        point?: dxChartSeriesTypesRangeAreaSeriesPoint;
        /**
         * Specifies series elements to be highlighted when a user selects a series.
         */
        selectionMode?: 'includePoints' | 'excludePoints' | 'none';
    }
    /**
     * Configures data aggregation for the series.
     */
    interface dxChartSeriesTypesRangeAreaSeriesAggregation extends dxChartSeriesTypesCommonSeriesAggregation {
        /**
         * Specifies how to aggregate series points.
         */
        method?: 'range' | 'custom';
    }
    /**
     * Configures point labels.
     */
    interface dxChartSeriesTypesRangeAreaSeriesLabel extends dxChartSeriesTypesCommonSeriesLabel {
        /**
         * Customizes the text displayed by point labels.
         */
        customizeText?: ((pointInfo: any) => string);
    }
    /**
     * Configures series points in scatter, line- and area-like series.
     */
    interface dxChartSeriesTypesRangeAreaSeriesPoint extends dxChartSeriesTypesCommonSeriesPoint {
        /**
         * Makes the series points visible.
         */
        visible?: boolean;
    }
    /**
     * Describes settings supported by a series of the range bar type.
     */
    interface dxChartSeriesTypesRangeBarSeries extends dxChartSeriesTypesCommonSeries {
        /**
         * Configures data aggregation for the series.
         */
        aggregation?: dxChartSeriesTypesRangeBarSeriesAggregation;
        /**
         * Specifies series elements to be highlighted when a user points to a series.
         */
        hoverMode?: 'onlyPoint' | 'allSeriesPoints' | 'allArgumentPoints' | 'none';
        /**
         * Configures point labels.
         */
        label?: dxChartSeriesTypesRangeBarSeriesLabel;
        /**
         * Specifies series elements to be highlighted when a user selects a range bar.
         */
        selectionMode?: 'onlyPoint' | 'allSeriesPoints' | 'allArgumentPoints' | 'none';
    }
    /**
     * Configures data aggregation for the series.
     */
    interface dxChartSeriesTypesRangeBarSeriesAggregation extends dxChartSeriesTypesCommonSeriesAggregation {
        /**
         * Specifies how to aggregate series points.
         */
        method?: 'range' | 'custom';
    }
    /**
     * Configures point labels.
     */
    interface dxChartSeriesTypesRangeBarSeriesLabel extends dxChartSeriesTypesCommonSeriesLabel {
        /**
         * Customizes the text displayed by point labels.
         */
        customizeText?: ((pointInfo: any) => string);
    }
    /**
     * Describes settings supported by a series of the scatter type.
     */
    interface dxChartSeriesTypesScatterSeries extends dxChartSeriesTypesCommonSeries {
        /**
         * Configures data aggregation for the series.
         */
        aggregation?: dxChartSeriesTypesScatterSeriesAggregation;
        /**
         * Configures point labels.
         */
        label?: dxChartSeriesTypesScatterSeriesLabel;
    }
    /**
     * Configures data aggregation for the series.
     */
    interface dxChartSeriesTypesScatterSeriesAggregation extends dxChartSeriesTypesCommonSeriesAggregation {
        /**
         * Specifies how to aggregate series points.
         */
        method?: 'avg' | 'count' | 'max' | 'min' | 'sum' | 'custom';
    }
    /**
     * Configures point labels.
     */
    interface dxChartSeriesTypesScatterSeriesLabel extends dxChartSeriesTypesCommonSeriesLabel {
        /**
         * Customizes the text displayed by point labels.
         */
        customizeText?: ((pointInfo: any) => string);
    }
    /**
     * Describes settings supported by a series of the spline area type.
     */
    interface dxChartSeriesTypesSplineAreaSeries extends dxChartSeriesTypesCommonSeries {
        /**
         * Configures data aggregation for the series.
         */
        aggregation?: dxChartSeriesTypesSplineAreaSeriesAggregation;
        /**
         * Specifies series elements to be highlighted when a user points to a series.
         */
        hoverMode?: 'nearestPoint' | 'includePoints' | 'excludePoints' | 'none';
        /**
         * Configures point labels.
         */
        label?: dxChartSeriesTypesSplineAreaSeriesLabel;
        /**
         * Configures series points in scatter, line- and area-like series.
         */
        point?: dxChartSeriesTypesSplineAreaSeriesPoint;
        /**
         * Specifies series elements to be highlighted when a user selects a series.
         */
        selectionMode?: 'includePoints' | 'excludePoints' | 'none';
    }
    /**
     * Configures data aggregation for the series.
     */
    interface dxChartSeriesTypesSplineAreaSeriesAggregation extends dxChartSeriesTypesCommonSeriesAggregation {
        /**
         * Specifies how to aggregate series points.
         */
        method?: 'avg' | 'count' | 'max' | 'min' | 'sum' | 'custom';
    }
    /**
     * Configures point labels.
     */
    interface dxChartSeriesTypesSplineAreaSeriesLabel extends dxChartSeriesTypesCommonSeriesLabel {
        /**
         * Customizes the text displayed by point labels.
         */
        customizeText?: ((pointInfo: any) => string);
    }
    /**
     * Configures series points in scatter, line- and area-like series.
     */
    interface dxChartSeriesTypesSplineAreaSeriesPoint extends dxChartSeriesTypesCommonSeriesPoint {
        /**
         * Makes the series points visible.
         */
        visible?: boolean;
    }
    /**
     * Describes settings supported by a series of the spline type.
     */
    interface dxChartSeriesTypesSplineSeries extends dxChartSeriesTypesCommonSeries {
        /**
         * Configures data aggregation for the series.
         */
        aggregation?: dxChartSeriesTypesSplineSeriesAggregation;
        /**
         * Specifies series elements to be highlighted when a user points to a series.
         */
        hoverMode?: 'nearestPoint' | 'includePoints' | 'excludePoints' | 'none';
        /**
         * Configures point labels.
         */
        label?: dxChartSeriesTypesSplineSeriesLabel;
        /**
         * Specifies series elements to be highlighted when a user selects a series.
         */
        selectionMode?: 'includePoints' | 'excludePoints' | 'none';
    }
    /**
     * Configures data aggregation for the series.
     */
    interface dxChartSeriesTypesSplineSeriesAggregation extends dxChartSeriesTypesCommonSeriesAggregation {
        /**
         * Specifies how to aggregate series points.
         */
        method?: 'avg' | 'count' | 'max' | 'min' | 'sum' | 'custom';
    }
    /**
     * Configures point labels.
     */
    interface dxChartSeriesTypesSplineSeriesLabel extends dxChartSeriesTypesCommonSeriesLabel {
        /**
         * Customizes the text displayed by point labels.
         */
        customizeText?: ((pointInfo: any) => string);
    }
    /**
     * Describes settings supported by a series of the stacked area type.
     */
    interface dxChartSeriesTypesStackedAreaSeries extends dxChartSeriesTypesCommonSeries {
        /**
         * Configures data aggregation for the series.
         */
        aggregation?: dxChartSeriesTypesStackedAreaSeriesAggregation;
        /**
         * Specifies series elements to be highlighted when a user points to a series.
         */
        hoverMode?: 'nearestPoint' | 'includePoints' | 'excludePoints' | 'none';
        /**
         * Configures point labels.
         */
        label?: dxChartSeriesTypesStackedAreaSeriesLabel;
        /**
         * Configures series points in scatter, line- and area-like series.
         */
        point?: dxChartSeriesTypesStackedAreaSeriesPoint;
        /**
         * Specifies series elements to be highlighted when a user selects a series.
         */
        selectionMode?: 'includePoints' | 'excludePoints' | 'none';
    }
    /**
     * Configures data aggregation for the series.
     */
    interface dxChartSeriesTypesStackedAreaSeriesAggregation extends dxChartSeriesTypesCommonSeriesAggregation {
        /**
         * Specifies how to aggregate series points.
         */
        method?: 'avg' | 'count' | 'max' | 'min' | 'sum' | 'custom';
    }
    /**
     * Configures point labels.
     */
    interface dxChartSeriesTypesStackedAreaSeriesLabel extends dxChartSeriesTypesCommonSeriesLabel {
        /**
         * Customizes the text displayed by point labels.
         */
        customizeText?: ((pointInfo: any) => string);
    }
    /**
     * Configures series points in scatter, line- and area-like series.
     */
    interface dxChartSeriesTypesStackedAreaSeriesPoint extends dxChartSeriesTypesCommonSeriesPoint {
        /**
         * Makes the series points visible.
         */
        visible?: boolean;
    }
    /**
     * Describes settings supported by a series of the stacked bar type.
     */
    interface dxChartSeriesTypesStackedBarSeries extends dxChartSeriesTypesCommonSeries {
        /**
         * Configures data aggregation for the series.
         */
        aggregation?: dxChartSeriesTypesStackedBarSeriesAggregation;
        /**
         * Specifies series elements to be highlighted when a user points to a series.
         */
        hoverMode?: 'onlyPoint' | 'allSeriesPoints' | 'allArgumentPoints' | 'none';
        /**
         * Configures point labels.
         */
        label?: dxChartSeriesTypesStackedBarSeriesLabel;
        /**
         * Specifies series elements to be highlighted when a user selects a bar.
         */
        selectionMode?: 'onlyPoint' | 'allSeriesPoints' | 'allArgumentPoints' | 'none';
    }
    /**
     * Configures data aggregation for the series.
     */
    interface dxChartSeriesTypesStackedBarSeriesAggregation extends dxChartSeriesTypesCommonSeriesAggregation {
        /**
         * Specifies how to aggregate series points.
         */
        method?: 'avg' | 'count' | 'max' | 'min' | 'sum' | 'custom';
    }
    /**
     * Configures point labels.
     */
    interface dxChartSeriesTypesStackedBarSeriesLabel extends dxChartSeriesTypesCommonSeriesLabel {
        /**
         * Customizes the text displayed by point labels.
         */
        customizeText?: ((pointInfo: any) => string);
        /**
         * Specifies whether to display point labels inside or outside of series points. Applies only to bubble, range-like and bar-like series.
         */
        position?: 'inside' | 'outside';
    }
    /**
     * Describes settings supported by a series of the stacked line type.
     */
    interface dxChartSeriesTypesStackedLineSeries extends dxChartSeriesTypesCommonSeries {
        /**
         * Configures data aggregation for the series.
         */
        aggregation?: dxChartSeriesTypesStackedLineSeriesAggregation;
        /**
         * Specifies series elements to be highlighted when a user points to a series.
         */
        hoverMode?: 'nearestPoint' | 'includePoints' | 'excludePoints' | 'none';
        /**
         * Configures point labels.
         */
        label?: dxChartSeriesTypesStackedLineSeriesLabel;
        /**
         * Specifies series elements to be highlighted when a user selects a series.
         */
        selectionMode?: 'includePoints' | 'excludePoints' | 'none';
    }
    /**
     * Configures data aggregation for the series.
     */
    interface dxChartSeriesTypesStackedLineSeriesAggregation extends dxChartSeriesTypesCommonSeriesAggregation {
        /**
         * Specifies how to aggregate series points.
         */
        method?: 'avg' | 'count' | 'max' | 'min' | 'sum' | 'custom';
    }
    /**
     * Configures point labels.
     */
    interface dxChartSeriesTypesStackedLineSeriesLabel extends dxChartSeriesTypesCommonSeriesLabel {
        /**
         * Customizes the text displayed by point labels.
         */
        customizeText?: ((pointInfo: any) => string);
    }
    /**
     * Describes settings supported by a series of the stacked spline area type.
     */
    interface dxChartSeriesTypesStackedSplineAreaSeries extends dxChartSeriesTypesCommonSeries {
        /**
         * Configures data aggregation for the series.
         */
        aggregation?: dxChartSeriesTypesStackedSplineAreaSeriesAggregation;
        /**
         * Specifies series elements to be highlighted when a user points to a series.
         */
        hoverMode?: 'nearestPoint' | 'includePoints' | 'excludePoints' | 'none';
        /**
         * Configures point labels.
         */
        label?: dxChartSeriesTypesStackedSplineAreaSeriesLabel;
        /**
         * Configures series points in scatter, line- and area-like series.
         */
        point?: dxChartSeriesTypesStackedSplineAreaSeriesPoint;
        /**
         * Specifies series elements to be highlighted when a user selects a series.
         */
        selectionMode?: 'includePoints' | 'excludePoints' | 'none';
    }
    /**
     * Configures data aggregation for the series.
     */
    interface dxChartSeriesTypesStackedSplineAreaSeriesAggregation extends dxChartSeriesTypesCommonSeriesAggregation {
        /**
         * Specifies how to aggregate series points.
         */
        method?: 'avg' | 'count' | 'max' | 'min' | 'sum' | 'custom';
    }
    /**
     * Configures point labels.
     */
    interface dxChartSeriesTypesStackedSplineAreaSeriesLabel extends dxChartSeriesTypesCommonSeriesLabel {
        /**
         * Customizes the text displayed by point labels.
         */
        customizeText?: ((pointInfo: any) => string);
    }
    /**
     * Configures series points in scatter, line- and area-like series.
     */
    interface dxChartSeriesTypesStackedSplineAreaSeriesPoint extends dxChartSeriesTypesCommonSeriesPoint {
        /**
         * Makes the series points visible.
         */
        visible?: boolean;
    }
    /**
     * Describes settings supported by a series of the stacked spline type.
     */
    interface dxChartSeriesTypesStackedSplineSeries extends dxChartSeriesTypesCommonSeries {
        /**
         * Configures data aggregation for the series.
         */
        aggregation?: dxChartSeriesTypesStackedSplineSeriesAggregation;
        /**
         * Specifies series elements to be highlighted when a user points to a series.
         */
        hoverMode?: 'nearestPoint' | 'includePoints' | 'excludePoints' | 'none';
        /**
         * Configures point labels.
         */
        label?: dxChartSeriesTypesStackedSplineSeriesLabel;
        /**
         * Specifies series elements to be highlighted when a user selects a series.
         */
        selectionMode?: 'includePoints' | 'excludePoints' | 'none';
    }
    /**
     * Configures data aggregation for the series.
     */
    interface dxChartSeriesTypesStackedSplineSeriesAggregation extends dxChartSeriesTypesCommonSeriesAggregation {
        /**
         * Specifies how to aggregate series points.
         */
        method?: 'avg' | 'count' | 'max' | 'min' | 'sum' | 'custom';
    }
    /**
     * Configures point labels.
     */
    interface dxChartSeriesTypesStackedSplineSeriesLabel extends dxChartSeriesTypesCommonSeriesLabel {
        /**
         * Customizes the text displayed by point labels.
         */
        customizeText?: ((pointInfo: any) => string);
    }
    /**
     * Describes settings supported by a series of the step rea type.
     */
    interface dxChartSeriesTypesStepAreaSeries extends dxChartSeriesTypesCommonSeries {
        /**
         * Configures data aggregation for the series.
         */
        aggregation?: dxChartSeriesTypesStepAreaSeriesAggregation;
        /**
         * Configures the series border (in area-like series) or the series point border (in bar-like and bubble series).
         */
        border?: dxChartSeriesTypesStepAreaSeriesBorder;
        /**
         * Specifies series elements to be highlighted when a user points to a series.
         */
        hoverMode?: 'nearestPoint' | 'includePoints' | 'excludePoints' | 'none';
        /**
         * Configures the appearance adopted by the series when a user points to it.
         */
        hoverStyle?: dxChartSeriesTypesStepAreaSeriesHoverStyle;
        /**
         * Configures point labels.
         */
        label?: dxChartSeriesTypesStepAreaSeriesLabel;
        /**
         * Configures series points in scatter, line- and area-like series.
         */
        point?: dxChartSeriesTypesStepAreaSeriesPoint;
        /**
         * Specifies series elements to be highlighted when a user selects a series.
         */
        selectionMode?: 'includePoints' | 'excludePoints' | 'none';
        /**
         * Configures the appearance adopted by the series when a user selects it.
         */
        selectionStyle?: dxChartSeriesTypesStepAreaSeriesSelectionStyle;
    }
    /**
     * Configures data aggregation for the series.
     */
    interface dxChartSeriesTypesStepAreaSeriesAggregation extends dxChartSeriesTypesCommonSeriesAggregation {
        /**
         * Specifies how to aggregate series points.
         */
        method?: 'avg' | 'count' | 'max' | 'min' | 'sum' | 'custom';
    }
    /**
     * Configures the series border (in area-like series) or the series point border (in bar-like and bubble series).
     */
    interface dxChartSeriesTypesStepAreaSeriesBorder extends dxChartSeriesTypesCommonSeriesBorder {
        /**
         * Shows the series border (in area-like series) or the series point border (in bar-like and bubble series).
         */
        visible?: boolean;
    }
    /**
     * Configures the appearance adopted by the series when a user points to it.
     */
    interface dxChartSeriesTypesStepAreaSeriesHoverStyle extends dxChartSeriesTypesCommonSeriesHoverStyle {
        /**
         * Configures the appearance adopted by the series border (in area-like series) or the series point border (in bar-like and bubble series) when a user points to the series.
         */
        border?: dxChartSeriesTypesStepAreaSeriesHoverStyleBorder;
    }
    /**
     * Configures the appearance adopted by the series border (in area-like series) or the series point border (in bar-like and bubble series) when a user points to the series.
     */
    interface dxChartSeriesTypesStepAreaSeriesHoverStyleBorder extends dxChartSeriesTypesCommonSeriesHoverStyleBorder {
        /**
         * Shows the series border (in area-like series) or the series point border (in bar-like and bubble series) when a user points to the series.
         */
        visible?: boolean;
    }
    /**
     * Configures point labels.
     */
    interface dxChartSeriesTypesStepAreaSeriesLabel extends dxChartSeriesTypesCommonSeriesLabel {
        /**
         * Customizes the text displayed by point labels.
         */
        customizeText?: ((pointInfo: any) => string);
    }
    /**
     * Configures series points in scatter, line- and area-like series.
     */
    interface dxChartSeriesTypesStepAreaSeriesPoint extends dxChartSeriesTypesCommonSeriesPoint {
        /**
         * Makes the series points visible.
         */
        visible?: boolean;
    }
    /**
     * Configures the appearance adopted by the series when a user selects it.
     */
    interface dxChartSeriesTypesStepAreaSeriesSelectionStyle extends dxChartSeriesTypesCommonSeriesSelectionStyle {
        /**
         * Configures the appearance adopted by the series border (in area-like series) or the series point border (in bar-like and bubble series) when a user selects the series.
         */
        border?: dxChartSeriesTypesStepAreaSeriesSelectionStyleBorder;
    }
    /**
     * Configures the appearance adopted by the series border (in area-like series) or the series point border (in bar-like and bubble series) when a user selects the series.
     */
    interface dxChartSeriesTypesStepAreaSeriesSelectionStyleBorder extends dxChartSeriesTypesCommonSeriesSelectionStyleBorder {
        /**
         * Shows the series border (in area-like series) or the series point border (in bar-like and bubble series) when a user selects the series.
         */
        visible?: boolean;
    }
    /**
     * Describes settings supported by a series of the step line type.
     */
    interface dxChartSeriesTypesStepLineSeries extends dxChartSeriesTypesCommonSeries {
        /**
         * Configures data aggregation for the series.
         */
        aggregation?: dxChartSeriesTypesStepLineSeriesAggregation;
        /**
         * Specifies series elements to be highlighted when a user points to a series.
         */
        hoverMode?: 'nearestPoint' | 'includePoints' | 'excludePoints' | 'none';
        /**
         * Configures point labels.
         */
        label?: dxChartSeriesTypesStepLineSeriesLabel;
        /**
         * Specifies series elements to be highlighted when a user selects a series.
         */
        selectionMode?: 'includePoints' | 'excludePoints' | 'none';
    }
    /**
     * Configures data aggregation for the series.
     */
    interface dxChartSeriesTypesStepLineSeriesAggregation extends dxChartSeriesTypesCommonSeriesAggregation {
        /**
         * Specifies how to aggregate series points.
         */
        method?: 'avg' | 'count' | 'max' | 'min' | 'sum' | 'custom';
    }
    /**
     * Configures point labels.
     */
    interface dxChartSeriesTypesStepLineSeriesLabel extends dxChartSeriesTypesCommonSeriesLabel {
        /**
         * Customizes the text displayed by point labels.
         */
        customizeText?: ((pointInfo: any) => string);
    }
    /**
     * Describes settings supported by a series of the stock type.
     */
    interface dxChartSeriesTypesStockSeries extends dxChartSeriesTypesCommonSeries {
        /**
         * Configures data aggregation for the series.
         */
        aggregation?: dxChartSeriesTypesStockSeriesAggregation;
        /**
         * Specifies which data source field provides arguments for series points.
         */
        argumentField?: string;
        /**
         * Specifies series elements to be highlighted when a user pauses on a series.
         */
        hoverMode?: 'onlyPoint' | 'allSeriesPoints' | 'allArgumentPoints' | 'none';
        /**
         * Configures point labels.
         */
        label?: dxChartSeriesTypesStockSeriesLabel;
        /**
         * Specifies series elements to be highlighted when a user selects a point.
         */
        selectionMode?: 'onlyPoint' | 'allSeriesPoints' | 'allArgumentPoints' | 'none';
    }
    /**
     * Configures data aggregation for the series.
     */
    interface dxChartSeriesTypesStockSeriesAggregation extends dxChartSeriesTypesCommonSeriesAggregation {
        /**
         * Specifies how to aggregate series points.
         */
        method?: 'ohlc' | 'custom';
    }
    /**
     * Configures point labels.
     */
    interface dxChartSeriesTypesStockSeriesLabel extends dxChartSeriesTypesCommonSeriesLabel {
        /**
         * Customizes the text displayed by point labels.
         */
        customizeText?: ((pointInfo: any) => string);
    }
    /**
     * 
     */
    export interface dxCircularGaugeOptions extends BaseGaugeOptions<dxCircularGauge> {
        /**
         * Specifies the properties required to set the geometry of the CircularGauge UI component.
         */
        geometry?: { endAngle?: number, startAngle?: number };
        /**
         * Specifies gauge range container properties.
         */
        rangeContainer?: dxCircularGaugeRangeContainer;
        /**
         * Specifies a gauge's scale properties.
         */
        scale?: dxCircularGaugeScale;
        /**
         * Specifies the appearance properties of subvalue indicators.
         */
        subvalueIndicator?: GaugeIndicator;
        /**
         * Specifies the appearance properties of the value indicator.
         */
        valueIndicator?: GaugeIndicator;
    }
    /**
     * Specifies gauge range container properties.
     */
    export interface dxCircularGaugeRangeContainer extends BaseGaugeRangeContainer {
        /**
         * Specifies the orientation of the range container in the CircularGauge UI component.
         */
        orientation?: 'center' | 'inside' | 'outside';
        /**
         * Specifies the range container's width in pixels.
         */
        width?: number;
    }
    /**
     * Specifies a gauge's scale properties.
     */
    export interface dxCircularGaugeScale extends BaseGaugeScale {
        /**
         * Specifies common properties for scale labels.
         */
        label?: dxCircularGaugeScaleLabel;
        /**
         * Specifies the orientation of scale ticks.
         */
        orientation?: 'center' | 'inside' | 'outside';
    }
    /**
     * Specifies common properties for scale labels.
     */
    export interface dxCircularGaugeScaleLabel extends BaseGaugeScaleLabel {
        /**
         * Specifies which label to hide in case of overlapping.
         */
        hideFirstOrLast?: 'first' | 'last';
        /**
         * Specifies the spacing between scale labels and ticks.
         */
        indentFromTick?: number;
    }
    /**
     * The CircularGauge is a UI component that indicates values on a circular numeric scale.
     */
    export class dxCircularGauge extends BaseGauge {
        constructor(element: Element, options?: dxCircularGaugeOptions)
        constructor(element: JQuery, options?: dxCircularGaugeOptions)
    }
    /**
     * 
     */
    export interface dxFunnelOptions extends BaseWidgetOptions<dxFunnel> {
        /**
         * Specifies adaptive layout properties.
         */
        adaptiveLayout?: { height?: number, keepLabels?: boolean, width?: number };
        /**
         * Specifies the algorithm for building the funnel.
         */
        algorithm?: 'dynamicHeight' | 'dynamicSlope';
        /**
         * Specifies which data source field provides arguments for funnel items. The argument identifies a funnel item and represents it on the legend.
         */
        argumentField?: string;
        /**
         * Specifies which data source field provides colors for funnel items. If this field is absent, the palette provides the colors.
         */
        colorField?: string;
        /**
         * Binds the UI component to data.
         */
        dataSource?: Array<any> | DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string;
        /**
         * Specifies whether funnel items change their style when a user pauses on them.
         */
        hoverEnabled?: boolean;
        /**
         * Turns the funnel upside down.
         */
        inverted?: boolean;
        /**
         * Configures funnel items' appearance.
         */
        item?: { border?: { color?: string, visible?: boolean, width?: number }, hoverStyle?: { border?: { color?: string, visible?: boolean, width?: number }, hatching?: { direction?: 'left' | 'none' | 'right', opacity?: number, step?: number, width?: number } }, selectionStyle?: { border?: { color?: string, visible?: boolean, width?: number }, hatching?: { direction?: 'left' | 'none' | 'right', opacity?: number, step?: number, width?: number } } };
        /**
         * Configures funnel item labels.
         */
        label?: { backgroundColor?: string, border?: { color?: string, dashStyle?: 'dash' | 'dot' | 'longDash' | 'solid', visible?: boolean, width?: number }, connector?: { color?: string, opacity?: number, visible?: boolean, width?: number }, customizeText?: ((itemInfo: { item?: dxFunnelItem, value?: number, valueText?: string, percent?: number, percentText?: string }) => string), font?: Font, format?: DevExpress.ui.format, horizontalAlignment?: 'left' | 'right', horizontalOffset?: number, position?: 'columns' | 'inside' | 'outside', showForZeroValues?: boolean, textOverflow?: 'ellipsis' | 'hide' | 'none', visible?: boolean, wordWrap?: 'normal' | 'breakWord' | 'none' };
        /**
         * Configures the legend.
         */
        legend?: dxFunnelLegend;
        /**
         * Specifies the ratio between the height of the neck and that of the whole funnel. Accepts values from 0 to 1. Applies only if the algorithm is 'dynamicHeight'.
         */
        neckHeight?: number;
        /**
         * Specifies the ratio between the width of the neck and that of the whole funnel. Accepts values from 0 to 1. Applies only if the algorithm is 'dynamicHeight'.
         */
        neckWidth?: number;
        /**
         * A function that is executed after the pointer enters or leaves a funnel item.
         */
        onHoverChanged?: ((e: { component?: dxFunnel, element?: DevExpress.core.dxElement, model?: any, item?: dxFunnelItem }) => any);
        /**
         * A function that is executed when a funnel item is clicked or tapped.
         */
        onItemClick?: ((e: { component?: dxFunnel, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, item?: dxFunnelItem }) => any) | string;
        /**
         * A function that is executed when a legend item is clicked or tapped.
         */
        onLegendClick?: ((e: { component?: dxFunnel, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, item?: dxFunnelItem }) => any) | string;
        /**
         * A function that is executed when a funnel item is selected or selection is canceled.
         */
        onSelectionChanged?: ((e: { component?: dxFunnel, element?: DevExpress.core.dxElement, model?: any, item?: dxFunnelItem }) => any);
        /**
         * Sets the palette to be used to colorize funnel items.
         */
        palette?: Array<string> | 'Bright' | 'Harmony Light' | 'Ocean' | 'Pastel' | 'Soft' | 'Soft Pastel' | 'Vintage' | 'Violet' | 'Carmine' | 'Dark Moon' | 'Dark Violet' | 'Green Mist' | 'Soft Blue' | 'Material' | 'Office';
        /**
         * Specifies what to do with colors in the palette when their number is less than the number of funnel items.
         */
        paletteExtensionMode?: 'alternate' | 'blend' | 'extrapolate';
        /**
         * Specifies how item labels should behave when they overlap.
         */
        resolveLabelOverlapping?: 'hide' | 'none' | 'shift';
        /**
         * Specifies whether a single or multiple funnel items can be in the selected state at a time. Assigning 'none' disables the selection feature.
         */
        selectionMode?: 'multiple' | 'none' | 'single';
        /**
         * Specifies whether to sort funnel items.
         */
        sortData?: boolean;
        /**
         * Configures tooltips - small pop-up rectangles that display information about a data-visualizing UI component element being pressed or hovered over with the mouse pointer.
         */
        tooltip?: dxFunnelTooltip;
        /**
         * Specifies which data source field provides values for funnel items. The value defines a funnel item's area.
         */
        valueField?: string;
    }
    /**
     * Configures the legend.
     */
    export interface dxFunnelLegend extends BaseLegend {
        /**
         * Specifies the hint that appears when a user hovers the mouse pointer over a legend item.
         */
        customizeHint?: ((itemInfo: { item?: dxFunnelItem, text?: string }) => string);
        /**
         * Allows you to change the order, text, and visibility of legend items.
         */
        customizeItems?: ((items: Array<FunnelLegendItem>) => Array<FunnelLegendItem>);
        /**
         * Customizes the text displayed by legend items.
         */
        customizeText?: ((itemInfo: { item?: dxFunnelItem, text?: string }) => string);
        /**
         * Specifies an SVG element that serves as a custom legend item marker.
         */
        markerTemplate?: DevExpress.core.template | ((legendItem: FunnelLegendItem, element: SVGGElement) => string | SVGElement | JQuery);
        /**
         * Specifies the legend's visibility.
         */
        visible?: boolean;
    }
    /**
     * Configures tooltips - small pop-up rectangles that display information about a data-visualizing UI component element being pressed or hovered over with the mouse pointer.
     */
    export interface dxFunnelTooltip extends BaseWidgetTooltip {
        /**
         * Specifies a custom template for a tooltip.
         */
        contentTemplate?: DevExpress.core.template | ((info: { item?: dxFunnelItem, value?: number, valueText?: string, percent?: number, percentText?: string }, element: DevExpress.core.dxElement) => string | Element | JQuery);
        /**
         * Customizes a specific tooltip's appearance.
         */
        customizeTooltip?: ((info: { item?: dxFunnelItem, value?: number, valueText?: string, percent?: number, percentText?: string }) => any);
    }
    /**
     * The Funnel is a UI component that visualizes a value at different stages. It helps assess value changes throughout these stages and identify potential issues. The Funnel UI component conveys information using different interactive elements (tooltips, labels, legend) and enables you to create not only a funnel, but also a pyramid chart.
     */
    export class dxFunnel extends BaseWidget {
        constructor(element: Element, options?: dxFunnelOptions)
        constructor(element: JQuery, options?: dxFunnelOptions)
        /**
         * Cancels the selection of all funnel items.
         */
        clearSelection(): void;
        /**
         * Provides access to all funnel items.
         */
        getAllItems(): Array<dxFunnelItem>;
        /**
         * Gets the DataSource instance.
         */
        getDataSource(): DevExpress.data.DataSource;
        /**
         * Hides all UI component tooltips.
         */
        hideTooltip(): void;
    }
    /**
     * This section describes the Item object, which represents a funnel item.
     */
    export class dxFunnelItem {
        /**
         * The item's argument.
         */
        argument?: string | Date | number;
        /**
         * The item's original data object.
         */
        data?: any;
        /**
         * The item's calculated percentage value.
         */
        percent?: number;
        /**
         * The item's value.
         */
        value?: number;
        /**
         * Gets the funnel item's color specified in the data source or palette.
         */
        getColor(): string;
        /**
         * Changes the funnel item's hover state.
         */
        hover(state: boolean): void;
        /**
         * Indicates whether the funnel item is in the hover state.
         */
        isHovered(): boolean;
        /**
         * Indicates whether the funnel item is selected.
         */
        isSelected(): boolean;
        /**
         * Selects or cancels the funnel item's selection.
         */
        select(state: boolean): void;
        /**
         * Shows the funnel item's tooltip.
         */
        showTooltip(): void;
    }
    /**
     * 
     */
    export interface dxLinearGaugeOptions extends BaseGaugeOptions<dxLinearGauge> {
        /**
         * Specifies the properties required to set the geometry of the LinearGauge UI component.
         */
        geometry?: { orientation?: 'horizontal' | 'vertical' };
        /**
         * Specifies gauge range container properties.
         */
        rangeContainer?: dxLinearGaugeRangeContainer;
        /**
         * Specifies the gauge's scale properties.
         */
        scale?: dxLinearGaugeScale;
        /**
         * Specifies the appearance properties of subvalue indicators.
         */
        subvalueIndicator?: GaugeIndicator;
        /**
         * Specifies the appearance properties of the value indicator.
         */
        valueIndicator?: GaugeIndicator;
    }
    /**
     * Specifies gauge range container properties.
     */
    export interface dxLinearGaugeRangeContainer extends BaseGaugeRangeContainer {
        /**
         * Specifies the orientation of the range container. Applies only if the geometry.orientation property is 'vertical'.
         */
        horizontalOrientation?: 'center' | 'left' | 'right';
        /**
         * Specifies the orientation of the range container. Applies only if the geometry.orientation property is 'horizontal'.
         */
        verticalOrientation?: 'bottom' | 'center' | 'top';
        /**
         * Specifies the width of the range container's start and end boundaries in the LinearGauge UI component.
         */
        width?: { end?: number, start?: number } | number;
    }
    /**
     * Specifies the gauge's scale properties.
     */
    export interface dxLinearGaugeScale extends BaseGaugeScale {
        /**
         * Specifies the orientation of scale ticks. Applies only if the geometry.orientation property is 'vertical'.
         */
        horizontalOrientation?: 'center' | 'left' | 'right';
        /**
         * Specifies common properties for scale labels.
         */
        label?: dxLinearGaugeScaleLabel;
        /**
         * Specifies the minimum distance between two neighboring major ticks in pixels.
         */
        scaleDivisionFactor?: number;
        /**
         * Specifies the orientation of scale ticks. Applies only if the geometry.orientation property is 'horizontal'.
         */
        verticalOrientation?: 'bottom' | 'center' | 'top';
    }
    /**
     * Specifies common properties for scale labels.
     */
    export interface dxLinearGaugeScaleLabel extends BaseGaugeScaleLabel {
        /**
         * Specifies the spacing between scale labels and ticks.
         */
        indentFromTick?: number;
    }
    /**
     * The LinearGauge is a UI component that indicates values on a linear numeric scale.
     */
    export class dxLinearGauge extends BaseGauge {
        constructor(element: Element, options?: dxLinearGaugeOptions)
        constructor(element: JQuery, options?: dxLinearGaugeOptions)
    }
    /**
     * 
     */
    export interface dxPieChartOptions extends BaseChartOptions<dxPieChart> {
        /**
         * Specifies adaptive layout properties.
         */
        adaptiveLayout?: dxPieChartAdaptiveLayout;
        /**
         * Specifies the annotation collection.
         */
        annotations?: Array<dxPieChartAnnotationConfig | any>;
        /**
         * Specifies a custom template for content in the pie's center.
         */
        centerTemplate?: DevExpress.core.template | ((component: dxPieChart, element: SVGGElement) => string | SVGElement | JQuery);
        /**
         * Specifies settings common for all annotations in the PieChart.
         */
        commonAnnotationSettings?: dxPieChartCommonAnnotationConfig;
        /**
         * An object defining the configuration properties that are common for all series of the PieChart UI component.
         */
        commonSeriesSettings?: any;
        /**
         * 
         */
        customizeAnnotation?: ((annotation: dxPieChartAnnotationConfig | any) => dxPieChartAnnotationConfig);
        /**
         * Specifies the diameter of the pie.
         */
        diameter?: number;
        /**
         * Specifies the fraction of the inner radius relative to the total radius in the series of the 'doughnut' type. The value should be between 0 and 1.
         */
        innerRadius?: number;
        /**
         * Specifies PieChart legend properties.
         */
        legend?: dxPieChartLegend;
        /**
         * Specifies the minimum diameter of the pie.
         */
        minDiameter?: number;
        /**
         * A function that is executed when a legend item is clicked or tapped.
         */
        onLegendClick?: ((e: { component?: dxPieChart, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, target?: string | number, points?: Array<piePointObject> }) => any) | string;
        /**
         * Sets the palette to be used to colorize series and their elements.
         */
        palette?: Array<string> | 'Bright' | 'Harmony Light' | 'Ocean' | 'Pastel' | 'Soft' | 'Soft Pastel' | 'Vintage' | 'Violet' | 'Carmine' | 'Dark Moon' | 'Dark Violet' | 'Green Mist' | 'Soft Blue' | 'Material' | 'Office';
        /**
         * Specifies how a chart must behave when point labels overlap.
         */
        resolveLabelOverlapping?: 'hide' | 'none' | 'shift';
        /**
         * Specifies the direction that the pie chart segments will occupy.
         */
        segmentsDirection?: 'anticlockwise' | 'clockwise';
        /**
         * Specifies properties for the series of the PieChart UI component.
         */
        series?: PieChartSeries | Array<PieChartSeries>;
        /**
         * Defines properties for the series template.
         */
        seriesTemplate?: { customizeSeries?: ((seriesName: any) => PieChartSeries), nameField?: string };
        /**
         * Allows you to display several adjoining pies in the same size.
         */
        sizeGroup?: string;
        /**
         * Specifies the angle in arc degrees from which the first segment of a pie chart should start.
         */
        startAngle?: number;
        /**
         * Specifies the type of the pie chart series.
         */
        type?: 'donut' | 'doughnut' | 'pie';
    }
    /**
     * Specifies adaptive layout properties.
     */
    export interface dxPieChartAdaptiveLayout extends BaseChartAdaptiveLayout {
        /**
         * Specifies whether point labels should be kept when the UI component adapts the layout.
         */
        keepLabels?: boolean;
    }
    /**
     * Specifies PieChart legend properties.
     */
    export interface dxPieChartLegend extends BaseChartLegend {
        /**
         * Specifies the text for a hint that appears when a user hovers the mouse pointer over a legend item.
         */
        customizeHint?: ((pointInfo: { pointName?: any, pointIndex?: number, pointColor?: string }) => string);
        /**
         * Allows you to change the order, text, and visibility of legend items.
         */
        customizeItems?: ((items: Array<PieChartLegendItem>) => Array<PieChartLegendItem>);
        /**
         * Specifies a callback function that returns the text to be displayed by a legend item.
         */
        customizeText?: ((pointInfo: { pointName?: any, pointIndex?: number, pointColor?: string }) => string);
        /**
         * Specifies what chart elements to highlight when a corresponding item in the legend is hovered over.
         */
        hoverMode?: 'none' | 'allArgumentPoints';
        /**
         * Specifies an SVG element that serves as a custom legend item marker.
         */
        markerTemplate?: DevExpress.core.template | ((legendItem: PieChartLegendItem, element: SVGGElement) => string | SVGElement | JQuery);
    }
    /**
     * The PieChart is a UI component that visualizes data as a circle divided into sectors that each represents a portion of the whole.
     */
    export class dxPieChart extends BaseChart {
        constructor(element: Element, options?: dxPieChartOptions)
        constructor(element: JQuery, options?: dxPieChartOptions)
        /**
         * Gets the radius of the doughnut hole in pixels. Applies only when the type is 'doughnut' or 'donut'.
         */
        getInnerRadius(): number;
    }
    /**
     * 
     */
    export interface dxPieChartAnnotationConfig extends dxPieChartCommonAnnotationConfig {
        /**
         * Specifies the annotation's name.
         */
        name?: string;
    }
    /**
     * 
     */
    export interface dxPieChartCommonAnnotationConfig extends BaseWidgetAnnotationConfig {
        /**
         * Positions the annotation relative to a specific argument.
         */
        argument?: number | Date | string;
        /**
         * 
         */
        customizeTooltip?: ((annotation: dxPieChartAnnotationConfig | any) => any);
        /**
         * Specifies an annotation's position on the surface of a specific argument.
         */
        location?: 'center' | 'edge';
        /**
         * Anchors the annotation to a series point. Accepts the name of the point's series.
         */
        series?: string;
        /**
         * 
         */
        template?: DevExpress.core.template | ((annotation: dxPieChartCommonAnnotationConfig | any, element: SVGGElement) => string | SVGElement | JQuery);
        /**
         * 
         */
        tooltipTemplate?: DevExpress.core.template | ((annotation: dxPieChartAnnotationConfig | any, element: DevExpress.core.dxElement) => string | Element | JQuery);
    }
    /**
     * This section lists the objects that define properties to be used to configure series of particular types.
     */
    export interface dxPieChartSeriesTypes {
        /**
         * An object that defines configuration properties for chart series.
         */
        CommonPieChartSeries?: dxPieChartSeriesTypesCommonPieChartSeries;
        /**
         * An object defining a series of the doughnut type.
         */
        DoughnutSeries?: any;
        /**
         * An object defining a series of the pie type.
         */
        PieSeries?: any;
    }
    /**
     * An object that defines configuration properties for chart series.
     */
    export interface dxPieChartSeriesTypesCommonPieChartSeries {
        /**
         * Specifies the data source field that provides arguments for series points.
         */
        argumentField?: string;
        /**
         * Specifies the required type for series arguments.
         */
        argumentType?: 'datetime' | 'numeric' | 'string';
        /**
         * An object defining the series border configuration properties.
         */
        border?: { color?: string, dashStyle?: 'dash' | 'dot' | 'longDash' | 'solid', visible?: boolean, width?: number };
        /**
         * Specifies a series color.
         */
        color?: string;
        /**
         * Specifies the chart elements to highlight when a series is hovered over.
         */
        hoverMode?: 'none' | 'onlyPoint';
        /**
         * An object defining configuration properties for a hovered series.
         */
        hoverStyle?: { border?: { color?: string, dashStyle?: 'dash' | 'dot' | 'longDash' | 'solid', visible?: boolean, width?: number }, color?: string, hatching?: { direction?: 'left' | 'none' | 'right', opacity?: number, step?: number, width?: number } };
        /**
         * An object defining the label configuration properties.
         */
        label?: { argumentFormat?: DevExpress.ui.format, backgroundColor?: string, border?: { color?: string, dashStyle?: 'dash' | 'dot' | 'longDash' | 'solid', visible?: boolean, width?: number }, connector?: { color?: string, visible?: boolean, width?: number }, customizeText?: ((pointInfo: any) => string), font?: Font, format?: DevExpress.ui.format, position?: 'columns' | 'inside' | 'outside', radialOffset?: number, rotationAngle?: number, textOverflow?: 'ellipsis' | 'hide' | 'none', visible?: boolean, wordWrap?: 'normal' | 'breakWord' | 'none' };
        /**
         * Specifies how many points are acceptable to be in a series to display all labels for these points. Otherwise, the labels will not be displayed.
         */
        maxLabelCount?: number;
        /**
         * Specifies a minimal size of a displayed pie segment.
         */
        minSegmentSize?: number;
        /**
         * Specifies the chart elements to highlight when the series is selected.
         */
        selectionMode?: 'none' | 'onlyPoint';
        /**
         * An object defining configuration properties for the series when it is selected.
         */
        selectionStyle?: { border?: { color?: string, dashStyle?: 'dash' | 'dot' | 'longDash' | 'solid', visible?: boolean, width?: number }, color?: string, hatching?: { direction?: 'left' | 'none' | 'right', opacity?: number, step?: number, width?: number } };
        /**
         * Specifies chart segment grouping properties.
         */
        smallValuesGrouping?: { groupName?: string, mode?: 'none' | 'smallValueThreshold' | 'topN', threshold?: number, topCount?: number };
        /**
         * Specifies the name of the data source field that provides data about a point.
         */
        tagField?: string;
        /**
         * Specifies the data source field that provides values for series points.
         */
        valueField?: string;
    }
    /**
     * 
     */
    export interface dxPolarChartOptions extends BaseChartOptions<dxPolarChart> {
        /**
         * Specifies adaptive layout properties.
         */
        adaptiveLayout?: dxPolarChartAdaptiveLayout;
        /**
         * Specifies the annotation collection.
         */
        annotations?: Array<dxPolarChartAnnotationConfig | any>;
        /**
         * Specifies argument axis properties for the PolarChart UI component.
         */
        argumentAxis?: dxPolarChartArgumentAxis;
        /**
         * Controls the padding and consequently the angular width of a group of bars with the same argument using relative units. Ignored if the barGroupWidth property is set.
         */
        barGroupPadding?: number;
        /**
         * Specifies a fixed angular width for groups of bars with the same argument, measured in degrees. Takes precedence over the barGroupPadding property.
         */
        barGroupWidth?: number;
        /**
         * Specifies settings common for all annotations in the PolarChart.
         */
        commonAnnotationSettings?: dxPolarChartCommonAnnotationConfig;
        /**
         * An object defining the configuration properties that are common for all axes of the PolarChart UI component.
         */
        commonAxisSettings?: dxPolarChartCommonAxisSettings;
        /**
         * An object defining the configuration properties that are common for all series of the PolarChart UI component.
         */
        commonSeriesSettings?: dxPolarChartCommonSeriesSettings;
        /**
         * Specifies the color of the parent page element.
         */
        containerBackgroundColor?: string;
        /**
         * Customizes an individual annotation.
         */
        customizeAnnotation?: ((annotation: dxPolarChartAnnotationConfig | any) => dxPolarChartAnnotationConfig);
        /**
         * An object providing properties for managing data from a data source.
         */
        dataPrepareSettings?: { checkTypeForAllData?: boolean, convertToAxisDataType?: boolean, sortingMethod?: boolean | ((a: { arg?: Date | number | string, val?: Date | number | string }, b: { arg?: Date | number | string, val?: Date | number | string }) => number) };
        /**
         * Specifies the properties of a chart's legend.
         */
        legend?: dxPolarChartLegend;
        /**
         * Forces the UI component to treat negative values as zeroes. Applies to stacked-like series only.
         */
        negativesAsZeroes?: boolean;
        /**
         * A function that is executed when a label on the argument axis is clicked or tapped.
         */
        onArgumentAxisClick?: ((e: { component?: dxPolarChart, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, argument?: Date | number | string }) => any) | string;
        /**
         * A function that is executed when a legend item is clicked or tapped.
         */
        onLegendClick?: ((e: { component?: dxPolarChart, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, target?: polarChartSeriesObject }) => any) | string;
        /**
         * A function that is executed when a series is clicked or tapped.
         */
        onSeriesClick?: ((e: { component?: dxPolarChart, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, target?: polarChartSeriesObject }) => any) | string;
        /**
         * A function that is executed after the pointer enters or leaves a series.
         */
        onSeriesHoverChanged?: ((e: { component?: dxPolarChart, element?: DevExpress.core.dxElement, model?: any, target?: polarChartSeriesObject }) => any);
        /**
         * A function that is executed when a series is selected or selection is canceled.
         */
        onSeriesSelectionChanged?: ((e: { component?: dxPolarChart, element?: DevExpress.core.dxElement, model?: any, target?: polarChartSeriesObject }) => any);
        /**
         * A function that is executed when zooming or panning ends.
         */
        onZoomEnd?: ((e: { component?: dxPolarChart, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, axis?: chartAxisObject, range?: VizRange, previousRange?: VizRange, cancel?: boolean, actionType?: 'zoom' | 'pan', zoomFactor?: number, shift?: number }) => any);
        /**
         * A function that is executed when zooming or panning begins.
         */
        onZoomStart?: ((e: { component?: dxPolarChart, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, axis?: chartAxisObject, range?: VizRange, cancel?: boolean, actionType?: 'zoom' | 'pan' }) => any);
        /**
         * Specifies how the chart must behave when series point labels overlap.
         */
        resolveLabelOverlapping?: 'hide' | 'none';
        /**
         * Specifies properties for PolarChart UI component series.
         */
        series?: PolarChartSeries | Array<PolarChartSeries>;
        /**
         * Specifies whether a single series or multiple series can be selected in the chart.
         */
        seriesSelectionMode?: 'multiple' | 'single';
        /**
         * Defines properties for the series template.
         */
        seriesTemplate?: { customizeSeries?: ((seriesName: any) => PolarChartSeries), nameField?: string };
        /**
         * Configures tooltips.
         */
        tooltip?: dxPolarChartTooltip;
        /**
         * Indicates whether or not to display a 'spider web'.
         */
        useSpiderWeb?: boolean;
        /**
         * Specifies value axis properties for the PolarChart UI component.
         */
        valueAxis?: dxPolarChartValueAxis;
    }
    /**
     * Specifies adaptive layout properties.
     */
    export interface dxPolarChartAdaptiveLayout extends BaseChartAdaptiveLayout {
        /**
         * Specifies the minimum container height at which the layout begins to adapt.
         */
        height?: number;
        /**
         * Specifies the minimum container width at which the layout begins to adapt.
         */
        width?: number;
    }
    /**
     * Specifies argument axis properties for the PolarChart UI component.
     */
    export interface dxPolarChartArgumentAxis extends dxPolarChartCommonAxisSettings {
        /**
         * Specifies the desired type of axis values.
         */
        argumentType?: 'datetime' | 'numeric' | 'string';
        /**
         * Specifies the minimum distance between two neighboring major ticks in pixels. Applies only to the axes of the 'continuous' and 'logarithmic' types.
         */
        axisDivisionFactor?: number;
        /**
         * Specifies the order of categories on an axis of the 'discrete' type.
         */
        categories?: Array<number | string | Date>;
        /**
         * Defines an array of the argument axis constant lines.
         */
        constantLines?: Array<dxPolarChartArgumentAxisConstantLines>;
        /**
         * Specifies whether or not to display the first point at the angle specified by the startAngle property.
         */
        firstPointOnStartAngle?: boolean;
        /**
         * Specifies the elements that will be highlighted when the argument axis is hovered over.
         */
        hoverMode?: 'allArgumentPoints' | 'none';
        /**
         * Specifies properties for argument axis labels.
         */
        label?: dxPolarChartArgumentAxisLabel;
        /**
         * Specifies a value used to calculate the range on a logarithmic axis within which the axis should be linear. Applies only if the data source contains negative values or zeroes.
         */
        linearThreshold?: number;
        /**
         * Specifies the value to be raised to a power when generating ticks for a logarithmic axis.
         */
        logarithmBase?: number;
        /**
         * Specifies the properties of the minor ticks.
         */
        minorTick?: dxPolarChartArgumentAxisMinorTick;
        /**
         * Specifies the number of minor ticks between two neighboring major ticks.
         */
        minorTickCount?: number;
        /**
         * Specifies the interval between minor ticks.
         */
        minorTickInterval?: number | any | 'day' | 'hour' | 'millisecond' | 'minute' | 'month' | 'quarter' | 'second' | 'week' | 'year';
        /**
         * Specifies the value to be used as the origin for the argument axis.
         */
        originValue?: number;
        /**
         * Specifies the period of the argument values in the data source.
         */
        period?: number;
        /**
         * Specifies the angle in arc degrees to which the argument axis should be rotated. The positive values rotate the axis clockwise.
         */
        startAngle?: number;
        /**
         * Specifies properties for argument axis strips.
         */
        strips?: Array<dxPolarChartArgumentAxisStrips>;
        /**
         * An object defining the configuration properties for axis ticks.
         */
        tick?: dxPolarChartArgumentAxisTick;
        /**
         * Specifies an interval between axis ticks/grid lines.
         */
        tickInterval?: number | any | 'day' | 'hour' | 'millisecond' | 'minute' | 'month' | 'quarter' | 'second' | 'week' | 'year';
        /**
         * Specifies the required type of the argument axis.
         */
        type?: 'continuous' | 'discrete' | 'logarithmic';
    }
    /**
     * Defines an array of the argument axis constant lines.
     */
    export interface dxPolarChartArgumentAxisConstantLines extends dxPolarChartCommonAxisSettingsConstantLineStyle {
        /**
         * Specifies whether to display the constant line behind or in front of the series.
         */
        displayBehindSeries?: boolean;
        /**
         * Specifies whether to extend the axis to display the constant line.
         */
        extendAxis?: boolean;
        /**
         * An object defining constant line label properties.
         */
        label?: dxPolarChartArgumentAxisConstantLinesLabel;
        /**
         * Specifies a value to be displayed by a constant line.
         */
        value?: number | Date | string;
    }
    /**
     * An object defining constant line label properties.
     */
    export interface dxPolarChartArgumentAxisConstantLinesLabel extends dxPolarChartCommonAxisSettingsConstantLineStyleLabel {
        /**
         * Specifies the text to be displayed in a constant line label.
         */
        text?: string;
    }
    /**
     * Specifies properties for argument axis labels.
     */
    export interface dxPolarChartArgumentAxisLabel extends dxPolarChartCommonAxisSettingsLabel {
        /**
         * Specifies the text for a hint that appears when a user hovers the mouse pointer over a label on the argument axis.
         */
        customizeHint?: ((argument: { value?: Date | number | string, valueText?: string }) => string);
        /**
         * Specifies a callback function that returns the text to be displayed by argument axis labels.
         */
        customizeText?: ((argument: { value?: Date | number | string, valueText?: string }) => string);
        /**
         * Formats a value before it is displayed in an axis label.
         */
        format?: DevExpress.ui.format;
    }
    /**
     * Specifies the properties of the minor ticks.
     */
    export interface dxPolarChartArgumentAxisMinorTick extends dxPolarChartCommonAxisSettingsMinorTick {
        /**
         * Shifts minor ticks from the reference position.
         */
        shift?: number;
    }
    /**
     * Specifies properties for argument axis strips.
     */
    export interface dxPolarChartArgumentAxisStrips extends dxPolarChartCommonAxisSettingsStripStyle {
        /**
         * Specifies a color for a strip.
         */
        color?: string;
        /**
         * Specifies an end value for a strip.
         */
        endValue?: number | Date | string;
        /**
         * An object that defines the label configuration properties of a strip.
         */
        label?: dxPolarChartArgumentAxisStripsLabel;
        /**
         * Specifies a start value for a strip.
         */
        startValue?: number | Date | string;
    }
    /**
     * An object that defines the label configuration properties of a strip.
     */
    export interface dxPolarChartArgumentAxisStripsLabel extends dxPolarChartCommonAxisSettingsStripStyleLabel {
        /**
         * Specifies the text displayed in a strip.
         */
        text?: string;
    }
    /**
     * An object defining the configuration properties for axis ticks.
     */
    export interface dxPolarChartArgumentAxisTick extends dxPolarChartCommonAxisSettingsTick {
        /**
         * Shifts ticks from the reference position.
         */
        shift?: number;
    }
    /**
     * An object defining the configuration properties that are common for all axes of the PolarChart UI component.
     */
    export interface dxPolarChartCommonAxisSettings {
        /**
         * Specifies whether to allow decimal values on the axis. When false, the axis contains integer values only.
         */
        allowDecimals?: boolean;
        /**
         * Specifies the color of the line that represents an axis.
         */
        color?: string;
        /**
         * Specifies the appearance of all the UI component's constant lines.
         */
        constantLineStyle?: dxPolarChartCommonAxisSettingsConstantLineStyle;
        /**
         * Specifies whether ticks/grid lines of a discrete axis are located between labels or cross the labels.
         */
        discreteAxisDivisionMode?: 'betweenLabels' | 'crossLabels';
        /**
         * Specifies whether to force the axis to start and end on ticks.
         */
        endOnTick?: boolean;
        /**
         * An object defining the configuration properties for the grid lines of an axis in the PolarChart UI component.
         */
        grid?: { color?: string, opacity?: number, visible?: boolean, width?: number };
        /**
         * Indicates whether or not an axis is inverted.
         */
        inverted?: boolean;
        /**
         * An object defining the label configuration properties that are common for all axes in the PolarChart UI component.
         */
        label?: dxPolarChartCommonAxisSettingsLabel;
        /**
         * Specifies the properties of the minor grid.
         */
        minorGrid?: { color?: string, opacity?: number, visible?: boolean, width?: number };
        /**
         * Specifies the properties of the minor ticks.
         */
        minorTick?: dxPolarChartCommonAxisSettingsMinorTick;
        /**
         * Specifies the opacity of the line that represents an axis.
         */
        opacity?: number;
        /**
         * An object defining configuration properties for strip style.
         */
        stripStyle?: dxPolarChartCommonAxisSettingsStripStyle;
        /**
         * An object defining the configuration properties for axis ticks.
         */
        tick?: dxPolarChartCommonAxisSettingsTick;
        /**
         * Indicates whether or not the line that represents an axis in a chart is visible.
         */
        visible?: boolean;
        /**
         * Specifies the width of the line that represents an axis in the chart.
         */
        width?: number;
    }
    /**
     * Specifies the appearance of all the UI component's constant lines.
     */
    export interface dxPolarChartCommonAxisSettingsConstantLineStyle {
        /**
         * Specifies a color for a constant line.
         */
        color?: string;
        /**
         * Specifies a dash style for a constant line.
         */
        dashStyle?: 'dash' | 'dot' | 'longDash' | 'solid';
        /**
         * An object defining constant line label properties.
         */
        label?: dxPolarChartCommonAxisSettingsConstantLineStyleLabel;
        /**
         * Specifies a constant line width in pixels.
         */
        width?: number;
    }
    /**
     * An object defining constant line label properties.
     */
    export interface dxPolarChartCommonAxisSettingsConstantLineStyleLabel {
        /**
         * Specifies font properties for a constant line label.
         */
        font?: Font;
        /**
         * Indicates whether or not to display labels for the axis constant lines.
         */
        visible?: boolean;
    }
    /**
     * An object defining the label configuration properties that are common for all axes in the PolarChart UI component.
     */
    export interface dxPolarChartCommonAxisSettingsLabel {
        /**
         * Specifies font properties for axis labels.
         */
        font?: Font;
        /**
         * Specifies the spacing between an axis and its labels in pixels.
         */
        indentFromAxis?: number;
        /**
         * Decides how to arrange axis labels when there is not enough space to keep all of them.
         */
        overlappingBehavior?: 'none' | 'hide';
        /**
         * Indicates whether or not axis labels are visible.
         */
        visible?: boolean;
    }
    /**
     * Specifies the properties of the minor ticks.
     */
    export interface dxPolarChartCommonAxisSettingsMinorTick {
        /**
         * Specifies a color for the minor ticks.
         */
        color?: string;
        /**
         * Specifies minor tick length.
         */
        length?: number;
        /**
         * Specifies an opacity for the minor ticks.
         */
        opacity?: number;
        /**
         * Indicates whether or not the minor ticks are displayed on an axis.
         */
        visible?: boolean;
        /**
         * Specifies minor tick width.
         */
        width?: number;
    }
    /**
     * An object defining configuration properties for strip style.
     */
    export interface dxPolarChartCommonAxisSettingsStripStyle {
        /**
         * An object defining the configuration properties for a strip label style.
         */
        label?: dxPolarChartCommonAxisSettingsStripStyleLabel;
    }
    /**
     * An object defining the configuration properties for a strip label style.
     */
    export interface dxPolarChartCommonAxisSettingsStripStyleLabel {
        /**
         * Specifies font properties for a strip label.
         */
        font?: Font;
    }
    /**
     * An object defining the configuration properties for axis ticks.
     */
    export interface dxPolarChartCommonAxisSettingsTick {
        /**
         * Specifies ticks color.
         */
        color?: string;
        /**
         * Specifies tick length.
         */
        length?: number;
        /**
         * Specifies tick opacity.
         */
        opacity?: number;
        /**
         * Indicates whether or not ticks are visible on an axis.
         */
        visible?: boolean;
        /**
         * Specifies tick width.
         */
        width?: number;
    }
    /**
     * An object defining the configuration properties that are common for all series of the PolarChart UI component.
     */
    export interface dxPolarChartCommonSeriesSettings extends dxPolarChartSeriesTypesCommonPolarChartSeries {
        /**
         * An object that specifies configuration properties for all series of the area type in the chart.
         */
        area?: any;
        /**
         * An object that specifies configuration properties for all series of the 'bar' type in the chart.
         */
        bar?: any;
        /**
         * An object that specifies configuration properties for all series of the 'line' type in the chart.
         */
        line?: any;
        /**
         * An object that specifies configuration properties for all series of the 'scatter' type in the chart.
         */
        scatter?: any;
        /**
         * An object that specifies configuration properties for all series of the 'stackedBar' type in the chart.
         */
        stackedbar?: any;
        /**
         * Sets a series type.
         */
        type?: 'area' | 'bar' | 'line' | 'scatter' | 'stackedbar';
    }
    /**
     * Specifies the properties of a chart's legend.
     */
    export interface dxPolarChartLegend extends BaseChartLegend {
        /**
         * Specifies the text for a hint that appears when a user hovers the mouse pointer over a legend item.
         */
        customizeHint?: ((seriesInfo: { seriesName?: any, seriesIndex?: number, seriesColor?: string }) => string);
        /**
         * Specifies a callback function that returns the text to be displayed by legend items.
         */
        customizeText?: ((seriesInfo: { seriesName?: any, seriesIndex?: number, seriesColor?: string }) => string);
        /**
         * Specifies what series elements to highlight when a corresponding item in the legend is hovered over.
         */
        hoverMode?: 'excludePoints' | 'includePoints' | 'none';
    }
    /**
     * Configures tooltips.
     */
    export interface dxPolarChartTooltip extends BaseChartTooltip {
        /**
         * Specifies the kind of information to display in a tooltip.
         */
        shared?: boolean;
    }
    /**
     * Specifies value axis properties for the PolarChart UI component.
     */
    export interface dxPolarChartValueAxis extends dxPolarChartCommonAxisSettings {
        /**
         * Specifies a coefficient for dividing the value axis.
         */
        axisDivisionFactor?: number;
        /**
         * Specifies the order of categories on an axis of the 'discrete' type.
         */
        categories?: Array<number | string | Date>;
        /**
         * Defines an array of the value axis constant lines.
         */
        constantLines?: Array<dxPolarChartValueAxisConstantLines>;
        /**
         * Specifies whether to force the axis to start and end on ticks.
         */
        endOnTick?: boolean;
        /**
         * Specifies properties for value axis labels.
         */
        label?: dxPolarChartValueAxisLabel;
        /**
         * Specifies a value used to calculate the range on a logarithmic axis within which the axis should be linear. Applies only if the data source contains negative values or zeroes.
         */
        linearThreshold?: number;
        /**
         * Specifies the value to be raised to a power when generating ticks for a logarithmic axis.
         */
        logarithmBase?: number;
        /**
         * Specifies a coefficient that determines the spacing between the maximum series point and the axis.
         */
        maxValueMargin?: number;
        /**
         * Specifies a coefficient that determines the spacing between the minimum series point and the axis.
         */
        minValueMargin?: number;
        /**
         * Specifies the minimum length of the visual range.
         */
        minVisualRangeLength?: number | any | 'day' | 'hour' | 'millisecond' | 'minute' | 'month' | 'quarter' | 'second' | 'week' | 'year';
        /**
         * Specifies the number of minor ticks between two neighboring major ticks.
         */
        minorTickCount?: number;
        /**
         * Specifies the interval between minor ticks.
         */
        minorTickInterval?: number | any | 'day' | 'hour' | 'millisecond' | 'minute' | 'month' | 'quarter' | 'second' | 'week' | 'year';
        /**
         * Specifies whether or not to indicate a zero value on the value axis.
         */
        showZero?: boolean;
        /**
         * Specifies properties for value axis strips.
         */
        strips?: Array<dxPolarChartValueAxisStrips>;
        /**
         * An object defining the configuration properties for axis ticks.
         */
        tick?: dxPolarChartValueAxisTick;
        /**
         * Specifies an interval between axis ticks/grid lines.
         */
        tickInterval?: number | any | 'day' | 'hour' | 'millisecond' | 'minute' | 'month' | 'quarter' | 'second' | 'week' | 'year';
        /**
         * Specifies the required type of the value axis.
         */
        type?: 'continuous' | 'discrete' | 'logarithmic';
        /**
         * Indicates whether to display series with indents from axis boundaries.
         */
        valueMarginsEnabled?: boolean;
        /**
         * Specifies the desired type of axis values.
         */
        valueType?: 'datetime' | 'numeric' | 'string';
        /**
         * Defines the axis' displayed range. Cannot be wider than the wholeRange.
         */
        visualRange?: VizRange | Array<number | string | Date>;
        /**
         * Specifies how the axis's visual range should behave when the PolarChart data is updated.
         */
        visualRangeUpdateMode?: 'auto' | 'keep' | 'reset';
        /**
         * Defines the range where the axis can be zoomed.
         */
        wholeRange?: VizRange | Array<number | string | Date>;
    }
    /**
     * Defines an array of the value axis constant lines.
     */
    export interface dxPolarChartValueAxisConstantLines extends dxPolarChartCommonAxisSettingsConstantLineStyle {
        /**
         * Specifies whether to display the constant line behind or in front of the series.
         */
        displayBehindSeries?: boolean;
        /**
         * Specifies whether to extend the axis to display the constant line.
         */
        extendAxis?: boolean;
        /**
         * An object defining constant line label properties.
         */
        label?: dxPolarChartValueAxisConstantLinesLabel;
        /**
         * Specifies a value to be displayed by a constant line.
         */
        value?: number | Date | string;
    }
    /**
     * An object defining constant line label properties.
     */
    export interface dxPolarChartValueAxisConstantLinesLabel extends dxPolarChartCommonAxisSettingsConstantLineStyleLabel {
        /**
         * Specifies the text to be displayed in a constant line label.
         */
        text?: string;
    }
    /**
     * Specifies properties for value axis labels.
     */
    export interface dxPolarChartValueAxisLabel extends dxPolarChartCommonAxisSettingsLabel {
        /**
         * Specifies the text for a hint that appears when a user hovers the mouse pointer over a label on the value axis.
         */
        customizeHint?: ((axisValue: { value?: Date | number | string, valueText?: string }) => string);
        /**
         * Specifies a callback function that returns the text to be displayed in value axis labels.
         */
        customizeText?: ((axisValue: { value?: Date | number | string, valueText?: string }) => string);
        /**
         * Formats a value before it is displayed in an axis label.
         */
        format?: DevExpress.ui.format;
    }
    /**
     * Specifies properties for value axis strips.
     */
    export interface dxPolarChartValueAxisStrips extends dxPolarChartCommonAxisSettingsStripStyle {
        /**
         * Specifies a color for a strip.
         */
        color?: string;
        /**
         * Specifies an end value for a strip.
         */
        endValue?: number | Date | string;
        /**
         * An object that defines the label configuration properties of a strip.
         */
        label?: dxPolarChartValueAxisStripsLabel;
        /**
         * Specifies a start value for a strip.
         */
        startValue?: number | Date | string;
    }
    /**
     * An object that defines the label configuration properties of a strip.
     */
    export interface dxPolarChartValueAxisStripsLabel extends dxPolarChartCommonAxisSettingsStripStyleLabel {
        /**
         * Specifies the text displayed in a strip.
         */
        text?: string;
    }
    /**
     * An object defining the configuration properties for axis ticks.
     */
    export interface dxPolarChartValueAxisTick extends dxPolarChartCommonAxisSettingsTick {
        /**
         * Indicates whether or not ticks are visible on an axis.
         */
        visible?: boolean;
    }
    /**
     * The PolarChart is a UI component that visualizes data in a polar coordinate system.
     */
    export class dxPolarChart extends BaseChart {
        constructor(element: Element, options?: dxPolarChartOptions)
        constructor(element: JQuery, options?: dxPolarChartOptions)
        /**
         * Gets a value axis.
         */
        getValueAxis(): chartAxisObject;
        /**
         * Resets the value axis' visual range to the data range or to the whole range if it is within the data range.
         */
        resetVisualRange(): void;
    }
    /**
     * 
     */
    export interface dxPolarChartAnnotationConfig extends dxPolarChartCommonAnnotationConfig {
        /**
         * Specifies the annotation's name.
         */
        name?: string;
    }
    /**
     * 
     */
    export interface dxPolarChartCommonAnnotationConfig extends BaseChartAnnotationConfig {
        /**
         * Specifies the angle between the startAngle and the radius.
         */
        angle?: number;
        /**
         * 
         */
        customizeTooltip?: ((annotation: dxPolarChartAnnotationConfig | any) => any);
        /**
         * Places an annotation at the specified distance from the center of the UI component.
         */
        radius?: number;
        /**
         * 
         */
        template?: DevExpress.core.template | ((annotation: dxPolarChartCommonAnnotationConfig | any, element: SVGGElement) => string | SVGElement | JQuery);
        /**
         * 
         */
        tooltipTemplate?: DevExpress.core.template | ((annotation: dxPolarChartAnnotationConfig | any, element: DevExpress.core.dxElement) => string | Element | JQuery);
    }
    /**
     * This section lists objects that define properties used to configure series of specific types.
     */
    export interface dxPolarChartSeriesTypes {
        /**
         * An object that defines configuration properties for polar chart series.
         */
        CommonPolarChartSeries?: dxPolarChartSeriesTypesCommonPolarChartSeries;
        /**
         * An object defining a series of the area type.
         */
        areapolarseries?: dxPolarChartSeriesTypesAreapolarseries;
        /**
         * An object defining a series of the bar type.
         */
        barpolarseries?: dxPolarChartSeriesTypesBarpolarseries;
        /**
         * An object defining a series of the line type.
         */
        linepolarseries?: dxPolarChartSeriesTypesLinepolarseries;
        /**
         * An object defining a series of the scatter type.
         */
        scatterpolarseries?: any;
        /**
         * An object defining a series of the stackedBar type.
         */
        stackedbarpolarseries?: dxPolarChartSeriesTypesStackedbarpolarseries;
    }
    /**
     * An object that defines configuration properties for polar chart series.
     */
    export interface dxPolarChartSeriesTypesCommonPolarChartSeries {
        /**
         * Specifies the data source field that provides arguments for series points.
         */
        argumentField?: string;
        /**
         * Controls the padding and consequently the angular width of all bars in a series using relative units. Ignored if the barWidth property is set.
         */
        barPadding?: number;
        /**
         * Specifies a fixed angular width for all bars in a series, measured in degrees. Takes precedence over the barPadding property.
         */
        barWidth?: number;
        /**
         * An object defining the series border configuration properties.
         */
        border?: { color?: string, dashStyle?: 'dash' | 'dot' | 'longDash' | 'solid', visible?: boolean, width?: number };
        /**
         * Specifies whether or not to close the chart by joining the end point with the first point.
         */
        closed?: boolean;
        /**
         * Specifies a series color.
         */
        color?: string;
        /**
         * Specifies the dash style of the series' line.
         */
        dashStyle?: 'dash' | 'dot' | 'longDash' | 'solid';
        /**
         * Specifies the series elements to highlight when a series is hovered over.
         */
        hoverMode?: 'allArgumentPoints' | 'allSeriesPoints' | 'excludePoints' | 'includePoints' | 'nearestPoint' | 'none' | 'onlyPoint';
        /**
         * An object defining configuration properties for a hovered series.
         */
        hoverStyle?: { border?: { color?: string, dashStyle?: 'dash' | 'dot' | 'longDash' | 'solid', visible?: boolean, width?: number }, color?: string, dashStyle?: 'dash' | 'dot' | 'longDash' | 'solid', hatching?: { direction?: 'left' | 'none' | 'right', opacity?: number, step?: number, width?: number }, width?: number };
        /**
         * Specifies whether the series should ignore null data points.
         */
        ignoreEmptyPoints?: boolean;
        /**
         * An object defining the label configuration properties.
         */
        label?: dxPolarChartSeriesTypesCommonPolarChartSeriesLabel;
        /**
         * Specifies how many points are acceptable to be in a series to display all labels for these points. Otherwise, the labels will not be displayed.
         */
        maxLabelCount?: number;
        /**
         * Specifies the minimal length of a displayed bar in pixels.
         */
        minBarSize?: number;
        /**
         * Specifies opacity for a series.
         */
        opacity?: number;
        /**
         * An object defining configuration properties for points in line and area series.
         */
        point?: dxPolarChartSeriesTypesCommonPolarChartSeriesPoint;
        /**
         * Specifies the series elements to highlight when the series is selected.
         */
        selectionMode?: 'allArgumentPoints' | 'allSeriesPoints' | 'excludePoints' | 'includePoints' | 'none' | 'onlyPoint';
        /**
         * An object defining configuration properties for a selected series.
         */
        selectionStyle?: { border?: { color?: string, dashStyle?: 'dash' | 'dot' | 'longDash' | 'solid', visible?: boolean, width?: number }, color?: string, dashStyle?: 'dash' | 'dot' | 'longDash' | 'solid', hatching?: { direction?: 'left' | 'none' | 'right', opacity?: number, step?: number, width?: number }, width?: number };
        /**
         * Specifies whether or not to show the series in the chart's legend.
         */
        showInLegend?: boolean;
        /**
         * Specifies the name of the stack where the values of the 'stackedBar' series must be located.
         */
        stack?: string;
        /**
         * Specifies the name of the data source field that provides data about a point.
         */
        tagField?: string;
        /**
         * Configures error bars.
         */
        valueErrorBar?: { color?: string, displayMode?: 'auto' | 'high' | 'low' | 'none', edgeLength?: number, highValueField?: string, lineWidth?: number, lowValueField?: string, opacity?: number, type?: 'fixed' | 'percent' | 'stdDeviation' | 'stdError' | 'variance', value?: number };
        /**
         * Specifies the data source field that provides values for series points.
         */
        valueField?: string;
        /**
         * Specifies the visibility of a series.
         */
        visible?: boolean;
        /**
         * Specifies a line width.
         */
        width?: number;
    }
    /**
     * An object defining the label configuration properties.
     */
    export interface dxPolarChartSeriesTypesCommonPolarChartSeriesLabel {
        /**
         * Formats the point argument before it is displayed in the point label. To format the point value, use the format property.
         */
        argumentFormat?: DevExpress.ui.format;
        /**
         * Colors the point labels' background. The default color is inherited from the points.
         */
        backgroundColor?: string;
        /**
         * Specifies border properties for point labels.
         */
        border?: { color?: string, dashStyle?: 'dash' | 'dot' | 'longDash' | 'solid', visible?: boolean, width?: number };
        /**
         * Specifies connector properties for series point labels.
         */
        connector?: { color?: string, visible?: boolean, width?: number };
        /**
         * Specifies a callback function that returns the text to be displayed by point labels.
         */
        customizeText?: ((pointInfo: any) => string);
        /**
         * Specifies font properties for the text displayed in point labels.
         */
        font?: Font;
        /**
         * Formats a value before it is displayed in a point label.
         */
        format?: DevExpress.ui.format;
        /**
         * Specifies a label position in bar-like series.
         */
        position?: 'inside' | 'outside';
        /**
         * Specifies the angle used to rotate point labels from their initial position.
         */
        rotationAngle?: number;
        /**
         * Specifies whether or not to show a label when the point has a zero value.
         */
        showForZeroValues?: boolean;
        /**
         * Specifies the visibility of point labels.
         */
        visible?: boolean;
    }
    /**
     * An object defining configuration properties for points in line and area series.
     */
    export interface dxPolarChartSeriesTypesCommonPolarChartSeriesPoint {
        /**
         * Specifies border properties for points in the line and area series.
         */
        border?: { color?: string, visible?: boolean, width?: number };
        /**
         * Specifies the points color.
         */
        color?: string;
        /**
         * Specifies what series points to highlight when a point is hovered over.
         */
        hoverMode?: 'allArgumentPoints' | 'allSeriesPoints' | 'none' | 'onlyPoint';
        /**
         * An object defining configuration properties for a hovered point.
         */
        hoverStyle?: { border?: { color?: string, visible?: boolean, width?: number }, color?: string, size?: number };
        /**
         * An object specifying the parameters of an image that is used as a point marker.
         */
        image?: string | { height?: number, url?: string, width?: number };
        /**
         * Specifies what series points to highlight when a point is selected.
         */
        selectionMode?: 'allArgumentPoints' | 'allSeriesPoints' | 'none' | 'onlyPoint';
        /**
         * An object defining configuration properties for a selected point.
         */
        selectionStyle?: { border?: { color?: string, visible?: boolean, width?: number }, color?: string, size?: number };
        /**
         * Specifies the point diameter in pixels for those series that represent data points as symbols (not as bars for instance).
         */
        size?: number;
        /**
         * Specifies a symbol for presenting points of the line and area series.
         */
        symbol?: 'circle' | 'cross' | 'polygon' | 'square' | 'triangle';
        /**
         * Specifies the points visibility for a line and area series.
         */
        visible?: boolean;
    }
    /**
     * An object defining a series of the area type.
     */
    export interface dxPolarChartSeriesTypesAreapolarseries extends dxPolarChartSeriesTypesCommonPolarChartSeries {
        /**
         * Specifies series elements to be highlighted when a user points to the series.
         */
        hoverMode?: 'nearestPoint' | 'includePoints' | 'excludePoints' | 'none';
        /**
         * An object defining configuration properties for points in line and area series.
         */
        point?: dxPolarChartSeriesTypesAreapolarseriesPoint;
        /**
         * Specifies series elements to be highlighted when a user selects the series.
         */
        selectionMode?: 'includePoints' | 'excludePoints' | 'none';
    }
    /**
     * An object defining configuration properties for points in line and area series.
     */
    export interface dxPolarChartSeriesTypesAreapolarseriesPoint extends dxPolarChartSeriesTypesCommonPolarChartSeriesPoint {
        /**
         * Specifies the points visibility for a line and area series.
         */
        visible?: boolean;
    }
    /**
     * An object defining a series of the bar type.
     */
    export interface dxPolarChartSeriesTypesBarpolarseries extends dxPolarChartSeriesTypesCommonPolarChartSeries {
        /**
         * Specifies series elements to be highlighted when a user points to the series.
         */
        hoverMode?: 'onlyPoint' | 'allSeriesPoints' | 'allArgumentPoints' | 'none';
        /**
         * Specifies series elements to be highlighted when a user selects the series.
         */
        selectionMode?: 'onlyPoint' | 'allSeriesPoints' | 'allArgumentPoints' | 'none';
    }
    /**
     * An object defining a series of the line type.
     */
    export interface dxPolarChartSeriesTypesLinepolarseries extends dxPolarChartSeriesTypesCommonPolarChartSeries {
        /**
         * Specifies series elements to be highlighted when a user points to the series.
         */
        hoverMode?: 'nearestPoint' | 'includePoints' | 'excludePoints' | 'none';
        /**
         * Specifies series elements to be highlighted when a user selects the series.
         */
        selectionMode?: 'includePoints' | 'excludePoints' | 'none';
    }
    /**
     * An object defining a series of the stackedBar type.
     */
    export interface dxPolarChartSeriesTypesStackedbarpolarseries extends dxPolarChartSeriesTypesCommonPolarChartSeries {
        /**
         * Specifies series elements to be highlighted when a user points to the series.
         */
        hoverMode?: 'onlyPoint' | 'allSeriesPoints' | 'allArgumentPoints' | 'none';
        /**
         * An object defining the label configuration properties.
         */
        label?: dxPolarChartSeriesTypesStackedbarpolarseriesLabel;
        /**
         * Specifies series elements to be highlighted when a user selects the series.
         */
        selectionMode?: 'onlyPoint' | 'allSeriesPoints' | 'allArgumentPoints' | 'none';
    }
    /**
     * An object defining the label configuration properties.
     */
    export interface dxPolarChartSeriesTypesStackedbarpolarseriesLabel extends dxPolarChartSeriesTypesCommonPolarChartSeriesLabel {
        /**
         * Specifies a label position in bar-like series.
         */
        position?: 'inside' | 'outside';
    }
    /**
     * 
     */
    export interface dxRangeSelectorOptions extends BaseWidgetOptions<dxRangeSelector> {
        /**
         * Specifies the properties for the range selector's background.
         */
        background?: { color?: string, image?: { location?: 'center' | 'centerBottom' | 'centerTop' | 'full' | 'leftBottom' | 'leftCenter' | 'leftTop' | 'rightBottom' | 'rightCenter' | 'rightTop', url?: string }, visible?: boolean };
        /**
         * Specifies the RangeSelector's behavior properties.
         */
        behavior?: { allowSlidersSwap?: boolean, animationEnabled?: boolean, callValueChanged?: 'onMoving' | 'onMovingComplete', manualRangeSelectionEnabled?: boolean, moveSelectedRangeByClick?: boolean, snapToTicks?: boolean };
        /**
         * Specifies the properties required to display a chart as the range selector's background.
         */
        chart?: { barGroupPadding?: number, barGroupWidth?: number, bottomIndent?: number, commonSeriesSettings?: dxChartCommonSeriesSettings, dataPrepareSettings?: { checkTypeForAllData?: boolean, convertToAxisDataType?: boolean, sortingMethod?: boolean | ((a: { arg?: Date | number | string, val?: Date | number | string }, b: { arg?: Date | number | string, val?: Date | number | string }) => number) }, maxBubbleSize?: number, minBubbleSize?: number, negativesAsZeroes?: boolean, palette?: Array<string> | 'Bright' | 'Harmony Light' | 'Ocean' | 'Pastel' | 'Soft' | 'Soft Pastel' | 'Vintage' | 'Violet' | 'Carmine' | 'Dark Moon' | 'Dark Violet' | 'Green Mist' | 'Soft Blue' | 'Material' | 'Office', paletteExtensionMode?: 'alternate' | 'blend' | 'extrapolate', series?: ChartSeries | Array<ChartSeries>, seriesTemplate?: { customizeSeries?: ((seriesName: any) => ChartSeries), nameField?: string }, topIndent?: number, valueAxis?: { inverted?: boolean, logarithmBase?: number, max?: number, min?: number, type?: 'continuous' | 'logarithmic', valueType?: 'datetime' | 'numeric' | 'string' } };
        /**
         * Specifies the color of the parent page element.
         */
        containerBackgroundColor?: string;
        /**
         * Specifies a data source for the scale values and for the chart at the background.
         */
        dataSource?: Array<any> | DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string;
        /**
         * Specifies the data source field that provides data for the scale.
         */
        dataSourceField?: string;
        /**
         * Range selector's indent properties.
         */
        indent?: { left?: number, right?: number };
        /**
         * A function that is executed after the UI component's value is changed.
         */
        onValueChanged?: ((e: { component?: dxRangeSelector, element?: DevExpress.core.dxElement, model?: any, value?: Array<number | string | Date>, previousValue?: Array<number | string | Date>, event?: DevExpress.events.event }) => any);
        /**
         * Specifies properties of the range selector's scale.
         */
        scale?: { aggregateByCategory?: boolean, aggregationGroupWidth?: number, aggregationInterval?: number | any | 'day' | 'hour' | 'millisecond' | 'minute' | 'month' | 'quarter' | 'second' | 'week' | 'year', allowDecimals?: boolean, breakStyle?: { color?: string, line?: 'straight' | 'waved', width?: number }, breaks?: Array<ScaleBreak>, categories?: Array<number | string | Date>, endOnTick?: boolean, endValue?: number | Date | string, holidays?: Array<Date | string> | Array<number>, label?: { customizeText?: ((scaleValue: { value?: Date | number | string, valueText?: string }) => string), font?: Font, format?: DevExpress.ui.format, overlappingBehavior?: 'hide' | 'none', topIndent?: number, visible?: boolean }, linearThreshold?: number, logarithmBase?: number, marker?: { label?: { customizeText?: ((markerValue: { value?: Date | number, valueText?: string }) => string), format?: DevExpress.ui.format }, separatorHeight?: number, textLeftIndent?: number, textTopIndent?: number, topIndent?: number, visible?: boolean }, maxRange?: number | any | 'day' | 'hour' | 'millisecond' | 'minute' | 'month' | 'quarter' | 'second' | 'week' | 'year', minRange?: number | any | 'day' | 'hour' | 'millisecond' | 'minute' | 'month' | 'quarter' | 'second' | 'week' | 'year', minorTick?: { color?: string, opacity?: number, visible?: boolean, width?: number }, minorTickCount?: number, minorTickInterval?: number | any | 'day' | 'hour' | 'millisecond' | 'minute' | 'month' | 'quarter' | 'second' | 'week' | 'year', placeholderHeight?: number, showCustomBoundaryTicks?: boolean, singleWorkdays?: Array<Date | string> | Array<number>, startValue?: number | Date | string, tick?: { color?: string, opacity?: number, width?: number }, tickInterval?: number | any | 'day' | 'hour' | 'millisecond' | 'minute' | 'month' | 'quarter' | 'second' | 'week' | 'year', type?: 'continuous' | 'discrete' | 'logarithmic' | 'semidiscrete', valueType?: 'datetime' | 'numeric' | 'string', workWeek?: Array<number>, workdaysOnly?: boolean };
        /**
         * Specifies the color of the selected range.
         */
        selectedRangeColor?: string;
        /**
         * Specifies how the selected range should behave when data is updated. Applies only when the RangeSelector is bound to a data source.
         */
        selectedRangeUpdateMode?: 'auto' | 'keep' | 'reset' | 'shift';
        /**
         * Specifies range selector shutter properties.
         */
        shutter?: { color?: string, opacity?: number };
        /**
         * Specifies the appearance of the range selector's slider handles.
         */
        sliderHandle?: { color?: string, opacity?: number, width?: number };
        /**
         * Defines the properties of the range selector slider markers.
         */
        sliderMarker?: { color?: string, customizeText?: ((scaleValue: { value?: Date | number | string, valueText?: string }) => string), font?: Font, format?: DevExpress.ui.format, invalidRangeColor?: string, paddingLeftRight?: number, paddingTopBottom?: number, placeholderHeight?: number, visible?: boolean };
        /**
         * The selected range (initial or current). Equals the entire scale when not set.
         */
        value?: Array<number | string | Date> | VizRange;
    }
    /**
     * The RangeSelector is a UI component that allows a user to select a range of values on a scale.
     */
    export class dxRangeSelector extends BaseWidget {
        constructor(element: Element, options?: dxRangeSelectorOptions)
        constructor(element: JQuery, options?: dxRangeSelectorOptions)
        /**
         * Gets the DataSource instance.
         */
        getDataSource(): DevExpress.data.DataSource;
        /**
         * Gets the currently selected range.
         */
        getValue(): Array<number | string | Date>;
        /**
         * Redraws the UI component.
         */
        render(): void;
        /**
         * Redraws the UI component.
         */
        render(skipChartAnimation: boolean): void;
        /**
         * Sets the selected range.
         */
        setValue(value: Array<number | string | Date> | VizRange): void;
    }
    /**
     * 
     */
    export interface dxSankeyOptions extends BaseWidgetOptions<dxSankey> {
        /**
         * Specifies adaptive layout properties.
         */
        adaptiveLayout?: { height?: number, keepLabels?: boolean, width?: number };
        /**
         * Aligns node columns vertically.
         */
        alignment?: 'bottom' | 'center' | 'top' | Array<'bottom' | 'center' | 'top'>;
        /**
         * Binds the UI component to data.
         */
        dataSource?: Array<any> | DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string;
        /**
         * Specifies whether nodes and links change their style when they are hovered over or pressed.
         */
        hoverEnabled?: boolean;
        /**
         * Configures sankey nodes' labels.
         */
        label?: { border?: { color?: string, visible?: boolean, width?: number }, customizeText?: ((itemInfo: dxSankeyNode) => string), font?: Font, horizontalOffset?: number, overlappingBehavior?: 'ellipsis' | 'hide' | 'none', shadow?: { blur?: number, color?: string, offsetX?: number, offsetY?: number, opacity?: number }, useNodeColors?: boolean, verticalOffset?: number, visible?: boolean };
        /**
         * Configures sankey links' appearance.
         */
        link?: { border?: { color?: string, visible?: boolean, width?: number }, color?: string, colorMode?: 'none' | 'source' | 'target' | 'gradient', hoverStyle?: { border?: { color?: string, visible?: boolean, width?: number }, color?: string, hatching?: { direction?: 'left' | 'none' | 'right', opacity?: number, step?: number, width?: number }, opacity?: number }, opacity?: number };
        /**
         * Configures sankey nodes' appearance.
         */
        node?: { border?: { color?: string, visible?: boolean, width?: number }, color?: string, hoverStyle?: { border?: { color?: string, visible?: boolean, width?: number }, color?: string, hatching?: { direction?: 'left' | 'none' | 'right', opacity?: number, step?: number, width?: number }, opacity?: number }, opacity?: number, padding?: number, width?: number };
        /**
         * A function that is executed when a sankey link is clicked or tapped.
         */
        onLinkClick?: ((e: { component?: dxSankey, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, target?: dxSankeyLink }) => any) | string;
        /**
         * A function that is executed after the pointer enters or leaves a sankey link.
         */
        onLinkHoverChanged?: ((e: { component?: dxSankey, element?: DevExpress.core.dxElement, model?: any, target?: dxSankeyLink }) => any);
        /**
         * A function that is executed when a sankey node is clicked or tapped.
         */
        onNodeClick?: ((e: { component?: dxSankey, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, target?: dxSankeyNode }) => any) | string;
        /**
         * A function that is executed after the pointer enters or leaves a sankey node.
         */
        onNodeHoverChanged?: ((e: { component?: dxSankey, element?: DevExpress.core.dxElement, model?: any, target?: dxSankeyNode }) => any);
        /**
         * Sets the palette to be used to colorize sankey nodes.
         */
        palette?: Array<string> | 'Bright' | 'Harmony Light' | 'Ocean' | 'Pastel' | 'Soft' | 'Soft Pastel' | 'Vintage' | 'Violet' | 'Carmine' | 'Dark Moon' | 'Dark Violet' | 'Green Mist' | 'Soft Blue' | 'Material' | 'Office';
        /**
         * Specifies how to extend the palette when it contains less colors than the number of sankey nodes.
         */
        paletteExtensionMode?: 'alternate' | 'blend' | 'extrapolate';
        /**
         * Specifies nodes' sorting order in their columns.
         */
        sortData?: any;
        /**
         * Specifies which data source field provides links' source nodes.
         */
        sourceField?: string;
        /**
         * Specifies which data source field provides links' target nodes.
         */
        targetField?: string;
        /**
         * Configures tooltips - small pop-up rectangles that display information about a data-visualizing UI component element being pressed or hovered over with the mouse pointer.
         */
        tooltip?: dxSankeyTooltip;
        /**
         * Specifies which data source field provides links' weights.
         */
        weightField?: string;
    }
    /**
     * Configures tooltips - small pop-up rectangles that display information about a data-visualizing UI component element being pressed or hovered over with the mouse pointer.
     */
    export interface dxSankeyTooltip extends BaseWidgetTooltip {
        /**
         * Customizes link tooltips' appearance.
         */
        customizeLinkTooltip?: ((info: { source?: string, target?: string, weight?: number }) => any);
        /**
         * Customizes node tooltips' appearance.
         */
        customizeNodeTooltip?: ((info: { title?: string, label?: string, weightIn?: number, weightOut?: number }) => any);
        /**
         * Enables tooltips.
         */
        enabled?: boolean;
        /**
         * Specifies a custom template for a link's tooltip.
         */
        linkTooltipTemplate?: DevExpress.core.template | ((info: { source?: string, target?: string, weight?: number }, element: DevExpress.core.dxElement) => string | Element | JQuery);
        /**
         * Specifies a custom template for a node's tooltip.
         */
        nodeTooltipTemplate?: DevExpress.core.template | ((info: { label?: string, weightIn?: number, weightOut?: number }, element: DevExpress.core.dxElement) => string | Element | JQuery);
    }
    /**
     * The Sankey is a UI component that visualizes the flow magnitude between value sets. The values being connected are called nodes; the connections - links. The higher the flow magnitude, the wider the link is.
     */
    export class dxSankey extends BaseWidget {
        constructor(element: Element, options?: dxSankeyOptions)
        constructor(element: JQuery, options?: dxSankeyOptions)
        /**
         * Gets all sankey links.
         */
        getAllLinks(): Array<dxSankeyLink>;
        /**
         * Gets all sankey nodes.
         */
        getAllNodes(): Array<dxSankeyNode>;
        /**
         * Gets the DataSource instance.
         */
        getDataSource(): DevExpress.data.DataSource;
        /**
         * Hides all UI component tooltips.
         */
        hideTooltip(): void;
    }
    /**
     * 
     */
    export interface dxSankeyConnectionInfoObject {
        /**
         * The title of the link's source node.
         */
        source?: string;
        /**
         * The title of the link's target node.
         */
        target?: string;
        /**
         * The link's weight.
         */
        weight?: number;
    }
    /**
     * A sankey link's structure.
     */
    export class dxSankeyLink {
        /**
         * An object that describes the connection.
         */
        connection?: dxSankeyConnectionInfoObject;
        /**
         * Hides the sankey link's tooltip.
         */
        hideTooltip(): void;
        /**
         * Changes the sankey link's hover state.
         */
        hover(state: boolean): void;
        /**
         * Indicates whether the sankey link is in the hover state.
         */
        isHovered(): boolean;
        /**
         * Shows the sankey link's tooltip.
         */
        showTooltip(): void;
    }
    /**
     * A sankey node's structure.
     */
    export class dxSankeyNode {
        /**
         * The node's label.
         */
        label?: string;
        /**
         * The node's incoming links.
         */
        linksIn?: Array<any>;
        /**
         * The node's outgoing links.
         */
        linksOut?: Array<any>;
        /**
         * The node's label.
         * @deprecated Use label instead.
         */
        title?: string;
        /**
         * Hides the sankey node's tooltip.
         */
        hideTooltip(): void;
        /**
         * Changes the sankey node's hover state.
         */
        hover(state: boolean): void;
        /**
         * Indicates whether the sankey node is in the hover state.
         */
        isHovered(): boolean;
        /**
         * Shows the sankey node's tooltip.
         */
        showTooltip(): void;
    }
    /**
     * 
     */
    export interface dxSparklineOptions extends BaseSparklineOptions<dxSparkline> {
        /**
         * Specifies the data source field that provides arguments for a sparkline.
         */
        argumentField?: string;
        /**
         * Sets a color for the bars indicating negative values. Available for a sparkline of the bar type only.
         */
        barNegativeColor?: string;
        /**
         * Sets a color for the bars indicating positive values. Available for a sparkline of the bar type only.
         */
        barPositiveColor?: string;
        /**
         * Binds the UI component to data.
         */
        dataSource?: Array<any> | DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string;
        /**
         * Sets a color for the boundary of both the first and last points on a sparkline.
         */
        firstLastColor?: string;
        /**
         * Specifies whether the sparkline should ignore null data points.
         */
        ignoreEmptyPoints?: boolean;
        /**
         * Sets a color for a line on a sparkline. Available for the sparklines of the line- and area-like types.
         */
        lineColor?: string;
        /**
         * Specifies a width for a line on a sparkline. Available for the sparklines of the line- and area-like types.
         */
        lineWidth?: number;
        /**
         * Sets a color for the bars indicating the values that are less than the winloss threshold. Available for a sparkline of the winloss type only.
         */
        lossColor?: string;
        /**
         * Sets a color for the boundary of the maximum point on a sparkline.
         */
        maxColor?: string;
        /**
         * Specifies the maximum value of the sparkline's value axis.
         */
        maxValue?: number;
        /**
         * Sets a color for the boundary of the minimum point on a sparkline.
         */
        minColor?: string;
        /**
         * Specifies the minimum value of the sparkline value axis.
         */
        minValue?: number;
        /**
         * Sets a color for points on a sparkline. Available for the sparklines of the line- and area-like types.
         */
        pointColor?: string;
        /**
         * Specifies the diameter of sparkline points in pixels. Available for the sparklines of line- and area-like types.
         */
        pointSize?: number;
        /**
         * Specifies a symbol to use as a point marker on a sparkline. Available for the sparklines of the line- and area-like types.
         */
        pointSymbol?: 'circle' | 'cross' | 'polygon' | 'square' | 'triangle';
        /**
         * Specifies whether or not to indicate both the first and last values on a sparkline.
         */
        showFirstLast?: boolean;
        /**
         * Specifies whether or not to indicate both the minimum and maximum values on a sparkline.
         */
        showMinMax?: boolean;
        /**
         * Determines the type of a sparkline.
         */
        type?: 'area' | 'bar' | 'line' | 'spline' | 'splinearea' | 'steparea' | 'stepline' | 'winloss';
        /**
         * Specifies the data source field that provides values for a sparkline.
         */
        valueField?: string;
        /**
         * Sets a color for the bars indicating the values greater than a winloss threshold. Available for a sparkline of the winloss type only.
         */
        winColor?: string;
        /**
         * Specifies a value that serves as a threshold for the sparkline of the winloss type.
         */
        winlossThreshold?: number;
    }
    /**
     * The Sparkline UI component is a compact chart that contains only one series. Owing to their size, sparklines occupy very little space and can be easily collected in a table or embedded straight in text.
     */
    export class dxSparkline extends BaseSparkline {
        constructor(element: Element, options?: dxSparklineOptions)
        constructor(element: JQuery, options?: dxSparklineOptions)
        /**
         * Gets the DataSource instance.
         */
        getDataSource(): DevExpress.data.DataSource;
    }
    /**
     * 
     */
    export interface dxTreeMapOptions extends BaseWidgetOptions<dxTreeMap> {
        /**
         * Specifies the name of the data source field that provides nested items for a group. Applies to hierarchical data sources only.
         */
        childrenField?: string;
        /**
         * Specifies the name of the data source field that provides colors for tiles.
         */
        colorField?: string;
        /**
         * Manages the color settings.
         */
        colorizer?: { colorCodeField?: string, colorizeGroups?: boolean, palette?: Array<string> | 'Bright' | 'Harmony Light' | 'Ocean' | 'Pastel' | 'Soft' | 'Soft Pastel' | 'Vintage' | 'Violet' | 'Carmine' | 'Dark Moon' | 'Dark Violet' | 'Green Mist' | 'Soft Blue' | 'Material' | 'Office', paletteExtensionMode?: 'alternate' | 'blend' | 'extrapolate', range?: Array<number>, type?: 'discrete' | 'gradient' | 'none' | 'range' };
        /**
         * Binds the UI component to data.
         */
        dataSource?: Array<any> | DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string;
        /**
         * Configures groups.
         */
        group?: { border?: { color?: string, width?: number }, color?: string, headerHeight?: number, hoverEnabled?: boolean, hoverStyle?: { border?: { color?: string, width?: number }, color?: string }, label?: { font?: Font, textOverflow?: 'ellipsis' | 'hide' | 'none', visible?: boolean }, padding?: number, selectionStyle?: { border?: { color?: string, width?: number }, color?: string } };
        /**
         * Specifies whether tiles and groups change their style when a user pauses on them.
         */
        hoverEnabled?: boolean;
        /**
         * Specifies the name of the data source field that provides IDs for items. Applies to plain data sources only.
         */
        idField?: string;
        /**
         * Specifies whether the user will interact with a single tile or its group.
         */
        interactWithGroup?: boolean;
        /**
         * Specifies the name of the data source field that provides texts for tile and group labels.
         */
        labelField?: string;
        /**
         * Specifies the layout algorithm.
         */
        layoutAlgorithm?: 'sliceanddice' | 'squarified' | 'strip' | ((e: { rect?: Array<number>, sum?: number, items?: Array<any> }) => any);
        /**
         * Specifies the direction in which the items will be laid out.
         */
        layoutDirection?: 'leftBottomRightTop' | 'leftTopRightBottom' | 'rightBottomLeftTop' | 'rightTopLeftBottom';
        /**
         * Specifies how many hierarchical levels must be visualized.
         */
        maxDepth?: number;
        /**
         * A function that is executed when a node is clicked or tapped.
         */
        onClick?: ((e: { component?: dxTreeMap, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, node?: dxTreeMapNode }) => any) | string;
        /**
         * A function that is executed when a user drills up or down.
         */
        onDrill?: ((e: { component?: dxTreeMap, element?: DevExpress.core.dxElement, model?: any, node?: dxTreeMapNode }) => any);
        /**
         * A function that is executed after the pointer enters or leaves a node.
         */
        onHoverChanged?: ((e: { component?: dxTreeMap, element?: DevExpress.core.dxElement, model?: any, node?: dxTreeMapNode }) => any);
        /**
         * A function that is executed only once, after the nodes are initialized.
         */
        onNodesInitialized?: ((e: { component?: dxTreeMap, element?: DevExpress.core.dxElement, model?: any, root?: dxTreeMapNode }) => any);
        /**
         * A function that is executed before the nodes are displayed and each time the collection of active nodes is changed.
         */
        onNodesRendering?: ((e: { component?: dxTreeMap, element?: DevExpress.core.dxElement, model?: any, node?: dxTreeMapNode }) => any);
        /**
         * A function that is executed when a node is selected or selection is canceled.
         */
        onSelectionChanged?: ((e: { component?: dxTreeMap, element?: DevExpress.core.dxElement, model?: any, node?: dxTreeMapNode }) => any);
        /**
         * Specifies the name of the data source field that provides parent IDs for items. Applies to plain data sources only.
         */
        parentField?: string;
        /**
         * Specifies whether a single or multiple nodes can be in the selected state simultaneously.
         */
        selectionMode?: 'multiple' | 'none' | 'single';
        /**
         * Configures tiles.
         */
        tile?: { border?: { color?: string, width?: number }, color?: string, hoverStyle?: { border?: { color?: string, width?: number }, color?: string }, label?: { font?: Font, textOverflow?: 'ellipsis' | 'hide' | 'none', visible?: boolean, wordWrap?: 'normal' | 'breakWord' | 'none' }, selectionStyle?: { border?: { color?: string, width?: number }, color?: string } };
        /**
         * Configures tooltips - small pop-up rectangles that display information about a data-visualizing UI component element being pressed or hovered over with the mouse pointer.
         */
        tooltip?: dxTreeMapTooltip;
        /**
         * Specifies the name of the data source field that provides values for tiles.
         */
        valueField?: string;
    }
    /**
     * Configures tooltips - small pop-up rectangles that display information about a data-visualizing UI component element being pressed or hovered over with the mouse pointer.
     */
    export interface dxTreeMapTooltip extends BaseWidgetTooltip {
        /**
         * Specifies a custom template for a tooltip.
         */
        contentTemplate?: DevExpress.core.template | ((info: { value?: number, valueText?: string, node?: dxTreeMapNode }, element: DevExpress.core.dxElement) => string | Element | JQuery);
        /**
         * Allows you to change tooltip appearance.
         */
        customizeTooltip?: ((info: { value?: number, valueText?: string, node?: dxTreeMapNode }) => any);
    }
    /**
     * The TreeMap is a UI component that displays hierarchical data by using nested rectangles.
     */
    export class dxTreeMap extends BaseWidget {
        constructor(element: Element, options?: dxTreeMapOptions)
        constructor(element: JQuery, options?: dxTreeMapOptions)
        /**
         * Deselects all nodes in the UI component.
         */
        clearSelection(): void;
        /**
         * Drills one level up.
         */
        drillUp(): void;
        /**
         * Gets the current node.
         */
        getCurrentNode(): dxTreeMapNode;
        /**
         * Gets the DataSource instance.
         */
        getDataSource(): DevExpress.data.DataSource;
        /**
         * Gets the root node.
         */
        getRootNode(): dxTreeMapNode;
        /**
         * Hides the tooltip.
         */
        hideTooltip(): void;
        /**
         * Resets the drill down level.
         */
        resetDrillDown(): void;
    }
    /**
     * This section describes the Node object, which represents a treemap node.
     */
    export class dxTreeMapNode {
        /**
         * The object from the data source visualized by the node.
         */
        data?: any;
        /**
         * The index of the current node in the array of all nodes on the same level.
         */
        index?: number;
        /**
         * The level that the current node occupies in the hierarchy of nodes.
         */
        level?: number;
        /**
         * Customizes the node.
         */
        customize(options: any): void;
        /**
         * Drills down into the node.
         */
        drillDown(): void;
        /**
         * Returns all nodes nested in the current node.
         */
        getAllChildren(): Array<dxTreeMapNode>;
        /**
         * Returns all descendant nodes.
         */
        getAllNodes(): Array<dxTreeMapNode>;
        /**
         * Gets a specific node from a collection of direct descendants.
         */
        getChild(index: number): dxTreeMapNode;
        /**
         * Indicates how many direct descendants the current node has.
         */
        getChildrenCount(): number;
        /**
         * Returns the parent node of the current node.
         */
        getParent(): dxTreeMapNode;
        /**
         * Indicates whether the current node is active.
         */
        isActive(): boolean;
        /**
         * Indicates whether the node is in the hover state or not.
         */
        isHovered(): boolean;
        /**
         * Indicates whether the node is visualized by a tile or a group of tiles.
         */
        isLeaf(): boolean;
        /**
         * Indicates whether the node is selected or not.
         */
        isSelected(): boolean;
        /**
         * Returns the label of the node.
         */
        label(): string;
        /**
         * Sets the label to the node.
         */
        label(label: string): void;
        /**
         * Reverts the appearance of the node to the initial state.
         */
        resetCustomization(): void;
        /**
         * Sets the selection state of a node.
         */
        select(state: boolean): void;
        /**
         * Shows the tooltip.
         */
        showTooltip(): void;
        /**
         * Gets the raw value of the node.
         */
        value(): number;
    }
    /**
     * 
     */
    export interface dxVectorMapOptions extends BaseWidgetOptions<dxVectorMap> {
        /**
         * Specifies the annotation collection.
         */
        annotations?: Array<dxVectorMapAnnotationConfig | any>;
        /**
         * Specifies the properties for the map background.
         */
        background?: { borderColor?: string, color?: string };
        /**
         * Specifies the positioning of a map in geographical coordinates.
         */
        bounds?: Array<number>;
        /**
         * Specifies the geographical coordinates of the center for a map.
         */
        center?: Array<number>;
        /**
         * Specifies settings common for all annotations in the VectorMap.
         */
        commonAnnotationSettings?: dxVectorMapCommonAnnotationConfig;
        /**
         * Configures the control bar.
         */
        controlBar?: { borderColor?: string, color?: string, enabled?: boolean, horizontalAlignment?: 'center' | 'left' | 'right', margin?: number, opacity?: number, verticalAlignment?: 'bottom' | 'top' };
        /**
         * 
         */
        customizeAnnotation?: ((annotation: dxVectorMapAnnotationConfig | any) => dxVectorMapAnnotationConfig);
        /**
         * Specifies properties for VectorMap UI component layers.
         */
        layers?: Array<{ borderColor?: string, borderWidth?: number, color?: string, colorGroupingField?: string, colorGroups?: Array<number>, customize?: ((elements: Array<MapLayerElement>) => any), dataField?: string, dataSource?: any | DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<any>, elementType?: 'bubble' | 'dot' | 'image' | 'pie', hoverEnabled?: boolean, hoveredBorderColor?: string, hoveredBorderWidth?: number, hoveredColor?: string, label?: { dataField?: string, enabled?: boolean, font?: Font }, maxSize?: number, minSize?: number, name?: string, opacity?: number, palette?: Array<string> | 'Bright' | 'Harmony Light' | 'Ocean' | 'Pastel' | 'Soft' | 'Soft Pastel' | 'Vintage' | 'Violet' | 'Carmine' | 'Dark Moon' | 'Dark Violet' | 'Green Mist' | 'Soft Blue' | 'Material' | 'Office', paletteIndex?: number, paletteSize?: number, selectedBorderColor?: string, selectedBorderWidth?: number, selectedColor?: string, selectionMode?: 'multiple' | 'none' | 'single', size?: number, sizeGroupingField?: string, sizeGroups?: Array<number>, type?: 'area' | 'line' | 'marker' }> | { borderColor?: string, borderWidth?: number, color?: string, colorGroupingField?: string, colorGroups?: Array<number>, customize?: ((elements: Array<MapLayerElement>) => any), dataField?: string, dataSource?: any | DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<any>, elementType?: 'bubble' | 'dot' | 'image' | 'pie', hoverEnabled?: boolean, hoveredBorderColor?: string, hoveredBorderWidth?: number, hoveredColor?: string, label?: { dataField?: string, enabled?: boolean, font?: Font }, maxSize?: number, minSize?: number, name?: string, opacity?: number, palette?: Array<string> | 'Bright' | 'Harmony Light' | 'Ocean' | 'Pastel' | 'Soft' | 'Soft Pastel' | 'Vintage' | 'Violet' | 'Carmine' | 'Dark Moon' | 'Dark Violet' | 'Green Mist' | 'Soft Blue' | 'Material' | 'Office', paletteIndex?: number, paletteSize?: number, selectedBorderColor?: string, selectedBorderWidth?: number, selectedColor?: string, selectionMode?: 'multiple' | 'none' | 'single', size?: number, sizeGroupingField?: string, sizeGroups?: Array<number>, type?: 'area' | 'line' | 'marker' };
        /**
         * Configures map legends.
         */
        legends?: Array<dxVectorMapLegends>;
        /**
         * Specifies a map's maximum zoom factor.
         */
        maxZoomFactor?: number;
        /**
         * A function that is executed each time the center coordinates are changed.
         */
        onCenterChanged?: ((e: { component?: dxVectorMap, element?: DevExpress.core.dxElement, model?: any, center?: Array<number> }) => any);
        /**
         * A function that is executed when any location on the map is clicked or tapped.
         */
        onClick?: ((e: { component?: dxVectorMap, element?: DevExpress.core.dxElement, model?: any, event?: DevExpress.events.event, target?: MapLayerElement }) => any) | string;
        /**
         * A function that is executed when a layer element is selected or selection is canceled.
         */
        onSelectionChanged?: ((e: { component?: dxVectorMap, element?: DevExpress.core.dxElement, model?: any, target?: MapLayerElement }) => any);
        /**
         * A function that is executed when a tooltip becomes hidden.
         */
        onTooltipHidden?: ((e: { component?: dxVectorMap, element?: DevExpress.core.dxElement, model?: any, target?: MapLayerElement | dxVectorMapAnnotationConfig }) => any);
        /**
         * A function that is executed when a tooltip appears.
         */
        onTooltipShown?: ((e: { component?: dxVectorMap, element?: DevExpress.core.dxElement, model?: any, target?: MapLayerElement | dxVectorMapAnnotationConfig }) => any);
        /**
         * A function that is executed each time the zoom factor is changed.
         */
        onZoomFactorChanged?: ((e: { component?: dxVectorMap, element?: DevExpress.core.dxElement, model?: any, zoomFactor?: number }) => any);
        /**
         * Disables the panning capability.
         */
        panningEnabled?: boolean;
        /**
         * Specifies the map projection.
         */
        projection?: 'equirectangular' | 'lambert' | 'mercator' | 'miller' | VectorMapProjectionConfig | string | any;
        /**
         * Configures tooltips.
         */
        tooltip?: dxVectorMapTooltip;
        /**
         * Specifies whether the map should respond to touch gestures.
         */
        touchEnabled?: boolean;
        /**
         * Specifies whether or not the map should respond when a user rolls the mouse wheel.
         */
        wheelEnabled?: boolean;
        /**
         * Specifies a number that is used to zoom a map initially.
         */
        zoomFactor?: number;
        /**
         * Disables the zooming capability.
         */
        zoomingEnabled?: boolean;
    }
    /**
     * Configures map legends.
     */
    export interface dxVectorMapLegends extends BaseLegend {
        /**
         * Specifies text for a hint that appears when a user hovers the mouse pointer over the text of a legend item.
         */
        customizeHint?: ((itemInfo: { start?: number, end?: number, index?: number, color?: string, size?: number }) => string);
        /**
         * Allows you to change the order and visibility of legend items.
         */
        customizeItems?: ((items: Array<VectorMapLegendItem>) => Array<VectorMapLegendItem>);
        /**
         * Specifies text for legend items.
         */
        customizeText?: ((itemInfo: { start?: number, end?: number, index?: number, color?: string, size?: number }) => string);
        /**
         * Specifies the legend items' font properties.
         */
        font?: Font;
        /**
         * Specifies the color of item markers in the legend. The specified color applied only when the legend uses 'size' source.
         */
        markerColor?: string;
        /**
         * Specifies the shape of item markers.
         */
        markerShape?: 'circle' | 'square';
        /**
         * Specifies the marker's size in a legend item in pixels.
         */
        markerSize?: number;
        /**
         * Specifies an SVG element that serves as a custom legend item marker.
         */
        markerTemplate?: DevExpress.core.template | ((legendItem: VectorMapLegendItem, element: SVGGElement) => string | SVGElement | JQuery);
        /**
         * Specifies the source of data for the legend.
         */
        source?: { grouping?: string, layer?: string };
    }
    /**
     * Configures tooltips.
     */
    export interface dxVectorMapTooltip extends BaseWidgetTooltip {
        /**
         * Specifies a custom template for a tooltip.
         */
        contentTemplate?: DevExpress.core.template | ((info: MapLayerElement, element: DevExpress.core.dxElement) => string | Element | JQuery);
        /**
         * Specifies text and appearance of a set of tooltips.
         */
        customizeTooltip?: ((info: MapLayerElement) => any);
    }
    /**
     * The VectorMap is a UI component that visualizes geographical locations. This UI component represents a geographical map that contains areas and markers. Areas embody continents and countries. Markers flag specific points on the map, for example, towns, cities or capitals.
     */
    export class dxVectorMap extends BaseWidget {
        constructor(element: Element, options?: dxVectorMapOptions)
        constructor(element: JQuery, options?: dxVectorMapOptions)
        /**
         * Gets the current map center coordinates.
         */
        center(): Array<number>;
        /**
         * Sets the map center coordinates.
         */
        center(centerCoordinates: Array<number>): void;
        /**
         * Deselects all the selected area and markers on a map at once. The areas and markers are displayed in their initial style after.
         */
        clearSelection(): void;
        /**
         * Converts client area coordinates into map coordinates.
         * @deprecated Use convertToGeo instead.
         */
        convertCoordinates(x: number, y: number): Array<number>;
        /**
         * Converts coordinates from pixels to the dataSource coordinate system.
         */
        convertToGeo(x: number, y: number): Array<number>;
        /**
         * Converts coordinates from the dataSource coordinate system to pixels.
         */
        convertToXY(longitude: number, latitude: number): Array<number>;
        /**
         * Gets a layer with a specific index.
         */
        getLayerByIndex(index: number): MapLayer;
        /**
         * Gets a layer with a specific name.
         */
        getLayerByName(name: string): MapLayer;
        /**
         * Gets all layers.
         */
        getLayers(): Array<MapLayer>;
        /**
         * Gets the current map viewport coordinates.
         */
        viewport(): Array<number>;
        /**
         * Sets the map viewport coordinates.
         */
        viewport(viewportCoordinates: Array<number>): void;
        /**
         * Gets the current zoom factor value.
         */
        zoomFactor(): number;
        /**
         * Sets the zoom factor value.
         */
        zoomFactor(zoomFactor: number): void;
    }
    /**
     * 
     */
    export interface dxVectorMapAnnotationConfig extends dxVectorMapCommonAnnotationConfig {
        /**
         * Specifies the annotation's name.
         */
        name?: string;
    }
    /**
     * 
     */
    export interface dxVectorMapCommonAnnotationConfig extends BaseWidgetAnnotationConfig {
        /**
         * Positions the annotation's center at specified geographic coordinates: [longitude, latitude].
         */
        coordinates?: Array<number>;
        /**
         * 
         */
        customizeTooltip?: ((annotation: dxVectorMapAnnotationConfig | any) => any);
        /**
         * 
         */
        template?: DevExpress.core.template | ((annotation: dxVectorMapAnnotationConfig | any, element: SVGGElement) => string | SVGElement | JQuery);
        /**
         * 
         */
        tooltipTemplate?: DevExpress.core.template | ((annotation: dxVectorMapAnnotationConfig | any, element: DevExpress.core.dxElement) => string | Element | JQuery);
    }
    /**
     * An object that defines a gauge indicator of the circle type.
     */
    export type linearCircle = CommonIndicator;
    /**
     * An object that defines a gauge indicator of the rangeBar type.
     */
    export type linearRangeBar = CommonIndicator;
    /**
     * An object defining a gauge indicator of the rectangle type.
     */
    export type linearRectangle = CommonIndicator;
    /**
     * An object defining a gauge indicator of the rhombus type.
     */
    export type linearRhombus = CommonIndicator;
    /**
     * An object that defines a gauge indicator of the textCloud type.
     */
    export type linearTextCloud = CommonIndicator;
    /**
     * An object that defines a gauge indicator of the triangleMarker type.
     */
    export type linearTriangleMarker = CommonIndicator;
    /**
     * This section describes the Series object, which represents a series.
     */
    export class pieChartSeriesObject extends baseSeriesObject {
    }
    /**
     * This section describes the Point object, which represents a series point.
     */
    export class piePointObject extends basePointObject {
        /**
         * Gets the percentage value of the specific point.
         */
        percent?: string | number | Date;
        /**
         * Hides a specific point.
         */
        hide(): void;
        /**
         * Provides information about the visibility state of a point.
         */
        isVisible(): boolean;
        /**
         * Makes a specific point visible.
         */
        show(): void;
    }
    /**
     * This section describes the Series object, which represents a series.
     */
    export class polarChartSeriesObject extends baseSeriesObject {
    }
    /**
     * This section describes the Point object, which represents a series point.
     */
    export class polarPointObject extends basePointObject {
    }
}
declare module DevExpress.viz.map {
    /**
     * Creates a new projection.
     */
    export function projection(data: VectorMapProjectionConfig): any;
}
declare module DevExpress.viz.map.projection {
    /**
     * Adds a new projection to the internal projection storage.
     */
    export function add(name: string, projection: VectorMapProjectionConfig | any): void;
    /**
     * Gets a predefined or custom projection from the projection storage.
     */
    export function get(name: 'equirectangular' | 'lambert' | 'mercator' | 'miller' | string): any;
}

declare module DevExpress {
    /** @deprecated Use DevExpress.events.dxEvent instead */
    export type dxEvent = DevExpress.events.dxEvent
    /** @deprecated Use DevExpress.events.event instead */
    export type event = DevExpress.events.event
}

declare module DevExpress.viz {
    /** @deprecated Use DevExpress.viz.ChartSeries instead */
    export type dxChartSeries =  DevExpress.viz.ChartSeries;
    /** @deprecated Use DevExpress.viz.PieChartSeries instead */
    export type dxPieChartSeries =  DevExpress.viz.PieChartSeries;
    /** @deprecated Use DevExpress.viz.PolarChartSeries instead */
    export type dxPolarChartSeries =  DevExpress.viz.PolarChartSeries;

    /** @deprecated Use DevExpress.viz instead */
    export module charts {
        export type dxChartOptions = DevExpress.viz.dxChartOptions;
        export type dxChartArgumentAxis = DevExpress.viz.dxChartArgumentAxis;
        export type dxChartArgumentAxisConstantLines  = DevExpress.viz.dxChartArgumentAxisConstantLines;
        export type dxChartArgumentAxisConstantLinesLabel = DevExpress.viz.dxChartArgumentAxisConstantLinesLabel;
        export type dxChartArgumentAxisConstantLineStyle = DevExpress.viz.dxChartArgumentAxisConstantLineStyle;
        export type dxChartArgumentAxisConstantLineStyleLabel = DevExpress.viz.dxChartArgumentAxisConstantLineStyleLabel;
        export type dxChartArgumentAxisLabel = DevExpress.viz.dxChartArgumentAxisLabel;
        export type dxChartArgumentAxisStrips = DevExpress.viz.dxChartArgumentAxisStrips;
        export type dxChartArgumentAxisStripsLabel = DevExpress.viz.dxChartArgumentAxisStripsLabel;
        export type dxChartArgumentAxisTitle = DevExpress.viz.dxChartArgumentAxisTitle;
        export type dxChartCommonAxisSettings = DevExpress.viz.dxChartCommonAxisSettings;
        export type dxChartCommonAxisSettingsConstantLineStyle = DevExpress.viz.dxChartCommonAxisSettingsConstantLineStyle;
        export type dxChartCommonAxisSettingsConstantLineStyleLabel = DevExpress.viz.dxChartCommonAxisSettingsConstantLineStyleLabel;
        export type dxChartCommonAxisSettingsLabel = DevExpress.viz.dxChartCommonAxisSettingsLabel;
        export type dxChartCommonAxisSettingsStripStyle = DevExpress.viz.dxChartCommonAxisSettingsStripStyle;
        export type dxChartCommonAxisSettingsStripStyleLabel = DevExpress.viz.dxChartCommonAxisSettingsStripStyleLabel;
        export type dxChartCommonAxisSettingsTitle = DevExpress.viz.dxChartCommonAxisSettingsTitle;
        export type dxChartCommonPaneSettings = DevExpress.viz.dxChartCommonPaneSettings;
        export type dxChartCommonSeriesSettings = DevExpress.viz.dxChartCommonSeriesSettings;
        export type dxChartLegend = DevExpress.viz.dxChartLegend;
        export type dxChartPanes = DevExpress.viz.dxChartPanes;
        export type dxChartSeries = DevExpress.viz.dxChartSeries;
        export type dxChartTooltip = DevExpress.viz.dxChartTooltip;
        export type dxChartValueAxis = DevExpress.viz.dxChartValueAxis;
        export type dxChartValueAxisConstantLines = DevExpress.viz.dxChartValueAxisConstantLines;
        export type dxChartValueAxisConstantLinesLabel = DevExpress.viz.dxChartValueAxisConstantLinesLabel;
        export type dxChartValueAxisConstantLineStyle = DevExpress.viz.dxChartValueAxisConstantLineStyle;
        export type dxChartValueAxisConstantLineStyleLabel = DevExpress.viz.dxChartValueAxisConstantLineStyleLabel;
        export type dxChartValueAxisLabel = DevExpress.viz.dxChartValueAxisLabel;
        export type dxChartValueAxisStrips = DevExpress.viz.dxChartValueAxisStrips;
        export type dxChartValueAxisStripsLabel = DevExpress.viz.dxChartValueAxisStripsLabel;
        export type dxChartValueAxisTitle = DevExpress.viz.dxChartValueAxisTitle;

        export type dxPieChartOptions = DevExpress.viz.dxPieChartOptions;
        export type dxPieChartAdaptiveLayout = DevExpress.viz.dxPieChartAdaptiveLayout;
        export type dxPieChartLegend = DevExpress.viz.dxPieChartLegend;
        export type dxPieChartSeries = DevExpress.viz.dxPieChartSeries;

        export type dxPolarChartOptions = DevExpress.viz.dxPolarChartOptions;
        export type dxPolarChartAdaptiveLayout = DevExpress.viz.dxPolarChartAdaptiveLayout;
        export type dxPolarChartArgumentAxis = DevExpress.viz.dxPolarChartArgumentAxis;
        export type dxPolarChartArgumentAxisConstantLines = DevExpress.viz.dxPolarChartArgumentAxisConstantLines;
        export type dxPolarChartArgumentAxisConstantLinesLabel = DevExpress.viz.dxPolarChartArgumentAxisConstantLinesLabel;
        export type dxPolarChartArgumentAxisLabel = DevExpress.viz.dxPolarChartArgumentAxisLabel;
        export type dxPolarChartArgumentAxisStrips = DevExpress.viz.dxPolarChartArgumentAxisStrips;
        export type dxPolarChartArgumentAxisStripsLabel = DevExpress.viz.dxPolarChartArgumentAxisStripsLabel;
        export type dxPolarChartCommonAxisSettings = DevExpress.viz.dxPolarChartCommonAxisSettings;
        export type dxPolarChartCommonAxisSettingsConstantLineStyle = DevExpress.viz.dxPolarChartCommonAxisSettingsConstantLineStyle;
        export type dxPolarChartCommonAxisSettingsConstantLineStyleLabel = DevExpress.viz.dxPolarChartCommonAxisSettingsConstantLineStyleLabel;
        export type dxPolarChartCommonAxisSettingsLabel = DevExpress.viz.dxPolarChartCommonAxisSettingsLabel;
        export type dxPolarChartCommonAxisSettingsStripStyle = DevExpress.viz.dxPolarChartCommonAxisSettingsStripStyle;
        export type dxPolarChartCommonAxisSettingsStripStyleLabel = DevExpress.viz.dxPolarChartCommonAxisSettingsStripStyleLabel;
        export type dxPolarChartCommonAxisSettingsTick = DevExpress.viz.dxPolarChartCommonAxisSettingsTick;
        export type dxPolarChartCommonSeriesSettings = DevExpress.viz.dxPolarChartCommonSeriesSettings;
        export type dxPolarChartLegend = DevExpress.viz.dxPolarChartLegend;
        export type dxPolarChartSeries = DevExpress.viz.dxPolarChartSeries;
        export type dxPolarChartTooltip = DevExpress.viz.dxPolarChartTooltip;
        export type dxPolarChartValueAxis = DevExpress.viz.dxPolarChartValueAxis;
        export type dxPolarChartValueAxisConstantLines = DevExpress.viz.dxPolarChartValueAxisConstantLines;
        export type dxPolarChartValueAxisConstantLinesLabel = DevExpress.viz.dxPolarChartValueAxisConstantLinesLabel;
        export type dxPolarChartValueAxisLabel = DevExpress.viz.dxPolarChartValueAxisLabel;
        export type dxPolarChartValueAxisStrips = DevExpress.viz.dxPolarChartValueAxisStrips;
        export type dxPolarChartValueAxisStripsLabel = DevExpress.viz.dxPolarChartValueAxisStripsLabel;
        export type dxPolarChartValueAxisTick = DevExpress.viz.dxPolarChartValueAxisTick;
    }

    /** @deprecated Use DevExpress.viz instead */
    export module funnel {
        export type dxFunnelOptions = DevExpress.viz.dxFunnelOptions;
        export type dxFunnelTooltip = DevExpress.viz.dxFunnelTooltip;
    }

    /** @deprecated Use DevExpress.viz instead */
    export module gauges {
        export type dxCircularGaugeOptions = DevExpress.viz.dxCircularGaugeOptions;
        export type dxCircularGaugeRangeContainer = DevExpress.viz.dxCircularGaugeRangeContainer;
        export type dxCircularGaugeScale = DevExpress.viz.dxCircularGaugeScale;
        export type dxCircularGaugeScaleLabel = DevExpress.viz.dxCircularGaugeScaleLabel;

        export type dxLinearGaugeOptions = DevExpress.viz.dxLinearGaugeOptions;
        export type dxLinearGaugeRangeContainer = DevExpress.viz.dxLinearGaugeRangeContainer;
        export type dxLinearGaugeScale = DevExpress.viz.dxLinearGaugeScale;
        export type dxLinearGaugeScaleLabel = DevExpress.viz.dxLinearGaugeScaleLabel;

        export type dxBarGaugeOptions = DevExpress.viz.dxBarGaugeOptions;
        export type dxBarGaugeTooltip = DevExpress.viz.dxBarGaugeTooltip;
    }

    /** @deprecated Use DevExpress.viz instead */
    export module rangeSelector {
        export type dxRangeSelectorOptions = DevExpress.viz.dxRangeSelectorOptions;
    }

    /** @deprecated Use DevExpress.viz instead */
    export module sparklines {
        export type dxSparklineOptions = DevExpress.viz.dxSparklineOptions;
        export type dxBulletOptions = DevExpress.viz.dxBulletOptions;
    }

    /** @deprecated Use DevExpress.viz instead */
    export module map {
        export type dxVectorMapOptions = DevExpress.viz.dxVectorMapOptions;
        export type dxVectorMapTooltip = DevExpress.viz.dxVectorMapTooltip;
    }

    /** @deprecated Use DevExpress.viz instead */
    export module treeMap {
        export type dxTreeMapOptions = DevExpress.viz.dxTreeMapOptions;
        export type dxTreeMapTooltip = DevExpress.viz.dxTreeMapTooltip;
    }
}

declare module DevExpress.ui {
    /** @deprecated Use DevExpress.ui.dxAccordionItem */
    export type dxAccordionItemTemplate = DevExpress.ui.dxAccordionItem;

    /** @deprecated Use DevExpress.ui.dxActionSheetItem */
    export type dxActionSheetItemTemplate = DevExpress.ui.dxActionSheetItem;

    /** @deprecated Use DevExpress.ui.dxBoxItem */
    export type dxBoxItemTemplate = DevExpress.ui.dxBoxItem;

    /** @deprecated Use DevExpress.ui.dxGalleryItem */
    export type dxGalleryItemTemplate = DevExpress.ui.dxGalleryItem;

    /** @deprecated Use DevExpress.ui.dxMultiViewItem */
    export type dxMultiViewItemTemplate = DevExpress.ui.dxMultiViewItem;

    /** @deprecated Use DevExpress.ui.dxNavBarItem */
    export type dxNavBarItemTemplate = DevExpress.ui.dxNavBarItem;

    /** @deprecated Use DevExpress.ui.dxResponsiveBoxItem */
    export type dxResponsiveBoxItemTemplate = DevExpress.ui.dxResponsiveBoxItem;

    /** @deprecated Use DevExpress.ui.dxSchedulerAppointment */
    export type dxSchedulerAppointmentTemplate = DevExpress.ui.dxSchedulerAppointment;

    /** @deprecated Use DevExpress.ui.dxSlideOutItem */
    export type dxSlideOutItemTemplate = DevExpress.ui.dxSlideOutItem;

    /** @deprecated Use DevExpress.ui.dxTabsItem */
    export type dxTabsItemTemplate = DevExpress.ui.dxTabsItem;

    /** @deprecated Use DevExpress.ui.dxTabPanelItem */
    export type dxTabPanelItemTemplate = DevExpress.ui.dxTabPanelItem;

    /** @deprecated Use DevExpress.ui.dxTileViewItem */
    export type dxTileViewItemTemplate = DevExpress.ui.dxTileViewItem;

    /** @deprecated Use DevExpress.ui.dxToolbarItem */
    export type dxToolbarItemTemplate = DevExpress.ui.dxToolbarItem;

    /** @deprecated Use DevExpress.ui.CollectionWidgetItem */
    export type CollectionWidgetItemTemplate = DevExpress.ui.CollectionWidgetItem;

    /** @deprecated Use DevExpress.ui.dxContextMenuItem */
    export type dxContextMenuItemTemplate = DevExpress.ui.dxContextMenuItem;

    /** @deprecated Use DevExpress.ui.dxMenuBaseItem */
    export type dxMenuBaseItemTemplate = DevExpress.ui.dxMenuBaseItem;

    /** @deprecated Use DevExpress.ui.CollectionWidgetItem */
    export type DataExpressionMixinItemTemplate = DevExpress.ui.CollectionWidgetItem;

    /** @deprecated Use DevExpress.ui.dxListItem */
    export type dxListItemTemplate = DevExpress.ui.dxListItem;

    /** @deprecated Use DevExpress.ui.dxMenuItem */
    export type dxMenuItemTemplate = DevExpress.ui.dxMenuItem;

    /** @deprecated Use DevExpress.ui.dxTreeViewItem */
    export type dxTreeViewItemTemplate = DevExpress.ui.dxTreeViewItem;
}
