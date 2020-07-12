import React from 'react';
/* 
codingan untuk lifting state up
*/
class TimeInput extends React.Component{
 
    _handleChange = (e) => {
      this.props.onChangeTime(e.target.value);
    }
  

  render() {
    const {timeLabel, time} = this.props;
    return (
      <>
        <label>         
          {timeLabel === 'time' ? 'detik' : 'menit:'}
          <input   type="number" value={time} onChange={this._handleChange}  />
        </label>
        <br/>
      </>
      
    );
  }
}

class LiftingStateUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detik: 0,
      menit:0
    }
  }

  onSubmit = (e) =>{
    e.preventDefault();
    alert(`${this.state.detik} detik sama dengan ${this.state.menit} menit`);
  }
  onChangeDetik = (detik) => {
    let menit = detik / 60;
    this.setState({menit,detik})
  }
  onChangeMenit = (menit) => {
    let detik = menit * 60;
    this.setState({menit,detik})
  }

  render() {
    const {menit, detik} = this.state;
    return (
      
      <form onSubmit={this.onSubmit} >
        <TimeInput timeLabel="time" time={detik} onChangeTime={this.onChangeDetik} /> 
        <br/>
        <TimeInput timeLabel="menit" time={menit} onChangeTime={this.onChangeMenit}/> 
        <br/>

        <input type="submit" value="Convert" />
      </form>
      
    );
  }
}

export default LiftingStateUp;
