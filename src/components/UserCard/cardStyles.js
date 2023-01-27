

const styles = {
    cardActionStyle: {
        mb: '-4rem'
    },
    FavIconStyle: {
        mb: '1.5rem',
        left: '-2rem',
        backgroundColor: 'white',
    '&:hover': { opacity: '1', backgroundColor: '#ebebeb'}
        
    },
    Red:{
        color: 'red'
    },
    deleteIconStyle: {
        mb: '1.5rem',
        left: '8.5rem',
        backgroundColor: 'white',
        '&:hover': { opacity: '1', backgroundColor: '#ebebeb' , color:'#47b362'}
    },

    cardStyle: {
        width: '14rem',
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        boxShadow: '0 0 1rem gray',
        pt: '1rem',
        pb: '1rem'
    },
    imagesContainerStyle: {
        display:'flex', 
        position:'relative'
    },

    cardMediaStyle: {
        height: '8rem',
        left: '2rem',
        position: 'absolute',
        zIndex: 1
    },
    gradientBoxStyle: {
        height: '8rem',
        width: '12rem',
        boxShadow: 'inset 0 0 1.5rem -0.3rem gray',
        zIndex: 0,
        borderRadius: '1rem',
        mb: '1rem'

    },
    cardContentStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        bgcolor: 'lightblue',
        borderRadius: 3.5,
        width: '10rem',
        height: '2.4rem',
        pt: '1.4rem'
    },
    cardTypographyStyleLeft:{
        fontSize: '0.6rem',
        textAlign:'left'
    },
    cardTypographyStyleRight:{
        fontSize: '0.6rem',
        textAlign:'right'
    }
}
export default styles;