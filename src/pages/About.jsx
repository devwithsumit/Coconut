import React, { useEffect } from 'react'
import ProfileCard from '../components/about/ProfileCard'
import useGithubUser from '../utils/useGithubUser'
import { useProfile } from '../context/ProfileContext';
import axios from 'axios';

const About = () => {


    const usernames = ["devwithsumit"];

    const { profile, setProfile } = useProfile();
    useEffect(() => {
        if (!profile) {
            axios.get("https://api.github.com/users/" + usernames[0])
                .then((response) => {
                    setProfile(response.data);
                })
                .catch((error) => {
                    console.log("Error: " + error.message);
                })
        }

        // runs works after we leave the page
        return () => {
            console.log("Return useffect");
        }
    }, [profile, setProfile])
    return (
        //<UserClass userObj={userObj} />
        <div className='w-full px-5 flex items-center justify-center border-t border-gray-200'>
            <div className="w-full max-w-md p-4 bg-white sm:p-8">
                <h1 className='text-2xl font-semibold text-center mb-3'>Developer Details</h1>
                <ProfileCard userObj={profile} />
            </div>
        </div>

    )
}

export default About
