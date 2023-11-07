export default function Button(props: any) {
    return (
        <button className={`bg-clip-text text-transparent w-56 h-16 p-0.5 text-center break-normal justify-center content-center align-middle flex flex-wrap text-2xl py-4 px-11 rounded-full font-normal tracking-wider font-sans ${props.border}`}>
            {props.label}
        </button>
    )
}