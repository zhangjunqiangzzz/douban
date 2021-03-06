import React from 'react'
import './index.less'
import {connect} from 'react-redux';
import actions from '../../store/actions/group'
import FootLogo from "../../components/FooterLogo/FootLogo";
import Loading from "../../components/Loading/Loading";

@connect(state => ({...state.group}), actions)
export default class Group extends React.Component {
    componentDidMount() {
        if (this.props.group.length === 0) {
            this.props.getGroupApi();
        }
    }
    render() {
        return (

            <div className='group'>
                <h3 className="title">影视</h3>

                <ul className='group-list'>
                    {this.props.group.map((item, index) => {
                        return <li key={index} className='group-li clearfix'>
                            <img src={item.itemImg} alt="" className='group-img'/>
                            <p className="content">{item.itemTitle}</p>
                            <i className="person-num">{item.count}</i>
                            <span className="describe">{item.itemDetail}</span>
                        </li>
                    })}
                    <a href="#" className="more">
                        更多相关小组
                    </a>
                </ul>

                <h3 className="title">活动</h3>
                <ul className='group-list'>
                    {this.props.group.map((item, index) => {
                        return <li key={index} className='group-li clearfix'>
                            <img src={item.itemImg} alt="" className='group-img'/>
                            <p className="content">{item.itemTitle}</p>
                            <i className="person-num">{item.count}</i>
                            <span className="describe">{item.itemDetail}</span>
                        </li>
                    })}
                    <a href="#" className="more">
                        更多相关小组
                    </a>
                </ul>
                <h3 className="title">lifestyle</h3>
                <ul className='group-list'>
                    {this.props.group.map((item, index) => {
                        return <li key={index} className='group-li clearfix'>
                            <img src={item.itemImg} alt="" className='group-img'/>
                            <p className="content">{item.itemTitle}</p>
                            <i className="person-num">{item.count}</i>
                            <span className="describe">{item.itemDetail}</span>
                        </li>
                    })}
                    <a href="#" className="more">
                        更多相关小组
                    </a>
                </ul>
                <h3 className="title">娱乐</h3>
                <ul className='group-list'>
                    {this.props.group.map((item, index) => {
                        return <li key={index} className='group-li clearfix'>
                            <img src={item.itemImg} alt="" className='group-img'/>
                            <p className="content">{item.itemTitle}</p>
                            <i className="person-num">{item.count}</i>
                            <span className="describe">{item.itemDetail}</span>
                        </li>
                    })}
                    <a href="#" className="more">
                        更多相关小组
                    </a>
                </ul>
                <h3 className="title">新闻</h3>
                <ul className='group-list'>
                    {this.props.group.map((item, index) => {
                        return <li key={index} className='group-li clearfix'>
                            <img src={item.itemImg} alt="" className='group-img'/>
                            <p className="content">{item.itemTitle}</p>
                            <i className="person-num">{item.count}</i>
                            <span className="describe">{item.itemDetail}</span>
                        </li>
                    })}
                    <a href="#" className="more">
                        更多相关小组
                    </a>
                </ul>
                <h3 className="title">有趣的故事</h3>
                <ul className='group-list'>
                    {this.props.group.map((item, index) => {
                        return <li key={index} className='group-li clearfix'>
                            <img src={item.itemImg} alt="" className='group-img'/>
                            <p className="content">{item.itemTitle}</p>
                            <i className="person-num">{item.count}</i>
                            <span className="describe">{item.itemDetail}</span>
                        </li>
                    })}
                    <a href="#" className="more">
                        更多相关小组
                    </a>
                </ul>
                <h3 className="title">美丽的风景</h3>
                <ul className='group-list'>
                    {this.props.group.map((item, index) => {
                        return <li key={index} className='group-li clearfix'>
                            <img src={item.itemImg} alt="" className='group-img'/>
                            <p className="content">{item.itemTitle}</p>
                            <i className="person-num">{item.count}</i>
                            <span className="describe">{item.itemDetail}</span>
                        </li>
                    })}
                    <a href="#" className="more">
                        更多相关小组
                    </a>
                </ul>
                <h3 className="title">无聊的人</h3>
                <ul className='group-list'>
                    {this.props.group.map((item, index) => {
                        return <li key={index} className='group-li clearfix'>
                            <img src={item.itemImg} alt="" className='group-img'/>
                            <p className="content">{item.itemTitle}</p>
                            <i className="person-num">{item.count}</i>
                            <span className="describe">{item.itemDetail}</span>
                        </li>
                    })}
                    <a href="#" className="more">
                        更多相关小组
                    </a>
                </ul>
                <h3 className="title">网页</h3>
                <ul className='group-list'>
                    {this.props.group.map((item, index) => {
                        return <li key={index} className='group-li clearfix'>
                            <img src={item.itemImg} alt="" className='group-img'/>
                            <p className="content">{item.itemTitle}</p>
                            <i className="person-num">{item.count}</i>
                            <span className="describe">{item.itemDetail}</span>
                        </li>
                    })}
                    <a href="#" className="more">
                        更多相关小组
                    </a>
                </ul>
                <FootLogo/>
            </div>
        )

    }
}