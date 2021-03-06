import React, {Component} from "react";
import {connect} from "react-redux";
import {getTopTVTC} from "../../reducers/top-tv-reducer";
import Spinner from "../spinner";
import Paginator from "../paginator";
import {NavLink} from "react-router-dom";

const TVTopList = ({data}) => {
    const content = data.map(item => {
        const {id, name, poster_path, original_name, first_air_date, vote_average} = item;
        const img = poster_path === null ? `https://lh3.googleusercontent.com/proxy/5LThuqCdMyL3pZ5lmS8b1p93D0Yp8RRurhQ3nq5IlZRV7Uz0LF-YWpnsTxhWEpYbzqqKqnCQur7P-THiXpRmbEMC681ytrwPwnAHaDwWPQcVc2i6mHM1ZY_1mPybNgZfwQ` :  `https://image.tmdb.org/t/p/w500/${poster_path}`
        return (
            <div className="content__item" key={id} id={id}>
                <img src={img} alt=""/>
                <h6>{name}</h6>
                <div className="content__item-block">
                    <h6>Оригинальное название: <span>{original_name}</span></h6>
                    <p className="date">Дата премьеры: <span>{first_air_date}</span></p>
                    <p className="rating">Рейтинг: <span>{vote_average}</span></p>
                    <NavLink to="">Подробнее</NavLink>
                </div>
            </div>
        )
    });
    return (
        <div className="content">
            {content}
        </div>
    )
}


class TVTopListContainer extends Component {
    componentDidMount() {
        this.props.getTopTVTC(1);
    }

    render() {
        const {tv: {total_pages, page, data, loading}, getTopTVTC} = this.props;

        if(loading) {
            return <Spinner />
        }

        return (
            <>
                <Paginator page={page} total_pages={total_pages} action={getTopTVTC}/>
                <TVTopList data={data}/>
                <Paginator page={page} total_pages={total_pages} action={getTopTVTC}/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tv: state.top_tv
    }
};

export default connect(mapStateToProps, {getTopTVTC})(TVTopListContainer);