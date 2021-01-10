
import { css } from 'glamor'
import { useHistory } from 'react-router-dom';

const NEGATIVE_COLOR = '#DB524B'

export default function CancelBtn() {
  const history = useHistory();

  const onClick = (e) => {
    history.push('/');
  }

  const inputStyled = css({
    padding: "0.5rem 1rem",
    backgroundColor: "white",
    color: NEGATIVE_COLOR,
    border: `1px solid ${NEGATIVE_COLOR}`,
    borderRadius: '0.75rem',
    fontSize: "1rem",
    fontWeight: "600",
    ":hover": {
      color: "white",
      backgroundColor: NEGATIVE_COLOR,
      cursor: "pointer"
    },
  })

  return (
    <input
      type="button"
      value="취소"
      {...inputStyled}
      onClick={onClick}
    />
  )
}