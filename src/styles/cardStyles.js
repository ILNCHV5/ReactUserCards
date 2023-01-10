

const styles = {
    cardActionStyle: {
        mb: '-4rem'
    },
    FavIconStyle: {
        mb: '1rem',
        left: '-2rem',
        backgroundColor: 'white',
        '&:hover': { opacity: '1', backgroundColor: '#ebebeb' }
    },
    deleteIconStyle: {
        mb: '1rem',
        left: '8.5rem',
        backgroundColor: 'white',
        '&:hover': { opacity: '1', backgroundColor: '#ebebeb' }
    },
    cardStyle: {
        width: '14rem',
        height: '16.5rem',
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        boxShadow: '0 0 1rem gray'
    },
    cardMediaStyle: {
        height: '8rem',
        width: '6rem',
        mb: '1rem',
        zIndex: 1
    },
    gradientBoxStyle: {
        height: '8rem',
        width: '12rem',
        boxShadow: 'inset 0 0 1.5rem -0.3rem gray',
        position: 'absolute',
        zIndex: 0, top: '6rem',
        borderRadius: '1rem'
    },
    cardContentStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        bgcolor: 'lightblue',
        borderRadius: 3.5,
        width: '10rem',
        height: '2.5rem',
        pt: 3
    },
    cardTypographyStyleLeft:{
        fontSize: '0.7rem',
        textAlign:'left'
    },
    cardTypographyStyleRight:{
        fontSize: '0.7rem',
        textAlign:'right'
    }
}
export default styles;