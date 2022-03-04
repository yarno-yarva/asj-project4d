// TODO: write your code here

export default function sortA(item) {
  item.sort((a, b) => a.health - b.health);
  return item.reverse((a, b) => a.health - b.health);
}
