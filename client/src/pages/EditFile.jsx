
import { EditInput, PageDesc, PageHeader, EditSubmitBtn } from '../components';

export default function SelectFile({ currentFile, fileData, onSubmit, onChange }) {
  console.log('file data is', fileData)
  const keys = Object.keys(fileData)
  return (
    <>
      <PageHeader title={"파일 수정"} />
      <PageDesc desc={`현재 파일: ${currentFile || ""}`} />
      <form onSubmit={onSubmit}>
        <EditSubmitBtn />
        <ul>
          {
            keys.map(key => {
              return <EditInput key={key} label={key} value={fileData[key]} onChange={onChange} />
            })
          }
        </ul>
      </form>
    </>
  )

}