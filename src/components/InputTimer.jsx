const InputTimer = ({time}) => {
    return (
        <div className={'flex flex-col justify-center items-center'}>
            <input className={'default-input max-w-[5rem]'} type="text" value={time}/>
        </div>
    )
}

export default InputTimer;