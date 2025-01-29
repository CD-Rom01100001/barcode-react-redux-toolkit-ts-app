import { FC } from 'react';
import { ReactBarcode } from 'react-jsbarcode'
import { optionsBarcode } from '../data/data'
import { useAppSelector } from '../hook';


const OutputField: FC = () => {

  const barcodeList = useAppSelector(state => state.barcodeIndex.barcodeState);

  return (
    <div className='output-field'>
      {barcodeList.map((code: string, key: number) => 
        <ReactBarcode 
        value={code}
        options={optionsBarcode}
        key={key}/>
      )}
    </div>
    
  );
}

export default OutputField;