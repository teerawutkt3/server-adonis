'use strict'

/*
|--------------------------------------------------------------------------
| MusicSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class MusicSeeder {
  async run () {
    const users = await Database.table('music')
    console.log(users)
  }
}

module.exports = MusicSeeder
