import './index.css'

const MatchCard = props => {
  const {eachMatch} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = eachMatch
  const resultColor = matchStatus === 'Won' ? 'match-win' : 'match-lost'
  console.log(eachMatch)
  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-card-image"
      />
      <p className="match-card-competing-team">{competingTeam}</p>
      <p className="match-card-result">{result}</p>
      <p className={`match-card-status ${resultColor}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
