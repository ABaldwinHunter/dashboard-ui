import React from 'react';
import {Modal, Button, FormControl} from 'react-bootstrap';
import {createCache} from '../../actions';
import {connect} from 'react-redux';

class CreateCache extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            value: ''
        };
    }

    close = () => this.setState({showModal: false});

    open = () => this.setState({showModal: true});

    handleChange = (e) => this.setState({value: e.target.value});

    createCache = () => {
        this.props.dispatch(createCache(this.state.value));
        this.setState({
            showModal: false, value: ''
        });
    };

    render() {
        return (
            <div>
                {
                    React.cloneElement(this.props.children, {
                        onClick:this.open
                    })
               }
                <Modal show={this.state.showModal} onHide={this.close} dialogClassName="custom-modal">
                    <Modal.Header closeButton>
                        <Modal.Title>New Cache</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormControl type="text"
                                     value={this.state.value}
                                     placeholder="Pick a good name"
                                     onChange={this.handleChange}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Cancel</Button>
                        <Button bsStyle="primary" onClick={this.createCache}>Create Cache</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default connect(null, null)(CreateCache);
