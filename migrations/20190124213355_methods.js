exports.up = function(knex, Promise) {
  return knex.schema.createTable('methods', table => {
    table.increments()
    table.string('name').notNullable().defaultsTo('')
    table.string('description').notNullable().defaultsTo('')
    table.string('example').notNullable().defaultsTo('')
    table.string('tags').notNullable().defaultsTo('')
    table.string('link').notNullable().defaultsTo('')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('methods')
};