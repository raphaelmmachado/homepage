import {
  searchIcon,
  themeIconSun,
  themeIconMoon,
  layoutIconGrid,
  layoutIconList,
  mobileMenuIcon,
  importIcon,
  exportIcon,
} from "./dom.js";
import {
  search,
  sun,
  moon,
  grid,
  list,
  menu,
  importSvg,
  exportSvg,
} from "../svgs/index.js";

export const loadIcons = () => {
  searchIcon.innerHTML = search;
  themeIconSun.innerHTML = sun;
  themeIconMoon.innerHTML = moon;
  layoutIconGrid.innerHTML = grid;
  layoutIconList.innerHTML = list;
  mobileMenuIcon.innerHTML = menu;
  importIcon.innerHTML = importSvg;
  exportIcon.innerHTML = exportSvg;

  console.log("themeIconSun:", themeIconSun.innerHTML);
  console.log("themeIconMoon:", themeIconMoon.innerHTML);
  console.log("layoutIconGrid:", layoutIconGrid.innerHTML);
  console.log("layoutIconList:", layoutIconList.innerHTML);
};
