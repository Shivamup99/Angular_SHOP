import express from 'express'
const PORT = process.env.PORT || 8000;
import mongoConnection from './connection/db.js';
import categoryRoute from './routes/category.js'
import productsRoute from './routes/products.js'
const app = express()

app.use(express.json())
mongoConnection();
app.use('/api',categoryRoute)
app.use('/api',productsRoute)

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})