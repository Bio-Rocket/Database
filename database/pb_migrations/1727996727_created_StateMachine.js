/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "oxj572p9ne0d5yd",
    "created": "2024-10-03 23:05:27.442Z",
    "updated": "2024-10-03 23:05:27.442Z",
    "name": "StateMachine",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "u9obvdgp",
        "name": "stateData",
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
        "id": "zx6z9oy9",
        "name": "warningData",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("oxj572p9ne0d5yd");

  return dao.deleteCollection(collection);
})
