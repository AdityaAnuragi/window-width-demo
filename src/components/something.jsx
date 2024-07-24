function Something() {
  const styles = {width : "100px", height : "100px" , backgroundColor : "rgba(255,0,0,1)",position: "absolute", zIndex : 2};
  return (
    <div onClick={() => console.log("1")} style={styles}>
      <p onClick={() => console.log("2")}>this is a paragraph tag</p>
      <p onClick={() => console.log("3")}>this is a paragraph tag</p>
    </div>
  )
}

export {
  Something
}