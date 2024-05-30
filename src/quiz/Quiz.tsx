import QuestionsData from "@quiz/QuestionsData";
import wing from "@assets/wing.png";
import wing2 from "@assets/wing2.png";
import type { RadioChangeEvent } from "antd";
import { Radio, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/store";
import {
  nextQues,
  previousQues,
  setAnswer,
  startQuiz,
  submitQuiz,
  resetpage,
} from "@store/slice/quizSlice";

const Quiz = () => {
  const { score, currentQuiz, answers, isSubmit, start } = useSelector(
    (state: RootState) => state.quiz.value
  );

  const dispatch = useDispatch();

  const onClickStart = () => {
    dispatch(startQuiz());
  };

  const onNextQuestion = () => {
    dispatch(nextQues());
  };

  const onPreviousQuestion = () => {
    dispatch(previousQues());
  };

  const submit = () => {
    dispatch(submitQuiz());
  };

  const onChange = (e: RadioChangeEvent) => {
    const value = e.target.value;
    dispatch(setAnswer(value));
  };

  const onClickReset = () => {
    dispatch(resetpage());
  };

  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <div className="fontquiz h-screen flex justify-center" data-theme={theme}>
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
        <div id="container" className="mt-[148px] z-30">
          <div
            className="w-[700px] p-10 px-16 rounded-xl pt-7 m-auto h-[500px] z-30"
            data-back={theme}
          >
            {!start ? (
              <div className="flex flex-col justify-center items-center self-center h-full">
                <div className="text-3xl font-medium mb-6">
                  แบบทดสอบก่อนเรียน
                </div>
                <div
                  className="btn btn2"
                  onClick={onClickStart}
                  data-btn={theme}
                >
                  เริ่มทำแบบทดสอบ
                </div>
              </div>
            ) : (
              <>
                <div className="mt-[10px] flex flex-col">
                  {!isSubmit ? (
                    <>
                      <p className="text-right mb-[35px]">
                        ข้อ {currentQuiz + 1} จาก 10
                      </p>
                      <div className="mb-[30px] h-[200px]">
                        {QuestionsData.slice(currentQuiz, currentQuiz + 1).map(
                          (item, index) => {
                            return (
                              <div className="quizcontent m-auto ml-8 ">
                                <ul key={index}>
                                  <li className="mb-3 text-lg font-medium">
                                    {currentQuiz + 1}. {item.question}
                                  </li>
                                  <Radio.Group
                                    data-radio={theme}
                                    onChange={onChange}
                                    className="ml-[14px] leading-6"
                                    value={answers[currentQuiz]}
                                  >
                                    <Space direction="vertical">
                                      <Radio
                                        className="fontquiz text-base"
                                        value={"A"}
                                      >
                                        A. {item.A}
                                      </Radio>
                                      <Radio
                                        className="fontquiz text-base"
                                        value={"B"}
                                      >
                                        B. {item.B}
                                      </Radio>
                                      <Radio
                                        className="fontquiz text-base"
                                        value={"C"}
                                      >
                                        C. {item.C}
                                      </Radio>
                                      <Radio
                                        className="fontquiz text-base"
                                        value={"D"}
                                      >
                                        D. {item.D}
                                      </Radio>
                                    </Space>
                                  </Radio.Group>
                                </ul>
                              </div>
                            );
                          }
                        )}
                      </div>
                      <div className="flex flex-row justify-between">
                        <button
                          className="btn text-base cursor-pointer"
                          onClick={onPreviousQuestion}
                          disabled={currentQuiz === 0}
                          data-btn={theme}
                          style={{
                            cursor: currentQuiz === 0 ? "default" : "pointer",
                            boxShadow: currentQuiz === 0 ? "none" : "",
                            opacity: currentQuiz === 0 ? 0.6 : 1,
                          }}
                        >
                          Previous
                        </button>

                        {currentQuiz < QuestionsData.length - 1 && (
                          <button
                            data-btn={theme}
                            className="btn text-base cursor-pointer"
                            onClick={onNextQuestion}
                            aria-disabled={
                              currentQuiz === QuestionsData.length - 1
                            }
                          >
                            Next
                          </button>
                        )}
                        {currentQuiz === QuestionsData.length - 1 && (
                          <button
                            data-btn={theme}
                            className="btn text-base cursor-pointer"
                            onClick={submit}
                          >
                            Submit
                          </button>
                        )}
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col m-auto text-lg mt-[110px]">
                      <p className="text-center mb-5 font-medium text-3xl">
                        สรุปผลการทดสอบ
                      </p>
                      <p className="text-center mb-5">
                        ได้คะแนน {score} คะแนนจาก 10 คะแนน
                      </p>
                      <div
                        data-btn={theme}
                        className="btn text-center text-base"
                        onClick={onClickReset}
                      >
                        ทำแบบทดสอบอีกครั้ง
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
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

export default Quiz;
