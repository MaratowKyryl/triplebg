export const dummyData: IDataState[] = [
  {
  Version: '11.2.2',
  SystemUtcTime: Date.now(),
  LastModified: Date.UTC(2010, 5, 23, 10, 10, 47),
  SystemId: 1,
  Status: 'Offline',
  RStatus: 7,
},
{
  Version: '10.2.1',
  SystemUtcTime: Date.now(),
  LastModified: Date.UTC(2011, 5, 23, 10, 15, 47),
  SystemId: 1,
  Status: 'Offline',
  RStatus: 7,
},
{
  Version: '13.2.0',
  SystemUtcTime: Date.now(),
  LastModified: Date.UTC(2013, 5, 23, 10, 15, 47),
  SystemId: 1,
  Status: 'ConfigurationApproved',
  RStatus: 7,
},
{
  Version: '1.2.2',
  SystemUtcTime: Date.now(),
  LastModified: Date.UTC(2010, 5, 23, 10, 15, 47),
  SystemId: 1,
  Status: 'Disabled',
  RStatus: 7,
},
{
  Version: '1.3.0',
  SystemUtcTime: Date.now(),
  LastModified: Date.UTC(2020, 5, 23, 10, 15, 47),
  SystemId: 1,
  Status: 'Disabled',
  RStatus: 7,
},
{
  Version: '1.23.2',
  SystemUtcTime: Date.now(),
  LastModified: Date.UTC(2010, 1, 23, 10, 15, 47),
  SystemId: 1,
  Status: 'Offline',
  RStatus: 7,
},
{
  Version: '17.22.0',
  SystemUtcTime: Date.now(),
  LastModified: Date.UTC(2010, 2, 23, 10, 15, 47),
  SystemId: 1,
  Status: 'ConfigurationApproved',
  RStatus: 7,
},
{
  Version: '106.0.0',
  SystemUtcTime: Date.now(),
  LastModified: Date.UTC(2010, 3, 23, 10, 15, 47),
  SystemId: 1,
  Status: 'Unchecked',
  RStatus: 45,
},
{
  Version: '11.0.2',
  SystemUtcTime: Date.now(),
  LastModified: Date.UTC(2010, 4, 23, 10, 15, 47),
  SystemId: 1,
  Status: 'Applied',
  RStatus: 18,
},]

export interface IDataState {
  Version: string;
  SystemUtcTime: number;
  LastModified: number;
  SystemId: number;
  Status: EStatusType | any;
  RStatus: unknown;
}

export enum EStatusType {
  Approved = 'ConfigurationApproved',
  Offline = 'Offline',
  Disabled = 'Disabled'
};