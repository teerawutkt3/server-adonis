'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Singer extends Model {
    belong() {
        return this.belongsTo('App/Models/Belong')
    }
}

module.exports = Singer
