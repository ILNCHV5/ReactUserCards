import { React, useState } from "react";
import { Card, IconButton, Typography, CardContent, CardActions, Box } from "@mui/material";
import { Favorite, Delete } from "@mui/icons-material";
import styles from "../UserCard/cardStyles";

export function UserCard({key, user }) {

    const cardAvatar = `https://avatars.dicebear.com/v2/avataaars/{${props.name}}.svg?options[mood][]=happy`;
    const [favStatus, setFavStatus] = useState(props.favStatus);

    const addToFavs = () => {
        if (props.favorites.indexOf({ id: props.id }) !== 1) {
            props.setFavorites([...props.favorites, { id: props.id }]);
            setFavStatus(true);
        }
    };

    const removeFromFavs = () => {
        const filteredFavs = props.favorites.filter((item) => (item.id !== props.id));
        props.setFavorites(filteredFavs);
        setFavStatus(false);
    };

    const handleFavs = (favStatus ? removeFromFavs : addToFavs);

    const handleDelete = () => {
        const filteredList = props.users.filter((item) => (item.id !== props.id));
        props.setUsers(filteredList);
    };

    return (
        <Box>
            <CardActions sx={styles.cardActionStyle}>
                <IconButton size="large" sx={styles.FavIconStyle} onClick={handleFavs}>
                    <Favorite color={favStatus ? 'action' : 'gray'} />
                </IconButton>
                <IconButton size="large" sx={styles.deleteIconStyle} onClick={handleDelete}>
                    <Delete />
                </IconButton>
            </CardActions>
            <Card sx={styles.cardStyle}>
                <Box sx={styles.imagesContainerStyle}>
                    <img style={styles.cardMediaStyle} src={cardAvatar} alt='cardAvatar'></img>
                    <Box sx={styles.gradientBoxStyle} />
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