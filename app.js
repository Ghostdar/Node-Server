'use strict';
import Koa from 'koa'
import convert from 'koa-convert'
import koabody from 'koa-body'
import router from './api'
import json from 'koa-json'
import bodyParser from 'koa-bodyparser'
import session from 'koa-session'

import config from './configs/env.config'
import log from './utils/log'
import middleware from './middleware'
import { connectDatabase } from './utils/mongodb'
import passport from './configs/passport.config'

const port = config.port
const app = new Koa()


app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  log.info(`${ctx.method} ${decodeURIComponent(ctx.url)} ${ctx.status} - ${ms}ms`);
});

app.use(middleware())

app.proxy = true    
app.keys = ['123456']
app.use(session({key: "SESSIONID"},app))
app.use(bodyParser())
app.use(json())
app.use(passport.initialize())
app.use(passport.session())
app.use(router())
app.use(ctx => ctx.status = 404)

;(async () => {
  try {
    const db = await connectDatabase(config.mongoDB)
    log.info(`Connected to ${db.host}:${db.port}/${db.name}`)
    await app.listen(port, () => log.info(`Server started on port ${port}`))
  } catch(e) {
    log.error(e);
  }
})()

export default app