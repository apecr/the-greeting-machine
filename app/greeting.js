class GreetingMachine {
  greet(name) {
    if (this.isAnonymous(name)){
      return 'Hola, Mundo.'
    }
    if (this.isScreaming(name)){
      return this.screamGreeting(this.getGreetingByName(name))
    }
    return this.getGreetingByName(name)
  }

  isScreaming(name){
    return name === name.toUpperCase()
  }

  screamGreeting(greeting){
    return greeting.toUpperCase()
  }

  getGreetingByName(name){
    return `Hola, ${name}.`
  }

  isAnonymous(name){
    return !name
  }
}

module.exports = GreetingMachine
