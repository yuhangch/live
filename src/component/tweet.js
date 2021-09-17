import React, {createElement, useState} from 'react';
import {Comment, Tag} from 'antd';
import moment from 'moment';
import "moment/locale/zh-cn"
import Markdown from 'react-markdown'
import {
    HeartOutlined,
    HeartTwoTone
} from '@ant-design/icons';
import {UpdateLikes} from "../services/fetch";
import Config from "../conf";

moment.locale("zh-cn")
// post 卡片
const Tweet = (props) => {
    const [likes, setLikes] = useState(props.likes ? props.likes : 0);
    const [action, setAction] = useState(null);
    const id = props.id

    const likeCallBack = () => {
        setLikes(likes + 1);
        setAction('liked');
    }

    const like = () => {
        if (action === 'liked') return
        UpdateLikes(id, likes + 1, likeCallBack)
    };

    const tagColorSelector = (tag) => {
        const TagsColor = Config.tagsColorMap;
        if (TagsColor.hasOwnProperty(tag)) {
            return TagsColor[tag]
        }
        return Config.otherTagColor
    }
    const createTags = (tags) => tags.map(tag => <span key={props.id + tag}><Tag
        color={tagColorSelector(tag)}>{tag}</Tag></span>)


    const HeartColorful = () => <HeartTwoTone twoToneColor={"#eb2f96"}/>
    const actions = [
        <span key={props.id} onClick={like}>
        {createElement(action === 'liked' ? HeartColorful : HeartOutlined)}
            <span className="comment-action">
              {likes}
          </span>
      </span>
        ,
        createTags(props.tags)
    ];

    return (
        <>
            <Comment
                className={"tweet-container"}
                actions={actions}
                author={<a href={Config.authorHref}>{Config.authorId}</a>}
                content={
                    <Markdown key={props.id}>{props.content}</Markdown>
                }
                datetime={
                    <span>{moment(props.createdAt).fromNow()}</span>
                }
            />
        </>
    );
};

export default Tweet;
