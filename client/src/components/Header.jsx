import { Link } from 'react-router-dom';
import logoFull from '/logo_full.png';

export default function Header() {
    return (
        <div className='bg-slate-200'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                <Link to='/'>
                    <img width="180" src={logoFull} alt="logo_full" />
                </Link>
                <ul className='flex gap-4'>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/about'>
                        <li>About</li>
                    </Link>
                    <Link to='/sign-in'>
                        <li>Sign In</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}