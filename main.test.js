const countVowelsAndConsonants = require('./main')

const str =
  'Google Translate is a multilingual neural machine translation service developed by Google to translate text'

describe('Return count of vowels and consonants in one string', () => {
  test("should return [ 'e', 12, 'l', 10 ]", () => {
    expect(countVowelsAndConsonants(str)).toStrictEqual(['e', 12, 'l', 10])
  })
})
