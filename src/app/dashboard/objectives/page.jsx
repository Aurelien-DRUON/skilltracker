"use client";

import { useState, useEffect } from "react";
import Button from "../../components/Button";
import { FaTrash } from "react-icons/fa";
import Sidebar from "@/app/components/Sidebar";

export default function Objectives() {
  const [objectives, setObjectives] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newObjective, setNewObjective] = useState({
    title: "",
    createdAt: "",
    timeGoal: "",
  });

  useEffect(() => {
    setObjectives([
      {
        id: 1,
        title: "Objectif 1",
        createdAt: "2024-11-01",
        timeGoal: "2024-12-01",
      },
      {
        id: 2,
        title: "Objectif 2",
        createdAt: "2024-11-10",
        timeGoal: "2024-12-10",
      },
    ]);
  }, []);

  const handleAddObjective = () => {};

  const handleDeleteObjective = () => {};

  return (
    <div className="flex">
      <Sidebar className="w-1/4" />
      <div className="w-3/4 px-10 py-6">
        {showForm ? (
          <div>
            <h2 className="text-2xl font-bold mb-4">Add a New Objective</h2>
            <form onSubmit={handleAddObjective}>
              <div className="mb-4">
                <label className="block text-lg font-medium mb-2">Title</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg"
                  value={newObjective.title}
                  onChange={(e) =>
                    setNewObjective({
                      ...newObjective,
                      title: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg font-medium mb-2">
                  Date butoire
                </label>
                <input
                  type="date"
                  className="w-full p-2 border rounded-lg"
                  value={newObjective.timeGoal}
                  onChange={(e) =>
                    setNewObjective({
                      ...newObjective,
                      timeGoal: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <Button>Ajouter l'objectif</Button>
              <button
                type="button"
                className="ml-4 bg-gray-400 text-white font-semibold px-4 py-2 rounded-lg hover:bg-gray-500"
                onClick={() => setShowForm(false)}
              >
                Annuler
              </button>
            </form>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-4">Objectives</h2>
            <table className="w-full border-collapse border border-gray-300 mb-6">
              <thead>
                <tr className="bg-gray-700">
                  <th className="border border-gray-300 px-4 py-2">Titre</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Date de création
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Date butoire
                  </th>
                  <th className="border border-gray-300 px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {objectives.map((objective) => (
                  <tr key={objective.id} className="text-center">
                    <td className="border border-gray-300 px-4 py-2">
                      {objective.title}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {objective.createdAt}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {objective.timeGoal}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 flex justify-center items-center">
                      <button
                        onClick={() => handleDeleteObjective(objective.id)}
                        className="w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-md hover:bg-red-600"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Button onClick={() => setShowForm(true)}>
              Ajouter un objectif
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
