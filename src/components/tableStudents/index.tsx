import React from 'react'
import styled from 'styled-components'
import TableItem from './TableItem'
import studentStore from './../../store/students'
import { observer } from 'mobx-react-lite'

const Table = styled.div`
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
  border-radius: 6px;
`

const HeaderRow = styled.div`
  margin: 2.25rem 7.5rem 0.75rem 5rem;
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr 1fr;
  @media (max-width: 480px) {
    display: none;
  }
  @media (max-width: 750px) {
    font-size: 0.75rem;
    & > div {
      margin: 0 3px;
    }
  }
`

const TableStudents: React.FC = observer(() => {
  return (
    <>
      <HeaderRow>
        <div>ФИО </div>
        <div>Специальность </div>
        <div>Группа </div>
        <div>Возраст </div>
        <div>Рейтинг </div>
      </HeaderRow>
      <Table>
        {studentStore.students.map((student) => (
          <TableItem student={student} key={student.id} />
        ))}
      </Table>
    </>
  )
})
export default TableStudents
