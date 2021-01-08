import React, { useState } from 'react';
import './styles/index.scss';
import TinderCard from 'react-tinder-card'
import { isForXStatement } from '@babel/types';


function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1398%26cropX2%3D3908%26cropY1%3D594%26cropY2%3D3102"
        },
        {
            name: 'Brittany Spears',
            url: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Britney_Spears_2013_%28Straighten_Crop%29.jpg'
        },
        {
            name: 'Hrithik Roshan',
            url: 'https://m.media-amazon.com/images/M/MV5BZjYwYjE4YjQtMTFmMi00NTlhLThjZjUtZTIyMTczMGU2ZDE5XkEyXkFqcGdeQXVyNzM2NzM0NDU@._V1_UY1200_CR85,0,630,1200_AL_.jpg'
        },
        {
            name: 'Ranveer Singh',
            url: 'https://filmfare.wwmindia.com/content/2020/oct/ranveersingh11602233648.jpg'
        },
        {
            name: 'Surya Sivakumar',
            url: 'https://lh3.googleusercontent.com/proxy/tpUpxZPHfkReGOBkE-AcyR2Rkag-4AbeQzkPE8PmTFp6Lkgqn2dTwQBO7GQqBgn_MhgymDSqW1NrsJfa9moGqnRfSHA7pqI9otv9cSL1X1AY06Gc6wHDV8rwD3moQDcmVBiroL5z7KQktw'
        },
        {
            name: 'Margot Robbie',
            url: 'https://www.caa.com/sites/default/files/styles/headshot_500x500/public/2019-11/Margot-Robbie.jpg?itok=SQGqY_Y5'
        },
        {
            name: 'Shakira',
            url: 'https://www.biography.com/.image/t_share/MTE5NDg0MDU0NzExNDA0MDQ3/shakira-189151-1-402.jpg'
        },
        {
            name: 'Selena Gomez',
            url: 'https://media1.popsugar-assets.com/files/thumbor/hLNfvE46E2WgfgOh00bRCbHcvCM/562x135:2177x1750/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/09/09/020/n/1922398/3794d5c55d76e058296c92.97678413_/i/Selena-Gomez.jpg'
        },
        {
            name: 'Kylie Jenner',
            url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kylie-jenner-attends-the-2020-vanity-fair-oscar-party-news-photo-1588721645.jpg?crop=0.6995xw:1xh;center,top&resize=640:*'
        }
    ]);
    const onSwipe = (direction, person) => {
        console.log('removing: ' + person)
        console.log('You swiped: ' + direction)
    }

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards_container">
                {people.map((person) => (
                    <TinderCard key={person.name} className="swipe" onSwipe={(dir) => onSwipe(dir, person.name)} onCardLeftScreen={() => onCardLeftScreen(person.name)} preventSwipe={["down"]}>
                        <div style={{ backgroundImage: "url(" + person.url + ")" }} className="tinderCard">
                            <h1> {person.name} </h1>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div >
    )
}

export default TinderCards; 