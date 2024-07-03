const InputTimer = ({name, onChange, value}) => {

    return (
        <div className={'flex flex-col justify-center items-center'}>
            <input
                className={'default-input max-w-[5rem]'}
                type="text"
                name={name}
                onChange={onChange}
                value={value}
                />
        </div>
    )
}

export default InputTimer;