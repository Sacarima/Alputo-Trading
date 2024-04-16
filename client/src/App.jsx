import React from 'react'
import { Button } from 'flowbite-react'

export default function App() {
  return (
    <div className='bg-muted flex flex-col justify-center items-center'>
      <h1 className=' text-6xl font-semibold p-8 text-blue-950'>Congnite Lucrative</h1>
      <Button gradientDuoTone="purpleToPink" className='w-80 mb-10'>
        Click me
      </Button>
    </div>
  )
}
