import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const referringURL = ctx.req.headers?.referer || null;
    const fbclid = ctx.query.fbclid;

    // Redirect if Facebook is the referrer or request contains fbclid
    if (referringURL?.includes('facebook.com') || fbclid) {
        return {
            redirect: {
                permanent: false,
                destination: 'https://storater.pk', // Add your website URL here
            },
        };
    }
    
    return {
        props: {},
    };
};

interface PostProps {
    imageUrl: string;
}

const Post: React.FC<PostProps> = ({ imageUrl }) => {
    return (
        <>
            <Head>
                <meta property="og:title" content="Title of Your Post" />
                <meta property="og:description" content="Description of Your Post" />
                <meta property="og:type" content="article" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:site_name" content="Your Website Name" />
                <meta property="og:image" content={imageUrl} /> {/* https://scontent.xx.fbcdn.net/v/t1.15752-9/432861005_300963956366525_3155662488465197906_n.png?_nc_cat=1&ccb=1-7&_nc_ohc=Qx4Lx4K39dEAX8drRQd&_nc_oc=AdjVqVkzFormG2QLtOSc-w3fgvNIzvTIvUhHJeww7HQqM0OOX1E3dWE-QhOCXoJZoV4_v93uL40S6uPTHGemx5rQ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&stp=c0.5000x0.5000f_dst-jpg_flffffff_p500x261_q75&ur=567a6d&_nc_sid=7a31ef&oh=03_AdQsujeDmxf4XCPQoQu0IL5d8_ChzGaQ_8zEfbXcsYdo8g&oe=66275A64 */}
                <meta property="og:image:alt" content="Image Alt Text" />
                <title>Title of Your Post</title>
            </Head>
            <div className="post-container">
                {/* Your post content */}
            </div>
        </>
    );
};

export default Post;
