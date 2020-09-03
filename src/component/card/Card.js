import React, {Component} from "react";
import InfiniteScroll from 'react-infinite-scroller';
import {connect} from "react-redux";

import {fetchMorePosts} from '../../actions'
import styles from './Card.module.css';



class Card extends Component {
    render() {
        const loadFunc = () => () => {
            console.log(this.props.data, " -- LOADFUNC -- ");
            const {animeName,limit, page} = this.props.data;
            console.log(animeName, " -- anime name -- ")
            console.log(limit, " -- limit -- ")
            console.log(page, " -- page -- ")
            if(animeName){
                console.log("----LOAD MORE CALLED-----")
                this.props.dispatch(fetchMorePosts(animeName, limit, page));
            }
        }

        return (
            <div className={styles.componentContainer}>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={loadFunc()}
                    hasMore={!(this.props.data.page === this.props.data.lastPage)}
                    loader={<div className="loader" key={0}>
                        {
                            (this.props.data.page === this.props.data.lastPage) ?
                                <span>No more data</span>
                                :
                                <span>Loading ...</span>
                        }

                    </div>}
                    className = {styles.componentContainer}
                >
                {
                    this.props && this.props.data && this.props.data.data ?
                        this.props.data.data.map(item => {
                            return (
                                <div className={styles.cardContainer} key={item.mal_id}>
                                    <img
                                        className={styles.image}
                                        src={item.image_url}
                                        alt={`poster`}
                                    />
                                    <span className={styles.title}>{item.title}</span>
                                </div>
                            ) })
                            :
                            null
                }
                </InfiniteScroll>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state
    }
}
export default connect(mapStateToProps)(Card);
