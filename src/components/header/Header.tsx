import React from "react";
import "../../styles/header/Header.scss"
import IconButton from '@material-ui/core/IconButton';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import ComputerRoundedIcon from '@material-ui/icons/ComputerRounded';
import { Link } from 'react-router-dom';

import NavMenu from "./NavMenu"
import { IHeaderProps, IHeaderState } from "../../interface/header/IHeader";

export default class Header extends React.Component<IHeaderProps, IHeaderState> {

    constructor (props: IHeaderProps) {
        super(props);
        this.state = {
            navMenu: <div />,
            redirectToHome: false
        }
    }

    private closeMenu = (): void => {
        this.setState({
            navMenu: <div />
        })
    }

    private openMenu = (event: React.MouseEvent<HTMLButtonElement>):void => {
        this.setState({
            navMenu : <NavMenu anchorEl={event.currentTarget} closeMenu={this.closeMenu}/>
        })
    }

    render() {
        return (
            <div className="header">
                <section className="header__menu">
                    <IconButton onClick={this.openMenu}>
                        <MenuRoundedIcon fontSize="large" />
                    </IconButton>
                    {this.state.navMenu}
                </section>
                <Link className="header__tittle" to="/" >
                    <div className="icon-name">                        
                        <ComputerRoundedIcon fontSize="large"></ComputerRoundedIcon>
                        <h1>
                            Harman Kharoud
                        </h1>
                    </div>
                </Link>
            </div>
        )
    }
}