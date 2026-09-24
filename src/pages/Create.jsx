import CreateChallenge from "../components/CreateChallenge"

function Create(props) {
    return (
        <>
            <CreateChallenge onCreate={props.onCreate}/>
        </>
    )
}

export default Create