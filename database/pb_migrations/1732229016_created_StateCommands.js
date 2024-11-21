/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "pb5qnyn2gwlzkdz",
    "created": "2024-11-21 22:43:36.485Z",
    "updated": "2024-11-21 22:43:36.485Z",
    "name": "StateCommands",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ljurbkju",
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("pb5qnyn2gwlzkdz");

  return dao.deleteCollection(collection);
})
