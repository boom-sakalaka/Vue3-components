/*
 * @Author: GZH
 * @Date: 2021-10-05 16:23:15
 * @LastEditors: GZH
 * @LastEditTime: 2021-10-05 16:36:42
 * @FilePath: \vue3-json-schema-form\lib\fields\ObjectField.tsx
 * @Description:
 */
import { defineComponent } from 'vue'

import { FiledPropsDefine } from '../types'

// import SchemaItem from '../SchemaItems'

// console.log(SchemaItem)

export default defineComponent({
  name: 'ObjectField',
  props: FiledPropsDefine,
  setup() {
    return () => {
      return <div>Object Field</div>
    }
  },
})
