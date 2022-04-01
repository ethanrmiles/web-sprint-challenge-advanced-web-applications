// Import the Spinner component into this file and test
import { render } from '@testing-library/react'
import Spinner from './Spinner'
import React from 'react'
// that it renders what it should for the different props it can take.
test('sanity', () => {
  expect(true).toBe(true)
})
test('Spinner renders', () => {
  const spinnerOn = true
  render(<Spinner on={spinnerOn}/>)
})
