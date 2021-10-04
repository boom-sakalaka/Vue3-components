/*
 * @Author: GZH
 * @Date: 2021-10-03 18:47:53
 * @LastEditors: GZH
 * @LastEditTime: 2021-10-04 13:30:40
 * @FilePath: \vue3-json-schema-form\schema-tests\test1.js
 * @Description:
 */
// const Ajv = require('ajv')
// const localize = require('ajv-i18n')
// const ajv = new Ajv({ allErrors: true, jsonPointers: true }) // options can be passed, e.g. {allErrors: true}

// require('ajv-errors')(ajv)
// const schema = {
//   type: 'object',
//   properties: {
//     foo: { type: 'integer' },
//     bar: { type: 'string' },
//   },
// }

// const validate = ajv.compile(schema)

// const data = {
//   foo: '11',
//   bar: '2',
// }

// const valid = validate(data)
// if (!valid) {
//   localize.zh(validate.errors)
//   // string with all errors and data paths
//   // console.log(ajv.errorsText(validate.errors, { separator: '\n' }))
//   console.log(validate.errors)
// }

const Ajv = require('ajv').default
const ajv = new Ajv({ allErrors: true })
// Ajv option allErrors is required
require('ajv-errors')(ajv /*, {singleError: true} */)

const schema = {
  type: 'object',
  required: ['foo', 'bar'],
  allOf: [
    {
      properties: {
        foo: { type: 'integer', minimum: 2 },
        bar: { type: 'string', minLength: 2 },
      },
      additionalProperties: false,
    },
  ],
  errorMessage: {
    properties: {
      foo: 'data.foo should be integer >= 2',
      bar: 'data.bar should be string with length >= 2',
    },
  },
}

const validate = ajv.compile(schema)
console.log(validate({ foo: 'a', bar: 2 })) // false
console.log(validate.errors) // processed errors
