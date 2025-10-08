import Sidebar from "../pages/sidebar";

export default function Layout({ children }) {
    return (
        <div className="tix-flex tix-h-screen ">
            <Sidebar />
            <main className="tix-flex-1 tix-p-8 tix-overflow-y-auto">
                ey yo men
            </main>
        </div>
    );
}
