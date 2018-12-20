import { Google, singletonSrv } from 'grafana-ui';


console.log('Google', new Google().hello());
console.log('Singleton', singletonSrv.hello());
