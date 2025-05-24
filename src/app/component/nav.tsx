// components/MovieSlider.tsx
'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

export default function MovieSlider() {
    const movies = [
        { title: 'One Piece', image: '/one-piece.jpg' },
        { title: 'Captain America', image: '/captain.jpg' },
        { title: '404: Chạy Ngay Đi', image: '/404.jpg' },
        { title: 'Hẻm Núi', image: '/hem.jpg' },
        { title: 'Nữ Tu Bóng Tối', image: '/nutu.jpg' },
        { title: 'Nữ Tu Bóng Tối', image: '/nutu.jpg' },
        { title: 'Nữ Tu Bóng Tối', image: '/nutu.jpg' },
        { title: 'Nữ Tu Bóng Tối', image: '/nutu.jpg' },
        { title: 'Nữ Tu Bóng Tối', image: '/nutu.jpg' },
        { title: 'Nữ Tu Bóng Tối', image: '/nutu.jpg' }
    ];

    return (
        <div className="bg-black p-6">
            <h2 className="text-2xl font-bold text-orange-400 mb-4">PHIM ĐỀ CỬ</h2>
            <Swiper
                spaceBetween={20}
                slidesPerView={2}
                navigation
                modules={[Navigation]}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 5 },
                }}
            >
                {movies.map((movie, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative rounded overflow-hidden shadow group">
                            <img
                                src={"poto.jpg"}
                                alt={movie.title}
                                className="w-full h-[180px] object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition">
                                <button className="bg-yellow-400 w-10 h-10 rounded-full flex items-center justify-center text-black text-xl font-bold">
                                    ▶
                                </button>
                            </div>
                            <div className="bg-black/80 text-white px-2 py-1 text-sm truncate">
                                {movie.title}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
