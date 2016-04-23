#! /usr/bin/octave -qf

x = rand(1,1000);
y = rand(1,1000);
axis square
rectangle("Position",[0 0 1 1]);
#hold on
rectangle("Position",[0 0 1 1],"Curvature",1,"EdgeColor","r");
hold on
plot(x,y,'.','markersize',5);
title('monte carlo method with 1000 points')
print -color -dpng montecarlo_pi.png
print -color -deps montecarlo_pi.eps
