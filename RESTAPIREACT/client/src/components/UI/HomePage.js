import React from 'react';

const styles = {
    root: {
        color: "grey",
        fontSize: "4rem",
        display: "flex",
        justifyContent: "center",
        height: "33rem",
        alignItems: "center"
    }

}

const HomePage = (props) => {
    console.log(props)
    console.log(styles)
    return (
        <div style={styles.root}>
            HOME PAGE
        </div>
    )
}

export default HomePage;