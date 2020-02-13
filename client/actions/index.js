export const addImage1 = (object) => {
  return {
    type: 'DBZ_IMG_1',
    image1: object.body[1].image,
    Image1Id: object.id.body[1].id
  }
}

export const addImage2 = (object) => {
  return {
    type: 'DBZ_IMG_2',
    image2: object.body[0].image,
    Image2Id: object.body[0].id
  }
}
