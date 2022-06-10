const secretdata = {
  JWT_SIGNATURE_KEY: 'Rahasia',
  DB_USER: 'dwvqoorqizpsaz',
  DB_PASSWORD: '90260565da7c151e50f12b3d2c2f8d6d425f544329ab4b10635d44341a5665f2',
  DB_NAME: 'd40ve4i82p0a1p',
  DB_HOST: 'ec2-34-198-186-145.compute-1.amazonaws.com',
  DB_PORT: '5432'
}

const {
  DB_USER = '',
  DB_PASSWORD = '',
  DB_NAME = 'bcr',
  DB_HOST = '127.0.0.1',
  DB_PORT = '5432',
} = secretdata;

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
  test: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
  production: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
