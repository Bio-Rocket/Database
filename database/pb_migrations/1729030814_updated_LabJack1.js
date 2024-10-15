/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("smdlr11m87px029")

  // remove
  collection.schema.removeField("t6drr1fg")

  // remove
  collection.schema.removeField("xmt2qtaj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "l5uaazrv",
    "name": "device_scan_backlog",
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
    "id": "pirlyveo",
    "name": "ljm_scan_backlog",
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
  const collection = dao.findCollectionByNameOrId("smdlr11m87px029")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "t6drr1fg",
    "name": "device_scan_backlog",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xmt2qtaj",
    "name": "ljm_scan_backlog",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // remove
  collection.schema.removeField("l5uaazrv")

  // remove
  collection.schema.removeField("pirlyveo")

  return dao.saveCollection(collection)
})
