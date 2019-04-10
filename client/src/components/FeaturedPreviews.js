import React from 'react'
import styled from 'styled-components'
import ArticlePreview from './ArticlePreview'
import SmallPreviewCol from './SmallPreviewCol'

const PreviewsContainer = styled.section`
    display: grid;
    max-width: 1200px;
    grid-template-columns: 3fr 2fr 2fr;
    grid-gap: .5em;
    padding: .6em;
    grid-template-areas: 
        "a b c";
    @media (max-width: 1100px) {
        grid-template-columns: 1fr;
        grid-template-areas:
        "a"
        "b"
        "c";
    }
`

export default function FeaturedPreviews() {
  return (
    <PreviewsContainer>
      <ArticlePreview big grid="a" publishdate="Apr 2" minutes="5" />
      <SmallPreviewCol grid="b">
        <ArticlePreview small publishdate="Apr 2" minutes="5" />
        <ArticlePreview small publishdate="Apr 2" minutes="5" />
        <ArticlePreview small publishdate="Apr 2" minutes="5" />
      </SmallPreviewCol>
      <ArticlePreview big grid="c" publishdate="Apr 2" minutes="5" />
    </PreviewsContainer>
  );
}


