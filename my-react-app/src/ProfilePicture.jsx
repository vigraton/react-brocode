//Example 2 of click events

function ProfilePicture(){

    const imageUrl = '/src/assets/gunther.jpg';
    const handleClick = (e) => e.target.style.display = "none";

    return(<img onClick={(e) => handleClick(e)} src={imageUrl} height={200}></img>);
}

export default ProfilePicture