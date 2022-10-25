import { css } from "@emotion/react"
import Forwordbutton from "./Forwordbutton"

const GoalWeight = () => {
  return (
    <div
      css={css`
        margin: 0 50px 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 18px;
        font-weight: bold;
        height: 90px;
        width: 335px auto;
      `}
    >
      目標体重
      <div
        css={css`
          display: flex;
          align-items: center;
          font-size: 18px;
          font-weight: bold;
          height: 90px;
          width: 335px auto;
        `}
      >
        kg <Forwordbutton />
      </div>
    </div>
  )
}

export default GoalWeight
