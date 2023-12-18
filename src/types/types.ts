export interface RootState {
    name: string;
    data: DataState;
};

export interface DataState {
    isLoading: boolean;
    isMailShow: boolean;
}
