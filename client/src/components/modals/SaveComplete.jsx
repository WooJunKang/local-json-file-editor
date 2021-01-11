const LIGHT_GREEN = "#F0F8E8"

export default function SaveComplete() {
  return (
    <div
      className="flex-row-center"
      style={{ width: "100%", height: "1rem", position: "absolute", top: "0px", padding: "0.5rem 0px", backgroundColor: LIGHT_GREEN }}>
      <i className="fas fa-check-circle" style={{ color: "green", marginRight: "1rem" }}></i>
      <p style={{ color: "gray" }}>저장 되었습니다.</p>
    </div>
  )
}