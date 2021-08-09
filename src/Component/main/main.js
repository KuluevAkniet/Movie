 import React from 'react';
 import Search from '../Search/search';
 import Movie from '../Movie/movie';
 import './main.css';
 import axios from 'axios';

 class Main extends React.Component{
    state = {
        movies:[],
        searchInput: "",
        pages:0
    } 
        // componentDidMount(){
        //    axios('https://www.omdbapi.com/?apikey=4ffa7ffa&s=matrix')
        //    .then(({data}) => this.setState({movies:data.Search}));

        // }
        searchMovies = (str,type,page) =>{
            this.setState({loading:true})
            axios(`https://www.omdbapi.com/?apikey=4ffa7ffa&s=${str}${type !== 'all' ?  `&type=${type}`:''}${page !== 0 ? `&page=${page}`:''}`)
            .then(({data}) => this.setState({movies:data.Search,loading:false,total:Math.ceil(data.totalResults)}));
 
        }
    render(){
        return(
            <main className="container content">
              <Search pages={this.state.pages} searchMovies={this.searchMovies}/>
              {this.state.loading 
              
              ? <div class="progress">
              <div class="indeterminate"></div>
         </div>
         :""
        }
          
              
           
              <Movie  movies={this.state.movies}/>
            </main>
        )
    }
}
export default Main;
// this.setState({movie:data.Search})