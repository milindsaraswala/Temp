import * as React from "react"
import { FieldDefinition, FormDefinition } from "../models"
import { resolveUrlTokens } from "./util"

export interface IFieldRendererProps {
	field: FieldDefinition
	value: any
	formDefinition: FormDefinition
	onChange: (name: string, value: any) => void
	formData: any
	readonly?: boolean
	forceUpdate?: () => void
}

export class FieldRenderer {
	private static fieldOptionsCache: { [key: string]: (string | { label: string; value: string })[] } = {}

	public static renderField(props: IFieldRendererProps): JSX.Element {
		const { field, value, onChange, readonly, formDefinition } = props
		const isReadOnly = readonly || formDefinition.isReadOnly || field.readonly
		const error = FieldRenderer.validateField(field, value)
		const style = { width: "100%", padding: "5px" }
		type OptionType = string | { label: string; value: string }

		if (field.type === "dropdown" && (field.options || field.dataSourceUrl)) {
			const fieldName = field.name
			const parentField = field.cascadeFrom
			const parentValue = parentField ? props.formData[parentField] : null

			let options: OptionType[] = []

			// Handle cascadeMap (static dependent options)
			if (field.cascadeMap && parentValue && field.cascadeMap[parentValue]) {
				options = field.cascadeMap[parentValue]
			} else if (field.options) {
				// Static options fallback (if not cascading)
				options = field.options
			} else if (field.dataSourceUrl) {
				// Dynamic options (API based)
				if (!FieldRenderer.fieldOptionsCache) FieldRenderer.fieldOptionsCache = {}
				const cacheKey = fieldName + ":" + parentValue
				const cached = FieldRenderer.fieldOptionsCache[cacheKey]

				if (!cached) {
					const resolvedUrl = resolveUrlTokens(field.dataSourceUrl, props.formData)

					fetch(resolvedUrl)
						.then((res) => res.json())
						.then((data) => {
							const items = Array.isArray(data) ? data : data.value || []
							const labelKey = field.labelField || "Title"
							const valueKey = field.valueField || labelKey

							const dynamicOptions: OptionType[] = items.map((item: any) => {
								const label = item[labelKey]
								const _value = item[valueKey]
								return typeof label === "string" && typeof value === "string" ? { label, _value } : _value
							})

							FieldRenderer.fieldOptionsCache[cacheKey] = dynamicOptions
							if (props.forceUpdate) props.forceUpdate()
						})

					options = [] // loading
				} else {
					options = cached
				}
			}
			return (
				<div style={{ marginBottom: 5 }}>
					<label style={{ display: "block", fontWeight: 600 }}>{field.label}</label>
					<select value={value || ""} onChange={(e) => onChange(field.name, e.target.value)} disabled={isReadOnly} style={style}>
						<option value="">--- Select ---</option>
						{options.map((opt) => {
							if (typeof opt === "string") {
								return (
									<option key={opt} value={opt}>
										{opt}
									</option>
								)
							}
							return (
								<option key={opt.value} value={opt.value}>
									{opt.label}
								</option>
							)
						})}
					</select>
					{error && <div style={{ color: "red", fontSize: "0.8em" }}>{error}</div>}
				</div>
			)
		}

		if (field.type === "checkbox") {
			return (
				<div style={{ marginBottom: 5 }}>
					<label>
						<input type="checkbox" checked={!!value} onChange={(e) => onChange(field.name, e.target.checked)} disabled={isReadOnly} />
						{field.label}
					</label>
				</div>
			)
		}

		if (field.type === "radio" && field.options) {
			return (
				<div style={{ marginBottom: 5 }}>
					<label style={{ display: "block", fontWeight: 600 }}>{field.label}</label>
					<div>
						{(field.options as any[]).map((opt) => {
							const optionValue = typeof opt === "object" ? opt.value : opt
							const optionLabel = typeof opt === "object" ? opt.label : opt

							return (
								<label key={optionValue} style={{ marginRight: 10 }}>
									<input
										type="radio"
										name={field.name}
										value={optionValue}
										checked={value === optionValue}
										onChange={(e) => onChange(field.name, optionValue)}
										disabled={isReadOnly}
									/>
									{optionLabel}
								</label>
							)
						})}
					</div>
					{error && <div style={{ color: "red", fontSize: "0.8em" }}>{error}</div>}
				</div>
			)
		}

		if (field.type === "file") {
			const isMultiple = !!field.multiple
			const accept = field.accept || "*/*"
			const maxSizeMB = field.maxSizeMB || 10

			const validateFiles = (files: File[]): string | null => {
				for (const file of files) {
					if (file.size > maxSizeMB * 1024 * 1024) {
						return `${file.name} exceeds ${maxSizeMB}MB limit.`
					}
				}
				return null
			}

			const handleFiles = (files: File[]) => {
				const _error = validateFiles(files)
				if (_error) {
					alert(_error)
					return
				}

				if (field.uploadUrl) {
					files.forEach((file) => {
						const formData = new FormData()
						formData.append("file", file)

						fetch(field.uploadUrl!, {
							method: "POST",
							body: formData
						})
							.then((res) => (res.ok ? res.json() : Promise.reject(res.statusText)))
							.then((result) => {
								console.log("Uploaded:", result)
								props.onChange(field.name, result) // store response
							})
							.catch((err) => alert(`Upload failed: ${err}`))
					})
				} else {
					props.onChange(field.name, isMultiple ? files : files[0] || null)
				}
			}

			const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
				e.preventDefault()
				const rawFiles = e.dataTransfer.files
				const files: File[] = []
				for (let i = 0; i < rawFiles.length; i++) {
					files.push(rawFiles.item(i)!)
				}
				handleFiles(files)
			}

			const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
				const input = e.target as HTMLInputElement
				const rawFiles = input.files
				const files: File[] = []
				if (rawFiles) {
					for (let i = 0; i < rawFiles.length; i++) {
						files.push(rawFiles.item(i)!)
					}
				}
				handleFiles(files)
			}

			const dropZoneStyle: React.CSSProperties = {
				border: "2px dashed #aaa",
				padding: 20,
				textAlign: "center",
				backgroundColor: "#f9f9f9",
				cursor: "pointer",
				marginBottom: 10
			}

			return (
				<div style={{ marginBottom: 10 }}>
					<label style={{ display: "block", fontWeight: 600 }}>{field.label}</label>
					<div
						onDrop={handleDrop}
						onDragOver={(e) => e.preventDefault()}
						onClick={() => {
							const input = document.getElementById(`file-input-${field.name}`)
							if (input) input.click()
						}}
						style={dropZoneStyle}>
						Drag & drop file{isMultiple ? "s" : ""} here or click to upload
					</div>
					<input type="file" id={`file-input-${field.name}`} style={{ display: "none" }} multiple={isMultiple} accept={accept} onChange={handleChange} />
				</div>
			)
		}

		if (field.type === "multiline" || field.type === "textarea") {
			const textareaId = `textarea-${field.name}`

			const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
				const input = e.target as HTMLTextAreaElement
				input.style.height = "auto"
				input.style.height = input.scrollHeight + "px"
				props.onChange(field.name, input.value)
			}

			return (
				<div style={{ marginBottom: 10 }}>
					<label style={{ display: "block", fontWeight: 600 }}>{field.label}</label>
					<textarea
						id={textareaId}
						value={props.value || ""}
						onChange={handleChange}
						readOnly={props.readonly}
						style={{
							width: "100%",
							padding: "5px",
							minHeight: 80,
							resize: "none",
							overflow: "hidden",
							boxSizing: "border-box"
						}}
					/>
				</div>
			)
		}

		// default text/number input
		return (
			<div style={{ marginBottom: 5 }}>
				<label style={{ display: "block", fontWeight: 600 }}>{field.label}</label>
				<input type={field.type === "number" ? "number" : "text"} value={value} onChange={(e) => onChange(field.name, e.target.value)} readOnly={isReadOnly} style={style} />
				{error && <div style={{ color: "red", fontSize: "0.8em" }}>{error}</div>}
			</div>
		)
	}

	public static validateField(field: FieldDefinition, value: any): string | null {
		const localField = { ...field } // clone safely
		if (localField.readonly) return null

		const trimmedValue = typeof value === "string" ? value.trim() : value

		if (localField.required && (!trimmedValue || trimmedValue === "")) return `${localField.label} is required.`
		if (localField.minLength && trimmedValue.length < localField.minLength) return `${localField.label} must be least ${localField.minLength} characters.`
		if (localField.maxLength && trimmedValue.length > localField.maxLength) return `${localField.label} must be no more ${localField.maxLength} characters.`

		if ((localField.type = "number")) {
			const num = parseFloat(trimmedValue)
			if (localField.minValue !== undefined && num < localField.minValue) {
				return `${localField.label} must be >= ${localField.minValue}.`
			}
			if (localField.maxValue !== undefined && num < localField.maxValue) {
				return `${localField.label} must be <= ${localField.minValue}.`
			}
		}
		if (localField.pattern) {
			const regex = new RegExp(localField.pattern)
			if (!regex.test(trimmedValue)) return `${localField.label} format is invalid.`
		}
		return null
	}
}
