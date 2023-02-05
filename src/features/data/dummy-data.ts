export const dummyData: IDummyData[] = [{
  Version: '11.2.2',
  SystemUtcTime: Date.now(),
  LastModified: Date.UTC(2010, 5, 23, 10, 15, 47),
  SystemId: 1,
  Status: 'Offline',
  RStatus: 7,
}]

export interface IDummyData {
  Version: string;
  SystemUtcTime: number;
  LastModified: number;
  SystemId: number;
  Status: 'ConfigurationApproved' | 'Offline' | 'Disabled';
  RStatus: unknown;
}