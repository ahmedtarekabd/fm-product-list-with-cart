import fs from "fs";

const listings = JSON.parse(fs.readFileSync("./data.json", "utf8"));

// Write getter functions for the newArticles and topArticles arrays
export const getListings = () => {
  return listings;
};
