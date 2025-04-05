import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";

import { X, ThumbsUp, Star, Share2, Download } from "lucide-react"; // Only if using lucide-react

const PDFViewerModal = ({ isOpen, onClose }) => {
  const zoomPluginInstance = zoomPlugin();
  const pageNavigation = pageNavigationPlugin();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center px-2 md:px-10">
      <div className="bg-white rounded-xl w-full max-w-5xl h-[90vh] flex flex-col shadow-xl">
        {/* Header */}
        <div className="p-4 flex justify-between items-center border-b bg-white">
          {/* Left: File name */}
          <span className="font-medium text-gray-700 text-sm sm:text-base truncate">
            File-name-document.pdf
          </span>

          {/* Right: Icon buttons */}
          <div className="flex gap-4 items-center">
            <button title="Like">
              <ThumbsUp className="w-5 h-5 text-gray-600 hover:text-blue-500" />
            </button>
            <button title="Favorite">
              <Star className="w-5 h-5 text-gray-600 hover:text-yellow-400" />
            </button>
            <button title="Share">
              <Share2 className="w-5 h-5 text-gray-600 hover:text-green-500" />
            </button>
            <button title="Download">
              <Download className="w-5 h-5 text-gray-600 hover:text-indigo-500" />
            </button>
            <button onClick={onClose} title="Close">
              <X className="w-5 h-5 text-gray-500 hover:text-red-500" />
            </button>
          </div>
        </div>

        {/* PDF Content */}
        <div className="flex-1 overflow-hidden">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <Viewer
              fileUrl="/sample_1.pdf"
              plugins={[zoomPluginInstance, pageNavigation]}
            />
          </Worker>
        </div>

        {/* Footer with controls */}
        <div className="p-2 border-t text-sm bg-white flex justify-center">
          <div className="flex flex-col items-center space-y-1 sm:space-y-0 sm:flex-row sm:space-x-6">
            <div className="flex gap-2 items-center">
              <pageNavigation.GoToPreviousPage />
              <pageNavigation.CurrentPageLabel />
              <span>/</span>
              <pageNavigation.NumberOfPages />
              <pageNavigation.GoToNextPage />
            </div>
            <div className="flex gap-2 items-center">
              <zoomPluginInstance.ZoomOutButton />
              <zoomPluginInstance.CurrentScale />
              <zoomPluginInstance.ZoomInButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFViewerModal;
