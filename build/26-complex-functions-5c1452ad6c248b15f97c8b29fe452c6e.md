# Functions of a Complex Variable

:::{admonition} Course-material provenance
:class: dropdown
This page was migrated from the CHM 696 course materials developed by Jonathan Hood and Lyudmila Slipchenko. Equations and examples remain under editorial review during the Fall 2026 website migration.
:::

## Complex Numbers

A complex number is $$z = x + i y, \qquad x, y \in \mathbb{R}.$$

We consider functions $$f: \mathbb{C} \to \mathbb{C}.$$

We can always rewrite any complex function as $$f(z) = u(x,y) + i\, v(x,y),$$ where $u,v$ are real-valued functions.


## Complex Differentiability

The derivative of a complex function is $$f'(z_0) = \lim_{z \to z_0} \frac{f(z) - f(z_0)}{z - z_0}.$$


:::{note} Original-slide figure pending review
The original lecture refers to `cf1.png`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::

Key idea:

- In $\mathbb{R}$, there is only one direction to approach.

- In $\mathbb{C}$, there are infinitely many directions.

Therefore the limit must be the *same in all directions*, which imposes strong constraints.


## Holomorphic Functions


:::{note}
Definition A function is **holomorphic** (or *analytic* or *regular* or *monogenic*) in a domain if it is complex differentiable at every point there.
:::

:::{note}
Note The statement "$f(z)$ is analytic at a point $z = a$" means that $f(z)$ has a derivative at every point inside some small circle about $z = a$.
:::

Holomorphic functions are extremely well-behaved:

- infinitely differentiable

- equal to their Taylor series

- integrals over closed loops vanish

- uniquely determined by values on any arbitrarily small region


## Holomorphic Functions (continued)


:::{note}
Example Find $\frac{d}{dz}(z^2)$
:::

:::{note}
Example Find $\frac{d}{dz}(|z|^2)$
:::


## Cauchy--Riemann Equations


:::{note}
Theorem

If $f(z) = u(x,y) + iv(x,y)$ is analytic in a region, then in that region: $$\boxed{
\begin{aligned}
u_x &= v_y,\\
u_y &= -v_x.
\end{aligned}}$$

These are the [Cauchy--Riemann (CR) conditions]{style="color: blue"}.
:::

:::{note}
Theorem If CR holds, and $u(x,y)$ and $v(x,y)$ and their partial derivatives are continuous in a region, then $f(z)$ is complex differentiable (holomorphic) in the region.
:::


## Example: $f(z) = z^2$

Let $z = x + iy$. $$z^2 = (x^2 - y^2) + i(2xy).$$

Thus $$u = x^2 - y^2, \qquad v = 2xy.$$

Compute: $$u_x = 2x = v_y, \qquad u_y = -2y = -v_x.$$

CR hold everywhere $\Rightarrow$ $f$ is holomorphic on $\mathbb{C}$.


## Examples of Holomorphic Functions

Entire functions (holomorphic on all of $\mathbb{C}$):

- polynomials

- $e^z$

- $\sin z, \cos z$

- power series with infinite radius of convergence

Meromorphic functions (holomorphic except poles):

- rational functions

- $1/z$ (pole at $0$)

Branch‐cut functions:

- $\log z$, $z^\alpha$, $\sqrt{z}$


## Singularities


:::{note}
Definition A *regular point* of $f(z)$ is a point at which $f(z)$ is analytic.
:::

:::{note}
Definition A *singular point* or *singularity* of $f(z)$ is a point at which $f(z)$ is not analytic.

It is called an *isolated singular point* if $f(z)$ is analytic everywhere else inside some small circle about the singular point.
:::

Types of singularities:

- **Removable:** $\frac{\sin z}{z}$ at $z=0$

- **Poles:** $(z-1)^{-3}$

- **Essential:** $e^{1/z}$ at $z=0$ (wild behavior)

Understanding singularities is key to evaluating integrals using residues.


## Contour Integrals

A [contour integral]{style="color: blue"} along a path $\gamma$: $$\oint_\gamma f(z)\, dz.$$

**Cauchy's Theorem:**

If $f$ is holomorphic on and inside a closed contour $C$, then $$\oint_C f(z)\, dz = 0.$$

**Key idea:** Integral depends only on the analyticity of $f(z)$, not on the shape of the contour.

**Consequences:**

- All closed-path integrals of analytic functions vanish.

- Contours may be continuously deformed without changing the integral.

- Cauchy integral formula follows immediately.


## Example 1: Integral of a Polynomial Over a Closed Contour

Evaluate $$\oint_{\Gamma} (3z^2 - 4z + 7)\, dz,$$ where $\Gamma$ is any simple closed loop in $\mathbb{C}$.

**Reasoning:**

- Polynomials are analytic everywhere.

- Cauchy's theorem applies directly.

$$\boxed{\displaystyle \oint_{\Gamma} (3z^2 - 4z + 7)\, dz = 0.}$$


## Example 2: Path Deformation

Compute $$\int_{\Gamma_1} \frac{e^z}{z-1}\, dz,$$ where $\Gamma_1$ encloses no singularity of the integrand.

**Observation:** $$\frac{e^z}{z-1}$$ is analytic everywhere inside $\Gamma_1$ except at $z=1$. But if $1$ is outside $\Gamma_1$, Cauchy's theorem implies:

$$\boxed{\displaystyle
\int_{\Gamma_1} \frac{e^z}{z-1}\, dz = 0.
}$$

**Idea:** Contour can be shrunk to a point *without crossing the singularity*.


## Example 3: Different Contours Give the Same Result

Let $\Gamma_1$ and $\Gamma_2$ be two contours enclosing the same region where $f(z)$ is analytic.

$$\int_{\Gamma_1} \cos(z)\, dz = \int_{\Gamma_2} \cos(z)\, dz.$$

**Reason:** $$\oint_{\Gamma_1 - \Gamma_2} \cos(z)\, dz = 0 \quad \Rightarrow \quad
\int_{\Gamma_1} \cos(z)\, dz = \int_{\Gamma_2} \cos(z)\, dz.$$

**Example:** A circle, a triangle, or a square around no singularities give identical results (all zero).


## Example 4: Shrinking a Contour Around an Isolated Singularity

Consider $$\int_{\Gamma} \frac{1}{z}\, dz,$$ where $\Gamma$ is any simple loop wrapping once around $z=0$.

Even though $f(z)=1/z$ is not analytic at the origin, the contour can be deformed to any other closed path linking the origin.

$$\int_{\Gamma} \frac{1}{z}\, dz
= \int_{|z|=\varepsilon} \frac{1}{z}\, dz
= \int_0^{2\pi} i\, d\theta
= 2\pi i.$$

Here we used $z = \varepsilon e^{\mathrm{i}\theta}$, $dz = \mathrm{i}\varepsilon e^{i\theta}d\theta$

**Key point:** Contour deformations are valid as long as the singularity is not crossed.


## Example 5: Using Cauchy's Theorem to Avoid a Hard Integral

Evaluate $$\int_{\Gamma} z^5 \sin(z)\, dz,$$ where $\Gamma$ is an ellipse enclosing no singularities of the integrand.

**Observation:** $z^5\sin(z)$ is entire (analytic everywhere).

$$\boxed{\displaystyle \int_{\Gamma} z^5 \sin(z)\, dz = 0.}$$

**This avoids computing a messy antiderivative!**


## Cauchy Integral Formula

If $f(z)$ is holomorphic inside and on a simple closed contour $C$, the value of $f(z)$ at a point $z = a$ inside $C$ is given by the following contour integral along $C$: $$\boxed{
f(z_0)
= \frac{1}{2\pi i} \oint_{C} \frac{f(z)}{z - z_0}\, dz.
}$$

**Interpretation:**

- An analytic function is completely determined by its boundary values.

- The integrand has a simple pole at $z=z_0$.

- The integral extracts the value of $f$ at $z_0$.

**Geometric intuition:** The contour "samples" $f(z)$ around $z_0$ and reconstructs the value at the center.


## Example: Using Cauchy's Integral Formula

Evaluate $$\oint_{\Gamma} \frac{e^{z}}{z - 2}\, dz,$$ where $\Gamma$ is any contour enclosing $z=2$.

**Apply the formula:** $$\oint_{\Gamma} \frac{f(z)}{z - z_0}\, dz
= 2\pi i\, f(z_0).$$

Here $f(z) = e^{z}$ and $z_0 = 2$:

$$\oint_{\Gamma} \frac{e^{z}}{z - 2}\, dz
= 2\pi i\, e^{2}.$$

**No need to evaluate by parametrizing the contour!**


## Cauchy's Integral Formula for Derivatives

For $n \ge 1$, $$f^{(n)}(z_0) =
\frac{n!}{2\pi i}
\oint_{\Gamma}
\frac{f(z)}{(z - z_0)^{\,n+1}}\, dz.$$

**Example:** $$\oint_{\Gamma} \frac{\cos z}{(z - 1)^3}\, dz
= 2\pi i \cdot \frac{1}{2!} \cos''(1).$$

**Usefulness:**

- Computes derivatives without differentiating.

- Key tool for evaluating integrals with higher-order poles.


## Example: Integrating Around a Simple Pole

Evaluate $$\oint_{\Gamma} \frac{z^2 + 1}{z - i}\, dz,$$ where $\Gamma$ encloses $z=i$ once.

**Identify:** $$f(z) = \frac{g(z)}{z-i}, \qquad g(z) = z^2 + 1.$$

$$\oint_{\Gamma} f(z)\, dz
= 2\pi i\, g(i)
= 2\pi i\, (i^2 + 1)
= 2\pi i( -1 + 1 )
= 0.$$

**Conclusion:** Even though there is a pole, the integral may vanish if $g(i)=0$.


## Example: Contour Enclosing Several Poles

Evaluate $$\oint_{\Gamma} \left(
\frac{1}{z-1} + \frac{2}{z+2}
\right) dz,$$ where $\Gamma$ encloses both $z=1$ and $z=-2$.

$$\oint_{\Gamma} \frac{1}{z-1} dz = 2\pi i,
\qquad
\oint_{\Gamma} \frac{2}{z+2} dz = 2\pi i \cdot 2.$$

$$\boxed{
\oint_{\Gamma} = 2\pi i (1+2) = 6\pi i.
}$$

**Each pole contributes independently.**


## Laurent Series: Definition

Let $f(z)$ be analytic on an annulus $$A = \{ z : r < |z - z_0| < R \}.$$

Then $f(z)$ can be expanded in series convergent in $A$: $$f(z) = \sum_{n=-\infty}^{\infty} a_n (z - z_0)^n,$$ where the coefficients are given by $$a_n = \frac{1}{2\pi i}\oint_{|z-z_0|=\rho}
\frac{f(z)}{(z-z_0)^{\,n+1}}\, dz,
\qquad r < \rho < R.$$

This is a [Laurent series]{style="color: blue"}.

**Structure:**

- Positive-power terms: *regular (analytic) part*

- Negative-power terms: *principal part*


## Annulus in the Complex Plane


:::{admonition} Definition
An **annulus** in the complex plane is the set $$A = \{\, z \in \mathbb{C} : R_1 < |z - z_0| < R_2 \,\},$$ where $z_0$ is the center and $0 \le R_1 < R_2$.
:::

- It is the region between two concentric circles.

- Laurent series converge on an annulus, not on a disk.

- Different singularities inside the inner circle determine the negative-power terms.

- Analyticity in the region outside the inner radius ensures convergence there.


## Classifying Singularities via Laurent Series

The Laurent series determines the nature of an isolated singularity at $z_0$:

- **Removable singularity:** All negative-power coefficients vanish: $$a_{-1} = a_{-2} = \cdots = 0.$$

- **Pole of order $m$:** $$a_{-m} \neq 0,\quad\text{but } a_{-(m+1)} = a_{-(m+2)} = \cdots = 0.$$

- **Essential singularity:** Infinitely many negative-power terms: $$a_{-1}, a_{-2}, \dots \text{ not eventually zero}.$$

**Key idea:** The principal part encodes the singular behavior.


## Laurent Expansion: Example

Consider $$f(z)=\frac{1}{1-z}.$$

**Case 1:** If $|z|<1$, use the geometric series: $$\frac{1}{1-z} = \sum_{n=0}^{\infty} z^n.$$

**This is a Taylor series** (no negative powers). It converges in the disk $|z|<1$.


## Laurent Expansion for $|z|>1$

Rewrite the function: $$\frac{1}{1-z} = -\frac{1}{z}\frac{1}{1-\frac{1}{z}}.$$

Now expand the geometric series in $\frac{1}{z}$: $$-\frac{1}{z} \sum_{n=0}^{\infty} \left(\frac{1}{z}\right)^n
= -\sum_{n=1}^{\infty} z^{-n}.$$

This is a **Laurent series with only negative powers**. It converges in the annulus: $$|z|>1.$$


## Why Two Different Series?

The function $f(z)=\frac{1}{1-z}$ has a singularity at $z=1$.

- Expansion around $z=0$ depends on distance to the singularity.

- If $|z|<1$: the singularity is outside, so a Taylor series converges.

- If $|z|>1$: the singularity is inside the contour, requiring negative powers.

Thus the Laurent series converges in two separate regions:

$$\begin{cases}
\text{Disk } |z|<1: & \displaystyle \sum_{n=0}^\infty z^n,\\[6pt]
\text{Exterior } |z|>1: & \displaystyle -\sum_{n=1}^\infty z^{-n}.
\end{cases}$$


## Laurent Series: Example


:::{note}
Example Write Laurent Series of $\frac{1}{z(1-z)}$
:::

We expand $$\frac{1}{z(1-z)} = \frac{1}{z} \cdot \frac{1}{1-z}$$

For $|z|<1$: $$\frac{1}{1-z} = \sum_{n=0}^{\infty} z^n.$$

Thus $$\frac{1}{z(1-z)} = \sum_{n=0}^{\infty} z^{n-1}
= z^{-1} + 1 + z + z^2 + \cdots$$

**Principal part:** $z^{-1}$\
**Regular part:** $1 + z + z^2 + \cdots$


## Residue of a Function at a Pole

If $f(z)$ has an isolated singularity at $z_0$ with Laurent expansion $$f(z) = \cdots + \frac{a_{-1}}{z - z_0} + a_0 + a_1 (z - z_0) + \cdots,$$ then the **residue** of $f(z)$ at $z_0$ is $$\operatorname{Res}(f, z_0) = a_{-1}.$$

**Interpretation:** The residue is the coefficient of the $(z - z_0)^{-1}$ term in the Laurent series.


## Residue Theorem


Let $f(z)$ be analytic in a domain except for isolated singularities $z_1,\dots,z_n$ inside a positively oriented contour $\Gamma$.

Then the [Residue Theorem]{style="color: blue"} is valid: $$\oint_{\Gamma} f(z)\, dz
= 2\pi i \sum_{k=1}^{n} \operatorname{Res}(f, z_k).$$

**Consequences:**

- Integral depends only on the residues inside $\Gamma$.

- Contour shape does not matter (homotopy invariance).

- Reduces contour integrals to local expansions at singularities.


## Computing Residues of Rational Functions

**Residue at a Simple Pole**

If $f(z)$ has a simple pole at $z=z_0$, then $$\operatorname{Res}_{z=z_0} f(z)
  = \lim_{z\to z_0} (z - z_0) f(z).$$

**Example:** $$f(z) = \frac{1}{z(z-1)}$$ has simple poles at $z=0$ and $z=1$.

$$\operatorname{Res}_{z=0} f(z)
  = \lim_{z\to 0} z\,\frac{1}{z(z-1)}
  = -1.$$

$$\operatorname{Res}_{z=1} f(z)
  = \lim_{z\to 1} (z-1)\frac{1}{z(z-1)}
  = \frac{1}{1} = 1.$$


## Residues at Higher-Order Poles

If $f(z)$ has a pole of order $m$ at $z_0$, then $$\operatorname{Res}_{z=z_0}f(z)
= \frac{1}{(m-1)!} \lim_{z\to z_0}
\frac{d^{\,m-1}}{dz^{\,m-1}}
\left[(z - z_0)^m f(z)\right].$$

**Special case: Pole of order 2** $$\operatorname{Res}_{z=z_0}f(z)
= \lim_{z\to z_0}
\frac{d}{dz}\left[(z - z_0)^2 f(z)\right].$$


## Using Residues to Evaluate Real Integrals


**Goal:** Compute integrals of the form $$\int_{-\infty}^{\infty} g(x)\,dx.$$

**Method:**

1.  Extend $g(x)$ to a complex function $f(z)$.

2.  Integrate $f(z)$ around a contour that contains the real axis.

3.  Use Cauchy's Residue Theorem: $$\oint f(z)\,dz = 2\pi i \sum \operatorname{Res} f(z).$$

4.  Show the integral on the large semicircle vanishes.

5.  Conclude $$\int_{-\infty}^{\infty} g(x)\,dx
        = 2\pi i\sum \operatorname{Res} f(z).$$


## Example: A Standard Residue Calculation


Evaluate: $$I = \int_{-\infty}^{\infty} \frac{dx}{x^2 + 1}.$$

**Complex extension:** $$f(z) = \frac{1}{z^2 + 1} = \frac{1}{(z-i)(z+i)}.$$

**Pole inside upper semicircle:** $z=i$.

$$\operatorname{Res}_{z=i} f(z)
= \lim_{z\to i} (z-i) \frac{1}{(z-i)(z+i)}
= \frac{1}{2i}.$$

Thus the contour integral equals: $$2\pi i \cdot \frac{1}{2i} = \pi.$$

Semicircle contribution $\to 0$, so:

$$\boxed{ \int_{-\infty}^{\infty} \frac{dx}{x^2+1} = \pi }.$$


## Semicircle Contribution Vanishes

Parameterize semicircle: $z = R e^{i\theta}, \theta \in [0, \pi]$, $dz = i R e^{i\theta} d\theta$.

$$\int_{\text{semicircle}} \frac{dz}{z^2 + 1} = \int_0^\pi \frac{i R e^{i\theta} d\theta}{R^2 e^{2i\theta} + 1}$$

Estimate magnitude: $$\left| \int_{\text{semicircle}} \frac{dz}{z^2 + 1} \right|
\le \int_0^\pi \frac{R d\theta}{|R^2 e^{2i\theta} + 1|} \sim \frac{\pi}{R} \to 0 \text{ as } R \to \infty$$

**Conclusion:** Semicircle does not contribute in the limit $R \to \infty$.


## Real-Line Integral vs Semicircle Contribution

Consider the integral $$\int_{-\infty}^{\infty} \frac{dx}{x^2 + 1}$$ computed using a semicircular contour in the upper half-plane.

**Contour:**

- Real axis: $-R \to R$ (horizontal)

- Semicircle of radius $R$ in the upper half-plane

**Decomposition:** $$\oint_C \frac{dz}{z^2 + 1} =
\underbrace{\int_{-R}^{R} \frac{dx}{x^2+1}}_{\text{Real-line integral (non-zero)}} +
\underbrace{\int_{\text{semicircle}} \frac{dz}{z^2 + 1}}_{\text{Semicircle integral (vanishes as $R\to\infty$)}}$$


## Real-Line Integral vs Semicircle Contribution - cont

**Key points:**

- The integrand along the real axis is positive and decays as $1/x^2$ for large $|x|$, so the integral is finite and non-zero.

- The semicircle integral vanishes in the limit $R\to\infty$ because $|f(z)| \sim 1/R^2$ for large $|z|$.

- Using the Residue Theorem: $$\int_{-\infty}^{\infty} \frac{dx}{x^2+1} = 2\pi i \cdot \operatorname{Res}\left(\frac{1}{z^2+1}, i\right) = \pi$$

**Conclusion:** Only the real-line integral contributes to the final value; the semicircle "disappears."


## Example: Evaluate a Contour Integral Using Residues

Compute $$\oint_{\Gamma} \frac{z}{z^2 + 1} \, dz$$ where $\Gamma$ encloses $z=i$ and $z=-i$.

Poles: $$z = i, \quad z = -i.$$

Residues: $$\operatorname{Res}(f,i)
= \frac{i}{2i} = \frac12,
\qquad
\operatorname{Res}(f,-i)
= \frac{-i}{-2i} = \frac12.$$

Thus $$\oint_{\Gamma} \frac{z}{z^2+1}dz
= 2\pi i \left(\frac12 + \frac12\right)
= 2\pi i.$$


## Example: Higher Order Pole


Evaluate $$\int_{-\infty}^{\infty} \frac{x^2}{(x^2+4)^2}\, dx.$$

**Complex extension:** $$f(z)=\frac{z^2}{(z^2+4)^2}
=\frac{z^2}{(z-2i)^2(z+2i)^2}.$$

Upper half-plane pole: $z=2i$ (order 2).

$$\operatorname{Res}_{z=2i} f(z)
= \frac{1}{1!}\lim_{z\to 2i}
\frac{d}{dz}\left[(z-2i)^2 f(z)\right].$$

Compute derivative\...

Final result: $$\int_{-\infty}^{\infty} \frac{x^2}{(x^2+4)^2}\,dx
= \frac{\pi}{8}.$$

---

*Migration source: `07_different/complex_functions1.tex` from the archived Overleaf export.*
