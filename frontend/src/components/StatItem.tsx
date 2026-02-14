import React from 'react';

interface StatItemProps {
    number: string;
    label: string;
}

const StatItem = ({ number, label }: StatItemProps) => (
    <div className="mb-8">
        <h2 className="text-5xl font-light mb-2">{number}</h2>
        <hr className="border-t-2 border-black w-32 mb-2" />
        <p className="font-bold tracking-widest text-xs uppercase">{label}</p>
    </div>
);

export default StatItem;