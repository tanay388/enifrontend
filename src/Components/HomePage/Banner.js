/* This example requires Tailwind CSS v2.0+ */
import AdbIcon from '@mui/icons-material/Adb';
import AppleIcon from '@mui/icons-material/Apple';


export default function Banner() {
    return (
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight">
            <span className="block">Ready to dive in?</span>
            <span className="block" style={{color: "rgb(255, 104, 97)"}}>Start your free trial today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
              target="_blank"
                href="https://drive.google.com/file/d/1cV6EIkDFdiYrnSJtfYCXp6OhAapqRG88/view?usp=sharing"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md link-button-redaccent"
              > <AdbIcon />
                Android
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-red bg-white sharp hover:bg-indigo-50"
              > <AppleIcon />
                IOS
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
  