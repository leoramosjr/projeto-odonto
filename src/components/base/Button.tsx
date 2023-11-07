export default function Button(props: any) {
    return (
        <div className={`flex justify-center items-center h-auto w-auto relative`}>
            <div className={`text-white text-center justify-center content-center flex text-xl ${props.border ? "py-4 px-11" : "py-5 px-12"} h-auto w-auto rounded-full font-normal tracking-wider font-sans whitespace-nowrap break-normal ${props.backBackground ? props.backBackground : "bg-neutral-950"} z-10`}>
                {props.label}
            </div>
            <button className={`text-center absolute justify-center content-center flex text-xl ${props.border ? "py-4 px-11" : "py-5 px-12"} h-auto w-auto rounded-full font-normal tracking-wider font-sans whitespace-nowrap break-normal ${props.background && "hover:opacity-0 transition-opacity duration-100 z-10"} ${props.background} z-20`}>
                {props.label}
            </button>
            {
                props.border &&
                <div className={`absolute text-center justify-center content-center flex text-xl py-5 px-12 h-auto w-auto rounded-full font-normal tracking-wider font-sans whitespace-nowrap break-normal z-0 ${props.border ? props.border : "bg-neutral-950"}`}>
                    {props.label}
                </div>
            }
        </div>
    )
}