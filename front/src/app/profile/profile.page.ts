import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { UserinfoService } from '../userinfo.service'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profileimg='https://s.gravatar.com/avatar/310c81f71fdec127bb5c…&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fab.png'
  name= 'John'
  email = 'abc@test.com'
  points = '/assets/points.png'
  collected =0
  returned = 0
  point = 0
  constructor(private storage: NativeStorage, private service:UserinfoService) { 
    /*.getItem('profile').then(data=>{
      this.profileimg = data['picture']
      this.email = data['name']
      this.name = data['nickname']
      let uid = data['sub']
      service.getUserData(uid).subscribe(val=>{
        this.point=val['user']['points']
        this.collected=val['user']['collected']
        this.returned=val['user']['returned']
      })
    }).catch(err=>console.log(err))
*/
  }

  ngOnInit() {
  }

}
