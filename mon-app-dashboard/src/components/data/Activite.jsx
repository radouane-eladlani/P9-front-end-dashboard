import React, { useEffect, useState } from "react";
import "./Activite.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import useFetch from "../../utils/useFetch";
import ActiviteModel from "../../model/ActiviteModel";

const xAxisStyle = {
    tickLine: false,
    tick: { fontSize: 14 },
    dy: 15
};

const yAxisKilogramStyle = {
    yAxisId: "kilogram",
    dataKey: "kilogram",
    type: "number",
    domain: ['dataMin - 2', 'dataMax + 1'],
    tickCount: 4,
    axisLine: false,
    orientation: "right",
    tickLine: false,
    tick: { fontSize: 14 },
    dx: 15
};

const yAxisCaloriesStyle = {
    yAxisId: "calories",
    dataKey: "calories",
    type: "number",
    domain: ['dataMin - 20', 'dataMax + 10'],
    hide: true
};

function Activite() {
    const [sessions, setSessions] = useState([]);
    const { data, loading, error } = useFetch('http://localhost:3001/user/12/activity');

    useEffect(() => {
        if (data) {
            const sessions = new ActiviteModel(data).data;
            const dataSessions = sessions.map((session, index) => ({
                ...session,
                dayNumber: index + 1 
            }));
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
        <div className="Wrapper">
            <div className="Head">
                <div className="Title">Activité quotidienne</div>
                <div className="Legend">
                    <div className="Info">
                        <div className="IconPoids" />
                        <div className="TextLegend">Poids (kg)</div>
                    </div>
                    <div className="Info">
                        <div className="IconCalories" />
                        <div className="TextLegend">Calories brûlées (kCal)</div>
                    </div>
                </div>
            </div>
            <ResponsiveContainer height={200}>
                <BarChart data={sessions} barGap={8} barCategoryGap={1}>
                    <CartesianGrid vertical={false} strokeDasharray="1 1" />
                    <XAxis {...xAxisStyle} dataKey= "dayNumber" />
                    <YAxis {...yAxisKilogramStyle} />
                    <YAxis {...yAxisCaloriesStyle} />
                    <Tooltip content={<ActivityToolType />} />
                    <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]} />
                    <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={7} radius={[50, 50, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Activite;

function ActivityToolType({ active, payload }) {
    if (active) {
        return (
            <div className="Container">
                <div className="Text">{payload[0].value}kg</div>
                <div className="Text">{payload[1].value}Kcal</div>
            </div>
        );
    }
    return null;
}


