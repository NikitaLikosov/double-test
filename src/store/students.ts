import { makeAutoObservable } from 'mobx'

export enum TypeSort {
  'Имя А-Я',
  'Имя Я-А',
  'Сначала моложе',
  'Сначала старше',
  'Высокий рейтинг',
  'Низкий рейтинг',
}
interface IStudentServ {
  id: string
  name: string
  group: string
  color: string
  rating: string
  specialty: string
  birthday: string
  avatar: string
}

export interface IStudent {
  id: number
  name: string
  group: string
  color: string
  rating: string
  specialty: string
  age: number
  avatar: string
}

export default new (class Students {
  selectedTypeSort = TypeSort['Имя А-Я']

  searchText: string = ''

  private _students: IStudent[] = []

  constructor() {
    makeAutoObservable(this)
    this.fetchStudents()
  }

  fetchStudents = async () => {
    const res = await fetch('https://front-assignment-api.2tapp.cc/api/persons')
    if (res.ok) {
      const data = await res.json()
      this._students = data.students.map((student: IStudentServ) => {
        return Object.assign(
          {
            age: this.calcAge(student.birthday),
            id: +student.id,
          },
          student
        )
      })
      console.log(this.students)
    }
  }

  calcAge = (birthday: string) => {
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const dob = new Date(birthday)
    const dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate())
    const age = today.getFullYear() - dob.getFullYear()
    return today < dobnow ? age - 1 : age
  }

  changeSelectedTypeSort = (typeSort: TypeSort): void => {
    this.selectedTypeSort = typeSort
  }

  removeStudent = (id: number): void => {
    this._students = this._students.filter((st: any): boolean => st.id !== id)
  }
  public get students(): IStudent[] {
    const searchStudents = this._students.filter(({ name }) =>
      name.includes(this.searchText)
    )

    switch (this.selectedTypeSort) {
      case 0:
        return searchStudents.sort((a, b) => (a.name < b.name ? -1 : 1))
      case 1:
        return searchStudents.sort((a, b) => (a.name > b.name ? -1 : 1))
      case 2:
        return searchStudents.sort((a, b) => (a.age < b.age ? -1 : 1))
      case 3:
        return searchStudents.sort((a, b) => (a.age > b.age ? -1 : 1))
      case 4:
        return searchStudents.sort((a, b) => (a.rating > b.rating ? -1 : 1))
      case 5:
        return searchStudents.sort((a, b) => (a.rating < b.rating ? -1 : 1))
    }

    return this._students.filter(({ name }) =>
      name.toLowerCase().includes(this.searchText.toLowerCase())
    )
  }
})()
