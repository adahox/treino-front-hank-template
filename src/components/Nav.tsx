import Logo from '../components/Logo'

export function Nav() {
    return (
        <nav className='flex flex-row justify-between'>
            <Logo />
            <div>
                <ul className='flex flex-row'>
                    <li className='px-3 font-medium'>Home</li>
                    <li className='px-3 font-medium'>About</li>
                    <li className='px-3 font-medium'>Shop</li>
                    <li className='px-3 font-medium'>Blog</li>
                    <li className='px-3 font-medium'>Contact Us</li>
                </ul>
            </div>
        </nav>
    );
}