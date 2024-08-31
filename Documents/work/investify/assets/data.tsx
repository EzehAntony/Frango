import { title } from "process";
import { AtmCard, Home, Profile, Trending } from "./svg";

export const navigation = [
  { name: "home", path: "/home", class: "bi bi-house-fill" },
  { name: "trending", path: "/trending", class: "bi bi-graph-up" },
  { name: "wallet", path: "/wallet", class: "bi bi-credit-card-fill" },
  { name: "profile", path: "/profile", class: "bi bi-person-fill" },
];

export const strategy = [
  {
    img: "/piechart.svg",
    title: "Maximizing Returns through Strategic Diversification",
    paragraph:
      "Investify Investment Limited employs a strategic diversification approach to maximize returns. By spreading investments across various sectors like cryptocurrencies, real estate, and renewable energy, the platform reduces exposure to any single market risk. ",
  },
  {
    img: "/growth.svg",
    title: "Mitigating Risk with Balanced Asset Allocation",
    paragraph:
      "To protect investor capital, Investify follows a balanced asset allocation strategy. This involves carefully selecting investments that are not correlated, ensuring that downturns in one market do not impact the entire portfolio. ",
  },
  {
    img: "/visual-data.svg",
    title: "Leveraging Market Opportunities for Optimal Growth",
    paragraph:
      "Investify actively identifies and leverages emerging market opportunities to fuel optimal growth. Our team of experts continuously monitors dynamic sectors such as blockchain, oil and gas, and tech innovations to capitalize on high-profit ventures. ",
  },
  {
    img: "/piggy.svg",
    title: "Sustainable Wealth Building with Smart Investments",
    paragraph:
      "Our investment strategy focuses on sustainable wealth building by incorporating long-term, growth-oriented assets. We prioritize investments in industries with strong growth potential, such as clean energy and technological advancements.",
  },
];

export const aboutUs = [
  {
    img: "bi bi-alarm-fill",
    title: "Our Mission",
    text: "We are focused on building and sustaining long-term relationships with our investors. Our primary mission is providing them with the best solution to their financial problems",
  },

  {
    img: "bi bi-eye-fill",
    title: "Our Vision",
    text: "Our vision is to help and assist each and every Investify account-holder learn more about the blockchain technology, invest, and grow their investments beyond limits",
  },
  {
    img: "bi bi-bullseye",
    title: "Our Goal",
    text: "Here at Investify, our main goal is to serve all account-holders from around the world seamlessly and efficiently through our expert support systems",
  },
];
