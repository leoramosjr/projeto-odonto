import Logo from '../../assets/images/logoWhite.png';

export default function Navbar() {
    return (
        <div className="w-full h-20 bg-neutral-900 flex justify-between items-center px-24 fixed top-0 z-10">
            <img src={Logo} className='h-5' />
            <div className="h-full flex gap-12 align-middle items-center content-center">
                <a href="#" className="text-white text-lg font-medium">Home</a>
                <a href="#" className="text-white text-lg font-medium">Quem Somos</a>
                <a href="#" className="text-white text-lg font-medium">Números</a>
                <a href="#" className="text-white text-lg font-medium">Nosso Processo</a>
                <a href="#" className="text-white text-lg font-medium">Serviços</a>
                <a href="#" className="text-white text-lg font-medium">Case</a>
                <a href="#" className="text-white text-lg font-medium">Valores</a>
                <div className={`w-32 h-12 rounded-full p-0.5 justify-center content-center bg-gradient-to-r from-cyan-400 to-indigo-900`}>
                    <div className={`h-full w-full bg-neutral-900 text-white rounded-full justify-center content-center flex border-0 relative`}>
                        <button className={`text-center break-normal absolute justify-center content-center align-middle flex flex-wrap text-lg py-4 px-11 h-full w-full rounded-full font-normal tracking-wider font-sans hover:opacity-0 transition-opacity duration-100 z-10 bg-gradient-to-r from-sky-500 to-indigo-900`}>
                            Orçamento
                        </button>
                        <div className={`text-center break-normal absolute justify-center content-center align-middle flex flex-wrap text-lg py-4 px-11 h-full w-full rounded-full font-normal tracking-wider font-sans`}>
                            Orçamento
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}