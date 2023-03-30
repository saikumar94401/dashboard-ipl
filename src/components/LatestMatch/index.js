import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  console.log(latestMatchDetails)
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchDetails
  return (
    <div className="latest-match-card">
      <div className="latest-match-card-1">
        <p className="latest-match-competing-team">{competingTeam}</p>
        <p className="latest-match-date">{date}</p>
        <p className="latest-match-venue">{venue}</p>
        <p>{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest team ${competingTeam}`}
        className="latest-match-team-logo"
      />
      <div className="latest-match-card-right">
        <h2 className="latest-match-card-right-heading">First Innings</h2>
        <p className="latest-match-card-right-para">{firstInnings}</p>
        <h2 className="latest-match-card-right-heading">Second Innings</h2>
        <p className="latest-match-card-right-para">{secondInnings}</p>
        <h2 className="latest-match-card-right-heading">Man Of The Match</h2>
        <p className="latest-match-card-right-para">{manOfTheMatch}</p>
        <h2 className="latest-match-card-right-heading">Umpires</h2>
        <p className="latest-match-card-right-para">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
