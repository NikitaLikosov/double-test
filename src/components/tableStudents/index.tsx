import React from 'react'
import styled from 'styled-components'
import TableRow from './TableRow'
import studentStore from './../../store/students'
import { observer } from 'mobx-react-lite'

const Wrapper = styled.div`
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
  border-radius: 6px;
  overflow: hidden;
  padding: 0 1rem;
  @media (max-width: 768px) {
    box-shadow: none;
    overflow: visible;
    padding: 0;
  }
`

const HeaderRow = styled.div`
  margin: 2.25rem 1rem 0.75rem;
  display: grid;
  grid-template-columns: 5rem 2fr 2fr 1fr 1fr 1fr 3.75rem 3.75rem;
  @media (max-width: 768px) {
    display: none;
  }
`

const TableStudents: React.FC = observer(() => {
  return (
    <>
      <HeaderRow>
        <div> </div>
        <div>ФИО </div>
        <div>Специальность </div>
        <div>Группа </div>
        <div>Возраст </div>
        <div>Рейтинг </div>
      </HeaderRow>
      <Wrapper>
        {studentStore.students.map((student) => (
          <TableRow student={student} key={student.id} />
        ))}
      </Wrapper>
    </>
  )
})
export default TableStudents
