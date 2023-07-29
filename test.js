  
  
  // creating a shcool and adding students to the school
  
  // Class 1
class Student {
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    describe() {
        return `${this.firstName} has ${this.lastName} `;
    }
}

    //Class 2
class School {
    constructor(name){
        this.name = name;
        this.students = [];
    }

    addStudent(student) {
        if (student instanceof Student) {
            this.students.push(student);
        }else{
            throw new Error(`only one student at a time.Argument is not a student: ${student} `) 
        }
    }

describe(){
    return `${this.name} has ${this.students.length} students.`;
 }
}


    // school Array created 
class Menu {
    constructor(){
        this.schools = []
        this.selectedSchool = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createSchool();
                    break;
                case '2':
                    this.viewSchool();
                    break;
                case '3':
                    this.deleteSchool();
                    break;
                case '4':
                    this.displaySchool();
                    break;
                
                
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('Goodbye:');
    }                       /// Main Menu 
    showMainMenuOptions() {   
      return prompt(`
      0) exit
      1) add school name
      2) view school 
      3) delete schhol
      4) display all school 
      `);
    }
      // school menu options 
    showSchoolMenuOptions(schoolInfo){
        return prompt(`
        0) back
        1) create student
        2) delete student 
        ------------------
        ${schoolInfo}
        `);
    }
        // Delete Elements
    deleteSchool() {
        let index = prompt('Enter the index of the school that you wish to delete: ');
        if (index > -1 && index < this.schools.length) {
        this.schools.splice(index,1);
        }
    }
   
   //   display school method
    displaySchool(){
        let schoolstring = ``;
        for (let i = 0; i < this.schools.length; i++) {
          schoolstring += i + ') ' + this.schools[i].name + `\n`; 
        } 
        alert(schoolstring);
    }
        // Create school method
    createSchool(){
        let  name = prompt('Enter name of new school name  ');
        this.schools.push(new School(name));
    }

            // View school method
    viewSchool(){
        let index = prompt(' Enter the index of the school');
        if (index > -1 && index < this.schools.length){
            this.selectedSchool = this.schools[index];
            let description1 = `School Name: ` + this.selectedSchool.name + `\n`;
            
            for (let i = 0; i < this.selectedSchool.students.length; i++){
                description1 += i + `) ` + this.selectedSchool.students[i].firstName + ` - ` + this.selectedSchool.students[i].lastName + `\n`;
             }
            
            let selection1 = this.showSchoolMenuOptions(description1);
            switch( selection1){
                case '1':
                    this.createStudent();
                    break;
                case '2':
                    this.deleteStudent();

            }
        }
    }
//     create student method
    createStudent(){
        let firstName = prompt('Enter frist name: ');
        let lastName = prompt('Enter last name: ');
        this.selectedSchool.students.push(new Student(firstName,lastName));
    }
    // delete  student method
    deleteStudent(){
        let index = prompt('Enter the index of student to delete:');
        if (index > -1 && index < this.selectedSchool.students.length) {
            this.selectedSchool.students.splice(index,1);
        }
    }
}
let menu = new Menu();
menu.start();