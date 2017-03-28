window.Chat = React.createClass({
	getInitialState: function() {
		return {
			name: false,
			socket: false,
			messages: [],
		}
	},
	componentDidMount: function() {
		// console.log('Chat.componentDidMount')
		var socket = io()
		socket.on('connect', function() {
			// console.log(socket.id)
		})
		socket.on('MESSAGE', this.handleMessage)
		this.setState({socket: socket})
	},
	handleNameChange: function(name) {
		// console.log('Chat.handleNameChange', name)
		this.setState({name: name})
	},
	handleSend: function(text) {
		// console.log('Chat.handleSend', text)
		var message = {
			name: this.state.name,
			text: text,
			id: uuid.v4(),
		}
		this.state.socket.emit('MESSAGE', message)
		message.position = 'right'
		var messages = this.state.messages
		messages.push(message)
		this.setState({ messages: messages })
	},
	handleMessage: function(message) {
		// console.log('Chat.handleMessage', message)
		message.position = 'left'
		var messages = this.state.messages
		messages.push(message)
		this.setState({ messages: messages })
	},
	render: function() {
		if (!this.state.name) {
			return <Name onNameChange={this.handleNameChange}/>
		}
		
		var bubbles = this.state.messages.map(function(message) {
			return (
				<Bubble
					key={message.id}
					message={message}
				/>
			)
		})
		
		return (
			<div>
				<div id="bubble-container">{bubbles}</div>
				<Send onSend={this.handleSend}/>
			</div>
		)
	}
})