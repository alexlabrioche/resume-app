var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var port = process.env.PORT || 3000;

var scripts = {
  intro: "/js/intro.js",
  home: "/js/home.js",
  gallery: "/js/gallery.js",
  resume: "/js/resume.js",
  projects: "/js/projects.js"
}

app.use(express.static('public'));
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
  res.render('intro', {
    scripts: scripts.intro
  });
});

app.get('/home', function(req, res) {
  res.render('home', {
    scripts: scripts.home
  });
});

app.get('/resume', function(req, res) {
  res.render('resume', {
    scripts: scripts.resume
  });
});

app.get('/projects', function(req, res) {
  res.render('projects', {
    scripts: scripts.projects
  });
});

app.get('/gallery', function(req, res) {
  res.render('gallery', {
    scripts: scripts.gallery
  });
});

app.listen(port, function(req, res) {
  console.info('server started on port: ', port);
});