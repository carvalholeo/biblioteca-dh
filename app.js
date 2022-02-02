const dotenv = require('dotenv');
dotenv.config();

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session')

const indexRouter = require('./routes/index');
const livrosRouter = require('./routes/livros');

const app = express();

let contador = 0;
let arrayDePaginas = [];

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// deepcode ignore HardcodedNonCryptoSecret: <please specify a reason of ignoring this>
app.use(session({
  secret: 'senha super secreta da KGB',
  resave: false,
  saveUninitialized: false,
  name: 'sessao_biblioteca'
}));

app.use(function(req, res, next){
  // console.log('Página acessada: ' + req.path)
  // contador++;
  // console.log('quantidade de acessos: '+ contador);
  // next()

  // Criar um array para manipular
  // Criar um middleware global
  // A cada requisição, adicionar a página acessada no array
  // Lembre-se de usar o next

  // if (req.path === '/') {
  //   next();
  // } else {
  //   res.send('não está tudo bem')
  // }
  next()
})

app.use(function(req, res, next) {
  arrayDePaginas.push(req.path);

  if (typeof req.session.paginaAnterior === "undefined") {
    req.session.paginaAnterior = req.path;
  } else {
    req.session.paginaAnterior = req.session.paginaAcessada;
  }

  req.session.paginaAcessada = req.path

  next()
})



app.use('/', indexRouter);
app.use('/livros', livrosRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
