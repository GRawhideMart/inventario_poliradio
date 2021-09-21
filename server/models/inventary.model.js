const { DataTypes } = require("sequelize");
const db = require("../config/db.config");

const Inventary = db.define(
  "inventario",
  {
    // Model attributes are defined here
    legacyId: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(255),
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    isDonation: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    doner: {
      type: DataTypes.STRING(255),
      defaultValue: "",
    },
    isRentable: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isAvailable: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    notes: {
      type: DataTypes.STRING(255),
    },
    buyYear: {
      type: DataTypes.STRING(8),
    },
    replacePriority: {
      type: DataTypes.ENUM("nessuna", "bassa", "media", "alta"),
      defaultValue: "nessuna",
    },
  },
  {
    tableName: "inventario",
    engine: "MyISAM",
  }
);

module.exports = Inventary;
