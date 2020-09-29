export const remove = (index) => ({
  type: 'DELETE',
  index
})

export const addItem = (value) => ({
  type: 'ADD',
  value
})