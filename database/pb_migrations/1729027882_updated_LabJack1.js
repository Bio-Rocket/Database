/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("smdlr11m87px029")

  // remove
  collection.schema.removeField("t6drr1fg")

  // remove
  collection.schema.removeField("xmt2qtaj")

  return dao.saveCollection(collection)
})
