import { useState } from 'react';
import { search as DomainSearch, schedule as DomainSchedule, getShow as DomainGetShow } from '../domain/tvmaze';

import type { showSummary } from '../transformer/searchTransformer';
import type { showDetails } from '../transformer/showTransformer';

interface useDataReturn {
    loading: boolean;
    shows: showSummary[];
    search: (query: string) => void;
    schedule: () => void;
    show: showDetails;
    getShow: (showId: string) => void;
}

const dummyShowData = {
    loading: true,
    id: 0,
    name: '',
    synopsis: '',
    rating: 0,
    pictureUrl: '',
    streamedOn: '',
    schedule: '',
    status: '',
    genres: [],
    members: [],
};

const useData = (): useDataReturn => {
    const [loading, setLoading] = useState(false);
    const [shows, setShows] = useState<showSummary[]>([]);
    const [show, setShow] = useState<showDetails>(dummyShowData);

    const search = async (query: string) => {
        setShows([]);
        setLoading(true);
        DomainSearch(query).then((data) => {
            setShows(data);
            setLoading(false);
        });
    };

    const schedule = async () => {
        DomainSchedule().then((data) => {
            setShows(data);
            setLoading(false);
        });
        setShows([]);
        setLoading(true);
    };

    const getShow = (showId: string) => {
        setLoading(true);
        DomainGetShow(showId).then((data) => {
            setShow({ ...dummyShowData, ...data });
            setLoading(false);
        });
    };

    return { loading, shows, search, show, getShow, schedule };
};

export default useData;
