import React from 'react';
import './search.css';

class search extends React.Component{
    state={
        searchInput: "",
        type:'all',
        page:0
    }

    clickBtn = () =>{
        this.props.searchMovies(this.setState.searchInput,this.state.type)
    }
    ketDown = (e) =>{
        if(e.key === "Enter"){
            this.props.searchMovies(this.setState.searchInput,this.state.type) 
        }
 
    }
    changeType = (e) =>{
      this.setState(() =>({type:e.target.dataset.type}),() =>{
        this.props.searchMovies(this.state.searchInput,this.state.type)
      })
   
    };
    render() { 
    return (
        <div class="row">
          <div class="input-field">
            <input value={this.state.searchInput} placeholder="Search"  type="search" class="validate" onChange={(e) => this.setState({searchInput:e.target.value})}/>
            <button  type='button' className="btn" onClick={this.clickBtn}>Search</button>
          </div>
        <div className="radio-btns">

            <label>
              <input class="with-gap"
               name="group3" type="radio" 
               data-type="all"  
               onChange={this.changeType} 
               checked={this.state.type === 'all'} />
                 <span>Все</span>
             </label>

             <label>
                <input 
                class="with-gap" 
                name="group3" 
                type="radio"
                 data-type="movies"  
                 onChange={this.changeType} 
                 checked={this.state.type === 'movies'}/>
                 <span>Фильмы</span>
              </label>

              <label>
                 <input 
                 class="with-gap" 
                 name="group3" type="radio"  
                 data-type="series"  
                 onChange={this.changeType} 
                 checked={this.state.type === 'series'}/>
               <span>Сериалы</span>
               </label>

              <label>
                 <input 
                 class="with-gap" 
                 name="group3" type="radio" 
                 data-type="games"  
                 onChange={this.changeType}
                 checked={this.state.type === 'games'} 
                 />
                 <span>Игры</span>
               </label>
        </div>
       {this.props.pages}
    </div>


      
    );
  }
};

export default search;