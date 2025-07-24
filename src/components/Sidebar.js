import Link from 'next/link';
import { House, ReceiptText, Settings } from 'lucide-react';

const menu = [
    { name: 'Dashboard', href: '/', icon: <House className="w-5 h-5 mr-3" /> },
    { name: 'Invoices', href: '/invoices', icon: <ReceiptText className="w-5 h-5 mr-3" /> },
    { name: 'Settings', href: '/settings', icon: <Settings className="w-5 h-5 mr-3"/> }

]

export default function Sidebar() {
    return(
        <aside className="w-64 bg-white shadow-md md:block">
            <div className="p-4 text-xl font-semibold">My Dashboard</div>
            <nav className="space-y-1 px-2">
                {menu.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded hover:bg-gray-100"
                    >
                        {item.icon}
                        {item.name}
                    </Link>
                ))}
            </nav>
        </aside>
    );
}