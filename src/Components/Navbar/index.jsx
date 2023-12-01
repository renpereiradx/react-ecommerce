import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'

let menuLeft = [
  {
    to: '/',
    text: 'Shopi',
    className: 'font-semibold text-lg',
  },
  {
    to: '/',
    text: 'All',
    className: '',
  },
  {
    to: '/clothes',
    text: 'Clothes',
    className: '',
  },
  {
    to: '/electronics',
    text: 'Electronics',
    className: '',
  },
  {
    to: '/furnitures',
    text: 'Furnitures',
    className: '',
  },
  {
    to: '/toys',
    text: 'Toys',
    className: '',
  },
  {
    to: '/others',
    text: 'Others',
    className: '',
  },
]
let menuRight = [
  {
    to: '',
    text: 'darthrpm@hotmail.com',
    className: 'text-black/60',
  },
  {
    to: '/my-orders',
    text: 'My Orders',
    className: '',
  },
  {
    to: '/my-account',
    text: 'My Account',
    className: '',
  },
  {
    to: '/sign-in',
    text: 'Sign In',
    className: '',
  },
  {
    to: '/cart',
    text: 'cart',
    className: '',
    content: (
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
          d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
        />
      </svg>
    ),
  },
]

function Navbar() {
  const { count } = useContext(ShoppingCartContext)
  const activeStyle = 'underline underline-offset-4'

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 bg-white/90 text-sm font-light'>
      <ul className='flex items-center gap-3'>
        {menuLeft.map((item, index) => (
          <li key={item.text} className={item.className}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                isActive && index !== 0 ? activeStyle : undefined
              }
            >
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className='flex items-center gap-3'>
        {menuRight.map(item => (
          <li key={item.text} className={item.className}>
            <NavLink
              to={item.to}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              {item.to === '/cart' ? (
                <>
                  <div className='flex items-center'>
                    <div>{item.content}</div>
                    <div>{count}</div>
                  </div>
                </>
              ) : (
                item.text
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export { Navbar }
