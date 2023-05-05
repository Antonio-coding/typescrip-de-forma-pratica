import React from "react";

interface IUser {
  name: string;
  email?: string;
}

interface props {
  user: IUser;
} 

const User: React.FC<Props> = ({ user}) => {
  return (
    <div>
      <strong>Nome: </strong> {User.name} <br />
      <strong>E-mail: </strong> {User.email || 'Não possui e-mail'} <br />
      <br />
    </div>
  );
};




    export default User;