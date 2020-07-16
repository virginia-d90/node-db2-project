
exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl =>{
      tbl.increments()
      tbl.string("vin", 17).unique().notNullable()
      tbl.string("make", 30).notNullable()
      tbl.string("model", 50).notNullable()
      tbl.string("year", 6).notNullable()
      tbl.integer("mileage").notNullable()
      tbl.string("transmission_type", 50)
      tbl.string("title", 15)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars")
};
