import * as React from "react"
import CifService from "../services/CifService"

export interface Customer {
	CIFId: string
	CifCivilId: string
	CIFLongName: string
	TelephoneHome: string
	RankingDescEng: string // Segment
	CIFTypeDescription: string // Priority
	Nationality: string
	RelOfficerId: string
	RelOfficerName: string
	BranchNameEng: string
	CIFTel: string
	Email: string
	CreationDate: string
}

export interface ICifLookupProps {
	onCustomerLoaded: (customer: Customer) => void
	onLoadingChange?: (isLoading: boolean) => void
	onError?: (error: string | null) => void
	fieldsPerRow?: number
}

export interface ICifLookupState {
	cif: string
	civilId: string
	customer: Customer | null
	customerLoaded: boolean
	loading: boolean
	error: string | null
}

export default class CifLookup extends React.Component<ICifLookupProps, ICifLookupState> {
	private _cifService = new CifService()

	constructor(props: ICifLookupProps) {
		super(props)
		this.state = {
			cif: "",
			civilId: "",
			customerLoaded: false,
			customer: null,
			loading: false,
			error: null
		}
	}

	public render() {
		const { cif, civilId, customer, loading, error } = this.state

		return (
			<div style={{ marginBottom: 20 }}>
				<div style={{ display: "flex", gap: 10 }}>
					<div style={{ flex: 1 }}>
						<label style={{ display: "block", fontWeight: 600 }}>CIF Number</label>
						<input type="text" value={cif} onChange={this.handleCifChange} onBlur={this.handlelookup} style={{ width: 300 }} />
					</div>
					<div style={{ flex: 1 }}>
						<label style={{ display: "block", fontWeight: 600 }}>Civil ID</label>
						<input type="text" value={civilId} onChange={this.handleCivilChange} onBlur={this.handlelookup} style={{ width: 300 }} />
					</div>
				</div>
				{loading && <span style={{ marginLeft: 10 }}>Loading...</span>}
				{error && <div style={{ color: "red" }}>{error}</div>}
				{customer && <div style={{ marginTop: 10 }}>{this.renderCustomerFields(customer)}</div>}
			</div>
		)
	}

	private handleCifChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			cif: e.target.value,
			civilId: "",
			customer: null,
			customerLoaded: false
		})
	}

	private handleCivilChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			cif: "",
			civilId: e.target.value,
			customer: null,
			customerLoaded: false
		})
	}

	private handlelookup = async () => {
		const { cif, civilId, customerLoaded } = this.state
		if (!cif && !civilId) return
		if (customerLoaded) return

		this.setState({ loading: true, error: null })
		if (this.props.onLoadingChange) this.props.onLoadingChange(true)
		if (this.props.onError) this.props.onError(null)

		try {
			let customer: Customer | null = null

			if (cif) {
				customer = await this._cifService.getCustomerByCIF(cif)
			} else if (civilId) {
				customer = await this._cifService.getCustomerByCivilId(civilId)
			}

			if (!customer) {
				this.setState({ customer: null, error: "Cutomer not found", loading: false })
				if (this.props.onError) this.props.onError("Customer not found")
			} else {
				this.setState({
					customer,
					error: null,
					loading: false,
					cif: customer.CIFId,
					civilId: customer.CifCivilId,
					customerLoaded: true
				})
				this.props.onCustomerLoaded(customer)
			}
		} catch (err) {
			this.setState({ customer: null, error: "Looking up failed", loading: false })
			if (this.props.onError) this.props.onError("Looking up failed")
		} finally {
			if (this.props.onLoadingChange) this.props.onLoadingChange(false)
		}
	}

	private renderCustomerFields(customer: Customer) {
		const fields = [
			{ label: "Name", value: customer.CIFLongName },
			{ label: "Mobile", value: customer.TelephoneHome },
			{ label: "Segment", value: customer.RankingDescEng },
			{ label: "Priority", value: customer.CIFTypeDescription },
			{ label: "Nationality", value: customer.Nationality },
			{ label: "AccountOfficerId", value: customer.RelOfficerId },
			{ label: "AccountOfficerName", value: customer.RelOfficerName },
			{ label: "Branch", value: customer.BranchNameEng },
			{ label: "Telephone2", value: customer.CIFTel },
			{ label: "Email", value: customer.Email },
			{ label: "CreationDate", value: customer.CreationDate }
		]

		const perRow = this.props.fieldsPerRow || 2
		const rows = []
		for (let i = 0; i < fields.length; i += perRow) {
			const rowFields = fields.slice(i, i + perRow)
			const fillersNeeded = perRow - rowFields.length

			// Render actual fields
			const rowElemnets = rowFields.map((field) => (
				<div
					key={field.label}
					style={{
						flex: "1 1 calc(100% /" + perRow + " - 10px)",
						minWidth: "150px"
					}}>
					<label style={{ fontWeight: 600 }}>{field.label}</label>
					<div>{field.value}</div>
				</div>
			))

			for (let j = 0; j < fillersNeeded; j++) {
				rowElemnets.push(
					<div
						key={`filler-${i}-${j}`}
						style={{
							flex: "1 1 calc(100% / " + perRow + " - 10px)",
							minWidth: "150px"
						}}
					/>
				)
			}

			rows.push(
				<div
					key={i}
					style={{
						display: "flex",
						flexWrap: "wrap",
						gap: 10,
						marginBottom: 10
					}}>
					{rowElemnets}
				</div>
			)
		}
		return rows
	}
}
