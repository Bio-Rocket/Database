/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("epgquow8rs4unht")

  collection.name = "Plc"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("epgquow8rs4unht")

  collection.name = "PLC"

  return dao.saveCollection(collection)
})
