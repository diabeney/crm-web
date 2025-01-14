import { useState } from "react";
import useEndpoints from "../services/api";
import { NavbarProps, userProfile } from "../types/type";
import { useQuery } from "react-query";
import { RiUserLine } from "react-icons/ri";
import AccountMenu from "./account-menu";
import useLogout from "../hooks/useLogout";
import { Link } from "react-router-dom";

function Navbar({ setIsOpen, isOpen }: NavbarProps) {
  const logout = useLogout();
  const { getUserProfile } = useEndpoints();
  const [user, setUser] = useState<undefined | userProfile>();
  const query = useQuery({
    queryKey: ["userProfile"],
    queryFn: getUserProfile,
    onSuccess(res) {
      setUser(res.data);
    },
  });

  return (
    <div className="w-full bg-[#ffffff] dark:bg-[#0202022f] backdrop-saturate-200 dark:text-st-gray200 lg:sticky z-50 top-0 h-20 backdrop-blur-sm px-4 py-4 flex justify-between items-start border-b-solid border-b-[#cecece73] border-b-[1px]">
      <Link to={"/"}>
        <button className="bg-secondary p-2 mx-auto rounded-sm text-white">
          <h1 className="font-bold text-xl">ST</h1>
        </button>
      </Link>
      <div className="flex gap-8 items-center px-4">
        <Link
          to={"/techies"}
          className="flex items-center gap-2 border-[1px] border-st-gray200 p-2 rounded-3xl "
        >
          <RiUserLine className=" inline-block my-auto" /> Techies
        </Link>
        <section className="flex gap-4 items-center px-4 justify-center">
          <div className="flex items-center gap-2 sm:gap-4 lg:w-[300px]">
            {query.isSuccess && (
              <>
                <h2 className="flex justify-end shrink-0 dark:text-primary font-bold text-lg w-[100px] lg:w-[220px] sm:text-xl text-secondary">
                  Welcome {user && user.first_name}!
                </h2>
                <AccountMenu
                  items={[
                    {
                      type: "link",
                      link: "/profile",
                      value: "Profile",
                    },
                    {
                      type: "button",
                      value: "Logout",
                      onClick() {
                        logout();
                      },
                    },
                  ]}
                />
              </>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Navbar;
