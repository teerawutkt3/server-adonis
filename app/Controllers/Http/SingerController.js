'use strict'

const Singer = use('App/Models/Singer')
const Belong = use('App/Models/Belong')
class SingerController {


    async index({ request, response }) {
        const singers = await Singer.all()
        response.send(singers)
    }
    async stroe({ request, response }) {
        const { name, belong_id } = await request.post()
        console.log('name = >', name)
        console.log('belong_id = >', belong_id)
        const belong = await Belong.find(belong_id)

        const singer = await belong
            .singers()
            .create({ name: name })
        response.send(singer)
    }
    async delete({ params }) {
        const singer = await Singer.find(params.id)
        singer.delete()
    }

}

module.exports = SingerController
