import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function UserList() {
    const [userList, setUserList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [fetchError, setFetchError] = useState(null);

    useEffect(() => {
        // دریافت اطلاعات 
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            if (!res.ok) throw new Error("خطا در دریافت اطلاعات ");
            return res.json();
        })
        .then((data) => setUserList(data))
        .catch((err) => setFetchError(err.message))
        .finally(() => setIsLoading(false));
    }, []);

    // مدیریت خطا و loading
    if (isLoading)
        return <p className="text-blue-500 text-center mt-10">... در حال بارگذاری کاربران </p>;
    if (fetchError)
        return <p className="text-red-500 text-center mt-10">{fetchError}</p>;

    // نمایش اطلاعات
    return (
        <div className="max-w-xl mx-auto mt-10 p-5 bg-white shadow rounded">
            <h1 className="text-2xl font-bold mb-5 text-center">کاربر ها </h1>
            <ul className="space-y-3">
                {userList.map((user) => (
                <li
                    key={user.id}
                    className="p-3 border rounded hover:bg-blue-50 transition cursor-pointer"
                >
                    <Link to={`/user/${user.id}`} className="block">
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-gray-500 text-sm">{user.email}</p>
                    </Link>
                </li>
                ))}
            </ul>
        </div>
    );
}
