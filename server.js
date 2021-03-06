var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool=require('pg').Pool;

var app = express();
app.use(morgan('combined'));

var config={
    user: 'lalithamibgav',
    database: 'lalithambigav',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
    
};

var articles={
    
 'article-one':{
    title: 'article-one |Lalli',
    heading: 'Article-one',
    date:'Aug 15,2017',
    content:` <p>
           This is the first article.
            </p>`
},
 'article-two':{
    title: 'article-Two |Lalli',
    heading: 'Article-Two',
    date:'Aug 5,2017',
    content:` <p>
           This is the second article.
            </p>`
    
    
},
'article-three':{
    title: 'article-Three |Lalli',
    heading: 'Article-Three',
    date:'Aug 5,2017',
    content:` <p>
           This is the third article.
            </p>`
     
}
};

function createTemplate(data) {
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    
    var htmlTemplate =`
         <html>
         <head>
            <title>${title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
         </head>
         <body>
         <b>
           <div class="container">
               <div>
                   <a href="/">Home</a>   
               </div>
               <div>
                 <p>
                   ${heading}
                 </p>
                </div>
                <div>
                   <p>
                  ${date} 
                   </p>
                </div>
                <div>
                    <p>
                   ${content}
                    </p>
                </div>   
                   
            </div>
            </b>
        </body>
        
        </html>


`;

return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var pool =new Pool(config);
app.get('/test-db',function(req,res){
  pool.query('SELECT * FROM test', function(err,result){
      if(err){
          res.status(500).send(err.toString());
      }else{
          res.send(JSON.stringify(result));
      }
  }); 
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
var counter=0;
app.get('/counter',function(req,res){
  counter=counter +1;
  res.send(counter.toString());
});


app.get('/:articleName',function(req,res){
    //articleName=article[article-one]
    //artcles[articleName]=content object for article-one
    var articleName=req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
