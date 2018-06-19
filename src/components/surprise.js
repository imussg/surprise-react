import React from 'react';

import SurpriseButton from './surprise-button';
import SurpriseImage from './surprise-image';

export default class Surprise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	displayButton: true
        };
    }

    toggleState() {
    	this.setState({
    		displayButton: !this.state.displayButton
    	});
    }

    render() {
        // Show the button to start with
        if(this.state.displayButton) {
        	return <SurpriseButton onClick={() => this.toggleState()}/>;
        } else {
        	return <SurpriseImage />;
        }
    }
}
