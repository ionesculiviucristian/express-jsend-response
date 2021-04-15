import { ValidationError } from 'express-validator'

interface IVeeValidateError {
  [key: string]: string[]
}

export default (data: ValidationError[]): IVeeValidateError =>
  data.reduce((acc: IVeeValidateError, cur: ValidationError) => ({
    ...acc,
    [cur.param]: [...(acc[cur.param] || []), cur.msg]
  }), {})
