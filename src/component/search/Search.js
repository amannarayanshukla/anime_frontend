import React, {Component} from "react";
import { connect } from 'react-redux';
import {fetchPosts} from '../../actions/index';

import styles from './Search.module.css';

class SearchInput extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = (e) => {
            const {page, limit} = this.props.data;
            e.preventDefault();
            const animeName = this.getAnimeName.value;
            this.props.dispatch(fetchPosts(animeName, limit, page));
            this.getAnimeName.value = "";
        }
    }

    render() {
        return (
            <div className = {styles.container}>
                <input
                    className={styles.input}
                    placeholder='search based on the anime name'
                    ref={input => (this.getAnimeName = input)}
                />
                <button
                    className={styles.button}
                    onClick={this.handleSubmit}
                >
                    Go
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
       data: state
    }
}
export default connect(mapStateToProps)(SearchInput);
