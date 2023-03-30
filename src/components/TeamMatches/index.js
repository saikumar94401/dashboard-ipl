import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamBannerUrl: '',
    latestMatchDetails: {},
    recentMatches: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getEachMatchDetails()
  }

  getEachMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const teamBannerUrl = data.team_banner_url

    const latestMatchDetails = {
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      firstInnings: data.latest_match_details.first_innings,
      id: data.latest_match_details.id,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      matchStatus: data.latest_match_details.match_status,
      result: data.latest_match_details.result,
      secondInnings: data.latest_match_details.second_innings,
      umpires: data.latest_match_details.umpires,
      venue: data.latest_match_details.venue,
    }

    const recentMatches = data.recent_matches.map(each => ({
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      date: each.date,
      firstInnings: each.first_innings,
      id: each.id,
      manOfTheMatch: each.man_of_the_match,
      matchStatus: each.match_status,
      result: each.result,
      secondInnings: each.second_innings,
      umpires: each.umpires,
      venue: each.venue,
    }))

    this.setState({
      teamBannerUrl,
      latestMatchDetails,
      recentMatches,
      isLoading: false,
    })
  }

  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const {
      teamBannerUrl,
      isLoading,
      latestMatchDetails,
      recentMatches,
    } = this.state

    return (
      <div className={`ipl-team-match-container ${id}`}>
        <div className="ipl-each-team-container">
          <div className="banner-image-container">
            <img
              src={teamBannerUrl}
              alt="team banner"
              className="team-banner-image"
            />
          </div>
          {isLoading ? (
            <div data-testid="loader">
              <Loader
                type="BallTriangle"
                color="#00BFFF"
                height={80}
                width={80}
              />
            </div>
          ) : (
            <div className="bottom-match-container">
              <div className="latest-match-container">
                <h3 className="latest-match-heading">Latest Matches</h3>
                <LatestMatch latestMatchDetails={latestMatchDetails} />
              </div>
              <ul className="match-card-container">
                {recentMatches.map(eachMatch => (
                  <MatchCard eachMatch={eachMatch} key={eachMatch.id} />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default TeamMatches
