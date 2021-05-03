import React from 'react'

function Banner(props) {

    const { bannerSwitch } = props

    return (
        <div className = 'nomination-banner'>
            <div className = 'banner-card'>
                <h1>Thank You!</h1>
                <h4>You have nominated 5 movies.</h4>
                <button onClick = {bannerSwitch}>Ok</button>
            </div>
        </div>
    )
}

export default Banner
