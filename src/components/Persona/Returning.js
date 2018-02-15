import React, { Component } from 'react';
import dollar from '../../imgs/dollar.svg';
import lady from '../../imgs/lady.svg';
import map from '../../imgs/map.svg';
class Returning extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 pt-5 order-lg-1 order-1">
            <p className=""><img src={dollar} alt="dollar" style={{ width: '20px', height: '20px' }} /> &nbsp; Monthly purchases are above $50.</p>
            <p className="pt-5"><i className="fa fa-eye fa-1x" aria-hidden="true" ></i> &nbsp; She visits the <b>website {!this.props.aggregatedInfo ? <i className="fa fa-spinner fa-pulse fa-1x fa-fw"></i> : this.props.aggregatedInfo.avgVisits}</b> times a month.</p>
          </div>
          <div className="col-md-4 order-lg-3 order-2">
            <p className="pt-5"><i className="fa fa-shopping-bag" aria-hidden="true"></i> &nbsp; Her bag value <b>amounts to ${!this.props.aggregatedInfo ? <i className="fa fa-spinner fa-pulse fa-1x fa-fw"></i> : this.props.aggregatedInfo.avgBagValueDesktop}</b> .</p>
            <p className="pt-5"><i className="fa fa-bullseye" aria-hidden="true"></i>&nbsp; She <b>purchases {!this.props.aggregatedInfo ? <i className="fa fa-spinner fa-pulse fa-1x fa-fw"></i> : this.props.aggregatedInfo.avgItems} - {!this.props.aggregatedInfo ? <i></i> : this.props.aggregatedInfo.avgItems + 1} items</b> in an order.</p>
          </div>
          <div className="col-md-3 text-center align-middle order-lg-2 order=3">
            <img src={lady} alt="person"/>
            <b>Returning Customer</b><br />
            <b>Age 25-35</b><br />
            {/* <p><img src={map} alt="map" /> &nbsp; {!this.props.aggregatedInfo ? <i className="fa fa-spinner fa-pulse fa-1x fa-fw"></i> : this.props.aggregatedInfo.highValueCustomerCity},{!this.props.aggregatedInfo ? <i ></i> : this.props.aggregatedInfo.highValueCustomerCountry}</p> */}
            <p><img src={map} alt="map" /> &nbsp; California,United States</p>

          </div>
          </div>
          <div className="row">
          <div className="col-md-6">
            <div className="card border-light " >
              <div className="card-header text-center"><i className="fa fa-desktop fa-2x align-middle" aria-hidden="true"></i> <b>Behaviour on Desktop</b> </div>
              <div className="card-body">

                <div className="card-text">
                  <table className="table">
                    <tbody>
                      <tr style={{ borderTop: '0 !important' }}>
                        <td className="align-middle"><i className="fa fa-clock-o" aria-hidden="true"></i></td>
                        <td>Most likely to buy between <b>4PM - 8PM</b>.</td>
                      </tr>
                      <tr>
                        <td className="align-middle"><i className="fa fa-bullhorn" aria-hidden="true"></i></td>
                        <td><b>{!this.props.aggregatedInfo ? <i className="fa fa-spinner fa-pulse fa-1x fa-fw"></i> : this.props.aggregatedInfo.dekstopPPC}</b> chance of buying from <b>paid</b> campaign.</td>
                      </tr>
                      <tr>
                        <td className="align-middle"><i className="fa fa-calendar-o" aria-hidden="true"></i></td>
                        <td><b>{!this.props.aggregatedInfo ? <i className="fa fa-spinner fa-pulse fa-1x fa-fw"></i> : this.props.aggregatedInfo.weekOfDayBuyingChancesdesk}</b> chance of buying on a <b>{!this.props.aggregatedInfo ? <i className="fa fa-spinner fa-pulse fa-1x fa-fw"></i> : this.props.aggregatedInfo.dektopWeekOfDay}</b> which is highest among all days of week.</td>
                      </tr>
                    </tbody>
                  </table>

                </div>
              </div>
            </div>
            </div>
            <div className="col-md-6">
            <div className="card border-light ">
              <div className="card-header text-center"><i className="fa fa-mobile fa-2x align-middle" aria-hidden="true"></i> <b>Behaviour on Mobile</b></div>
              <div className="card-body">
                <div className="card-text">
                  <table className="table">
                    <tbody>
                      <tr style={{ borderTop: '0 !important' }}>
                        <td className="align-middle"><i className="fa fa-clock-o" aria-hidden="true"></i></td>
                        <td>Most likely to buy between <b>6PM - 8PM</b>.</td>
                      </tr>
                      <tr>
                        <td className="align-middle"><i className="fa fa-bullhorn" aria-hidden="true"></i></td>
                        <td><b>{!this.props.aggregatedInfo ? <i className="fa fa-spinner fa-pulse fa-1x fa-fw"></i> : this.props.aggregatedInfo.mobilePPC}</b> chance of buying from <b>paid</b> campaign.</td>
                      </tr>
                      <tr>
                        <td className="align-middle"><i className="fa fa-calendar-o" aria-hidden="true"></i></td>
                        <td><b>{!this.props.aggregatedInfo ? <i className="fa fa-spinner fa-pulse fa-1x fa-fw"></i> : this.props.aggregatedInfo.weekOfDayBuyingChancesMob}</b> chance of buying on a <b>{!this.props.aggregatedInfo ? <i className="fa fa-spinner fa-pulse fa-1x fa-fw"></i> : this.props.aggregatedInfo.mobileWeekOfDay}</b> which is highest among all days of week.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Returning;
