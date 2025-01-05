import "../Componenets Css/Footer.css";

function Footer(){
    return(
        <footer className ="footer" id="footer">
        <div className ="footer-content">
            <img src="./images/logo.png" alt="MUS" className ="footer-logo"/>
            <ul className ="footer-info">
                <li>Contact number: +92 320 1930958 </li>
                <li>Email: umarsaddiq1212@gmail.com</li>
                <li>Location: Bahria Town Rawalpindi, Pakistan</li>
            </ul>
        </div>
        <div className ="footer-bottom">
            <p>Designed by Muhammad Umar</p>
        </div>
    </footer>
    
    );
}

export default Footer