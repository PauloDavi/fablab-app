import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Users from 'App/Models/Users'

export default class UsersController {
  public async get({ params, response }: HttpContextContract) {
    const { id } = params

    const users = await Users.findBy('id', id)

    return response.json(users)
  }

  public async list({ response }: HttpContextContract) {
    const users = await Users.all()

    return response.json(users)
  }

  public async create({ request, response }: HttpContextContract) {
    const { email, password } = request.post()

    const users = await Users.create({ email, password })

    return response.json(users)
  }

  public async update({ request, response }: HttpContextContract) {
    const { email } = request.post()

    const user = await Users.findOrFail(1)

    user.email = email

    await user.save()

    return response.json(user)
  }

  public async delete({ params, response }: HttpContextContract) {
    const { id } = params

    const user = await Users.findOrFail(id)
    await user.delete()

    return response.json(user)
  }
}
