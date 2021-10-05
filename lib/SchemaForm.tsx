/*
 * @Author: GZH
 * @Date: 2021-10-04 16:52:07
 * @LastEditors: GZH
 * @LastEditTime: 2021-10-05 15:24:41
 * @FilePath: \vue3-json-schema-form\lib\SchemaForm.tsx
 * @Description:
 */

import { defineComponent, PropType } from 'vue'

import { Schema } from './types'

import SchemaItem from './SchemaItems'

export default defineComponent({
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
  name: 'SchemaForm',
  setup(props) {
    const handleChange = (v: any) => {
      props.onChange(v)
    }

    return () => {
      const { schema, value } = props
      return (
        <SchemaItem
          schema={schema}
          rootSchema={schema}
          value={value}
          onChange={handleChange}
        />
      )
    }
  },
})
