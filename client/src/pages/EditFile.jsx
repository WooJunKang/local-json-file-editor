
import { EditInput, PageDesc, PageHeader, EditBtn } from '../components';

export default function SelectFile({ currentFile, fileData, handleSubmit, dispatch }) {
  console.log('file data is', fileData)
  const keys = Object.keys(fileData)

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log('btn type: ', e.target)
    handleSubmit(fileData)
  }
  return (
    <>
      <PageHeader title={"파일 수정"} />
      <PageDesc desc={`현재 파일: ${currentFile || ""}`} />
      <form
        className="flex-col-center"
        onSubmit={onSubmit}
      >

        {
          currentFile && (
            <>
              <div className="flex-row-between" style={{ width: "10rem" }}>
                <EditBtn btnType="SUBMIT" />
                <EditBtn btnType="CANCEL" />
              </div>
              <div className="form-contents-container" style={{ height: "70vh", overflow: "scroll", padding: "1rem 2rem", boxShadow: "5px 5px 5px gray", marginTop: "2rem", border: "1px solid gray" }}>
                <ul>
                  {
                    keys.map(key => {
                      return <EditInput key={key} label={key} value={fileData[key]} dispatch={dispatch} />
                    })
                  }
                </ul>
              </div>
            </>
          )
        }

      </form>
    </>
  )

}