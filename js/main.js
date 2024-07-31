function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

delay(10000).then(() => console.log('выполнилось через 3 секунды'))
