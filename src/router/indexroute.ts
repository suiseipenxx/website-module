import * as Express from "express"
var router = Express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

export {router as IndexRouter}