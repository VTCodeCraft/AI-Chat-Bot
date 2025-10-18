import React, { useContext, useState } from "react";
import { UserContext } from "../context/user.context";
import axios from "../config/axios";

const Home = () => {
  const { user } = useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectName, setProjectName] = useState(null);

  const createProject = (e) => {
    e.preventDefault();
    console.log("Project created:", projectName);
    setIsModalOpen(false);
    setProjectName("");
         axios.post('/projects/create',{
                  name:projectName,
         })
         .then(res => {
                  console.log(res.data);
         })
         .catch(err => {
                  console.log(err);
         })
  };

  return (
    <main className="p-4 text-white bg-gray-900 min-h-screen">
      <div className="projects flex flex-col items-start space-y-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="project p-4 border border-slate-400 rounded-md hover:bg-slate-800 transition-all"
        >
          <i class="ri-link"></i> Create Project
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Create New Project
            </h2>
            <form onSubmit={createProject} className="space-y-4">
              <div>
                <label
                  htmlFor="projectName"
                  className="block text-sm mb-1 text-gray-300"
                >
                  Project Name
                </label>
                <input
                  id="projectName"
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  placeholder="Enter project name"
                  className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded bg-gray-600 hover:bg-gray-700 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 transition"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
};

export default Home;
