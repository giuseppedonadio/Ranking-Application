import React from 'react';
import Team from './Team';

const teams = [
  {
    id: 1,
    title: 'Inter',
    mach:0,
    points: 0,
    wins: 0,
    lost: 0,
    tie: 0,
  },
  {
    id: 2,
    title: 'Juve',
    mach:0,
    points: 0,
    wins: 0,
    lost: 0,
    tie: 0,
  },
  {
    id: 3,
    title: 'Lazio',
    mach:0,
    points: 0,
    wins: 0,
    lost: 0,
    tie: 0,
  },
  {
    id: 4,
    title: 'Milan',
    mach:0,
    points: 0,
    wins: 0,
    lost: 0,
    tie: 0,
  },
  {
    id: 5,
    title: 'Napoli',
    mach:0,
    points: 0,
    wins: 0,
    lost: 0,
    tie: 0,
  },
  {
    id: 6,
    title: 'Roma',
    mach:0,
    points: 0,
    wins: 0,
    lost: 0,
    tie: 0,
  },
];

class TeamList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      teams : [],
    }
    this.handleTeamUpWin = this.handleTeamUpWin.bind(this);
    this.handleTeamUpTie = this.handleTeamUpTie.bind(this);
    this.handleTeamUpLost = this.handleTeamUpLost.bind(this);
  }

  componentDidMount(){
    this.setState({teams:teams});
  }


  handleTeamUpWin(teamId){
    const nextTeams = this.state.teams.map((team) => {
      if(team.id === teamId){
        return Object.assign({}, team, {
          points : team.points + 3,
          wins : team.wins + 1,
          mach : team.mach + 1,
        });
      }else{
        return team;
      }
    });
    this.setState({
      teams : nextTeams,
    });
    console.log(teamId + ' was updated');
  }

  handleTeamUpTie(teamId){
    const nextTeams = this.state.teams.map((team) => {
      if(team.id === teamId){
        return Object.assign({}, team, {
          points : team.points + 1,
          tie : team.tie + 1,
          mach: team.mach + 1,
        });
      }else{
        return team;
      }
    });
    this.setState({
      teams : nextTeams,
    });
    console.log(teamId + ' was updated');
  }

  handleTeamUpLost(teamId){
    const nextTeams = this.state.teams.map((team) => {
      if(team.id === teamId){
        return Object.assign({}, team, {
          lost : team.lost + 1,
          mach : team.mach + 1,
        });
      }else{
        return team;
      }
    });
    this.setState({
      teams : nextTeams,
    });
    console.log(teamId + ' was updated');
  }

  render(){
    const t = this.state.teams.sort((a,b) => (
      b.points - a.points
    ));
    const teamComponents = t.map((team) => (
      <Team
        key={'team-' + team.id}
        id={team.id}
        title={team.title}
        description={team.description}
        points={team.points}
        wins={team.wins}
        lost={team.lost}
        tie={team.tie}
        mach={team.mach}
        onWin={this.handleTeamUpWin}
        onTie={this.handleTeamUpTie}
        onLost={this.handleTeamUpLost}
      />
    ));
    return(
      <table className="teamList table table-striped">
        <thead>
          <tr className="active">
           <td>
            Team
           </td>
           <td>
            Mach
           </td>
           <td>
            Wins
           </td>
           <td>
            Tie
           </td>
           <td>
            Lost
           </td>
           <td>
            Points
           </td>
           <td>

           </td>
          </tr>
        </thead>
        <tbody>
        {teamComponents}
        </tbody>
      </table>
    );
  }
}

export default TeamList;
