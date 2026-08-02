---
kernelspec:
  name: python3
  display_name: Python 3
---

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

:::{figure} figures/02-complex-numbers/complexplane.png
:alt: Hand-drawn complex plane showing a number and its complex conjugate
:width: 55%

Complex-plane sketch from Jonathan's original long-form notes, showing the
modulus and the phases of $z=x+iy$ and $z^*=x-iy$.
:::

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

## Candidate visualizations for review

The figures in this section are optional teaching candidates. They are kept at
the end so they can be judged separately from the lecture itself.

```{code-cell} python
:tags: [hide-input]
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.patches import Arc, Polygon

GOLD = "#cfb991"
DARK_GOLD = "#8e6f3e"
BLACK = "#000000"
GRAY = "#6f727b"

plt.rcParams.update({
    "figure.dpi": 120,
    "axes.spines.top": False,
    "axes.spines.right": False,
    "axes.grid": True,
    "grid.alpha": 0.22,
})
```

### Cartesian and polar descriptions of the same number

This construction makes $x$, $y$, $r$, and $\theta$ visible at the same time,
so conversion between the two notations becomes geometric rather than a list
of formulas.

```{code-cell} python
z = 3 + 2j
x, y = z.real, z.imag
r, theta = abs(z), np.angle(z)

fig, ax = plt.subplots(figsize=(6.8, 5.2))
ax.axhline(0, color=GRAY, linewidth=1)
ax.axvline(0, color=GRAY, linewidth=1)
ax.plot([0, x], [0, y], color=DARK_GOLD, linewidth=3)
ax.scatter([x], [y], s=70, color=BLACK, zorder=4)
ax.plot([x, x], [0, y], "--", color=GRAY)
ax.plot([0, x], [y, y], "--", color=GRAY)
ax.add_patch(Arc((0, 0), 1.7, 1.7, theta1=0,
                 theta2=np.degrees(theta), color=GOLD, linewidth=3))
ax.text(x + 0.12, y + 0.08, r"$z=x+iy=re^{i\theta}$")
ax.text(x / 2 - 0.2, y / 2 + 0.2, rf"$r={r:.2f}$", color=DARK_GOLD)
ax.text(0.92, 0.18, rf"$\theta={np.degrees(theta):.1f}^\circ$")
ax.text(x / 2, -0.35, rf"$x={x:.0f}$", ha="center")
ax.text(x + 0.18, y / 2, rf"$y={y:.0f}$", va="center")
ax.set(xlim=(-0.7, 4.4), ylim=(-0.7, 3.4), aspect="equal",
       xlabel="real part", ylabel="imaginary part",
       title="One complex number, two coordinate systems")
plt.show()
```

### Multiplication as scaling and rotation

The same multiplier acts on every point by one common scale factor and one
common angle. Showing a small shape before and after the multiplication makes
that global action easier to recognize.

```{code-cell} python
w = 1.35 * np.exp(1j * np.deg2rad(38))
shape = np.array([0.5+0.4j, 2.3+0.4j, 2.3+1.6j, 0.5+1.6j, 0.5+0.4j])
mapped = w * shape

fig, axes = plt.subplots(1, 2, figsize=(10, 4.4), sharex=True, sharey=True)
for ax, points, title, color in [
    (axes[0], shape, "Original points z", BLACK),
    (axes[1], mapped, "After multiplication: wz", DARK_GOLD),
]:
    ax.axhline(0, color=GRAY, linewidth=1)
    ax.axvline(0, color=GRAY, linewidth=1)
    ax.plot(points.real, points.imag, "o-", color=color, linewidth=2)
    ax.plot([0, points[1].real], [0, points[1].imag], "--", color=GOLD)
    ax.set(aspect="equal", xlim=(-1.8, 3.2), ylim=(-0.5, 3.6),
           xlabel="Re", ylabel="Im", title=title)
fig.suptitle(rf"$w={abs(w):.2f}e^{{i{np.degrees(np.angle(w)):.0f}^\circ}}$: scale, then rotate")
fig.tight_layout()
plt.show()
```

### Roots arranged as a regular polygon

All $n$ roots have the same magnitude and equally spaced arguments. The plot
turns the otherwise easy-to-miss $2\pi k/n$ term into a visible symmetry.

```{code-cell} python
n = 5
target = 2 * np.exp(1j * np.deg2rad(70))
k = np.arange(n)
roots = abs(target)**(1/n) * np.exp(1j * (np.angle(target) + 2*np.pi*k) / n)

fig, ax = plt.subplots(figsize=(6.3, 5.4))
ax.axhline(0, color=GRAY, linewidth=1)
ax.axvline(0, color=GRAY, linewidth=1)
ax.add_patch(Polygon(np.c_[roots.real, roots.imag], closed=True,
                     fill=False, edgecolor=GOLD, linewidth=2))
ax.scatter(roots.real, roots.imag, s=90, color=DARK_GOLD, zorder=3)
for index, root in enumerate(roots):
    ax.plot([0, root.real], [0, root.imag], color=GRAY, alpha=0.55)
    ax.text(root.real * 1.13, root.imag * 1.13, rf"$k={index}$", ha="center")
ax.set(aspect="equal", xlim=(-1.7, 1.7), ylim=(-1.7, 1.7),
       xlabel="Re", ylabel="Im", title=f"The {n} distinct {n}th roots of z")
plt.show()
```

### The principal-argument branch cut

Comparing the continuously increasing angle with the principal argument shows
exactly where and why the value jumps at the negative real axis.

```{code-cell} python
angle = np.linspace(-2*np.pi, 2*np.pi, 900)
principal = (angle + np.pi) % (2*np.pi) - np.pi

fig, ax = plt.subplots(figsize=(8.2, 4.2))
ax.plot(angle / np.pi, angle / np.pi, color=GRAY, linewidth=2,
        label="unwrapped angle")
ax.plot(angle / np.pi, principal / np.pi, color=DARK_GOLD, linewidth=2.5,
        label="principal Arg")
for cut in (-1, 1):
    ax.axvline(cut, color=BLACK, linestyle="--", alpha=0.65)
ax.set(xlabel=r"angle around the origin, $\theta/\pi$",
       ylabel=r"reported argument divided by $\pi$",
       yticks=[-2, -1, 0, 1, 2],
       title="Principal Arg wraps angles into one interval")
ax.legend(frameon=False)
plt.show()
```

## ChatGPT-assisted homework and project ideas

For any of these assignments, students may use ChatGPT as a provisional
collaborator, but the submission must include the important prompts, an
independent mathematical check, at least one correction or limitation, and the
student's own conceptual explanation. ChatGPT output by itself is not evidence.

1. **Branch-cut detective.** Give ChatGPT a set of complex logarithms, roots,
   and noninteger powers for points near the negative real axis. Determine
   whether it has silently used a principal value where all values were
   requested. Plot the arguments and branch cut, repair any missing values, and
   explain precisely which operations are multivalued.

2. **Build and audit a complex iteration.** Ask ChatGPT to write a short Python
   experiment for $z_{n+1}=z_n^2+c$ or another simple complex recurrence. Test
   several initial points, visualize their paths in the complex plane, and use
   modulus and argument—not the picture alone—to explain why two paths behave
   differently. Identify one conclusion the finite computation cannot prove.

3. **Global phase versus relative phase.** Ask ChatGPT to explain why multiplying
   a quantum state by one global phase does not change probabilities, while a
   relative phase can change interference. Construct a two-component numerical
   example, calculate the relevant probabilities in two bases, and critique any
   wording that confuses a complex amplitude with an observable probability.

---

*Migration source: `02_Complex_numbers/complex_numbers1.tex` from the archived Overleaf export.*
