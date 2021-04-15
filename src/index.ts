import { ValidationError } from 'express-validator'
import veeValidationTransformer from './transformers/vee-validate'

export enum JSendStatuses {
  success = 'success',
  fail = 'fail',
  error = 'error'
}

interface JSendResponse {
  status: JSendStatuses
  data: any
  message?: string
  code?: number
}

export const customRes = (status: JSendStatuses, data?: any, code?: number, message?: string): JSendResponse => ({
  status,
  data,
  code,
  message
})

export const successRes = (data?: any): JSendResponse => ({
  status: JSendStatuses.success,
  data
})

export const failRes = (data?: any): JSendResponse => ({
  status: JSendStatuses.fail,
  data
})

export const validationFailRes = (data: ValidationError[]): JSendResponse => ({
  status: JSendStatuses.fail,
  data: veeValidationTransformer(data)
})

export const errorRes = (
  message?: string,
  code?: number,
  data?: any
): JSendResponse => ({
  status: JSendStatuses.error,
  message: message || 'Internal server error',
  code: code || 500,
  data: data || null
})
