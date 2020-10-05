
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!Array.isArray(matrix)) return [];
  return matrix.flatMap((element, index) => index%2 ? element.reverse() : element)
}
