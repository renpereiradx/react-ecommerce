function Card(data) {
  return (
    <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 m-2 px-3 py-0.5 bg-white/60 text-black text-xs rounded-lg'>
          {data?.data?.category.name}
        </span>
        <img
          className='w-full h-full object-cover rounded-lg'
          src='https://images.pexels.com/photos/1290515/pexels-photo-1290515.jpeg?auto=compress&cs=tinysrgb&w=1600'
          alt='cellphone'
        />
        <div className='flex justify-center items-center absolute top-0 right-0 w-6 h-6 m-2 p-1 rounded-full bg-white'>
          +
        </div>
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light'>Cellphone</span>
        <span className='text-lg font-medium'>$580</span>
      </p>
    </div>
  )
}

export { Card }
