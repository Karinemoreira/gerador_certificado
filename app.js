const express = require('express');
const bodyParser = require('body-parser');
const handlebars  = require('express-handlebars');
const path = require('path');
const puppeteer = require('puppeteer')
const fs = require('fs');

const app = express();

//handlebars 
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', handlebars({ defaultLayout: 'main', extname:'.handlebars'}));
app.set('view engine', 'handlebars');
//bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//routes

app.get('/', function(req, res) {
    res.render('formulario', { title: 'Formulário' });
});

app.post('/certificado', function(req, res) {
    var body = req.body;
    
      res_body = {
          first_name: body.first_name,
          last_name: body.last_name,
          course: body.course,
          date: body.date,
        };
      
        res.render('certificado', res_body)
});


     
/* async function printPDF (){                                  // declare function
const browser = await puppeteer.launch();     // run browser
const page = await browser.newPage();         // create new tab
await page.goto('http://localhost:8081/certificado', {waitUntil: "networkidle2"});  // go to page
await page.pdf({path: 'certificado.pdf', format:"A4" });           // generate pdf and save it in page.pdf file
await browser.close();                        // close browser
    };
 */
app.listen(8081, () => {
    console.log('servidor rodando')
})
