import { testUtils } from '../src/utils/Utils'

describe('Utils', () => {
  describe('testUtil', () => {
    it('should return the correct value', () => {
      expect(testUtils()).toEqual('test')
    })
  })
})
