# Complex Numbers

:::{admonition} Course-material provenance
:class: dropdown
This page was migrated from the CHM 696 course materials developed by Jonathan Hood and Lyudmila Slipchenko. Equations and examples remain under editorial review during the Fall 2026 website migration.
:::

## Foundations


## Complex numbers --- definition & notations


- A complex number: $z = x + \mathrm{i}y$, with $x,y\in\mathbb{R}$.

- Real and imaginary parts: $\operatorname{Re}(z)=x,\ \operatorname{Im}(z)=y$.

- Vector-like notation: $z = (x,y)$

- Using polar coordinates: $z = r(\cos\theta + i \sin\theta) = re^{i\theta}$

:::{admonition} Wrapfigure
l0.5 
:::{note} Original-slide figure pending review
The original lecture refers to `complex_numbers1.jpg`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::

:::

**Note!**

- Use radians in all analytical formulas (derivatives, series, integrals) - otherwise the formulas are incorrect!

- Degrees could be used for numerical evaluations and operations with the angles (addition, subtraction, etc).


## Complex numbers --- definition & notations (continued)


- A complex number: $z = x + \mathrm{i}y$, with $x,y\in\mathbb{R}$.

- Real and imaginary parts: $\operatorname{Re}(z)=x,\ \operatorname{Im}(z)=y$.

- Vector-like notation: $z = (x,y)$

- Using polar coordinates: $z = r(\cos\theta + i \sin\theta) = re^{i\theta}$

:::{admonition} Wrapfigure
l0.5 
:::{note} Original-slide figure pending review
The original lecture refers to `complex_numbers1.jpg`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::

:::

More definitions:

- *Modulus* or *absolute value* of z: $|z| = \mod z = r = \sqrt{x^2 + y^2}$

- $\theta$ is *angle*, also *phase*, *argument*, *amplitude* of z


## Complex conjugate


- A complex number: $z = x + \mathrm{i}y$

- Complex conjugate: $\bar{z} = z^* =  x - \mathrm{i}y$

- $\bar{z} = r(\cos(-\theta) + i \sin(-\theta)) = r(\cos(\theta) - i \sin(\theta)) = re^{-i\theta}$


:::{note} Original-slide figure pending review
The original lecture refers to `complex_numbers2.png`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::
{#fig:placeholder width="30%"}


## Complex Algebra: Addition, Multiplication, Division


```{math}
\begin{aligned}
    (x_1+\mathrm{i}y_1)+(x_2+\mathrm{i}y_2) &= (x_1+x_2)+\mathrm{i}(y_1+y_2),\\
    (x_1+\mathrm{i}y_1)(x_2+\mathrm{i}y_2) &= (x_1x_2-y_1y_2)+\mathrm{i}(x_1y_2+y_1x_2).
\end{aligned}
```


:::{note}
Example

- Compute $(1+2\mathrm{i})(3-\mathrm{i})$

- Compute $(1+\mathrm{i})^2$

- Compute $\frac{1+2\mathrm{i}}{3-\mathrm{i}}$
:::


## Complex Algebra: Complex Conjugate


If $z_1 = x_1 + \mathrm{i}y_1$ and $z_2= x_2 + \mathrm{i}y_2$, then

$\bar{z}_1 + \bar{z}_2 = \overline{z_1 + z_2}$

And similarly with subtraction, multiplication, and division!

:::{note}
Example Compute complex conjugate of $\frac{1+2\mathrm{i}}{3-\mathrm{i}}$
:::


## Complex Algebra: Absolute value of z


- $|z| =  r = \sqrt{x^2 + y^2}$

- $z\bar{z} = (x+\mathrm{i}y)(x-\mathrm{i}y) = x^2 + y^2 = |z|^2$

- $|z| = \sqrt{z\bar{z}}$

:::{note}
Example Compute $\left | \frac{1+2\mathrm{i}}{3-\mathrm{i}} \right |$
:::


## Complex Algebra: Complex equations and inequalities


:::{note}
Note In equations involving complex numbers, both real and imaginary parts need to be solved for **real numbers**!
:::

:::{note}
Example Solve $(x+\mathrm{i}y)^2 = 2\mathrm{i}$
:::

:::{note}
Example Solve $\operatorname{Re}z > 1$
:::


## Complex Series


- Convergence of series involving complex numbers is defined analogously to that of real numbers, i.e., the series is convergent if its partial sum $S_n =X_n + \mathrm{i}Y_n$ approaches a limit $S =X + \mathrm{i}Y$ as $n\to\infty$.

- Practically, it means that $X_n \to X$ and $Y_n \to Y$.

- For complex-numbered series, an absolutely convergent series converges. Therefore, we can test the absolute convergence.

- In the complex power series $\sum a_n z^n$, where $z$ and $a_n$ are complex numbers, we are interested in a *disk of convergence*, with its radius called *the radius of convergence*.

:::{note}
Example Find the disk of convergence for $1 - z + z^2/2 - z^3/3 + z^4/4 + \cdots = \sum_{n=0}^{\infty}(-z)^n/n$
:::

:::{note}
Example Find the disk of convergence for $\sum_{n=0}^{\infty} \frac{(z+1-i)^n}{3^n n^2}$
:::


## Euler & Polar


## Euler's formula: $e^\mathrm{i}\theta=\cos\theta+\mathrm{i}\sin\theta$

Euler's formula: $e^{\mathrm{i}\theta}=\cos\theta+\mathrm{i}\sin\theta$

- Recall from the last lecture: 
```{math}
\sin\theta = \theta - \theta^3/3! + \theta^5/5! + \cdots
```
 
```{math}
\cos\theta = 1 - \theta^2/2! + \theta^4/4! + \cdots
```


- Now write the series for $e^{\mathrm{i}\theta}$ for real $\theta$: 
```{math}
\begin{aligned}
      e^{i\theta} = 1 + \mathrm{i}\theta + \frac{(\mathrm{i}\theta)^2}{2!} + \frac{(\mathrm{i}\theta)^3}{3!} + \frac{(\mathrm{i}\theta)^4}{4!} + \frac{(\mathrm{i}\theta)^5}{5!} + \cdots \\
      = 1 + \mathrm{i}\theta - \frac{\theta^2}{2!} -\mathrm{i}\frac{\theta^3}{3!} + \frac{\theta^4}{4!} + \mathrm{i}\frac{\theta^5}{5!} + \cdots \\
      = 1 - \frac{\theta^2}{2!}  + \frac{\theta^4}{4!} + \cdots +
      \mathrm{i}\left (\theta - \frac{\theta^3}{3!} + \frac{\theta^5}{5!} + \cdots \right ) \\
      = \cos\theta+\mathrm{i}\sin\theta\
  \end{aligned}
```


- We arrived to the polar form of a complex number: $z=re^{\mathrm{i}\theta}$.


## Cartesian to polar and back


:::{note}
Example Convert $z=-1+\sqrt{3}\,\mathrm{i}$ to polar form $re^{\mathrm{i}\theta}$.
:::

:::{note}
Example Convert $2e^{-\mathrm{i}\pi /2}$ to Cartesian form.
:::


:::{note} Original-slide figure pending review
The original lecture refers to `complex_numbers3.png`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::


:::{note} Original-slide figure pending review
The original lecture refers to `complex_numbers4.png`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::


## Multiplication and division in polar form


```{math}
z_1=r_1 e^{\mathrm{i}\theta_1},\quad z_2=r_2 e^{\mathrm{i}\theta_2}
```
 
```{math}
z_1 z_2 = r_1 r_2 e^{\mathrm{i}(\theta_1+\theta_2)},\qquad
    \frac{z_1}{z_2} = \frac{r_1}{r_2} e^{\mathrm{i}(\theta_1-\theta_2)}.
```


:::{note}
Example Evaluate $(1+\mathrm{i})^2/ (1-\mathrm{i})$
:::


## Powers and Roots of Complex Numbers


```{math}
z^n = (r e^{\mathrm{i}\theta})^n = r^n e^{\mathrm{i}\theta n}
```


**De Moivre's theorem:** 
```{math}
e^{\mathrm{i}\theta n} = (\cos\theta+\mathrm{i}\sin\theta)^n = \cos(n\theta)+\mathrm{i}\sin(n\theta).
```


:::{note}
Example Compute $(1+\mathrm{i})^8$.
:::


## Roots: solving $w^n=z$

For $z=re^{\mathrm{i}\theta}$, solutions to $w^n=z$ are 
```{math}
w_k = r^{1/n} e^{\mathrm{i}(\frac{\theta+2\pi k}{n})},\qquad k=0,1,\dots,n-1.
```
 Roots are equally spaced around a circle radius $r^{1/n}$.

:::{note}
Example Solve $w^3=8$.
:::

:::{note}
Example Find $\sqrt[6]{}-8 \mathrm{i}$.
:::


## Trigonometric functions

Recall the Euler formula: $e^z = e^{x+\mathrm{i}y} = e^x e^{\mathrm{i}y } = e^x (\cos y+\mathrm{i}\sin y)$

We can write a pair of equations: 
```{math}
e^{\mathrm{i}\theta} =  \cos \theta + \mathrm{i}\sin \theta
```
 
```{math}
e^{- \mathrm{i}\theta} =  \cos \theta - \mathrm{i}\sin \theta
```


And solve them for $\sin$ and $\cos$: 
```{math}
\sin \theta = \frac{e^{\mathrm{i}\theta} - e^{- \mathrm{i}\theta}}{2 \mathrm{i}}
```
 
```{math}
\cos \theta = \frac{e^{\mathrm{i}\theta} + e^{- \mathrm{i}\theta}}{2}
```


## Hyperbolic functions


Trigonometric formulas can be generalized for complex numbers z as: 
```{math}
\sin z = \frac{e^{\mathrm{i}z} - e^{- \mathrm{i}z}}{2 \mathrm{i}}
```
 
```{math}
\cos z = \frac{e^{\mathrm{i}z} + e^{- \mathrm{i}z}}{2}
```


Rewriting them for pure imaginary $z = \mathrm{i}y$ gives: 
```{math}
\sin \mathrm{i}y = \frac{e^{-y} - e^{y}}{2 \mathrm{i}} =\mathrm{i}\frac{e^{y} - e^{-y}}{2 } \equiv \sinh y
```
 
```{math}
\cos \mathrm{i}y = \frac{e^{-y} + e^{y}}{2 \mathrm{i}} = \frac{e^{y} + e^{-y}}{2 } \equiv \cosh y
```


These functions are called **hyperbolic sine** $\sinh$ and **hyperbolic cosine** $\cosh$. Their definitions for all z: 
```{math}
\sinh z =  \frac{e^{z} - e^{-z}}{2 }
```
 
```{math}
\cosh z =  = \frac{e^{z} + e^{-z}}{2 }
```


## Hyperbolic functions (continued)


$\sinh z =  \frac{e^{z} - e^{-z}}{2 }$, $\cosh z = \frac{e^{z} + e^{-z}}{2 }$

:::{note}
Example Prove the identity: $\cosh^2 z - \sinh^2 z = 1$
:::


:::{note} Original-slide figure pending review
The original lecture refers to `complex_numbers5.png`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::

## Logarithms


- Recall that for any $z \neq 0$, if $z = e^\omega \ \rightarrow \ \omega = \ln z$.

- Using the law of exponents: $z_1 z_2 = e^{\omega_1} e^{\omega_2} = e^{\omega_1 + \omega_2}$

- Taking logarithms: $\ln z_1 z_2 = \omega_1 + \omega_2 = \ln z_1 + \ln z_2$

- Applying this idea to a polar form: $\omega = \ln z = \ln (re^{\mathrm{i}\theta}) = \ln r+ \mathrm{i}(\theta + 2\pi k)$

- **Principal value** of $\ln z$:\
  $\textrm{Ln}z \equiv \operatorname{Log} z \equiv \ln r + \mathrm{i}\operatorname{Arg}z$, with $\operatorname{Arg}z\in(-\pi,\pi]$ or $\operatorname{Arg}z\in[0,2\pi)$.

:::{note}
Example Compute $\ln(-1)$.
:::


## Complex Roots and Powers


- Starting with $\ln a ^b = b \ln a$,

- We arrive at $a^b = e^{b \ln a}$

- **Note**: since $\ln a$ is multi-valued, $a^b$ is also multi-valued.

:::{note}
Example Find all values of $\mathrm{i}^{1/2}$.
:::


## Applications in Physical Chemistry


## Quantum Mechanics: complex wavefunctions


```{math}
i \hbar \frac{\partial \psi}{\partial t} = \hat{H} \psi.
```
 A free particle solution: $\psi(x,t) = A e^{i(kx - \omega t)}$


:::{note} Original-slide figure pending review
The original lecture refers to `complex_numbers6.png`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::


:::{note} Original-slide figure pending review
The original lecture refers to `complex_numbers7.jpg`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::

---

*Migration source: `02_Complex_numbers/complex_numbers1.tex` from the archived Overleaf export.*
