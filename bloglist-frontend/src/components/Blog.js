import React from 'react'

class Blog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  toggleVisibility = () => {
    this.setState({ visible: !this.state.visible })
  }

  render() {
    const hideWhenVisible = { display: this.state.visible ? 'none' : '' }
    const showWhenVisible = { display: this.state.visible ? '' : 'none' }
    const blogStyle = {
      paddingTop: 10,
      paddingLeft: 2,
      border: 'solid',
      borderWidth: 1,
      marginBottom: 5
    }

    return (
      <div style={blogStyle}>
        <div style={hideWhenVisible}>
        <button onClick={this.toggleVisibility}>{this.props.blog.title}</button> : {this.props.blog.author}
        </div>
        <div style={showWhenVisible}>
        <button onClick={this.toggleVisibility}>{this.props.blog.title}</button> : {this.props.blog.author}
          <li>
            {this.props.blog.url}
          </li>
          <li>
            {this.props.blog.likes} likes <button onClick>like this blog</button>
          </li>
          <li>
            added by "tähän käyttäjä // miten?"
    </li>
        </div>
      </div>
    )
  }
}
export default Blog