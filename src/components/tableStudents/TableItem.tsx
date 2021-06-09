import React from 'react'
import styled from 'styled-components'
import dumpster from './../../assets/images/dumpster.svg'
import studentStore, { IStudent } from './../../store/students'
import rating from './../../assets/images/rating.svg'

const Row = styled.div`
  font-weight: 500;
  margin: 1.675rem 0;
  display: grid;
  align-items: center;
  gap: 3px;
  grid-template-columns: 5rem 2fr 2fr 1fr 1fr 1fr 3.75rem 3.75rem;
  grid-template-areas: 'avatar name specialty group age rating color dumpster';

  @media (max-width: 480px) {
    grid-template-columns: 5rem auto 1fr 3.75rem;
    grid-template-rows: 1fr 1fr 1px auto auto auto;
    grid-template-areas:
      'avatar name name dumpster'
      'avatar color rating dumpster'
      'line line line line'
      '. point1 age .'
      '. point2 specialty .'
      '. point3 group .';
  }
`

const RowItem = styled.div<{ area: string }>`
  grid-area: ${({ area }) => area};
  @media (max-width: 480px) {
    font-size: 0.75rem;
    font-weight: 400;
  }
`

const Avatar = styled.img`
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  position: relative;
  z-index: -1;
`
const BorderAvatar = styled.div`
  width: 40px;
  border-radius: 50%;
  height: 40px;
  box-shadow: inset 0px 0px 0px 0.125rem rgba(255, 255, 255, 0.6);
  grid-area: avatar;

  margin: 1rem;
`
const Color = styled.div<{ color: string }>`
  border-radius: 50%;
  width: 1.875rem;
  height: 1.875rem;
  box-shadow: 0px 0px 1rem 0px rgba(0, 0, 0, 0.1);
  background-color: ${({ color }) => color};
  grid-area: color;
  @media (max-width: 480px) {
    width: 0.875rem;
    height: 0.875rem;
    margin-right: 1rem;
    align-self: start;
  }
`
const BorderDumpster = styled.div`
  border-radius: 50%;
  width: 1.875rem;
  height: 1.875rem;
  text-align: center;
  line-height: 1.875rem;
  cursor: pointer;
  box-shadow: 0px 0px 1rem rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  justify-self: center;
  align-self: center;
  grid-area: dumpster;
`
const Dumpster = styled.img`
  width: 0.875rem;
`

const Rating = styled.div`
  grid-area: rating;
  position: relative;
  @media (max-width: 480px) {
    padding-left: 15px;
    font-size: 0.75rem;
    align-self: start;
    &::before {
      content: '';
      top: 2.5px;
      left: 0;
      width: 10px;
      height: 10px;
      display: block;
      position: absolute;
      background-image: url(${rating});
    }
  }
`
const Name = styled.div`
  grid-area: name;
  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`
const Age = styled.div`
  grid-area: age;

  @media (max-width: 480px) {
    font-weight: 400;
    font-size: 0.75rem;

    &::after {
      content: ' год';
    }
  }
`
const Line = styled.hr`
  border: none;
  grid-area: line;
  display: none;
  @media (max-width: 480px) {
    display: block;
    border-top: 1px solid black;
    opacity: 0.05;
  }
`
const Pont = styled.div<{ area: string }>`
  height: 5px;
  width: 5px;
  border-radius: 0px;
  background: rgba(73, 194, 232, 1);
  display: none;
  grid-area: ${({ area }) => area};
  @media (max-width: 480px) {
    display: block;
  }
`

const TableItem: React.FC<{ student: IStudent }> = ({ student }) => {
  return (
    <Row>
      <BorderAvatar>
        <Avatar src={student.avatar} />
      </BorderAvatar>
      <Pont area={'point1'} />
      <Name>{student.name}</Name>
      <Pont area={'point2'} />
      <RowItem area={'specialty'}>{student.specialty}</RowItem>
      <Pont area={'point3'} />
      <RowItem area={'group'}>{student.group}</RowItem>
      <Age>{student.age}</Age>
      <Line />
      <Rating>{student.rating}</Rating>
      <Color color={student.color} />
      <BorderDumpster onClick={() => studentStore.removeStudent(student.id)}>
        <Dumpster src={dumpster} />
      </BorderDumpster>
    </Row>
  )
}

export default TableItem
