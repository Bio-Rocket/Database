/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wi9q8kr9qpi4i1w")

  // remove
  collection.schema.removeField("ah1tjwts")

  // remove
  collection.schema.removeField("7r98aypt")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wi9q8kr9qpi4i1w")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ah1tjwts",
    "name": "loadcell",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7r98aypt",
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
  }))

  return dao.saveCollection(collection)
})
