import { Card, IconButton, Typography } from "@mui/material";
import React from "react";
import { CardContent } from '@mui/material';
import { CardActions } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import styles from '../styles/cardStyles';
import { useState } from "react";

export function UserCard(props) {

    const cardAvatar = `https://avatars.dicebear.com/v2/avataaars/{${props.name}}.svg?options[mood][]=happy`;
    const [favStatus, setFavStatus] = useState(props.favStatus);

    const addToFavs = () => {
        if (props.favs.indexOf({ id: props.id }) !== 1) {
            props.setFavs([...props.favs, { id: props.id }]);
            setFavStatus(true);
        }
    };

    const removeFromFavs = () => {
        const reducedFavs = props.favs.filter((item) => (item.id !== props.id));
        props.setFavs(reducedFavs);
        setFavStatus(false);
    };

    const handleFavs = (favStatus ? removeFromFavs : addToFavs);

    const deleteOnClick = () => {
        const filteredList = props.data.filter((item) => (item.id !== props.id));
        props.setData(filteredList);
    };

    return (

        < Box >
            <CardActions sx={styles.cardActionStyle}>
                <IconButton size="large" sx={styles.FavIconStyle} onClick={handleFavs}>
                    <FavoriteIcon color={favStatus ? 'error' : 'gray'}> </FavoriteIcon>
                </IconButton>
                <IconButton size="large" sx={styles.deleteIconStyle} onClick={deleteOnClick}>
                    <DeleteIcon />
                </IconButton>
            </CardActions>

            <Card sx={styles.cardStyle} >

                <Box sx={styles.imagesContainerStyle}>
                    <img style={styles.cardMediaStyle} src={cardAvatar} alt='cardAvatar'></img>
                    <Box sx={styles.gradientBoxStyle}></Box>
                </Box>

                <CardContent sx={styles.cardContentStyle}>
                    <Typography sx={styles.cardTypographyStyleLeft}>
                        Name <br></br>
                        Email <br></br>
                        Phone <br></br>
                        Website
                    </Typography>
                    <Typography sx={styles.cardTypographyStyleRight}>
                        {props.name} <br></br>
                        {props.email} <br></br>
                        {props.phone} <br></br>
                        {props.website}
                    </Typography>
                </CardContent>

            </Card>
        </Box>

    )
}