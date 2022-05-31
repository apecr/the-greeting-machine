class GreetingMachine {
  greet(name) {
    if (this.isScreaming(name)){
      return this.screamGreeting(this.getGreetingByName(name))
    }
    return this.getGreetingByName(name)
  }

  isScreaming(name){
    return name && name === name.toUpperCase()
  }

  screamGreeting(greeting){
    return greeting.toUpperCase()
  }

  getGreetingByName(name){
    let greeting = `Hola, ${name}`
    if (this.isAnonymous(name)){
      greeting = 'Hola, Mundo'
    }
    if (this.isACouple(name)){
      const finalName = name.split(', ')
                        .reduce((acc, name) => {
                          if (this.isScreaming(name)){
                            return `${acc}. Y HOLA, ${name.toUpperCase()}!`
                          }
                          return `${acc} y ${name}`
                        })
      greeting = `Hola, ${finalName}`  
    }
    if (this.isAGroup(name)){
      const finalName = name.split(', ')
                        .reduce(this.reduceGroupNames)
      const namesLowerCase = name.split(', ').filter(name => name.toUpperCase() !== name)
      const namesUpperCase = name.split(', ').filter(name => name.toUpperCase() == name)
      console.log('namesLowerCase', namesLowerCase)
      console.log('namesUpperCase', namesUpperCase)
      console.log(namesUpperCase.reduce(this.reduceGroupScreaming, 'Y HOLA'))
      console.log(namesLowerCase.reduce(this.reduceGroupNormalLoud, 'Hola'))
      greeting = `Hola, ${finalName}`  
      if (namesLowerCase.length >= 1 && namesUpperCase.length >= 1){
        return `${namesLowerCase.reduce(this.reduceGroupNormalLoud, 'Hola')} ${namesUpperCase.reduce(this.reduceGroupScreaming, 'Y HOLA')}`
      }
    }
    return `${greeting}${this.getLastCharForGreeting(name)}`
  }
  
  reduceGroupScreaming(acc, name, currentIndex, names){
    if (currentIndex == names.length -1){
      return `${acc} Y ${name}!`
    }
    return `${acc}, ${name}`
  }

  reduceGroupNormalLoud(acc, name, currentIndex, names){
    if (currentIndex == names.length -1){
      return `${acc} y ${name}.`
    }
    return `${acc}, ${name}`
  }

  reduceGroupNames(acc, name, currentIndex, names) {
    if (currentIndex == names.length - 1){
      return `${acc}, y ${name}`
    }
    return `${acc}, ${name}`
  }

  getLastCharForGreeting(name){
    if (this.isScreaming(name)){
      return '!'
    }
    if (this.isACouple(name)){
      return ''
    }
    return '.'
  }

  isAnonymous(name){
    return !name
  }

  isACouple(name){
    return name && name.split(', ').length == 2
  }

  isAGroup(name){
    return name && name.split(', ').length > 2
  }
}

module.exports = GreetingMachine
