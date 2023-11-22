import { NavLink } from 'react-router-dom'

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
    to: '',
    text: '🛒 0',
    className: '',
  },
]

function Navbar() {
  const activeStyle = 'underline underline-offset-4'

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 bg-white/90 text-sm font-light'>
      <ul className='flex items-center gap-3'>
        {menuLeft.map(item => (
          <li key={item.text} className={item.className}>
            <NavLink
              to={item.to}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
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
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export { Navbar }
