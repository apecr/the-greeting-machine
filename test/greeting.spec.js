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
  it('Should greet anonymous users', () => {
    const greeting = greetingMachine.greet()

    expect(greeting).toBe('Hola, Mundo.')
  })
})