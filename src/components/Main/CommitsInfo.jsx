/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import React, { useLayoutEffect, useMemo, useState } from 'react';
import formatCustomDate from '../../utils';
import { useCommitsInfoStore } from '../../context/CommitsInfoContext';

export default function CommitsInfo() {
  const { isError, data: commitsData } = useCommitsInfoStore();
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    if (commitsData) {
      setData(commitsData);
      setIsLoading(false);
    }
  }, [commitsData]);

  const memorizedData = useMemo(() => data, [data]);

  if (isError) return <div>Error</div>;
  if (isLoading) return <CommitsInfoLoading />;

  const { author, message } = memorizedData.at(length).commit;
  const { day, month, year, time } = formatCustomDate(author?.date);

  return (
    <div className="flex w-full flex-col items-center justify-center py-6 ">
      <div className="flex flex-col items-center gap-3">
        <p>Last Commit</p>
        <div className="flex w-full flex-col p-4 border border-black/20 rounded-lg">
          <div className="flex w-full justify-between items-center pb-4 border-b border-black/20 mb-2">
            <div className="flex flex-col items-start justify-start">
              <p className="text-base font-semibold">{day}</p>
              <p className="text-xs">{month}</p>
              <p className="text-xs">{year}</p>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-sm">Commit #{memorizedData.length}</p>
              <p className="text-xs">{time}</p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-1 mt-2">
            <p className="text-sm">Commit Message:</p>
            <p className="text-xs">{message}</p>
          </div>
        </div>

        <button
          type="button"
          className="px-8 py-2 border border-black/30 text-black/60
            rounded-md mt-2 hover:bg-black hover:text-white ease-in-out duration-300"
          onClick={() => navigate('/commits')}
        >
          View previous commits
        </button>
      </div>
    </div>
  );
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
  );
}
