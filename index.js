const express = require('express'); 

const app = express();  


app.get('/', async (_req, res) => {
    return res.status(200).json({message: 'ok'})
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
console.log(`Aplicação ouvindo na porta ${PORT}`); 
});