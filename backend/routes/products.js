const express = require('express');
const router = express.Router();
const products = require('../services/products');
const jwt = require('../services/jwt');

router.get('/:id', async function(req, res, next) {
  try {
    let data = await products.getOneById(req.params.id)
    if (data) {
      res.json(data);
    } else {
      res.status(404).send('No product found with this id');
    }
  } catch (err) {
    console.error(`Error while getting product `, err.message);
    next(err);
  }
});

router.get('/', async function(req, res, next) {
  try {
    res.json(await products.getMultiple(req.query.page, 
      req.query.filterValue, 
      req.query.filterColumn, 
      req.query.sortColumn, 
      req.query.sortOrder));
  } catch (err) {
    console.error(`Error while getting products `, err.message);
    next(err);
  }
});

router.post('/', jwt.authenticateToken, async function(req, res, next) {
  try {
    let data = await products.create(req.body)
    if (data.message == 'Product created successfully') {
      res.json(data);
    } else {
      res.status(404).send(data.message);
    }
  } catch (err) {
    console.error(`Error while creating product`, err.message);
    next(err);
  }
});

router.put('/:id', jwt.authenticateToken, async function(req, res, next) {
  try {
    let data = await products.update(req.params.id, req.body)
    if (data.message == 'Product updated successfully') {
      res.json(data);
    } else {
      res.status(404).send(data.message);
    }
  } catch (err) {
    console.error(`Error while updating product`, err.message);
    next(err);
  }
});

router.delete('/:id', jwt.authenticateToken, async function(req, res, next) {
  try {
    let data = await products.remove(req.params.id)
    if (data.message == 'Product deleted successfully') {
      res.json(data);
    } else {
      res.status(404).send(data.message);
    }
  } catch (err) {
    console.error(`Error while deleting product`, err.message);
    next(err);
  }
});

module.exports = router;