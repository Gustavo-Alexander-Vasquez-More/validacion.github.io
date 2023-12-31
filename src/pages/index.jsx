import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link as Anchor, useNavigate } from 'react-router-dom';
import adminActions from '../redux/actions/admins';
import Swal from 'sweetalert2';

/*ESTE ES EL LOGIN*/

export default function index() {
const[userValue, setUserValue]=useState('')
const[passwordValue, setPasswordValue]=useState('')
const dispatch=useDispatch()
const inputUser=useRef()
const inputPassword=useRef()
const navigate=useNavigate()
useEffect(() => {
  const userToken = localStorage.getItem('token');
  if (userToken) {
    // Si existe un token, redirige al panel de administrador
    navigate('/panelAdministrador');
  }
}, [navigate]);
function captureUser(){
setUserValue(inputUser.current.value)
}
function capturePassword(){
setPasswordValue(inputPassword.current.value)
}

async function logIn(){
const datos={
usuario:userValue,
contraseña:passwordValue
}
try {
  await dispatch(adminActions.login_admins(datos))
  const user = localStorage.getItem('token');
    if (user) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Successful Loged in!',
        showConfirmButton: false,
        timer: 3500
      })
      navigate('/panelAdministrador')
}else{
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Usuario o contraseña incorrectos',
})
  navigate('/')
}
} catch (error) {
 console.log(error);
}
}
function handleKeyPress(event) {
  if (event.key === 'Enter') {
    // Si la tecla presionada es "Enter", llama a la función logIn
    logIn();
  }
}

  return (
    <div className=' w-full h-screen flex justify-center items-center bg-[#e4e4e4]'>
      <div className='w-full sm:w-[70%] lg:w-[50%] md:h-auto flex flex-col items-center justify-around gap-[2rem] py-[1.5rem] '>
      <img className='w-[7rem]' src="../public/icon.png" alt="" />
        <p className='text-[2rem] font-bold text-[black]'>Inicio de Sesión</p>
        <div className='flex flex-col w-[77%]  sm:w-[60%] gap-2'>
          
        <p className=' font-semibold'>Usuario:</p>
        <input onKeyDown={handleKeyPress} required ref={inputUser} onChange={captureUser} className='h-[2.5rem] w-[100%] placeholder:text-center rounded-[10px] px-[1rem] border-solid border-[1px] border-[gray]' type="text"  placeholder='Escriba su nombre de usuario'/>
        </div>
        <div className='flex flex-col  w-[77%]  sm:w-[60%] gap-2'>
        <p className=' font-semibold'>Contraseña:</p>
        <input onKeyDown={handleKeyPress} required ref={inputPassword} onChange={capturePassword} className='h-[2.5rem] w-[100%] placeholder:text-center rounded-[10px] px-[1rem] border-solid border-[1px] border-[gray]' type="password" placeholder='Escriba su contraseña'/>
        </div>
        <Anchor onClick={logIn}  className='bg-[#333333] text-[white] py-[0.5rem] w-[50%] sm:w-[30%] rounded-[10px] text-center'>
        Ingresar
        </Anchor>
      </div>
    </div>
  );
}
