import React from 'react'
import grid1 from '../images/grid1.jpg'
import grid2 from '../images/grid2.jpg'
import grid3 from '../images/grid3.jpg'

function Grid () {
    return (

        <>
        <section className='grid sm:grid-cols-1 md:grid-cols-3 gap-5'>
            <div>
                <img src={grid1} className='w-full h-48 aspect-square object-cover rounded-lg transition-shadow duration-100 hover:shadow-2xl hover:scale-105'></img>
                <h1 className='text-center text-3xl font-semibold'>BUILDING WEBSITES </h1>
            </div>

            <div>
                <img src={grid2} className='w-full h-48 aspect-square object-cover rounded-lg transition-shadow duration-100 hover:shadow-2xl hover:scale-105'></img>
                <h1 className='text-center text-3xl font-semibold'>MANAGING WEBSITES</h1>
            </div>
            <div>
                <img src={grid3} className='w-full h-48 aspect-square object-cover rounded-lg transition-shadow duration-100 hover:shadow-2xl hover:scale-105' ></img>
                <h1 className='text-center text-2xl font-semibold'>BUILDIND AND MANAGING DATABASE</h1>
            </div>


        </section>
        
        
        </>
    )



}

export default Grid
