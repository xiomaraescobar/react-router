// import React from 'react'

import { useAuth } from "./auth";

function ProfilePage() {
    const auth = useAuth();

  return (
    <div>
      <h1>Perfil</h1>
      <h2>
        Bienvenido, {auth.user?.username}
      </h2>
    </div>
  )
}


export  {ProfilePage}