import './Css/Askheader.css'
import React,{useState} from 'react';
import Homeicon from '@material-ui/icons/Home'
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn'
import NotificationsOutlined from '@material-ui/icons/NotificationsOutlined'
import PeopleAltOutlined from '@material-ui/icons/PeopleAltOutlined'
import Search from '@material-ui/icons/Search'
import { Avatar, Button, Input } from '@material-ui/core';
import Modal from 'react-responsive-modal';
import CloseIcon from '@material-ui/icons/Close'
import 'react-responsive-modal/styles.css'
import { ExpandMore } from '@material-ui/icons';
import axios from 'axios'

function Askheader() {
    const [isModalOpen,setIsModalOpen]=useState(false);
    const [inputUrl,setInputUrl]=useState("");
    const [question,setQuestion]=useState("")
    const handleSubmit=async()=>{
            if(question!=="")
            {
                const config={
                        headers:{
                            "Content-Type":"application/json"
                        }
                }
                const body={
                    questionName:question,
                    questionUrl:inputUrl,
                }
                await axios.post('/api/questions',body,config).then((res)=>{
                    console.log(res.data)
                    alert(res.data.message)
                    window.location.href = "/";
                }).catch((e)=>{
                    console.log(e)
                    alert('Error occured')
                })
            }
    }
    const Close=<CloseIcon />;
  return(
  <div className='aHeader'>
    <div className="aHeader-content">
        <div className="aHeader_logo">
            Q&A
        </div>
            <div className="aHeader_icons">
                <div className="aHeader_icon"><Homeicon/></div>
                <div className="aHeader_icon"><FeaturedPlayListIcon/></div>
                <div className="aHeader_icon"><AssignmentTurnedInIcon/></div>
                <div className="aHeader_icon"><NotificationsOutlined/></div>
                <div className="aHeader_icon"><PeopleAltOutlined/></div>
            </div>
            <div className="aHeader_input">
                <Search />
                <input type="text" placeholder="Search Here" />
            </div>
            <div className="aHeader_Rem">
                <Avatar />
            </div>
            <Button onClick={()=>setIsModalOpen(true)}>Ask Question</Button>
            <Modal open={isModalOpen} 
            closeIcon = {Close} 
            onClose={()=>setIsModalOpen(false)} 
            closeOnEsc
            center
            closeOnOverlayClick={false}
            styles={
                {
                    overlay:{
                        height:"auto",
                    }
                }
            }
            >
                <div className='modal__title'>
                    <h5>Add Question</h5>
                    <h5>Share Link</h5>
                </div>
                <div className="modal__info">
                    <Avatar className='avatar'/>
                    <div className='modal__scope'>
                        <PeopleAltOutlined />
                        <p>Public</p>
                        <ExpandMore />
                    </div>
                </div>
                <div className="modal__Field">
                    <Input
                    value={question}
                    onChange={(e)=>setQuestion(e.target.value)}
                    type="text" placeholder="Type Your Question"/>
                    <div styles={{
                        display:"flex",
                        flexdirection:"column"
                    }}>
                        <input type='text'
                        className='modal__fieldLink'
                        value={inputUrl}
                        onChange={(e)=>setInputUrl(e.target.value)}
                        style={{
                            margin:"5px 0",
                            border:"1px solid lightgray",
                            padding:"10px",
                            outline:"2px solid black",
                            width:"100%",
                        }} 
                        placeholder='Incldue link of image if you wish' />
                        {
                        inputUrl !== "" &&<img styles={{
                            height:"40vh",
                            objectFit:"contain",
                        }}
                        src={inputUrl} alt='image'></img>
                        }   
                    </div>
                </div>
                <div className="modal__buttons">
                    <button className='cancle' onClick={()=>setIsModalOpen(false)}>
                        Cancle
                    </button>
                    <button onClick={handleSubmit} type='submit' className='add'>
                        Add Question
                    </button>
                </div>
            </Modal>
    </div>
  </div>
  )
}

export default Askheader;
