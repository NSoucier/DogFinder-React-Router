import './Home.css'

function Home({ dogs }) {

    return (
        <>
            {dogs.map(dog => (
                <div key={dog.name}>
                    <p>My name is {dog.name}.</p>
                    <p>I am {dog.age} year(s) old.</p>
                    <p>Fact: {dog.facts[0]}</p>
                </div>
            ))}
        </>
    )
}

export default Home;