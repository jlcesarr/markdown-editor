import express from 'express';
import path from 'path';
const __dirname = path.resolve();


const app = express();
const PORT = 3000;

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/src/public/pages'))
app.use("/static", express.static(path.join(__dirname, '/src/public/assets')));


app.get('/', (request, response) => {
    response.render('index')
})


app.get('/document/:id', (request, response) => {
    const { id } = request.params;

    if (!id) return;

    response.render('index');
})



app.listen(PORT, () => console.log('Started'))