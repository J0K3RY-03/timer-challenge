import InputTimer from './components/InputTimer.jsx'
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import CardTimer from "./components/CardTimer.jsx";

function App() {

  return (
    <>
      <div className={'w-full p-6 flex flex-col items-center justify-center'}>
          <form className={'text-red font-bold flex justify-center items-center gap-1'} action="">
              <div className={'flex flex-col items-center justify-center'}>
                  <label htmlFor="hour">H</label>
                  <div className={'flex items-center justify-center'}>
                      <InputTimer time={'00'}/>
                      <span className={'text-3xl text-red'}>:</span>
                  </div>
              </div>
              <div className={'flex flex-col items-center justify-center'}>
                  <label htmlFor="hour">M</label>
                  <div className={'flex items-center justify-center'}>
                      <InputTimer time={'00'}/>
                      <span className={'text-3xl text-red'}>:</span>
                  </div>
              </div>
              <div className={'flex flex-col items-center justify-center'}>
                  <label htmlFor="hour">S</label>
                  <div>
                      <InputTimer time={'00'}/>
                  </div>
              </div>
          </form>
      </div>
        <div className={'flex items-center justify-center'}>
            <div className={'p-6 inline-grid grid-cols-2 text-red gap-2 xs:grid-cols-3 xs:gap-4 s:grid-cols-4 s:gap-6` l:grid-cols-5 l:gap-8'}>
                <CardTimer/>
                <CardTimer/>
                <CardTimer/>
                <CardTimer/>
                <CardTimer/>
                <CardTimer/>
            </div>
        </div>
    </>
  )
}

export default App