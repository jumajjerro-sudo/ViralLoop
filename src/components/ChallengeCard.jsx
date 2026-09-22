function ChallengeCard(props) {
    return (
        <article className='challenge-card'>
            <p>{props.category}</p>

            <h3>{props.title}</h3>

            <p>{props.description}</p>

            <p>{props.participants.toLocaleString()} participants</p>

            <button onClick={() => props.onJoin(props.id)}
                disabled={props.joined}
                >
                {props.joined ? '✓ Joined' : 'Join Challenge'}
            </button>
        </article>
    )
}

export default ChallengeCard