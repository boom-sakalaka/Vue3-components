/*
 * @Author: GZH
 * @Date: 2021-10-04 17:52:39
 * @LastEditors: GZH
 * @LastEditTime: 2021-10-05 15:02:42
 * @FilePath: \vue3-json-schema-form\lib\SchemaItems.tsx
 * @Description:
 */
import { defineComponent, PropType } from 'vue'

import { Schema, SchemaTypes } from './types'
import StringField from './fields/StringField'
// import StringField from './fields/StringField.vue'
import NumberField from './fields/NumberField'

export default defineComponent({
  name: 'SchemaItem',
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
      const { schema } = props

      // TODO: 如果type没有指定，我们需要猜测这个type

      const type = schema.type

      let Component: any

      switch (type) {
        case SchemaTypes.STRING: {
          Component = StringField
          break
        }
        case SchemaTypes.NUMBER: {
          Component = NumberField
          break
        }
        default: {
          console.warn(`${type} is not supported`)
        }
      }

      return <Component {...props} />
    }
  },
})
