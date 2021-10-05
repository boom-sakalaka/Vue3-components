<!--
 * @Author: GZH
 * @Date: 2021-10-04 18:24:16
 * @LastEditors: GZH
 * @LastEditTime: 2021-10-05 12:20:19
 * @FilePath: \vue3-json-schema-form\lib\fields\StringField.vue
 * @Description: 
-->
<template>
  <input type="text" :value="value" @input="handleChange" />
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { FiledPropsDefine, Schema } from '../types'

const props = defineProps(FiledPropsDefine)

const handleChange = (e: any): void => {
  console.log(e)
  props.onChange(e.target.value)
}
</script>
