import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamDetails: [], isLoading: true}

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedTeamData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamDetails: updatedTeamData, isLoading: false})
  }

  render() {
    const {teamDetails, isLoading} = this.state
    console.log(teamDetails)
    return (
      <div className="ipl-match-container">
        <div className="ipl-dashboard-container">
          <div className="ipl-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
              alt="ipl logo"
              className="ipl-logo-image"
            />
            <h1 className="ipl-logo-heading">IPL DASHBOARD</h1>
          </div>
          <div className="team-card-container">
            {isLoading ? (
              <div data-testid="loader">
                <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
              </div>
            ) : (
              <ul className="team-card-list">
                {teamDetails.map(teamData => (
                  <TeamCard key={teamData.id} teamData={teamData} />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
