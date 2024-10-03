/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("oachconmz651x2y");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "oachconmz651x2y",
    "created": "2024-09-16 20:39:49.745Z",
    "updated": "2024-10-03 19:15:45.386Z",
    "name": "PidOutput",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mutztgzw",
        "name": "valve_1_state",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "cxvssvhq",
        "name": "valve_2_state",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "ik7yejfs",
        "name": "valve_3_state",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "7cez4kux",
        "name": "valve_4_state",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "kmvcpf06",
        "name": "error",
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
        "id": "fpxjambe",
        "name": "setpoint",
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
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
