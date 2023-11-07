import Navbar from '../../components/compound/Navbar';
import WavesSvg from '../../assets/images/waves.svg';
import Button from '../../components/base/Button';
import ScrollDown from '../../assets/images/scrolldown.svg';

export default function LandingPage() {
    return (
        <div className='w-full h-screen flex flex-col justify-center items-center z-10 bg-neutral-950 text-white px-0'>
            <Navbar />
            <img src={WavesSvg} className="w-full h-auto absolute top-0 right-0 z-0 select-none" />
            <div className='h-screen w-full flex flex-col z-10'>
                <div className='flex flex-col w-1/2 px-36 pt-52 gap-8'>
                    <div className='text-7xl w-11/12 font-semibold font-sans'>
                        Tire a sua ideia de base tecnológica do papel!
                    </div>
                    <div className='flex gap-8 w-full justify-start'>
                        <Button label="Orçamento Rápido" background="bg-gradient-to-r from-sky-500 to-indigo-900" border={"bg-gradient-to-r from-cyan-400 to-indigo-900"} />
                        <Button label="Mentoria Grátis" background="bg-neutral-950" backBackground="bg-gradient-to-r from-purple-700 to-fuchsia-500" />
                    </div>
                </div>
                <div className='h-full w-full flex flex-col justify-end items-center'>
                    <img src={ScrollDown} className="w-28 h-auto" />
                </div>
            </div>
        </div>
    )
}