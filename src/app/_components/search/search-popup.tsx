'use client'

import * as React from 'react'
import {test} from 'utils/search-helper'

interface IProps{}
interface IState{
    keyword: string,
    searched: string
}


class BlogSearch extends React.Component<IProps, IState>
{
  constructor(props:IProps)
  {
    super(props);
  
    this.state = {
        keyword: "",
        searched: ""
    }
    this.onClick = this.onClick.bind(this);
    this.onInputChanged = this.onInputChanged.bind(this);

  }
  onInputChanged(e: React.ChangeEvent<HTMLInputElement>) : void 
  {   
    this.setState({keyword: e.target.value});
  };

  onClick(e: React.InputHTMLAttributes<HTMLInputElement>) : void 
  {   
    //const posts = allPosts
    //  .filter((post) => post.title.includes(this.state.keyword))
    //  .reduce((acc, cur)=>{ return acc = acc + cur.title + '\n'; }, "");
    //this.setState({searched: posts});
    
    test();
    //console.log(SearchIndices.search("love"))
  };
  
  render()
  {
    return (
      <div className='tw-left-1/2 -tw-translate-x-1/2 tw-fixed tw-top-nav-height  tw-bg-red-400 '>
        <input className='tw_flex tw-bg-red-300' id='earch-input' name='search-input' type='textbox'           
               onChange={this.onInputChanged}/>
        <input id='search-btn' name='search-btn' type='button'           
               onClick={this.onClick}/>               
        <label className='tw_flex tw-bg-cyan-600'  htmlFor="search-btn">Search</label>  
        <p className='tw_flex tw-bg-blue-600'>{this.state.searched}</p>       
      </div>
    );
  }
}

export default BlogSearch;