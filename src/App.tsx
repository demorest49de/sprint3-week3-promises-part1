import React from 'react';
import './App.css';
import './index.Module'

type UserPropsType = {
    id: number, name: string, friendID: number,
}

function App() {

    var findUserInDB = (id: number) => {
        const users =
            [
                {id: 1, name: 'Dimych', friendID: 3,},
                {id: 2, name: 'Sveta', friendID: null},
                {id: 3, name: 'VALERA', friendID: 2},
            ]
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                const user = users.find(user => user.id === id)
                if (user) {
                    resolve(user)
                } else {
                    reject('User not found')
                }
            }, 2000)
        })
        return promise;
    }
    const pr = findUserInDB(1)
    pr.then((user) => {
        const tUser = user as UserPropsType
        console.log(tUser.name)
    })
    return (
        <div>
            {/*{value}*/}
        </div>
    );
}

export default App;
