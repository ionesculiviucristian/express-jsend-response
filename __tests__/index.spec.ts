import { customRes, successRes, failRes, errorRes, JSendStatuses } from '../src'

describe('Response types', () => {
  it('returns a custom response',  () => {
    const expectedResponse = {
      status: 'success',
      data: {
        id: 1
      },
      code: 200,
      message: 'Saved'
    }
    const response = customRes(JSendStatuses.success, { id: 1 }, 200, 'Saved')
    expect(response).toMatchObject(expectedResponse)
  })

  it('returns a success response',  () => {
    const expectedResponse = {
      status: 'success',
      data: {
        message: 'save successful'
      }
    }
    const response = successRes({
      message: 'save successful'
    })
    expect(response).toMatchObject(expectedResponse)
  })

  it('returns a fail response',  () => {
    const expectedResponse = {
      status: 'fail',
      data: {
        message: 'save failed'
      }
    }
    const response = failRes({
      message: 'save failed'
    })
    expect(response).toMatchObject(expectedResponse)
  })

  it('returns a default error response',  () => {
    const expectedResponse = {
      status: 'error',
      code: 500,
      message: 'Internal server error'
    }
    const response = errorRes()
    expect(response).toMatchObject(expectedResponse)
  })

  it('returns a custom error response',  () => {
    const expectedResponse = {
      status: 'error',
      code: 500,
      message: 'error saving'
    }
    const response = errorRes('error saving')
    expect(response).toMatchObject(expectedResponse)
  })
})
