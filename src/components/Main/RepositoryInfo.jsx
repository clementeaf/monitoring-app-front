/* eslint-disable react/prop-types */
import { monthName } from "../../config"
import { useNavigate } from "react-router-dom";
import { useLayoutEffect, useMemo, useState } from "react";
import { format } from "date-fns";
import useRepoInfoQuery from '../../hooks/useRepoInfoQuery';

export default function RepositoryInfo() {
  const { isError, data: commitsData } = useRepoInfoQuery();
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
  if (isLoading) return <RepositoryInfoLoading />

  const { created_at, default_branch, forks, name } = memoizedData;
  const date = format(new Date(created_at), "dd/MM/yyyy HH:mm");
  const parts = date.split(/[/ :]/);
  const day = parts[0] || "N/A";
  const month = parts[1] ? monthName[parts[1]] : "N/A";
  const year = parts[2] || "N/A";

  return (
    <div className="flex w-full flex-col items-center justify-center py-6">
      <div className="flex flex-col items-center gap-3">
        <p>Repository Info</p>
        <div className="flex flex-col w-full p-4 border items-start justify-between border-black/20 rounded-lg">
          <div className="flex w-full gap-7 justify-between items-start border-b border-black/10 pb-3">
            <div className="flex flex-col items-start">
              <p className="text-sm font-medium">Created At</p>
              <p className="text-xs">{day}</p>
              <p className="text-xs">{month}</p>
              <p className="text-xs">{year}</p>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-sm font-medium">Project Name</p>
              <p className="text-base capitalize">{name}</p>
            </div>
          </div>
          <div className="flex flex-col w-full justify-between items-start pt-3">
            <p className="text-sm">Default Branch: {default_branch}</p>
            <p className="text-xs">Forks: {forks}</p>
          </div>
        </div>
        <button className="px-8 py-2 border border-black/30 text-black/60 hover:text-black/80 rounded-md mt-2" onClick={() => navigate("/repositoryInfo")}>More info</button>
      </div>
    </div>
  )
}


function RepositoryInfoLoading() {
  return (
  <div className="flex w-full flex-col items-center justify-center py-6">
      <div className="flex flex-col items-center gap-3">
        <p className="h-[21px] w-[120px] bg-gray-400/60 rounded-md" />
        <div className="flex flex-col w-full p-4 border items-start justify-between border-black/20 rounded-lg">
          <div className="flex w-full gap-7 justify-between items-start border-b border-black/10 pb-3">
            <div className="flex flex-col items-start gap-1">
              <p className="h-[15px] w-[60px] bg-gray-400/60 rounded-md" />
              <p className="h-[13px] w-[35px] bg-gray-400/60 rounded-md" />
              <p className="h-[13px] w-[35px] bg-gray-400/60 rounded-md" />
              <p className="h-[13px] w-[35px] bg-gray-400/60 rounded-md" />
            </div>
            <div className="flex flex-col items-start gap-1">
              <p className="h-[15px] w-[70px] bg-gray-400/60 rounded-md" />
              <p className="h-[15px] w-[40px] bg-gray-400/60 rounded-md" />
            </div>
          </div>
          <div className="flex flex-col w-full justify-between items-start pt-3 gap-2">
            <div className="h-[15px] w-[130px] bg-gray-400/60 rounded-md" />
            <div className="h-[15px] w-[200px] bg-gray-400/60 rounded-md" />
          </div>
        </div>
        <div className="h-[38px] mt-3 w-[200px] bg-gray-400/60 rounded-md" />
      </div>
    </div>
  )
}