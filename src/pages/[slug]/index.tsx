import { useRouter } from "next/router";
import { Fragment, useContext, useEffect } from "react";
import ProfileContext from "../../Provider/Context";
import { default as ProfileTemplate } from '../../template/Profile';

const Profile = () => {
    const router = useRouter();
    const { slug } = router.query;
    
    const [{ profile, setSlug }, loading] = useContext(ProfileContext);

    useEffect(() => {
        if(!loading) {
            setSlug(slug);
        }
    }, [loading]);

    useEffect(() => {
        console.log('PROFILE: ', profile)
    }, [profile])
    return <ProfileTemplate />
}

export default Profile;
