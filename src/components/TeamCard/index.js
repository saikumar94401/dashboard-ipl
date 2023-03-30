import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamData} = props
  const {id, name, teamImageUrl} = teamData
  return (
    <Link to={`/team-matches/${id}`} className="each-team-container">
      <li className="each-team-li">
        <img src={teamImageUrl} className="each-team-image" alt={`${name}`} />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
