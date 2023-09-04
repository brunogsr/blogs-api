const express = require('express');
const loginRouter = require('./routes/login.route');
const userRouter = require('./routes/user.route');
const categoriesRouter = require('./routes/categories.route');
const blogPostRouter = require('./routes/blogpost.route');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', categoriesRouter);
app.use('/post', blogPostRouter);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
