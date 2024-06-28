import CircularProgress from "@mui/material/CircularProgress";

const CardTimer = () => {
    return (
        <div
            className={'bg-gray-300 rounded-xl flex flex-col justify-center items-center gap-6 py-4 px-8 max-w-[200px] xs:max-w-[400px]'}>
            <div className={'relative'}>
                <div
                    className={'absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-[110%]'}>12:12:12
                </div>
                <CircularProgress style={{width: '100px', height: '100px'}}
                                  color='inherit' variant="determinate" value={100}/>
                <div className={'w-full text-center'}>
                    <p>12:12:12</p>
                </div>
            </div>
            <div className={'w-full flex justify-between items-center gap-6'}>
                <div>
                    <i className={'icon icon-start'}></i>
                </div>
                <div>
                    <i className={'icon icon-delete'}></i>
                </div>
            </div>
        </div>
    )
}

export default CardTimer;