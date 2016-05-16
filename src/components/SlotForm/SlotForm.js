import React from 'react';

export default class SlotForm extends React.Component {
  constructor() {
    super();
    this.state = {
      column: 'bootstrapping',
      name: ''
    };
  }

  handleChangeSlotColumn(e) {
    this.setState({
      column: e.target.value,
      name: this.state.name
    });
  }

  handleChangeSlotName(e) {
    this.setState({
      column: this.state.column,
      name: e.target.value
    });
  }

  handleAddSlot() {
    this.props.onAddSlot(this.state);
    this.setState({
      column: 'bootstrapping',
      name: ''
    });
  }

  render() {
    return (
        <div>
          <h2>Ajouter un Slot</h2>

          <form>
            <div className="form-group">
              <label for="slot-column">Colonne</label>
              <select id="slot-column" className="form-control" onChange={this.handleChangeSlotColumn.bind(this)} value={this.state.column}>
                <option value="bootstrapping">Project Bootstrapping</option>
                <option value="frameworks">Les 4 fantastiques framework Front</option>
                <option value="qualityAndPerformances">Qualité et performances Javascript</option>
                <option value="curiosity">Le cabinet de curiosité Javascript</option>
              </select>
            </div>

            <div className="form-group">
              <label for="slot-name">Nom</label>
              <input id="slot-name" type="text" className="form-control"
                     value={this.state.name}
                     onChange={this.handleChangeSlotName.bind(this)}/>
            </div>

            <button type="button" className="btn btn-primary" onClick={this.handleAddSlot.bind(this)}>
              Ajouter
            </button>
          </form>
        </div>
    );
  }
}