import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner'
import PropTypes from 'prop-types';

export default class News extends Component {

  static defaulProps = {
    country: 'in',
    pageSize: 6,
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string

  }
    capitalize = (string) =>{

    return string.charAt(0).toUpperCase() + string.slice(1);

      
  }
  
    constructor(props){
      super(props);
      this.state = {article: [], 
      loading: false, page:1 }
      document.title =  `${this.capitalize(this.props.category)}`
    }

   

    


    //"https://newsapi.org/v2/top-headlines?country=in&category={this.props.category}&apiKey=7f8fcfb7089a47e2b78bdc511aeb593f";

    //async componentDidMount(){ 
      //let url = "https://newsapi.org/v2/top-headlines?country=in&category={this.props.category}&apiKey=7f8fcfb7089a47e2b78bdc511aeb593f";
      //let data = await fetch(url);
      //let parsedData = await data.json()
     // console.log(parsedData); 
     // this.setState({article: parsedData.articles})
 // }

 async componentDidMount(){
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7f8fcfb7089a47e2b78bdc511aeb593f&page=1&pagesize=${this.props.pageSize}`;
  console.log(url)
  let data = await fetch(url);
  let parsedData = await data.json()
  console.log(parsedData);
  this.setState({article:parsedData.articles, totalResults: parsedData.totalResults })
 }

 slectPreviousPage = async ()=>{
  console.log("previous")

  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7f8fcfb7089a47e2b78bdc511aeb593f&page=${this.state.page -1}&pagesize=${this.props.pageSize}`;
  this.setState({loading: true})
  let data = await fetch(url);
  let parsedData = await data.json()
  console.log(parsedData);
  this.setState({page: this.state.page -1,
    article:parsedData.articles, loading: false })


 }

 selectNextPage = async ()=>{

  

  if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/6))){

  
  console.log("next")

  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7f8fcfb7089a47e2b78bdc511aeb593f&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
  this.setState({loading: true})
  let data = await fetch(url);
  let parsedData = await data.json()
  
  this.setState({page: this.state.page + 1,
    article:parsedData.articles, loading:false })
  }



 }

 

    
  render() {
    
    return (
      <div>
        <div className="container ">
        <h1 className='my-5 text-center'>Update Mania - Top Headlines - {`${this.capitalize(this.props.category)}`}</h1>
        {this.state.loading &&<Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.article.map((Element)=>{ 

          return    <div className="col-md-4" key={Element.url}>       
          <NewsItems title={Element.title?Element.title.slice(0,45): ""}  description={Element.description?Element.description.slice(0,88):""} imageurl={Element.urlToImage}  newsurl = {Element.url} author={Element.author} date={Element.publishedAt}
          source={Element.source.name}/>
          </div>
          

          })}
          
       
        </div>
        </div>
        <div className="contain  d-flex justify-content-around" >
        <button type="button" className="btn btn-dark btn-lg" disabled={this.state.page <= 1 } onClick={this.slectPreviousPage}> &larr;Previous</button>
        <button type="button" className="btn btn-dark btn-lg" disabled ={this.state.page + 1 > Math.ceil(this.state.totalResults/6)}onClick={this.selectNextPage}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}
