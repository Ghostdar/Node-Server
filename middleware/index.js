export default ()=>{
    return async (ctx, next)=>{
        console.log('i am middleware');
        await next()
    };
}