import { useSelector, useDispatch } from 'react-redux';
import { inputsliceactions } from '../store/input';
import { fetchdetail } from '../store/citydetailthunks';
import { useEffect, useState } from 'react';
import styles from './Input.module.css';

const Input = () => {
  const input = useSelector((state) => state.input);
  const dispatch = useDispatch();
  // const inputref = useRef();
  const [inp, setinp] = useState('');

  useEffect(() => {
    const i = setTimeout(() => {
      dispatch(inputsliceactions.setloading(false));
      console.log('set');
    }, 2000);
    return () => {
      console.log('iunset');
      dispatch(inputsliceactions.setloading(true));

      clearTimeout(i);
    };
  }, [inp,dispatch]);

  // const changehandler = (e) => {
  // };
  const clickhandler = () => {
    
    dispatch(inputsliceactions.setvalue(inp));
    dispatch(fetchdetail(input.value));
  };

  return (
    <div className={styles['input']}>
      <input
        type='text'
        onChange={(e) => {
          setinp(e.target.value);
        }}
      />
      <button onClick={clickhandler}>Search</button>
    </div>
  );
};

export default Input;
