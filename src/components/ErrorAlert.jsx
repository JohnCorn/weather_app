import React from 'react'

function ErrorAlert({show, setShowAlert}) {

    if (show)
  return (
    <div className='absolute bg-black/50 backdrop-blur-sm flex h-full w-full z-30'>

        <div className='m-auto text-center font-main '> 
            <div className='bg-gray-200 px-6 py-4 rounded-lg'> 
                <h1  className='text-gray-900 text-lg font-bold'>Invalid City Entered</h1>
                <h1 className='text-gray-600 text-sm font-medium'>Please enter a vaild city and try again</h1>

                <button className='pb-1 pt-4 text-sky-600 divide-y divide-black-500'
                onClick={() => setShowAlert(false)}
                >OK</button>
            </div>
        </div>
    </div>
  )

  else{
    return (<div/>)
  }
}

export default ErrorAlert