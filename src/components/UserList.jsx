import React, {useState, useMemo} from "react";

const generateUsers = () => {
    const users = [];
    for (let i=0; i<10000; i++) {
        users.push({id: i, name: `Користувач ${i}`})
    }
    return users
};

const UserList = () => {
    const [search, setSearch] = useState('');
    const [users] = useState(generateUsers);

    const filteredUsers = useMemo(() => {
        console.log('Виконується фільтрація користувачів...');
        return users.filter(user =>
            user.name.toLowerCase().includes(search.toLocaleLowerCase())
        )
    }, [search, users]);

    return (
        <div>
            <h2>Список користувачів</h2>
            <input type="text" placeholder="Пошук..." value={search} onChange={(e) => setSearch(e.target.value)} />
            <ul>
                {filteredUsers.slice(0, 50).map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
};

export default UserList;