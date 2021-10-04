<!--
 * @Author: GZH
 * @Date: 2021-10-04 18:24:16
 * @LastEditors: GZH
 * @LastEditTime: 2021-10-04 18:25:39
 * @FilePath: \vue3-json-schema-form\lib\fields\StringField.vue
 * @Description: 
-->
<template>
  <input type="text" :value="value" @input="handleChange" />
</template>

<script lang="ts" setup="props">
import { FiledPropsDefine, Schema } from '../types'

export default {
  props: FiledPropsDefine,
}

declare const props: {
  value: any
  onChange: (v: string) => void
  schame: Schema
}

export const handleChange = (e: any) => {
  console.log(e)
  props.onChange(e.target.value)
}
</script>
