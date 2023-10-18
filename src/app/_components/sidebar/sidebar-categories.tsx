import Link from "nextwrap/link"
import CategoryItem from "./sidebar-category-item"

import {postDirectories, PostDirectory} from 'utils/content-helper'

import style from "./sidebar.module.scss"


function MakeCategoryView(category : PostDirectory, slug: string = '', depth : number = 0)
{
  slug += '/' + category.category;

  const subviews = Object.values(category.childs)
                    .filter(sub=> Object.keys(sub.childs).length > 0)
                    .map(sub => MakeCategoryView(sub, slug, depth + 1));

  return (
    <CategoryItem key={slug} slug={slug} label={category.category.toUpperCase()} refCount={category.count} depth={depth}>
      {subviews.length > 0 ? subviews : <></>}
    </CategoryItem>
  );
  return (
    <div key={`${slug}`}>
      <div className={style["category-item-" + depth]}>        
        <Link href={`${slug}`}>
          {`${category.category}(${category.count})`}
        </Link>
      </div>
      { subviews.length > 0 && <div>{subviews}</div> }    
    </div>
  );
}

export default () => {  
  const categories = postDirectories;

  return (
    <div>
      { Object.values(categories).map(sub => MakeCategoryView(sub)) }
    </div>   
  );
};