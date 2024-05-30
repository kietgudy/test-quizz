import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import "./DashBoard.scss";
import { Tooltip } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getOverView } from "../../../services/apiService";

const DashBoard = (props) => {
  const [dataOverView, setDataOverView] = useState([]);
  const [dataChart, setDataChart] = useState([]);

  useEffect(() => {
    fetchDataOverView();
  }, []);
  const fetchDataOverView = async () => {
    let res = await getOverView();
    if (res && res.EC === 0) {
      setDataOverView(res.DT);

      //chart data
      const data = [
        {
          name: "Users",
          total: res?.DT.users?.total ?? 0,
        },
        {
          name: "Quizzes",
          total: res?.DT.others?.countQuiz ?? 0,
        },
        {
          name: "Questions",
          total: res?.DT.others?.countQuestions ?? 0,
          
        },
        {
          name: "Answers",
          total: res?.DT.others?.countAnswers ?? 0,
          
        },
      ];
      setDataChart(data)
    }
  };
  

  return (
    <div className="dashboard-container">
      <div className="title">Analytics DashBoard</div>
      <div className="content">
        <div className="content-left">
          <div className="child-left">
            <span className="child-title">Total Users</span>
            <span className="child-total">
              {dataOverView &&
              dataOverView.users &&
              dataOverView.users.total ? (
                <>{dataOverView.users.total}</>
              ) : (
                <>0</>
              )}
            </span>
          </div>
          <div className="child-left">
            <span className="child-title">Total Quizzes</span>
            <span className="child-total">
              {dataOverView &&
              dataOverView.others &&
              dataOverView.others.countQuiz ? (
                <>{dataOverView.others.countQuiz}</>
              ) : (
                <>0</>
              )}
            </span>
          </div>
          <div className="child-left">
            <span className="child-title">Total Questions</span>
            <span className="child-total">
              {dataOverView &&
              dataOverView.others &&
              dataOverView.others.countQuestions ? (
                <>{dataOverView.others.countQuestions}</>
              ) : (
                <>0</>
              )}
            </span>
          </div>
          <div className="child-left">
            <span className="child-title">Total Answers</span>
            <span className="child-total">
              {dataOverView &&
              dataOverView.others &&
              dataOverView.others.countAnswers ? (
                <>{dataOverView.others.countAnswers}</>
              ) : (
                <>0</>
              )}
            </span>
          </div>
        </div>
        <div className="content-right">
          <ResponsiveContainer width="95%" height="100%">
            <BarChart data={dataChart}>
              <XAxis dataKey="name" />
              <YAxis dataKey="total" />
              <Tooltip />
              <Bar dataKey="total" fill="rgb(72, 169, 221)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
export default DashBoard;
