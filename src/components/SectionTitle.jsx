import React from 'react';

const SectionTitle = ({title, secandTitle}) => {
    return (
        <div className='text-center my-12'>
            <p className='text-[#D99904]'>---- {secandTitle} ----</p>
           <h2 className='text-4xl border-y-4 my-3 py-2 w-4/12 mx-auto text-white border-gray-400 uppercase'>{title}</h2> 
        </div>
    );
};


export default SectionTitle;