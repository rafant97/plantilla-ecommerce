import Image from 'next/image'

const Header = () => {
  return (
    <div className='flex w-full justify-between items-center bg-black text-white px-10 '>
      <Image src='/logo.svg' alt='logo' width={100} height={100} />
      <div className='flex gap-10'>
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="100" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
      </svg>
    </div>
  )
}

export default Header