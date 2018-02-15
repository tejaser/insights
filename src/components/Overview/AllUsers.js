import React, { Component } from 'react';
import { VictoryPie, VictoryChart, VictoryBar, VictoryLegend, VictoryAxis, VictoryLabel, VictoryTooltip } from 'victory';

class AllUsers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectValue: 'Monday',

    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ selectValue: e.target.value });
  }

  render() {

    let values = !this.props.topProduct ? { productName: 'Tyler', count: 123 } : this.props.topProduct; //array object list
    //  console.log(values)
    //  let maxValue = Math.max(...values.map(o => o.count));
    // let maxValue = values.reduce((a, b) => (a.count > b.count) ? a : b).count;
    let maxValue = 0;
    for (let i = 0; i < values.length; i++) {
      if (values[i].count > maxValue) {
        maxValue = values[i].count;
      }
    }
    //devices data
    var data = !this.props.data ? [{ deviceName: 'Tyler', userCount: 0 }] : this.props.data;
    //console.log(data)
    var result = [];
    data.forEach(function (a) {
      if (!this[a.deviceName]) {
        this[a.deviceName] = { "deviceName": a.deviceName, "userCount": 0 };
        result.push(this[a.deviceName]);
      }
      this[a.deviceName].userCount += a.userCount;
    }, Object.create(null));
    var total = 0;
        for (var i = 0; i < result.length; i++) {  //loop through the array
            total += result[i].userCount;  //Do the math!
        }

  //product data
  var pro = !this.props.topProduct ? <p>loading</p> : this.props.topProduct;
  var prototal = 0;
  for (var i = 0; i < pro.length; i++) {  //loop through the array
      prototal += pro[i].count;  //Do the math!
  }

    //day of week data
    var dow = !this.props.dayOfWeek ? [{ day: 'No-day', userCount: 0 }] : this.props.dayOfWeek;
    var dowfin = [];
    var sorter = {
      // "sunday": 0, // << if sunday is first day of week
      "monday": 1,
      "tuesday": 2,
      "wednesday": 3,
      "thursday": 4,
      "friday": 5,
      "saturday": 6,
      "sunday": 7
    }

    dow.forEach(function (b) {
      if (!this[b.day]) {
        this[b.day] = { "day": b.day, "userCount": 0 };
        dowfin.push(this[b.day]);
      }
      this[b.day].userCount += b.userCount;
    }, Object.create(null));
    dowfin.sort(function sortByDay(a, b) {
      var day1 = a.day.toLowerCase();
      var day2 = b.day.toLowerCase();
      return sorter[day1] > sorter[day2];
    });
    var dowtotal = 0;
    for(var i=0; i<dowfin.length; i++){
      dowtotal += dowfin[i].userCount;
    }
    // console.log(dowfin);
    //Hour of day
    var day = this.state.selectValue;
    var hod = !this.props.hourOfDay ? [{ hour: 'No-Hour', userCount: 0, day: "noday" }] : this.props.hourOfDay;
    // console.log(hod);
    var hodfin = hod.filter(function (user) {

      return user.day === day
    }).map(function (user) {

      return { "hour": user.hour, "userCount": user.userCount }
    })
    var hodtotal = 0;
    for(var i=0; i<hodfin.length; i++){
      hodtotal += hodfin[i].userCount;
    }
    // var hodfin = [];
    // // console.log(hodfin);
    // hod.forEach(function (b) {
    //   console.log(this[b.hour]);
    //   if (!this[b.hour]) {
    //     this[b.hour] = { "hour": b.hour, "userCount": 0, "day": b.day };
    //     hodfin.push(this[b.hour]);
    //   }
    //   this[b.hour].userCount += b.userCount;
    // }, Object.create(null));

    //channels data

    var ch = !this.props.browser ? [{ clickType: 'Click', clickSource: 'unknown', userCount: 0 }] : this.props.browser;
    var chfin = [];
    ch.forEach(function (b) {
      if (!this[b.clickType]) {
        this[b.clickType] = { "clickType": b.clickType, "clickSource": b.clickSource, "userCount": 0 };
        chfin.push(this[b.clickType]);
      }
      this[b.clickType].userCount += b.userCount;
    }, Object.create(null));
    var chtotal = 0;
    for (var i = 0; i < chfin.length; i++) {  //loop through the array
      chtotal += chfin[i].userCount;  //Do the math!
  }
    // console.log(chfin);
    //browser data
    var bro = !this.props.channel ? [{ bowserName: 'No-Browser', userCount: 0 }] : this.props.channel;
    var brofin = [];
    bro.forEach(function (b) {
      if (!this[b.bowserName]) {
        this[b.bowserName] = { "bowserName": b.bowserName, "userCount": 0 };
        brofin.push(this[b.bowserName]);
      }
      this[b.bowserName].userCount += b.userCount;
    }, Object.create(null));
    //  console.log(brofin)
    var brotop = brofin.sort(function (a, b) {
      return a.userCount < b.userCount ? 1 : -1;
    }).slice(0, 6);
    var brototal = 0;
    for (var i = 0; i < brotop.length; i++) {  //loop through the array
      brototal += brotop[i].userCount;  //Do the math!
  }
    // console.log(brotop);
    return (

      <div className="container">
        {/* {console.log(this.props.data)} */}
        <div className="row">

          <div className="col-md-4 mt-lg-0 mt-3  pr-2 pl-2 pl-lg-3">
            <div className="col-12 lxr-box-shadow py-3 p-0 h-100">
              <h4 className="lxr-grey pl-3">Devices</h4>
              <svg width={300} height={200}>
                <VictoryPie standalone={false}
                  innerRadius={50}
                  width={300} height={200}
                  padding={{
                    left: 0, bottom: 20, top: 20, right: 100
                  }}
                  colorScale={["#ff6384", "#36a2eb"]}
                  // data={[
                  //   { x: "Desktop", y: 35 },
                  //   { x: "Tablet", y: 40 },
                  //   { x: "Mobile", y: 55 }
                  // ]}
                  data={result}
                  x="deviceName"
                  y="userCount"
                  labels={(d) => `${Math.round((d.y/total)*100)}%`}
                  // labelComponent={<VictoryTooltip orientation="right" pointerLength={0} />}
                  labelRadius={50}
                  style={{ labels: { fontSize: 15, fill: "white" } }}
                //labelComponent={<CustomLabel/>}

                />
                <VictoryLabel
                  textAnchor="middle"
                  style={{ fontSize: 20 }}
                  x={100} y={100}
                  text="# of users"
                />
                <VictoryLegend standalone={false}
                  colorScale={["#ff6384", "#36a2eb"]}
                  x={220} y={50}
                  gutter={20}
                  centerTitle
                  orientation="vertical"
                  data={[
                    { name: `Desktop` }, { name: `Mobile` }
                  ]}
                />
              </svg>
            </div>
          </div>
          <div className="col-md-4 mt-lg-0 mt-3  pr-2 pl-2 pl-lg-3">
            <div className="col-12 lxr-box-shadow py-3 p-0 h-100">
              <h4 className="lxr-grey pl-3">Geo Location</h4>
              <div className="col-12">
                <table className="table">
                  <thead>
                    <tr className="font-weight-light">
                      <th >State</th>
                      <th >Proportion</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>CA</th>
                      <td>30%</td>

                    </tr>
                    <tr>
                      <th>NY</th>
                      <td>18%</td>

                    </tr>
                    <tr>
                      <th>NJ</th>
                      <td>12%</td>

                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-lg-0 mt-3  pr-2 pl-2 pl-lg-3">
            <div className="col-12 lxr-box-shadow py-3 p-0 h-100">
            
              <h4 className="lxr-grey pl-3">Channels</h4>
              <VictoryBar horizontal
                style={{
                  data: { fill: "#DE893E" }
                }}
                data={chfin}
               
                labels={(d) => `${d.x} (${d.clickSource}) : ${Math.round((d.y/chtotal)*100)}%`}
                labelComponent={<VictoryLabel x={50} dy={-15} />}
                x="clickType"
                y="userCount"
              />
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-4 mt-lg-0 mt-3  pr-2 pl-2 pl-lg-3">
            <div className="col-12 lxr-box-shadow py-3 p-0 h-100">
              {/* {console.log(this.props.dayOfWeek)} */}
              <h4 className="lxr-grey pl-3">Day of Week</h4>
              <VictoryChart domainPadding={10}>
                <VictoryBar
                  style={{ data: { fill: "#DE893E" } }}
                  data={dowfin} //dow is day of week data merged above
                  labels={(d) => `# of visits ${Math.round((d.y/dowtotal)*100)}%`}
                  x="day"
                  y="userCount"
                  labelComponent={<VictoryTooltip orientation="top" pointerLength={0} />}
                />
                {/* <VictoryAxis
                  tickValues={['Mon', 'Tue', 'Wed', 'Thru', 'Fri', 'Sat', 'Sun']}
                /> */}
              </VictoryChart>
            </div>
          </div>
          <div className="col-md-4 mt-lg-0 mt-3  pr-2 pl-2 pl-lg-3">
            <div className="col-12 lxr-box-shadow py-3 p-0 h-100">
              <div className="row"><h4 className=" col-7 lxr-grey pl-4">Hour of Day</h4>
                <form className="col-5 pr-4">
                  <div className="form-group">

                    <select className="form-control" id="days" defaultValue={this.state.selectValue} onChange={this.handleChange}>
                      <option value="Monday">Monday</option>
                      <option value="Tuesday">Tuesday</option>
                      <option value="Wednesday">Wednesday</option>
                      <option value="Thrusday">Thrusday</option>
                      <option value="Friday">Friday</option>
                      <option value="Saturday">Saturday</option>
                      <option value="Sunday">Sunday</option>
                    </select>
                  </div>
                </form>
              </div>


              <VictoryChart domainPadding={10}>
                <VictoryBar
                  style={{ data: { fill: "#DE893E" } }}
                  labels={(d) => `# of visits ${Math.round((d.y/hodtotal)*100)}%`}
                  data={hodfin}
                  x="hour"
                  y="userCount"
                  labelComponent={<VictoryTooltip orientation="top" pointerLength={0} />}
                />
              </VictoryChart>
            </div>
          </div>
          <div className="col-md-4 mt-lg-0 mt-3  pr-2 pl-2 pl-lg-3">
            <div className="col-12 lxr-box-shadow py-3 p-0 h-100">
              {/* {console.log(this.props.topProduct)} */}
              <h4 className="lxr-grey pl-3">Top Products</h4>
              <div className="col-12">
                <ul className="list-group list-group-flush">
                  {!this.props.topProduct ? <p>loading</p> : this.props.topProduct.map(function (data, index) {
                    return <li className="list-group-item d-flex justify-content-between align-items-center text-capitalize"
                      key={index}
                    >
                      {data.productName}
                      <span className="badge badge-primary badge-pill">{`${Math.round((data.count/prototal)*100)}%`}</span>
                    </li>
                  })}
                </ul>
              </div>
              {/* <VictoryChart domainPadding={{ y: 5 }}
            > */}
              {/* <VictoryBar horizontal
                style={{
                  data: { fill: "#DE893E" }
                }}
                // data={[
                //   { x: "Pro #1", y: 35 },
                //   { x: "Pro #2", y: 40 },
                //   { x: "Pro #3", y: 55 }
                // ]}
                data={this.props.topProduct}
                labels={(d) => `${d.x} : ${d.y}`}
                labelComponent={<VictoryLabel x={50} dy={-15} />}
                x="productName"
                y="count"
              /> */}
              {/* <VictoryAxis
                // tickValues={['Pro #1', 'Pro #2', 'Pro #3']}
                style={{ axis: { stroke: 'white' }, tickLabels: { fill: 'black', fontSize: 12 } }}
                dependentAxis
              />
            </VictoryChart> */}
            </div>
          </div>
        </div>

        <div className="row mt-3 mb-5">

          <div className=" col-12 mt-lg-0 mt-3  pr-2 pl-2 pl-lg-3">
            <div className="col-12 lxr-box-shadow py-3 p-0 h-100">
              <h4 className="lxr-grey pl-3">Key Takeaways</h4>
              <hr />
              <div className="row">
                <div className="col-md-4">
                  {/* <p><i className="fa fa-internet-explorer" aria-hidden="true" style={{color:'#02bdf2'}}></i> &nbsp;IE Shares went down by 10% &darr;</p> */}
                  {/* <p><i className="fa fa-desktop" aria-hidden="true"></i> &nbsp;Desktop Shares went up by 25% &uarr;</p> */}
                  {/* <div className="col-md-4"> */}
                  {/* {console.log(this.props.channel)} */}
                  <h4 className="lxr-grey pl-3"> Top Browsers</h4>
                  {/* <VictoryChart domainPadding={{ y: 10 }} width={400}
            > */}
                  <VictoryBar horizontal
                    style={{
                      data: { fill: "#DE893E" }
                    }}
                    data={brotop}
                    labels={(d) => `${d.x} : ${Math.round((d.y/brototal)*100)}%`}
                    labelComponent={<VictoryLabel x={50} dy={-15} />}
                    x="bowserName"
                    y="userCount"
                  />
                </div>
                <div className="col-md-4 border border-dark border-top-0 border-bottom-0">
                  <h3 className="text-center text-capitalize ">
                    {!this.props.topProduct ? <i className="fa fa-spinner fa-pulse fa-1x fa-fw"></i> : this.props.topProduct.filter(function (val) {
                      return val.count === maxValue

                    }).map(function (name) {
                      return name.productName
                    })}
                  </h3>
                  <p>Most popular product among both types of customers</p>
                </div>
                <div className="col-md-4">
                  {/* {console.log(this.props.aggregatedInfo)} */}
                  <p><i className="fa fa-calendar-minus-o" aria-hidden="true"></i> &nbsp;{!this.props.aggregatedInfo ? <i className="fa fa-spinner fa-pulse fa-1x fa-fw"></i> : this.props.aggregatedInfo.desktopBuying} chance of buying on a <b style={{ color: 'black' }}>{!this.props.aggregatedInfo ? <i className="fa fa-spinner fa-pulse fa-1x fa-fw"></i> : this.props.aggregatedInfo.dektopWeekOfDay}</b> which is highest of all days of week</p>
                  <p><i className="fa fa-clock-o" aria-hidden="true"></i> &nbsp;Most likely to buy between <b style={{ color: 'black' }} >{!this.props.aggregatedInfo ? <i className="fa fa-spinner fa-pulse fa-1x fa-fw"></i> : this.props.aggregatedInfo.mostBuyingHoursDesktop} Hour</b></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AllUsers;