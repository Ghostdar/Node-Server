import UserModel from '../models/user.model';

export default {
    getUser: async (ctx)=>{
        var search = {'name' : 'Tracy McGrady'};
        let message = await AppModel.find(search).exec()
        return ctx.body = {
            status:200,
            moduls:'getApp',
            message:message
        }
    },
    addUser: async (ctx) =>{
        let param = ctx.request.body;
        if(param){
            console.log(param);
        }
        let app = new UserModel({
            username : 'Tracy McGrady',             
            password: '123456',                                                  
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