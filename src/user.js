import react from  'react';
const user = (props) => {
    const {data} = props  // if we wwere using class component then we aould have used this.props.data
    console.log(props)
    return (
        <div>
            <h1>User Component</h1>
            <h4>{data.name}</h4>
            <h4>{data.age}</h4>
        </div>
    )
}

export default user;
