import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';



class AdminCardCrtl extends Component {
    state= {
        redirect: ''
    }

handleClick = (e) => {
    this.setState({
        redirect: e.currentTarget.value
    })
}
handleLogOut = (e) => {
    localStorage.removeItem("token");
    this.setState({
        redirect: e.currentTarget.value
    })
}
    render(){
        console.log(this.state.redirect)
        if (this.state.redirect === 'download')
            return <Redirect to="/admin/DownloadData" />
        if (this.state.redirect === 'updateCompanies')
            return <Redirect to="/admin/UpdateCompanies" />
        if (this.state.redirect === 'updateAgencies')
            return <Redirect to="/admin/UpdateAgencies" />
        if (this.state.redirect === 'updateUsersRole')
            return <Redirect to="/admin/UpdateUsersRole" />
        if (this.state.redirect === 'logout')
            return <Redirect to="/login" />
        return (
            <Card className='card' style={{ 
                
                textAlign: "left",
            justifyContent: "center",
            verticalAlign: "middle",
            color: "black",
            margin: "5%",
            fontFamily: "Raleway",
            fontSize: "1em",
            backgroundColor:"white",
            borderRadius:"10%",
            padding:"10%",
                
            }}>
                
                <CardContent className='cardContent'>
                
                <div className='button'>
                <Button 
                    onClick={this.handleClick}
                    variant="contained"  
                    className='but'
                    size='large'
                    value='download'
                    style={{
                    backgroundColor: 'rgb(38, 56, 87)',
                    color: 'white',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    display: 'block',
                    marginTop: '5%',
                    fontSize: '1.3em',
                    fontFamily: 'Raleway'
                    }}
                    >
                    Download Data
                    </Button>
                    <Button
                    onClick={this.handleClick} 
                    variant="contained"  
                    className='but'
                    size='large'
                    value='updateCompanies'
                    style={{
                    backgroundColor: 'rgb(38, 56, 87)',
                    color: 'white',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    display: 'block',
                    marginTop: '5%',
                    fontSize: '1.3em',
                    fontFamily: 'Raleway'
                    }}
                    >
                    Update Companies
                    </Button>
                    <Button
                    onClick={this.handleClick} 
                    variant="contained"  
                    className='but'
                    size='large'
                    value='updateAgencies'
                    style={{
                    backgroundColor: 'rgb(38, 56, 87)',
                    color: 'white',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    display: 'block',
                    marginTop: '5%',
                    fontSize: '1.3em',
                    fontFamily: 'Raleway'
                    }}
                    >
                    Update Agencies
                    </Button>
                    <Button
                    onClick={this.handleClick} 
                    variant="contained"  
                    className='but'
                    size='large'
                    value='updateUsersRole'
                    style={{
                    backgroundColor: 'rgb(38, 56, 87)',
                    color: 'white',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    display: 'block',
                    marginTop: '5%',
                    fontSize: '1.3em',
                    fontFamily: 'Raleway'
                    }}
                    >
                    Update Users Role
                    </Button>
                    <Button
                        variant="contained"
                        className="but"
                        size="large"
                        value='logout'
                        style={{
                            backgroundColor: "rgb(186, 28, 58)",
                            color: "white",
                            marginLeft: "auto",
                            marginRight: "auto",
                            display: "block",
                            marginTop: "5%",
                            fontSize: "1.3em",
                            fontFamily: "Raleway"
                        }}
                        onClick={this.handleClick}
                        >
                        Log Out
                    </Button>
                </div>

                </CardContent>

            </Card>
        );
    }
}


export default AdminCardCrtl;
