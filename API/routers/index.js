const cors = require('cors');
const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(cors());
//create www for permiss ative
/*const allowedOrigins = ['http://localhost:5173/'];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = '404 Access to API from this Domain is No permiss';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));*/

const userRouter = require('./../routers/user_router');
//working of Router
app.use('/Login',userRouter);

app.listen(port=3000, () => {
  console.log(`Server is running on port ${port}`);
});