import { FaMap, FaCamera, FaCompass } from 'react-icons/fa';

function NavigationButton() {
  return (
    <div className="absolute inset-x-0 bottom-6 inline-flex justify-center -space-x-px rounded-md">
      <button
        type="button"
        className="group relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-gray-400 ring-1 ring-inset ring-yellow-400 hover:bg-gray-50 focus:z-10"
      >
        <span
          className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto"
        >
          AR
        </span>
        <FaCamera className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        className="group relative inline-flex items-center bg-white px-3 py-2 text-gray-400 ring-1 ring-inset ring-yellow-400 hover:bg-gray-50 focus:z-10"
      >
        <span
          className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto"
        >
          Map
        </span>
        <FaMap className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        className="group relative inline-flex items-center rounded-r-md bg-white px-3 py-2 text-gray-400 ring-1 ring-inset ring-yellow-400 hover:bg-gray-50 focus:z-10"
      >
        <span
          className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto"
        >
          Compass
        </span>
        <FaCompass className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
}

export default NavigationButton;
