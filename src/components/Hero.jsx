function Hero(props) {
    return (
        <main className='hero'>
            <div className='hero-content'>
                <p className="hero-label">THE SOCIAL PARTICIPATION PLATFORM</p>

                <h1>{props.title}</h1>

                <p className="hero-description">{props.description}</p>


                <div className='hero-actions'>
                    <button>Explore Challenges</button>
                    <button className='secondary-button'
                    onClick={ () => {
                        document.getElementById('create-challenge').scrollIntoView({ behavior: 'smooth' })
                    }}>
                        Create a Challenge
                    </button>
                </div>
            </div>
        </main>
    )
}

export default Hero