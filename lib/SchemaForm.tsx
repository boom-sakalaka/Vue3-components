/*
 * @Author: GZH
 * @Date: 2021-10-04 16:52:07
 * @LastEditors: GZH
 * @LastEditTime: 2021-10-04 17:09:54
 * @FilePath: \vue3-json-schema-form\lib\SchemaForm.tsx
 * @Description:
 */

import { defineComponent, PropType } from 'vue'
import { Schema, SchemaTypes } from './types'

export default defineComponent({
  name: 'SchemaForm',
  props: {
    schema: {
      type: Object as PropType<Schema>,
      required: true,
    },
    value: {
      required: true,
    },
    onChange: {
      type: Function as PropType<(v: any) => void>,
      required: true,
    },
  },
  setup(props) {
    return () => {
      const schema = props.schema
      const type = schema?.type
      switch (type) {
        case SchemaTypes.STRING: {
          return <input type="text" />
        }
      }
      return <div>this is div</div>
    }
  },
})
