// pages/protectedRoute.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Loading from '../components/Loading';

const ProtectedRoute = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate authentication check
    const isAuthenticated = true; // Change this with your authentication logic

    // Check if the user is authenticated
    if (!isAuthenticated) {
      // If not authenticated, redirect to login page
      router.push('/login');
    } else {
      // If authenticated, set loading to false after a delay
      setTimeout(() => {
        setLoading(false);
      }, 2000); // Simulating a delay, replace 2000 with actual loading time
    }
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <h1>Protected Content</h1>
          {/* Add your protected content here */}
        </div>
      )}
    </div>
  );
};

export default ProtectedRoute;
