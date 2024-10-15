import {Sequelize} from 'sequelize-typescript';
import {config} from './config/config';


export const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,
  dialect: config.dialect,
  storage: ':memory:',
  // Add the following SSL configuration
  dialectOptions: {
    ssl: {
      require: true, // This ensures that SSL is required
      rejectUnauthorized: false // You can set this to false for local development. For production, it's advisable to have proper certificates.
    }
  }
});
