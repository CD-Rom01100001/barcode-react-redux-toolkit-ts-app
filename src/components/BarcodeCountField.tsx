import { FC } from 'react';
import { useAppSelector } from '../hook';

const BarcodeCountField: FC = () => {

  const barcodeList = useAppSelector(state => state.barcodeIndex.barcodeState);

  return (
    <p className='barcode-count-field'>
      Количество штрих-кодов: {barcodeList.length}
    </p>
  );
}

export default BarcodeCountField;