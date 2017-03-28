window.Send = React.createClass({
	handleSubmit: function(e) {
		// console.log('Send.handleSubmit', this.refs.message.value)
		e.preventDefault()
		this.props.onSend(this.refs.message.value)
		this.refs.message.value = ''
	},
	render: function() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					id="message-input"
					placeholder="Message"
					ref="message"
				/>
				<button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
					Send
				</button>
			</form>
		)
	}
})
