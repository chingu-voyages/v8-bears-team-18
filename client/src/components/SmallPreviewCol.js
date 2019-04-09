import styled from 'styled-components'

const SmallPreviewCol = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: ${props => props.grid}
`

export default SmallPreviewCol;