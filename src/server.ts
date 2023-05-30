import app from './app'

const mongoose = require('mongoose')
import config from './config/index'

async function bootStrap() {
  try {
    await mongoose.connect(config.databaseUrl as string)
    console.log('database connect succesfully')
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`)
    })
  } catch (err) {
    console.log('failed to connect database', err)
  }
}
bootStrap()
