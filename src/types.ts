export type RouteCheckerComponent = React.VFC<{
    element: JSX.Element;
    loadingElement?: JSX.Element;
}>;

export type Music = {
    id: string;
    personId: string;
    name: string;
    author: string;
}

export type User = {
    id: string;
    phone: string;
    name: string;
    paternalSurname: string;
    maternalSurname: string;
    dateOfBirth?: string;
    gender: string;
    email: string;
}
