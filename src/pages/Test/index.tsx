import Button from '../../components/base/Button';

export default function TestPage() {
    return (
        <div className='
            flex
            flex-col
            justify-center
            items-center
            h-screen
            w-full
        '>
            <Button label="Orçamento Rápido" background="bg-gradient-to-r from-sky-500 to-indigo-900" border="bg-gradient-to-r from-cyan-400 to-indigo-900" />
        </div>
    )
}