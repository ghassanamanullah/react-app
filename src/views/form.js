import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: '', //textinput
      nohp: '', //number
      alamat: '' //textarea
    };

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  onChange(event) {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleSubmit(event) { 
    event.preventDefault();
    event.stopPropagation();
    const {nama, nohp, alamat} = this.state;
    alert(`Telah di submit:  ${nama} + ${nohp} + ${alamat} `);
    
  }

  handleOptionChange(changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }

  render() {
    const {nama, nohp, alamat} = this.state;
    return (
      <form onSubmit={this.handleSubmit} >
        <label>
          Nama:
          <input name="nama"  type="text" value={nama} onChange={this.onChange} />
        </label>
        <br/>
        <label>
          No HP:
          <input name="nohp" type="number" value={nohp} onChange={this.onChange} />
        </label>
        <br/>
        
        <label>
          Alamat:
          <textarea name='alamat' value={alamat} onChange={this.onChange}> </textarea>
        </label>
      
        <br/>
        <input type="submit" value="Submit" />
      </form>
      
    );
  }
}

export default Form;
