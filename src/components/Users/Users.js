import UsersComponent from "./UsersComponent";

const Users = ({users}) => {
    return (
        <div>
            {
                users.map(value => <UsersComponent key={value.id}
                                                   user={value}/>)
            }
        </div>
    );
};

export default Users;