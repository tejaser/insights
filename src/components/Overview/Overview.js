import React, { Component } from 'react';
import AllUsers from './AllUsers';
import NewUser from './NewUsers';
import ReturnUsers from './ReturnUsers';
import api from '../../utils/api';
class Overview extends Component {
  constructor(props){
    super(props)
    this.state = {
      devices: null,
      channels: null,
      location: null,
      dayOfWeek: null,
      hourOfDay: null,
      topProduct: null,
      browser: null,
      browserNew: null,
      browserRe: null,
      channelsNew: null,
      dayOfWeekNew: null,
      hourOfDayNew: null,
      topProductNew: null,
      channelsRe: null,
      dayOfWeekRe: null,
      hourOfDayRe: null,
      topProductRe: null,
      aggregatedInfo: null,
      aggregatedInfoNew: null,
      aggregatedInfoRe: null
      
    }
    this.deviceLevel = this.deviceLevel.bind(this);
    this.browserLevel = this.browserLevel.bind(this);
    this.location = this.location.bind(this);
    this.dayOfWeek = this.dayOfWeek.bind(this);
    this.hourOfDay = this.hourOfDay.bind(this);
    this.topProduct = this.topProduct.bind(this);
    this.aggregatedInfo = this.aggregatedInfo.bind(this);
    this.browser = this.browser.bind(this);

    //new user api data binding
    this.browserLevelNew = this.browserLevelNew.bind(this);
    this.dayOfWeekNew = this.dayOfWeekNew.bind(this);
    this.hourOfDayNew = this.hourOfDayNew.bind(this);
    this.aggregatedInfoNew = this.aggregatedInfoNew.bind(this);
    this.topProductNew = this.topProductNew.bind(this);
    this.browserNew = this.browserNew.bind(this);
    //new user api data binding
    this.browserLevelRe = this.browserLevelRe.bind(this);
    this.dayOfWeekRe = this.dayOfWeekRe.bind(this);
    this.hourOfDayRe = this.hourOfDayRe.bind(this);
    this.aggregatedInfoRe = this.aggregatedInfoRe.bind(this);
    this.topProductRe = this.topProductRe.bind(this);
    this.browserRe = this.browserRe.bind(this);
  };
  componentDidMount(){
    this.deviceLevel();
    this.browserLevel();
    this.location();
    this.dayOfWeek();
    this.hourOfDay();
    this.topProduct();
    this.aggregatedInfo();
    this.browser();
     //New user api data binding
     this.browserLevelNew();
     this.dayOfWeekNew();
     this.hourOfDayNew();
     this.aggregatedInfoNew();
     this.topProductNew();
     this.browserNew();
    //returning user api data binding
    this.browserLevelRe();
    this.dayOfWeekRe();
    this.hourOfDayRe();
    this.aggregatedInfoRe();
    this.topProductRe();
    this.browserRe();
    
  }

  deviceLevel(){
    api.deviceLevel('dskzp')
    .then(function(repo2){
          this.setState(function(){
             return {devices: repo2}       
         })   
     }.bind(this));
}
browserLevel(){
  api.browserLevel('11o2cl')
  .then(function(repo3){
    this.setState(function(){
      return {channels: repo3}
    })
  }.bind(this));
}


location(){
  api.location()
  .then(function(loc){
    this.setState(function(){
      return {location: loc}
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

browser(){
  api.channels('sfuh1')
  .then(function(ch){
    this.setState(function(){
      return {browser: ch}
    })
  }.bind(this))
}
//New Users API calls
browserLevelNew(){
  api.browserLevel('11o2cl')
  .then(function(data){
    var newdata = data.filter(function(user){
      return user.newUser === true 
    }).map(function(user){
      return {"bowserName": user.bowserName, "userCount": user.userCount}
    })
    this.setState(function(){
      return {channelsNew: newdata}
    })
  }.bind(this));
}
dayOfWeekNew(){
  api.dayOfWeek('y5lvp')
  .then(function(dow){
    var newdow = dow.filter(function(user){
      return user.newUser === true
    }).map(function(user){
      return {"day": user.day, "userCount": user.userCount}
    })
    this.setState(function(){
      return {dayOfWeekNew: newdow}
    })
  }.bind(this))
}
hourOfDayNew(){
  api.hourOfDay('pvokl')
  .then(function(hod){
    var newhod = hod.filter(function(user){
      
        return user.newUser === true
     
    }).map(function(user){
      return {"hour": user.hour, "userCount": user.userCount, "day": user.day}
    })
    this.setState(function(){
      return {hourOfDayNew: newhod}
    })
  }.bind(this));
}
aggregatedInfoNew(){
  api.aggregatedInfo('7q6c5')
  .then(function(ai){
    this.setState(function(){
      return {aggregatedInfoNew: ai}
    })
  }.bind(this))
}
topProductNew(){
  api.topProduct('tkkit')
  .then(function(tp){
    this.setState(function(){
      return {topProductNew: tp}
    })
  }.bind(this))
}
browserNew(){
  api.channels('sfuh1')
  .then(function(ch){
    var newch = ch.filter(function(user){
      return user.newUser === true
    }).map(function(user){
      return {"clickType": user.clickType, "userCount": user.userCount, "clickSource": user.clickSource}
    })
    this.setState(function(){
      return {browserNew: newch}
    })
  }.bind(this))
}
//Returing Users data binding

browserLevelRe(){
  api.browserLevel('11o2cl')
  .then(function(data){
    var newdata = data.filter(function(user){
      return user.newUser === false 
    }).map(function(user){
      return {"bowserName": user.bowserName, "userCount": user.userCount}
    })
    this.setState(function(){
      return {channelsRe: newdata}
    })
  }.bind(this));
}
dayOfWeekRe(){
  api.dayOfWeek('y5lvp')
  .then(function(dow){
    var newdow = dow.filter(function(user){
      return user.newUser === false
    }).map(function(user){
      return {"day": user.day, "userCount": user.userCount}
    })
    this.setState(function(){
      return {dayOfWeekRe: newdow}
    })
  }.bind(this))
}
hourOfDayRe(){
  api.hourOfDay('pvokl')
  .then(function(hod){
    var newhod = hod.filter(function(user){
      return user.newUser === false
    }).map(function(user){
      return {"hour": user.hour, "userCount": user.userCount, "day": user.day}
    })
    this.setState(function(){
      return {hourOfDayRe: newhod}
    })
  }.bind(this));
}
aggregatedInfoRe(){
  api.aggregatedInfo('hujmd')
  .then(function(ai){
    this.setState(function(){
      return {aggregatedInfoRe: ai}
    })
  }.bind(this))
}
topProductRe(){
  api.topProduct('ov8ud')
  .then(function(tp){
    this.setState(function(){
      return {topProductRe: tp}
    })
  }.bind(this))
}
browserRe(){
  api.channels('sfuh1')
  .then(function(ch){
    var Rech = ch.filter(function(user){
      return user.newUser === false
    }).map(function(user){
      return {"clickType": user.clickType, "userCount": user.userCount, "clickSource": user.clickSource}
    })
    this.setState(function(){
      return {browserRe: Rech}
    })
  }.bind(this))
}
  render() {
    return (
    
      <div>
       {/* {console.log(this.state.channels)} */}
        <h3 className="p-2">Overview</h3>
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#allusers" role="tab" aria-controls="pills-home" aria-selected="true">All</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#newusers" role="tab" aria-controls="pills-profile" aria-selected="false">New</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#returnusers" role="tab" aria-controls="pills-contact" aria-selected="false">Returning</a>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="allusers" role="tabpanel" aria-labelledby="pills-home-tab">
            <AllUsers data={this.state.devices} channel={this.state.channels} location={this.state.location}
            dayOfWeek = {this.state.dayOfWeek} hourOfDay={this.state.hourOfDay} topProduct={this.state.topProduct}
            aggregatedInfo = {this.state.aggregatedInfo} browser={this.state.browser}/>
          </div>
          <div className="tab-pane fade" id="newusers" role="tabpanel" aria-labelledby="pills-profile-tab">
            <NewUser data={this.state.devices} channel={this.state.channelsNew} dayOfWeek = {this.state.dayOfWeekNew} 
            hourOfDay={this.state.hourOfDayNew} topProduct={this.state.topProductNew} aggregatedInfo={this.state.aggregatedInfoNew}
            browser={this.state.browserNew} /> 
         
          </div>
          <div className="tab-pane fade" id="returnusers" role="tabpanel" aria-labelledby="pills-contact-tab">
            <ReturnUsers data={this.state.devices} channel={this.state.channelsRe} dayOfWeek = {this.state.dayOfWeekRe} 
            hourOfDay={this.state.hourOfDayRe} aggregatedInfo = {this.state.aggregatedInfoRe} topProduct={this.state.topProductRe}
            browser={this.state.browserRe}/> 
          </div>
        </div>
      </div>
    )
  }
}

export default Overview;