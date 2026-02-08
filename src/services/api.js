// import axios from "axios";

const API = "http://localhost:5000/packages";

export const homeCampData = [
  {
    id: 1,
    title: "Riverside Camp",
    location: "Gattu Ghat",
    price: 1600,
    image: "https://rishikeshadventures.com/images/camp/camp-01/main.jpeg",
    rating:4,
    duration: "1 Night / 2 Days",
    amenities: [
        "Attached Washroom",
        "Meals",
        "Bonfire",
        "Trekking",
        "Swimming Pool",
    ]
  },
  {
    id: 2,
    title: "Riverside Luxury AC Cottage/Camp Stay",
    location: "Shivpuri",
    price: 1800,
    image: "https://rishikeshadventures.com/images/camp/camp-02/main.jpeg",
    rating:3.5,
    duration: "1 Night / 2 Days",
    amenities: [
        "Attached Washroom",
        "Meals",
        "Bonfire",
        "Trekking",
        "Swimming Pool",
    ]
  },
  
  {
    id: 3,
    title: "Riverside Luxury Cottage Camp",
    location: "Gattu Ghat",
    price: 1600,
    image: "https://rishikeshadventures.com/images/camp/camp-03/main.jpeg",
    rating:4.5,
    duration: "1 Night / 2 Days",
    amenities: [
        "Attached Washroom",
        "Meals",
        "Bonfire",
        "Trekking",
        "Swimming Pool",
    ]
  },
  {
    id: 4,
    title: "Riverside Super Luxury AC Cottage Stay",
    location: "Gattu Ghat",
    price: 1600,
    image: "https://rishikeshadventures.com/images/camp/camp-04/main.jpeg",
    rating:4.5,
    amenities: [
        "Attached Washroom",
        "Meals",
        "Bonfire",
        "Trekking",
    ]
  },
  {
    id: 5,
    title: "Riverside Luxury Cottage",
    location: "Gattu Ghat",
    price: 1600,
    image: "https://rishikeshadventures.com/images/camp/camp-05/main.jpeg",
    rating:4.5,
    duration: "1 Night / 2 Days",
    amenities: [
        "Attached Washroom",
        "Meals",
        "Bonfire",
        "Trekking",
        "Swimming Pool"
    ]
  },
  {
    id: 6,
    title: "Riverside Adventure Swiss Camp",
    location: "Gattu Ghat",
    price: 1600,
    image: "https://rishikeshadventures.com/images/camp/camp-06/main.jpeg",
    rating:4.5,
    duration: "1 Night / 2 Days",
    amenities: [
        "Attached Washroom",
        "Meals",
        "Bonfire",
        "Trekking",
        "Swimming Pool"
    ]
  },
];

export const getPackages = () => axios.get(API);
export const addPackage = (data) => axios.post(API, data);