
import { css } from 'glamor'

const POSITIVE_COLOR = '#3E8ACD'

export default function EditBtn({ btnType }) {

  const inputStyled = css({
    padding: "0.5rem 1rem",
    backgroundColor: "white",
    color: POSITIVE_COLOR,
    border: `1px solid ${POSITIVE_COLOR}`,
    borderRadius: '0.75rem',
    fontSize: "1rem",
    fontWeight: "600",
    ":hover": {
      color: "white",
      backgroundColor: POSITIVE_COLOR,
      cursor: "pointer"
    },
  })

  return (
    <input
      type="submit"
      value="수정"
      {...inputStyled}
    // onClick={onClick}
    />
  )
}