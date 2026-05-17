"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { Quote } from "lucide-react";

const testimonialsData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Tahmid Majid",
    role: "Chief Product Officer, Co-founder @ Flagship Digital Ltd",
    review:
      "Asif architected our entire AWS infrastructure from the ground up — EKS clusters, DocumentDB, and CI/CD pipelines. His deep understanding of cloud-native patterns and GitOps workflows transformed our deployment velocity. A true cloud architect who delivers results.",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Md. Minhaz Uddin",
    role: "Cloud Solution Architect @ Huawei Technologies",
    review:
      "Working alongside Asif at Huawei was exceptional. His ability to design complex multi-cloud architectures for enterprise tenders and his technical depth in Terraform and Kubernetes made him invaluable to our pre-sales team.",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Flagship Digital Ltd",
    role: "Engineering Team Lead",
    review:
      "Asif mentored our team of 6 engineers on cloud-native patterns and DevOps best practices. He reduced our cloud spend by 30% while improving uptime to 99.99%. His observability setup with Grafana, Prometheus, and Loki cut our incident detection time by 50%.",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "SPG Trust",
    role: "Infrastructure Partner",
    review:
      "Asif's consulting work on our Redis caching infrastructure was transformative. He resolved critical cache stampede issues, reduced backend API failure rates by 45%, and established robust IaC practices that enabled zero-downtime deployments.",
  },
];

const Reviews = () => {
  return (
    <section className="py-20 xl:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/2 -right-40 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <motion.h2
          className="section-title mb-16 text-center mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Testimonials
        </motion.h2>

        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="pb-14"
        >
          {testimonialsData.map((person, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="glass rounded-2xl p-8 h-full border border-border/50 hover:border-primary/20 transition-all duration-300 group">
                  <Quote size={32} className="text-primary/30 mb-4" />
                  <p className="text-muted-foreground leading-relaxed mb-8 text-[15px]">
                    &ldquo;{person.review}&rdquo;
                  </p>
                  <div className="flex items-center gap-x-4 pt-4 border-t border-border/50">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                      {person.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{person.name}</div>
                      <div className="text-xs text-muted-foreground">{person.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
