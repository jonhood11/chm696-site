# Complex Numbers

:::{admonition} Course-material provenance
:class: dropdown
This page was migrated from the CHM 696 course materials developed by Jonathan Hood and Lyudmila Slipchenko. Equations and examples remain under editorial review during the Fall 2026 website migration.
:::

## Learning goals

After this lecture, you should be able to:

- move between Cartesian and polar forms of a complex number;
- perform arithmetic, powers, and roots in the most convenient form;
- use Euler's formula to derive trigonometric and hyperbolic identities;
- distinguish the multivalued complex logarithm from its principal branch; and
- interpret complex amplitudes in physical applications.

## Definition and notation

A complex number has Cartesian form

```{math}
z=x+\mathrm{i}y,\qquad x,y\in\mathbb{R},
```

with

```{math}
\operatorname{Re}z=x,\qquad \operatorname{Im}z=y.
```

It can also be identified with the ordered pair $(x,y)$ or written in polar
form:

```{math}
z=r(\cos\theta+\mathrm{i}\sin\theta)=r e^{\mathrm{i}\theta},
\qquad r=|z|=\sqrt{x^2+y^2}.
```

The angle $\theta$ is an **argument** (or phase) of $z$. Arguments that differ
by $2\pi k$, $k\in\mathbb{Z}$, describe the same nonzero complex number.

```{figure} figures/02-complex-numbers/complex_numbers1.jpg
:alt: Argand diagram showing the real and imaginary components, modulus, and argument of a complex number
:width: 75%

Cartesian and polar descriptions of a complex number in the Argand plane.
```

:::{warning}
Use radians in analytical formulas involving derivatives, series, or
integrals. Degrees may be used for numerical angle calculations only after the
relevant formulas have been interpreted consistently.
:::


## Complex conjugate


- A complex number: $z = x + \mathrm{i}y$

- Complex conjugate: $\bar{z} = z^* =  x - \mathrm{i}y$

- $\bar{z} = r(\cos(-\theta) + i \sin(-\theta)) = r(\cos(\theta) - i \sin(\theta)) = re^{-i\theta}$


```{figure} figures/02-complex-numbers/complex_numbers2.png
:alt: A complex number and its conjugate reflected across the real axis
:width: 35%

Complex conjugation reflects a point across the real axis.
```


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
Example Find the disk of convergence for

```{math}
1-z+\frac{z^2}{2}-\frac{z^3}{3}+\cdots
=1+\sum_{n=1}^{\infty}\frac{(-1)^n z^n}{n}.
```
:::

:::{note}
Example Find the disk of convergence for $\sum_{n=0}^{\infty} \frac{(z+1-i)^n}{3^n n^2}$
:::


## Euler's formula and polar form

Euler's formula is

```{math}
e^{\mathrm{i}\theta}=\cos\theta+\mathrm{i}\sin\theta.
```

- Recall from the last lecture:
```{math}
\sin\theta = \theta - \theta^3/3! + \theta^5/5! - \cdots
```

```{math}
\cos\theta = 1 - \theta^2/2! + \theta^4/4! + \cdots
```


- Now write the series for $e^{\mathrm{i}\theta}$ for real $\theta$:
```{math}
\begin{aligned}
      e^{\mathrm{i}\theta} &= 1 + \mathrm{i}\theta + \frac{(\mathrm{i}\theta)^2}{2!} + \frac{(\mathrm{i}\theta)^3}{3!} + \frac{(\mathrm{i}\theta)^4}{4!} + \frac{(\mathrm{i}\theta)^5}{5!} + \cdots \\
      = 1 + \mathrm{i}\theta - \frac{\theta^2}{2!} -\mathrm{i}\frac{\theta^3}{3!} + \frac{\theta^4}{4!} + \mathrm{i}\frac{\theta^5}{5!} + \cdots \\
      = 1 - \frac{\theta^2}{2!}  + \frac{\theta^4}{4!} + \cdots +
      \mathrm{i}\left (\theta - \frac{\theta^3}{3!} + \frac{\theta^5}{5!} + \cdots \right ) \\
      &= \cos\theta+\mathrm{i}\sin\theta
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


```{figure} figures/02-complex-numbers/complex_numbers4.png
:alt: Unit circle representation of Euler's formula
:width: 55%

Euler's formula on the unit circle.
```

The ordinary arctangent does not by itself determine the quadrant of a complex
number. Numerically, use a two-argument function such as
$\theta=\operatorname{atan2}(y,x)$.

```{figure} figures/02-complex-numbers/complex_numbers3.png
:alt: Branches of the tangent function separated by vertical asymptotes
:width: 55%

The periodicity of tangent explains why an arctangent value must be combined
with quadrant information.
```


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
Example Find all sixth roots of $-8\mathrm{i}$.
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
\sin(\mathrm{i}y)
=\frac{e^{-y}-e^y}{2\mathrm{i}}
=\mathrm{i}\frac{e^y-e^{-y}}{2}
=\mathrm{i}\sinh y
```

```{math}
\cos(\mathrm{i}y)
=\frac{e^{-y}+e^y}{2}
=\cosh y
```


These functions are called **hyperbolic sine** $\sinh$ and **hyperbolic cosine** $\cosh$. Their definitions for all z:
```{math}
\sinh z =  \frac{e^{z} - e^{-z}}{2 }
```

```{math}
\cosh z = \frac{e^{z} + e^{-z}}{2 }
```


## Hyperbolic functions (continued)


$\sinh z =  \frac{e^{z} - e^{-z}}{2 }$, $\cosh z = \frac{e^{z} + e^{-z}}{2 }$

:::{note}
Example Prove the identity: $\cosh^2 z - \sinh^2 z = 1$
:::


```{figure} figures/02-complex-numbers/complex_numbers5.png
:alt: Graphs of the hyperbolic sine, cosine, and tangent functions
:width: 65%

The real hyperbolic functions $\sinh x$, $\cosh x$, and $\tanh x$.
```

## Logarithms


- Recall that for any $z \neq 0$, if $z = e^\omega \ \rightarrow \ \omega = \ln z$.

- Using the law of exponents: $z_1 z_2 = e^{\omega_1} e^{\omega_2} = e^{\omega_1 + \omega_2}$

- For the multivalued logarithm,
  $\log(z_1z_2)=\log z_1+\log z_2$ is understood modulo $2\pi\mathrm{i}$.
  A chosen principal branch does not obey the product rule globally.

- Applying this idea to a polar form: $\omega = \ln z = \ln (re^{\mathrm{i}\theta}) = \ln r+ \mathrm{i}(\theta + 2\pi k)$

- On the conventional principal branch,

  ```{math}
  \operatorname{Log}z=\ln r+\mathrm{i}\operatorname{Arg}z,
  \qquad \operatorname{Arg}z\in(-\pi,\pi].
  ```

:::{note}
Example Compute $\ln(-1)$.
:::


## Complex Roots and Powers


- Starting with $\ln a ^b = b \ln a$,

- We arrive at $a^b = e^{b \ln a}$

- Because the complex logarithm is multivalued, the definition
  $a^b=e^{b\log a}$ generally produces a set of values. For special exponents,
  some or all of those values may coincide.

:::{note}
Example Find all values of $\mathrm{i}^{1/2}$.
:::


## Applications in Physical Chemistry


## Quantum Mechanics: complex wavefunctions


```{math}
i \hbar \frac{\partial \psi}{\partial t} = \hat{H} \psi.
```
 A free particle solution: $\psi(x,t) = A e^{i(kx - \omega t)}$


```{figure} figures/02-complex-numbers/complex_numbers6.png
:alt: Real and imaginary parts of a traveling complex wave
:width: 80%

The real and imaginary parts of a complex wave are phase shifted.
```

```{figure} figures/02-complex-numbers/complex_numbers7.jpg
:alt: Piecewise real and imaginary parts of a model complex wavefunction
:width: 80%

A complex wavefunction represented by its real and imaginary components.
```

---

*Migration source: `02_Complex_numbers/complex_numbers1.tex` from the archived Overleaf export.*
