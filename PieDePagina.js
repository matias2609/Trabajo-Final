import React from 'react'

export const PieDePagina = () => {
    return (
        <><h2>NOSOTROS</h2>
        <p>Nuestra empresa está ubicada Yerba Buena y nos especializamos en la comercialización de accesorios y repuestos para autos 
            ofreciendo la más amplia variedad e incorporando constantemente productos nuevos de las más prestigiosas marcas a nuestro extenso catálogo. 
            También ofrecemos una financiación exclusiva en cuotas con muy bajo interés para que puedas llegar a lo que querés.<br/><br/>
        </p>

        <h2>CONTACTÁNOS</h2>
        <p>DÓNDE NOS ENCONTRAMOS?<br/>
            Av. Perón 2085<br/>
            Yerba Buena, Tucumán, Argentina.<br/>
            Atención de lunes a viernes de 9 a 17:30hs<br/><br/>
        </p>
        <h3>- Dejanos tu mensaje -</h3>
        <form>
                <input type="text" placeholder="Nombre" /><br/>
                <input type="text" placeholder="Apellido" /><br/>
                <input type="email" placeholder="Email" required /><br/>
                <input type="text" placeholder="Título del Mensaje" required /><br/>
                <textarea type="text" placeholder="Asunto" required></textarea><br/>
                <input type="submit" /><br/>
                <p>¡Gracias por tu mensaje!</p><br/>

        </form>

        <div align="center"><img src="https://i.ibb.co/yqcgCKm/Pago-Logistica.png" witdht="250px" height="250px" alt="PagoyLogistica" /></div>
        
        <footer >
                <a href="https://www.instagram.com">Instagram</a><br/>
                <a href="https://flipboard.com/">Flipboard</a><br/>
                <a href="https://www.youtube.com/">YouTube</a><br/>
                <a href="https://twitter.com/">Twitter</a><br/>
                <cite>© Trabajo Final - Desarrollo de FrontEnd [ Matías Leguizamón | Valentina Amayola | Matheo Nanzer ]</cite>
        </footer>
        </>
    )
}


export default PieDePagina;