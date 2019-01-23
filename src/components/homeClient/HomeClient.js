import React, {Component} from 'react';
import IntroPage from "../intro/IntroPage";

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
            return <CircularProgress disableShrink style={{ alignItems:"center", size: "300", alignContent: "center", margin: "auto" }}/>;
        if(this.state.role !== "client")
            return <h1>ACCESS DENIED!!!!!!!!!!!</h1>
        return <IntroPage/>
    }
}

export default HomeClient;