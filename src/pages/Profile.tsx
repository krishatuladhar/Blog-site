import { useAuth } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import personImage from "../assets/person.jpg";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import api from "../utils/api";
import axios from "axios";

const Profile = () => {
  const { user, setUser } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setUser(null);
  };

  const { mutate, isPending } = useMutation({
    mutationFn: () => api.patch(`/user/${user?.id}/upgrade-role`),
    onSuccess: (res) => {
      // Update the user in context with new role
      setUser(res.data.user);
      toast.success("You are now an author!");
    },
    onError: (err: unknown) => {
      let message = "Failed to upgrade role";
      if (axios.isAxiosError(err)) {
        message = err.response?.data?.message || message;
      }
      toast.error(message);
    },
  });

  // Call this on the button click
  const handleUpgrade = () => {
    mutate();
  };

  return (
    <div className="min-h-screen bg-[#FFF4EA]/40 flex items-center justify-center ">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl p-12 text-center">
        {/* Avatar */}
        <img
          src={personImage}
          alt="avatar"
          className="h-18 w-18 mx-auto rounded-full object-cover ring-4 ring-[#FFF4EA]"
        />

        {/* Identity */}
        <h2 className="mt-4 text-3xl font-semibold font-primary">
          {user?.name}
        </h2>
        <p className="text-gray-500 mt-1">{user?.email}</p>

        <p className="text-gray-400 text-sm mt-2font-secondary max-w-md mx-auto">
          Welcome back — this is your personal space where your stories begin.
        </p>

        {/* Divider */}
        <div className="my-5 h-px bg-gray-200" />

        {/* Primary actions */}
        <div className="flex flex-wrap justify-center gap-2">
          <Link
            to="/profile/edit"
            className="px-6 py-3 rounded-full bg-[#FFF4EA] hover:bg-pink-300 transition font-medium"
          >
            Edit profile
          </Link>

          <button
            onClick={handleLogout}
            className="px-6 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition font-medium"
          >
            Logout
          </button>
        </div>

        {/* Author CTA (inline, subtle) */}
        {user?.role !== "author" && (
          <>
            <div className="my-8 h-px bg-gray-200" />

            <h3 className="text-xl font-semibold font-primary">
              Want to write stories?
            </h3>
            <p className="text-gray-500 text-sm mt-2 font-secondary max-w-md mx-auto">
              Become an author and share your ideas, experiences, and insights
              with readers around the world.
            </p>

            <button
              onClick={handleUpgrade}
              disabled={isPending}
              className="inline-block mt-6 px-8 py-4 rounded-full bg-[#FFEEE3] hover:bg-blue-600 text-black font-medium transition"
            >
              Become an author
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
