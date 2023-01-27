const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id, width, height) =>
  `https://source.unsplash.com/${id}/${width}x${height}`;

const unsplashPhotos = [
  { id: "W_mfoOi1Elc", width: 270, height: 270 },
  { id: "FKkK1hnTe-Q", width: 270, height: 178 },
  { id: "chcyjyRQV74", width: 272, height: 213 },
  { id: "4BXWIQoS8Fo", width: 329, height: 178 },
  { id: "wzkv5p5CIRk", width: 329, height: 241 },
  { id: "Ct2Q6q29xds", width: 300, height: 241 },
  { id: "1L4E_lsIb9Q", width: 270, height: 241 },
  { id: "uMWHwGdgbsA", width: 530, height: 178 },
  { id: "ZqMRzgUI62U", width: 270, height: 241 },
  { id: "YQrUzrsRNes", width: 240, height: 241 },
  { id: "AWZNOWZyjNo", width: 270, height: 241 },
  { id: "twukN12EN7c", width: 1080, height: 694 },
];

const photos = unsplashPhotos.map((photo) => ({
  src: unsplashLink(photo.id, photo.width, photo.height),
  width: photo.width,
  height: photo.height,
  images: breakpoints.map((breakpoint) => {
    const height = Math.round((photo.height / photo.width) * breakpoint);
    return {
      src: unsplashLink(photo.id, breakpoint, height),
      width: breakpoint,
      height,
    };
  }),
}));

export default photos;
