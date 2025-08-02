const express  = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());// it will save data in req.body

const Person = require('./models/Person');


app.get('/',(req,res)=>{
  res.send('heya wassup boiiiiiiii')
}
)


const personRoutes = require('./routes/personnroutes');
app.use('/person',personRoutes);

const PORT = 3001;
app.listen(PORT,()=>{
   console.log('yup the sever is working')
})