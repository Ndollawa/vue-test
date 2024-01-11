
interface ILink {
id:number | string;
  path:string;
  name:string;
  icon?:any;
  active?:boolean;
  children?:Ilink[];
}

export const links:Link[] = [
   // {
//  id:1,
//   path:"/",
//   name:"home",
//   icon:null,
// //   active:true
// },
    {
 id:2,
  path:"/projects",
  name:"Projects",
  icon:null,
//   active:true
},
    {
 id:3,
  path:"/",//app-and-apps
  name:"Tools and Apps",
  icon:null,
  children:[{
     id:1,
  path:"/",
  name:"home",
  icon:null,
//   active:true
},
{ id:1,
  path:"/",
  name:"home",
  icon:null,
//   active:true
},
  ]
//   active:true
},
    {
 id:4,
  path:"/channels",
  name:"Channels",
  icon:null,
//   active:true
},
    {
 id:5,
  path:"/contact",
  name:"Contact",
  icon:null,
//   active:true
},
    {
 id:6,
  path:"/analytics",
  name:"Analytics",
  icon:null,
//   active:true
},
    {
 id:7,
  path:"/settings",
  name:"Settings",
  icon:null,
//   active:true
},
    {
 id:8,
  path:"/help",
  name:"Help",
  icon:null,
//   active:true
},
]



 

