import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
class ArticleList extends Component {
    constructor() {
        super()
        this.state = {
            list: null
        }
    }
    componentDidMount() {
        this.getData()
    }
    getData() {
        fetch("http://localhost:3000/articles").then(
            (response) => {
                response.json().then(
                    (result) => {
                        this.setState({ list: result })
                    }
                )
            }
        )
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
                <h1>Article List</h1>
                <Link to="articles/create">
                    <button id='create-article-button' style={{ padding: '7px 10px', fontWeight: 'bold' }}>Create Article </button>
                </Link>
                <hr />
                {
                    this.state.list ?
                        <div>
                            {
                                this.state.list.map((item, index) =>
                                    <div style={{ maxWidth: '768px', margin: '0 auto' }}>

                                        <h2 style={{ textAlign: 'justify' }}><span>{item.author_id}-</span> {item.title}</h2>
                                        <p style={{ textAlign: 'justify' }}>{item.author_id}</p>
                                        <p style={{ textAlign: 'justify' }}>{item.content}</p>
                                        <Link to={"/articles/" + item.id + "/edit"}><button style={{ padding: '5px 8px', fontWeight: 'bold' }}>Edit Article </button></Link>
                                        <button onClick={() => { this.delete(item.id) }} style={{ padding: '5px 8px', fontWeight: 'bold' }}>Delete Article </button>
                                        <hr />
                                    </div>
                                )
                            }
                        </div>
                        : <p>Loading ...</p>
                }
            </div>
        )
    }
}
export default ArticleList