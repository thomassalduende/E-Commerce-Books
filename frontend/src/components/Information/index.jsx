import './index.css'
import { useContext, useRef } from 'react' 
import { Link } from 'react-router-dom'
import { useMutation, useQuery } from '@apollo/client'
import { DATA_USER } from '../../hoc/Mutation/postDataUser'
import { userContext } from '../../Context/user'
import { useState } from 'react'
import { GET_INFORMATION } from '../../hoc/Query/getInformation'
import { POST_COMPRA } from '../../hoc/Mutation/postCompra'
import { DELETE_CART } from '../../hoc/Mutation/deleteCart'
import { useCart } from '../../hooks/useCart'
export function Information () {

  const { isAuth } = useContext(userContext)
  const form = useRef()
  const { cart } = useCart()

  const [deleteCart] = useMutation(DELETE_CART)
  const [insertCompra, { data: dataCompra }] = useMutation(POST_COMPRA)

  const [dataUser] = useMutation(DATA_USER)
  const { data } = useQuery(GET_INFORMATION, {
    variables: { tokenUser: isAuth }
  })
  const [selectedProvince, setSelectedProvince] = useState(' ');
  const [error, setError] = useState('')
  const provinces = [
    { name: 'Buenos Aires', abbreviation: 'BA' },
    { name: 'Catamarca', abbreviation: 'CT' },
    { name: 'Chaco', abbreviation: 'CH' },
    { name: 'Chubut', abbreviation: 'CHU' },
    { name: 'Córdoba', abbreviation: 'CO' },
    { name: 'Corrientes', abbreviation: 'CR' },
    { name: 'Entre Ríos', abbreviation: 'ER' },
    { name: 'Formosa', abbreviation: 'FO' },
    { name: 'Jujuy', abbreviation: 'JU' },
    { name: 'La Pampa', abbreviation: 'LP' },
    { name: 'La Rioja', abbreviation: 'LR' },
    { name: 'Mendoza', abbreviation: 'MZ' },
    { name: 'Misiones', abbreviation: 'MI' },
    { name: 'Neuquén', abbreviation: 'NQ' },
    { name: 'Río Negro', abbreviation: 'RN' },
    { name: 'Salta', abbreviation: 'SA' },
    { name: 'San Juan', abbreviation: 'SJ' },
    { name: 'San Luis', abbreviation: 'SL' },
    { name: 'Santa Cruz', abbreviation: 'SC' },
    { name: 'Santa Fe', abbreviation: 'SF' },
    { name: 'Santiago del Estero', abbreviation: 'SE' },
    { name: 'Tierra del Fuego', abbreviation: 'TF' },
    { name: 'Tucumán', abbreviation: 'TU' },
  ];
  
  const handleProvinceChange = (event) => {
    setSelectedProvince(event.target.value);
  }
  

  const hanldeSumbitInfo = (e) => {
    e.preventDefault()
    const formData = new FormData(form.current)
  
    // Validar que todos los campos estén completos
    if (
      formData.get('name') !== '' &&
      formData.get('address') !== '' &&
      formData.get('dni') !== '' &&
      formData.get('cp') !== '' &&
      formData.get('phone') !== '' &&
      formData.get('info') !== '' &&
      formData.get('ciudad') !== '' &&
      selectedProvince !== 'Seleccione una provincia' && selectedProvince !== ' '
    ) {
      const buyer = {
        'name': formData.get('name'),
        'address': formData.get('address'),
        'dni': formData.get('dni'),
        'cp': formData.get('cp'),
        'phone': formData.get('phone'),
        'info': formData.get('info'),
        'ciudad': formData.get('ciudad')
      }
  
      dataUser({
        variables: {
          tokenUser: isAuth,
          nombre: buyer.name,
          dni: buyer.dni,
          direccion: buyer.address,
          nombreCiudad: buyer.ciudad,
          nombreProv: selectedProvince,
          agregarInfo: buyer.info,
          telefono: buyer.phone,
          codPostal: buyer.cp
        }
      })
      .then(null)
      .catch(error => console.log(error.message))
    } else {
      // Si algún campo está vacío, mostrar un mensaje de error o realizar otra acción según sea necesario.
      setError('Por favor, complete todos los campos.')
    }
  }

  const handleDeleteCart = async () => {
    try {
      const promises = cart.map(product => (
        deleteCart({
          variables: { isbn: product.isbn, tokenUser: isAuth }
        })
      ));
      await Promise.all(promises);
    } catch (error) {
     console.log('error')
    }
  }


  const handleRefresh = () => {
    setTimeout(() => {
      if (dataCompra) {
        window.location.href = dataCompra.realizarCompra.init_p;
      }
    }, 2500);
  };
  const handleSubmitPago = () => {
    insertCompra({
      variables: { tokenUser: isAuth }
    })
    .then(handleRefresh())
    .catch(error => console.log(error.message));
  }

  return (
    <div className="Information">
      <h5>Complete con sus datos de envio: </h5>
      <div className="Information-form">
        <form ref={form} onSubmit={hanldeSumbitInfo}>
          <label style={{fontWeight: 'bold'}}>Nombre</label>
          <input defaultValue={data && data.LoginUser.user.nombre} type="text" placeholder="Nombre completo" name="name" />
          <label style={{fontWeight: 'bold'}}>DNI</label>
          <input defaultValue={data && data.LoginUser.user.direccion.dni} type="text" placeholder="DNI" name="dni" />
          <label style={{fontWeight: 'bold'}}>Direccion</label>
          <input defaultValue={data && data.LoginUser.user.direccion.direccion} type="text" placeholder="Direccion" name="address" />
          <label style={{fontWeight: 'bold'}}>Ciudad</label>
          <input defaultValue={data && data.LoginUser.user.direccion.ciudad.nombre} type="text" placeholder="ciudad" name="ciudad" />

          <label style={{fontWeight: 'bold'}}>Provincia</label>
          <select value={selectedProvince} onChange={handleProvinceChange}>
            <option >Seleccione una provincia</option>
            {provinces.map((province) => (
              <option  key={province.abbreviation} value={province.name}>
                {province.name}
              </option>
            ))}
          </select>

          
          <label style={{fontWeight: 'bold'}}>Codigo Postal</label>
          <input defaultValue={data && data.LoginUser.user.direccion.ciudad.cod_postal} type="text" placeholder="Codigo postal" name="cp" />
          <label style={{fontWeight: 'bold'}}>Telefono</label>
          <input defaultValue={data && data.LoginUser.user.direccion.telefono} type="text" placeholder="Telefono" name="phone" />
          <label style={{fontWeight: 'bold'}}>Info adicional</label>
          <input defaultValue={data && data.LoginUser.user.direccion.AgregarInfo} type="text" placeholder="Info" name="info" />
          {error && <p style={{display: 'grid', justifyContent:'center', color:'red'}}>{error}</p>}
          <button className='boton-pagar' onClick={handleSubmitPago}>Pagar</button>
        </form>
      </div>
        <div className='reg'> 

      <button >
        <Link onClick={handleDeleteCart}  to="/book/cart">
          Regresar
        </Link>
      </button>
        </div>
    </div>

  )
}