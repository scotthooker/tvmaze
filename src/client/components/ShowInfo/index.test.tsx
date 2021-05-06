import React from 'react';
import { render, screen } from '@testing-library/react';

import { ShowInfo } from '.';

const showInfo = {
    streamedOn: 'Testing service',
    schedule: 'Intermittently',
    status: 'TestingStatus',
    genres: ['genre1', 'genres2'],
};

describe('Show Info', () => {
    test('renders the info component', () => {
        render(<ShowInfo loading {...showInfo} />);
    });

    test('shows the number when a value is passed', () => {
        render(<ShowInfo {...showInfo} />);
        expect(screen.getByText(showInfo.streamedOn)).toBeInTheDocument();
        expect(screen.getByText(showInfo.schedule)).toBeInTheDocument();
        expect(screen.getByText(showInfo.status)).toBeInTheDocument();
        expect(screen.getByText(showInfo.genres.join(', '))).toBeInTheDocument();
    });
});
