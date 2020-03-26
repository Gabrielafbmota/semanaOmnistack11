const express = require('express')
import route from './router'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())
app.use(route)


export default app