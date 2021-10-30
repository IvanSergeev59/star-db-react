const Row = ({leftBlock, rightBlock}) => {
    return (
      <div className="row mb2">
        <div className="col-md-6">
          {leftBlock}  
        </div>
        <div className="col-md-6">
          {rightBlock}
        </div>
      </div>
    )
  }

  export default Row