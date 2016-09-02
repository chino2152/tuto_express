let express= require('express');
let app = express();

app.disable('x-powered-by');

let handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


app.set('port',process.env.PORT || 3000);
app.use(express.static(__dirname + '/public')); //para poder acceder a imagenes

//rutas
//req request obj -> es http request que contiene parametros, body ,head /**/ y un respond obj lo q voy a enviar de regreso
//tons voy a responder con la dirreccion de home y con render trasnport el html del documento
app.listen(app.get('port'),(_) => console.log('Escuchando el puerto '+app.get('port')));

app.get('/',(req,res) => res.render('home'));
app.use((req,res,next)=> {console.log('Buscando por '+req.url); next(); });//middle where
app.get('/about',(req,res) => res.render('about'));
