import React, { Component } from 'react';
import Generic from './Generic';
import New from './New';
import Returning from './Returning';
import api from '../../utils/api';

function SelectDay(props) {
  var days = ['Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday', 'Sunday'];
  return (
    <ul className="d-flex justify-content-between list-inline">
      {days.map(function (day) {
        return (
          <li className="list-inline-item" onClick={props.onSelect.bind(null, day)}
            key={day}>
            {day}
          </li>
        )
      })}
    </ul>

  )
}

class Persona extends Component {
  constructor(props) {
    super(props)
    this.state = {
      aggregatedInfo: null,
      aggregatedInfoNew: null,
      aggregatedInfoRe: null,
      selectedDay: '',
      repos: null,


    }
    this.aggregatedInfo = this.aggregatedInfo.bind(this);
    //new user api data binding

    this.aggregatedInfoNew = this.aggregatedInfoNew.bind(this);
    //new user api data binding

    this.aggregatedInfoRe = this.aggregatedInfoRe.bind(this);

    //day selection
    this.updateDay = this.updateDay.bind(this);
  }
  // handleChange(e){
  //   this.setState({selectValue: e.target.value});
  //  }
  componentDidMount() {

    this.aggregatedInfo(this.state.selectedDay);
    //New user api data binding

    this.aggregatedInfoNew(this.state.selectedDay);
    //returning user api data binding

    this.aggregatedInfoRe(this.state.selectedDay);

    
  }


  aggregatedInfo(day) {
   
    api.aggregatedInfo('xblmt')
      .then(function (ai) {
        this.setState(function () {
        console.log(ai)
          return { aggregatedInfo: ai }
        })

      }.bind(this))
  }
  //New Users API calls

  aggregatedInfoNew(day) {
    api.aggregatedInfo('7q6c5')
      .then(function (ai) {
        this.setState(function () {
          return { aggregatedInfoNew: ai }
        })
      }.bind(this))
  }
  //Returing Users data binding

  aggregatedInfoRe(day) {
    api.aggregatedInfo('hujmd')
      .then(function (ai) {
        this.setState(function () {

          return { aggregatedInfoRe: ai }
        })
      }.bind(this))
  }
  updateDay(day) {
    api.aggregatedInfo('returning', day)
      .then(function (repos) {
        this.setState(function () {
          console.log(repos)
          return {repos: repos}
        })
      }.bind(this));
  }
  render() {
    // console.log(this.state.selectValue);

    // var data = this.state.aggregatedInfo;


    return (
      <div className="container">
        <div className="row">
          <h3 className="p-2">High Value Customer Persona</h3>
          {/* <div className="col-md-12">
          <SelectDay  onSelect={this.updateDay} />
          </div> */}
          <div className="col-12">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="generic-tab" data-toggle="pill" href="#generic" role="tab" aria-controls="generic" aria-selected="true">Generic</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="new-tab" data-toggle="pill" href="#new" role="tab" aria-controls="new" aria-selected="false">New</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="returning-tab" data-toggle="pill" href="#returning" role="tab" aria-controls="returning" aria-selected="false">Returning</a>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="generic" role="tabpanel" aria-labelledby="generic-tab">
                <Generic aggregatedInfo={this.state.aggregatedInfo} />
              </div>
              <div className="tab-pane fade" id="new" role="tabpanel" aria-labelledby="new-tab">
                <New aggregatedInfo={this.state.aggregatedInfoNew} />
              </div>
              <div className="tab-pane fade" id="returning" role="tabpanel" aria-labelledby="returning-tab">
                <Returning aggregatedInfo={this.state.aggregatedInfoRe} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Persona;