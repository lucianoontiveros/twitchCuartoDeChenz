
const Tarjetas = () => { 

    return(
        <>
            <div className="container">
                <div className="contenedorTarjetas">
                    <div className="card">
                        <img src="../public/imagenes/twitch.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="../public/imagenes/discord.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="../public/imagenes/comandos.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="video">
                    <video src="../public/imagenes/loop.mp4" width="640" height="480" loop></video>
                </div>
            </div>
            
            

        </>
    )
 }

 export default Tarjetas