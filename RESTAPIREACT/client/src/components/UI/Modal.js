import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
});


class TransitionsModal extends React.Component {

    state = {
        open: false
    }

    handleOpen = () => {
        this.setState({open: true})
    }

    handleClose = () => {
        this.setState({open: false})
    }

    onDelete = () => {
        console.log(`Yes I Sure`);
    }

    onCancleDelete = () => {
        console.log(`OOps By Mistake`);
        this.setState({open:false})
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
              <button type="button" onClick={this.handleOpen}>
                react-transition-group
              </button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={this.state.open}
                onClose={this.handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={this.state.open}>
                  <div className={classes.paper}>
                    Are You Sure ?
                    <button onClick={this.onDelete}>Yes</button>
                    <button onClick={this.onCancleDelete}>No</button>
                  </div>
                </Fade>
              </Modal>
            </div>
          );
    }

}

export default withStyles(useStyles)(TransitionsModal);
