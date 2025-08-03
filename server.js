const express  = require('express');
const app = express();
const db = require('./db');
const passsport= require('passport');
const bodyParser = require('body-parser');
app.use(bodyParser.json());// it will save data in req.body

const Person = require('./models/Person');

// logRequest.js
const logRequest = (req, res, next) => {
  const now = new Date().toISOString();
  console.log(`[${now}] ${req.method} ${req.url}`);
  next(); // Move to the next middleware or route handler
};

app.use(logRequest); 

app.get('/',(req,res)=>{
  res.send('heya wassup boiiiiiiii')
}
)

//well this change is for the repository
const personRoutes = require('./routes/personnroutes');
app.use('/person',personRoutes);

const PORT = 3001;
app.listen(PORT,()=>{
   console.log('yup the sever is working')
}) 