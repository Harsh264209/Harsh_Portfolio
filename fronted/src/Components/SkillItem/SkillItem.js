


import React from 'react'

const SkillItem =({item}) => {
  return (
    <div>
        <div className="skillitem m-4 h-40 w-40 flex  bg-blue-100  flex-col items-center py-10 shadow-lg transition duration-300 hover:scale-110  hover:cursor-pointer  rounded-lg " style={{backgroundColor:""}}>
            <img src={item.img} alt="" className='w-100'/>
            <h2 className='my-2'>{item.title}</h2>
        </div>
    </div>
  )
}

export default SkillItem