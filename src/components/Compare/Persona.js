import React, { Component } from 'react';
import '../../style.css';
import dollar from '../../imgs/dollar.svg';
import lady from '../../imgs/lady.svg';
import map from '../../imgs/map.svg';

class Persona extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="text-center">Previous Month (November)</h4>
                        <div className="col-md-12 mt-lg-0 mt-3  pr-2 pl-2 pl-lg-3">
                            <div className="col-12 lxr-box-shadow py-3 p-0 h-100">
                            <div className="col-12">
                                <p className=""><img src={dollar} alt="dollar" style={{ width: '20px', height: '20px' }} /> &nbsp; Monthly purchases are above $50.</p>
                                <p className="pt-3"><i className="fa fa-eye fa-1x" aria-hidden="true" ></i> &nbsp; She visits the <b>website {!this.props.aggregatedInfo ? <i className="fa fa-spinner fa-pulse fa-1x fa-fw"></i> : this.props.aggregatedInfo.avgVisits}</b> times a month.</p>
                                <p className="pt-3"><i className="fa fa-shopping-bag" aria-hidden="true"></i> &nbsp; Her bag value <b>amounts to ${!this.props.aggregatedInfo ? <i className="fa fa-spinner fa-pulse fa-1x fa-fw"></i> : this.props.aggregatedInfo.avgBagValueDesktop}</b>.</p>
                                <p className="pt-3"><i className="fa fa-bullseye" aria-hidden="true"></i>&nbsp; She <b>purchases {!this.props.aggregatedInfo ? <i className="fa fa-spinner fa-pulse fa-1x fa-fw"></i> : this.props.aggregatedInfo.avgItems} - {!this.props.aggregatedInfo ? <i></i> : this.props.aggregatedInfo.avgItems + 1} items</b> in an order.</p>
                                {/* <p className="pt-3"><img src={map} alt="map"style={{ width: '20px', height: '20px' }} />&nbsp; She visits the <b>website from {!this.props.aggregatedInfo ? <i className="fa fa-spinner fa-pulse fa-1x fa-fw"></i> : this.props.aggregatedInfo.highValueCustomerCity},{!this.props.aggregatedInfo ? <i ></i> : this.props.aggregatedInfo.highValueCustomerCountry}</b>.</p> */}

                                <p className="pt-3"><img src={map} alt="map"style={{ width: '20px', height: '20px' }} />&nbsp; She visits the <b>website from California,United States</b>.</p>
                            </div>
                            </div>
                        </div><br/>
                        <div className="col-md-12 mt-lg-0 mt-3  pr-2 pl-2 pl-lg-3">
                            <div className="col-12 lxr-box-shadow py-3 p-0 h-100">
                                <div className="card border-light " >
                                    <div className="card-header text-center"><i className="fa fa-desktop fa-2x align-middle" aria-hidden="true"></i> <b>Behaviour on Desktop</b> </div>
                                    <div className="card-body">

                                        <div className="card-text">
                                            <table className="table">
                                                <tbody>
                                                    <tr style={{ borderTop: '0 !important' }}>
                                                        <td className="align-middle"><i className="fa fa-clock-o" aria-hidden="true"></i></td>
                                                        <td>Most likely to buy between <b>12PM - 4PM</b>.</td>
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
                        </div><br/>
                        <div className="col-md-12 mt-lg-0 mt-3  pr-2 pl-2 pl-lg-3">
                            <div className="col-12 lxr-box-shadow py-3 p-0 h-100">
                                <div className="card border-light ">
                                    <div className="card-header text-center"><i className="fa fa-mobile fa-2x align-middle" aria-hidden="true"></i> <b>Behaviour on Mobile</b></div>
                                    <div className="card-body">
                                        <div className="card-text">
                                            <table className="table">
                                                <tbody>
                                                    <tr style={{ borderTop: '0 !important' }}>
                                                        <td className="align-middle"><i className="fa fa-clock-o" aria-hidden="true"></i></td>
                                                        <td>Most likely to buy between <b>2PM - 4PM</b>.</td>
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
                        </div><br/>
                    </div>
                    <div className="col-md-6">
                        <h4 className="text-center">Current Month (December)</h4>
                        <div className="col-md-12 mt-lg-0 mt-3  pr-2 pl-2 pl-lg-3">
                            <div className="col-12 lxr-box-shadow py-3 p-0 h-100">
                            <div className="col-12">
                                <p className=""><img src={dollar} alt="dollar" style={{ width: '20px', height: '20px' }} /> &nbsp; Monthly purchases are above $50.</p>
                                <p className="pt-3"><i className="fa fa-eye fa-1x" aria-hidden="true" ></i> &nbsp; She visits the <b>website {!this.props.CaggregatedInfo ? <i className="fa fa-spinner fa-pulse fa-1x fa-fw"></i> : this.props.CaggregatedInfo.avgVisits}</b> times a month.</p>
                                <p className="pt-3"><i className="fa fa-shopping-bag" aria-hidden="true"></i> &nbsp; Her bag value <b>amounts to ${!this.props.CaggregatedInfo ? <i className="fa fa-spinner fa-pulse fa-1x fa-fw"></i> : this.props.CaggregatedInfo.avgBagValueDesktop}</b>.</p>
                                <p className="pt-3"><i className="fa fa-bullseye" aria-hidden="true"></i>&nbsp; She <b>purchases {!this.props.CaggregatedInfo ? <i className="fa fa-spinner fa-pulse fa-1x fa-fw"></i> : this.props.CaggregatedInfo.avgItems} - {!this.props.CaggregatedInfo ? <i></i> : this.props.CaggregatedInfo.avgItems + 1} items</b> in an order.</p>
                                {/* <p className="pt-3"><img src={map} alt="map"style={{ width: '20px', height: '20px' }} />&nbsp; She visits the website from <b>{!this.props.CaggregatedInfo ? <i className="fa fa-spinner fa-pulse fa-1x fa-fw"></i> : this.props.CaggregatedInfo.highValueCustomerCity},{!this.props.CaggregatedInfo ? <i ></i> : this.props.aggregatedInfo.highValueCustomerCountry}</b></p> */}
                                <p className="pt-3"><img src={map} alt="map"style={{ width: '20px', height: '20px' }} />&nbsp; She visits the <b>website from California,United States</b>.</p>
                            </div>
                            </div>
                        </div><br/>
                        <div className="col-md-12 mt-lg-0 mt-3  pr-2 pl-2 pl-lg-3">
                            <div className="col-12 lxr-box-shadow py-3 p-0 h-100">
                            <div className="card border-light " >
                                    <div className="card-header text-center"><i className="fa fa-desktop fa-2x align-middle" aria-hidden="true"></i> <b>Behaviour on Desktop</b> </div>
                                    <div className="card-body">

                                        <div className="card-text">
                                            <table className="table">
                                                <tbody>
                                                    <tr style={{ borderTop: '0 !important' }}>
                                                        <td className="align-middle"><i className="fa fa-clock-o" aria-hidden="true"></i></td>
                                                        <td>Most likely to buy between <b>12PM - 4PM</b>.</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="align-middle"><i className="fa fa-bullhorn" aria-hidden="true"></i></td>
                                                        <td><b>{!this.props.CaggregatedInfo ? <i className="fa fa-spinner fa-pulse fa-1x fa-fw"></i> : this.props.CaggregatedInfo.dekstopPPC}</b> chance of buying from <b>paid</b> campaign.</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="align-middle"><i className="fa fa-calendar-o" aria-hidden="true"></i></td>
                                                        <td><b>{!this.props.CaggregatedInfo ? <i className="fa fa-spinner fa-pulse fa-1x fa-fw"></i> : this.props.CaggregatedInfo.weekOfDayBuyingChancesdesk}</b> chance of buying on a <b>{!this.props.CaggregatedInfo ? <i className="fa fa-spinner fa-pulse fa-1x fa-fw"></i> : this.props.CaggregatedInfo.dektopWeekOfDay}</b> which is highest among all days of week.</td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><br/>
                        <div className="col-md-12 mt-lg-0 mt-3  pr-2 pl-2 pl-lg-3">
                            <div className="col-12 lxr-box-shadow py-3 p-0 h-100">
                            <div className="card border-light ">
                                    <div className="card-header text-center"><i className="fa fa-mobile fa-2x align-middle" aria-hidden="true"></i> <b>Behaviour on Mobile</b></div>
                                    <div className="card-body">
                                        <div className="card-text">
                                            <table className="table">
                                                <tbody>
                                                    <tr style={{ borderTop: '0 !important' }}>
                                                        <td className="align-middle"><i className="fa fa-clock-o" aria-hidden="true"></i></td>
                                                        <td>Most likely to buy between <b>2PM - 4PM</b>.</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="align-middle"><i className="fa fa-bullhorn" aria-hidden="true"></i></td>
                                                        <td> <b>{!this.props.CaggregatedInfo ? <i className="fa fa-spinner fa-pulse fa-1x fa-fw"></i> : this.props.CaggregatedInfo.mobilePPC}</b> chance of buying from <b>paid</b> campaign.</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="align-middle"><i className="fa fa-calendar-o" aria-hidden="true"></i></td>
                                                        <td><b>{!this.props.CaggregatedInfo ? <i className="fa fa-spinner fa-pulse fa-1x fa-fw"></i> : this.props.CaggregatedInfo.weekOfDayBuyingChancesMob}</b> chance of buying on a <b>{!this.props.CaggregatedInfo ? <i className="fa fa-spinner fa-pulse fa-1x fa-fw"></i> : this.props.CaggregatedInfo.mobileWeekOfDay}</b> which is highest among all days of week.</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><br/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Persona;
