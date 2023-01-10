import { Card, IconButton, Typography } from "@mui/material";
import React from "react";
import { CardContent } from '@mui/material';
import { CardMedia } from '@mui/material';
import { CardActions } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import styles from '../styles/cardStyles';



export function UserCard(props) {

    const cardAvatar = 'https://avatars.dicebear.com/v2/avataaars/{{johnny}}.svg?options[mood][]=happy';


    return (
        
        < Box >
                <CardActions sx={styles.cardActionStyle}>
                    <IconButton size="large" sx={styles.FavIconStyle}>
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton size="large" sx={styles.deleteIconStyle}>
                        <DeleteIcon />
                    </IconButton>
                </CardActions>

            <Card raised='true' sx={styles.cardStyle} >

                <CardMedia sx={styles.cardMediaStyle} image={cardAvatar} title='cardAvatar'></CardMedia>
                <Box sx={styles.gradientBoxStyle}></Box>

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