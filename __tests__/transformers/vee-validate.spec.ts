import { validationFailRes } from '../../src'

it('returns an error response in vee-validate format',  () => {
  const expectedResponse = {
    status: 'fail',
    data: {
      password: [
        'Password must be at least 6 characters long',
        'Password must contain at least a number'
      ]
    }
  }
  const response = validationFailRes([
    {
      location: 'body',
      param: 'password',
      value: 'pass',
      msg: 'Password must be at least 6 characters long',
    },
    {
      location: 'body',
      param: 'password',
      value: 'pass',
      msg: 'Password must contain at least a number'
    }
  ])
  expect(response).toMatchObject(expectedResponse)
})
