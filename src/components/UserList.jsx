import React, {useState, useMemo} from "react";
import styles from './UserList.module.css';

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
            user.name.toLowerCase().includes(search.toLowerCase())
        )
    }, [search, users]);

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Список користувачів</h2>
            <input type="text" placeholder="Пошук..." value={search} onChange={(e) => setSearch(e.target.value)} className={styles.searchInput} />
            <ul className={styles.list}>
                {filteredUsers.slice(0, 50).map(user => (
                    <li key={user.id} className={styles.listItem}>
                        <span className={styles.username}>{user.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default UserList;