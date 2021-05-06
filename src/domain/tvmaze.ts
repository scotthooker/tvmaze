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

export const schedule = (): Promise<showSummary[]> => {
    return tvmaze.schedule('GB', '2021-05-04').then((data) => data.map(scheduleTransformer));
    // return tvmaze.schedule('GB').then((data) => console.log);
};
