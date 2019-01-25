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
 // res.download('https://www.google.com/search?q=image&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjfnLO7hYngAhVD_GEKHRVNDTYQ_AUIDigB&biw=1305&bih=675#imgrc=8c_UAo3gH_220M:', "Download");
});

router.get('/download', function(req, res){
  var file = 'PhotoBG1.png';
  var fileLocation = path.join('/home/divya/Downloads/Cultyvate/', file);
  console.log(fileLocation);
  res.sendFile(fileLocation, file);
  res.download(fileLocation, file);
});

router.get('/contact', function(req, res){
  res.render('contact', {
    title: 'Contact'
  });
});

module.exports = router;

