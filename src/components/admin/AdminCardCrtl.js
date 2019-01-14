import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';
// import './CardIntro.css'


class AdminCardCrtl extends Component {
    state= {
        download: false
    }

handleClick = (e) => {
    this.setState({
        download: true
    })
}
    render(){
        if (this.state.download)
            return <Redirect to="/admin/DownloadData" />
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
                    Create
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
                    

                </div>

                </CardContent>

            </Card>
        );
    }
}


export default AdminCardCrtl;
