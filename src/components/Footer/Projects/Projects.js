import React, {useState, useEffect} from "react";
import {Grid, Box, Typography, CircularProgress} from '@material-ui/core'
import Project from "./Project/Project";
import content from "../../../constants/content";
import {makeStyles} from "@material-ui/core/styles";
import Axios from "axios";


const Projects = props => {
    const classes = useStyles()
    const [projects, setProjects] = useState([])

    useEffect(()=>{
        console.log('entered')
        const getTeachers = async()=>{
            try{
                const projectsResponse = await Axios.get('https://reqres.in/api/users?page=2')
                setProjects(projectsResponse.data.data.slice(0,2))
                console.log(projectsResponse)
            }
            catch(err){
                alert("Couldnt load teachers");
                console.log(err)
            }
        }
        getTeachers()
    },[])


    return(
        <Grid container className={classes.container}>
            <Grid item xs={12}>
                <Typography variant='h5' className={classes.title}>
                    Recent Projects
                </Typography>
                {(projects.length===0)?<CircularProgress color="secondary"/>:
                    projects.map((project)=>{return(
                        <Box style={{marginTop: '4vh'}} key={project.email}>
                            <Project
                                image={project.avatar}
                                title={project.first_name}
                                category={project.email}
                            />
                        </Box>)
                    })
                }


            </Grid>
        </Grid>
    );
}

const useStyles = makeStyles((theme) => ({
   container: {
       paddingLeft: 25
   },
    title: {
       color: 'white',
        fontWeight: 'bold'
    }
}))

export default Projects;
