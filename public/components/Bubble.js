window.Bubble = React.createClass({
	render: function() {
		var user = null
		var bubbleClass = 'bubble right'
		if (this.props.message.position === 'left') {
			user = <div className="circle">{this.props.message.name.charAt(0)}</div>
			bubbleClass = 'bubble left'
		}
		return (
			<div className={bubbleClass}>
				{user}
				<div className="text">{this.props.message.text}</div>
			</div>
		)
	}
})