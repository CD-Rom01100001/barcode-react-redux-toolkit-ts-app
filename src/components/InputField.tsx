import { FC } from 'react';
import { useAppDispatch } from '../hook';
import { setText } from '../store/barcodeSlice';

type InputFieldProps = {
  text: string;
}

const InputField: FC<InputFieldProps> = ({text}) => {
  const dispatch = useAppDispatch();

  return (
    <div className='input-field'>
      <textarea 
        value={text}
        onChange={(event) => dispatch(setText(event.target.value))}
        className='textarea'
        placeholder='Вставьте Ваш код сюда!'
        />
    </div>
  );
}

export default InputField;