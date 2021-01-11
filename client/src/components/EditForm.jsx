
import { EditBtn, CancelBtn, EditInput } from '.';

export default function EditForm({ onSubmit, loading, fileData, dispatch }) {
  return (
    <form
      className="flex-col-center"
      onSubmit={onSubmit}
    >

      <div className="flex-row-between" style={{ width: "12rem" }}>
        <EditBtn />
        <CancelBtn />
      </div>
      <div className="form-contents-container" style={{ height: "70vh", width: "60vh", overflow: "scroll", padding: "1rem 2rem", boxShadow: "5px 5px 5px gray", marginTop: "2rem", border: "1px solid gray" }}>
        <ul>
          {
            loading ? (
              <div className="flex-col-center" style={{ width: "100%" }}><li>loading...</li></div>
            ) : (
                Object.keys(fileData).map(key => {
                  return <EditInput key={key} label={key} value={fileData[key]} dispatch={dispatch} />
                })
              )
          }
        </ul>
      </div>
    </form>
  )
}