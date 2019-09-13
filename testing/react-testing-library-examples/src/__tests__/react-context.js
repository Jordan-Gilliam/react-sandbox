import React from 'react'
import {render} from '@testing-library/react'
import {NameContext, NameProvider, NameConsumer} from '../react-context'

/**
 * Test default values by rendering a context consumer without a
 * matching provider
 */
test('NameConsumer shows default value', () => {
  const {getByText, unmount} = render(<NameConsumer />)
  expect(getByText(/^My Name Is:/)).toHaveTextContent('My Name Is: Unknown')
})

/**
 * To test a component tree that uses a context consumer but not the provider,
 * wrap the tree with a matching provider
 */
test('NameConsumer shows value from provider', () => {
  const {getByText} = render(
    <NameContext.Provider value="C3P0">
      <NameConsumer />
    </NameContext.Provider>,
  )
  expect(getByText(/^My Name Is:/)).toHaveTextContent('My Name Is: C3P0')
})

/**
 * To test a component that provides a context value, render a matching
 * consumer as the child
 */
test('NameProvider composes full name from first, last', () => {
  const {getByText} = render(
    <NameProvider first="Boba" last="Fett">
      <NameContext.Consumer>
        {value => <span>Received: {value}</span>}
      </NameContext.Consumer>
    </NameProvider>,
  )
  expect(getByText(/^Received:/).textContent).toBe('Received: Boba Fett')
})

/**
 * A tree containing both a providers and consumer can be rendered normally
 */
test('NameProvider/Consumer shows name of character', () => {
  const {getByText} = render(
    <NameProvider first="Leia" last="Organa">
      <NameConsumer />
    </NameProvider>,
  )
  expect(getByText(/^My Name Is:/).textContent).toBe('My Name Is: Leia Organa')
})
