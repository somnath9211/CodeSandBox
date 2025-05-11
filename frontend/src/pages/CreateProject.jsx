import React from "react";
import { useCreateProject } from "../hooks/apis/mutations/useCreateProject";
import { FaAngular, FaReact, FaHtml5 } from "react-icons/fa";
import { SiNextdotjs, SiAstro, SiSvelte } from "react-icons/si";

const Templates = () => {
    const { createProjectMutation, isPending } = useCreateProject();

    async function handleCreateProject() {
        console.log("Creating project...");
        try {
            await createProjectMutation();
            console.log("Project created successfully:");
        } catch (error) {
            console.error("Error creating project:", error);
        }
    }

    return (
        <div className="bg-black text-white min-h-screen flex">
            {/* Sidebar Section */}
            <aside className="w-1/4 bg-gray-900 p-6">
                <h3 className="text-lg font-semibold mb-4">Web</h3>
                <ul className="space-y-2">
                    <li className="text-gray-400 hover:text-white cursor-pointer">
                        Angular
                    </li>
                    <li className="text-gray-400 hover:text-white cursor-pointer">
                        NextJS
                    </li>
                    <li className="text-gray-400 hover:text-white cursor-pointer">
                        Astro
                    </li>
                    <li className="text-gray-400 hover:text-white cursor-pointer">
                        React
                    </li>
                    <li className="text-gray-400 hover:text-white cursor-pointer">
                        Simple HTML
                    </li>
                    <li className="text-gray-400 hover:text-white cursor-pointer">
                        Svelte
                    </li>
                </ul>
            </aside>

            {/* Main Content Section */}
            <main className="flex-1 p-8">
                <header className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Templates</h2>
                    <p className="text-gray-400">
                        Start a new workspace from one of our hand-crafted starting templates
                    </p>
                </header>

                <section className="grid grid-cols-3 gap-6">
                    {/* Angular Template */}
                    <div className="bg-gray-800 p-4 rounded relative">
                        <FaAngular className="text-red-600 text-3xl mb-2" />
                        <h4 className="text-lg font-semibold mb-2">Angular</h4>
                        <p className="text-gray-400 text-sm">
                            Create a new Angular app in TypeScript built with ng-cli
                        </p>
                        <div className="absolute top-0 left-0 bg-black bg-opacity-70 text-white text-xs font-bold px-2 py-1 rounded-bl">
                            Upcoming
                        </div>
                    </div>

                    {/* NextJS Template */}
                    <div className="bg-gray-800 p-4 rounded relative">
                        <SiNextdotjs className="text-white text-3xl mb-2" />
                        <h4 className="text-lg font-semibold mb-2">NextJS</h4>
                        <p className="text-gray-400 text-sm">
                            Create a new full-stack NextJS app in TypeScript or JS, with server-side rendering
                        </p>
                        <div className="absolute top-0 left-0 bg-black bg-opacity-70 text-white text-xs font-bold px-2 py-1 rounded-bl">
                            Upcoming
                        </div>
                    </div>

                    {/* Astro Template */}
                    <div className="bg-gray-800 p-4 rounded relative">
                        <SiAstro className="text-yellow-500 text-3xl mb-2" />
                        <h4 className="text-lg font-semibold mb-2">Astro</h4>
                        <p className="text-gray-400 text-sm">
                            Create a new full-stack web app with Astro, a framework that's great for content sites
                        </p>
                        <div className="absolute top-0 left-0 bg-black bg-opacity-70 text-white text-xs font-bold px-2 py-1 rounded-bl">
                            Upcoming
                        </div>
                    </div>

                    {/* React Template */}
                    <div
                        onClick={handleCreateProject}
                        className="bg-gray-800 p-4 rounded cursor-pointer"
                    >
                        <FaReact className="text-blue-500 text-3xl mb-2" />
                        <h4 className="text-lg font-semibold mb-2">React</h4>
                        <p className="text-gray-400 text-sm">
                            Create a new React app in TypeScript or JavaScript, built with Vite
                        </p>
                    </div>

                    {/* Simple HTML Template */}
                    <div className="bg-gray-800 p-4 rounded relative">
                        <FaHtml5 className="text-orange-500 text-3xl mb-2" />
                        <h4 className="text-lg font-semibold mb-2">Simple HTML</h4>
                        <p className="text-gray-400 text-sm">
                            Create a new, simple web app with plain HTML, CSS and JS (or TypeScript)
                        </p>
                        <div className="absolute top-0 left-0 bg-black bg-opacity-70 text-white text-xs font-bold px-2 py-1 rounded-bl">
                            Upcoming
                        </div>
                    </div>

                    {/* Svelte Template */}
                    <div className="bg-gray-800 p-4 rounded relative">
                        <SiSvelte className="text-orange-600 text-3xl mb-2" />
                        <h4 className="text-lg font-semibold mb-2">Svelte</h4>
                        <p className="text-gray-400 text-sm">
                            Create a new Svelte app in TypeScript or JavaScript, built with Vite
                        </p>
                        <div className="absolute top-0 left-0 bg-black bg-opacity-70 text-white text-xs font-bold px-2 py-1 rounded-bl">
                            Upcoming
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Templates;