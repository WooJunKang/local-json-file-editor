import { useState } from 'react';
import { EditInput, PageDesc, PageHeader, EditBtn, CancelBtn, EditConfirmModal } from '../components';

export default function SelectFile({ currentFile, fileData, handleSubmit, dispatch, loading }) {

  const [isModalOpen, setIsModalOpen] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault();
    // 여기서 모달 창 뛰우고
    setIsModalOpen(!isModalOpen)

  }

  const onConfirm = (e) => {
    handleSubmit(fileData)
  }

  return (
    <>
      {
        isModalOpen && <EditConfirmModal setIsModalOpen={setIsModalOpen} />
      }

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
            </>
          )
        }

      </form>
    </>
  )

}