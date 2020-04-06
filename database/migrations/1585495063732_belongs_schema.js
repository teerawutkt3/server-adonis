'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BelongsSchema extends Schema {
  up() {
    this.create('belongs', (table) => {
      table.increments()
      table.string('name', 150)
      table.timestamps()
    })
  }

  down() {
    this.drop('belongs')
  }
}

module.exports = BelongsSchema
