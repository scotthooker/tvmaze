import React from 'react';
import { render, screen } from '@testing-library/react';

import { ShowRating } from '.';

describe('Show Rating', () => {
    test('renders the rating component', () => {
        render(<ShowRating />);
    });

    test('shows the number when a value is passed', () => {
        render(<ShowRating showValue rating={1.0} />);
        expect(screen.getByText('1.0/5')).toBeInTheDocument();
    });
});
