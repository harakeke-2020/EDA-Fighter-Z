const intialState = {
  image1: '',
  image1Id: 0,
  image2: '',
  image2Id: 0
}

const dbz = (state = intialState, action) => {
  switch (action.type) {
    case 'DBZ_IMG_1':
      return {
        image1: action.image1,
        image1Id: action.image1Id
      }
    case 'DBZ_IMG_2':
      return {
        image2: action.image2,
        image2Id: action.image2Id
      }
    default:
      return state
  }
}

export default dbz
