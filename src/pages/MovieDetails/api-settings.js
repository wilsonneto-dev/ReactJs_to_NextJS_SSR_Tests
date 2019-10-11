import Shared from '../../configs/Shared';

const apiSettings = {
  url: 'https://service.ottvs.com.br/XB1Store/browserservice.svc/findmedia',
  filter: {
    AuthenticationTicket: Shared.AuthenticationTicket,
    Groups: [
      {
        GroupName: 'Images',
        GroupProperties: 'Url'
      },
      {
        GroupName: 'Metadata',
        GroupProperties:
          'UniqueUrl|Country|Year|Description|Synopsis|Genres|Directors|Actors|TrailerUrl'
      },
      {
        GroupName: 'FileInfo',
        GroupProperties: 'Duration'
      }
    ],
    Options: {
      BoxBehavior: 2,
      FillSiblings: false,
      FillSiblingsChilds: false,
      ImageTypeIds: [-2, 4001],
      IncludePreOrderItens: false,
      OnlySVODItens: false,
      PageNumber: 0,
      RecordsPerPage: 40,
      SortCriteria: 0
    }
  }
};

export default apiSettings;
