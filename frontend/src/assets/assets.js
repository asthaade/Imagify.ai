import blackLogo from './blackLogo.png'
import credit_star from './credit_star.svg'
import cross_icon from './cross_icon.svg'
import email_icon from './email_icon.svg'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import lock_icon from './lock_icon.svg'
import logo from './logo.svg'
import logo_icon from './logo_icon.svg'
import newLogo from './newLogo.png'
import profile_icon from './profile_icon.png'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import rating_star from './rating_star.svg'
import sample_img_1 from './sample_img_1.png'
import sample_img_2 from './sample_img_2.png'
import sample_img_3 from './sample_img_3.png'
import sample_img_4 from './sample_img_4.png'
import sample_img_5 from './sample_img_5.png'
import sample_img_6 from './sample_img_6.png'
import star_group from './star_group.png'
import star_icon from './star_icon.svg'
import step_icon_1 from './step_icon_1.svg'
import step_icon_2 from './step_icon_2.svg'
import step_icon_3 from './step_icon_3.svg'
import twitter_icon from './twitter_icon.svg'

export const assets = {
    logo,
    logo_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    star_icon,
    rating_star,
    sample_img_1,
    sample_img_2,
    email_icon,
    lock_icon,
    cross_icon,
    star_group,
    credit_star,
    profile_icon,
    newLogo,
    sample_img_3,
    sample_img_4,
    sample_img_5,
    blackLogo,
    sample_img_6
}

export const stepsData = [
    {
      title: 'Describe Your Vision',
      description: 'Type a phrase, sentence, or paragraph that describes the image you want to create.',
      icon: step_icon_1,
    },
    {
      title: 'Watch the Magic',
      description: 'Our AI-powered engine will transform your text into a high-quality, unique image in seconds.',
      icon: step_icon_2,
    },
    {
      title: 'Download & Share',
      description: 'Instantly download your creation or share it with the world directly from our platform.',
      icon: step_icon_3,
    },
  ];

export const testimonialsData = [
    {
        image:profile_img_1,
        name:'Donald Jackman',
        role:'Graphic Designer',
        stars:5,
        text:`I’ve been using this tool to generate images from text for my social media posts — super easy to use and saves so much time!`
    },
    {
        image:profile_img_2,
        name:'Richard Nelson',
        role:'Content Creator',
        stars:4,
        text:`Perfect for content creators! I use it many times to turn ideas into visuals. The results are always impressive and quick.`
    },
    {
        image:profile_img_1,
        name:'Donald Jackman',
        role:' Graphic Designer',
        stars:5,
        text:`This tool made my design process so much smoother. Just type a few words and get a ready-to-use image — love it!`
    },
]

export const plans = [
    {
      id: 'Basic',
      price: 10,
      credits: 5,
      desc: 'Best for personal use.'
    },
    {
      id: 'Advanced',
      price: 50,
      credits: 25,
      desc: 'Best for business use.'
    },
    {
      id: 'Business',
      price: 250,
      credits: 500,
      desc: 'Best for enterprise use.'
    },
  ]