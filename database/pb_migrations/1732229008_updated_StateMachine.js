/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oxj572p9ne0d5yd")

  collection.name = "SystemState"

  // remove
  collection.schema.removeField("zx6z9oy9")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u9obvdgp",
    "name": "system_state",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oxj572p9ne0d5yd")

  collection.name = "StateMachine"

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
