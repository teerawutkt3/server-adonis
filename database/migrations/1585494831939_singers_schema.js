'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SingersSchema extends Schema {
  up () {
    this.create('singers', (table) => {
      table.increments()
      table.string('name', 100)
      table.integer('belong_id', 11)
      //.unsigned().references('id').inTable('belongs') 
      table.timestamps()
    })
  }

  down () {
    this.drop('singers')
  }
}

module.exports = SingersSchema
