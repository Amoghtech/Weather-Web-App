import React from 'react';
import styles from './App.module.css';
import Input from './components/Input';
import { useSelector, useDispatch } from 'react-redux';
import Loading from './components/Loading';
import { inputsliceactions } from './store/input';
function App() {
  const dispatch = useDispatch();
  const {
    details: {
      icon,
      name,
      region,
      country,
      temp,
      wind,
      humidity,
      precipitation,
    },
    error,
  } = useSelector((state) => state.city);
  // dispatch(inputsliceactions.setloading(true));
  const { value, loading } = useSelector((state) => state.input);

  return (
    <>
      <div className={styles['input-container']}>
        <Input />
      </div>
      <div className={styles['container']}>
        <div className={styles['back']}>
          {value.length === 0 && !loading && <p>Enter some City Name</p>}
          {loading && <Loading />}
          {error.length > 0 && !loading && <p>{error}</p>}
          {error.length === 0 && !loading && value.length > 0 && (
            <>
              {' '}
              <div className={styles['details']}></div>
              <img src={icon} />
              <p className={styles.temp}>{temp}</p>
              <p>{name}</p>
              <div className={styles.row}>
                <div className={styles['elements']}>
                  <h3>Wind</h3>
                  <p>{wind}</p>
                </div>
                <div className={styles['elements']}>
                  <h3>Humidity</h3>
                  <p>{humidity}</p>
                </div>
                <div className={styles['elements']}>
                  <h3>Precipitation</h3>
                  <p>{precipitation}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
