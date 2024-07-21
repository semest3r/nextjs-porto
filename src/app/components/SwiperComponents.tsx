'use client';

import { useRef, useEffect, useState } from 'react';
import { register } from 'swiper/element/bundle';

register();

export default function SwiperComponents({ data }: { data: Array<any> }) {
    const [isLoading, setIsLoading] = useState(true);
    const swiperElRef: any = useRef(null);
    useEffect(() => {
        setIsLoading(false);
    }, []);
    if (isLoading) return null;
    return (
        <swiper-container ref={swiperElRef} class=" w-[274px] sm:w-full rounded row-start-1 sm:row-start-auto"
            slides-per-view="1"
            navigation="true"
            style={{
                "--swiper-navigation-color": "#414141/20",
                "--swiper-navigation-size": "25px",
            }}
        >

        </swiper-container>
    );
};