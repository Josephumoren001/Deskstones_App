import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                You need a website or mobile app to scale your business?
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout these resources with 100 JavaScript Projects
            </p>
            <Button gradientDuoTone='greenToBlue' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://www.unikcreativezone.com.ng" target='_blank' rel='noopener noreferrer'>
                    Visit Unik Creative Zone
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrb7WruilQx1vKDoLMhQQsRRVFWkZpZcnLeA&s" />
        </div>
    </div>
  )
}