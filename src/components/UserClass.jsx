import axios from "axios";
import React from "react"

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userObj: {
                name: 'No Name',
                location: 'Location',
                contact: 'example@email.com',
                avatar_url: 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg',
            },
        }
    }
    async componentDidMount() {
        const { username } = this.props;
        // console.log("DidMount User: " + this.state.userObj.name);
        try {
            const response = await axios.get("https://api.github.com/users/" + username);
            console.log(response.data);
            this.setState({
                userObj : response.data,
            })
        } catch (error) {
            console.log("Error: ", error.message);
        }
    }
    componentDidUpdate(){
        //called on every update of component
        console.log("Component Updata");
    }
    componentWillUnmount(){
        //usually called when the component is leaving the page of that component.
        console.log("Component Unmount")
    }
    render() {
        const { userObj } = this.state;
        return (
            <div>
                <div className="flex items-center">
                    <div className="shrink-0">
                        <img className="w-8 h-8 rounded-full" src={`` + userObj.avatar_url} alt={userObj.name} />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate">
                            {userObj.login}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {userObj.contact}
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900">
                        {userObj.location}
                    </div>
                </div>
            </div>
        )
    }
}
export default UserClass;