<script>
import { defineComponent } from 'vue'

export default defineComponent({
  directives: {
    mdContent: {
      mounted(el, binding, vnode, prevNode) {
        console.log('el', el)
        console.log('binding', binding)
        console.log('vnode', vnode)
        console.log('prevNode', prevNode)
        if (!el.id) {
          throw new Error('v-md-content 命令需要指定标签id')
        }
      },
      beforeUpdate(el, binding, vnode, prevNode) {
        // console.log(binding.value)
      }
    }
  }
})

</script>
