import React from 'react';
import './App.css';
import './index.Module'

type UserPropsType = {
    id: number, name: string, friendID: number | null,
}

function App() {
findUserInDB(1)
    function findUserInDB  (id: number) {
        const users =
            [
                {id: 1, name: 'Dimych', friendID: 3,},
                {id: 2, name: 'Sveta', friendID: null},
                {id: 3, name: 'VALERA', friendID: 2},
            ]
        const promise: Promise<UserPropsType> = new Promise((resolve, reject) => {
            setTimeout(() => {
                const user: UserPropsType | undefined = users.find(user => user.id === id)
                if (user) {
                    resolve(user)
                } else {
                    reject('User not found')
                }
            }, 2000)
        })
        return promise;
    }
    const pr: Promise<UserPropsType> = findUserInDB(1)
    pr.then((user) => {
        // const tUser = user as UserPropsType
        // console.log(tUser.name)
        console.log(user.name)
    })
    return (
        <div>
            {/*{value}*/}
        </div>
    );
}

export default App;
