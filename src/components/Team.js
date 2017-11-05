import React from 'react';

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.handleUpWin = this.handleUpWin.bind(this);
    this.handleUpTie = this.handleUpTie.bind(this);
    this.handleUpLost = this.handleUpLost.bind(this);
  }

  handleUpWin(){
    this.props.onWin(this.props.id);
  }
  handleUpTie(){
    this.props.onTie(this.props.id);
  }
  handleUpLost(){
    this.props.onLost(this.props.id);
  }

  render(){
    return(
      <tr className="team">
       <td>
        {this.props.title}
       </td>
       <td>
        {this.props.mach}
       </td>
       <td>
        {this.props.wins}
       </td>
       <td>
        {this.props.tie}
       </td>
       <td>
        {this.props.lost}
       </td>
       <td>
        {this.props.points}
       </td>
       <td>
        <a className="btn btn-default" onClick={this.handleUpWin} style={{cursor:"pointer"}}>Wins</a>
        <a className="btn btn-default" onClick={this.handleUpTie} style={{cursor:"pointer"}}>Tie</a>
        <a className="btn btn-default" onClick={this.handleUpLost} style={{cursor:"pointer"}}>Lost</a>
       </td>
      </tr>
    );
  }
}

export default Team;
