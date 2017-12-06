import Router from 'koa-router'
import importDir from 'import-dir'
const controller = importDir('../controller');
const prefix = '/api';


export default ()=>{
    const router = new Router({prefix});
    //APP
    router
      .get('/getapp', controller['app.controller'].getApp)
      .post('/addapp',controller['app.controller'].addApp)
    return router.routes();
}