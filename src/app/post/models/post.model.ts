import { usermodel } from "../../profile/models/user.model";

export class postmodel{
    postId : string;
    userId : string;
    postTitle: string;
    postBody: string;
    likeCount: number;
    commentCount:number;
    user :usermodel;    
}