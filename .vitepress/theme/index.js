import AxiosConfig from '../common/axios.config'
import BlogTest from './BlogTest.vue'

export default {
  Layout: BlogTest,
  enhanceApp({ app, router, siteData }) {
    app.use(AxiosConfig)
  }
}
