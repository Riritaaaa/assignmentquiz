import { Progress } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "@store/store";
import wing from "@assets/wing.png";
import wing2 from "@assets/wing2.png";
import "./quiz.css"

const Evaluate = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <>
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
              <div className="text-center text-3xl font-medium my-[30px] mt-[20px]">
                ประเมินคอร์สเรียน
              </div>
              <div className="text-lg flex flex-col justify-center items-center">
                <div>
                  1. Git Version Control
                  <div className="flex flex-row mb-4">
                    <Progress
                      data-scroll={theme}
                      className="mx-5 self-center w-[350px]"
                      percent={80}
                      status="active"
                      showInfo={false}
                      strokeWidth={12}
                    />{" "}
                    <p>8/10</p>
                  </div>
                </div>
                <div>
                  2. Basic Javascript
                  <div className="flex flex-row mb-4">
                    <Progress
                      data-scroll={theme}
                      className="mx-5 self-center w-[350px]"
                      percent={70}
                      status="active"
                      showInfo={false}
                      strokeWidth={12}
                    />{" "}
                    <p>7/10</p>
                  </div>
                </div>
                <div>
                  3. Basic TypeScript
                  <div className="flex flex-row mb-4">
                    <Progress
                      data-scroll={theme}
                      className="mx-5 self-center w-[350px]"
                      percent={70}
                      status="active"
                      showInfo={false}
                      strokeWidth={12}
                    />{" "}
                    <p>7/10</p>
                  </div>
                </div>
                <div>
                  4. React TypeScript
                  <div className="flex flex-row mb-4">
                    <Progress
                      data-scroll={theme}
                      className="mx-5 self-center w-[350px]"
                      percent={60}
                      status="active"
                      showInfo={false}
                      strokeWidth={12}
                    />{" "}
                    <p>6/10</p>
                  </div>
                </div>
                <div>
                  5. Github Page
                  <div className="flex flex-row ">
                    <Progress
                      data-scroll={theme}
                      className="mx-5 self-center w-[350px]"
                      percent={80}
                      status="active"
                      showInfo={false}
                      strokeWidth={12}
                    />{" "}
                    <p className="self-center">8/10</p>
                  </div>
                </div>
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
    </>
  );
};

export default Evaluate;
