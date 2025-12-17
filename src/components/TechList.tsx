import type { ReactElement } from "react";
import { SiTypescript, SiReact, SiCreatereactapp, SiShopify, SiElectron } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";


interface Tech {
  Icon: ReactElement,
  label: string,
}

const technologies: Tech[] = [
  {
    Icon: <IoLogoJavascript size={34}/>,
    label: 'JavaScript'
  },
  {
    Icon: <SiTypescript size={34} />,
    label: 'TypeScript'
  },
  {
    Icon: <SiReact size={34} />,
    label: 'React'
  },
  {
    Icon: <SiShopify size={34} />,
    label: 'Shopify'
  },
  {
    Icon: <SiCreatereactapp size={34} />,
    label: 'ReactNative'
  },
  {
    Icon: <SiElectron size={34} />,
    label: 'Electron'
  }
];

const TechList = () => {
  return (
    <div className="flex flex-wrap gap-6">
      { technologies.map(({ Icon }: Tech) => (
        <span className="
          text-black
          dark:text-white
        ">{Icon}</span>
      ))}
    </div>
  )
}

export default TechList;
