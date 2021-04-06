const express = require('express')
const path = require('path')

const app = express()

const PORT = process.env.PORT || 4000

// Asosiy derition - root yo'nalishga so'rov bo'lsa matn yubor
app.get('/', (req, res) => {
	
	res.send([
		{
			endpoint: '/',
			description: 'root',
			returns: 'directory catalog'
		},
		{
			endpoint: '/users',
			description: 'users',
			returns: 'Fetch all users'
		}

	]).end()

})

app.get('/users', (req, res) => {

	res.send([
		{ name: 'Otabek', age: 25 },
		{ name: 'Akbarjon', age: 100 },
		{ name: 'Bekzodjon', age: 50 },
	]).end()

})

app.get('/page', (req, res) => {

	res.sendFile(path.resolve('./index.html'))

})

app.listen(PORT, () => console.log(`Server tayyor: http://localhost:${PORT}`))
