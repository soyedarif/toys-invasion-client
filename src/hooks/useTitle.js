import { useEffect } from "react";

const useTitle = title => {
  useEffect(() => {
    document.title=`T-Invasion-${title}`;
  }, [title]);
};

export default useTitle;