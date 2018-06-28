const express = require('express');
const router = express.Router();
const images = require('../helpers/images.js')
const {
  addItem,
  signup
  } = require('../controllers/user.controller')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/upload', 
  images.multer.single('image'),
  images.sendUploadToGCS,
  addItem
);
router.post('/signup', signup)

module.exports = router;
