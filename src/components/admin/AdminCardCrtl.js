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

    render(){
        console.log(this.state.redirect)
        if (this.state.redirect === 'download')
            return <Redirect to="/admin/DownloadData" />
        if (this.state.redirect === 'update')
            return <Redirect to="/admin/UpdateCompanies" />
        return (
            <Card className='card' style={{ 
                textAlign: "left",
                justifyContent: "center",
                verticalAlign: "middle",
                color: "black",
                marginBottom: "13%",
                marginLeft: "20%",
                marginRight: "20%",
                marginTop: "5%",
                fontFamily: "Raleway",
                fontSize: "1em",
                backgroundColor:"white",
                borderRadius:"10px",
                padding: "3%"
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
                    blockSize: '18px',
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
                    value='update'
                    style={{
                    backgroundColor: 'rgb(38, 56, 87)',
                    color: 'white',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    display: 'block',
                    marginTop: '5%',
                    blockSize: '18px',
                    fontSize: '1.3em',
                    fontFamily: 'Raleway'
                    }}
                    >
                    Update Companies
                    </Button>
                    {/* <Button 
                    variant="contained"  
                    className='but'
                    size='large'
                    style={{
                    backgroundColor: 'rgb(38, 56, 87)',
                    color: 'white',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    display: 'block',
                    marginTop: '5%',
                    blockSize: '18px',
                    fontSize: '1.3em',
                    fontFamily: 'Raleway'
                    }}
                    >
                    Read
                    </Button>
                    <Button 
                    variant="contained"  
                    className='but'
                    size='large'
                    style={{
                    backgroundColor: 'rgb(38, 56, 87)',
                    color: 'white',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    display: 'block',
                    marginTop: '5%',
                    blockSize: '18px',
                    fontSize: '1.3em',
                    fontFamily: 'Raleway'
                    }}
                    >
                    Update
                    </Button>
                    <Button 
                    variant="contained"  
                    className='but'
                    size='large'
                    style={{
                    backgroundColor: 'rgb(38, 56, 87)',
                    color: 'white',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    display: 'block',
                    marginTop: '5%',
                    blockSize: '18px',
                    fontSize: '1.3em',
                    fontFamily: 'Raleway'
                    }}
                    >
                    Delete
                    </Button>
                     */}
                </div>

                </CardContent>

            </Card>
        );
    }
}


export default AdminCardCrtl;
