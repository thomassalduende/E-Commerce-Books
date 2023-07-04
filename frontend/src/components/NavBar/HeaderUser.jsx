import { useContext, useRef } from "react";
import { FaBars, FaTimes, FaUserAlt } from "react-icons/fa";
import { BsCart} from "react-icons/bs";
import './Header.css'
import { useCart } from "../../hooks/useCart";
import { MaterialDesign } from "../IconoLogin/Materialdsgn";

export function HeaderUser () {



  const navRef = useRef();
	const { cart } = useCart()


	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<>
		<header>
			<a href="/"><h3 className="logo">Books Shop</h3></a>
			
			<nav ref={navRef}>
				<a href="/">Libros</a>
				<a href="/category">Categorias</a>
				<a href="/favoritos">Favoritos</a>
				<a href="/historial">Historial</a>
        <div className="div-section">
          <a  href='/book/cart'><BsCart className="cart" /> {cart.length > 0 && <b className="Header-alert">{cart.length}</b>}</a>
          <MaterialDesign className="user"/>
        </div>

				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
		</>
		);
}