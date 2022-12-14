import { Link } from 'react-router-dom'
import Tarjetas from '../Pages/Tarjetas'

const NavBar = () => { 
    return (
        <>
            <div className="contenedorNav12">
                <nav className="navbar navbar-dark bg-dark" id="barraNavBar">
                    <div className="container-fluid" id="botonAndTitle">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <p className="text-white text-center h4">CUARTO DE CHENZ</p>
                    </div>
                </nav>
                <div className="collapse itemsNav" id="navbarToggleExternalContent">
                    <div className="bg-dark p-4" id="navBarlista">
                        <Link className="nav-link m-4 text-light" to="">
                            <h5>> TUTORIAL BRUNITO PET</h5>
                            <p>En este apartado podrás obtener información de como funciona el bot del canal de Twitch.</p>
                        </Link>
                        <Link className="nav-link m-4 text-light" to="">
                            <h5> > COMANDOS</h5>
                            <p>Todos los comandos que se emplean en el chat del canal.</p>
                        </Link>
                        <Link className="nav-link m-4 text-light" to="">
                            <h5> > SOBRE EL CANAL</h5>
                            <p>Entérate sobre el formato de Study With me que el cuarto de chenz brinda en sus directos. </p>
                        </Link>
                        <Link className="nav-link m-4 text-light" to="">
                            <h5> > STAFF</h5>
                            <p>Estas son todas las personas que hacen posible que este canal exista</p>
                        </Link>
                        <Link className="nav-link m-4 text-light" to="">
                            <h5> > EVENTOS</h5>
                            <p>Información sobre Eventos de la comunidad de discord</p>
                        </Link>
                    </div>
                     <div className="redes">
                        <div className='cardContenedor1'>
                            <div className="card">
                                <img src="./src/imagenes/instagram.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <p className="card-text">Enterate de horarios y novedades sobre el canal. Tenemos un grupo de Forest para enviar codigos de plantación</p>
                                    <div className="d-grid gap-2">
                                         <a className="btn btn-dark" type="a">INSTAGRAM</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <img src="./src/imagenes/youtube.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <p className="card-text">Contenido adicional y sesiones de estudio para encontrarnos fuera de los directos</p>
                                    <div className="d-grid gap-2">
                                         <a className="btn btn-dark" type="a">YOUTUBE</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <img src="./src/imagenes/telegram.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <p className="card-text">Podrás unirte a nuestro grupo de plantación. Nos enviamos codigos Forest incluso fuera de stream</p>
                                    <div className="d-grid gap-2">
                                         <a className="btn btn-dark" type="a">TELEGRAM</a>
                                    </div>
                                </div>
                            </div>
                         </div>
                        <div className='cardContenedor2'>
                            <div className="card">
                                <img src="./src/imagenes/twitch.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <p className="card-text">Bienvenidxs a la experiencia de estudiar en compañía, a ser testigos de los logros de esta comunidad </p>
                                    <div className="d-grid gap-2">
                                         <a className="btn btn-dark" type="a">TWITCH</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <img src="./src/imagenes/discord.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <p className="card-text">Si quieres conocernos, vivir el día a día, lo mejor que puedes hacer es usar Discord. Te invitamos</p>
                                    <div className="d-grid gap-2">
                                        <a className="btn btn-dark" type="a">DISCORD</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <img src="./src/imagenes/comandos.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <p className="card-text">Todos los comandos del canal para que puedas interactuar con nosotrxs el chat de Twitch</p>
                                    <div className="d-grid gap-2">
                                        <a className="btn btn-dark" type="a">COMANDOS</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
        
                    </div>
                </div>
            </div>
        </>
    )
 }

 export default NavBar