// src/pages/AdminPanel.jsx
export default function AdminPanel() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Panel de Administración</h2>
      <form>
        <input type="file" className="mb-4" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Subir Imagen
        </button>
      </form>
    </div>
  );
}
