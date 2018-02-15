import React from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import autobind from 'react-autobind'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/FlatButton';
import DetailViewIcon from 'material-ui/svg-icons/action/open-in-new';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default class CommonCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
        autobind(this)
      }
     
    render () {
        console.log("data: ", this.props.cardData)
        return (
            <MuiThemeProvider>
                <Card style={{'backgroundColor':this.props.bgColor}}>
                    <CardHeader
                    title={this.props.headerTitle}
                    titleColor="#ffffff"
                    subtitleColor="#f1f1f1"
                    />
                    <CardActions>
                    <RaisedButton 
                    label="Know More"
                    icon={<DetailViewIcon />}
                    />
                    </CardActions>
                    <CardText expandable={true}>
                    <li>
                    {(this.props.cardData).map(function (name) {
                        return <ul>{name.category}</ul>
                    })}
                    </li>
                    </CardText>
                </Card>
            </MuiThemeProvider>
        )
    }
}



