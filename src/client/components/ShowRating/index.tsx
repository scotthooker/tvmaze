import React from 'react';

import { makeStyles, Typography } from '@material-ui/core';
import { Skeleton, Rating } from '@material-ui/lab';
import formatRating from '../../../utils/formatRating';

type ratingSize = 'small' | 'medium' | 'large';
type sizeStyle = 'valueSmall' | 'valueMedium' | 'valueLarge';

export interface ShowRatingProps {
    /**
     * Is the component loading
     */
    loading?: boolean;

    /**
     * The rating value to show
     */
    rating?: number;
    /**
     * The size of the rating component
     */
    size?: ratingSize;
    /**
     * Show the value as well as starts
     */
    showValue?: boolean;
}

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    valueSmall: {
        marginLeft: 8,
        fontSize: '16px',
    },
    valueMedium: {
        marginLeft: 10,
        fontSize: '20px',
    },
    valueLarge: {
        marginLeft: 16,
        fontSize: '24px',
    },
}));

const sizeToClassName = (size: ratingSize): sizeStyle => {
    if (size === 'small') return 'valueSmall';
    if (size === 'large') return 'valueLarge';
    return 'valueMedium';
};

export const ShowRating: React.FC<ShowRatingProps> = (props: ShowRatingProps) => {
    const { loading = false, rating = 0, showValue = false, size = 'medium' } = props;
    const classes = useStyles();

    const formattedRating = (value: number): string => {
        return `${formatRating(value)}/5`;
    };

    const valueContent = showValue ? (
        <Typography className={classes[sizeToClassName(size)]}>
            {loading ? <Skeleton /> : formattedRating(rating)}
        </Typography>
    ) : null;

    return (
        <div className={classes.root}>
            <Rating readOnly size={size} precision={0.1} value={loading ? 0 : rating} disabled={loading} />
            {valueContent}
        </div>
    );
};

export default ShowRating;
