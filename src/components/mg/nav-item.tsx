import { SquareArrowOutUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const NavItem: React.FC<{ label: string; href: string }> = ({
  label,
  href,
}) => {
  // 判断 href 是否是外部链接
  const isExternal = href.startsWith("http");
  // href.startsWith("mailto") || // 用于电子邮件链接的前缀，通常用来启动默认的电子邮件客户端并准备发送电子邮件
  // href.startsWith("tel"); // 用于电话号码链接的前缀，通常在移动设备上用来启动拨号器并拨打指定的电话号码

  //   const moreClassName =
  //     "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50";

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer" // 推荐与 target="_blank" 一起使用，以提高安全性
        className="flex gap-1 items-center cursor-pointer hover:text-blue-600 transition-colors duration-200"
      >
        <div>{label}</div>
        <SquareArrowOutUpRight size={9} />
      </a>
    );
  }

  return (
    <Link to={href}>
      <div className="cursor-pointer hover:text-blue-600 transition-colors duration-200">
        {label}
      </div>
    </Link>
  );
};

export default NavItem;
