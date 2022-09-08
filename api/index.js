const express = require('express')
const axios = require('axios')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/test', async function async(req, res) {
	try {
		const response = await axios.get('https://api.neoscan.io/api/main_net/v1/get_all_nodes')
		res.send(response.data)
	} catch (err) {
		console.log(err)
	}
})

export default {
	path: '/api',
	handler: app,
}
