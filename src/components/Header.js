
import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import content from '../content'
import Typical from 'react-typical'

const Header = () => {
    return (
        <div
            className="min-h-screen flex items-center justify-center" 
            style={{
                background: '#091c29',
            }}
            >
            <div className="flex flex-col md:flex-row-reverse items-center justify-between">
                <div className="w-full md:w-2/5">
                    <LazyLoadImage src={content.header.img} effect="blur" placeholderSrc={process.env.PUBLIC_URL + '/logo512.png'}/>
                </div>
                <div className="text-white font-dosis text-center md:text-left">
                    <h2 className="text-3xl md:text-5xl font-bold">
                        {content.header.text[0]}
                        <br/>
                        {content.header.text[1]}
                    </h2>
                    <h1 className="font-bold text-2xl text-gray-500">
                        <Typical
                            steps={content.header.typical}
                            loop={Infinity}
                            className="inline-block"
                        />
                    </h1>
                    <button className="animate-float bg-indigo-500 px-10 py-2 text-xl uppercase mt-10 rounded-lg">{content.header.btnText}</button>
                </div>
            </div>
        </div>
    )
}

export default Header
