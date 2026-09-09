---
kernelspec:
  name: python3
  display_name: Python 3
---

# Series and Limits

```{code-cell} python
:tags: [remove-input]
import math
import numpy as np
import matplotlib.pyplot as plt

PURDUE_GOLD = "#cfb991"
PURDUE_DARK_GOLD = "#8e6f3e"
PURDUE_BLACK = "#000000"
PURDUE_GRAY = "#6f727b"

plt.rcParams.update({
    "figure.dpi": 120,
    "axes.spines.top": False,
    "axes.spines.right": False,
    "axes.grid": True,
    "grid.alpha": 0.22,
})
```


## 1. Infinite series and partial sums

A sequence is a list of terms $a_0,a_1,a_2,\ldots$, while a series asks what
happens when those terms are accumulated. The partial sum through index $N$ is

```{math}
S_N=\sum_{n=0}^{N}a_n.
```

Here $N$ is the last retained index, not the number of terms: a sum starting
at $n=0$ contains $N+1$ terms. Some examples below start at $n=1$ instead;
the limits on the sum specify which terms are included. For a power series,
$N$ will denote the highest retained power, as it does in the interactives.

An infinite series $\sum_{n=0}^{\infty}a_n$ converges to $S$ when

```{math}
\lim_{N\to\infty}S_N=S.
```

Convergence is therefore a statement about the partial sums $S_N$, not merely
about the individual terms $a_n$.


Consider the geometric partial sum:

```{math}
S_N=A+Ar+Ar^2+\cdots+Ar^N.
```

Here $A$ is the initial term and $r$ is the ratio between successive terms.

Multiplying by $r$ and subtracting aligns almost every term:

```{math}
\begin{aligned}
S_N &=A+Ar+Ar^2+\cdots+Ar^N,\\
rS_N&=\phantom{A+{}}Ar+Ar^2+\cdots+Ar^N+Ar^{N+1},\\
(1-r)S_N&=A(1-r^{N+1}).
\end{aligned}
```

Dividing by $1-r$ gives the finite sum:

```{math}
S_N=\frac{A(1-r^{N+1})}{1-r},\qquad r\neq1.
```

When $|r|<1$, the factor $r^{N+1}$ tends to zero. The infinite series then has the sum

```{math}
S=\sum_{n=0}^{\infty}Ar^n=\frac{A}{1-r}.
```

After retaining terms through $Ar^N$, the omitted tail is

```{math}
R_N=S-S_N=\frac{Ar^{N+1}}{1-r},\qquad |r|<1.
```

For nonzero $A$ and $-1<r<0$, the partial sums approach the limit from alternating sides. At
$r=1$ they grow linearly, while for $|r|>1$ the terms do not approach zero.
At $r=-1$ the partial sums oscillate. These cases follow directly from the
finite-sum formula and explain the convergence condition $|r|<1$.

#### Examples of series

```{code-cell} python
:tags: [hide-input]
n_short = np.arange(1, 31)
n_harmonic = np.arange(1, 10001)
series_examples = [
    ("Geometric", n_short - 1, 0.6 ** (n_short - 1), 1 / (1 - 0.6), False),
    ("Harmonic", n_harmonic, 1 / n_harmonic, None, True),
    ("Alternating harmonic", n_short,
     (-1) ** (n_short - 1) / n_short, np.log(2), False),
]

fig, axes = plt.subplots(2, 3, figsize=(11, 6), sharex="col")
for column, (title, n_values, terms, limit, logarithmic_x) in enumerate(series_examples):
    terms_partial = np.cumsum(terms)
    if logarithmic_x:
        axes[0, column].plot(n_values, terms, color=PURDUE_DARK_GOLD,
                             linewidth=2)
        axes[0, column].set_xscale("log")
        axes[1, column].set_xscale("log")
    else:
        axes[0, column].stem(n_values, terms, linefmt=PURDUE_DARK_GOLD,
                             markerfmt="o", basefmt=" ")
    axes[0, column].set_title(title)
    axes[0, column].set_ylabel("$a_n$")
    axes[1, column].plot(n_values, terms_partial,
                         "-" if logarithmic_x else "o-",
                         color=PURDUE_DARK_GOLD, markersize=3, linewidth=2)
    if limit is not None:
        axes[1, column].axhline(limit, color=PURDUE_BLACK, linestyle="--",
                                linewidth=1.4, label=f"limit = {limit:.3f}")
        axes[1, column].legend(frameon=False, fontsize=8)
    axes[1, column].set(xlabel="$N$", ylabel="$S_N$")

fig.suptitle("Terms and partial sums", y=1.01)
fig.tight_layout()
plt.show()
```

The geometric partial sums settle rapidly. The harmonic terms approach zero,
but their partial sums continue to grow. The alternating-harmonic partial sums
oscillate while closing in on a finite value.

## 2. Convergence tests

If $S_N\to S$, then $a_N=S_N-S_{N-1}\to S-S=0$. Consequently, convergence
of $\sum a_n$ requires $a_n\to0$.

This condition is not sufficient. The harmonic series
$1+1/2+1/3+1/4+\cdots$ diverges even though $1/n\to0$. Group its positive
terms into blocks:

```{math}
1+\frac12
+\left(\frac13+\frac14\right)
+\left(\frac15+\cdots+\frac18\right)+\cdots.
```

The block from $2^{k-1}+1$ through $2^k$ contains $2^{k-1}$ terms, each at
least $1/2^k$, so every such block contributes at least $1/2$. Infinitely many
blocks force the partial sums to grow without bound.

#### Direct comparison test

Let $a_n$ and $b_n$ be nonnegative for all sufficiently large $n$. If
$a_n\leq b_n$ eventually and $\sum b_n$ converges, then $\sum a_n$ converges.
If $b_n\leq a_n$ eventually and $\sum b_n$ diverges, then $\sum a_n$
diverges. For example, $0\leq1/n!\leq1/2^{n-1}$ for $n\geq1$, and the series
on the right is geometric. Thus $\sum 1/n!$ converges.

#### Ratio test

A series is absolutely convergent when $\sum |a_n|$ converges. Absolute
convergence also guarantees convergence of $\sum a_n$.

Suppose $a_n\neq0$ for all sufficiently large $n$ and the limit
$L=\lim_{n\to\infty}|a_{n+1}/a_n|$ exists.

- If $L<1$, the series converges absolutely.
- If $L>1$ (or $L=\infty$), it diverges.
- If $L=1$, the test gives no answer.

The reasoning is geometric: when successive terms eventually shrink by a
factor smaller than one, the remaining tail can be bounded by a geometric
series.

For $a_n=x^n/n!$, the ratio is $|x|/(n+1)\to0$. Therefore,
$\sum x^n/n!$ converges for every fixed real or complex $x$.

#### Alternating series test

If $b_n\geq0$ decreases toward zero, then
$\sum_{n=1}^{\infty}(-1)^{n-1}b_n$ converges. Successive partial sums approach
the limit from alternating sides, and the first omitted term bounds the error:
$|S-S_N|\leq b_{N+1}$.

The alternating harmonic series converges to $\ln2$, although the series of
absolute values is the divergent harmonic series. It is conditionally
convergent: the series converges, but the series of absolute values does not.

## 3. Power series and convergence domains

A power series centered at $a$ has the form

```{math}
\sum_{n=0}^{\infty}c_n(x-a)^n.
```

For each fixed $x$, this is a numerical series whose convergence we can test.
At $x=a$, only the constant term remains, so it always converges there.
The following theorem tells us how the other convergence points are arranged.

#### Theorem: radius of convergence

For every power series, there is a radius $R$, with $0\leq R\leq\infty$, such that

- the series converges absolutely for $|x-a|<R$;
- the series diverges for $|x-a|>R$.

When $0<R<\infty$, the theorem makes no claim about the two endpoints
$x=a-R$ and $x=a+R$. Each must be checked separately. If $R=0$, the series
converges only at its center; if $R=\infty$, it converges for every real $x$.

#### Proof

First suppose the series converges at a point $x_0\neq a$, a distance
$\rho=|x_0-a|$ from the center. Its terms must tend to zero, so they are
bounded: there is a constant $C$ such that

```{math}
|c_n|\rho^n\leq C\qquad\text{for every }n.
```

At any point closer to the center, put $r=|x-a|<\rho$. Then

```{math}
|c_n(x-a)^n|
=|c_n|\rho^n\left(\frac{r}{\rho}\right)^n
\leq C\left(\frac{r}{\rho}\right)^n.
```

The right-hand side is the term of a convergent geometric series, because
$r/\rho<1$. Direct comparison therefore proves absolute convergence at $x$.
Thus, convergence at any point guarantees absolute convergence at every
point closer to the center, on either side.

Now let $R$ be the supremum of the distances from $a$ at which the series
converges: the smallest upper bound, or $\infty$ if those distances are
unbounded. For any $r<R$, there is a convergence point at a distance
$\rho>r$, so the argument above gives absolute convergence at distance $r$.
There can be no convergence point at a distance greater than $R$, by its
definition. At $r=R$, the geometric comparison no longer applies, which is
why the endpoints need their own tests.

#### Finding the radius

The theorem establishes that a radius exists; a convergence test determines
its value. When the coefficients are eventually nonzero and the following
limit exists, the ratio test gives

```{math}
R=\lim_{n\to\infty}\left|\frac{c_n}{c_{n+1}}\right|.
```

This formula is not needed for every example. We can also apply the ratio
test directly to the terms of the series, or recognize a known series.

#### Example 1: geometric series

For

```{math}
\sum_{n=0}^{\infty}\left(-\frac{x}{2}\right)^n,
```

the ratio of successive term magnitudes is $|x|/2$, so $R=2$.

It converges for $|x|<2$ and diverges for $|x|>2$. At $x=2$ its terms
alternate between $1$ and $-1$; at $x=-2$ every term equals $1$. Both
endpoints diverge, so the interval is $(-2,2)$.

Near $|x|=2$, the ratio of successive terms is close to one and convergence
becomes slow. Just beyond the boundary, the same partial sums no longer settle.

Change the highest power $N$ to compare the geometric partial sum with
$f(x)=1/(1+x/2)$. Select a point on the upper plot to see its partial sums
in the lower plot. The function is smooth for $x>2$, but this series still
diverges there.

Here the slider uses $S_N(x)=\sum_{n=0}^{N}(-x/2)^n$, so it retains $N+1$ terms.

<a href="https://jonhood11.github.io/chm696-site/geometric-series-explorer/index.html" target="_blank" rel="noopener noreferrer">Open in new tab ↗</a>

<iframe src="https://jonhood11.github.io/chm696-site/geometric-series-explorer/index.html" title="Interactive geometric series and convergence interval" style="width:100%;height:950px;border:0;"></iframe>

#### Example 2: the same radius, different endpoints

Consider

```{math}
\sum_{n=1}^{\infty}\frac{(x/2)^n}{n}.
```

The ratio test again gives $R=2$. At $x=2$, however, we obtain the divergent
harmonic series. At $x=-2$, we obtain the convergent alternating harmonic
series. Its interval of convergence is therefore $[-2,2)$, rather than
$(-2,2)$. The radius alone does not decide whether an endpoint is included.

#### Example 3: an infinite radius

For the series

```{math}
\sum_{n=0}^{\infty}\frac{x^n}{n!},
```

the ratio of successive term magnitudes is $|x|/(n+1)$, which tends to zero
for every fixed $x$. Thus $R=\infty$: there are no finite endpoints to test.

Inside its radius, a power series can be differentiated and integrated term
by term. These operations preserve the radius, although endpoint behavior may
change.


## 4. Taylor and Maclaurin series

In the previous section, we started with a power series and asked where it
converges. Now we turn the question around: given a function $f(x)$, how do we
construct a power series that represents it near a chosen point $a$?

The Taylor series of $f$ about $a$ uses the derivatives at that point to
determine its coefficients:

```{math}
\sum_{n=0}^{\infty}\frac{f^{(n)}(a)}{n!}(x-a)^n
=f(a)+f'(a)(x-a)+\frac{f''(a)}{2!}(x-a)^2+\cdots.
```

The constant term matches the function's value, the linear term matches its
slope, and the higher powers match higher derivatives. This is a power series
of exactly the kind we just studied, with $c_n=f^{(n)}(a)/n!$. Its radius of
convergence tells us where the series converges; we must also check that its
sum equals the function. We will address that using the remainder in Section 5.

A Maclaurin series is simply a Taylor series centered at zero:

```{math}
\sum_{n=0}^{\infty}\frac{f^{(n)}(0)}{n!}x^n
=f(0)+f'(0)x+\frac{f''(0)}{2!}x^2+\cdots.
```

To see where the coefficients come from, suppose a polynomial

```{math}
P_N(x)=c_0+c_1(x-a)+\cdots+c_N(x-a)^N
```

is required to agree with $f$ and its first $N$ derivatives at $a$.

At $x=a$, all terms except the first vanish, so $c_0=f(a)$. Differentiating
once and evaluating at $a$ gives $c_1=f'(a)$. Differentiating twice gives
$2!c_2=f''(a)$. In general, $c_n=f^{(n)}(a)/n!$, so

```{math}
T_N(x)=\sum_{n=0}^{N}\frac{f^{(n)}(a)}{n!}(x-a)^n.
```

This is the Taylor polynomial through degree $N$. Taking all orders gives
the Taylor series introduced above, provided the derivatives of every order
exist at the expansion point.

For examples centered at zero, every derivative of $e^x$ equals $e^x$,
and the derivatives of sine and cosine cycle. Thus

```{math}
\begin{aligned}
e^x&=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\cdots,\\
e^{-x}&=1-x+\frac{x^2}{2!}-\frac{x^3}{3!}+\cdots,\\
\sin x&=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\cdots,\\
\cos x&=1-\frac{x^2}{2!}+\frac{x^4}{4!}-\cdots.
\end{aligned}
```

These four series converge for every finite real or complex $x$.

The geometric series can be integrated from $0$ to $x$, and $x$ can then be
replaced by $-x$:

```{math}
\begin{aligned}
\frac{1}{1-x}&=1+x+x^2+x^3+\cdots,\\
\frac{1}{1+x}&=1-x+x^2-x^3+\cdots,\\
-\ln(1-x)&=x+\frac{x^2}{2}+\frac{x^3}{3}+\cdots,\\
\ln(1+x)&=x-\frac{x^2}{2}+\frac{x^3}{3}-\cdots.
\end{aligned}
```

These four expansions hold for $|x|<1$; endpoint behavior must be checked
separately.

A Taylor polynomial can be calculated when enough derivatives exist. The
infinite series represents the original function only where its remainder
approaches zero, so its expansion center and convergence domain must be
specified.

#### Example: changing the expansion center

For $f(x)=1/(1-x)$, the Maclaurin expansion has radius $1$. To expand about
$a=-1$, write the same function in powers of $x+1$:

```{math}
\frac{1}{1-x}
=\frac{1}{2-(x+1)}
=\frac12\frac{1}{1-(x+1)/2}
=\sum_{n=0}^{\infty}\frac{(x+1)^n}{2^{n+1}}.
```

The first three terms are

```{math}
\frac12+\frac{x+1}{4}+\frac{(x+1)^2}{8}.
```

This geometric series converges when $|x+1|<2$, so its center is $a=-1$
and its radius is $R=2$. The interval is $(-3,1)$; both endpoints diverge.
The function has not changed, but changing the center changes the coefficients
and the interval represented by the series. In this example, the distance
from the center to the singularity at $x=1$ has increased from $1$ to $2$.

## 5. Taylor polynomials and error

In computation only finitely many terms are retained. The remainder is
$R_N(x)=f(x)-T_N(x)$.

Suppose $f$ has continuous derivatives through order $N+1$ on an interval
containing $a$ and $x$. For $x\neq a$, Taylor's theorem states that there is
some point $c$ strictly between $a$ and $x$ for which

```{math}
R_N(x)=\frac{f^{(N+1)}(c)}{(N+1)!}(x-a)^{N+1},
\qquad
|R_N(x)|\leq\frac{M|x-a|^{N+1}}{(N+1)!}
```

when $|f^{(N+1)}(t)|\leq M$ between $a$ and $x$.

Where the Taylor series represents the function, the error tends to zero as
more terms are retained, but it need not decrease at every step.

#### Example: bounding a numerical approximation

The quadratic Maclaurin approximation to $e^{0.1}$ is

```{math}
T_2(0.1)=1+0.1+\frac{0.1^2}{2}=1.105.
```

The third derivative of $e^x$ is $e^x$, which is at most $e^{0.1}$ on
$[0,0.1]$. Thus we can take $M=e^{0.1}$ and obtain

```{math}
|e^{0.1}-1.105|
\leq e^{0.1}\frac{0.1^3}{3!}
<1.85\times10^{-4}.
```

This is a guaranteed bound, not an estimate from the appearance of a plot.

#### Interactive approximations

Start with the quadratic approximation to cosine, then increase the highest
retained power $N$. The displayed polynomial updates with the slider. Choose
other functions and adjust the symmetric horizontal range up to $[-10,10]$.

The upper plot compares the function and polynomial; the lower plot shows
absolute error. Optional green shading marks sampled points where the error
is below a chosen tolerance. This is not the radius of convergence: a finite
polynomial can be inaccurate even where the infinite series converges.

<a href="https://jonhood11.github.io/chm696-site/maclaurin-explorer/index.html" target="_blank" rel="noopener noreferrer">Open in new tab ↗</a>

<iframe src="https://jonhood11.github.io/chm696-site/maclaurin-explorer/index.html" title="Interactive Maclaurin approximation and accuracy explorer" style="width:100%;height:950px;border:0;"></iframe>

:::{admonition} Preview: singularities in the complex plane
We will study complex analysis later in the course, but it gives a useful
picture of the radius of convergence. Write $z=x+iy$ and suppose a function is
analytic near $z=a$, meaning it is complex differentiable throughout a
neighborhood of that point. Its Taylor series represents it in a disk centered at $a$;
its radius extends to the nearest point where the function is singular. The
circle is therefore centered on the expansion point, not on the singularity.

For example,

```{math}
\frac{1}{1-z}=\sum_{n=0}^{\infty}z^n,\qquad |z|<1.
```

The expansion point is $z=0$, and the pole at $z=1$ is one unit away. On the
real axis this disk becomes the familiar interval $-1<x<1$.

The complex plane reveals something that the real line can hide:

```{math}
\frac{1}{1+z^2}=\sum_{n=0}^{\infty}(-1)^n z^{2n},\qquad |z|<1.
```

For real $x$, the function $1/(1+x^2)$ is smooth for every $x$. In the complex
plane, however, $1+z^2=0$ at $z=\pm i$. Both poles are one unit from the
expansion point, so the Maclaurin series still has radius $R=1$.

```{code-cell} python
:tags: [hide-input]
angle = np.linspace(0, 2 * np.pi, 500)

fig, axes = plt.subplots(1, 2, figsize=(10, 4.6))
complex_plane_examples = [
    (axes[0], r"$f(z)=1/(1-z)$", [(1, 0, r"pole at $z=1$")]),
    (axes[1], r"$f(z)=1/(1+z^2)$",
     [(0, 1, r"pole at $z=i$"), (0, -1, r"pole at $z=-i$")]),
]

for ax, title, poles in complex_plane_examples:
    ax.fill(np.cos(angle), np.sin(angle), color=PURDUE_GOLD, alpha=0.28)
    ax.plot(np.cos(angle), np.sin(angle), color=PURDUE_DARK_GOLD,
            linewidth=2, label=r"boundary $|z|=1$")
    ax.axhline(0, color=PURDUE_GRAY, linewidth=1)
    ax.axvline(0, color=PURDUE_GRAY, linewidth=1)
    ax.plot(0, 0, "o", color=PURDUE_BLACK, markersize=6)
    ax.annotate(r"expansion center $z=0$", (0, 0), xytext=(-92, -20),
                textcoords="offset points", fontsize=9)
    for real_part, imaginary_part, label in poles:
        ax.plot(real_part, imaginary_part, marker="x", color="#b83a2d",
                markersize=10, markeredgewidth=2.5)
        offset = (-72, 18) if real_part == 1 else (8, 7 if imaginary_part > 0 else -18)
        ax.annotate(label, (real_part, imaginary_part), xytext=offset,
                    textcoords="offset points", fontsize=9, color="#8b2b22")
    ax.set(xlim=(-1.45, 1.45), ylim=(-1.45, 1.45),
           xlabel=r"$\operatorname{Re} z$", ylabel=r"$\operatorname{Im} z$",
           title=title)
    ax.set_aspect("equal")
    ax.set_xticks([-1, 0, 1])
    ax.set_yticks([-1, 0, 1])

fig.suptitle("The convergence disk reaches the nearest singularity", y=1.02)
fig.tight_layout()
plt.show()
```

The shaded disks have the same radius, but the singularities that stop the two
series lie in different directions. This is one reason complex analysis is
useful even when the original variable and the measured data are real.
:::


---

## Homework


::::{admonition} Question 1

Calculate the first three nonzero terms of the Maclaurin expansion for each
of the following functions. Show your calculation.

1. $\displaystyle \frac{1}{1-x}$
2. $\displaystyle \frac{1}{1+x}$
3. $e^{-x}$
4. $\sin x$
5. $\cos x$
6. $e^x$
7. $\ln(1+x)$

::::

::::{admonition} Question 2

Use Codex to build an interactive Taylor-series visualization. Python with
Streamlit and Plotly is a suggested starting point; other approaches are welcome.

Plot the selected function and its Taylor approximation together. Include a
dropdown for all the functions in Question 1, a slider for the highest retained
power $N$, and a slider for the expansion center $a$. Allow the displayed
$x$ range to be adjusted.

1. Plot each function and its Taylor approximations about $a=0$. Increase
   $N$ and check where the series converges and where it diverges. What is
   the radius of convergence for each function?
2. Move the expansion center $a$ and repeat. Notice how the region of
   convergence moves and whether its radius changes.
3. For each function, identify any singularities and compare their distances
   from $a$ with the radius of convergence. Distinguish where the function
   itself is singular from where its Taylor series diverges.

Use the plots to explore convergence, and explain the radii you report using
the mathematics from the lecture.

Include a screenshot of your app and a few sentences about what you observed
in your homework submission. Be prepared to demonstrate it and discuss what
you noticed in class.

::::

::::{admonition} Question 3

The harmonic approximation to a molecular bond. Let $q=r-r_e$ be the
displacement of a bond from equilibrium, and consider the Morse potential

```{math}
V(q)=D_e\left(1-e^{-aq}\right)^2.
```

Here $D_e>0$ is the well depth and $a>0$ sets the inverse length scale of
the potential.

1. Expand $V(q)$ about $q=0$ through fourth order.
2. Match the quadratic term to $kq^2/2$ and determine the harmonic force
   constant $k$ in terms of $D_e$ and $a$.
3. How do the cubic and quartic terms change the harmonic approximation?
   What does the cubic term tell you about stretching versus compressing
   the bond?
4. Plot the exact Morse potential together with its second-, third-, and
   fourth-order approximations. Plot $V/D_e$ against $aq$.

::::

::::{admonition} Question 4

A vibrational partition function as a geometric series. The energy
levels of a quantum harmonic oscillator are

```{math}
E_n=\hbar\omega\left(n+\frac12\right),
\qquad n=0,1,2,\ldots.
```

The partition function sums the Boltzmann weights $e^{-\beta E_n}$ of the
energy levels. Here $\beta=1/(k_BT)$, where $k_B$ is Boltzmann's constant
and $T>0$ is the absolute temperature; assume $\omega>0$.

Define the truncated vibrational partition function

```{math}
Z_N=\sum_{n=0}^{N}e^{-\beta E_n}.
```

1. Rewrite $Z_N$ as a finite geometric series and obtain a closed-form
   expression.
2. Take $N\to\infty$ and show that

   ```{math}
   Z=\frac{e^{-\beta\hbar\omega/2}}
   {1-e^{-\beta\hbar\omega}}.
   ```


::::
