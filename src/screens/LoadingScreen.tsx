import React, { FC, memo } from "react"

// eslint-disable-next-line react/function-component-definition
const LoadingScreen: FC = () => {
  return (
    <div>
      loading
      {/* <CircularProgress color="primary" size={120} /> */}
    </div>
  )
}

export default memo(LoadingScreen)
