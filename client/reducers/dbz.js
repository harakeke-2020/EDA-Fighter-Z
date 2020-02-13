const intialState = {
  image1: '',
  image1Id: 0,
  image2: '',
  image2Id: 0
}

const character1 = (state = intialState, action) => {
  switch (action.type) {
    case 'DBZ_IMG_1':
      return {
        image1: action.image,
        image1Id: action.id
      }
    default:
      return state
  }
}

const character2 = (state = intialState, action) => {
  switch (action.type) {
    case 'DBZ_IMG_2':
      return {
        image2: action.image,
        image2Id: action.id
      }
    default:
      return state
  }
}

export default { character1, character2 }
