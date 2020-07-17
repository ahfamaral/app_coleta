import express from 'express'

const app = express()

app.get('/users', (req, res) => {
    
    res.json([
        'Pamonha1',
        'Pamonha2',
        'Pamonha3',
        'Pamonha4',
    ])
})

app.listen(3333)