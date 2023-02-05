import { EStatusType } from './dummy-data';
import styles from './Data.module.css';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import AppLoading from '../../app/components/AppLoading';
import ErrorPage from '../error/ErrorPage';
import { useEffect } from 'react';
import { getData } from './dataSlice';

export default function Data() {
  const {data, loading} = useAppSelector((state) => state.data);
  const token = useAppSelector((state) => state.identity.token)
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!data && ! loading && token) {
      dispatch(getData(token))
    }
  }, [])

  if (loading) {
    return <AppLoading />
  }

  if (!data || !token) {
    return <ErrorPage />
  }

  const renderColumns = () => {
    return Object.keys(data[0]).map((key) => (<th className={styles.columnHeader}>{key}</th>))
  }

  const renderContent = () => {
    return data.map((row, index) => (
      <tr key={index} style={{background: getRowColor(row.Status)}}>
        <td>{row.Version}</td>
        <td>{new Date(row.SystemUtcTime).toUTCString()}</td>
        <td>{new Date(row.LastModified).toUTCString()}</td>
        <td>{row.SystemId}</td>
        <td>{row.Status}</td>
        <td>{row.RStatus as string}</td>
      </tr>
    ))
  }

  return (

    <table className={styles.table}>
      <thead>
        <tr>
          {renderColumns()}
        </tr>
      </thead>
      <tbody>
        {renderContent()}
      </tbody>
    </table>

  )
}

const getRowColor = (status: EStatusType) => {
  switch(status) {
    case EStatusType.Offline:
      return 'yellow'
    case EStatusType.Approved:
      return 'green'
    case EStatusType.Disabled:
      return 'gray'
    default:
      return 'red'
  }
}
