'use strict'

const Music = use('App/Models/Music')
class MusicController {
    async index ({ request, response }) {
        const musics = await Music.all()
        response.send(musics)
    }

    async stroe ({ request, response}) {
        const req = await request.post()
        console.log('stroe = >', req)
        const music = await Music.create(req)
        await music.save()
        response.send(music)
    }

    async findId({params, response }){
        const id = params.id
        const music = await Music.find(id)
        response.send(music)
    }

    async delete({params, response }){
        const id = params.id
        const music = await Music.find(id)
        response.send(music.delete())
    }

    async update({params, request, response}){
        const id = params.id
        const req = request.post()
        const music = await Music.find(id)

        music.merge(req)
        let res = await music.save()
        response.send(res)
    }
}

module.exports = MusicController

