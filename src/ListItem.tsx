function ListItem({itemNum}) {
  return (
    <div className="nth-3:bg-yellow-500 odd:bg-gray-400 hover:outline-2 hover:outline-green-500">
      <p>Item Number {itemNum}</p>
    </div>
  )
}

export default ListItem;