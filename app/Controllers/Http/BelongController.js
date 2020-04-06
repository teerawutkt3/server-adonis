'use strict'

const Belong = use('App/Models/Belong')
// const Singer = use('App/Models/Singer')
class BelongController {

    async index({ response }) {
        const belongList = await Belong.all()
        response.send(belongList)
    }

    async stroe({ request, response }) {
        let { name } = request.post();
        const belong = new Belong()
        belong.name = name
        console.log('save => ', belong);

        await belong.save()
        response.send(belong)
    }

    async child({ params, response }) {
        let belongId = params.id;
        let belong = await Belong.find(belongId)
        const rs = []
        const singers = await belong
            .singers()
            .where('belong_id', belongId)
            .fetch()
       //console.log('singers => ', singers.rows())
        response.send(singers)
    }

    async delete({ params, response }){
        const belong_id = params.id
        const belong =  await Belong.find(belong_id)
        await belong.singers().where('belong_id', belong_id).delete()
        belong.delete()
        response.send('success')
    }
}

module.exports = BelongController
