import { Ishow } from 'tvmaze-api-ts';
import placeHolderImage from '../client/images/show_image_placeholder.png';

interface searchResult {
    score: number;
    show: Ishow;
}

export interface showSummary {
    id: number;
    name: string;
    pictureUrl?: string;
    rating: number;
}

const searchTransformer = (result: searchResult): showSummary => {
    const { show } = result;
    const { name } = show;
    const pictureUrl = show?.image?.original || placeHolderImage;
    const rating = show?.rating?.average;

    return {
        id: show.id,
        name, // : `${name} (${show.id})`,
        pictureUrl,
        rating: rating ? rating / 2 : 0,
    };
};

export default searchTransformer;
