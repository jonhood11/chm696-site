export function modes(m1,m2,k1,k2,k3){
  const a=(k1+k2)/m1,d=(k2+k3)/m2,b=-k2/Math.sqrt(m1*m2);
  const gap=Math.hypot(a-d,2*b),hi=(a+d+gap)/2;
  const lo=(k1*k2+k1*k3+k2*k3)/(m1*m2*hi);
  return [lo,hi].map(value=>{
    const rows=[[a-value,b],[b,d-value]];
    const r=Math.hypot(...rows[0])>Math.hypot(...rows[1])?rows[0]:rows[1];
    let u=[-r[1]/Math.sqrt(m1),r[0]/Math.sqrt(m2)];
    const scale=Math.max(...u.map(Math.abs))*(u[0]<0?-1:1);
    u=u.map(x=>x/scale);
    return {value,omega:Math.sqrt(value),u};
  });
}
export function coefficients(ms,x){
  const [a,b]=ms.map(m=>m.u),det=a[0]*b[1]-b[0]*a[1];
  return [(x[0]*b[1]-b[0]*x[1])/det,(a[0]*x[1]-x[0]*a[1])/det];
}
export function displacement(ms,c,t){
  return [0,1].map(j=>ms.reduce((s,m,i)=>s+c[i]*m.u[j]*Math.cos(m.omega*t),0));
}
