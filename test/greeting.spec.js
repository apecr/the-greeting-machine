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

    expect(greeting).toBe('HOLA, PEPA.')
  })
})