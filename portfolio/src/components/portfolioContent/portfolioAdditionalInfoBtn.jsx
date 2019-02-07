import React, { Component } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import IndividualizedContent from './individualizedContent';

class AdditionalInfoBtn extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }

  render() {
    const { open } = this.state;
    return (
      <>
        <Button
          onClick={() => this.setState({ open: !open })}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          click
        </Button>
        <Collapse in={this.state.open}>
          <div id="example-collapse-text">
            <IndividualizedContent/>
          </div>
        </Collapse>
      </>
    );
  }
}

export default AdditionalInfoBtn;