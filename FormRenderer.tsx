import * as React from "react"
import CifLookup from "../cifLookup/CifLookup"
import { ActionButtonDefinition, FieldDefinition, FormDefinition, SectionDefinition } from "../models"
import ExpressEvaluator from "../utils/ExpressionEvaluator"
import { FieldRenderer } from "../utils/FieldRenderer"

export interface IFormRendererProps {
	definition: FormDefinition
	formData: any
	onChange: (name: string, value: any) => void
	onAction: (action: string) => void
	onLoadingChange?: (loading: boolean) => void
	onError?: (error: string | null) => void
}

export default class FormRenderer extends React.Component<IFormRendererProps, {}> {
	public constructor(props: IFormRendererProps) {
		super(props)
	}

	public renderSection = (section: SectionDefinition): JSX.Element | null => {
		const visible = !section.visibleWhen || ExpressEvaluator(section.visibleWhen, this.props.formData)
		if (!visible) return null

		const content: JSX.Element[] = []

		if (section.fields && section.fields.length > 0) {
			content.push(<div key={section.name + "-fields"}>{this.renderFieldsWithGrid(section.fields, section.fieldsPerRow || this.props.definition.fieldsPerRow)}</div>)
		}

		if (section.sections && section.sections.length > 0) {
			content.push(<div style={{ marginTop: 10 /*, paddingLeft: 10*/ }}>{section.sections.map(this.renderSection)}</div>)
		}

		const isNested = !!section.visibleWhen || !!section.sections

		return (
			<div key={section.name} style={{ border: isNested ? "none" : "1px solid  #ccc", padding: isNested ? 0 : 10, marginBottom: 15 }}>
				<strong>{section.label}</strong>
				{content}
			</div>
		)
	}

	public renderActions = () => {
		const { definition, formData, onAction } = this.props

		if (!definition || !definition.actions || definition.actions.length === 0) return null

		return (
			<div style={{ marginTop: 20 }}>
				{definition.actions.map((action: ActionButtonDefinition) => {
					const show =
						!action.visibleWhen ||
						ExpressEvaluator(action.visibleWhen, {
							...formData,
							userRole: definition.userRole,
							currentStage: definition.currentStage
						})

					return show ? (
						<button key={action.label} onClick={() => this.props.onAction(action.label)} style={{ marginRight: 10 }}>
							{action.label}
						</button>
					) : null
				})}
			</div>
		)
	}

	public render(): JSX.Element {
		const { definition } = this.props

		return (
			<div style={{ padding: 20 }}>
				{definition.title && <h2>{definition.title}</h2>}

				{definition.fields && this.renderFieldsWithGrid(definition.fields, definition.fieldsPerRow)}
				{definition.sections && definition.sections.map(this.renderSection)}
				{this.renderActions()}
			</div>
		)
	}

	private renderFieldsWithGrid = (fields: FieldDefinition[], fieldsPerRow?: number): JSX.Element => {
		const containerStyle: React.CSSProperties = {
			width: "100%",
			boxSizing: "border-box"
		}
		const rowStyle: React.CSSProperties = {
			display: "flex",
			flexWrap: "wrap",
			// gap: 10,
			marginBottom: 10,
			width: "100%"
			// boxSizing: "border-box"
			// border: "1px dashed red"
		}
		const fieldStyle = (span: number): React.CSSProperties => ({
			flexBasis: `${(span / 12) * 100}%`,
			maxWidth: `${(span / 12) * 100}%`,
			minWidth: 0,
			boxSizing: "border-box",
			paddingRight: 10
			// border: "1px dashed #999"
		})

		const totalColumns = 12
		const perRow = fieldsPerRow || 2
		const defaultSpan = totalColumns / perRow

		const rows: JSX.Element[] = []
		let currentRow: JSX.Element[] = []
		let usedColumns = 0

		fields.forEach((field, idx) => {
			const span = Number(field.colSpan) || defaultSpan

			// Start a new row if needed
			if (usedColumns + span > totalColumns) {
				rows.push(
					<div key={`row-${idx}`} style={rowStyle}>
						{currentRow}
					</div>
				)
				currentRow = []
				usedColumns = 0
			}

			const fieldComponent =
				field.name === "CIF" ? (
					<CifLookup
						fieldsPerRow={4}
						onCustomerLoaded={(cust) => {
							this.props.onChange("CIF", cust.CIFId)
							this.props.onChange("CustomerName", cust.CIFLongName)
							this.props.onChange("Mobile", cust.TelephoneHome)
							this.props.onChange("Segment", cust.RankingDescEng)
							this.props.onChange("Priority", cust.CIFTypeDescription)
							this.props.onChange("Nationality", cust.Nationality)
							this.props.onChange("AccountOfficerId", cust.RelOfficerId)
							this.props.onChange("AccountOfficerName", cust.RelOfficerName)
							this.props.onChange("Branch", cust.BranchNameEng)
							this.props.onChange("Telephone2", cust.CIFTel)
							this.props.onChange("Email", cust.Email)
							this.props.onChange("CreationDate", cust.CreationDate)
						}}
						onLoadingChange={(loading) => {
							if (this.props.onLoadingChange) this.props.onLoadingChange(loading)
						}}
						onError={(error) => {
							if (this.props.onError) this.props.onError(error)
						}}
					/>
				) : (
					FieldRenderer.renderField({
						field,
						value: this.props.formData[field.name],
						formDefinition: this.props.definition,
						formData: this.props.formData,
						onChange: this.props.onChange,
						readonly: false,
						forceUpdate: () => this.forceUpdate()
					})
				)

			currentRow.push(
				<div key={field.name} style={fieldStyle(span)}>
					{fieldComponent}
				</div>
			)

			usedColumns += span
		})

		// Push final row
		if (currentRow.length > 0) {
			rows.push(
				<div key={`row-last`} style={rowStyle}>
					{currentRow}
				</div>
			)
		}

		return <div style={containerStyle}>{rows}</div>
	}

	private validateVisibleFields(): string[] {
		const errors: string[] = []
		const { formData, definition } = this.props

		const processSections = (sections: SectionDefinition[] = []) => {
			sections.forEach((section) => {
				const sectionVisible = !section.visibleWhen || ExpressEvaluator(section.visibleWhen, formData)
				if (!sectionVisible) return

				const fields = section.fields || []
				for (const field of fields) {
					const error = FieldRenderer.validateField(field, formData[field.name])
					if (error) errors.push(`${field.label}: ${error}`)
				}

				if (section.sections) {
					processSections(section.sections)
				}
			})
		}

		// Only if we also have top-level fields in `definition.fields`
		if (definition.fields && definition.fields.length > 0) {
			for (const field of definition.fields) {
				const error = FieldRenderer.validateField(field, formData[field.name])
				if (error) errors.push(`${field.label}: ${error}`)
			}
		}

		processSections(definition.sections)

		return errors
	}
}
