import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Users from 'App/Models/Users'

export default class MainUserSeeder extends BaseSeeder {
  public async run() {
    await Users.create({
      email: 'fablab@cear.ufpb.br',
      password: 'fablab123',
    })
  }
}
