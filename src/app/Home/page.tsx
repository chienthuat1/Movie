export default function Page() {
    return (
        <>
            <nav className="sticky top-0 z-50 bg-yellow-400 shadow p-4">
                <span className="text-lg font-bold">Sticky Nav</span>
            </nav>
            <div className="h-[2000px] bg-gray-100 p-4">
                <p>Kéo xuống xem navbar có dính không 👇</p>
            </div>
        </>
    );
}