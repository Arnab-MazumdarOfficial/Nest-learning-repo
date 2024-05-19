import { Injectable } from '@nestjs/common';
import { PowerServiceService } from 'src/power_service/power_service.service';

@Injectable()
export class CpuService {
    constructor(private powerService : PowerServiceService){}

    compute(a: number, b: number){
        console.log('Drawing 10 watts of power from power service.');
        this.powerService.supplyPower(10);
        return a+b;
    }
}
