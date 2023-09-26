import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from, map, of, tap } from 'rxjs';
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
          return from(
               this.staffRepository.find()
               ).pipe(
                    map((staff) => {
                         if(staff.length === 0){
                              throw new NotFoundException("No staff found");
                         }
                         return staff;
                    })
               );
     }

     /**
      * 
      * @param id 
      * @returns details of Staff with given ID
      */
     getByID(id: string): Observable<StaffEntity> {
          return from(
               this.staffRepository.findOne({where: {id: id}, relations: ["biodata", "employment", "education", "certifications", "training"]})
          ).pipe(
               tap((staff) => {
                    if(!staff) {
                         throw new NotFoundException("Staff not found")
                    }
               })
          );
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
