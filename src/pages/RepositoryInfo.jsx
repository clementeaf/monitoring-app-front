import React from 'react';
import Container from '../components/Container';
import { useRepoInfoStore } from '../context/RepoInfoContext';
import formatCustomDate from '../utils';

export default function RepositoryInfo() {
  const { data, isLoading, isError } = useRepoInfoStore();

  if (isError || data === undefined) return <div>Error</div>;
  if (isLoading) return <div>Loading data....</div>;

  const createdAt = data?.created_at;
  const updatedAt = data?.updated_at;
  const name = data?.name;
  const ownerLogin = data?.owner?.login;
  const defaultBranch = data?.default_branch;
  const gitUrl = data?.git_url;

  const { day, month, year, time } = formatCustomDate(createdAt);
  const {
    day: udDay,
    month: udMonth,
    year: udYear,
    time: udTime,
  } = formatCustomDate(updatedAt);

  return (
    <Container>
      <div className="flex w-full flex-col gap-2">
        <div className="flex w-full flex-col gap-2 p-4">
          <div className="flex items-start w-full justify-between gap-10 border-b border-black/20 pb-5">
            <div className="flex flex-col items-start">
              <p className="font-medium">Created at</p>
              <p className="text-sm">{day || 'dd'}</p>
              <p className="text-xs">{month || 'month'}</p>
              <p className="text-xs">{year || 'year'}</p>
              <p className="text-xs">{time || 'time'}</p>
            </div>
            <div className="flex flex-col items-start">
              <p className="font-medium">Updated at</p>
              <p className="text-sm">{udDay || 'day'}</p>
              <p className="text-xs">{udMonth || 'month'}</p>
              <p className="text-xs">{udYear || 'year'}</p>
              <p className="text-xs">{udTime || 'time'}</p>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-start px-2">
          <p className="font-medium">Name</p>
          <p className="w-full capitalize border-b pb-2 border-black/20">
            {name ?? 'N/A'}
          </p>
          <p className="font-medium">Owner login</p>
          <p className="w-full border-b pb-2 border-black/20">
            {ownerLogin ?? 'N/A'}
          </p>
          <p className="font-medium">Default branch</p>
          <p className="w-full pb-2 border-b border-black/20">
            {defaultBranch ?? 'N/A'}
          </p>
          <p className="font-medium">Git URL</p>
          <p className="text-justify pb-2 text-sm">{gitUrl ?? 'N/A'}</p>
        </div>
      </div>
    </Container>
  );
}
