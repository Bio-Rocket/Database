/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("zcplkg93frolshb");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "zcplkg93frolshb",
    "created": "2024-09-16 20:38:45.077Z",
    "updated": "2024-10-12 20:38:33.808Z",
    "name": "LabJack1Commands",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "yfdhtzqo",
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
        "id": "2gkdhqoh",
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
