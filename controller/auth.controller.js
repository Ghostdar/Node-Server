import UserModel from '../models/user.model';
import passport from '../configs/passport.config';

export default {
    login: async (ctx) => {
        // 会调用策略
        return passport.authenticate('local',
          function(err, user, info, status) {
            ctx.body = {user, err, info, status}
            return ctx.login({id: 1, username: 'admin', password: '123456'})
          })(ctx)
      },
    logout: async (ctx) => {
        ctx.logout()
        ctx.body = {auth: ctx.isAuthenticated(), user: ctx.state.user}
      },
}