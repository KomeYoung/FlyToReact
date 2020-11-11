import React from "react";
import PropTypes from 'prop-types';
class Teacher extends React.Component {
    render() {
        return (
            <ol>
                <li>{this.props.name}</li>
                <li>{this.props.sex}</li>
            </ol>
        );
    }
}

Teacher.propTypes = {
    name:PropTypes.string,
    // sex:React.PropTypes.string.isRequired,
    // age:React.PropTypes.number.isRequired,
}
Student.propTypes = {
    name:PropTypes.string.isRequired,
    sex:PropTypes.string.isRequired,
    // age:PropTypes.number.isRequired,
}

function Student(props) {
    return (
        <ol>
            <li>{'学生姓名：' + props.name}</li>
            <li>{'学生年龄：' + props.age}</li>
        </ol>
    );
}

class MyInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const teacher = {name: '张飞', sex: '女'};
        let student = {name: '张飞', sex: '女'};
        // let student = {name: '小二', sex: '女', age: 111};
        return (
            <div>
                <h2>老师信息</h2>
                <Teacher {...teacher}/>
                <h2>学生信息</h2>
                <Student {...student}/>

                <h2>other info</h2>
                <PragramCompoent color='red'>
                    <h3>jfkljklfjkf</h3>
                    <h4>36836386</h4>
                </PragramCompoent>
            </div>
        )
    }
}

function PragramCompoent(props) {
    return(
        <div className={"wuwei haiwen-" + props.color}>
            {props.children}
        </div>
    );

}

export default MyInfo;