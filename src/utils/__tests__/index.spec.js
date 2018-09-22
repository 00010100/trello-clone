import { isRealString } from '../index';

describe('utils (isRealString):', () => {
  it('should return format string', () => {
    expect(isRealString('string')).toBeTruthy();
    expect(isRealString('   string   ')).toBeTruthy();
    expect(isRealString('   ')).toBeFalsy();
    expect(isRealString(23)).toBeFalsy();
    expect(isRealString(undefined)).toBeFalsy();
  });
});
