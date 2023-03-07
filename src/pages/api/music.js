// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const musics = [
  {
    id: 4,
    title: "RnbStylerz What",
    src: "Rnbstylerz_AREES-What(Edit).mp3",
    img: "http://placeimg.com/640/640/tech/any",
  },
  {
    id: 5,
    title: "Slinz other side",
    src: "Slinz-Other_Side.mp3",
    img: "http://placeimg.com/800/760/nature/grayscale/any",
  },
  {
    id: 6,
    title: "Jamaica",
    src: "jamaica-main-version-radio-edit-anthony-louis-reworked-128-ytshorts.savetube.me.mp3",
    img: "http://placeimg.com/640/640/nature/grayscale/any",
  },
  {
    id: 1,
    title: "Stranger Things",
    src: "eleven_Stranger_Things.mp3",
    img: "http://placeimg.com/640/640/any",
  },
  {
    id: 2,
    title: "Welcome to my house",
    src: "Ason_ID-Welcome_to_my_house.mp3",
    img: "http://placeimg.com/640/640/people/any",
  },
  {
    id: 3,
    title: "Meizong Dawn of light",
    src: "Meizong-Dawn_of_Light.mp3",
    img: "http://placeimg.com/800/800/any",
  },

  //   {
  //     id: 7,
  //     title: "Slinz other side",
  //     src: "Slinz-Other_Side.mp3",
  //     img: "http://placeimg.com/640/640/nature/grayscale/any",
  //   },
];

export default function handler(req, res) {
  res.status(200).json(musics);
}
