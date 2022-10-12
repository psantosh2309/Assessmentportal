import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private httpclient:HttpClient) { }

  private baseurl =      "http://localhost:8080/api/v1/Users";
  private loginbaseurl = "http://localhost:8080/api/v1/login";
  private SkillTestbaseurl = "http://localhost:8080/api/v1/Assessment";
  private SkillLangbaseurl = "http://localhost:8080/api/v1/SkillLanguage";
  private QuestionType = "http://localhost:8080/api/v1/Question";



  CreateUser(data:any)
  {
  console.log(data);
  return this.httpclient.post<any>(`${this.baseurl}`,data);
  }

  GetUser(getdata:any)
  {
 
  return this.httpclient.post<any>(`${this.loginbaseurl}`,getdata);
  }

  SaveSkillTest(data:any)
  {
  
  return this.httpclient.post<any>(`${this.SkillTestbaseurl}`,data);
  }

  GetSkillTest()
  {
  
  return this.httpclient.get<any>(`${this.SkillTestbaseurl}`);
  }

  GetSkilllang()
  {
  
  return this.httpclient.get<any>(`${this.SkillLangbaseurl}`);
  }

  updateSkillTest(id:any)
  {
  
  return this.httpclient.get<any>(`${this.SkillTestbaseurl}/${id}`);
  }


  updateMethod(id:any,data:any)
  {
    console.log(id);
    console.log(data);
    return this.httpclient.put<any>(`${this.SkillTestbaseurl}/${id}`,data);
  }

  deleteskillset(id:any){
    return this.httpclient.delete<any>(`${this.SkillTestbaseurl}/${id}`);

  }

  SaveQuestion(data:any){
    console.log(this.QuestionType);
    return this.httpclient.post<any>(`${this.QuestionType}`,data);

  }

  









}
