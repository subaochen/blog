N=10;
%T=0;
n=20;
for i=1:N-1
    t1=((N-i)./N)^(n-1);
    t2=nchoosek(N,i);
    T=T+(i./N).*t2.*t1.*(-1)^(i+1);
    disp(['t1=',num2str(t1),',t2=',num2str(t2),',T=',num2str(T)]);
end
disp(T)

