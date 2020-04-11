import React from "react";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';

import { INavMenuProps, INavMenuState } from "../../interface/header/INavMenu";

export default class NavMenu extends React.Component<INavMenuProps, INavMenuState> {
 
  render() {
    return (
      <div>
        <Menu
          id="nav-menu"
          open={Boolean(this.props.anchorEl)}
          anchorEl={this.props.anchorEl}
          onClose={this.props.closeMenu}
          keepMounted
        >
          <MenuItem 
            component={Link} 
            to="/projects" onClick={this.props.closeMenu}
          >
            Projects
          </MenuItem>
        </Menu>
      </div>
    )
  }
}