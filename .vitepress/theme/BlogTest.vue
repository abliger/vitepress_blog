<template>
  <div>
    <Content />
    <div id="content" v-md-content="content" />
  </div>
</template>
<script lang="jsx">
import MdContent from './MdContent.vue'

export default {
  name: 'BlogTest',
  mixins: [MdContent],
  data() {
    return {
      content: null
    }
  },
  created() {
    this.$router.go('test').then(() => {
      console.log(this.$router.route.component)
      this.$router.route.component = () => <h1>test</h1>
      console.log(this.$router.route.component)
      console.log(this.$router)
    })
    this.$post('/blog/get', {
      Article: { id: 1 }
    }).then(data => {
      this.content = data.Article.content
    })
  }
}
</script>
