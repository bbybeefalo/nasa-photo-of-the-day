function Photo(props) {
return (
    <div className="App-img">
        <img src= {props.photoURL} alt='nasa potd, per description'/>
    </div>
 )
}

export default Photo