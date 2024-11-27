/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ekisobud181en7v",
    "created": "2024-11-27 00:36:19.846Z",
    "updated": "2024-11-27 00:36:19.846Z",
    "name": "LoadCellCalibration",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zlkdya4d",
        "name": "loadcell",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "fzwb12xh",
        "name": "slope",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "wxno3nce",
        "name": "intercept",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ekisobud181en7v");

  return dao.deleteCollection(collection);
})
