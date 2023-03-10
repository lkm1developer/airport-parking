import { render, screen, fireEvent, waitFor,act } from '@testing-library/react';
// import userEvent from '@testing-library/user-event'
import userEvent from '@testing-library/user-event';
import React from 'react'
import App from './App'
import {BrowserRouter, MemoryRouter} from 'react-router-dom'
import Header from './component/Header';
import Footer from './component/Footer';
import HomePage from './pages/Home';

test('Homepage component test', () => {
  render(<HomePage />);
  const linkElement = screen.getByText(/SAVE BIG ON AIRPORT PARKING/i);
  expect(linkElement).toBeInTheDocument();
});
test('Homepage content', () => {
  const { getByLabelText, getByTestId, getByText } = render(<HomePage />);
  const greeting = getByText('SAVE BIG ON AIRPORT PARKING');
  const checkIn = getByText('Parking Check-In');
  const checkOut = getByText('Parking Check-Out');
  expect(greeting.textContent).toBe("SAVE BIG ON AIRPORT PARKING")
  expect(checkIn.textContent).toBe("Parking Check-In")
  expect(checkOut.textContent).toBe("Parking Check-Out")
});

test('test Footer home link', () => {
  const { getByPlaceholderText } = render(<Footer />);
  expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/')
});
// test('test Header my account link', () => {
//   // const { getByText } = render(<Header />);
//   // expect(screen.getByText(/Login/i)).toBeInTheDocument()
// });

test('Departure Airport change value', () => {
  const { getByPlaceholderText } = render(<HomePage />);
  const input = getByPlaceholderText('Departure Airport');
  fireEvent.change(input, { target: { value: '123' } })
  const inputChanged = getByPlaceholderText('Departure Airport');
  expect(inputChanged.value).toBe('123')
});

test('Test Form empty submit', async () => {
  const { container, getByPlaceholderText, getByText, findByText, queryByText } = render(<HomePage />);

  expect(queryByText(/Invalid Departure Airport/i)).not.toBeInTheDocument()
  expect(queryByText(/Invalid checkin Date/i)).not.toBeInTheDocument()
  expect(queryByText(/Invalid checkout Date/i)).not.toBeInTheDocument()
  const button = screen.getByRole('button', {
    name: /SEARCH/i,
  })
  fireEvent.click(button)
  expect(await screen.getByText(/Invalid Departure Airport/i)).toBeVisible()
  // expect(await screen.getByText(/Invalid checkin Date/i)).toBeVisible()
  // expect(await screen.getByText(/Invalid checkout Date/i)).toBeVisible()
  const inputEl1 = getByPlaceholderText('Departure Airport');
  fireEvent.change(inputEl1, { target: { value: '123' } })
  const inputEl2 = getByPlaceholderText(/Parking Check-In/i);
  fireEvent.change(inputEl2, { target: { value: '2020-05-12' } })
  const inputEl3 = getByPlaceholderText(/Parking Check-Out/i);
  fireEvent.change(inputEl3, { target: { value: '2020-05-11' } })
  fireEvent.click(button)
  expect(queryByText(/Invalid Departure Airport/i)).not.toBeInTheDocument()
  expect(queryByText(/Invalid checkin Date/i)).not.toBeInTheDocument()
  expect(queryByText(/Invalid checkout Date/i)).toBeInTheDocument()

});

test('full app rendering/navigating', async () => {
  render(<App />)
  const user = userEvent.setup();

  // verify page content for default route
  expect(screen.getByText(/SAVE BIG ON AIRPORT PARKING/i)).toBeInTheDocument()

  // verify page content for expected route after navigating
  await user.click(screen.getByText(/login/i))
  expect(screen.getByText(/Login Demo Page/i)).toBeInTheDocument()
})

test('get airports from api', async () => {
  const {getByPlaceholderText, getByText, findByText, queryByText } = render(<HomePage />);
  await act(async () => {
    await waitFor(() => expect(getByText('loading..')).toBeTruthy())
    await new Promise((r) => setTimeout(r, 2000));
  })

  const inputEl1 = getByPlaceholderText('Departure Airport');
  fireEvent.change(inputEl1, { target: { value: 'at' } })
  const arr =['Atlanta','Atlantic City International Airport']
  for (const iterator of arr) {
    const a = queryByText(iterator)
    const content =(a.textContent).toLowerCase()
    console.log(content)
    expect(content).toBe(iterator.toLowerCase())
  }


});