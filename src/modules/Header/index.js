import React from 'react';
import './styles/index.scss';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import TinderLogo from '../../Icons_Logos/tinder_logo.png';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header_icon" />
            </IconButton>

            <img src={TinderLogo} alt="Tinder Icon" className="header_icon" />

            <IconButton>
                <ForumIcon fontSize="large" className="header_icon" />
            </IconButton>
        </div>
    )
}

export default Header; 