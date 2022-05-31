const GreetingMachine = require('../app/greeting.js')

describe('The greeting machine', () => {
  let greetingMachine
  beforeEach(() => {
    greetingMachine = new GreetingMachine()
  })
  it('Should generate greeting', () => {
    const greeting = greetingMachine.greet('Alberte')

    expect(greeting).toBe('Hola, Alberte.')
  })
  it('Should generate greeting for any user', () => {
    const greeting = greetingMachine.greet('Francisco')

    expect(greeting).toBe('Hola, Francisco.')
  })
  it('Should greet anonymous users', () => {
    const greeting = greetingMachine.greet()

    expect(greeting).toBe('Hola, Mundo.')
  })
  it('Should greet anonymous users string empty', () => {
    const greeting = greetingMachine.greet('')

    expect(greeting).toBe('Hola, Mundo.')
  })
  it('Should scream when name is uperCase', () => {
    const greeting = greetingMachine.greet('PEPA')

    expect(greeting).toBe('HOLA, PEPA!')
  })
  it('Should greet a couple', () => {
    const greeting = greetingMachine.greet('Ana, Bartolo')

    expect(greeting).toBe('Hola, Ana y Bartolo')
  })

  it('Should greet several persons', () => {
    const greeting = greetingMachine.greet('Ana, Bartolo, Carlota, Daniel')

    expect(greeting).toBe('Hola, Ana, Bartolo, Carlota, y Daniel.')
  })

  it('Couple one normal and one screaming', () => {
    const greeting = greetingMachine.greet('Ana, BARTOLO')

    expect(greeting).toBe('Hola, Ana. Y HOLA, BARTOLO!')
  })

  it('Couple several normal and several screaming', () => {
    const greeting = greetingMachine.greet('Ana, BARTOLO, Carlota, DANIEL')

    expect(greeting).toBe('Hola, Ana y Carlota. Y HOLA, BARTOLO Y DANIEL!')
  })
})