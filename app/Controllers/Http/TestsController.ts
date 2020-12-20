import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Users from 'App/Models/Users'

export default class TestsController {
  public async test({ response }: HttpContextContract) {
    const users = await Users.all()
    return response.json(users)
  }
}
