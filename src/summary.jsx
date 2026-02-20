import profileImg from './assets/photo.jpg';

function Summary(props) {

    const Summary = props.summary;

    const Name = props.name;
    return (
        <header id="header">
            <div className='header-img'>
                <img src={profileImg} alt="ProfileImg" className='profile-img'></img>
                <h4>{Name}</h4>
            </div>
            <div className='summary-container'>
                <p>{Summary}</p>
            </div>
        </header>
    );

}

export default Summary