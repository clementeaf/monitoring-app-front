/* eslint-disable react/prop-types */
import SideMenu from './SideMenu';

export default function Header({cookie}) {
  return (
    <div className="flex w-full items-center justify-between py-2 px-4 bg-white border border-black/10 rounded-md shadow-md">
        <SideMenu />
        <p className="font-normal capitalize">{cookie}</p>
    </div>
  )
}
