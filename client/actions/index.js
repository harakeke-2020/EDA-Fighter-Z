export const addImage1 = (object) => {
  return {
    type: 'DBZ_IMG_1',
    image1: object.image,
    Image1Id: object.id
  }
}

export const addImage2 = (object) => {
  return {
    type: 'DBZ_IMG_2',
    image2: object.image,
    Image2Id: object.id
  }
}
