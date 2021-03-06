/*
 * @Author: GZH
 * @Date: 2021-10-05 16:23:15
 * @LastEditors: GZH
 * @LastEditTime: 2021-10-05 17:24:25
 * @FilePath: \vue3-json-schema-form\lib\fields\ObjectField.tsx
 * @Description:
 */
import { defineComponent, inject } from 'vue'

import { FiledPropsDefine } from '../types'

import { SchemaFormContextKey } from '../context'

// import SchemaItem from '../SchemaItems'

// console.log(SchemaItem)

export default defineComponent({
  name: 'ObjectField',
  props: FiledPropsDefine,
  setup() {
    const context: any = inject(SchemaFormContextKey)

    return () => {
      const { SchemaItem } = context

      return <div>Object Field</div>
    }
  },
})
