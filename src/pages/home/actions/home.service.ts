import axiosInstance from 'core/configs/axios.config';
import { Routes } from 'router/routes';

export const getVideoSercice = () => (
    axiosInstance.get(Routes.video)
    .then(data => data.data.record.file)
);

export const getLeadsService = () => (
    axiosInstance.get(Routes.leads)
    .then(data => data.data.record)
);