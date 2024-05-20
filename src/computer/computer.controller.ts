import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';

@ApiTags('Computer')
@Controller('computer')
export class ComputerController {
    constructor(private cpuService : CpuService , private diskService : DiskService){}

    @Get('computer-routs')
    run(){
        return [
            this.cpuService.compute(1,2), this.diskService.getData()
        ]
    }
}
