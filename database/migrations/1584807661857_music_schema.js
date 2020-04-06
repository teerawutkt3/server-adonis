'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MusicSchema extends Schema {
  up () {
    this.create('music', (table) => {
      table.increments()
      table.string('name')
      table.string('type')
      table.string('time')
      table.string('singer')
      table.string('belong'),
      table.string('description'),
      table.timestamps()
    })
  }

  down () {
    this.drop('music')
  }
}

module.exports = MusicSchema
