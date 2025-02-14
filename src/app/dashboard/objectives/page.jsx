"use client";

import { useState, useEffect, useCallback } from "react";
import Button from "../../components/Button";
import { FaTrash } from "react-icons/fa";
import Sidebar from "@/app/components/Sidebar";
import { useRouter, useSearchParams } from "next/navigation";
import {
  useDeleteObjective,
  useGetObjectivesByUserId,
  useGetUserById,
  usePostObjective,
} from "@/app/api/dashboard";
import Input from "@/app/components/Input";

export default function Objectives() {
  const router = useRouter();
  const params = useSearchParams();

  const [user, setUser] = useState({});
  const [objectives, setObjectives] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      if (!params.get("user")) {
        router.push("/");
      } else {
        const user = await useGetUserById({ id: params.get("user") });
        setUser(user);
      }
    }
    fetchUser();
  }, [params, router]);

  const fetchObjectives = async () => {
    if (user) {
      const objectives = await useGetObjectivesByUserId({ userId: user.id });
      setObjectives(objectives);
    }
  };

  useEffect(() => {
    fetchObjectives();
  }, []);

  const handleAddObjective = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const objective = await usePostObjective({
      userId: user.id,
      title: formData.get("title"),
      timeGoal: new Date(formData.get("date")).toISOString(),
    });
    setObjectives([...objectives, objective]);
    setShowForm(false);
  };

  const handleDeleteObjective = async (id) => {
    await useDeleteObjective({ id });
    fetchObjectives();
  };

  return (
    <div className="flex">
      <Sidebar className="w-1/4" user={user.name} />
      <div className="w-3/4 px-10 py-6">
        {showForm ? (
          <div>
            <h2 className="text-2xl font-bold mb-4">Add a New Objective</h2>
            <form onSubmit={handleAddObjective}>
              <div className="mb-4">
                <Input label="Titre" type="text" id="title" name="title" />
              </div>
              <div className="mb-4">
                <Input label="Date butoire" type="date" id="date" name="date" />
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
                      {new Date(objective.createdAt).toLocaleDateString()}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {new Date(objective.timeGoal).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-2 flex justify-center items-center">
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
