import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from, of } from 'rxjs';
import { CreateStaffDTO } from 'src/staff-management/dto/createStaff.dto';
import { StaffEntity } from 'src/staff-management/entities/staff.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StaffService {

     constructor( @InjectRepository(StaffEntity) private readonly staffRepository: Repository<StaffEntity>) {

     }

     /**
      * 
      * @returns List complete of staff
      */
     getAll(): Observable<StaffEntity[]> {
          const staffList = this.staffRepository.find();
          return from(staffList).pipe();
     }

     /**
      * 
      * @param id 
      * @returns details of Staff with given ID
      */
     getByID(id: string): Observable<StaffEntity> {
          const searchID = id;
          const staff = this.staffRepository.findOne({where: {id: searchID}, relations: ["biodata"]});
          if(!staff) throw new NotFoundException("No user with that ID");
          return from(staff).pipe();
     }

     async create(staff: CreateStaffDTO): Promise<StaffEntity> {
          const newStaff = staff;
          const exists = await this.staffRepository.findOneBy({id: newStaff.id})
          if(exists) {
             throw new ConflictException(`A staff with ID ${newStaff.id} already exists `);  
          }
          return this.staffRepository.save(newStaff);
     }

     update() {

     }

     remove( id: string ) {

     }
}
