import ChallengeCard from './ChallengeCard'

function ChallengeSection(props) {

    return (
        <>
            <section className='challenge-section'>
                <h2>Explore Challenges</h2>

                <div className="challenge-grid">
                    { props.challenges.map( function(challenge) {
                        return (
                            <ChallengeCard
                                key={challenge.id}
                                id={challenge.id}
                                title={challenge.title}
                                category={challenge.category}
                                description={challenge.description}
                                participants={challenge.participants}
                                joined={challenge.joined}
                                onJoin={props.onJoin}
                            />
                        )
                      })
                    }
                </div>
            </section>
        </>
    )
}

export default ChallengeSection