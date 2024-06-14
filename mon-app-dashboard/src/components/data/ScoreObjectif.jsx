import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import useFetch from "../../utils/useFetch";
import ScoreModel from "../../model/ScoreModel";
import "./ScoreObjectif.css";

function ScoreObjectif() {
  const [dataScore, setScore] = useState([]);
  const { data, loading, error } = useFetch('http://localhost:3001/user/12');

  useEffect(() => {
    if (data) {
      const scoreData = new ScoreModel(data).data;
      setScore(scoreData);
    }
  }, [data]);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  const COLORS = ['#ff0000', '#ffffff'];

  return (
    <div className="bground">
      <div className="containerScore">
        <h3>Score</h3>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={dataScore}
              startAngle={90}
              endAngle={450}
              innerRadius={70}
              outerRadius={80}
              dataKey="value"
              stroke="none"
            >
              {dataScore.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} cornerRadius={10} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="scoreText">
          <p>{`${dataScore[0]?.value}%`}</p>
          <p>de votre objectif</p>
        </div>
      </div>
    </div>
  );
}

export default ScoreObjectif;
