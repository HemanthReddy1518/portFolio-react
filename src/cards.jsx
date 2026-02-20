


function Card({ title, info, url, img }) {

    const isInternalLink = url.startsWith("#");

    return (
        < div className='cards'>
            <a href={url} target={isInternalLink ? "_self" : "_blank"}>
                <img src={img} alt={title}></img>
            </a>
            <h4>{title}</h4>
            <p>{info}</p>

        </div>
    );
}
export default Card