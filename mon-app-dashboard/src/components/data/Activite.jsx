import React, { useEffect, useState } from "react";
import "./Activite.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useFetch } from "../../utils/useFetch";



function Activite() {
const [sessions, setSessions] = useState([]);
const {data, loading, error} = useFetch('http://localhost:3001/user/12/activity');
console.log(data)
setSessions(data.data.sessions);

    return (
        <div className="bgroundActivite">
            <div className="containerActivite">
                <h3>Activité quotidienne</h3>
                <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={sessions}>
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="kilogram" fill="#8884d8" name="Poids (kg)" />
                        <Bar dataKey="calories" fill="#82ca9d" name="Calories brûlées" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default Activite;
