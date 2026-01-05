import React, { useState } from 'react'
import { X } from 'lucide-react'

const App = () => {
  
  const [title, settitle] = useState('')
  const [details, setdetails] = useState('')
  const [task, settask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task];
    
    copyTask.push({title,details})
    settask(copyTask)

    console.log(task);
     
     
     settitle('')
     setdetails('')
     
  }

  const deleteNote = (idx) => {
    const copyTask = [...task]
    
    copyTask.splice(idx,1)

    settask(copyTask)
  }
  


  return (
      <div className='h-screen lg:flex bg-black text-white '>

        <form onSubmit={(e) => {
          submitHandler(e)
        }} className='flex gap-4 lg:w-1/2 items-start p-10 flex-col '>

          <h1 className='text-4xl font-bold'>Add Notes</h1>

          <input 
            type="text" 
            placeholder='Enter Notes Heading' 
            className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
            value={title}
            onChange={(e) => {
              settitle(e.target.value)
              
            }}
          />

          <textarea 
            type="text" 
            placeholder='Write details' 
            className='px-5 w-full py-2 flex items-start flex-row border-2 h-32 rounded outline-none'
            value={details}
            onChange={(e) => {
             setdetails(e.target.value) 
            }}
          />

          <button 
          className='bg-white active:scale-95 w-full text-black px-5 py-2 outline-none rounded '
          >
          Add Note
          </button>
            
        </form>
        <div className='flex gap-5 lg:border-l-2 lg:w-1/2 flex-wrap p-10'>

          <div className='w-full'><h1 className='text-4xl  font-bold'>Recent Notes</h1></div>

          <div className='flex flex-wrap items-start justify-start   gap-5 mt-5 h-[90%] overflow-auto'>

            {task.map(function(elem,idx){

              return <div key={idx} className='flex justify-between flex-col items-start relative h-52 w-36 bg-cover px-4 py-8  text-black rounded-2xl bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")]'>
                <div>
                  <h3 className='leading-tight font-bold text-lg'>{elem.title}</h3>
                  <p className='mt-4 leading-tight font-semibold text-gray-500 text-xs'>{elem.details}</p>
                </div>
                <button onClick={() => {
                  deleteNote(idx)
                }
                } className=' w-full cursor-pointer active:scale-95 bg-red-600 text-white text-xs py-1 rounded font-bold'>Delete Note</button>
              </div>
            
            })}        
            
              
          </div>        
        </div>
      </div>
      
  )
}

export default App
