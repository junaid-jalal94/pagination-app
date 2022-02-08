import PropTypes from 'prop-types'
import React, {  } from 'react'

function Post(props){
    
    return (
        <div className = 'post'>
                <small>{props.id}</small>
                <h1>{props.title}</h1>
                <p>{props.body}</p>
        </div>
    )
}


Post.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
};

Post.defaultProps = {
    id: 0,
    title: "",
    body: ""
}
export default Post;