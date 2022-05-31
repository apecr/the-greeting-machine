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
    const finalName = name.split(', ')
                        .reduce((acc, name) => `${acc} y ${name}`)
    return `Hola, ${finalName}.`
  }

  isAnonymous(name){
    return !name
  }
}

module.exports = GreetingMachine
