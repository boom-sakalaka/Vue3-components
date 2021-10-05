/*
 * @Author: GZH
 * @Date: 2021-10-04 18:07:09
 * @LastEditors: GZH
 * @LastEditTime: 2021-10-05 15:01:54
 * @FilePath: \vue3-json-schema-form\lib\fields\NumberField.tsx
 * @Description:
 */
import { FiledPropsDefine } from '../types'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NumberFeild',
  props: FiledPropsDefine,
  setup() {
    return () => <div>Number field</div>
  },
})
