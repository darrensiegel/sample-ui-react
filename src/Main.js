'use strict'

import * as React from 'react';

let connectToStore = require('react-redux').connect;

import * as actions from './actions';

import Table from './Table'

class Main extends React.Component {

  componentDidMount() {
    this.props.dispatch(actions.requestData('http://gateway:8081'));
  }

  onSelect(item, selected) {
    let changed = {};
    changed[item] = selected;
    let updated = Object.assign({}, this.props.selected, changed);
    this.props.dispatch(actions.changeSelection(updated));
  }

  renderHasAuthorization() {

    if (this.props.hasAuthorization === null) {
      let selected = this.props.selected;
      if (selected.actor && selected.action && selected.item) {
        return <span></span>;
      } else {
        return <span className="label label-primary">Select an actor, action and item</span>
      }
    } else if (this.props.hasAuthorization) {
      return <span className="label label-success">Authorized</span>
    } else {
      return <span className="label label-danger">Not Authorized</span>
    }
  }

  render() {
    let fixedHeight = { height: 75};
    return (
      <div className="container">
        <div className="columns" style={fixedHeight}>
          <div className="column col-12">
            <center>{this.renderHasAuthorization()}</center>
          </div>
        </div>
        <div className="columns">
          <div className="column col-4">
            <Table name="Actors" items={this.props.actors}
              onSelect={this.onSelect.bind(this, 'actor')}
              selected={this.props.selected['actor']}/>
          </div>
          <div className="column col-4">
            <Table name="Actions" items={this.props.actions}
              onSelect={this.onSelect.bind(this, 'action')}
              selected={this.props.selected['action']}/>
          </div>
          <div className="column col-4">
            <Table name="Items" items={this.props.items}
              onSelect={this.onSelect.bind(this, 'item')}
              selected={this.props.selected['item']}/>
          </div>
        </div>
      </div>);
  }

};

function subscribedState(state) {

  const {
    actors,
    actions,
    items,
    selected,
    hasAuthorization
  } = state;

  return {
    actors,
    actions,
    items,
    selected,
    hasAuthorization
  }
}


export default connectToStore(subscribedState)(Main);
