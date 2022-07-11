import React from "react";

const Home = () => {
    return (
        <div>
            <div className="text-center text-[#77dd77] text-5xl mt-8">Browse through the MOVIE LIBRARY!</div>
            <div className="mt-10 flex justify-center">
                <div className="my-auto mr-10">
                    <form className="my-auto mb-6">
                        <input type="text" name="" placeholder="Search Movie..." className="border-solid border-[#77dd77] border-2 pl-6 pr-36 py-2 rounded-[50px] outline-none" />
                    </form>
                    <button className="text-[#77dd77] border-[1.5px] border-[#77dd77] px-[18px] py-[6px] ml-2 bg-white rounded-full text-[16px] hover:bg-[#77dd77] hover:text-white mx-auto">Search</button>
                </div>
                <div className="ml-10"><img className="w-[400px] h-[400px]" src="images/home.png" /></div>
            </div>
        </div>
    )
}

export default Home;