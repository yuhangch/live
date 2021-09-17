import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import moment from "moment";
import {FetchPostsStatistics} from "../services/fetch";
import React from "react";
// 向前向后取日期的范围，用于构建热力图
const range = 0.3;

export const startTime = new Date(moment().subtract(range, 'year').format('YYYY-MM-DD'))
export const endTime = new Date(moment().add(range, 'year').format('YYYY-MM-DD'))

export class Heatmap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        this.statCallback = (list) => {

            const result = [];
            if (!list) {
                return result;
            }
            const dict = {}
            list.forEach((tweet) => {
                const time = tweet.createdAt
                const date = moment(time).format("YYYY-MM-DD")

                if (dict.hasOwnProperty(date)) {
                    dict[date] = dict[date] + 1
                } else {
                    dict[date] = 1
                }
            })
            for (let k in dict) {
                result.push({date: k, count: dict[k]})
            }
            this.setState({data: result})
        }
    }

    componentDidMount() {
        FetchPostsStatistics(this.statCallback)
    }

    render() {
        return <CalendarHeatmap
            endDate={endTime}
            startDate={startTime}
            values={this.state.data}
            gutterSize={3}
            classForValue={(value) => {
                if (!value) {
                    return 'color-empty';
                }
                if (value > 6) return 'color-scale-6'
                return `color-scale-${value.count}`;
            }}
        />
    }
}
