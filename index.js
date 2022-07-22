const express = require('express'); 

const app = express();  


app.get('/test', async (_req, res) => {
    return res.status(200).json({message: 'ok'})
})

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
console.log(`Aplicação ouvindo na porta ${PORT}`); 
});