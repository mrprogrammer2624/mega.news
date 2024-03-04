import {
  avatar1,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  categories1,
  categories10,
  categories11,
  categories12,
  categories4,
  categories5,
  categories7,
  categories8,
  categories9,
  girl1,
  hashtag1,
  hashtag2,
  hashtag3,
  hashtag4,
  hashtag5,
  hashtag6,
  hashtag7,
  hashtag8,
  whiteCar,
} from "@/assets/img";
import { RatioImages } from "@/components/RatioImages";
import { Icons } from "@/utility/Icons";

export const HeaderLink = [
  {
    key: 1,
    title: "Categories",
    // children: (
    //   <CategoriesSubMenu className="group-hover:visible group-hover:opacity-100" />
    // ),
    link: "/categories",
  },
  {
    key: 2,
    title: "Pages",
    // children:,
    link: "*",
  },
  {
    key: 3,
    title: "contact us",
    link: "/contactus",
  },
  {
    key: 4,
    title: "about us",
    link: "/aboutus",
  },
  {
    key: 4,
    title: "Blog Upload",
    link: "/blog-upload",
  },
];

export const HasTagDemo = [
  {
    key: 1,
    Image:
      "https://images.unsplash.com/photo-1662353914951-e22538f1f34a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "imageDemo",
  },
  {
    key: 2,
    Image:
      "https://images.unsplash.com/photo-1642302714792-3853c67b7717?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
    alt: "demo images",
  },
  {
    key: 1,
    Image:
      "https://images.unsplash.com/photo-1662353914951-e22538f1f34a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "imageDemo",
  },
  {
    key: 2,
    Image:
      "https://images.unsplash.com/photo-1642302714792-3853c67b7717?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
    alt: "demo images",
  },
];

export const mainHasTag = [
  {
    key: 1,
    image: hashtag1,
    alt: "hashtag1",
    children: "food",
    alt: "food",
  },
  {
    key: 2,
    image: hashtag2,
    alt: "hashtag2",
    children: "animal",
    alt: "animal",
  },
  {
    key: 3,
    image: hashtag3,
    alt: "hashtag3",
    children: "car",
    alt: "car",
  },
  {
    key: 4,
    image: hashtag4,
    alt: "hashtag4",
    children: "sport",
    alt: "sport",
  },
  {
    key: 5,
    image: hashtag5,
    alt: "hashtag5",
    children: "music",
    alt: "music",
  },
  {
    key: 6,
    image: hashtag6,
    alt: "hashtag6",
    children: "technology",
    alt: "technology",
  },
  {
    key: 7,
    image: hashtag7,
    alt: "hashtag7",
    children: "abstract",
    alt: "abstract",
  },
  {
    key: 8,
    image: hashtag8,
    alt: "hashtag8",
    children: "Nature",
    alt: "Nature",
  },
  {
    key: 9,
    image: hashtag7,
    alt: "hashtag7",
    children: "Nature",
    alt: "Nature",
  },
  {
    key: 10,
    image: hashtag8,
    alt: "hashtag8",
    children: "Nature",
    alt: "Nature",
  },
];

/* => Footer Content */

export const footerInstagram = [
  {
    key: 1,
    images: categories1,
    alt: "InstagramPic1",
  },
  {
    key: 2,
    images: categories7,
    alt: "InstagramPic2",
  },
  {
    key: 3,
    images: categories8,
    alt: "InstagramPic3",
  },
  {
    key: 4,
    images: categories5,
    alt: "InstagramPic4",
  },
  {
    key: 5,
    images: categories9,
    alt: "InstagramPic5",
  },
  {
    key: 6,
    images: categories10,
    alt: "InstagramPic6",
  },
  {
    key: 7,
    images: categories11,
    alt: "InstagramPic4",
  },
  {
    key: 8,
    images: categories12,
    alt: "InstagramPic5",
  },
  {
    key: 9,
    images: categories4,
    alt: "InstagramPic6",
  },
];

export const FooterCategories = [
  {
    key: 1,
    children: "culture",
    link: "culture",
  },
  {
    key: 2,
    children: "fashion",
    link: "fashion",
  },
  {
    key: 3,
    children: "Featured",
    link: "featured",
  },
  {
    key: 4,
    children: "Food",
    link: "food",
  },
  {
    key: 5,
    children: "Healthy Living",
    link: "healthy-living",
  },
  {
    key: 6,
    children: "Technology",
    link: "technology",
  },
];

export const abc = [
  {
    key: 1,
    SwiperContent: <RatioImages src={whiteCar} />,
  },
  {
    key: 2,
    SwiperContent: "Hello",
  },
];

export const recentPost = [
  {
    key: 1,
    src: whiteCar,
    alt: "whiteCar",
    cardTitle: "How to Drive a Car Safely",
    cardContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    key: 2,
    src: girl1,
    alt: "girl1",
    cardTitle: "How to Drive a Car Safely How to Make Dance Music",
    cardContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    key: 3,
    src: hashtag5,
    alt: "hashtag5",
    cardTitle: "How to Drive a Car Safely",
    cardContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    key: 4,
    src: categories10,
    alt: "categories10",
    cardTitle: "How to Drive a Car Safely How to Make Dance Music",
    cardContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
];

export const MegaNewsInfo = [
  {
    key: 1,
    content: "email : Management@mega.news",
    icons: Icons.EmailIcon,
    link: "cul",
  },
  {
    key: 2,
    content: "Phone number : +1(234) 567-8910",
    icons: Icons.PhoneIcon,
    link: "#",
  },
  {
    key: 3,
    content: "email : Management@mega.news",
    icons: Icons.FaxIcon,
    link: "#",
  },
  {
    key: 4,
    content: "email : Management@mega.news",
    icons: Icons.LocationIcon,
    link: "#",
  },
];

export const TextEditorButton = [
  {
    key: 1,
    PictureIcon: Icons.PictureIcon,
    content: "image",
  },
  {
    key: 2,
    PictureIcon: Icons.ColorPickerIcon,
    content: "color",
  },
  {
    key: 3,
    PictureIcon: Icons.TextIcon,
    content: "text",
  },
  {
    key: 4,
    PictureIcon: Icons.AlignIcon,
    content: "align",
  },
  {
    key: 5,
    PictureIcon: Icons.LinkIcon,
    content: "link",
  },
];

export const footerCommit = [
  {
    key: 1,
    title: "ellsmartx",
    children:
      "how nice does this look 😍 I feel it should be delicious, thank you",
  },
  {
    key: 2,
    title: "cassia",
    children: "Take a rest, ill be cheer up you again in 2 next game go go go",
  },
  {
    key: 3,
    title: "amanda",
    children: "you were stunning today, jan! 💗 great match 👍🏽👍🏽",
  },
  {
    key: 4,
    title: "Denis Simonassi",
    children: "It was a great match today Janzi! You did great😉🇩🇪",
  },
];

export const MegaNewsTeam = [
  {
    key: 1,
    src: avatar4,
    alt: "avatar4",
    position: "designer",
    TeamName: "behzad pashaei",
  },
  {
    key: 2,
    src: avatar5,
    alt: "avatar5",
    position: "programmer",
    TeamName: "Cassie Evans",
  },
  {
    key: 3,
    src: avatar6,
    alt: "avatar6",
    position: "Marketing",
    TeamName: "Louis Hoebregts",
  },
  {
    key: 4,
    src: avatar7,
    alt: "avatar7",
    position: "administrative",
    TeamName: "Patricia",
  },
  {
    key: 5,
    src: avatar6,
    alt: "avatar6",
    position: "CEO",
    TeamName: "James Hoebregts",
  },
  {
    key: 6,
    src: avatar6,
    alt: "avatar6",
    position: "Financial",
    TeamName: "Jon Kantner",
  },
];
export const NewPostData = [
  {
    key: 1,
    title: "12 Mobile UX Design Trends For 2018",
    paragraph:
      "Things move quickly in the mobile app universe. To succeed in the field of mobile UX design, designers must have the foresight and prepare for new challenges around the corner",
    src: categories1,
    alt: "categories1",
    avatarSrc: avatar5,
    avatarAlt: "avatar5",
    subContentTitle: "Jon Kantner",
    subContentSubTitle: "July 14 , 2022",
  },
  {
    key: 2,
    title: "No boat bottomfish: Jetty fishing on the Washington Coast",
    paragraph:
      "Cast from the rocks to bring home fresh fish tacos in this iconic spring and summer fishery. — Are you looking to go fishing and bring home deliciou",
    src: categories5,
    alt: "categories5",
    avatarSrc: avatar6,
    avatarAlt: "avatar6",
    subContentTitle: "Louis Hoebregts",
    subContentSubTitle: "July 13 , 2022",
  },
  {
    key: 3,
    title: "What a Disabled Squirrel Taught Me About Life, Work, and Love",
    paragraph:
      "Why it helps to know what it’s like, and the exquisite beauty of empathy These days, the wood patio area just outside my kitchen door is a riot ",
    src: categories10,
    alt: "categories10",
    avatarSrc: avatar7,
    avatarAlt: "avatar7",
    subContentTitle: "James",
    subContentSubTitle: "July 12 , 2022",
  },
  {
    key: 4,
    title: "Becoming a Self-Driving Car & Machine Learning Engineer",
    paragraph:
      "How I left my full-time job, studied at Udacity, and landed a job at BMW The past year has been quite a journey for me. A year ago I left my full-time",
    src: categories11,
    alt: "categories11",
    avatarSrc: avatar4,
    avatarAlt: "avatar4",
    subContentTitle: "Cassie Evans",
    subContentSubTitle: "July 12 , 2022",
  },
  {
    key: 5,
    title: "How to Become a Master Designer",
    paragraph:
      "Many outsiders believe that designers are unicorns, gifted or special in some way. We have an innate ability to create gorgeous interfaces, a natural talent for matching complementary colors, an unexplainable intuition…",
    src: categories12,
    alt: "categories12",
    avatarSrc: avatar6,
    avatarAlt: "avatar6",
    subContentTitle: "Linda",
    subContentSubTitle: "July 10 , 2022",
  },
  {
    key: 6,
    title:
      "This free course can teach you music programming basics in less than an hour",
    paragraph:
      "A Berlin-based music software company, just released a free interactive music course that runs right in your browser. One thing that",
    src: categories7,
    alt: "categories7",
    avatarSrc: avatar1,
    avatarAlt: "avatar1",
    subContentTitle: "Patricia",
    subContentSubTitle: "July 09 , 2022",
  },
];

export const people = [
  {
    id: 1,
    name: "Wade Cooper",
    avatar: avatar1,
    alt: "avatar1",
  },
  {
    id: 2,
    name: "Arlene Mccoy",
    avatar: avatar1,
    alt: "avatar1",
  },
  {
    id: 3,
    name: "Devon Webb",
    avatar: avatar1,
    alt: "avatar1",
  },
  {
    id: 4,
    name: "Tom Cook",
    avatar: avatar1,
    alt: "avatar1",
  },
  {
    id: 5,
    name: "Tanya Fox",
    avatar: avatar1,
    alt: "avatar1",
  },
  {
    id: 6,
    name: "Hellen Schmidt",
    avatar: avatar1,
    alt: "avatar1",
  },
  {
    id: 7,
    name: "Caroline Schultz",
    avatar: avatar1,
    alt: "avatar1",
  },
  {
    id: 8,
    name: "Mason Heaney",
    avatar: avatar1,
    alt: "avatar1",
  },
  {
    id: 9,
    name: "Claudie Smitham",
    avatar: avatar1,
    alt: "avatar1",
  },
  {
    id: 10,
    name: "Emil Schaefer",
    avatar: avatar1,
    alt: "avatar1",
  },
];

export const authenticationButton = [
  {
    id: 1,
    content: "Continue with email",
    variant: "primary",
    link: "authentication/login",
  },
  {
    id: 2,
    content: "Continue with Twitter",
    variant: "secondary",
    icons: Icons.twitterColorLogo,
  },
  {
    id: 3,
    content: "Continue with Google",
    variant: "secondary",
    icons: Icons.googleColorLogo,
  },
  {
    id: 4,
    content: "Continue with Apple",
    variant: "secondary",
    icons: Icons.appleColorLogo,
  },
];
