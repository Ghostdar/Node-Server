import AppModel from '../models/app.model';

export default {
    getApp: async (ctx)=>{
        var search = {'name' : 'Tracy McGrady'};
        let message = await AppModel.find(search).exec()
        return ctx.body = {
            status:200,
            moduls:'getApp',
            message:message
        }
    },
    addApp: async (ctx) =>{
        let param = ctx.request.body;
        if(param){
            console.log(param);
        }

        let app = new AppModel({
            jsonType : 'Tracy McGrady',             
            age: 37,                               
            class : 1                    
        });
        let message;
        // if(await app.save()){
        //     message = 'success'
        // }else{
        //     message = await app.save()
        // }

        return  ctx.body = {
            status:200,
            moduls:'addApp',
            message:message
        }
    },
}