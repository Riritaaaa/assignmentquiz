import { useSelector } from "react-redux";
import { RootState } from "@store/store";
import wing from "@assets/wing.png";
import wing2 from "@assets/wing2.png";

const Score = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const { allscores } = useSelector((state: RootState) => state.quiz.value);
  const sortedScores = [...allscores].reverse();

  return (
    <div
      className="fontquiz h-screen flex justify-center relative"
      data-theme={theme}
    >
      <div className="relative z-30">
        {theme !== "dark" && (
          <img
            className="z-50 w-10 self-start mt-[90px] absolute left-[-10px]"
            src={wing}
          />
        )}
        {theme !== "dark" && (
          <img
            className="z-50 w-10 self-start mt-[90px] absolute left-[110px]"
            src={wing2}
          />
        )}

        <div id="container" className="mt-[148px]">
          <div
            className="w-[700px] p-10 px-16 rounded-xl pt-7 m-auto h-[500px] z-30"
            data-back={theme}
          >
            <div className="text-center text-3xl font-medium my-[30px] mt-[20px]">
              ผลการทดสอบทั้งหมด
            </div>
            <div className="scorescroll mx-8" id="style-2" data-scroll={theme}>
              {sortedScores.map((score, index) => {
                return (
                  <div className="text-lg leading-10">
                
                    {index + 1}. {score} คะแนน
                   
                  </div>
                );
              })}
            </div>
          </div>

          <div className="ghost">
            <div className="ghost__face">
              <div className="ghost__eyes">
                <div className="ghost__eyes-l"></div>
                <div className="ghost__eyes-r"></div>
              </div>
              <div className="ghost__mouth"></div>
            </div>
            <div className="ghost__torso"></div>
            <div className="ghost__hands">
              <div className="ghost__hands-l"></div>
              <div className="ghost__hands-r"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Score;
