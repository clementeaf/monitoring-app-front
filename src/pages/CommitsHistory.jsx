/* eslint-disable react/prop-types */
import { format } from "date-fns";
import Container from "../components/Container";
import { useCommitsInfoStore } from '../context/CommitsInfoContext';

export default function CommitsHistory() {
  const {data, isLoading, isError} = useCommitsInfoStore();

  if(data == undefined || isError) return <div>Error</div>
  if(isLoading) {
    return <div>Loading data....</div>
  }

  const dataParsed = data.map((({ commit, sha}) => ({
    name: commit?.committer?.name,
    date: format(new Date(commit?.committer?.date), "dd/MM/yyyy HH:mm"),
    mail: commit?.committer?.email,
    msg: commit.message,
    commitUrl: commit.url,
    id: sha
  })))

  const commitCards = dataParsed.map(({ id, ...rest }) => (
    <CommitCard 
        key={id}
        {...rest}
    />
  ));

  return (
    <Container>
      <div className="flex flex-col w-full items-start p-4 gap-8">
        {commitCards}
      </div>
    </Container>
  )
}


function CommitCard({...rest}) {
  const {name, date, mail, msg, commitUrl} = rest;
  return (
  <div className="flex w-full flex-col p-4 border border-black/25 rounded-md">
    <div className="flex flex-col sm:flex-col md:flex-row w-full items-start border-b border-black/20">
      <div className="flex flex-col w-full sm:w-[25%] sm:flex-row md:flex-row items-start justify-between py-2 gap-3">
        <p className="font-semibold">User</p>
        <p className="w-full">{name}</p>
      </div>
      <div className="flex flex-col w-[40%] sm:w-[45%] md:w-[45%] sm:flex-row md:flex-row items-start justify-between py-2 gap-3">
        <p className="font-semibold">Email</p>
        <p className="w-full text-xs sm:text-base md:text-base">{mail}</p>
      </div>
      <div className="flex flex-col w-[35%] sm:w-[40%] md:w-[30%] sm:flex-row md:flex-row items-start justify-between py-2 gap-3">
        <p className="font-semibold">Date</p>
        <p className="w-[250px]">{date}</p>
      </div>
    </div>
    <div className="flex flex-col w-full sm:flex-row md:flex-row items-start justify-between py-2 gap-3">
        <p className="font-semibold">Description</p>
        <p className="text-sm w-[85%] sm:text-base md:text-base text-justify overflow-hidden">{msg}</p>
    </div>
    <div className="flex flex-col w-full sm:flex-row md:flex-row lg:flw-row items-start justify-between py-2 gap-3 border-t border-black/20">
      <p className="font-semibold">Commit URL</p>
      <a href={commitUrl} className="text-sm w-[85%] sm:text-base md:text-base text-justify overflow-hidden">{commitUrl}</a>
    </div>
  </div>
  )
}