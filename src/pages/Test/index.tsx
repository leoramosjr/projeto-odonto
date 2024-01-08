import ClientCard from '../../components/ClientCard'

export default function TestPage() {
    return (
        <div className='
            flex
            flex-col
            justify-center
            items-center
            h-screen
            w-full
        ' style={{backgroundColor: "green"}}>
            <ClientCard />
        </div>
    )
}