/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/users/:id', 'UsersController.get') //.middleware('auth')
Route.post('/users', 'UsersController.create') //.middleware('auth')

Route.get('/', 'TestsController.test') //.middleware('auth')
Route.put('/test', 'TestsController.test') //.middleware('auth')

Route.post('/login', 'AuthController.login')
