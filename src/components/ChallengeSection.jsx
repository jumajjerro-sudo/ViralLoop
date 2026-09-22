import { useState } from 'react'
import ChallengeCard from './ChallengeCard'
import CreateChallenge from './CreateChallenge'

function ChallengeSection() {
    const [challenges, setChallenges] = useState([
        {
            id: 1,
            title: '30 Day Fitness Challnge',
            category: 'Fitness',
            participants: 12450,
            joined: false
        },
        {
            id: 2,
            title: 'Build in public',
            category: 'Technology',
            participants: 38200,
            joined: false
        },
        {
            id: 3,
            title: 'Photography Challenges',
            category: 'Creative',
            participants: 9210,
            joined: false
        }
    ])

    function joinChallenge(id) {
        setChallenges(
            challenges.map(function(challenge) {

                if (challenge.id === id) {
                    
                    if (challenge.joined) {
                        return challenge
                    }

                return {
                    ...challenge, 
                    participants: challenge.participants + 1,
                    joined: true
                }
            }

            return challenge
            })
        )
    }

    function createChallenge(data) {
        const newChallenge = {
            id: Date.now,
            title: data.title,
            category: data.category,
            description: data.description,
            participants: 0,
            joined: false
        }

        setChallenges([
            ...challenges,
            newChallenge
        ])
    }

    return (
        <>

            <CreateChallenge onCreate={createChallenge} />

            <section className='challenge-section'>
                <h2>Explore Challenges</h2>

                <div className="challenge-grid">
                    { challenges.map( function(challenge) {
                        return (
                            <ChallengeCard
                                key={challenge.id}
                                id={challenge.id}
                                title={challenge.title}
                                category={challenge.category}
                                participants={challenge.participants}
                                joined={challenge.joined}
                                onJoin={joinChallenge}
                            />
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default ChallengeSection