import Navbar from "../../components/common/Navbar";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="font-work-sans">
            <div>
                <Navbar />

                {children}
            </div>
        </main>
    )
}