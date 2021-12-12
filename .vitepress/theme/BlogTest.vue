<template>
  <div>
    <Content />
    {{ content }}
    <div id="content" v-md-content="content" />
  </div>
</template>
<script>
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
    this.$post('/blog/get', {
      Article: { id: 1 }
    }).then(data => {
      this.content = data.Article.content
    })
  }
}
</script>
