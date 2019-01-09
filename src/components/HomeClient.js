import React, {Component} from 'react';
import IntroPage from "./IntroPage";

// Helpers
import checkRole from '../helpers/checkRole';

class HomeClient extends Component {
    state = {
        role: null,
        isLoading: true
    }

    componentDidMount = async () => {
        
        this.setState({
            role: await checkRole(),
            isLoading: false
        })
    };
    

    render() {
        if(this.state.isLoading)
            return <h1>LOADING.........</h1>

        console.log("metallica" , this.state)
        if(this.state.role !== "client")
            return <h1>ACCESS DENIED!!!!!!!!!!!</h1>
        return <IntroPage/>
    }
}

export default HomeClient;