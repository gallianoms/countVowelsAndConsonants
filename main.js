// Count vowels and consonants in one string

const str =
  'Google Translate is a multilingual neural machine translation service developed by Google to translate text'

const func = str => {
  const vowels = str
    .toLowerCase()
    .match(/[aeiou]/g)
    .reduce((acc, char) => {
      acc[char] = (acc[char] ?? 0) + 1
      return acc
    }, {})

  const vowelMoreRepeated = Object.entries(vowels)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 1)
    .flat()

  const consonants = str
    .toLowerCase()
    .replace(/\s+/g, '')
    .match(/[^aeiou]/g)
    .reduce((acc, char) => {
      acc[char] = (acc[char] ?? 0) + 1
      return acc
    }, {})

  const consonantsMoreRepeated = Object.entries(consonants)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 1)
    .flat()

  return vowelMoreRepeated.concat(consonantsMoreRepeated)
}

console.log(func(str)) // [ 'e', 12, 'l', 10 ]
