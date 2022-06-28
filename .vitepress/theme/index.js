import AxiosConfig from '../common/axios.config'
import BlogTest from './BlogTest.vue'

export default {
  Layout: BlogTest,
  enhanceApp({ app, router, siteData }) {
    app.config.globalProperties.$router = router
    app.use(AxiosConfig)
  }
}
