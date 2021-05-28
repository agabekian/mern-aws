import React, { Component, useEffect } from 'react';
import axios from 'axios';
import List from './List';
import { Link } from '@reach/router';
import './Favs.css';
import { v4 as uuidv4 } from 'uuid';


export default class Favs extends Component {
    constructor(props) {
        super(props);
        this.state = { favs: [] }
        this.deleteEntry = this.deleteEntry.bind(this)
    }
    getSavedQuotes() {
        axios.get('http://localhost:8000/api/entries')
            .then(res => {
                // console.log(res.data)
                this.setState({ favs: res.data })
                console.log("saved is", this.state)
                // setLoaded(true)
            })
    }

    componentDidMount() {
        this.getSavedQuotes();
    }

    deleteEntry(entryId) {
        console.log("deleted: ", entryId)
        axios.delete('http://localhost:8000/api/entries/' + entryId)
            .then(res => {
            }).catch(err => console.log(err));
        this.setState({ favs: this.state.favs.filter(i => i._id != entryId) })
    }

    render() {
        let idx = uuidv4();
        return (
            <div className="JokeList-jokes">
                <div className="Favs-back">
                    <Link to="/" style={{ color: 'white' }}><i className="fas fa-angle-left"></i></Link>
                </div>
                {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}

                {this.state.favs.map((q, idx) =>
                (
                    <div key={idx}>
                        <div className="close">
                            <i className="fa fa-times" onClick={(e) => { this.deleteEntry(q._id) }}></i>
                        </div>
                        <List
                            qid={q.content["0"].id}
                            id={q._id}//db id
                            text={q.content["0"].text}
                            author={q.content["0"].author}
                            source={q.content["0"].source}
                        />
                    </div>
                ))}
                {/* <div className="Favs-back">
                    <Link to="/" style={{ color: 'white' }}><i className="fas fa-angle-left"></i></Link>
                </div> */}


            </div>
        )

    }
}
