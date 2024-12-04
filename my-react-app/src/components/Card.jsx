import profilePic from '../assets/tired-jake.jpg';

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" height={250} width={250}></img>
            <h2 className="card-title">Vivian</h2>
            <p className="card-text">I like painting and I drink an insane amount of coffee</p>
        </div>
    );
}

export default Card