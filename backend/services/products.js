const db = require('./db');
const helper = require('./utility');
const config = require('../config');

async function getOneById(id){
  const row = await db.query(
    `SELECT name, price, quantity, rating, imageURL, imageCredits, description, comments
    FROM products
    where id = ${id}`
  );

  if (row.length) {
    return row[0];
  } else return null;
  
}

async function getMultiple(page = 1, filterValue, filterColumn, sortColumn, sortOrder){
  const offset = helper.getOffset(page, config.listPerPage);
  const data = await db.query(
    `SELECT id, name, price, quantity, rating, imageURL
    FROM products
    ${filterValue ? `WHERE ${filterColumn} LIKE '%${filterValue}%'` : ''}
    ${sortColumn ? `ORDER BY ${sortColumn} ${sortOrder}` : ''}
    LIMIT ${offset},${config.listPerPage}`
  );
  const meta = {page};

  return {
    data,
    meta
  }
}

async function create(product){
  const result = await db.query(
    `INSERT INTO products 
    (name, price, quantity, description, comments, rating, imageURL, imageCredits) 
    VALUES 
    ('${product.name}', ${product.price}, ${product.quantity}, '${product.description}',
     '${product.comments}', ${product.rating}, '${product.imageURL}', '${product.imageCredits}')`
  );

  let message = 'Error in creating product';

  if (result.affectedRows) {
    message = 'Product created successfully';
  }

  return {message};
}

async function update(id, product){
  const result = await db.query(
    `UPDATE products
    SET name='${product.name}', price=${product.price}, quantity=${product.quantity}, 
    description='${product.description}', comments='${product.comments}', rating=${product.rating},
    imageURL='${product.imageURL}', imageCredits='${product.imageCredits}'
    WHERE id=${id}` 
  );

  let message = 'Error in updating product';

  if (result.affectedRows) {
    message = 'Product updated successfully';
  }

  return {message};
}

async function remove(id){
  const result = await db.query(
    `DELETE FROM products WHERE id=${id}`
  );

  let message = 'Error in deleting product';

  if (result.affectedRows) {
    message = 'Product deleted successfully';
  }

  return {message};
}

module.exports = {
  getOneById,
  getMultiple,
  create,
  update,
  remove
}