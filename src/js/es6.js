const es6 = [1, 2, 3, 4, 5, 6]
console.log(...es6)

const es6Func = ({ firstName, lastName }) => {
	console.log(firstName, lastName)
}

es6Func({ firstName: 'Nelsie', lastName: 'Borja' })