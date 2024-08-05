import { createContext, useState, ReactNode } from "react";
import blogData from "./../data/blogData.json";

interface BlogItem {
  title: string;
  author: string;
  date: string;
  content: string;
}

interface ContextProviderProps {
  children: ReactNode;
}

interface ContextType {
  currentBlog: BlogItem[];
  setCurrentBlog: (data: BlogItem[]) => void;
}

export const Context = createContext<ContextType>({} as ContextType);

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [currentBlog, setCurrentBlog] = useState<BlogItem[]>(blogData);

  return (
    <Context.Provider
      value={{
        currentBlog,
        setCurrentBlog,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
