import React, { useState } from 'react';
import GoogleButton from './GoogleButton'

const Information = () => {
    const [activeInfo, setActiveInfo] = useState('info1');

    const openInfo = (info) => {
        setActiveInfo(info);
    };

    const infoData = [
        {
            id: 'info1',
            title: 'Priority Management',
            content: "Optimize your focus with our smart prioritization feature. Tasks are automatically categorized by duration and deadline, ensuring you focus on what's most important first.",
        },
        {
            id: 'info2',
            title: 'Versatile Organization',
            content: 'Tailor your task management experience with the ability to add custom categories. Keep your tasks separate and organized according to your needs and preferences.',
        },
        {
            id: 'info3',
            title: 'Quick Login',
            content: 'Enjoy the convenience of one-click access to your account using your Google Account. Simplify the login process and save time so you can quickly focus on your tasks and projects.',
        },
    ];

    return (
        <div className="w-5/12 bg-lightcolor rounded-2xl p-5">
            <div className="flex gap-5 pb-5">
                {infoData.map((info) => (
                    <button
                        key={info.id}
                        className={`${activeInfo === info.id ? 'font-bold font-poppins tracking-widest w-[9rem]' : 'font-poppins tracking-widest w-[9rem]'}`}
                        onClick={() => openInfo(info.id)}
                    >
                        {info.title}
                    </button>
                ))}
            </div>

            {infoData.map((info) => (
                <div key={info.id} className={`${activeInfo === info.id ? '' : 'hidden'}`}>
                    <h1 className="text-interlightcolor font-bold text-3xl my-5 mb-10">{info.title}</h1>
                    <p className="mb-5">{info.content}</p>
                    <GoogleButton />
                </div>
            ))}
        </div>
    );
};

export default Information;