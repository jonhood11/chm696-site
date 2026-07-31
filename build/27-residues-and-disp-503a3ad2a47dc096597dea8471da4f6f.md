# Residues, Principal Values, and Dispersion Relations

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


## Complex Contour Integral

#### Complex Contour Integral

A **contour integral** $\oint_{C} f(z) dz$ is a line integral in the complex plane. Its value generally depends on the path $C$ taken.

- We can define the complex function $f(z)$ and the differential $dz$ as: $$\begin{align*}
          f(z) &= u(x, y) + iv(x, y) \\
          dz &= dx + i dy
  \end{align*}$$ where $u$ and $v$ are real functions of the real variables $x$ and $y$.

- Expanding the complex integral yields a sum of four real line integrals: $$\begin{equation*}
          I = \oint_{C} f(z) dz = \underbrace{\oint_{C} u dx - v dy}_{\text{Real Part}} + i \underbrace{\left(\oint_{C} v dx + u dy\right)}_{\text{Imaginary Part}}
  \end{equation*}$$


## Green's Theorem

#### Green's Theorem

**Green's theorem** relates a line integral around a simple closed curve $C$ to a double integral (area integral) over the enclosed region $R$ bounded by $C$:

$$\begin{equation*}
        \oint_{C} (P dx + Q dy) = \iint_{R} \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right) dx dy
\end{equation*}$$


## Transformation to Area Integrals via Green's Theorem

#### Transformation to Area Integrals via Green's Theorem

- By setting $P=u$ and $Q=-v$ for the real part, and $P=v$ and $Q=u$ for the imaginary part, the total integral $I$ becomes: $$\begin{align*}
          I = \oint_{C} f(z) dz
          = \iint_{R} \left( \frac{\partial(-v)}{\partial x} - \frac{\partial u}{\partial y} \right) dx dy + i \iint_{R} \left( \frac{\partial u}{\partial x} - \frac{\partial v}{\partial y} \right) dx dy
  \end{align*}$$

- If $f(z) = u + iv$ is analytic, $u$ and $v$ must satisfy: $$\begin{equation*}
          \frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} \quad \text{and} \quad \frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y}
  \end{equation*}$$

- This makes the integral zero: $$I = 0$$

- Thus, we showed that the area integral of $f(z)$ is related to the contour integral, and proved the **Cauchy's Theorem:** If $f(z)$ is analytic on and inside a closed contour $C$, the contour integral is zero.


## Laurent Series: Definition

Let $f(z)$ be analytic on an annulus $$A = \{ z : r < |z - z_0| < R \}.$$

Then $f(z)$ can be expanded in series convergent in $A$: $$f(z) = \sum_{n=-\infty}^{\infty} a_n (z - z_0)^n,$$ where the coefficients are given by $$a_n = \frac{1}{2\pi i}\oint_{|z-z_0|=\rho}
\frac{f(z)}{(z-z_0)^{\,n+1}}\, dz,
\qquad r < \rho < R.$$

This is a [Laurent series]{style="color: blue"}.

**Structure:**

- Positive-power terms: *regular (analytic) part*

- Negative-power terms: *principal part*


## Classifying Singularities via Laurent Series

The Laurent series determines the nature of an isolated singularity at $z_0$:

- **Removable singularity:** All negative-power coefficients vanish: $$a_{-1} = a_{-2} = \cdots = 0.$$

- **Pole of order $m$:** $$a_{-m} \neq 0,\quad\text{but } a_{-(m+1)} = a_{-(m+2)} = \cdots = 0.$$

- **Essential singularity:** Infinitely many negative-power terms: $$a_{-1}, a_{-2}, \dots \text{ not eventually zero}.$$

**Key idea:** The principal part encodes the singular behavior.


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


## Computing Residues


If $f(z)$ has a simple pole at $z=z_0$, then $$\operatorname{Res}_{z=z_0} f(z)
  = \lim_{z\to z_0} (z - z_0) f(z).$$

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


## Solve Integral: $ _-^ x1+x^2 dx$

Solve Integral: $\displaystyle \int_{-\infty}^{\infty} \frac{\cos x}{1+x^2} dx$ We use the function: $$f(z) = \frac{e^{iz}}{1+z^2}.$$ Its real part is $\cos x/(1+x^2)$.

Poles occur at: $$z = i, \qquad z = -i.$$ We close the contour in the upper half-plane because $e^{iz}$ decays there: $$|e^{\mathrm{i}z}| = |e^{\mathrm{i}x-y}| = |e^{\mathrm{i}x}||e^{-y}|=|e^{-y}| \le 1$$


## Residue at $z=i$

The residue is $$\operatorname{Res}(f,i) = \lim_{z\to i} (z-i) \frac{e^{iz}}{(z+i)(z-i)} = \frac{e^{i i}}{2i} = \frac{e^{-1}}{2i}.$$ Contour integral: $$\oint f(z) dz = 2\pi i \cdot \frac{e^{-1}}{2i} = \pi e^{-1}.$$ But: $$\oint f(z) dz = \int_{-\rho}^{\rho} \frac{e^{ix}}{1+x^2} dx + \int_{\text{along upper half of } z = \rho e^{i\theta}} \frac{e^{iz}}{1+z^2} dz.$$

Take real part: $$I = \int_{-\infty}^{\infty} \frac{\cos x}{1+x^2} dx = \operatorname{Re}(\pi e^{-1}) = \pi e^{-1}.$$


## Inverse Laplace transform


Recall Laplace transform: $$\mathcal{L}\{f(t)\} = \int_0^\infty f(t) e^{-st} \, dt = F(s)$$

The inverse Laplace transform can be computed using [Bromwich integral]{style="color: blue"}: $$f(t) = \frac{1}{2\pi i} \int_{\gamma - i\infty}^{\gamma + i\infty} F(s)e^{st} ds,$$ where:

- $F(s)$ is the Laplace transform of $f(t)$.

- $\gamma$ is chosen so that the vertical line $\mathrm{Re}(s)=\gamma$ lies to the right of all singularities of $F(s)$.

- The contour can be closed and evaluated using residues.


## Example


- Evaluate inverse Fourier transform for $$F(s)=\dfrac{1}{s(s+1)}$$

- Poles: $s=0$ and $s=-1$ (both have $\operatorname{Re}(s)<\gamma$ if $\gamma>0$).

- We take the Bromwich line at $\operatorname{Re}(s)=\gamma$ with $\gamma>0$ and close left for $t>0$ so that both poles are enclosed by the left semicircle.

- By the **residue theorem**, $$f(t)=\sum_{\text{poles inside}} \operatorname{Res}\big(F(s)e^{st},s_k\big).$$


## Example (continued)

Compute residues of $F(s)e^{st}=\dfrac{e^{st}}{s(s+1)}$.

At $s=0$ (simple pole): $$\operatorname{Res}_{s=0} = \lim_{s\to0} s\frac{e^{st}}{s(s+1)} = \lim_{s\to0}\frac{e^{st}}{s+1} = 1 .$$

At $s=-1$ (simple pole): $$\operatorname{Res}_{s=-1} = \lim_{s\to-1}(s+1)\frac{e^{st}}{s(s+1)}
= \lim_{s\to-1}\frac{e^{st}}{s} = -e^{-t}.$$

Therefore $$f(t) = 2\pi i\!\sum\text{Res}\times\frac{1}{2\pi i}
= 1 - e^{-t}.$$


## Cauchy Principal Value

Many integrals in physics and engineering contain singularities on the real axis. Examples: $$\int_{-\infty}^{\infty} \frac{f(x)}{x-x_0} \, dx, \qquad
\int_0^{\infty} \frac{\sin x}{x} \, dx.$$ These are not defined in the usual sense. The [Cauchy Principal Value (P.V.)]{style="color: blue"} provides a consistent interpretation.

Dispersion relations arise when such integrals appear in Fourier- or Laplace-transform problems with causality.


## Cauchy Principal Value (continued)

For a function with a simple pole at $x=a$, the [principal value]{style="color: blue"} integral is defined as: $$\mathrm{P.V.} \int_{-\infty}^{\infty} f(x) \, dx =
\lim_{\epsilon \to 0} \left(
\int_{-\infty}^{a-\epsilon} f(x) dx +
\int_{a+\epsilon}^{\infty} f(x) dx
\right).$$

Key idea:

- Remove symmetric neighborhoods around the singularity.

- Evaluate the limit as the neighborhood shrinks.

- Works naturally with contour integration (small semicircles around pole).

:::{admonition} Example
Consider $\int_0^5 \frac{dx}{x-3}$.\
Its principal value $P.V.\int_0^5 \frac{dx}{x-3} = \ln \frac{2}{3}$
:::


## Poles on the real axis

When evaluating real integrals using contour integration, poles may lie directly on the real axis (the contour of integration).

To define the integral consistently, we **indent the contour** with a small semicircle of radius $\varepsilon$ around the pole.

This indentation contributes a definite amount depending on whether the semicircle goes **above** or **below** the pole.


## Local Behavior Near the Pole

Suppose $f(z)$ has a simple pole at $z=a$: $$f(z) \sim \frac{\operatorname{Res}(f,a)}{z-a}.$$

Parameterize the indentation: $$z = a + \varepsilon e^{i\theta}.$$ Then $$dz = i\varepsilon e^{i\theta} d\theta.$$

Substitute: $$\int_{C_\varepsilon} f(z)dz \approx \int \frac{\operatorname{Res}(f,a)}{\varepsilon e^{i\theta}} i\varepsilon e^{i\theta} d\theta = i\,\operatorname{Res}(f,a) \int d\theta.$$


## Principal Value From Contours

Consider the integral $$\int_{-\infty}^{\infty} \frac{f(x)}{x-a} dx,$$ in which $f(z)$ is analytic for $y\ge 0$ and $\rightarrow 0$ at $\infty$; $a$ is real.

Then we can write a contour identity:

$$0 = \oint_C \frac{f(z)}{z-a} dz = i f(a) \int_{-\pi}^0 d\theta + \mathrm{P.V.}\int_{-\infty}^{\infty} \frac{f(x)}{x-a} dx,$$ for the contour that avoids the pole with a small semicircle.

Thus, $$\mathrm{P.V.}\int_{-\infty}^{\infty} \frac{f(x)}{x-a} dx = i \pi f(a)$$


## Dispersion Relations

In physics, especially optics and quantum scattering, a response function $F(\omega)$ often satisfies:

- analyticity in upper half-plane,

- decay at $|\omega|\to\infty$,

- real and imaginary parts are related by causality.

These conditions imply [Kramers--Kronig dispersion relations]{style="color: blue"}.


## Dispersion Relations (continued)

Consider a complex response function: $$F(\omega) = F_R(\omega) + i F_I(\omega),$$ analytic in the upper half-plane.

For a simple contour that avoids a pole on the real axis: $$\oint \frac{F(z)}{z-\omega} dz = 0.$$

We have: $$\mathrm{P.V.}\int_{-\infty}^{\infty} \frac{F(\omega')}{\omega' - \omega} dx = i \pi F(\omega)$$

Splitting real and imaginary parts gives [Kramers--Kronig relations]{style="color: blue"}: $$\mathrm{P.V.}\int_{-\infty}^{\infty} \frac{F_R(\omega')}{\omega' - \omega} d\omega' = - \pi F_I(\omega)$$ $$\mathrm{P.V.}\int_{-\infty}^{\infty} \frac{F_I(\omega')}{\omega' - \omega} d\omega' = \pi F_R(\omega)$$


## Kramers--Kronig (KK) relations for mechanical systems

Mechanical oscillators (pendulum, mass--spring systems) respond to external forces with:

- an **in-phase** component (elastic response),

- an **out-of-phase** component (dissipative response).

These responses are encoded in the **complex susceptibility** $$\chi(\omega) = \chi'(\omega) + i\chi''(\omega).$$

Because the physical system is causal, the real and imaginary parts are related by Kramers--Kronig (KK) relations.


## Equation of Motion

Consider a damped driven mechanical oscillator: $$m\ddot{x} + b\dot{x} + kx = F_0 e^{-i\omega t}.$$

The steady-state solution is $$x(\omega) = \chi(\omega) F_0,$$ where the susceptibility is $$\chi(\omega) = \frac{1}{k - m\omega^2 - i b\omega}.$$

This is a causal response function $\Rightarrow$ KK relations apply.


## Real and Imaginary Parts

Write $$\chi(\omega) = \frac{k - m\omega^2}{(k - m\omega^2)^2 + (b\omega)^2}
\; +\; i \frac{b\omega}{(k - m\omega^2)^2 + (b\omega)^2}.$$

$$\chi'(\omega) = \frac{k - m\omega^2}{(k - m\omega^2)^2 + (b\omega)^2}$$ controls **elastic stiffness**, $$\chi''(\omega) = \frac{b\omega}{(k - m\omega^2)^2 + (b\omega)^2}$$ measures **dissipation**.

The KK relations guarantee that loss determines stiffness and vice versa.


## KK Relations

For any causal susceptibility: $$\begin{align*}
\chi'(\omega) &= \frac{1}{\pi} \, \mathrm{P} \int_{-\infty}^{\infty}
\frac{\chi''(\omega')}{\omega' - \omega} \, d\omega', \\
\chi''(\omega) &= -\frac{1}{\pi} \, \mathrm{P} \int_{-\infty}^{\infty}
\frac{\chi'(\omega')}{\omega' - \omega} \, d\omega'.
\end{align*}$$

- Knowing either the dissipative or elastic part determines the other.

- If damping increases ($b$ larger), dissipation $\chi''$ increases.

- KK relation implies a required change in the elastic response $\chi'$.

- Mechanical systems cannot change stiffness and damping independently --- both must follow from a common causal susceptibility.

This is the mechanical analog of dispersion in optics.

---

*Migration source: `07_different/complex_functions2.tex` from the archived Overleaf export.*
