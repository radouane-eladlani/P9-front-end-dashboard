import React, { useState, useEffect, useRef } from "react";
import "./SessionSport.css";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import useFetch from "../../utils/useFetch";
import SessionModel from "../../model/SessionModel";

// Composant Tooltip pour afficher la durée de la session
function SessionsToolType({ active, payload }) {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].value} min`}</p>
      </div>
      
    );
  }
  return null;
}



const xAxisConfig = {
  type: "category",
  dataKey: "day",
  tickLine: false,
  stroke: "none",
  padding: { right: 10, left: 10 },
  tick: { fontSize: 12, stroke: "rgba(255, 255, 255, 0.7)", opacity: 0.8 }
};

const yAxisConfig = {
  dataKey: "sessionLength",
  domain: [0, "dataMax + 10"],
  hide: true,
  tick: { fontSize: 12, stroke: "none", opacity: 0.8 }
};

const lineConfig = {
  type: "monotone",
  dataKey: "sessionLength",
  stroke: "rgba(255, 255, 255, 0.7)",
  strokeWidth: 2,
  dot: false,
  activeDot: { r: 5, strokeWidth: 2, stroke: "width"},
};

function SessionSport() {
  const [sessions, setSessions] = useState([]);
  const { data, loading, error } = useFetch('http://localhost:3001/user/12/average-sessions');
  const containerRef = useRef(null);

  useEffect(() => {
    if (data) {
      const sessionData = new SessionModel(data).data;
      setSessions(sessionData);
    }
  }, [data]);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  const handleMouseMove = (e) => {
    if (e.isTooltipActive && containerRef.current) {
      const windowWidth = containerRef.current.clientWidth;
      const mouseXpercentage = Math.round((e.activeCoordinate.x / windowWidth) * 100);
      containerRef.current.style.background = `linear-gradient(90deg, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(255,0,0,1) 100%)`;
    } else if (containerRef.current) {
      containerRef.current.style.background = 'linear-gradient(90deg, #E60000, #E60000)';
    }
  };
  
  
  
  

  return (
    <div className="bgroundRed" ref={containerRef}>
      <div className="containerSession">
        <h3>Durée moyenne des sessions</h3>
        <ResponsiveContainer width="100%" height="70%">
          <LineChart data={sessions} onMouseMove={handleMouseMove} >
            <XAxis {...xAxisConfig} />
            <YAxis {...yAxisConfig} />
            <Tooltip content={<SessionsToolType />} />
            <Line {...lineConfig} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default SessionSport;
