'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route
  .get('users/:id', 'UserController.show')
  .middleware('auth')

Route.post('login', 'UserController.login')

Route.on('/').render('welcome')
Route.group(()=>{
    Route.get('/','MusicController.index')
    Route.post('/','MusicController.stroe')
    Route.post('/save','MusicController.save')
    Route.get('/:id','MusicController.findId')
    Route.delete('/:id','MusicController.delete')
    Route.put('/:id','MusicController.update')
}).prefix('/api/music')

Route.group(()=>{
    Route.post('/','BlogController.stroe')
    Route.post('/:id','BlogController.findId')
}).prefix('/api/blog')

Route.group(()=>{
    Route.post('/','SingerController.stroe')
    Route.get('/','SingerController.index')
    Route.delete('/:id','SingerController.delete')
}).prefix('/api/singer')

Route.group(()=>{
    Route.get('/','BelongController.index')
    Route.get('/child/:id','BelongController.child')
    Route.post('/','BelongController.stroe')
    Route.delete('/:id','BelongController.delete')
}).prefix('/api/belong')