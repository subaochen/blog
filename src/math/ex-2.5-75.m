Clear[x, y, t]
{a, b} = {-Sqrt[2]*Pi, Pi/4}
t0 = -Pi/4
x[t_] = E^t + Sin[2*t]
y[t_] = E^t + Cos[t^2]
p1 = ParametricPlot[{x[t], y[t]}, {t, a, b}]
yp[t_] = y'[t]/x'[t]
ypp[t_] = yp'[t]/x'[t](*二阶导数*)
yp[t0] // N
ypp[t0] // N
tanline[t_] = y[t0] + yp[t0]*(x - x[t0])
p2 = Plot[tanline[x], {x, 0, 0.2}]
Show[{p1, p2}]

