import React, { Component } from 'react';


import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import Landing from '../components/layout/Landing';
import Login from '../components/login/Login';
import Signup from '../components/signup/Signup';
import Profile from '../components/profile/profile'
import EditProfile from '../components/profile/edit-profile';
import AddExperience from '../components/profile/add-experience';
import AddEducation from '../components/profile/add-education';
import Developers from '../components/developers/developers.js'
import DeveloperProfile from '../components/developers/developer-profile/developer-profile';
import Posts from '../components/posts/all-posts/posts';
import Comments from '../components/posts/comments/comments';


const styles = (themes) => ({
	container: {
		minHeight: '91vh',
		display:'flex',
		marginTop: '5vh',
	},
	subcontainer: {
		paddingTop: '32px',
		flex: 1
	}
})

export default withStyles(styles)((props) => {
	const { classes } = props
	return (
		<div className={classes.container}>
			{/*<div className={classes.subcontainer}>*/}
				<Switch>
					<Route path="/" exact component={Landing} />
					<div className={classes.subcontainer}>
						<Route path="/login" exact component={Login} />
						<Route path="/signup" exact component={Signup} />
						<Route path="/profile" exact component={Profile} />
						<Route path="/profile/edit-profile" exact component={EditProfile} />
						<Route path="/profile/add-experience" exact component={AddExperience} />
						<Route path="/profile/add-education" exact component={AddEducation} />
						<Route path="/developers" exact component={Developers} />
						<Route path="/developers/:id" exact component={DeveloperProfile} />
						<Route path="/posts" exact component={Posts} />
						<Route path="/comments/:post_id" exact component={Comments} />
					</div>
				</Switch>
		</div>
	)
})