import SideMenu from './SideMenu';

export default function Header() {
  return (
    <div className="flex w-full items-center justify-between p-2 bg-white border border-black/10 rounded-md shadow-md">
        <SideMenu />
        <p className="font-light">Usuario</p>
    </div>
  )
}
