import React from 'react';

import { makeStyles, Card, Typography, CardActionArea, CardMedia, CardContent, ButtonBase } from '@material-ui/core';
import { ShowRating as Rating } from '../ShowRating';

import { Skeleton } from '@material-ui/lab';
import placeHolderImage from '../../images/show_image_placeholder.png';
export interface ShowCardProps {
    /**
     * Is the component loading
     */
    loading?: boolean;
    /**
     * The id that is linked to the show.
     */
    id: number;
    /**
     * The url to the picture to use for the show
     */
    pictureUrl?: string;
    /**
     * The name of the show
     */
    name: string;
    /**
     * The rating for the show (0 - 5)
     */
    rating?: number;
    /**
     * Optional onPress handler
     */
    onPress?: (showId: number) => void;
}

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 300,
        margin: theme.spacing(2),
        height: '100%',
    },
    content: {
        padding: 0,
    },
    name: {
        lineHeight: '1.2em',
        maxHeight: '3.6em',
        fontSize: '15px',
        minHeight: '1.2em',
        // overflow: 'hidden',
        // textOverflow: 'ellipsis',
    },
    cardAction: {
        display: 'block',
        textAlign: 'initial',
    },
    media: {
        objectFit: 'cover',
    },
}));

export const ShowCard: React.FC<ShowCardProps> = (props: ShowCardProps) => {
    const { loading = true, name, rating, pictureUrl, id, onPress = () => null } = props;
    const classes = useStyles();

    const loadingContent = () => (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    component="img"
                    image={loading ? placeHolderImage : pictureUrl || placeHolderImage}
                    title={name}
                />
                <CardContent className={classes.content}>
                    <Rating size="small" />
                    <Typography gutterBottom variant="h5" component="h2">
                        <Skeleton />
                    </Typography>
                    {/* <Typography variant="body2" color="textSecondary" component="p">
                        <Skeleton />
                    </Typography> */}
                </CardContent>
            </CardActionArea>
        </Card>
    );

    if (loading) return loadingContent();

    const cardClicked = () => {
        onPress(id);
    };

    return (
        <Card className={classes.card}>
            <ButtonBase onClick={cardClicked} className={classes.cardAction}>
                <CardMedia className={classes.media} component="img" image={pictureUrl} title={name} />
                <CardContent>
                    <Rating size="small" rating={rating} />
                    <Typography className={classes.name}>{name}</Typography>
                    {/* <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography> */}
                </CardContent>
            </ButtonBase>
        </Card>
    );
};

export default ShowCard;
