'use strict'

/*
|--------------------------------------------------------------------------
| BelongSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class BelongSeeder {
  async run () {
    const belong = await Database.table('belongs')
    console.log(belong)
 
  }
}

module.exports = BelongSeeder
