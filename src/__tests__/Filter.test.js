import { render, screen, fireEvent } from '@testing-library/react';
import Filter from '../components/Filter'; // Adjust path if needed

// Test to check if the search prop is displayed in the input field
test('uses a prop of search to display the search term in the input field', () => {
  render(<Filter search="testing" onSearchChange={() => {}} onCategoryChange={() => {}} />);
  expect(screen.getByPlaceholderText(/Search/).value).toBe("testing");
});

// Test to check if onSearchChange callback is called when input changes
test('calls the onSearchChange callback prop when the input is changed', () => {
  const onSearchChange = jest.fn();
  render(<Filter search="" onSearchChange={onSearchChange} onCategoryChange={() => {}} />);
  
  fireEvent.change(screen.getByPlaceholderText(/Search/), { target: { value: 'new value' } });

  expect(onSearchChange).toHaveBeenCalled();
  expect(onSearchChange).toHaveBeenCalledWith('new value');
});
