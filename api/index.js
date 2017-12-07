import Router from 'koa-router'
import importDir from 'import-dir'
const controller = importDir('../controller');
const prefix = '/api';


export default ()=>{
    const router = new Router();
    router.use('/api/*',(ctx,next)=>{
      if(ctx.isAuthenticated()){
        next()
      }else{
        ctx.status = 200
        ctx.body = 'auth failed'
      }
    })
    //APP
    router
      .post('/login',controller['auth.controller'].login)
      .get('logout',controller['auth.controller'].logout)
      .get('/api/getapp', controller['app.controller'].getApp)
      .post('/api/addapp',controller['app.controller'].addApp)
      .get('/api/getuser', controller['user.controller'].getUser)
      .post('/api/adduser',controller['user.controller'].addUser)
    return router.routes();
}