import LogoIcon from "./icons/logo.svg?component";
import ChevronLeftIcon from "./icons/chevron-left.svg?component";
import ChevronDownIcon from "./icons/chevron-down.svg?component";
import EyeIcon from "./icons/eye.svg?component";
import DeviceDesktopIcon from "./icons/device-desktop.svg?component";
import DeviceTabletIcon from "./icons/device-tablet.svg?component";
import DeviceMobileIcon from "./icons/device-mobile.svg?component";
import DeviceMobilerotatedIcon from "./icons/device-mobile-rotated.svg?component";
import PackageIcon from "./icons/package.svg?component";
import UsersIcon from "./icons/users.svg?component";
import SquarePlusIcon from "./icons/square-plus.svg?component";
import LayoutIcon from "./icons/layout.svg?component";
import Palette from "./icons/palette.svg?component";
import FileIcon from "./icons/file.svg?component";
import ImageIcon from "./icons/image.svg?component";
import AlertCircleIcon from "./icons/alert-circle.svg?component";
import SettingsIcon from "./icons/settings.svg?component";

function App() {
  return (
    <div className="flex bg-gray-100 font-sans text-gray-900">
      <aside className="flex min-h-screen w-18 flex-col items-center border-r border-gray-200 bg-white">
        <div className="flex h-18 w-full items-center justify-center border-b border-gray-200">
          <LogoIcon />
        </div>
        <nav className="flex flex-1 flex-col gap-y-4 pt-10">
          <a
            href="#"
            className="rounded-xl bg-gray-100 p-2 text-blue-500 hover:bg-gray-50"
          >
            <SquarePlusIcon className="h-6 w-6 stroke-current" />
          </a>
          <a
            href="#"
            className="rounded-xl p-2 text-gray-400 hover:bg-gray-100"
          >
            <LayoutIcon className="h-6 w-6 stroke-current" />
          </a>
          <a
            href="#"
            className="rounded-xl p-2 text-gray-400 hover:bg-gray-100"
          >
            <Palette className="h-6 w-6 stroke-current" />
          </a>
          <a
            href="#"
            className="rounded-xl p-2 text-gray-400 hover:bg-gray-100"
          >
            <FileIcon className="h-6 w-6 stroke-current" />
          </a>
          <a
            href="#"
            className="rounded-xl p-2 text-gray-400 hover:bg-gray-100"
          >
            <ImageIcon className="h-6 w-6 fill-current" />
          </a>
        </nav>
        <div className="flex flex-col items-center gap-y-4 py-10">
          <button className="rounded-xl p-2 text-gray-400 hover:bg-gray-100">
            <AlertCircleIcon className="h-6 w-6 stroke-current" />
          </button>
          <button className="rounded-xl p-2 text-gray-400 hover:bg-gray-100">
            <SettingsIcon className="h-6 w-6 stroke-current" />
          </button>
          <button className="mt-2 rounded-full bg-gray-100">
            <img
              className="h-10 w-10 object-cover"
              src="/img/avatar.png"
              alt=""
            />
          </button>
        </div>
      </aside>
      <div className="flex min-h-screen flex-1 flex-col">
        <header className="flex h-18 items-center justify-center gap-x-4 border-b border-gray-200 bg-white px-8">
          <button className="flex items-center justify-center rounded-xl bg-gray-100 p-2">
            <ChevronLeftIcon className="h-6 w-6 stroke-current text-gray-400" />
          </button>
          <button className="flex flex-col items-start rounded-xl bg-gray-100 px-6 py-2">
            <div className="flex items-center gap-x-2">
              <span className="text-sm">Page: Homepage - Dipa</span>
              <button>
                <ChevronDownIcon className="h-5 w-5 stroke-current text-gray-400" />
              </button>
            </div>
            <div className="text-xs text-gray-400">
              https://dipainhouse.com/
            </div>
          </button>
          <button className="flex items-center justify-center gap-x-2 rounded-xl bg-gray-100 px-4 py-2">
            <EyeIcon className="h-6 w-6 stroke-current text-gray-400" />
            <span className="text-sm font-semibold leading-6">Preview</span>
          </button>

          {/* Separator */}
          <div className="h-full w-px bg-gray-200" />

          <div className="flex items-center gap-x-2">
            <button className="rounded-xl bg-gray-100 p-2 text-blue-500">
              <DeviceDesktopIcon className="h-6 w-6 stroke-current" />
            </button>
            <button className="rounded-xl p-2 text-gray-400 hover:bg-gray-100">
              <DeviceTabletIcon className="h-6 w-6 stroke-current" />
            </button>
            <button className="rounded-xl p-2 text-gray-400 hover:bg-gray-100">
              <DeviceMobileIcon className="h-6 w-6 stroke-current" />
            </button>
            <button className="rounded-xl p-2 text-gray-400 hover:bg-gray-100">
              <DeviceMobilerotatedIcon className="h-6 w-6 stroke-current" />
            </button>
          </div>

          {/* Separator */}
          <div className="h-full w-px bg-gray-200" />

          <button className="flex items-center justify-center gap-x-2 rounded-xl bg-gray-100 px-4 py-2">
            <span className="text-sm font-semibold leading-6">
              960 PX / 100%
            </span>
            <ChevronDownIcon className="h-6 w-6 stroke-current text-gray-400" />
          </button>

          <button className="flex items-center justify-center rounded-xl bg-gray-100 p-2">
            <PackageIcon className="h-6 w-6 stroke-current text-gray-400" />
          </button>
        </header>
      </div>
      <aside className="flex min-h-screen w-[300px] flex-col border-l border-gray-200 bg-white">
        <div className="flex h-18 items-center gap-x-4 border-b border-gray-200 px-6">
          <button className="flex items-center justify-center gap-x-2 rounded-xl bg-gray-100 px-4 py-2">
            <UsersIcon className="h-5 w-5 stroke-current text-gray-400" />
            <span className="text-sm font-semibold leading-6">Invite</span>
          </button>
          <button className="flex flex-1 items-center justify-center gap-x-2 rounded-xl bg-blue-400 px-4 py-2 text-sm leading-6 text-white">
            Publish
          </button>
        </div>
      </aside>
    </div>
  );
}

export default App;
