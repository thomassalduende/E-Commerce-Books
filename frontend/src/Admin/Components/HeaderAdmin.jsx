import { useContext, useRef } from "react";
import { FaBars, FaTimes, FaUserAlt } from "react-icons/fa";
import '../../components/NavBar/Header.css'
import { userContext } from "../../Context/user";
import { CgCloseO } from 'react-icons/cg'
export function HeaderAdmin () {

	const { removeAuth } = useContext(userContext)

  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<>
		<header>
			<a href="/"><h3 className="logo">ADMINISTRADOR</h3></a>
			
			<nav ref={navRef}>
				<a style={{fontFamily:'monospace'}} href="/">Productos</a>
				<a style={{fontFamily:'monospace'}} href="/admin/categorias">Categorias</a>
				<a style={{fontFamily:'monospace'}} href="/admin/ventas">Ventas</a>
				<a style={{fontFamily:'monospace'}} href="/admin/user">Admin</a>
				<a style={{fontFamily:'monospace'}} href="/admin/cupon">Cupon</a>

				<a style={{fontFamily:'monospace'}} href="/" onClick={removeAuth}>Salir<CgCloseO /></a>


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