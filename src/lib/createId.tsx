let id = -1

const createId = (): number => {
  id += 1
  return id
}

export { createId }