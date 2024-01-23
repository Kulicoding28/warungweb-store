"use client";

import { motion } from "framer-motion";
import { Activity, Boxes, ChevronUp, ClipboardList, Timer } from "lucide-react";
import React from "react";
import Container from "./ui/container";

interface FeatureItemProps {
  icon: React.ReactNode;
  title?: string;
  description?: string;
}

const FeatureItem = ({ icon, title, description }: FeatureItemProps) => {
  return (
    <div className="flex flex-col p-4">
      <div className="inline-flex items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-Violet-200 text-violet-500">
          {icon}
        </div>
        <span className="ml-6 text-md md:text-lg font-bold">{title}</span>
      </div>
      <p className="mt-7 ">{description}</p>
    </div>
  );
};

const SectionFeature = () => {
  return (
    <Container>
      <motion.div className="mt-20 flex w-full flex-col">
        <h1 className="text-2xl font-bold text-violet-400 ml-6 md:ml-0  ">
          Fitur
        </h1>
        <h2 className="mt-3 text-xl font-bold leading-snug md:text-2xl lg:text-4xl xl:text-5xl ml-6 md:ml-0 ">
          Keunggulan Warung Web
        </h2>
        <div className="mt-20 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <FeatureItem
            title={"Hemat Waktu"}
            description={
              "Anda Hanya Perlu Pilih tamplate website dan domain yang anda inginkan untuk bisnis anda"
            }
            icon={<Timer className="text-2xl " />}
          />
          <FeatureItem
            title={"Variasi Design Website Modern"}
            description={
              "Anda hanya perlu menyiapkan foto atau gambar prusahaan anda akan kami sesuaikan dengan design yang modern dan fresh."
            }
            icon={<Boxes className="text-xl md:text-2xl " />}
          />
          <FeatureItem
            title={"Harga Terjangkau"}
            description={
              "Sesuai dengan tujuan kami untuk membantu UMKM dan Prusahaan yang baru merintis jadi untuk harga di kami sangat sangat terjangkau"
            }
            icon={<ChevronUp className="text-xl md:text-2xl " />}
          />
          <FeatureItem
            title={"Maintance Gratis"}
            description={
              "Jika anda rasa ingin mengganti gambar atau foto pada website kami cukup whatsapp ke admin dan kami akan bantu sesuai permintaan anda."
            }
            icon={<ClipboardList className="text-xl md:text-2xl " />}
          />
          <FeatureItem
            title={"Full Support"}
            description={
              "Jangan khawatir jika anda mengalami kebingungan atau pun ada pertanyaan warung web akan full support."
            }
            icon={<Activity className="text-xl md:text-2xl " />}
          />

          <FeatureItem
            title={"Simple dan Praktis"}
            description={
              "Jangan khwatir dan ragu untuk revisi cukup chat saja ke admin "
            }
            icon={<Activity className="text-xl md:text-2xl " />}
          />
        </div>
      </motion.div>
    </Container>
  );
};

export default SectionFeature;
