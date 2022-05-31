class GreetingMachine {
  greet(name) {
    if (name === undefined){
      return 'Hola, Mundo.'
    }
    return `Hola, ${name}.`
  }
}

module.exports = GreetingMachine
