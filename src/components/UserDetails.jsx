import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function UserDetails() {
    const { id } = useParams();
    const [userDetails, setUserDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [fetchError, setFetchError] = useState(null);

    useEffect(() => {
       // دریافت اطلاعات 
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
            if (!res.ok) throw new Error("خطا در دریافت اطلاعات ");
            return res.json();
        })
        .then((data) => setUserDetails(data))
        .catch((err) => setFetchError(err.message))
        .finally(() => setIsLoading(false));
    }, [id]);

 // مدیریت خطا و loading
    if (isLoading)
        return <p className="text-blue-500 text-center mt-10">در حال بارگذاری جزئیات کاربر...  </p>;
    if (fetchError)
        return <p className="text-red-500 text-center mt-10">{fetchError}</p>;
    if (!userDetails)
        return <p className="text-center mt-10"> کاربری پیدا نشد </p>;

  // نمایش اطلاعات
    return (
        <div className="max-w-xl mx-auto mt-10 p-5 bg-white shadow rounded">
            <h1 className="text-2xl font-bold mb-5 text-center">{userDetails.name}</h1>

            <p><strong>ایمیل:</strong> {userDetails.email}</p>
            <p><strong>تلفن:</strong> {userDetails.phone}</p>
            <p><strong>وب‌سایت:</strong> {userDetails.website}</p>
            <p><strong>شرکت:</strong> {userDetails.company.name}</p>
            <p>
                <strong>آدرس:</strong> {userDetails.address.street}, {userDetails.address.city}
            </p>

            <Link 
                to="/" 
                className="inline-block mt-5 text-blue-500 hover:underline"
            >
                بازگشت به لیست کاربران 
            </Link>
        </div>
    );
}
