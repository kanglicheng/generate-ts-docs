import { ParameterData } from '../types'

export function createFunctionTitle(
  name: string,
  parametersData: Array<ParameterData>
): string {
  const parameters = parametersData.map(function ({ name }: ParameterData) {
    return name
  })
  const firstOptionalIndex = parametersData.findIndex(function ({
    optional
  }: ParameterData) {
    return optional === true
  })
  if (firstOptionalIndex === -1) {
    return `${name}(${parameters.join(', ')})`
  }
  const requiredParameters = parameters.slice(0, firstOptionalIndex)
  const optionalParameters = parameters.slice(firstOptionalIndex)
  return `${name}(${requiredParameters.join(', ')} [, ${optionalParameters.join(
    ', '
  )}])`
}
