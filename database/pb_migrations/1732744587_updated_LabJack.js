/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("axf7rvr084k750y")

  // remove
  collection.schema.removeField("cxafhn6z")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dw90t1re",
    "name": "LC3",
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
    "id": "qct99kzy",
    "name": "LC4",
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
    "id": "0epjlop7",
    "name": "LC5",
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
    "id": "gxopxdcc",
    "name": "LC6",
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
    "id": "ogqaysjq",
    "name": "PT7",
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
    "id": "2myfu0fq",
    "name": "PT8",
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
    "id": "xy6gif1c",
    "name": "PT9",
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
    "id": "xp2ej2zr",
    "name": "PT10",
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
    "id": "oukeqsg8",
    "name": "PT11",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cxafhn6z",
    "name": "lj_data",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  // remove
  collection.schema.removeField("dw90t1re")

  // remove
  collection.schema.removeField("qct99kzy")

  // remove
  collection.schema.removeField("0epjlop7")

  // remove
  collection.schema.removeField("gxopxdcc")

  // remove
  collection.schema.removeField("ogqaysjq")

  // remove
  collection.schema.removeField("2myfu0fq")

  // remove
  collection.schema.removeField("xy6gif1c")

  // remove
  collection.schema.removeField("xp2ej2zr")

  // remove
  collection.schema.removeField("oukeqsg8")

  return dao.saveCollection(collection)
})
