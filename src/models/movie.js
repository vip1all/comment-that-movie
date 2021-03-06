const env = process.env.NODE_ENV;

module.exports = function(seq, datatype) {
  const Movie = seq.define(
    'Movie',
    {
      id: { type: datatype.UUID, defaultValue: datatype.UUIDV4, primaryKey: true },
      title: { type: datatype.STRING, allowNull: false },
      data: { type: env === 'production' ? datatype.JSONB : datatype.JSON, allowNull: false },
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'movies',
      comment: 'We all love movies right?',
    }
  );

  return Movie;
};
