import { useState } from 'react';
import { PageDesc, PageHeader, SaveComplete, EditForm } from '../components';

export default function SelectFile({ currentFile, fileData, handleSubmit, dispatch, loading }) {

  const [isSaved, setIsSaved] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault();
    setIsSaved(true)
    handleSubmit(fileData)

  }

  return (
    <>
      <PageHeader title={"파일 수정"} />
      <PageDesc desc={`현재 파일: ${currentFile || ""}`} />

      {isSaved && <SaveComplete />}

      {
        currentFile && (
          <EditForm onSubmit={onSubmit} loading={loading} fileData={fileData} dispatch={dispatch} />
        )
      }


    </>
  )

}