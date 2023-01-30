import { React, useState } from "react";
import { Card, IconButton, Typography, CardContent, CardActions, Box } from "@mui/material";
import { Favorite, Delete } from "@mui/icons-material";
import styles from "../UserCard/cardStyles";
import PropTypes from 'prop-types'

export function UserCard({ id, name, email, phone, website, users, setUsers, favorites, setFavorites, isFav }) {

    const cardAvatar = `https://avatars.dicebear.com/v2/avataaars/{${name}}.svg?options[mood][]=happy`;
    const [favStatus, setFavStatus] = useState(isFav);

    const addToFavs = () => {
        if (favorites.indexOf({ id: id }) !== 1) {
            setFavorites([...favorites, { id: id }]);
            setFavStatus(true);
        }
    };

    const removeFromFavs = () => {
        const filteredFavs = favorites.filter((item) => (item.id !== id));
        setFavorites(filteredFavs);
        setFavStatus(false);
    };

    const handleFavs = (favStatus ? removeFromFavs : addToFavs);

    const handleDelete = () => {
        const filteredList = users.filter((item) => (item.id !== id));
        setUsers(filteredList);
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
                    <Typography component='div' sx={styles.cardTypographyStyle}>
                        <Box>Name</Box>
                        <Box>{name}</Box> </Typography>
                    <Typography component='div' sx={styles.cardTypographyStyle}>
                        <Box>Email</Box>
                        <Box>{email}</Box> </Typography>
                    <Typography component='div' sx={styles.cardTypographyStyle}>
                        <Box>Phone</Box>
                        <Box>{phone}</Box> </Typography>
                    <Typography component='div' sx={styles.cardTypographyStyle}>
                        <Box>Website</Box>
                        <Box>{website}</Box> </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

UserCard.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    website: PropTypes.string,
    users: PropTypes.array,
    setUsers: PropTypes.func,
    favorites: PropTypes.array,
    setFavorites: PropTypes.func,
    isFav: PropTypes.bool
}