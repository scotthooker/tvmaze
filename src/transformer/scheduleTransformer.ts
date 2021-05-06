import { IscheduleItem } from 'tvmaze-api-ts';
import placeHolderImage from '../client/images/show_image_placeholder.png';

export interface showSummary {
    id: number;
    name: string;
    pictureUrl?: string;
    rating: number;
}

const scheduleTransformer = (result: IscheduleItem): showSummary => {
    const { show } = result;
    const { name } = show;
    const rating = show?.rating?.average;
    const pictureUrl = show?.image?.original || placeHolderImage;

    return {
        id: show.id,
        name, // : `${name} (${show.id})`,
        pictureUrl,
        rating: rating ? rating / 2 : 0,
    };
};

export default scheduleTransformer;
