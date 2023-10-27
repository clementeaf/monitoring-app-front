import SideMenu from './SideMenu';

export default function Header() {
  return (
    <div className="flex w-full items-center justify-between py-2 px-4 bg-white border border-black/10 rounded-md shadow-md">
        <SideMenu />
        <p className="font-light">Usuario</p>
    </div>
  )
}
