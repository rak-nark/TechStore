import React, { useState } from "react";
import { MdPlayCircle } from "react-icons/md";
import {
  GalleryContainer,
  MainImageContainer,
  MainImage,
  ThumbnailGrid,
  Thumbnail,
  ThumbnailImage,
  VideoThumbnail,
  PlayIcon,
} from "./Styled.ProductGallery";

const ProductGallery = ({ images = [], videoUrl = null }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const defaultImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAzAN0JNxOz3xiYyCB6R5lJBh-RV1dabMrbWWu3asqj2NUFg0dFej2uq7Uy7fuRs11yg-cYDN5Sw_g17zttOi_kj_FdBRkddW2CrGGjMsGAolN3ji0YCuvWMpIqS1VYrpLPPZbs6-phIaV1F3S66h9MvYy7mzJusG99NRJwNU2mB9FcPmZPWjkjPXL_Kmpyrs-RYXSlr7P5que9WV9YB_BVdV8tTvC7SwwDTwwTDaB1ZgCyGyaTIS3Q9wrHS6zNMo1l9s_zUrgJBzj9",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAmjOQfKu-snLFo_MGL32CVPi_7Vg9MD8Xz8jcMKHOiFqZMHoQV1_811aHtsQqhJ2zlwL_uwerk0OpRaFzw2xJFd_Ko9jWHSTy0FojpUXfrOFPPf4ha3wezcUCm1sL0lj2yHHrIZo7HKws0AVM5MuWuFULYlBh1X40XuaDutcvDzUwyenCn9_K4HYIPFQ6RQ7cbjfY_X9DM2Jix22lxZgED6wd3_G6Vc4371sjHLYSmTuoYWq4CJT004djEFKtylU8_9Wm-kKoVs43M",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAwvYBBC6i0gtzq7LucCBmyiUz-H-y63_BQ6QAc0p4TKmCu2U85USXMp2tpxJvq4HZ2yeXh9rTjATlvC0zA3a7m0FCFQGS7BUIGR3zUm18nqD-zjND3Ykshwhqh_SxVlEyRCSFfepFeQCdqdJyZEQOqHA5GKUvzuECNZsZJWd9TlHoD_cBiYA_ezndzI2Y4CdmUAwnrKtZ3vUEWwH6DCj-RStlg4IdSqnJmCluINFNIcw14aXgqe8pM9_Ek2i58Q_CnTRmguT_l6SFk",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDJxN-33yhHQC8APoeyzaD47Xiy8SNZ19FRHzdCJz2UoAN26kzYdYEJd1aYsTgU9HaS8H8lnNvAwZO-eldzCGjqJCQ09j9NhrMTpTh0cnYMgyocIS2C7PszG9_bfE2rdgQTTIhjnwlIyc58umg28XH8p_Sfkdg_1AJWdcVh66XHwuQvzIB7yWVXfTmIkAEYci7ZXhUqw4MJ6ipzNt1VTEX9qDrkY2KewB8iR3bL4WRw1DbTWRlYUntPslN3GodzhtO2bpP1n3BH4YtB",
  ];

  const galleryImages = images.length > 0 ? images : defaultImages;

  return (
    <GalleryContainer>
      <MainImageContainer>
        <MainImage src={galleryImages[activeIndex]} alt="Product main view" />
      </MainImageContainer>

      <ThumbnailGrid>
        {galleryImages.map((img, index) => (
          <Thumbnail
            key={index}
            $active={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          >
            <ThumbnailImage src={img} alt={`Product view ${index + 1}`} />
          </Thumbnail>
        ))}

        {videoUrl && (
          <VideoThumbnail onClick={() => window.open(videoUrl, "_blank")}>
            <PlayIcon>
              <MdPlayCircle />
            </PlayIcon>
          </VideoThumbnail>
        )}
      </ThumbnailGrid>
    </GalleryContainer>
  );
};

export default ProductGallery;
