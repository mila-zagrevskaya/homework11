// function exercise3 (event) {
	var messages = [
		"backspace",
		"enter",
		"shift",
		"control",
		"delete",
		"space",
		"subtract"
	]

	var sendMessage = message => new Promise (
		resolve => setTimeout (
			() => resolve ( message ),
			Math.random () * 5000
			)
		)

	var sendAll = (promise = () => new Promise ( () => {} ), messages = []) => {
		const getKey = () => new Date().toLocaleString().split(", ")[1]
		const log = {}
		var index = 0
		function recursive () {
			promise  ( messages [ index++ ] )
			.then (
				response => response ? log[getKey()] = response :null
			) 
			index >= messages.length ? null : recursive ()
		}
		recursive ()
		return log
	}
	let log = sendAll (sendMessage, messages)

// }
	function exercise3 (event) {
		console.log (log)
	}

// function showCode(param1, param2){
// 	document.querySelector(param2).innerHTML = param1.toLocaleString()
// }