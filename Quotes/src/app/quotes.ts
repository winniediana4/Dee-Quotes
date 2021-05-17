export class Quotes {
  showInfo: boolean;
  completeDate: Date | undefined;
  constructor(public id:number, public quote:string, public author:string, public datePosted: Date, public likes: number, public dislikes: number){
      this.showInfo=false;
    }
    number:any;
}