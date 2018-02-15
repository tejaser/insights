import React, { Component } from 'react';
import Overview from './Overview';
import Persona from './Persona';
import api from '../../utils/api';
class Compare extends Component {
    constructor(props){
        super(props)
        this.state = {
            //previous month
            devices: null,
            browser: null,
            dayOfWeek: null,
            hourOfDay: null,
            topProduct: null,
            aggregatedInfo: null,
            channels: null,
            
            //current month
            Cdevices: null,
            Cbrowser: null,
            CdayOfWeek: null,
            ChourOfDay: null,
            CtopProduct: null,
            CaggregatedInfo: null,
            Cchannels: null,
        }
        this.deviceLevel = this.deviceLevel.bind(this);
        this.browser = this.browser.bind(this);
        this.dayOfWeek = this.dayOfWeek.bind(this);
        this.hourOfDay = this.hourOfDay.bind(this);
        this.topProduct = this.topProduct.bind(this);
        this.aggregatedInfo = this.aggregatedInfo.bind(this);
        this.browserLevel = this.browserLevel.bind(this);
        //current month
        this.CdeviceLevel = this.CdeviceLevel.bind(this);
        this.Cbrowser = this.Cbrowser.bind(this);
        this.CdayOfWeek = this.CdayOfWeek.bind(this);
        this.ChourOfDay = this.ChourOfDay.bind(this);
        this.CtopProduct = this.CtopProduct.bind(this);
        this.CaggregatedInfo = this.CaggregatedInfo.bind(this);
        this.CbrowserLevel = this.CbrowserLevel.bind(this);
    }
    componentDidMount(){
        this.deviceLevel();
        this.browser();
        this.dayOfWeek();
        this.hourOfDay();
        this.topProduct();
        this.aggregatedInfo();
        this.browserLevel();

        //current month

        this.CdeviceLevel();
        this.Cbrowser();
        this.CdayOfWeek();
        this.ChourOfDay();
        this.CtopProduct();
        this.CaggregatedInfo();
        this.CbrowserLevel();
    }

    deviceLevel(){
        api.deviceLevel('dskzp')
        .then(function(repo2){
              this.setState(function(){
                 return {devices: repo2}       
             })   
         }.bind(this));
    }
    browser(){
        api.channels('sfuh1')
        .then(function(ch){
          this.setState(function(){
            return {browser: ch}
          })
        }.bind(this))
      }
      dayOfWeek(){
        api.dayOfWeek('y5lvp')
        .then(function(dow){
          this.setState(function(){
            return {dayOfWeek: dow}
          })
        }.bind(this))
      }
      hourOfDay(){
        api.hourOfDay('pvokl')
        .then(function(hod){
          this.setState(function(){
            return {hourOfDay: hod}
          })
        }.bind(this));
      }
      topProduct(){
        api.topProduct('1g71id')
        .then(function(tp){
          this.setState(function(){
            return {topProduct: tp}
          })
        }.bind(this))
      }
      aggregatedInfo(){
        api.aggregatedInfo('xblmt')
        .then(function(ai){
          this.setState(function(){
            return {aggregatedInfo: ai}
          })
        }.bind(this))
      }
      browserLevel(){
        api.browserLevel('11o2cl')
        .then(function(repo3){
          this.setState(function(){
            return {channels: repo3}
          })
        }.bind(this));
      }

      //current month
      CdeviceLevel(){
        api.deviceLevel('s9mph')
        .then(function(repo2){
              this.setState(function(){
                 return {Cdevices: repo2}       
             })   
         }.bind(this));
    }
    Cbrowser(){
        api.channels('i7el1')
        .then(function(ch){
          this.setState(function(){
            return {Cbrowser: ch}
          })
        }.bind(this))
      }
      CdayOfWeek(){
        api.dayOfWeek('e7stx')
        .then(function(dow){
          this.setState(function(){
            return {CdayOfWeek: dow}
          })
        }.bind(this))
      }
      ChourOfDay(){
        api.hourOfDay('feo1h')
        .then(function(hod){
          this.setState(function(){
            return {ChourOfDay: hod}
          })
        }.bind(this));
      }
      CtopProduct(){
        api.topProduct('b8mt1')
        .then(function(tp){
          this.setState(function(){
            return {CtopProduct: tp}
          })
        }.bind(this))
      }
      CaggregatedInfo(){
        api.aggregatedInfo('qyh6d')
        .then(function(ai){
          this.setState(function(){
            return {CaggregatedInfo: ai}
          })
        }.bind(this))
      }
      CbrowserLevel(){
        api.browserLevel('11o2cl')
        .then(function(repo3){
          this.setState(function(){
            return {Cchannels: repo3}
          })
        }.bind(this));
      }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <h3 className="p-2">Compare</h3>
                    <div className="col-12">
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="com-overview-tab" data-toggle="pill" href="#com-overview" role="tab" aria-controls="com-overview" aria-selected="true">Overview</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="com-persona-tab" data-toggle="pill" href="#com-persona" role="tab" aria-controls="com-pesona" aria-selected="false">Persona</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="com-overview" role="tabpanel" aria-labelledby="com-overview-tab">
                               <Overview devices={this.state.devices} channel={this.state.browser} 
                                dayOfWeek = {this.state.dayOfWeek} hourOfDay={this.state.hourOfDay}
                                topProduct={this.state.topProduct} aggregatedInfo = {this.state.aggregatedInfo}
                                browser={this.state.channels} 
                                Cdevices={this.state.Cdevices} Cchannel={this.state.Cbrowser} 
                                CdayOfWeek = {this.state.CdayOfWeek} ChourOfDay={this.state.ChourOfDay}
                                CtopProduct={this.state.CtopProduct} CaggregatedInfo = {this.state.CaggregatedInfo}
                                Cbrowser={this.state.Cchannels} />
                        </div>
                            <div className="tab-pane fade" id="com-persona" role="tabpanel" aria-labelledby="com-persona-tab">
                                <Persona aggregatedInfo={this.state.aggregatedInfo} CaggregatedInfo={this.state.CaggregatedInfo}/>
                        </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Compare;