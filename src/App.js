import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
function App() {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const { depoistMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  console.log(account);
  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={() => depoistMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
    </div>
  );
}

export default App;
