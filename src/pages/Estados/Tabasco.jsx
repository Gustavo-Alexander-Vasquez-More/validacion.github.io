import React from 'react';

export default function Tabasco() {
  return (
    <div className='w-full h-screen flex flex-col'>
    <div className='w-full h-[8vh] bg-[#7c1f36] flex items-center justify-end px-[2rem]'>
    <p className=' text-[white] font-medium'>Tabasco - Gobierno del Estado.</p>
    </div>
    <div className='w-full h-[96vh] bg-[url("/public/Guerrero/textura.jpg")] bg-contain bg-center flex flex-col items-center py-[2.5rem] gap-1'>
    <img className='w-[20rem]'  src="/public/Tabasco/logo.png" alt="" />
    <div className='bg-[white] border-solid border-[1px] border-[#7c1f36] w-[30%] h-auto justify-around py-[1rem] px-[1.5rem] rounded-[10px] flex flex-col gap-5'>
    <p className=' font-semibold text-[1.5rem]'>Consulta</p>
    <p>N° Folio</p>
    <input className='border-solid border-[1px] border-[gray] rounded-[5px] h-[2.5rem] px-[1rem]' placeholder='Buscar ...' type="text" name="" id="" />
    <button className='bg-[#7c1f36] rounded-[10px] text-[white] py-[0.5rem]'>Buscar</button>    
    </div>
    </div>
    </div>
  );
}