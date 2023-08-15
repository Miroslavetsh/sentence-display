const FIRST_PART = 'I like to eat'

const log = (msg) => console.log(msg)

const addPrefix = (str) => FIRST_PART + str

const buildSentence = (str) => {
  log('so far so good')
  return ['apples', 'bananas', 'cookies'].reduce((acc, meal) => {
    log(acc)
    const step = acc + ' ' + meal
    return step
  }, str)
}

const placeSentence = (str) => {
  $('body').find('h1').text(str)
  return str
}

const ourSentence = ''

function GetSentence() {
  log('starting function')

  compose(addPrefix, buildSentence, placeSentence, log)(ourSentence)
}

GetSentence()
