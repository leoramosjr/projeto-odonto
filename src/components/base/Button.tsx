export default function Button(props: any) {
    return (
        <div className={`w-56 h-16 rounded-full p-0.5 justify-center content-center ${props.border}`}>
            <div className={`h-full w-full bg-neutral-900 text-white rounded-full justify-center content-center flex border-0 relative`}>
                <button className={`text-center break-normal absolute justify-center content-center align-middle flex flex-wrap text-xl py-4 px-11 h-full w-full rounded-full font-normal tracking-wider font-sans ${props.background && "hover:opacity-0 transition-opacity duration-100 z-10"} ${props.background}`}>
                    {props.label}
                </button>
                { props.background &&
                    <div className={`text-center break-normal absolute justify-center content-center align-middle flex flex-wrap text-xl py-4 px-11 h-full w-full rounded-full font-normal tracking-wider font-sans`}>
                        {props.label}
                    </div>
                }
            </div>
        </div>
    )
}