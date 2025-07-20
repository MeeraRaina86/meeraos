import { useState } from 'react';

const folders = [
  { name: 'Resume', icon: '📄', content: 'This is Meera’s resume.' },
  { name: 'GenAI', icon: '🤖', content: 'My experiments with generative AI.' },
  { name: 'Projects', icon: '💻', content: 'Showcasing my favorite projects.' },
  { name: 'Contact', icon: '📬', content: 'Reach me at: meeraraina@email.com' },
];

function App() {
  const [activeFolder, setActiveFolder] = useState(null);

  return (
    <div className="min-h-screen bg-blue-100 p-8 font-sans">
      <h1 className="text-3xl font-bold mb-6">🖥️ MeeraOS v0.1</h1>

      {/* Folder Icons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {folders.map((folder) => (
          <div
            key={folder.name}
            className="flex flex-col items-center cursor-pointer hover:scale-105 transition"
            onClick={() => setActiveFolder(folder)}
          >
            <div className="text-5xl">{folder.icon}</div>
            <div className="mt-2 bg-white shadow px-3 py-1 rounded text-sm font-medium">
              {folder.name}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeFolder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/2 shadow-xl relative">
            <button
              onClick={() => setActiveFolder(null)}
              className="absolute top-2 right-3 text-xl font-bold text-gray-500 hover:text-red-600"
            >
              ×
            </button>
            <h2 className="text-xl font-semibold mb-4">{activeFolder.name}</h2>
            <p>{activeFolder.content}</p>
          </div>
        </div>
      )}
    </div>
  );
}
<h1 className="text-red-500 text-3xl">Tailwind is working!</h1>


export default App;