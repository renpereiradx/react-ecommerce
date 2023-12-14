function OrderCard(props) {
  const { id, title, imgUrl, price, handleDelete } = props
  let renderXicon
  if (handleDelete) {
    renderXicon = (
      <button onClick={() => handleDelete(id)}>
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
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      </button>
    )
  }

  return (
    <div className='flex justify-between items-center mb-3.5'>
      <div className='flex items-center gap-2'>
        <figure className='w-16 h-16'>
          <img
            className='w-full h-full rounded-lg object-cover'
            src={imgUrl}
            alt={title}
          />
        </figure>
        <p className='text-sm font-light'>{title}</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-sm font-light'>{price}</p>
        {renderXicon}
      </div>
    </div>
  )
}

export { OrderCard }
