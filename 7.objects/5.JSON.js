var user = {
	"name": "Scott",
	"city": "Desatnick"
}

console.log(user)
var JSONStringify = JSON.stringify(user)

console.log(JSONStringify, typeof JSONStringify)

var JSONParse = JSON.parse(JSONStringify)

console.log(JSONParse, typeof JSONParse)

