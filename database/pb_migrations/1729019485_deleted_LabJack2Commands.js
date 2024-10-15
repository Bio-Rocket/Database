/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("q8cz0c7hfe6extq");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "q8cz0c7hfe6extq",
    "created": "2024-09-16 20:39:04.135Z",
    "updated": "2024-10-12 20:38:33.809Z",
    "name": "LabJack2Commands",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vos78vuy",
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
        "id": "qeg6ijad",
        "name": "command",
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
        "id": "701phgdi",
        "name": "value",
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
})
