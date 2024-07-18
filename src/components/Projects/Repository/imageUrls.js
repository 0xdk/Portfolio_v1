function getImageUrl(projectName) {
  const imageUrls = {
    'Gold-Price-tracker':
      'https://res.cloudinary.com/dr29uswhb/image/upload/v1719645982/Portfolio/Projects/bsmptap8f5afbntzowtg.png',
    'Campground-Project':
      'https://res.cloudinary.com/dr29uswhb/image/upload/v1719645566/Portfolio/Projects/c88lyafx0weyr832sfit.png',
    'tour-planning-landing-page':
      'https://res.cloudinary.com/dr29uswhb/image/upload/v1719645565/Portfolio/Projects/ih6cxe6l4pjkme4j75hj.png',
  };
  const value = imageUrls[projectName];
  return value;
}

export default getImageUrl;
