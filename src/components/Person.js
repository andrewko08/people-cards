const Person = (props) => {
    const {img, name, job} = props.person;
    const {children} = props;
  
    const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
    return (<div className="person">
      <img src={url} alt="man"/>
      <div>
        <h4>{name}</h4>
        <h5>{job}</h5>
        <h6>{children}</h6>
  
      </div>
    </div>)
  }

export default Person