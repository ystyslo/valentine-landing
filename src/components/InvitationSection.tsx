import { motion } from "framer-motion";
import { LinkPreview } from "./ui/link-preview";

import PlaceImg from "../assets/place.jpg";
import MovieImg from "../assets/movie.jpg";
import GuyImg from "../assets/portrait.jpeg";

export function InvitationSection() {
  return (
    <div className="w-screen h-screen flex items-center justify-center px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <motion.p
          className="text-6xl font-bold text-black/40 leading-relaxed px-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          My beautiful little girl! <br />
          Here is your invitation to{" "}
          <LinkPreview
            url="https://expz.menu/b7c8447c-fc31-429f-8c38-e57b35721d8f"
            imageSrc={PlaceImg}
            isStatic
            className="font-bold text-red-500"
          >
            this location
          </LinkPreview>{" "}
          at 20:30 with{" "}
          <LinkPreview
            url="https://www.instagram.com/yuristyslo?igsh=MWxxanprMzQ5Ymlnbw%3D%3D&utm_source=qr"
            imageSrc={GuyImg}
            isStatic
            className="font-bold text-red-500"
          >
            this guy
          </LinkPreview>{" "}
          and after that we'll watch
          <br />
          <LinkPreview
            url="https://www.imdb.com/title/tt0112471/"
            imageSrc={MovieImg}
            isStatic
            className="font-bold text-red-500"
          >
            this movie
          </LinkPreview>
        </motion.p>
      </motion.div>
    </div>
  );
}
