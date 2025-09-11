import React from 'react'
import MusicCard from '../../section/musicCard'

export default function Result() {

    return (
        <div className='absolute w-[80%] right-0 top-[30%] pl-[35px] pr-[35px]'>
            <hr className='text-[#ffffff16] mb-10'/>
            <div className="flex gap-[80px] flex-wrap">
                {[...Array(6)].map(() => {
                   console.log("ss") 
                   return <MusicCard></MusicCard>
                })}
            </div>
        </div>
    )
}
