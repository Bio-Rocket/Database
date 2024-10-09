/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "vsh84o614np4tcn",
    "created": "2024-10-09 01:35:45.420Z",
    "updated": "2024-10-09 01:35:45.420Z",
    "name": "Heartbeat",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hhbunt52",
        "name": "message",
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
  const collection = dao.findCollectionByNameOrId("vsh84o614np4tcn");

  return dao.deleteCollection(collection);
})
