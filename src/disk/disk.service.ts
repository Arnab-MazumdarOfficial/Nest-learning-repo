import { Injectable } from '@nestjs/common';
import { PowerServiceService } from 'src/power_service/power_service.service';

@Injectable()
export class DiskService {
    constructor(private powerService : PowerServiceService) {}

    getData(){
        console.log("Drawing 20 watts of power from powerservice");
        this.powerService.supplyPower(20);
        return 'data!';
    }
}
