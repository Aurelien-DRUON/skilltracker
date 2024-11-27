"use client";

import { useEffect, useState } from "react";
import Button from "../../components/Button";
import { FaTrash } from "react-icons/fa";
import Sidebar from "@/app/components/Sidebar";

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newSkill, setNewSkill] = useState({
    name: "",
    progression: "",
    createdAt: "",
  });

  useEffect(() => {
    setSkills([
      {
        id: 1,
        title: "Skill 1",
        createdAt: "2024-11-01",
        progression: "50%",
      },
      {
        id: 2,
        title: "Skill 2",
        createdAt: "2024-11-10",
        progression: "75%",
      },
    ]);
  }, []);

  const handleAddSkill = () => {};

  const handleDeleteSkill = () => {};

  return (
    <div className="flex">
      <Sidebar className="w-1/4" />
      <div className="w-3/4 px-10 py-6">
        {showForm ? (
          <div>
            <h2 className="text-2xl font-bold mb-4">Add a New Skill</h2>
            <form onSubmit={handleAddSkill}>
              <div className="mb-4">
                <label className="block text-lg font-medium mb-2">Titre</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg"
                  value={newSkill.name}
                  onChange={(e) =>
                    setNewSkill({ ...newSkill, name: e.target.value })
                  }
                  required
                />
              </div>
              <Button>Ajouter le skill</Button>
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
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <table className="w-full border-collapse border border-gray-300 mb-6">
              <thead>
                <tr className="bg-gray-700">
                  <th className="border border-gray-300 px-4 py-2">Titre</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Date de création
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Progression
                  </th>
                  <th className="border border-gray-300 px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {skills.map((skill) => (
                  <tr key={skill.id} className="text-center">
                    <td className="border border-gray-300 px-4 py-2">
                      {skill.title}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {skill.createdAt}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {skill.progression}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 flex justify-center items-center">
                      <button
                        onClick={() => handleDeleteSkill(skill.id)}
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
              Ajouter un nouveau skill
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
