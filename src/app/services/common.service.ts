import { Service, signal } from '@angular/core';

@Service()
export class CommonService {
    theme = signal("light");

    setTheme(value:string){
        this.theme.set(value);
    }
}
