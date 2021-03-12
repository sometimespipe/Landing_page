
const Navbar = prop => {

    return (<nav className="navbar navbar-light bg-dark">
        <span className="navbar-brand mb-0 h1 text-white">Navbar</span>
        <ul className="nav justify-content-end">
            <li className="nav-item">
                <a className="nav-link text-white" href="#">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white" href="#">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white" href="#">Services</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white" href="#">Contact</a>
            </li>
        </ul>
    </nav>);
};

const Jumbotron = props => {

    return (
        <div className="jumbotron col-10 mx-auto w-100 mt-3" >
            <h1 className="display-4">{props.title}</h1>
            <p className="lead">{props.description}</p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href={props.buttonURL} role="button">{props.buttonText}</a>
            </p>
        </div>
    );
};

Jumbotron.PropTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    buttonURL: PropTypes.string,
    buttonText: PropTypes.string
}


const cardContent =[{
    header: "primero",
    body: "ajsdhñaLSHJD",
    buttonLink: "#",
    buttonName: "botón 1",
    imageURL: "#"
},
{
    header: "segundo",
    body: "ajsdhñaLSHJD",
    buttonLink: "#",
    buttonName: "botón 2",
    imageURL: "#"
},
{
    header: "tercero",
    body: "ajsdhñaLSHJD",
    buttonLink: "#",
    buttonName: "botón 3",
    imageURL: "#"
},
{
    header: "cuarto",
    body: "ajsdhñaLSHJD",
    buttonLink: "#",
    buttonName: "botón 4",
    imageURL: "#"
}]

const Card = props => {
    
    const cardElements = cardContent.map(elementos, index) => {

    return (
        <div className="card-deck col-10 mx-auto w-100">

            <div className="card">
                <img className="card-img-top" src={header.index} alt="Card image cap"/>
                <div className="card-body">
                        <h5 className="card-title">{props.header}</h5>
                        <p className="card-text">{props.body}</p>
                </div>
                <div className="card-footer text-center">
                        <small className="text-muted"> <button type="button" className="btn btn-primary" href={props.buttonLink}>{props.buttonName}</button></small>
                </div>
            </div>

        </div>)
    };
};

/*Card.PropTypes = {
    header: PropTypes.string,
    body: PropTypes.string,
    buttonLink: PropTypes.string,
    buttonName: PropTypes.string,
    imageURL: PropTypes.string,
}*/