import "./footer.css";

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.facebook.com/josedaniel.colindres.1' >
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://github.com/ColiJD?tab=repositories'>
                <img src="/img/githu.png" alt='twitter' />
            </a>
            <a href='https://www.instagram.com/jose_colindres89/?hl=es'>
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img className="footer-logo" src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por ColiJD</strong>
    </footer>
}

export default Footer;