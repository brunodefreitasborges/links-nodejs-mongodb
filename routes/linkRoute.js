const express = require ('express');
const { route } = require('express/lib/application');
const router = express();
const methodOverride = require('method-override')
const linkController = require('../controllers/linkController')

router.use(methodOverride('_method'));

router.get('/add', (req, res) => res.render('add', { error:false, body: {} }));

router.get('/', linkController.allLinks);

router.get('/:title', linkController.redirect)

router.get('/edit/:id', linkController.loadLink);

router.post('/edit/:id', express.urlencoded({ extended: true }), linkController.editLink)



router.post('/', express.urlencoded({ extended: true }), linkController.addLink);

router.delete('/:id', linkController.deleteLink)
router.delete('/', express.urlencoded({ extended: true }), linkController.deleteLink)

module.exports = router;