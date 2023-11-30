export default function Footer() {
    return (
        <div className="h-40 px-32 w-full flex items-center justify-between bg-zinc-900">
            <div className="logo-container flex items-center ">
                <div className="logo m-2 mr-4 relative flex items-center">
					<div className=" w-12 h-12 rounded-full bg-gradient-to-br from-fuchsia-600 to-pink-700"></div>
					<div className=" w-6 h-6 absolute -right-2 bg-white rounded-lg bg-opacity-20 backdrop-blur-sm border-2 border-white border-opacity-5 "></div>
                </div>
                <div className="name text-2xl text-white ">
                    Quantumgaze
                </div>
            </div>
            <div className="social-nav ">
                <a href="" className="w-8 h-8 m-2 bg-white inline-block"></a>
                <a href="" className="w-8 h-8 m-2 bg-white inline-block"></a>
                <a href="" className="w-8 h-8 m-2 bg-white inline-block"></a>
                <a href="" className="w-8 h-8 m-2 bg-white inline-block"></a>
            </div>
        </div>
    )
}

