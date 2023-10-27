/* eslint-disable react/prop-types */
import { monthName } from "../../config"
import { useNavigate } from "react-router-dom";
import useCommitsQuery from '../../hooks/useCommitsQuery';
import { useLayoutEffect, useMemo, useState } from "react";
import { format } from "date-fns";

export default function CommitsInfo() {
  const { isError, data: commitsData } = useCommitsQuery();
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    if (commitsData) {
      setData(commitsData);
      setIsLoading(false);
    }
  }, [commitsData]);

  const memoizedData = useMemo(() => data, [data]);

  if (isError) return <div>Error</div>
  if (isLoading) return <CommitsInfoLoading />

  const {author, message} = memoizedData.at(length).commit;
  const date = format(new Date(author.date), "dd/MM/yyyy HH:mm");
  
  const parts = date.split(/[/ :]/);
  const day = parts.at(0)
  const month = monthName[parts.at(1)];
  const year = parts.at(2);
  const hour = parts.at(3);
  const minutes = parts.at(4);

  return (
    <div className="flex w-full flex-col items-center justify-center py-6 ">
        <div className="flex flex-col items-center gap-3">
          <p>Last Commit</p>
          <div className="flex flex-col p-4 border border-black/20 rounded-lg">
            <div className="flex w-full justify-between items-center pb-4 border-b border-black/20 mb-2">
              <div className="flex flex-col items-start justify-start">
                <p className="text-base font-semibold">{day}</p>
                <p className="text-xs">{month}</p>
                <p className="text-xs">{year}</p>
              </div>
              <div className="flex flex-col items-start">
                <p className="text-sm">Commit #{memoizedData.length}</p>
                <p className="text-xs">{hour}:{minutes}</p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-1 mt-2">
              <p className="text-sm">Commit Message:</p>
              <p className="text-xs">{message}</p>
            </div>
          </div>
          
          <button className="px-8 py-2 border border-black/30 text-black/60 hover:text-black/80 rounded-md mt-2" onClick={() => navigate("/commits")}>View previous commits</button>
        </div>
    </div>
  )
}

function CommitsInfoLoading() {
  return (
    <div className="flex w-full flex-col items-center justify-center py-6 ">
    <div className="flex flex-col items-center gap-3">
    <p className="h-[21px] w-[120px] bg-gray-400/60 rounded-md" />
      <div className="flex flex-col p-4 border border-black/20 rounded-lg">
        <div className="flex w-full gap-[100px] items-center pb-4 border-b border-black/20 mb-2">
          <div className="flex flex-col items-start justify-start gap-1">
            <div className="h-[15px] w-[60px] bg-gray-400/60 rounded-md" />
            <div className="h-[13px] w-[35px] bg-gray-400/60 rounded-md" />
            <div className="h-[13px] w-[35px] bg-gray-400/60 rounded-md" />
          </div>
          <div className="flex flex-col items-start gap-1">
            <div className="h-[15px] w-[70px] bg-gray-400/60 rounded-md" />
            <div className="h-[15px] w-[40px] bg-gray-400/60 rounded-md" />
          </div>
        </div>
        <div className="flex flex-col items-start gap-2 mt-2">
        <div className="h-[15px] w-[130px] bg-gray-400/60 rounded-md" />
          <div className="h-[15px] w-[200px] bg-gray-400/60 rounded-md" />
        </div>
      </div>
      <div className="h-[38px] mt-3 w-[200px] bg-gray-400/60 rounded-md" />
    </div>
</div>
  )
}