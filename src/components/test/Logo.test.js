import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Logo from '../Logo'

test('renders a message', () => {
  const { container, getByText } = render(<Logo/>);
  expect(getByText('Logo')).toBeInTheDocument()
  expect(container.firstChild).toMatchInlineSnapshot(`
    <h1>
      Logo
    </h1>
  `)
});