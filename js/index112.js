function exercise2 (event) {

	var messages = [
	    "backspace",
	    "enter",
	    "shift",
	    "control",
	    "delete",
	    "space",
	    "subtract"
	]

	messages.getKey = () => {
	    var key = new Date().toLocaleString().split(", ")[1]
	    return log [ key ] ? log [ key + "[2]" ] ? key + "[3]" : key + "[2]" : key
	}

	var log = {}

	var sendMessage = message => new Promise (
	    resolve => setTimeout (
	        () => resolve ( message ),
	        Math.random () * 7000
	    )
	)

	messages.forEach (
	    ( message, index, arr ) => sendMessage ( message )
	        .then (
	            mess => Object.assign ( log,
	                { [ arr.getKey() ] : message }
	            )
	        )
	)

	// console.log (log)
}




function showCode(param1, param2){
    document.querySelector(param2).innerHTML = param1.toLocaleString()
}
