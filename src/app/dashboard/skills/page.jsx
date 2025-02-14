"use client";

import { useEffect, useState } from "react";
import Button from "../../components/Button";
import { FaTrash } from "react-icons/fa";
import Sidebar from "@/app/components/Sidebar";
import { useRouter, useSearchParams } from "next/navigation";
import {
  useDeleteSkill,
  useGetUserById,
  useGetUserSkillsById,
  usePostSkill,
  useUpdateSkill,
} from "@/app/api/dashboard";
import Input from "@/app/components/Input";

export default function Skills() {
  const router = useRouter();
  const params = useSearchParams();

  const [user, setUser] = useState({});
  const [skills, setSkills] = useState([]);
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

  const fetchSkills = async () => {
    if (user) {
      const skills = await useGetUserSkillsById({ userId: user.id });
      setSkills(skills);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const handleAddSkill = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const skill = await usePostSkill({
      userId: user.id,
      name: formData.get("name"),
      progression: Number(formData.get("progression")),
    });
    setSkills([...skills, skill]);
    setShowForm(false);
  };

  const handleDeleteSkill = async (id) => {
    await useDeleteSkill({ id });
    fetchSkills();
  };

  const handleUpdateSkill = async (id, progression) => {
    await useUpdateSkill({ id, progression: Number(progression) });
    fetchSkills();
  };

  return (
    <div className="flex">
      <Sidebar className="w-1/4" user={user.name} />
      <div className="w-3/4 px-10 py-6 overflow-auto">
        {showForm ? (
          <div>
            <h2 className="text-2xl font-bold mb-4">Add a New Skill</h2>
            <form onSubmit={handleAddSkill}>
              <div className="mb-4">
                <Input label="Titre" type="text" id="name" name="name" />
              </div>
              <div className="flex flex-row items-center gap-4">
                <div className="mb-4">
                  <Input
                    label="Progression initiale"
                    type="number"
                    id="progression"
                    name="progression"
                  />
                </div>
                % / 100%
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
                      {skill.name}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {new Date(skill.createdAt).toLocaleDateString()}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <div className="flex items-center gap-2">
                        <Input
                          type="number"
                          id="newProgression"
                          name="newProgression"
                          value={skill.progression}
                          onChange={(e) =>
                            handleUpdateSkill(skill.id, e.target.value)
                          }
                          className="!mb-0 h-1/5 text-end"
                        />
                        %
                      </div>
                    </td>
                    <td className="px-4 py-2 flex justify-center">
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
