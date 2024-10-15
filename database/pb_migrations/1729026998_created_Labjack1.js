/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "smdlr11m87px029",
    "created": "2024-10-15 21:16:38.555Z",
    "updated": "2024-10-15 21:16:38.555Z",
    "name": "Labjack1",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "356uaubo",
        "name": "lj1_data",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 2000000
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
  const collection = dao.findCollectionByNameOrId("smdlr11m87px029");

  return dao.deleteCollection(collection);
})
