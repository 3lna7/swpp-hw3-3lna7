import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

class ArticleEdit extends Component {
    constructor() {
        super()
        this.state = {
            id: null,
            author_id: null,
            title: null,
            content: null,
        }
    }
    componentDidMount() {
        this.getData()
    }
    getData() {
        fetch("http://localhost:3000/articles/" + this.props.match.params.id).then(
            (response) => {
                response.json().then(
                    (result) => {
                        this.setState({
                            id: result.id,
                            title: result.title,
                            content: result.content,
                        })
                        console.log(result);
                    }
                )
            }
        )
    }
    edit() {
        fetch("http://localhost:3000/articles/" + this.state.id, {
            method: "PUT",
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
    delete(id) {
        fetch("http://localhost:3000/articles/" + id, {
            method: "DELETE",
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((response) => {
                alert('Artcle Deleted')
                this.getData()
            })
        })
    }
    render() {
        return (
            <div>
                <Navbar />
                <h1>Article Edit</h1>
                <hr />
                <div>
                    <label><b> Article Title</b><br /></label>
                    <textarea cols='40' rows='7' onChange={(e) => {
                        this.setState({
                            title: e.target.value
                        })
                    }}
                        value={this.state.title}
                        placeholder="Article Title"
                        id="article-title-input" />
                    <br /> <br />
                    <label><b> Article Content</b><br /></label>
                    <textarea cols='40' rows='7' onChange={(e) => {
                        this.setState({
                            content: e.target.value
                        })
                    }}
                        value={this.state.content}
                        placeholder="Article Content"
                        id="article-content-input" /><br />
                    <Link to="/articles"> <button style={{ padding: '5px 8px', fontWeight: 'bold', marginTop: '10px' }} onClick={() => { this.edit() }}>Update Article</button><br /></Link>
                    <Link to="/articles"><button style={{ padding: '5px 8px', fontWeight: 'bold', marginTop: '10px' }} onClick={() => { this.delete(this.state.id) }}>Delete Article</button><br /></Link>
                    <Link to="/articles"><button style={{ padding: '5px 8px', fontWeight: 'bold', marginTop: '10px' }} >Back to Articles</button></Link>
                </div>
            </div>
        )
    }
}
export default ArticleEdit