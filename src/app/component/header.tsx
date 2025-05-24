'user client';

import {Search} from "lucide-react";
export default function Header() {
    return (
        <>
            <nav className="sticky top-0 z-50 bg-black-300 shadow bg-gray-800">
                <div className="w-full max-w-screen-xl mx-auto px-6 flex justify-between items-center py-4">
                    <div className="px-8">
                        <span className="font-bold text-white text-xl">MySite</span>
                    </div>
                    <div className="flex justify-start items-center border border-gray-400 rounded bg-white ">
                        <button>
                            <Search className="w-8 h-5 mr-2 text-gray-600 hover:text-gray-900" />
                        </button>
                        <input
                            type="text"
                            placeholder="Tìm kiếm..."
                            className="outline-none flex-1 bg-transparent bg-black-300 text-2xl"
                        />
                    </div>
                    <div className=" flex justify-end gap-4 px-8">
                        <a href="#" className="hover:underline font-bold text-white">Phim Lẻ</a>
                        <a href="#" className="hover:underline font-bold text-white">Thể Loại</a>
                        <a href="#" className="hover:underline font-bold text-white">Quốc Gia</a>
                        <a href="#" className="hover:underline font-bold text-white">Năm</a>
                        <button className="hover:underline font-bold  border rounded bg-gray-800 text-white">Đăng Nhập</button>
                    </div>
                </div>
            </nav>
   </>
    );
}