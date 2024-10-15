/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("epgquow8rs4unht")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hjfexl8w",
    "name": "plc_pt_data",
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
    "id": "olcv8ycu",
    "name": "plc_valve_data",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mmdukauu",
    "name": "plc_tc_data",
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
  const collection = dao.findCollectionByNameOrId("epgquow8rs4unht")

  // remove
  collection.schema.removeField("hjfexl8w")

  // remove
  collection.schema.removeField("olcv8ycu")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mmdukauu",
    "name": "plc_data",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  return dao.saveCollection(collection)
})
