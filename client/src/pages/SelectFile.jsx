
import { FileList, PageHeader, PageDesc } from '../components';

export default function SelectFile({ fileList, handleCurrentFile, loading }) {
  return (
    <>
      <PageHeader title={"파일 리스트"} />
      <PageDesc desc={"수정하실 파일을 선택해주세요."} />
      <ul>
        {
          loading ? (
            <li>loading...</li>
          ) : (
              fileList.map(file => {
                return <FileList key={file.name} data={file} handleCurrentFile={handleCurrentFile} />
              })
            )
        }
      </ul>
    </>
  )

}