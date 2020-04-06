import {React} from './ReactDeps.ts'
const cardStyle  = {
    width : '100px',
    height: '100px',
    background : '#BDBDBD',
    color : '#212121',
    fontSize : '30px',
    textAlign : 'center'
}
const Card = ({text}) => {
    return <div style = {cardStyle}>{text}</div>
}

export default Card
