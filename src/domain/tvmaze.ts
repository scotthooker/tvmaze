import { tvmaze } from 'tvmaze-api-ts';
import searchTransformer, { showSummary } from '../transformer/searchTransformer';
import showTransformer, { showDetails } from '../transformer/showTransformer';
import scheduleTransformer from '../transformer/scheduleTransformer';

export const search = (query: string): Promise<showSummary[]> => {
    return tvmaze.search.shows(query).then((data) => data.map(searchTransformer));
};

export const getShow = (showId: string): Promise<showDetails> => {
    return tvmaze.shows.get(showId, ['cast']).then(showTransformer);
};

export const schedule = (chosenDate?: string): Promise<showSummary[]> => {
    const date = new Date();
    const today = date.toISOString().substring(0, 10);
    const dateParam = chosenDate || today;
    return tvmaze.schedule('GB', dateParam).then((data) => data.map(scheduleTransformer));
};
