import { Ishow, Inetwork, Icast, Ischedule } from 'tvmaze-api-ts';
import { CastListItem } from '../client/components/CastList';

import placeHolderImage from '../client/images/show_image_placeholder.png';

export interface showSummary {
    name: string;
    pictureUrl: string;
    rating: number;
}

export interface showInfo {
    streamedOn: string;
    schedule: string;
    status: string;
    genres: string[];
}

interface castMember {
    name: string;
    character: string;
    pictureURL?: string;
}

export interface castInfo {
    members: castMember[];
}

export interface showDetails extends showSummary, showInfo, castInfo {
    id: number;
    loading?: boolean;
    synopsis: string;
}

const scheduleTransformer = (schedule: Ischedule): string => {
    if (!schedule) return '';
    return schedule.days.join(', ');
};

const streamedOnTransformer = (streamedOn: Inetwork | undefined): string => {
    if (!streamedOn) return '';
    return streamedOn.name || '';
};

const castMemberTransformer = (member: Icast): CastListItem => {
    const pictureURL = member?.person?.image?.medium || '';
    return {
        name: member?.person?.name || '',
        character: member?.character?.name || '',
        pictureURL,
    };
};

const showTransformer = (show: Ishow): showDetails => {
    const { name } = show;
    const pictureUrl = show?.image?.original || placeHolderImage;
    const rating = show?.rating?.average || 0;
    const synopsis = show.summary;

    const { genres, status } = show;

    return {
        id: show.id,
        loading: false,
        name, // : `${name} (${show.id})`,
        pictureUrl,
        rating: rating ? rating / 2 : 0,
        synopsis,
        streamedOn: streamedOnTransformer(show.network),
        schedule: scheduleTransformer(show.schedule),
        status,
        genres,
        members: show?._embedded?.cast?.map(castMemberTransformer) || [],
    };
};

export default showTransformer;
