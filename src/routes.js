import {lazy} from "react";

const Main = lazy(() => import("./pages/Main"));
const CommitsHistory = lazy(() => import("./pages/CommitsHistory"));
const RepositoryInfo = lazy(() => import("./pages/RepositoryInfo"));

export const MAIN_ROUTE = {
    id: "main-route",
    path: "/",
    component: Main,
    isIndex: false,
    isExact: true,
    isInSideNav: true,
    name: "Home",
    title: "Home",
    description: "Home",
}

export const REPOSITORY_INFO_ROUTE = {
    id: "repository-info-route",
    path: "/repositoryInfo",
    component: RepositoryInfo,
    isIndex: false,
    isExact: true,
    isInSideNav: true,
    name: "Repository",
    title: "Repository Info",
    description: "Repository Info",
}

export const COMMITS_HISTORY_ROUTE = {
    id: "commits-history-route",
    path: "/commits",
    component: CommitsHistory,
    isIndex: false,
    isExact: true,
    isInSideNav: true,
    name: "Commits",
    title: "Commits History",
    description: "Commits History",
}