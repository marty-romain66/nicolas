import React from 'react';

const Header = () => {
    return (
     <header className=' h-10vh bg-cyan-950 flex justify-around items-center text-xl text-slate-200'>
        <div>
            <h1>Logo</h1>
        </div>
        <div>
            <ul className='flex gap-8'>
                <li className='hover:bg-cyan-500 p-4 rounded-lg'>
                    <a href=""> Nos soins</a>
                </li>
                <li className='hover:bg-cyan-500 p-4 rounded-lg'>
                    <a href="">Contact</a>
                </li>
            </ul>
        </div>
     </header>
    );
};

export default Header;