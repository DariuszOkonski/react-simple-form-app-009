import React, { Component } from 'react';

class Form extends Component {
  state = {
    city: '',
    information: '',
    likeCity: false,
    visited: '0',
  }


  handleChanges = (e) => {
    if (e.target.dataset.name === 'likeCity') {
      this.setState({
        [e.target.dataset.name]: !this.state.likeCity,
      })
    } else {
      this.setState({
        [e.target.dataset.name]: e.target.value,
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.city && this.state.information) {
      const obj = {
        city: this.state.city,
        information: this.state.information,
        likeCity: this.state.likeCity,
        visited: this.state.visited,
      }

      this.props.withdrawInformation(obj);

      this.setState({
        city: '',
        information: '',
        likeCity: false,
        visited: '0',
      })
    } else {
      alert('Fill up some fields');
    }
  }

  render() {
    return (
      <form className='form' onSubmit={this.handleSubmit}>
        <label>City:
          <input
            data-name="city"
            value={this.state.city}
            onChange={this.handleChanges}
            type="text"
          />
        </label>

        <label>
          Write something about that city:
          <textarea placeholder='Make a note...'
            data-name='information'
            value={this.state.information}
            onChange={this.handleChanges}
          ></textarea>
        </label>

        <label>
          Do you like this city:
          <input
            data-name="likeCity"
            checked={this.state.likeCity}
            onChange={this.handleChanges}
            type="checkbox"
          />
        </label>

        <label>
          How many times have you visited that city:
          <select
            data-name="visited"
            name="number"
            value={this.state.visited}
            onChange={this.handleChanges}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="more">more</option>
          </select>
        </label>
        <button>Send</button>
      </form>
    );
  }
}

export default Form;