import {SearchIcon} from './icon.tsx'
import './style.css'
export const HeaderSearchBtn = () => {
    return (
        <>
            <div className="sb-block flex">
                <button>
                    <SearchIcon />
                </button>

                <div className="search-control rounded-lg">
                    <div className="search-group flex items-center">
                        <div className="inputBox w-fill rounded-lg flex items-center">
                            <SearchIcon />

                            <input type="text" className="focus:outline-none" placeholder="HOLO"/>
                        </div>
                        <p className="ml-2">Отмена</p>
                    </div>

                    <div className="market-info-block">
                        <div className="top-tokens pt-4 pb-4">
                            <div className="tokens-swiper-titles flex justify-between items-center pr-4 pl-4">
                                <p>В топе</p>

                                <div className="arrow-swiper-section flex gap-2 items-center">
                                    <div className="flex rounded-md w-5 h-5 items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                        </svg>
                                    </div>
                                    <div className="flex rounded-md w-5 h-5 items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}