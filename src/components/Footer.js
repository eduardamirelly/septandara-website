import React from 'react'

function Footer() {
  return (
    <div className="">
        <div className="flex justify-around items-center flex-wrap">
            <img className="w-44 m-3" src="/imgs/logo-ifrn.png" alt="logo-ifrn" />
            <img className="w-44 m-3" src="/imgs/logo.png" alt="logo" />
        </div>
        <div className="flex flex-col items-center justify-center mt-8">
            <p className="text-md text-gray-100 my-1.5">
                Código aberto. <a className="text-yellow-100 hover:text-gray-100" href="/">Clique aqui</a>
            </p>
            <p className="text-md text-gray-100 my-1.5">
                Reporte bugs. <a className="text-yellow-100 hover:text-gray-100" href="/">Formulário</a>
            </p>
            <p className="text-sm text-gray-100 my-1.5">
                septandara.game@gmail.com
            </p>
        </div>
    </div>
  )
}

export default Footer