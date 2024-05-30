import { createBrowserRouter } from "react-router-dom";
import Homequiz from "@quiz/Homequiz";
import Quiz from "@quiz/Quiz";
import Score from "@quiz/Score";
import Evaluate from "@quiz/Evaluate";
import Navbar from "@quiz/nav";

const route = createBrowserRouter(
  [
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          index: true,
          element: <Homequiz />,
        },
        {
          path: "quiz",
          element: <Quiz />,
        },
        {
          path: "score",
          element: <Score />,
        },
        {
          path: "evaluate",
          element: <Evaluate />,
        },
      ],
    },
  ],
  { basename: "/assignmentquiz" }
);

export default route;
