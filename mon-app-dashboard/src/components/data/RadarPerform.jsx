import React, { useState, useEffect } from "react";
import useFetch from "../../utils/useFetch";
import RadarModel from "../../model/RadarModel";
import "./RadarPerform.css";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

function RadarPerform() {
  const [dataPerform, setRadarPerform] = useState([]);
  const { data, loading, error } = useFetch('http://localhost:3001/user/12/performance');

  useEffect(() => {
    if (data) {
      const radarData = new RadarModel(data).data;
      setRadarPerform(radarData);
    }
  }, [data]);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  return (
    <div className="bgroundRadar">
      <div className="containerRadar">
        <ResponsiveContainer width="100%" height="100%" >
          <RadarChart cx="50%" cy="50%" outerRadius="60%" data={dataPerform}>
            <PolarGrid stroke="#fff" polarRadius={[10, 20, 35, 50, 65]} radialLines={false} gridType='polygon' />
            <PolarAngleAxis dataKey="kind" tick={{ fill: '#fff', fontSize: 12 }}  />
            <PolarRadiusAxis stroke="none" domain={[0, 250]} />
            <Radar name="Performance" dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default RadarPerform;



