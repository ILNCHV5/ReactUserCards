import React from "react";
import {
    Card,
    IconButton,
    Typography,
    CardContent,
    CardActions,
    Box
} from "@mui/material";
import { Favorite, Delete } from "@mui/icons-material";
import styles from "./styles";
import PropTypes from 'prop-types'

export function UserCard({ user, handleDeleteButtonClick, handleFavoritesButtonClick }) {
    const { id, name, email, phone, website, isFavorite } = user;
    const cardAvatar = `https://avatars.dicebear.com/v2/avataaars/{${name}}.svg?options[mood][]=happy`;

    return (
        <Box>
            <CardActions sx={styles.cardActionStyle}>
                <IconButton size="large" sx={styles.FavIconStyle} onClick={() => handleFavoritesButtonClick(id)}>
                    <Favorite color={isFavorite ? 'action' : 'gray'} />
                </IconButton>
                <IconButton size="large" sx={styles.deleteIconStyle} onClick={() => handleDeleteButtonClick(id)}>
                    <Delete />
                </IconButton>
            </CardActions>
            <Card sx={styles.cardStyle}>
                <Box sx={styles.imagesContainerStyle}>
                    <img style={styles.cardMediaStyle} src={cardAvatar} alt='cardAvatar' />
                    <Box sx={styles.gradientBoxStyle} />
                </Box>
                <CardContent sx={styles.cardContentStyle}>
                    <Typography component={Box} sx={styles.cardTypographyStyle}>
                        <Box>Name</Box>
                        <Box>{name}</Box>
                    </Typography>
                    <Typography component={Box} sx={styles.cardTypographyStyle}>
                        <Box>Email</Box>
                        <Box>{email}</Box>
                    </Typography>
                    <Typography component={Box} sx={styles.cardTypographyStyle}>
                        <Box>Phone</Box>
                        <Box>{phone}</Box>
                    </Typography>
                    <Typography component={Box} sx={styles.cardTypographyStyle}>
                        <Box>Website</Box>
                        <Box>{website}</Box>
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

UserCard.propTypes = {
    user: PropTypes.object.isRequired,
    handleFavoritesButtonClick: PropTypes.func.isRequired,
    handleDeleteButtonClick: PropTypes.func.isRequired
}