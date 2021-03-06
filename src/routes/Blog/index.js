import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'blog',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Blog = require('./containers/BlogContainer').default
      const reducer = require('./modules/blog').default

      /*  Add the reducer to the store on key 'blog'  */
      injectReducer(store, { key: 'blog', reducer })

      /*  Return getComponent   */
      cb(null, Blog)

    /* Webpack named bundle   */
    }, 'blog')
  }
})
