window.Name = React.createClass({
	getInitialState: function() {
		return { value: undefined }
	},
	handleValue: function(e) {
		// console.log('Name.handleValue', e.target.value)
		this.setState({value: e.target.value})
	},
	handleSubmit: function(e) {
		// console.log('Name.handleSubmit', this.state.value)
		e.preventDefault()
		this.props.onNameChange(this.state.value)
	},
	render: function() {
		return (
			<form
				id="nameForm"
				onSubmit={this.handleSubmit}
			>
				<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
					<input
						className="mdl-textfield__input"
						type="text"
						id="name"
						onChange={this.handleValue}
					/>
					<label
						className="mdl-textfield__label"
						htmlFor="name"
					>
						Pick a name
					</label>
				</div>
				<br/>
				<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
					Chat
				</button>
			</form>
		)
	}
})