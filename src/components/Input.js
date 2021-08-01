import {useSelector, useDispatch} from "react-redux";
import {inputsliceactions} from "../store/input";
import {fetchdata} from "../store/citydetaithunks";
const Input = () => {
  const input = useSelector((state) => state.input);
  const dispatch = useDispatch();

  const changehandler = (e) => {
    dispatch(inputsliceactions.setvalue(e.target.value));
  };

  const clickhandler = () => {
    fetchdata(input.value);
  };

  return (
    <div>
      <input type="text" value={input.value} onChange={changehandler} />
      <button onClick={clickhandler}></button>
    </div>
  );
};

export default Input;
