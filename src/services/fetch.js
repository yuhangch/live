import AV from "leancloud-storage";
import {endTime, startTime} from "../component/heatmap";
import Config from "../conf";

const {Query, Object, debug} = AV

AV.init({
    appId: Config.applicationId,
    appKey: Config.applicationKey,
    serverURL: Config.serverURL
})
debug.disable()


export function FetchTweets(callback, skip, limit) {
    const query = new Query('Tweet');
    query.addDescending('createdAt')
    query.skip(skip);
    query.limit(limit);
    query.find().then((list) => {
        callback(list)
    });
}

export function UpdateLikes(id, likes, callback) {
    const tweet = Object.createWithoutData('Tweet', id);
    tweet.set('likes', likes);
    tweet.set('content',"test")
    tweet.save();
    callback();
}

export function FetchPostsStatistics(callback) {
    const query = new Query('Tweet');
    query.addDescending('createdAt')
    query.greaterThan('createdAt', startTime)
    query.lessThan('createdAt', endTime)
    query.find().then(list => {
        callback(list)
    })
}
