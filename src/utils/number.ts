export const randomNumberFromRange = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min)

export const rollSixSidedDie = () => Math.floor(Math.random() * ((6 - 1) + 1) + 1)
