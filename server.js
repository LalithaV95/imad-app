var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

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
    
var htmpTemplate=`
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
