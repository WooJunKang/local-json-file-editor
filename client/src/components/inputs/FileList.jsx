
import { css } from 'glamor'
import { useHistory } from 'react-router-dom';
import moment from 'moment';

const inputStyled = css({
  width: "30rem",
  height: "4rem",
  padding: "1rem 2rem",
  border: "1px solid black",
  borderRadius: "0.5rem",
  letterSpacing: "1pt",
  fontSize: "1rem",
  ":hover": {
    color: "white",
    backgroundColor: "black",
    cursor: "pointer"
  },

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between"

})

export default function FileList({ data, handleCurrentFile }) {
  const histroy = useHistory();
  const onClick = (e) => {
    let container = e.target.closest('.entry-file-container')
    handleCurrentFile(container.getAttribute('value'))
    histroy.push('/edit')
  }
  return (
    <li style={{ marginBottom: "0.5rem" }} key={data.name}>
      <div
        className="entry-file-container"
        type="text"
        value={data.name}
        onClick={onClick}
        {...inputStyled}
      >
        <div style={{ fontSize: "1.5rem", fontWeight: "500" }}>
          {data.name}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "200" }}>
          <span>{data.size}</span>
          <span>{moment(data.lastModifiedAt).format("YYYY[-]MM[-]DD hh[:]mm[:]ss")}</span>
        </div>

      </div>

    </li>
  )
}