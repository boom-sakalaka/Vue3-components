/*
 * @Author: GZH
 * @Date: 2021-10-02 15:11:35
 * @LastEditors: GZH
 * @LastEditTime: 2021-10-04 14:31:04
 * @FilePath: \vue3-json-schema-form\src\App.tsx
 * @Description:
 */
import { defineComponent, ref, Ref } from 'vue'

import { createUseStyles } from 'vue-jss'

import MonacoEditor from './components/MonacoEditor'
function toJson(data: unknown) {
  return JSON.stringify(data, null, 2)
}

const schema = {
  type: 'string',
}

const useSytles = createUseStyles({
  editor: {
    minHeight: 400,
  },
})

const App = defineComponent({
  setup() {
    const shemaRef: Ref<unknown> = ref(schema)
    const handelCodeChange = (code: string) => {
      let shema: unknown
      try {
        shema = JSON.parse(code)
      } catch (err) {
        console.warn(err)
      }
      shemaRef.value = shema
    }
    const classesRef = useSytles()
    return () => {
      const calsses = classesRef.value

      const code = toJson(shemaRef.value)

      return (
        <div>
          <MonacoEditor
            code={code}
            onChange={handelCodeChange}
            title="Schema"
            class={calsses.editor}
          />
        </div>
      )
    }
  },
})

export default App
