var express = require('express');
var router = express.Router();
var path = require('path');


router.get('/', function(req, res){
  // res.render('index', {
  //   title: 'Home'
  // });
  res.status(200);
  res.write("mlabs");
  res.end();
});

router.get('/about', function(req, res){
  // res.render('about', {
  //   title: 'About'
  // });
  // res.status(200);
  // res.write("about")
  // res.end();
  var file = 'PhotoBG1.png';
  var fileLocation = path.join('/home/divya/Downloads/Cultyvate/', file);
  //res.writeHead(200, {'Content-Type': Image});
  res.sendFile(fileLocation,file);
});

router.get('/download', function(req, res){
  var file = 'PhotoBG1.png';
  var fileLocation = path.join('/home/divya/Downloads/Cultyvate/', file);
  console.log(fileLocation);
  res.sendFile(fileLocation, file);
  res.contentType('.png');
 // res.download(fileLocation, file);
});

router.get('/contact', function(req, res){
  res.render('contact', {
    title: 'Contact'
  });
});

module.exports = router;

