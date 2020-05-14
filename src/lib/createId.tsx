let id = -1

const createId = (): number => {
  id += 1
  return id
}

const initId = (initValue: number) => {
  id = initValue
}

export { createId, initId }