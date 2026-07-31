# Homework 1

:::{admonition} Course-material provenance
:class: dropdown
This page was migrated from the CHM 696 course materials developed by Jonathan Hood and Lyudmila Slipchenko. Equations and examples remain under editorial review during the Fall 2026 website migration.
:::

## Series

1.  Test the following series for convergence. Use any or a combination of the tests we studied. Do not forget the preliminary test!

    1.  $\sum_{n=1}^{\infty} \frac{\ln n}{n}$

    2.  $\sum_{n=1}^{\infty} \frac{3^n}{3^n + 2^n}$

    3.  $\sum_{n=1}^{\infty} \frac{1}{\ln n}$

    4.  $\sum_{n=2}^{\infty} \frac{1}{n \ln n}$

    5.  $\sum_{n=1}^{\infty} \frac{1}{n^2 - 4}$

    6.  $\sum_{n=0}^{\infty} \frac{e^n}{n!}$

    7.  $\sum_{n=0}^{\infty} \frac{100^n}{n^{200}}$

    8.  $\sum_{n=1}^{\infty} \frac{\sqrt{n^3+5n-1}}{n^2 -\sin n^3}$

    9.  $\sum_{n=1}^{\infty} \frac{(-2)^n}{n^2}$

2.  Find the interval of convergence of each of the following power series; be sure to investigate the endpoints of the interval.

    1.  $\sum_{n=1}^{\infty} \frac{(- 1)^n x^n}{n(n+1)}$

    2.  $\sum_{n=1}^{\infty} (1/n)(x/5)^n$

    3.  $\sum_{n=1}^{\infty} \frac{(x-2)^n}{3^n}$

3.  For the following series: a) find the first few terms of the Maclaurin series for each of the following functions; b) Find the general term and write the series in summation form; c) check your results in (a) by computer; d) use a computer to plot the function and several approximating partial sums of the series.

    1.  $\frac{x}{\sin x}$

    2.  $\sqrt{\frac{1-x}{1+x}}$

    3.  $\cos(e^x - 1)$

4.  Find the first few terms of the Taylor series for the following functions about the given points.

    1.  $f(x) = \cos x , \; a = \pi$

    2.  $f(x) = e^x , \; a = 5$

5.  Read about issues in numerical evaluations of small-value expressions in Example 1 in Section 1.15 (page 56).

6.  Suppose a large number of particles are bouncing back and forth between x = 0 and x = 1, except that at each endpoint some escape. Let r be the fraction reflected each time; then (1 - r) is the fraction escaping. Suppose the particles start at x = 0 heading toward x = 1; eventually all particles will escape. Write an infinite series for the fraction which escape at x = 1 and similarly for the fraction which escape at x = 0. Sum both the series. What is the largest fraction of the particles which can escape at x = 0? (Remember that r must be between 0 and 1.)

7.  In a water purification process, one-nth of the impurity is removed in the first stage. In each succeeding stage, the amount of impurity removed is one-nth of that removed in the preceding stage. Show that if n = 2, the water can be made as pure as you like, but that if n = 3, at least one-half of the impurity will remain no matter how many stages are used.

8.  In classical mechanics, kinetic energy is given by $K = \frac{p^2}{2m}$ where $p$ is the momentum. However, Einstein's theory of relativity showed that this expression is just an approximation valid for velocities $v \ll c$, where $c \approx 299,792,458$ m/s. In special relativity, the total energy of a particle includes both its kinetic energy and rest energy, with the total energy E given by: 
```{math}
E = \sqrt{p^2c^2 + m^2c^4}
```


    Here, $m$ is the rest mass of the particle, and $p$ is its relativistic momentum. The rest energy of the particle (when p = 0) is given by $E_{rest} = mc^2$. Perform a Taylor series expansion of the total energy expression $E$ in terms of the small parameter $v/c$, assuming that the rest mass energy dominates over the kinetic energy. Expand up to second order in $v/c$ to obtain the next-order correction to the total energy in the low-velocity limit.

## Complex Numbers

1.  Simplify (if needed) the following expressions, show the resulting complex numbers on the complex plane, and write them in both rectangular (Cartesian) and polar forms :

    1.  $\mathrm{i}-1$

    2.  $\cos \pi - \mathrm{i}\sin \pi$

    3.  $3 e^{\mathrm{i}\pi /2}$

    4.  $\frac{3 + \mathrm{i}}{2+\mathrm{i}}$

    5.  $\mathrm{i}^4$

    6.  $z^{-1}$

2.  Show that $|z_1 - z_2|$ is the distance between the points $z_1$ and $z_2$ in the complex plane. Now describe geometrically solutions to the following equations:

    1.  $|z-1| = 1$

    2.  $|z-1 + \mathrm{i}| = 2$

3.  Find all the values of $\sqrt[6]{-64}$

4.  Show that $\operatorname{Re}z = 1/2(z+\bar{z})$ and $\operatorname{Im}z = (1/2 \mathrm{i})(z - \bar{z})$

5.  Show that $\overline{\cos z} = \cos z$

6.  Evaluate the following in $x + \mathrm{i}y$ form:

    1.  $\ln (-\mathrm{i})$

    2.  $\ln (\mathrm{i}-1 )$

    3.  $2^{\mathrm{i}}$

7.  **Oscillatory motion** The equation of motion for a harmonic oscillator in classical mechanics is derived from $F = ma$ and is given by: 
```{math}
\frac{d^2y(t)}{dt^2} = -\omega ^2 y(t)
```


    This is a second-order ordinary differential equation (ODE) because the highest derivative is of second order. The solution to this equation represents oscillatory motion, which can be expressed in several different forms.

    1.  Show that the following function is a solution to the equation for any constants A and B: $y(t) = A \sin(\omega t) + B \cos( \omega t)$

    2.  Verify that the following expression, involving complex exponentials, is also a solution. Additionally, determine C and D in terms of A and B: $y(t) = C e^{\mathrm{i}\omega t} + D e^{-\mathrm{i}\omega t}$

    3.  For the complex exponential form, what conditions must C and D satisfy to ensure that y(t) is always real?

    4.  Demonstrate that $E \cos( \omega t + \phi)$ is also a valid solution if y(t) is real. Express E and $\phi$ in terms of C and D.

8.  **Signal beating with two close frequencies** Show that if two frequencies $e^{\mathrm{i}\omega_1 t}$ and $e^{\mathrm{i}\omega_2 t}$ are added together, the resulting signal contains the sum and difference frequencies. Plot the case for $\omega_1 = 1$ and $\omega_2 = 1.1$ for t from 0 to 20. Identify the two frequencies in the resulting beating. This is what you would experience if you shone two lasers with slightly different frequencies onto a detector.

---

*Migration source: `Homeworks/HW01.tex` from the archived Overleaf export.*
