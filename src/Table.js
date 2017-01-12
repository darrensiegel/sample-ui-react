'use strict'

import * as React from 'react';

class Table extends React.Component {

  renderItem(item, isSelected) {
    let selected = isSelected ? "selected" : "";
    return <tr className={selected} onClick={this.props.onSelect.bind(this, item.unique_id)}>
        <td>{item.name}</td>
    </tr>;
  }

  renderItems() {
    return this.props.items.map(
      item => this.renderItem(item, this.props.selected === item.unique_id));
  }

  render() {
    return <table className="table table-striped table-hover">
      <thead>
          <tr>
              <th>{this.props.name}</th>
          </tr>
      </thead>
      <tbody>
        {this.renderItems()}
      </tbody>
    </table>
  }

};

Table.propTypes = {
  name: React.PropTypes.string.isRequired,
  items: React.PropTypes.array.isRequired,
  selected: React.PropTypes.string,
  onSelect: React.PropTypes.func.isRequired
}

Table.defaultProps = {
  selected: null
}

export default Table;
