import React, {Component} from 'react';
import IntroPage from "../intro/IntroPage";
import "./HomeClient.css";

//Material-UI
import CircularProgress from '@material-ui/core/CircularProgress';

// Helpers
import checkRole from '../../helpers/checkRole';


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
        console.log(this.state.role)
        if(this.state.isLoading)
            return <div className='circular'> <CircularProgress disableShrink size="120px"/> </div>
        if(this.state.role !== "client")
            return <h1>ACCESS DENIED!!!!!!!!!!!</h1>
        return <IntroPage/>
    }
}

export default HomeClient;