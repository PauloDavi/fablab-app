import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Clients extends BaseSchema {
  protected tableName = 'clients'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.string('name', 64).notNullable()
      table.enum('type', ['interno', 'parceiro', 'externo']).defaultTo('interno')
      table.date('birth')
      table.string('email', 64).unique().notNullable()
      table.string('phone', 15).unique()
      table.string('cpf', 14)
      table.string('cep', 9)
      table.string('address', 64)
      // table.string('name')
      // table.string('email')
      // table.boolean('material_owned')
      // table.integer('minutes')
      // table.integer('amount')
      // table.enu('filament_type', ['PLA', 'ABS'])
      // table.float('value', 2)
      // table.integer('infill')
      // table.float('layer_height', 2)
      // table.enu('printer', ['prusa', 'makerBot'])
      // table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
