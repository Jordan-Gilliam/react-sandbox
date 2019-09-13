// watch me write this test in 16 minutes on YouTube:
//   https://www.youtube.com/watch?v=dxWrHEOD5DU&list=PLV5CVI1eNcJgCrPH_e6d57KRUTiDZgs0u
import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import {reportError} from '../utils'
import {BombButton} from '../component-did-catch'

jest.mock('../utils', () => {
  return {
    reportError: jest.fn(() => Promise.resolve({success: true})),
  }
})

beforeEach(() => {
  // when the error's thrown a bunch of console.errors are called even though
  // the error boundary handles the error. This makes the test output noisy,
  // so we'll mock out console.error
  jest.spyOn(console, 'error')
  console.error.mockImplementation(() => {})
})

afterEach(() => {
  console.error.mockRestore()
})

test('calls reportError and renders that there was a problem', () => {
  // Arrange
  const {getByText, container} = render(<BombButton />)

  // Act
  fireEvent.click(getByText('💣'))

  // Assert
  expect(reportError).toHaveBeenCalledTimes(1)
  const error = expect.any(TypeError)
  const info = {componentStack: expect.stringContaining('BombButton')}
  expect(reportError).toHaveBeenCalledWith(error, info)

  expect(container).toHaveTextContent('There was a problem')

  // by mocking out console.error we may inadvertantly be missing out on logs
  // in the future that could be important, so let's reduce that liklihood by
  // adding an assertion for how frequently console.error is called.
  expect(console.error).toHaveBeenCalledTimes(2)
})
