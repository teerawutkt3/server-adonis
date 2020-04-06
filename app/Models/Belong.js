'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Belong extends Model {
    singers() {
        return this.hasMany('App/Models/Singer')
    }
}

module.exports = Belong
