import { useState } from 'react';
import PDFViewerModal from './components/PDFViewerModal';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <button
        onClick={() => setOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow"
      >
        Open PDF
      </button>

      <PDFViewerModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}

export default App;
