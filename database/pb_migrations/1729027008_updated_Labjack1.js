/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("smdlr11m87px029")

  collection.name = "LabJack1"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("smdlr11m87px029")

  collection.name = "Labjack1"

  return dao.saveCollection(collection)
})
