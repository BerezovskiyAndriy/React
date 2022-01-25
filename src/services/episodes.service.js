import {axiosService} from "./axios.service";
import {urls} from "../config/url";

export const episodesService = axiosService.get(urls.episodes).then(value => value.data);