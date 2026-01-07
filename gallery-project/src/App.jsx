import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    
    

    setUserData(response.data)

    console.log(response.data);
    
  }

  useEffect(function(){
    getData()
  },[index])

  let printUserData = <h3 className='text-xs text-gray-500 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading.....</h3>

  if(userData.length>0){
    printUserData = userData.map(function(elem,idx){
  
        return <div key={idx}>
          <a href={elem.url} target='_blank'>
            <div className='h-40 w-44 bg-white rounded-xl overflow-hidden'>
            <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
          </div>
          <h2 className='font-bold text-lg'>{elem.author}</h2>
          </a>
        </div>
    })
  }
    
  

  return (
    <div className='bg-black h-screen overflow-auto p-4 text-white '>
        <div className='flex h-[80%] flex-wrap gap-5 p-2'>
          {printUserData}
        </div>

        <div className='flex justify-center gap-5 items-center p-4 '>
          <button 
          style={{ opacity: index == 1 ? 0.3 : 1 }}
          className='bg-amber-400 text-sm text-black cursor-pointer active:scale-95 rounded px-4 py-2 font-semibold'
          onClick={() => {
            if(index>1){
              setIndex(index-1)
              setUserData([])
            }
          }}
          >
            prev
          </button>
          <h2>Page {index}</h2>
          <button className='bg-amber-400 text-sm text-black cursor-pointer active:scale-95 rounded px-4 py-2 font-semibold'
          onClick={() => {
            setIndex(index+1)
            setUserData([])
          }}
          >
            next
          </button>

        </div>
      </div>
  )
}

export default App
