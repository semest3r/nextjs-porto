import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react"

export function SwiperComponent({ data }: { data: any }) {
    return (
        <Carousel className="w-full max-w-sm mx-auto">
            <CarouselContent>
                {data.map((val: Iterable<ReactNode>, index: number) => (
                    <CarouselItem key={index}>
                        {val}
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 text-[#414141]" />
            <CarouselNext className="right-0 text-[#414141]" />
        </Carousel>
    )
}