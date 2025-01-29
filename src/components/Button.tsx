import { FC } from 'react';

type ButtonProps = {
  name: string;
  data: ()=>void;
}

const Button: FC<ButtonProps> = ({name, data}) => {

  return (
    <div className='button'>
      <button onClick={data}>{name}</button>
    </div>
  );
}

export default Button;