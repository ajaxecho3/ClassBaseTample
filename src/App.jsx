import React, { Component } from 'react'
import './App.css'
import Collapse from './components/icons/Collapse'
import Expand from './components/icons/Expand'
import LessThan from './components/icons/LessThan'
import GreaterThan from './components/icons/GreaterThan'

class App extends Component {

  constructor() {
    super()
    this.state = {
      collapsed: false,
      selectedDate: new Date()
    }
  }

  options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  handleCollapse = () => {
    this.setState({ collapsed: !this.state.collapsed })
  }

  handleMovePrevdate = () => {
    this.setState({ ...this.state, selectedDate: new Date(this.state.selectedDate.setDate(this.state.selectedDate.getDate() - 1)) })
  }

  handleMoveNextdate = () => {
    this.setState({ ...this.state, selectedDate: new Date(this.state.selectedDate.setDate(this.state.selectedDate.getDate() + 1)) })
  }

  sampleData = [{ "Name": "Mickie Feathers", "OP": "OP5", "Time": "6:37 PM", "Unaccepted OR Potential Tx": null, "Proposed Value\t": 648, "Accepted Value\t": 665, "Elective": "accumsan felis ut at dolor", "Proposed_Value": 633, "Accepted_Value": 625, "Total": 547, "Staff": 667, "Review": "", "Team Member": "", "Referral Name": "", "Team_Member": "", "Follow Up": true, "Follow Up Date": null },
  { "Name": "Harlie Calow", "OP": "OP5", "Time": "4:43 PM", "Unaccepted OR Potential Tx": "in hac habitasse platea dictumst", "Proposed Value\t": 958, "Accepted Value\t": 321, "Elective": "ac tellus semper interdum mauris", "Proposed_Value": 943, "Accepted_Value": 768, "Total": 808, "Staff": 843, "Review": "", "Team Member": "", "Referral Name": null, "Team_Member": "", "Follow Up": true, "Follow Up Date": "6/28/2024" },
  { "Name": "Mellicent Stoggles", "OP": "OP4", "Time": "1:45 PM", "Unaccepted OR Potential Tx": "sed lacus morbi sem mauris", "Proposed Value\t": 236, "Accepted Value\t": 624, "Elective": "sit amet sem fusce consequat", "Proposed_Value": 797, "Accepted_Value": 449, "Total": 786, "Staff": 93, "Review": "", "Team Member": "", "Referral Name": "", "Team_Member": "", "Follow Up": true, "Follow Up Date": "5/3/2024" },
  { "Name": "Olivero Biesterfeld", "OP": "OP4", "Time": "8:11 AM", "Unaccepted OR Potential Tx": "nulla justo aliquam quis turpis", "Proposed Value\t": 570, "Accepted Value\t": 232, "Elective": "pretium iaculis diam erat fermentum", "Proposed_Value": 637, "Accepted_Value": 568, "Total": null, "Staff": 416, "Review": "", "Team Member": "", "Referral Name": "", "Team_Member": "", "Follow Up": false, "Follow Up Date": "6/23/2024" },
  { "Name": "Sallie D'Onise", "OP": "OP1", "Time": "9:26 AM", "Unaccepted OR Potential Tx": "condimentum neque sapien placerat ante", "Proposed Value\t": 525, "Accepted Value\t": 335, "Elective": "lorem id ligula suspendisse ornare", "Proposed_Value": 621, "Accepted_Value": 10, "Total": 709, "Staff": 48, "Review": "", "Team Member": "", "Referral Name": null, "Team_Member": "", "Follow Up": true, "Follow Up Date": "4/28/2024" },
  { "Name": "Winthrop Antonognoli", "OP": "OP1", "Time": "11:40 AM", "Unaccepted OR Potential Tx": "erat fermentum justo nec condimentum", "Proposed Value\t": 174, "Accepted Value\t": 29, "Elective": "felis sed lacus morbi sem", "Proposed_Value": 759, "Accepted_Value": 488, "Total": 897, "Staff": 143, "Review": "", "Team Member": "", "Referral Name": "", "Team_Member": null, "Follow Up": true, "Follow Up Date": "5/6/2024" },
  { "Name": "Angela Beckhurst", "OP": "OP4", "Time": "1:43 PM", "Unaccepted OR Potential Tx": "orci pede venenatis non sodales", "Proposed Value\t": 5, "Accepted Value\t": 331, "Elective": "consequat morbi a ipsum integer", "Proposed_Value": 551, "Accepted_Value": 534, "Total": 474, "Staff": 387, "Review": "", "Team Member": "", "Referral Name": "", "Team_Member": "", "Follow Up": true, "Follow Up Date": "4/23/2024" },
  { "Name": "Prudi Davidovich", "OP": "OP1", "Time": "5:11 PM", "Unaccepted OR Potential Tx": "sit amet diam in magna", "Proposed Value\t": 537, "Accepted Value\t": 536, "Elective": "dapibus augue vel accumsan tellus", "Proposed_Value": 684, "Accepted_Value": 116, "Total": 702, "Staff": 169, "Review": null, "Team Member": "", "Referral Name": "", "Team_Member": null, "Follow Up": true, "Follow Up Date": "6/6/2024" },
  { "Name": "Wally Pettegre", "OP": "OP2", "Time": "5:40 PM", "Unaccepted OR Potential Tx": "in felis eu sapien cursus", "Proposed Value\t": 700, "Accepted Value\t": 801, "Elective": "leo maecenas pulvinar lobortis est", "Proposed_Value": 227, "Accepted_Value": 545, "Total": 138, "Staff": 153, "Review": "", "Team Member": "", "Referral Name": null, "Team_Member": "", "Follow Up": true, "Follow Up Date": "6/19/2024" },
  { "Name": "Iseabal Lamcken", "OP": "OP5", "Time": "11:59 AM", "Unaccepted OR Potential Tx": "morbi quis tortor id nulla", "Proposed Value\t": 437, "Accepted Value\t": 856, "Elective": "nonummy maecenas tincidunt lacus at", "Proposed_Value": null, "Accepted_Value": 434, "Total": 536, "Staff": 964, "Review": "", "Team Member": "", "Referral Name": "", "Team_Member": null, "Follow Up": false, "Follow Up Date": "6/13/2024" }]
  tableHeader = Object.keys(this.sampleData[0])
  render() {
    return (
      <div className='canvas'>
        <div className='collapsible'>
          <div className='collapsible-header'>
            <div className='left-content'>
              {
                this.state.collapsed ?
                  <button className="button-icon" onClick={this.handleCollapse}>
                    <Collapse size="32px" />
                  </button>
                  :
                  <button className='button-icon' onClick={this.handleCollapse}>
                    <Expand size="32px" />
                  </button>
              }
              <span className='header-title'>Daily Line Up</span>
              <div className='date-selector'>
                <button className='button-icon' onClick={this.handleMovePrevdate}>
                  <LessThan size="16px" />
                </button>
                <span>{this.state.selectedDate.toLocaleDateString('en-US', this.options)}</span>
                <button className='button-icon' onClick={this.handleMoveNextdate}>
                  <GreaterThan size="16px" />
                </button>
              </div>
            </div>
            <div className='right-content'>
              <div className='display-selector'>
                <p>Collections Goal For Day</p>
                <p className='display-value'><span className='currency-span'>$</span> 13,956</p>
              </div>
              <div className='display-selector'>
                <p>Total Tx to Present</p>
                <p className='display-value'><span className='currency-span'>$</span> 13,956</p>
              </div>

            </div>
          </div>
          <div className='collapsible-body'>
            <table className='data-table'>
              <thead >

                <tr>
                  {
                    this.tableHeader.map((header, index) => (
                      <th key={index}>{header}</th>
                    ))
                  }
                </tr>
              </thead>
              <tbody>
                {
                  this.sampleData.map((data, index) => (
                    <tr key={index}>
                      {
                        Object.values(data).map((value, index) => (
                          <td key={index}>{value}</td>
                        ))
                      }
                    </tr>
                  ))
                }

              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default App
