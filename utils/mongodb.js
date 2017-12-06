import mongoose from 'mongoose'
import log from './log'
mongoose.Promise = global.Promise;


export function connectDatabase(uri) {
  return new Promise((resolve, reject) => {
    mongoose.connection
      .on('error', error => reject(error))
      .on('disconnected', () => log.warn('Database connection closed.'))
      .once('connected', () => resolve(mongoose.connections[0]))
      .openUri(uri);
  })

  //mongoose.connect(uri,{useMongoClient:true});
}