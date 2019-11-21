import axios from 'axios';
import Shared from '../../configs/Shared';

export const servicesAPIs = {
  homeBannersUrl:
    'https://service.ottvs.com.br/XB1Store/browserservice.svc/listbanner',
  homeBannersReqBody: {
    AuthenticationTicket: Shared.BannerAuthenticationTicket,
    BannerLocationId: Shared.BannerLocationId
  },
  homeLists:
    'https://service.ottvs.com.br/XB1Store/browserservice.svc/listsection',

  homeCredentials: {
    AuthenticationTicket: Shared.AuthenticationTicket,
    SectionLocationId: Shared.sectionLocationId
  },

  homeConfig: {
    headers: { 'Content-Type': 'multipart/form-data' }
  },

  homeSectionMovies:
    'https://service.ottvs.com.br/XB1Store/browserservice.svc/findmedia',

  homeSectionMoviesFilter: {
    AuthenticationTicket: Shared.AuthenticationTicket,
    Criteria: {
      MediaType: 10,
      SectionId: 0
    },
    Groups: [
      {
        GroupName: 'Images',
        GroupProperties: 'Url'
      },
      {
        GroupName: 'Metadata',
        GroupProperties: 'UniqueUrl'
      }
    ],
    Options: {
      BoxBehavior: 2,
      FillSiblings: false,
      FillSiblingsChilds: false,
      ImageTypeIds: [-2, 4001, 1012, 1010],
      IncludePreOrderItens: false,
      OnlySVODItens: false,
      PageNumber: 0,
      RecordsPerPage: 40,
      SortCriteria: 0
    }
  },

  searchSectionMoviesFilter: {
    Groups: [
      {
        GroupName: 'Images',
        GroupProperties: 'TypeId|Url'
      },
      {
        GroupName: 'Price',
        GroupProperties: 'PurchasePrice|FreePrice|RentPrice|SVODPrice'
      },
      {
        GroupName: 'SerieInfo',
        GroupProperties: 'EpisodeName'
      },
      {
        GroupName: 'Metadata',
        GroupProperties: 'UniqueUrl'
      }
    ],
    AuthenticationTicket: 'looke@looke:v7c8ad@#$',
    Options: {
      OnlyEnabledItens: true,
      BoxBehavior: 'Group',
      OnlySVODItens: false,
      RecordsPerPage: 100,
      PageNumber: 0,
      FillSiblings: false,
      ImageTypeIds: [-1, 1010],
      FillSiblingsChilds: false,
      SortCriteria: 'MediaName',
      SortOrder: 'ASC'
    }
  },

  searchUrlApi:
    'https://service.ottvs.com.br/XB1Store/browserservice.svc/findmedia',

  suggestions: '/suggestions.json',

  channelVideos:
    'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDokzfhBGfUkE_ezOsRlZdR0nOVuWRYYhc&channelId=UCl8MCsaxzWnm_D4izigpTeg&part=snippet,id&order=date&maxResults=3',
  channelVideosList:
    'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDokzfhBGfUkE_ezOsRlZdR0nOVuWRYYhc&channelId=UCl8MCsaxzWnm_D4izigpTeg&part=snippet,id&order=date&maxResults=15'
};

export const defaultConfigAPIs = {
  headers: { 'Access-Control-Allow-Origin': '*' }
};

const api = axios.create();

export default api;
