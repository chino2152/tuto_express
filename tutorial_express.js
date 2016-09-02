let express = require('express');
let app = express();

app.set('port',process.env.PORT || 3000);
app.get('/', (req,res) => res.send('Express Funciona'));

app.listen(app.get('port'),(_) => console.log('Empezo Express, terminar con CTRL-C'));
