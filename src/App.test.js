import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Airport Parking Only/i);
  expect(linkElement).toBeInTheDocument();
});
test('displays the correct greeting', () => {
  const { getByLabelText, getByTestId,getByText } = render(<App />);
  const greeting = getByText('Airport Parking Only');
  expect(greeting.textContent).toBe("Airport Parking Only")
});
// test('displays the correct Time', () => {
//   const { getByLabelText, getByTestId,getByText } = render(<App />);
//   const greeting = getByText('Time');
//   expect(greeting.textContent).toBe("Time")
// });