/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("axf7rvr084k750y")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ebyfb7iw",
    "name": "PT12",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xpsqdlsm",
    "name": "PT13",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qtlyrnul",
    "name": "PT14",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("axf7rvr084k750y")

  // remove
  collection.schema.removeField("ebyfb7iw")

  // remove
  collection.schema.removeField("xpsqdlsm")

  // remove
  collection.schema.removeField("qtlyrnul")

  return dao.saveCollection(collection)
})
