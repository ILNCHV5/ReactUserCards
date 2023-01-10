import { Card, IconButton, Typography } from "@mui/material";
import React from "react";
import { CardContent } from '@mui/material';
import { CardMedia } from '@mui/material';
import { CardActions } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';




export function UserCard(props) {




    return (
        
        < Box >
                <CardActions sx={{mb:'-4rem'}}>
                    <IconButton size="large" sx={{mb:'1rem', left: '-2rem', backgroundColor:'white','&:hover': {opacity: '1', backgroundColor:'#ebebeb'}}}>
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton size="large" sx={{ mb:'1rem',left: '8.5rem' , backgroundColor:'white','&:hover': {opacity: '1', backgroundColor:'#ebebeb'}}}>
                        <DeleteIcon />
                    </IconButton>
                </CardActions>

            <Card raised='true' sx={{ width: '14rem', height: '16.5rem', borderRadius: 5, display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', boxShadow: '0 0 1rem gray'}} >

                <CardMedia sx={{ height: '8rem', width:'6rem', mb:'1rem',  zIndex:1}}
                 image='https://avatars.dicebear.com/v2/avataaars/%7B%7Bjohn%7D%7D.svg?options[mood][]=happy' title='title' >
                </CardMedia>
                <Box sx={{height:'8rem', width:'12rem', boxShadow:'inset 0 0 1.5rem -0.3rem gray', position: 'absolute', zIndex:0, top: '6rem', borderRadius: '1rem'}}></Box>

                <CardContent sx={{  display: 'flex', alignItems:'center', justifyContent: 'space-between', bgcolor: 'lightblue', borderRadius: 3.5 , width: '10rem', height: '2.5rem', pt: 3}}>
                    <Typography sx={{fontSize: '0.7rem', textAlign:'left'}}>
                        Name <br></br>
                        Email <br></br>
                        Phone <br></br>
                        Website 
                    </Typography>
                    <Typography sx={{fontSize: '0.7rem', textAlign:'right'}}>
                        Name <br></br>
                        Email <br></br>
                        Phone <br></br>
                        Website 
                    </Typography>
                    
                </CardContent>

            </Card>
        </Box>
       
    )
}