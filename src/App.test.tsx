import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('Renders the application', async () => {
    render(<App />);
    await waitFor(() => screen.getByTestId('grid-container'));
});
