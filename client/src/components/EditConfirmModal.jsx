
const POSITIVE_COLOR = '#3E8ACD'

export default function EditConfirmModal({ setIsModalOpen }) {

  ////////////////
  // 모달 창 toggle
  const callBack = (e) => {
    if (e.target.closest('.confirm-modal-contents') === null) {
      setIsModalOpen();
      document.removeEventListener('click', callBack);
    }
  }
  document.addEventListener(("click"), callBack)
  ////////////////

  return (
    <section
      className="confirm-modal-background"
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        backgroundColor: "rgba(0,0,0,0.5)",
        left: "0px",
        top: "0px",
      }}
    >
      <div
        className="confirm-modal-contents"
        style={{
          width: "30vw",
          height: "30vh",
          left: "35vw",
          top: "20vh",
          backgroundColor: "white",
          position: "absolute",
          borderRadius: "1.5rem",
          overflowX: "hidden",
        }}
      >
        <div
          className="flex-col-center"
          style={{ height: "1.5rem", backgroundColor: "black" }}
        />
        <h2 style={{ letterSpacing: "0.25rem", textAlign: "center", marginTop: "4rem", marginBottom: "6rem" }}>변경사항을 저장하시겠습니까?</h2>

        <div className="flex-row-between confirm-btn-container" style={{ padding: "0px 10rem" }}>
          <button>네</button>
          <button>아니오</button>
        </div>
      </div>
    </ section >
  )
}