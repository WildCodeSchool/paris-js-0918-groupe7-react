
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

let id = 0;
function createData(email, role, userID) {
    id += 1;
    return { id, email, role, userID };
}

class SimpleTable extends Component {
    state = {
        selected: [],
        numSelected: 0,
        rows: []
    };

    createTable = () => {
        let array = [];

        this.props.users.map(user => {
            return (
                array.push(createData(user.email, user.role, user.id))
            )
        });
        this.setState({ rows: array })
    }

    componentDidMount = () => {
        this.createTable();
    };

    componentWillUnmount = () => {
        id = 0;
    };

    handleClick = (event, id) => {
        const { selected } = this.state;
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];
        let tableId = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        if (newSelected.length !== 0) {

            newSelected.map(selectedRow => {
                return (
                    tableId.push(this.state.rows[selectedRow - 1].userID)
                )
            })
        }

        this.props.selectingUsers(tableId);
        this.setState({ selected: newSelected });
    };

    isSelected = id => {
        return this.state.selected.indexOf(id) !== -1;
    };

    render() {
        console.log(this.state.rows)
        if (this.state.rows.length === 0)
            return <h3>LOAAAAAADING....</h3>
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Role</TableCell>
                            <TableCell align="left">UserID</TableCell>
                            <TableCell align="left">Selected</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.rows.map(row => {
                            const isSelected = this.isSelected(row.id)
                            return (
                                <TableRow
                                    hover
                                    onClick={event => this.handleClick(event, row.id)}
                                    role="checkbox"
                                    aria-checked={isSelected}
                                    tabIndex={-1}
                                    selected={isSelected}
                                    key={row.id}>
                                    <TableCell align="left">{row.email}</TableCell>
                                    <TableCell align="left">{row.role}</TableCell>
                                    <TableCell align="left">{row.userID}</TableCell>
                                    <TableCell align="left" padding="checkbox">
                                        <Checkbox checked={isSelected} />
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );

    }
};

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);