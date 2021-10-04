/*
 * @Author: GZH
 * @Date: 2021-10-03 18:47:53
 * @LastEditors: GZH
 * @LastEditTime: 2021-10-04 12:03:42
 * @FilePath: \vue3-json-schema-form\schema-tests\test1.js
 * @Description:
 */
const Ajv = require('ajv')
const localize = require('ajv-i18n')
const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}

const schema = {
  type: 'object',
  properties: {
    foo: { type: 'integer' },
    bar: { type: 'string' },
  },
  required: ['foo'],
  additionalProperties: false,
}

const validate = ajv.compile(schema)

const data = {
  foo: 'jj',
  bar: '2',
}

const valid = validate(data)
if (!valid) {
  localize.zh(validate.errors)
  // string with all errors and data paths
  // console.log(ajv.errorsText(validate.errors, { separator: '\n' }))
  console.log(validate.errors)
}
