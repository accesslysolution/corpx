"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

interface GalleryItem {
  name: string;
  url: string;
}

const galleryItems: GalleryItem[] = [
  { name: "Deep Cleaning", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331723/1_nia5il.mp4" },
  { name: "Facade Cleaning", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331718/2_cduqtm.mp4" },
  { name: "Corporate Office Cleaning", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331702/3_xqd2ct.mp4" },
  { name: "Corporate Office Cleaning", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331705/4_ngs3cg.mp4" },
  { name: "Roof Cleaning", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331708/5_qbi9op.mp4" },
  { name: "Facade Cleaning", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331710/6_msjifu.mp4" },
  { name: "Industrial Cleaning", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331716/7_ehuden.mp4" },
  { name: "Corporate Office Cleaning", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331715/8_dksxfo.mp4" },
  { name: "Deep Cleaning", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331721/9_bh97t1.mp4" },
  { name: "Corporate Office Cleaning", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331719/10_waqnqg.mp4" },
  { name: "Industrial Cleaning", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331726/11_oelhc3.mp4" },
  { name: "Corporate Office Cleaning", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331729/12_gt9jhd.mp4" },
  { name: "Facade Cleaning", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331726/13_udg2jq.mp4" },
  { name: "Rooftop Cleaning", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331731/14_snsw0v.mp4" },
  { name: "Facade Cleaning", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331730/15_e7dusj.mp4" },
  { name: "Washroom Cleaning", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331700/16_my4ut1.mp4" },
  { name: "Washroom Cleaning", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331702/17_ftscat.mp4" },
  { name: "Office Cleaning", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331711/18_d6mm9y.mp4" },
  { name: "Sofa Cleaning", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331731/20_cc1ukc.mp4" }
];

const VideoCard = ({ item }: { item: GalleryItem }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="relative break-inside-avoid rounded-3xl overflow-hidden shadow-lg bg-white group cursor-pointer"
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => {
        videoRef.current?.pause();
        if (videoRef.current) videoRef.current.currentTime = 0;
      }}
    >
      <video
        ref={videoRef}
        src={item.url}
        className="w-full h-auto block"
        muted
        loop
        playsInline
        preload="metadata"
      />
      
      {/* Modern Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 p-3 rounded-2xl">
          <h3 className="text-white font-semibold text-sm tracking-wide">
            {item.name}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

export default function GalleryView() {
  return (
    <section className="w-full py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Our Work</h2>
          <p className="text-gray-500 mt-3 text-lg">Professional transformations, captured in motion.</p>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryItems.map((item, index) => (
            <VideoCard key={`${item.name}-${index}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}