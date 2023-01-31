const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id, width, height) =>
  `https://source.unsplash.com/${id}/${width}x${height}`;

const firstCardCategoryPhotos = [
  { id: "oDKyhEjOBfc", width: 170, height: 132 },
  { id: "MvR30qxn-MM", width: 170, height: 189 },
  { id: "84R6ipsqaxo", width: 170, height: 158 },
  { id: "TjegK_z-0j8", width: 170, height: 159 },
];
const secondCardCategoryPhotos = [
  { id: "lUt34HTy_Rs", width: 170, height: 132 },
  { id: "ITrK8OmHCdo", width: 170, height: 158 },
  { id: "hQIJon1QhZ8", width: 170, height: 188 },
  { id: "je229dO2TFE", width: 170, height: 158 },
];
const thirdCardCategoryPhotos = [
  { id: "wS1U_Z2jsLo", width: 170, height: 132 },
  { id: "7l8z2pIbHYk", width: 170, height: 158 },
  { id: "-4cYyqoIxr4", width: 170, height: 188 },
  { id: "FKyHyNowp-4", width: 170, height: 158 },
];
const fourthCardCategoryPhotos = [
  { id: "fAaL7XBkqgQ", width: 170, height: 132 },
  { id: "unt3066GV-E", width: 170, height: 158 },
  { id: "idednB9qCrA", width: 170, height: 188 },
  { id: "krgb_3HIkME", width: 170, height: 158 },
];
const fifthCardCategoryPhotos = [
  { id: "1rBg5YSi00c", width: 170, height: 132 },
  { id: "HWIZ10Iyb84", width: 170, height: 158 },
  { id: "Cv0k6jv3-Vo", width: 170, height: 188 },
  { id: "K5Uz7Ob3r3E", width: 170, height: 158 },
];
const sixthCardCategoryPhotos = [
  { id: "KZa4fREZoKk", width: 170, height: 132 },
  { id: "GVV669GVYjo", width: 170, height: 158 },
  { id: "NgLtdWk-6FI", width: 170, height: 188 },
  { id: "bKESVqfxass", width: 170, height: 158 },
];
const mapCategoryPhotos = (categoryPhotos) =>
  categoryPhotos.map((photo) => ({
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

export const FirstCardCategoryPhotos = mapCategoryPhotos(
  firstCardCategoryPhotos
);
export const SecondCardCategoryPhotos = mapCategoryPhotos(
  secondCardCategoryPhotos
);
export const ThirdCardCategoryPhotos = mapCategoryPhotos(
  thirdCardCategoryPhotos
);
export const FourthCardCategoryPhotos = mapCategoryPhotos(
  fourthCardCategoryPhotos
);
export const FifthCardCategoryPhotos = mapCategoryPhotos(
  fifthCardCategoryPhotos
);
export const SixthCardCategoryPhotos = mapCategoryPhotos(
  sixthCardCategoryPhotos
);
