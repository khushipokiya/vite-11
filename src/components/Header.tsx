import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-md">
            <nav className="container flex items-center justify-between p-6 mx-auto">
                <div className="text-2xl font-bold">Jadoo</div>
                <ul className="flex space-x-6">
                    <li className="text-gray-700 cursor-pointer hover:text-blue-500">Home</li>
                    <li className="text-gray-700 cursor-pointer hover:text-blue-500">Destinations</li>
                    <li className="text-gray-700 cursor-pointer hover:text-blue-500">Flights</li>
                    <li className="text-gray-700 cursor-pointer hover:text-blue-500">Bookings</li>
                    <li className="text-gray-700 cursor-pointer hover:text-blue-500">Login</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
