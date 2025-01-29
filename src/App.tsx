import Button from './components/Button'
import InputField from './components/InputField'
import OutputField from './components/OutputField'
import BarcodeCountField from './components/BarcodeCountField'
import { useAppDispatch, useAppSelector} from './hook'
import { clearOutputField, outputText} from './store/barcodeSlice'

function App() {

  const text = useAppSelector(state => state.barcodeIndex.textState)
  const dispatch = useAppDispatch();

  return (
    <div className='app'>
      <InputField
        text={text}/>
      <Button 
        name='Сгенерировать' 
        data={()=>
          dispatch(outputText(text))
        }/>
      <Button 
        name='Очистить' 
        data={()=>
          dispatch(clearOutputField(''))
        }/>
      <BarcodeCountField />
      <OutputField />
    </div>
  )
}

export default App
