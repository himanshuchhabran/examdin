import React from 'react'
import {frame_image} from "../assets/frame_image.png"

const Template = (props) => {
  return ( 
    <div>
        <div>
        <h1>{props.title}</h1>

        <p>
            <span>{props.desc1}</span>
            <span>{props.desc2}</span>

        </p>

        {props.formtype=="signup"?(<SignupForm/>):(<LoginForm/>)}

        <div>
            <div></div>
            <p>OR</p>
            <div></div>
        </div>

        <button>Sign Up With Google</button>
        </div>  

        <div>
            <img src={frame_image} alt="frame_image" width={558} height={504} loading ="lazy"/>

            <img src={props.image} alt="student" width={558} height={490} loading ="lazy"/>
        </div>

        
        
         
    </div>
  )
}

export default Template;
