import connect from "react-redux";

const Chat = ({ user }) => {
    return ( 
        <div>
            
        </div>
     );
}

const mapStateToProps = (state) => ({
    user: state.user
})

 
export default connect(mapStateToProps)(Chat);