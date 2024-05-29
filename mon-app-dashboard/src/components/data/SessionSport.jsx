import React, { useState, useEffect } from "react";
import "./SessionSport.css";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import useFetch from "../../utils/useFetch";
import SessionModel from "../../model/SessionModel";


function SessionSport() {
    const [sessions, setSessions] = useState([]);
    const { data, loading, error } = useFetch('http://localhost:3001/user/12/average-sessions');

    useEffect(() => {
        if (data) {
            const dataSessions = new SessionModel(data).data;
            setSessions(dataSessions);
        }
    }, [data]);

    if (loading) {
        return <div>Chargement...</div>;
    }

    if (error) {
        return <div>Erreur : {error}</div>;
    }

    return (
        <div className="bgroundRed">
            <div className="containerSession">
                <h3>Durée moyenne des sessions</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={sessions}>
                        <XAxis dataKey="day" />
                        <Tooltip />
                        <Line type="monotone" dataKey="sessionLength" stroke=" #282D30" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default SessionSport;
