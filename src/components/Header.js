import React from 'react';

const Header = () => {
    return (
     <header className=' h-10vh bg-cyan-950 flex justify-around items-center text-xl text-slate-200'>
        <div>
            <h1>Logo</h1>
        </div>
        <div>
            <ul className='flex gap-8'>
                <li>
                    <a href=""> Nos soins</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
            </ul>
        </div>
     </header>
    );
};

export default Header;