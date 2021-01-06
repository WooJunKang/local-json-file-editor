
import { css } from 'glamor'

const inputStyled = css({

  ":hover": {
    color: "white",
    backgroundColor: "black",
    cursor: "pointer"
  },


})

export default function EditSubmitBtn() {
  // const onClick = (e) => {
  //   let container = e.target.closest('.entry-file-container')
  //   handleCurrentFile(container.getAttribute('value'))
  //   histroy.push('/edit')
  // }
  return (
    <input type="submit" value="저장" />
  )
}