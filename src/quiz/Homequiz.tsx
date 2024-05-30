import { useSelector } from "react-redux";
import { RootState } from "@store/store";

const Homequiz = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <div className="fontquiz h-screen flex justify-center" data-theme={theme}>
      <ul className="ulquiz self-center" >
        <li className="liquiz ">
          <input type="checkbox" data-word={theme}/>
          <div className="word" data-word={theme}>W</div>
        </li>
        <li className="liquiz">
          <input type="checkbox" />
          <div className="word" data-word={theme}>E</div>
        </li>
        <li className="liquiz">
          <input type="checkbox" />
          <div className="word" data-word={theme}>L</div>
        </li>
        <li className="liquiz">
          <input type="checkbox" />
          <div className="word" data-word={theme}>C</div>
        </li>
        <li className="liquiz">
          <input type="checkbox" />
          <div className="word" data-word={theme}>O</div>
        </li>
        <li className="liquiz">
          <input type="checkbox" />
          <div className="word" data-word={theme}>M</div>
        </li>
        <li className="liquiz">
          <input type="checkbox" />
          <div className="word" data-word={theme}>E</div>
        </li>
      </ul>
    </div>
  );
};

export default Homequiz;
