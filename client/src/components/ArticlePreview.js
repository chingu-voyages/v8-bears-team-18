import React from "react";
import styled from 'styled-components'
import ArticleThumbnail from './ArticleThumbnail'


export default function ArticlePreview(props) {
    const Preview = styled.div`
        display: flex;
        width: 100%;
        margin: 0.5em 0em;
        flex-direction: ${props.big ? "column" : "row"};
        grid-area: ${props.grid};
        h1 {
            font-size: ${props.big ? "1.5em" : "1em"};
            margin: .3em 0;
        }
        h5 {
            font-size: ${props.big ? '1em' : '.7em'};
            font-weight: 500;
            margin: .5em 0;
        }
        p {
            font-size: 0.8em;
            color: gray;
            margin: .1em 0;
        }
    `;

  return (
    <Preview>
        <ArticleThumbnail 
            height={ props.big ? '150px' : '100px' } 
            width={ props.big ? '98%' : '100px'}
        />
        <div>
            <h1>Title of Article</h1>
            <p>Short one sentence description of the article that shows some info.</p>
            <h5>John Doe in Politics</h5>
            <p>{props.publishdate} - {props.minutes} min read</p>
        </div>
    </Preview>
  )
}
