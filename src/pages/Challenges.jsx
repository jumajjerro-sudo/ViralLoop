import ChallengeSection from '../components/ChallengeSection'

function Challenges(props) {
    return (
        <ChallengeSection 
            challenges={props.challenges}
            onJoin={props.onJoin}
        />
    )
}

export default Challenges