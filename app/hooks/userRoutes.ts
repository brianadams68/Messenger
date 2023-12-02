import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiChat } from "react-icons/hi";
import { HiArrowLeftOnRectangle, HiUsers } from "react-icons/hi2";
import { signOut } from "next-auth/react"
import useConversation from "./useConversation";

const useRoutes = () => {
    const pathname = usePathname();
    const conversationId = useConversation();

    const routes = useMemo(() => [
        {
            label: 'Chat',
            href: '/conversations',
            icon: 'Hichat',
            active: pathname === '/conversations' || !!conversationId,
        },
        {
            label: 'User',
            href: '/users',
            icon: HiUsers,
            active: pathname === '/Users',

        },
        {
            label: 'Logout',
            href: '#',
            onClick: () => signOut(),
            icon: HiArrowLeftOnRectangle,
        }

    ], [pathname, conversationId]);

    return routes;
};

export default useRoutes;