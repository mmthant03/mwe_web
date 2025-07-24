import "@/styles/globals.css";
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

export const metadata = {
  title: 'Dashboard',
  description: 'Market & Way Efficiency',
};

export default function RootLayout({ children }) {
  return(
    <html lang='en'>
      <body className="bg-gray-50 text-gray-900">
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <Header />
            <main className='p-4 md:p-6'>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
