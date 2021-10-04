/*
 * @Author: GZH
 * @Date: 2021-10-03 18:47:53
 * @LastEditors: GZH
 * @LastEditTime: 2021-10-04 11:12:45
 * @FilePath: \vue3-json-schema-form\schema-tests\test1.js
 * @Description:
 */
// const Ajv = require('ajv')
// const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}

// const schema = {
//   type: 'object',
//   properties: {
//     foo: { type: 'integer' },
//     bar: { type: 'string' },
//   },
//   required: ['foo'],
//   additionalProperties: false,
// }

// const validate = ajv.compile(schema)

// const data = {
//   foo: '1',
//   bar: 'abc',
// }

// const valid = validate(data)
// if (!valid) console.log(validate.errors)

const Ajv = require('ajv/dist/jtd')
const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}

const schema = {
  properties: {
    foo: { type: 'int32' },
  },
  optionalProperties: {
    bar: { type: 'string' },
  },
}

const validate = ajv.compile(schema)

const data = {
  foo: 1,
  bar: 'abc',
}

const valid = validate(data)
if (!valid) console.log(validate.errors)
