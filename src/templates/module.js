const appVersion = require('../../package.json').version;

module.exports = {
  index: `module.exports = require('./controller')`,
  controller: `/*******************************************************************************
 * 
 * CLI Backend enpesos.com
 * V ${appVersion}
 * https://www.npmjs.com/package/enpesos
 * Controlador base enpesos.com
 * Agregar middlewares necesarios
 * 
 ******************************************************************************/
const express = require('express');
const router = express.Router();

const { getItems, getItem, createItem, deleteItem, updateItem } = require('./service');

router.get('/', getItems);
router.get('/:id', getItem);
router.post('/', createItem);
router.patch('/:id', updateItem);
router.delete('/:id', deleteItem);

module.exports = router;`,
  entity: ``,
  respository: ``,
  service: `const getItems = async (req, res) => {
    try {
        res.json({ data: 'hola desde usuarios' });
    } catch (e) {
        console.log(e);
    }
    };

    const getItem = (req, res) => {};

    const createItem = async (req, res) => {
    try {
        const body = req.body;
        res.json(body);
    } catch (e) {
        console.log(e);
    }
    };

    const updateItem = (req, res) => {};

    const deleteItem = (req, res) => {};

    module.exports = { getItem, getItems, deleteItem, createItem, updateItem };`,
};
