import React from "react";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import { INavMenuProps, INavMenuState } from "../../interface/header/INavMenu";

export default class NavMenu extends React.Component<INavMenuProps, INavMenuState> {

  private theme = createMuiTheme({
    overrides: {
      MuiMenu: {
        list: {
          backgroundColor: '#efefef',
          width: 'calc(17.8em)',
          color: '#454545',
        }
      }
    }
  });
 
  render() {
    return (
      <div>
        <ThemeProvider theme={this.theme}>
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
            <MenuItem
              component={Link} 
              to="/whoami" onClick={this.props.closeMenu}
            >
              Who Am I?
            </MenuItem>
          </Menu>
        </ThemeProvider>
      </div>
    )
  }
}