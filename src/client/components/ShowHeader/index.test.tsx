import React from 'react';
import { render, screen } from '@testing-library/react';

import { ShowHeader } from '.';

const showHeader = {
    id: 123,
    name: 'Test show****',
    pictureUrl: 'https://example.com/test.png',
    synopsis: 'The test synopsis for the show',
    rating: 1.25,
};

describe('Show Header', () => {
    test('renders the header component', () => {
        render(<ShowHeader loading {...showHeader} />);
    });

    test('shows the details when not loading', () => {
        render(<ShowHeader {...showHeader} />);
        expect(screen.getByText(showHeader.name)).toBeInTheDocument();
        expect(screen.getByText(showHeader.synopsis)).toBeInTheDocument();
        expect(screen.getByText('1.3/5')).toBeInTheDocument();
    });
});
