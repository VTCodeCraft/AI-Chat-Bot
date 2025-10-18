import projectModel from "../models/project.model.js";


export const createProject = async  ({
         name,userID
}) => {
         if(!name){
                  throw new Error('Project name is required');
         }
         if(!userID){
                  throw new Error('User ID is required to create project');
         }

         const project = await projectModel.create({
                  name,
                  users: [userID],
         });

         return project;
}