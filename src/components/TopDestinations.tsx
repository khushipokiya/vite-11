import React from 'react';

const TopDestinations: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto text-center">
                <h2 className="mb-12 text-3xl font-bold text-gray-800">Top Destinations</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className="overflow-hidden rounded-lg shadow-lg">
                        <img src="https://media.istockphoto.com/id/1087066008/photo/the-colosseum.jpg?s=612x612&w=0&k=20&c=rWaiCKCZVD4MqpMWUq5oaMTxpbKYcj6ZT_H5-TLYlao=" alt="Rome, Italy" className="object-cover w-full h-64" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold">Rome, Italy</h3>
                            <p className="text-gray-600">Discover the historical wonders of Rome.</p>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-lg shadow-lg">
                        <img src="https://media.istockphoto.com/id/116570628/photo/westminster-at-sunset.jpg?s=612x612&w=0&k=20&c=9n5GdRWZTY-q9vfnIfFSkVTH3B_Nu42P4vVlElvxqTA=" alt="London, UK" className="object-cover w-full h-64" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold">London, UK</h3>
                            <p className="text-gray-600">Experience the vibrant life in London.</p>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-lg shadow-lg">
                        <img src="https://media.istockphoto.com/id/1140600547/photo/ancient-ruins-of-roman-forum-at-sunrise-rome-italy.jpg?s=612x612&w=0&k=20&c=cijCv4PttCusRYxXrerP24u6X5JTxJV1b1WcSoPyb4k="alt="Full Europe" className="object-cover w-full h-64" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold">Full Europe</h3>
                            <p className="text-gray-600">Explore the beauty and diversity of Europe.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopDestinations;
