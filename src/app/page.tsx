import { LampText } from "./components/lamp";

export default function Home() {
  return (
    <>
      <nav className="absolute top-0 left-0 w-full p-5 flex justify-center items-center z-50">
        <div className="text-white font-bold text-lg">Adib Grouz</div>
        <ul className="flex space-x-4 ml-10">
          <li className="text-white hover:text-emerald-500 cursor-pointer relative">
            Home
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 scale-x-0 hover:scale-x-100 transition-transform duration-300"></span>
          </li>
          <li className="text-white hover:text-emerald-500 cursor-pointer relative">
            About
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 scale-x-0 hover:scale-x-100 transition-transform duration-300"></span>
          </li>
          <li className="text-white hover:text-emerald-500 cursor-pointer relative">
            Projects
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 scale-x-0 hover:scale-x-100 transition-transform duration-300"></span>
          </li>
          <li className="text-white hover:text-emerald-500 cursor-pointer relative">
            Gallery
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 scale-x-0 hover:scale-x-100 transition-transform duration-300"></span>
          </li>
          <li className="text-white hover:text-emerald-500 cursor-pointer relative">
            Contact
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 scale-x-0 hover:scale-x-100 transition-transform duration-300"></span>
          </li>
        </ul>
      </nav>
      <LampText />

      <footer className="absolute bottom-0 left-0 w-full p-5 flex justify-center items-center z-50">
        <ul className="flex space-x-4">
          <li>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-emerald-500 flex items-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.897-.959-2.178-1.559-3.594-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.087-.205-7.713-2.165-10.141-5.144-.422.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.6 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.395 0-.779-.023-1.158-.067 2.179 1.397 4.768 2.212 7.557 2.212 9.054 0 14.002-7.496 14.002-13.986 0-.21 0-.423-.015-.634.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-emerald-500"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.75 20h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.25 12.268h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.869 0-2.156 1.46-2.156 2.963v5.704h-3v-11h2.875v1.501h.041c.4-.756 1.375-1.555 2.833-1.555 3.028 0 3.584 1.993 3.584 4.586v6.468z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-emerald-500"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.47-2.38 1.235-3.22-.125-.303-.535-1.523.115-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.655 1.653.245 2.873.12 3.176.77.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.81 1.096.81 2.21 0 1.595-.015 2.875-.015 3.27 0 .32.21.694.825.577 4.765-1.587 8.2-6.084 8.2-11.387 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </li>
        </ul>
        <div className="text-white text-sm mt-4">
          &copy; {new Date().getFullYear()} Adib Grouz. All rights reserved.
        </div>
      </footer>
    </>
  );
}
