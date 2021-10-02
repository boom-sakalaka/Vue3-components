/*
 * @Author: GZH
 * @Date: 2021-10-02 15:11:35
 * @LastEditors: GZH
 * @LastEditTime: 2021-10-02 18:25:43
 * @FilePath: \vue3-json-schema-form\src\App.tsx
 * @Description:
 */
import { withModifiers, defineComponent, ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

const App = defineComponent({
  setup() {
    const count = ref(0)

    const inc = () => {
      count.value++
    }

    return () => (
      <div onClick={withModifiers(inc, ['self'])}>
        {count.value}
        <HelloWorld />
      </div>
    )
  },
})

export default App
