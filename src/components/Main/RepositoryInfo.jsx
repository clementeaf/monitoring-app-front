/* eslint-disable camelcase */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import React, { useLayoutEffect, useMemo, useState } from 'react';
import formatCustomDate from '../../utils';
import { useRepoInfoStore } from '../../context/RepoInfoContext';

export default function RepositoryInfo() {
  const { isError, data: repositoryData } = useRepoInfoStore();
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    if (repositoryData !== undefined) {
      setData(repositoryData);
      setIsLoading(false);
    }
  }, [repositoryData]);

  const memorizedData = useMemo(() => data, [data]);

  if (isError) return <div>Error</div>;
  if (isLoading) return <RepositoryInfoLoading />;

  const { created_at, default_branch, forks, name } = memorizedData;
  const { day, month, year } = formatCustomDate(created_at);

  return (
    <div className="flex w-full flex-col items-center justify-center py-2">
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
        <button
          type="button"
          className="w-full px-8 py-2 border border-black/30
         text-black/60 hover:text-black/80 rounded-md mt-2"
          onClick={() => navigate('/repositoryInfo')}
        >
          More info
        </button>
      </div>
    </div>
  );
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
  );
}
