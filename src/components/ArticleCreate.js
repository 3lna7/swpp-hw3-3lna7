import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

class ArticleCreate extends Component {
    constructor() {
        super()
        this.state = {
            author_id: null,
            title: null,
            content: null,
        }
    }
    create() {
        fetch("http://localhost:3000/articles", {
            method: "Post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((response) => {
                console.log(response);
            })
        })

    }
    render() {
        return (
            <div>
                <Navbar />
                <h1>Create Article</h1>
                <hr />
                <div>
                    <label><b> Article Title</b><br /></label>
                    <textarea cols='40' rows='7' onChange={(e) => {
                        this.setState({
                            title: e.target.value
                        })
                    }} placeholder="Article Title" id="article-title-input" />
                    <br /> <br />
                    <label><b> Article Content</b><br /></label>
                    <textarea cols='40' rows='7' onChange={(e) => {
                        this.setState({
                            content: e.target.value
                        })
                    }} placeholder="Article Content" id="article-content-input" /><br />
                    <Link to="/articles"><button style={{ padding: '5px 8px', fontWeight: 'bold', marginTop: '10px' }} onClick={() => { this.create() }}>Add Article</button><br /></Link>
                    <Link to="/articles"><button style={{ padding: '5px 8px', fontWeight: 'bold', marginTop: '10px' }} >Back to Articles</button></Link>
                </div>
            </div >
        )
    }
}
export default ArticleCreate