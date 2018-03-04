import {urls} from "../../utils/urlUtils";
import {AppBar, IconButton, Toolbar, Typography} from "material-ui";
import MenuIcon from "material-ui-icons/Menu";
import React from "react";
import {Link} from "react-router-dom";

export const TopBar = () => <AppBar position="static">
    <Toolbar>

        <IconButton color="inherit" aria-label="Menu" component={props => <Link to={urls.home.path} {...props}/>}>
            <MenuIcon/>
        </IconButton>

        <Typography type="title" color="inherit">
            My Awesome React App
        </Typography>

    </Toolbar>
</AppBar>;