let Item = require("../models/inventary.model");

// SELECT * FROM inventario
exports.getItems = (req, res) => {
  // Find all items
  const items = Item.findAll()
    .then((items) => res.json(items))
    .catch((err) => console.error(err));
};

// INSERT INTO inventario(...) VALUES(...)
exports.insertItem = (req, res) => {
  const item = Item.create(req.body)
    .then((item) => res.json(item))
    .catch((err) => console.error(err));
};

// DELETE FROM inventario WHERE id=...
exports.deleteItem = (req, res) => {
  const item = Item.destroy({ where: { id: req.params.id } })
    .then((num) => {
      if (num == 1) {
        res.send("Item destroyed successfully");
      } else {
        res.send(`Cannot delete item with id=${id}. Maybe Item was not found!`);
      }
    })
    .catch((err) => {
      res.status(500).send("Could not delete item with id=" + id);
    });
};
