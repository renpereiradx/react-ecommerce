function OrdersCard(props) {
  const { totalProducts, totalPrice } = props

  return (
    <div className='flex justify-between items-center w-80 mb-3 p-4 border border-black rounded-lg'>
      <div className='flex w-full justify-between'>
        <p className='flex flex-col'>
          <span className='font-light'>12.12.2023</span>
          <span className='font-light'>{totalProducts} articles</span>
        </p>
        <p className='flex items-center gap-2'>
          <span className='font-medium text-2xl'>{totalPrice}</span>
          <button>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M8.25 4.5l7.5 7.5-7.5 7.5'
              />
            </svg>
          </button>
        </p>
      </div>
    </div>
  )
}

export { OrdersCard }
