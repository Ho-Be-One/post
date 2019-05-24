import React from 'react';
import poster from '../img/enfant.jpg';
import logo from '../img/logo.jpg';


// import moment from "moment";

export default class Commentaire extends React.Component {
    constructor() {
        super();
        this.state = {
            like: 0,
            countComment: 0,
            time: '',
            inputComment: '',
            comment: [], // Objet
            arrayComment: [], // Array
            action: '',
            id: 0,
            indexValue: '',
            avatar: './img/avatar.png',
            show: true,
            showCommentList: false,
            showAll:false,
        }
    }
    // Action like and dislike
    actionLike() {
        this.setState({
            like: this.state.like < 1 ? this.state.like += 1 : this.state.like -= 1,
        });
    }

    // add comment
    addComment = (event) => {
        event.preventDefault();

        // condition if inputComment is empty not new comment
        if (this.state.inputComment !== '') {
            this.state.id += 1;
            this.setState({
                inputComment: '',
                comment: [this.state.comment['id'] = this.state.id],
                comment: [this.state.comment['name'] = 'Guy Djendo Essiko'],
                comment: [this.state.comment['avatar'] = this.state.avatar],
                comment: [this.state.comment['date'] = this.state.time],
                comment: [this.state.comment['comment'] = this.state.inputComment],
                comment: [this.state.comment['like'] = 3],
                arrayComment: [...this.state.arrayComment, this.state.comment],
                
                countComment: this.state.countComment += 1,
                show: this.state.show = false,
                showCommentList: this.state.showCommentList = true
            });
        }
       
    }
    // delete comment
    deleteComment(id) {
        this.setState({
            comment: this.state.arrayComment.splice(id, 1),
            countComment: this.state.countComment -= 1,
        });
    }
    switchShowComment() {
            this.setState({
            showAll:this.state.showAll === false ? this.state.showAll = true : this.state.showAll = false
            });
        } 
   // show comment loop 'map'
    showComment() {

        let arrayCommentLegth = this.state.arrayComment.length;
        let lengthOn = 0;
        if(this.state.showAll === false){lengthOn = arrayCommentLegth - 4};        
        console.log(this.state.showAll);
        return this.state.arrayComment.map((data, id) => {

        if(id >= lengthOn && id <= arrayCommentLegth){
            return <div class="comment" key={id}>
                <div className="left float-left">
                    <dvi className="container-avatar">
                        <img className="avatar" src={this.state.avatar} />
                    </dvi>
                </div>
                <div className="right float-right">
                    <div className="text-comment">
                        <b>{data.name}</b> : {data.comment}
                    </div>
                    <div className="info-comment">
                        <a href="#" className="float-right delete" onClick={this.deleteComment.bind(this, id)}> <i className="fa fa-times"></i></a>
                        <span className="float-left mr-2"> {data.date}</span>
                        <a href="#" className="float-left mr-2"><i class="fa fa-heart"></i> {data.like}</a>
                        {/* <a href="#" className="float-left ml-2">Répondre</a> */}
                    </div>
                </div>
            </div>
         }
         });
    
    };

    // question montrer zone d'insertin commentaire
    QuestInsertCommentArea() {
        this.setState({
            show: this.state.show === true ? this.state.show = false : this.state.show = true
        });
    };
    insertCommentArea() {
        return <div className="card-footer border-0 text-muted">
            <div className="form-group">
                <textarea
                    type="textarea"
                    value={this.state.inputComment}
                    onChange={this.onChange.bind(this)}
                    className="form-control"
                    placeholder="your comment..." />
            </div>
            <button onClick={this.addComment.bind(this)} className="btn btn-sm btn-success btn-block"><b>Comment</b></button>
        </div>
    };

    // catch comment live
    onChange(event) {
        this.setState({
            inputComment: event.target.value,
            time: event.target.value = new Date().toLocaleTimeString(),
        });
    }

    render() {
        return (
            <div>
                <div className="container text-left col-3 mt-5">
                    <div className="row">
                        <div className="card mb-3">
                            <div className="container-head">
                                <div className="container-head-left">
                                    <div className="cont-logo-avatar">
                                    <img src={logo} alt="Logo" />
                                    </div>
                                </div>
                                <div className="container-head-right">
                                    <div className="title">
                                        <b>Butterflies and friends</b>
                                    </div>
                                    <div className="adress">
                                    <i class="fa fa-map-marker"></i> 1065 Av of the Americas, New York, NY 1001

                                    </div>
                                </div>
                            </div>
                            <img src={poster} alt="Logo" />
                            <div className="pl-3 pr-3 pt-3 pb-0 card-body description">
                                <p className="legende">Some quick example text to build on the card title and make up the bulk of the card's comment. title and make up the bulk of the card's comment.</p>
                            </div>
                            <div className="legende pl-3 pr-3 pt-1 pb-1 ">
                                <button type="button" className="btn btn-sm"><b>{this.state.like}</b> Like</button>
                                <button type="button" className="btn btn-sm" onClick={this.switchShowComment.bind(this)}><b>{this.state.countComment}</b> Comments</button>
                            </div>
                            <div className="legende pl-3 pr-3 pt-1 pb-1 border-top">
                                <div class="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" className="btn btn-sm" onClick={this.actionLike.bind(this)}><i className={this.state.like < 1 ? this.action = "fa fa-thumbs-up mr-1" : this.action = "fa fa-thumbs-down mr-1"}></i>{this.state.like < 1 ? this.action = 'like' : this.action = 'Dislike'}</button>
                                    <button type="button" className="btn btn-sm" onClick={this.QuestInsertCommentArea.bind(this)}><i class="fa fa-comment"></i> Comment</button>
                                    <button type="button" className="btn btn-sm "><i className="fa fa-share"></i> Share</button>
                                </div>
                            </div>
                            <div className="container-comment">
                                {this.state.showCommentList ? this.showComment() : ''}
                            </div>
                            <form>
                                {this.state.show ? this.insertCommentArea() : ''}
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
    
}


