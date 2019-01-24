import React, {Component} from 'react';
import AdminHomePage from './AdminHomePage';

import './HomeAdmin.css';

// import Ciruclar Loading from Material-ui
import CircularProgress from '@material-ui/core/CircularProgress';


// Helpers
import checkRole from '../../helpers/checkRole';

class HomeAdmin extends Component {
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
        return <div className="circular"><CircularProgress disableShrink size="120px"/></div>

        if(!this.state.role.includes("admin"))
            return <h1>ACCESS DENIED!!!!!!!!!!!</h1>

        return <AdminHomePage />
    }
}

export default HomeAdmin;
