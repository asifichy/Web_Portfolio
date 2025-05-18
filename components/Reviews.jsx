"use client";

import Image from "next/image";

import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const reviewsData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "John Doe",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    rating: 5,
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Jane Doe",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    rating: 4,
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "John Doe",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    rating: 3.5,
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "John Doe",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    rating: 4,
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "John Doe",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
        {/* slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="h-[350px]"
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[30 0px]">
                  <CardHeader className="p-0 mb-10 flex items-center gap-x-4">
                    {/* image */}
                    <Image
                      src={person.avatar}
                      alt={person.name}
                      width={70}
                      height={70}
                      className="rounded-full"
                    />
                    {/* name */}
                    <div className="flex flex-col">
                      <CardTitle>{person.name}</CardTitle>
                      <p>{person.job}</p>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400">
                            {i < Math.floor(person.rating) ? "★" : "☆"}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg">
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
