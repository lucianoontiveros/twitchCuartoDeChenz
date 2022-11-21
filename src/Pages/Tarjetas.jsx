
const Tarjetas = () => { 

    return(
        <>
            <div className="contenedor col-12">
                <div className="video container mt-2">
                    <video src="./src/imagenes/loop.mp4" width="100%" height="480" loop></video>
                    <div className=" p-3 text-center videotext">
                        <h5> Acerca de Chenz </h5>
                        <p> Mi nombres es Luciano, vivo en Córdoba - Argentina, tengo 31. Cree este canal con la finalidad que te sientas acompañado en tus estudios, en tu día a día, y puedas sacarle provecho a tu productividad.</p>
                    </div>
                </div>
                <div className="contenedorTarjetas container col 12 p-3">
                    <div className="card mb-1">
                        <img src="./src/imagenes/twitch.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body d-grid gap-2">
                            <a className="btn btn-dark" type="a">TWITCH</a>
                        </div>
                    </div>
                    <div className="card mb-1">
                        <img src="./src/imagenes/discord.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body d-grid gap-2">
                            <a className="btn btn-dark" type="a">DISCORD</a>
                        </div>
                    </div>
                    <div className="card mb-1">
                        <img src="./src/imagenes/comandos.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body d-grid gap-2">
                            <a className="btn btn-dark" type="a">COMANDOS</a>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
 }

 export default Tarjetas
