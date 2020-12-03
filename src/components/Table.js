import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import {Button, Box} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import StarIcon from '@material-ui/icons/Star';
import ForumIcon from '@material-ui/icons/Forum';
import PageviewIcon from '@material-ui/icons/Pageview';

import FeedbackIcon from '@material-ui/icons/Feedback';
import Grid from '@material-ui/core/Grid';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  // DialogTitle,
} from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';

import CloseIcon from '@material-ui/icons/Close';

import { withStyles } from '@material-ui/core/styles';

// import ModalSessionDetails from './ModalSessionDetails';

  const rows = [
    {
      date: 'July 7',
      time: '4 PM',
      subject: 'Filipino',
      tutor: {
        name: 'Adrienne Soliven'
      },
    },
    {
      date: 'July 7',
      time: '4 PM',
      subject: 'Math',
      tutor: {
        name: 'Adrienne Soliven'
      },
    },
    {
      date: 'July 7',
      time: '4 PM',
      subject: 'Science',
      tutor: {
        name: 'Adrienne Soliven'
      },
    },
    {
      date: 'July 7',
      time: '4 PM',
      subject: 'LoL',
      tutor: {
        name: 'Adrienne Soliven'
      },
    },
    {
      date: 'July 7',
      time: '4 PM',
      subject: 'Filipino',
      tutor: {
        name: 'Adrienne Soliven'
      },
    },
    {
      date: 'July 7',
      time: '4 PM',
      subject: 'Filipino',
      tutor: {
        name: 'Adrienne Soliven'
      },
    },
  ]

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}


function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  

  return (
    <TableHead>

    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          Nutrition
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  closeButton: {
    float:'right', marginTop: '5px'

  },
  dialogTitle:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));



export default function EnhancedTable(props) {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(3);
  const tableHeaders = props.tableHeaders;
  const tableRows = props.tableRows;
  // const [tableRows, setTableRows] = React.useState([]);
  const tableButtons = props.tableButtons;
  const [open, setOpen] = React.useState(false);
  const [openSessionDets, setOpenSessionDets] = React.useState(false);

  const changeToArray =(inputRow)=>{
    var row = []

    Object.entries(inputRow).map(([key, value]) => {
      row.push(value);
  })

 
    return row;
  }
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  
  const DialogTitle = withStyles(useStyles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h4">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
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

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const renderHeaders =()=>{
  
    const headerLabels = tableHeaders.map((label, index)=>(
      label === "Date" ?
          <TableCell sortDirection="desc">
            <Tooltip
                enterDelay={300}
                title="Sort"
            >
                <TableSortLabel
                active
                direction="desc"
                >
                Date
                </TableSortLabel>
            </Tooltip>
          </TableCell>
        :
          <TableCell>
            {label}
          </TableCell>
        
    ))


    return (<TableRow>{headerLabels}</TableRow>)

  };

  const renderRows = () =>{
    
    // if(tableRows != undefined){
        const rowsResult = tableRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((session, index) => {
          changeToArray(session)
        return (
          <TableRow
            hover
            key={session.id}
            >
            
        
          {changeToArray(session).map((data)=>(
          <TableCell>
            {data}
          </TableCell>
        
          ))}
          
          {tableButtons != undefined ?
            <TableCell>
              <React.Fragment>
                <Grid container spacing={1}>
                {tableButtons.map(button=>{
                  return(
                  <Grid item  align='center' xs={12/tableButtons.length}>
                    {button}
                  </Grid>
                  );
                })}
                </Grid>
              </React.Fragment>
            </TableCell>
          :
            <React.Fragment></React.Fragment>
          }
        
          </TableRow>
        );
        })

      return rowsResult 
    // }
  };

  return (
    <div className={classes.root}>
        <TableContainer>
          <Table
            className={classes.table}
            size={dense}
          >
            <TableHead>
                {renderHeaders()}

              
            </TableHead>
            <TableBody>
              {renderRows()}
                
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[3]}
          component="div"
          count={tableRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
    </div>
  );
}