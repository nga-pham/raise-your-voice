export interface PassDataToAppProps {
    language: string;
    sendDataToApp: (language: string) => void;
}

export interface PassDataToIndexProps {
    language: string;
    sendDataToIndex: (language: string) => void;
}
export interface NoPassDataProps {
    language: string;
}