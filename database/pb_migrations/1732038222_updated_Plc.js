/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("epgquow8rs4unht")

  // remove
  collection.schema.removeField("ubm6y6lk")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("epgquow8rs4unht")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ubm6y6lk",
    "name": "field",
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
