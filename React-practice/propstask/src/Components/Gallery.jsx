
import Profile from './Profile';

function Gallery() {
    
    return (
        <div className='container d-flex flex-column justify-content-center align-items-center' style={{height : "100vh"}}>
            <h1 className='text-center'> Notable Scientists</h1>
            <div className='d-flex gap-4 mt-4'>
                <Profile name="Maria Skłodowska-Curie" img="szV5sdG" profession="physicist and chemist" AwardsNo="4" Awards="(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)" discovered="polonium (chemical element)" />
                <Profile name="Katsuko Saruhashi" img="YfeOqp2" profession="geochemist" AwardsNo="2" Awards="(Miyake Prize for geochemistry, Tanaka Prize)" discovered="a method for measuring carbon dioxide in seawater" />
            </div>
        </div>
    );
}


export default Gallery;




// This Gallery component contains some very similar markup for two profiles.
// Extract a Profile component out of it to reduce the duplication.
// You’ll need to choose what props to pass to it