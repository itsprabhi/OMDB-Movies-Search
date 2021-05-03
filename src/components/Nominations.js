import React, {useState} from 'react'
import Banner from './Banner'

function Nominations(props) {

    const [banner, setBanner] = useState(true)

    const bannerSwitch = () => {
        setBanner(!banner)
        console.log(banner)
    }


    const {deleteNomination} = props

    const nominations = props.nominations.length > 0 ? (
        props.nominations.map(nominee => {
            return (
                <div className = 'movie-card nomination-card'>
                    <div className = 'movie-card-txt'>
                        <h4>{nominee.Title}</h4>
                        <div className = 'movie-meta'>
                            <span>
                                <b>Year - </b>
                                {nominee.Year}
                            </span>
                        </div>
                    </div>
                    <div className = 'movie-card-btn'>
                        <button onClick = {() => deleteNomination(nominee.Title)}>
                            Remove Nomination
                        </button>
                    </div>
                    {props.nominations.length >= 5 && banner === true? (<Banner bannerSwitch = {bannerSwitch} />) :( <></>)}
                </div>
            )

        })
    ) : (
        <div className = 'empty-div'>
            <div>
                <img src="https://img.icons8.com/pastel-glyph/64/000000/the-oscars--v2.png" alt = 'illustration of an oscar'/> 
                <h4>No nomination right now. Add nominations</h4>
            </div>
        </div>
        )


    
    return (
        <div className = 'movie-search-section  nomination-section'>
            <div className = 'movie-section-heading'>
                <h3>
                    Nominations for the award.
                </h3>
            </div>
            {nominations}
        </div>
    )
}

export default Nominations
