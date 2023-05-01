import React from 'react';

const Footer = () => {
    return (
        <footer className='h-20vh  bg-cyan-950 text-slate-100 flex justify-center items-center'>
            <ul className='flex gap-8 items-center justify-center'>
                <li>
                    <a href="">Mention légal</a>
                </li>
                <li>
                    <a href=""> Suivez-nous</a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;