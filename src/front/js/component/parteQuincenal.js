import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const ParteQuincenal = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const [partes, setPartes] = useState([]);

  useEffect(() => {
    getPartes();
  }, []);
  const getPartes = async () => {
    const response = await fetch(
      process.env.BACKEND_URL + "/api/parteQuincenal",
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    const data = await response.json();
    setPartes(data.result);
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Resumen Quincenal",
      },
    },
  };

  return (
    <div className="container">
      <Line
        options={options}
        data={{
          labels: partes.map((parte) =>
            new Date(parte["date"]).toLocaleDateString("es-ES")
          ),
          datasets: [
            {
              label: "Glucosa",
              data: partes.map((parte) => parte["sugar_level"]),
              borderColor: "#7AB0B2",
              backgroundColor: "#7AB0B2",
            },
            {
              label: "Oxígeno",
              data: partes.map((parte) => parte["oxygen_level"]),
              borderColor: "#6D7E9A",
              backgroundColor: "#6D7E9A",
            },
            {
              label: "Colesterol",
              data: partes.map((parte) => parte["cholesterol_level"]),
              borderColor: "#98B193",
              backgroundColor: "#98B193",
            },
            {
              label: "Leucocitos",
              data: partes.map((parte) => parte["leukocytes"]),
              borderColor: "#E3946E",
              backgroundColor: "#E3946E",
            },
            {
              label: "Glóbulos rojos",
              data: partes.map((parte) => parte["redbloods_level"]),
              borderColor: "#B87E93",
              backgroundColor: "#B87E93",
            },
            {
              label: "Glóbulos blancos",
              data: partes.map((parte) => parte["whitebloods_level"]),
              borderColor: "#F3D9BA",
              backgroundColor: "#F3D9BA",
            },
          ],
        }}
      />
    </div>
  );
};
