---
kernelspec:
  name: python3
  display_name: Python 3
---

# Complex Numbers


## From wave phase to the complex plane

Many physical systems oscillate. A simple real wave can be written as

```{math}
E(t)=E_0\cos(\omega t+\phi).
```

The amplitude $E_0$ tells us the size of the oscillation, while the phase
$\omega t+\phi$ tells us where we are in the cycle. We can picture that phase
as an arrow rotating around a circle. The horizontal projection of the arrow
is the cosine wave that we measure.

```{figure} figures/02-complex-numbers/visual-01-phase-clock-cosine.svg
:alt: A rotating phase arrow on a circle alongside the cosine produced by its horizontal projection
:width: 96%

The phase advances around the circle while its horizontal projection traces a
cosine. This is the rotating object that we want our number system to carry.
```

This suggests a mathematical question:

> Can we build a number that carries both an amplitude and a phase and that
> rotates naturally as time passes?

We want this object to support two operations. Addition should combine waves,
because fields superpose. Multiplication should change the amplitude or advance
the phase, because wave evolution moves the arrow around the circle.

An ordinary real number lives on a line. It can describe the horizontal
projection of the arrow, but it cannot record where the complete arrow points.
The natural state space is therefore a two-dimensional plane. An arrow in that
plane has Cartesian coordinates

```{math}
(x,y)=(r\cos\theta,r\sin\theta).
```

Its length $r$ is the amplitude, and its angle $\theta$ is the phase. At this
stage it is simply a two-dimensional vector, and vectors already add in the
right way for superposition:

```{math}
(x_1,y_1)+(x_2,y_2)=(x_1+x_2,y_1+y_2).
```

We can package the two coordinates into one number. Use $1$ for the horizontal
basis direction and introduce a new symbol $\mathrm{i}$ for the vertical basis
direction. The arrow is then represented by the complex number

```{math}
z=x+\mathrm{i}y,
```

where $x$ and $y$ are still ordinary real numbers. In terms of amplitude and
phase, the same number is

```{math}
z=r(\cos\theta+\mathrm{i}\sin\theta),
\qquad
r=|z|=\sqrt{x^2+y^2},
\qquad
\theta=\operatorname{atan2}(y,x).
```

So far, this notation only stores an arrow and allows arrows to be added. We
still need an operation that advances phase. Let

```{math}
R(\theta)=\cos\theta+\mathrm{i}\sin\theta
```

denote a unit-amplitude phase factor. We want multiplication by $R(\theta)$ to
rotate an arrow through the angle $\theta$. Successive phase advances must
compose according to

```{math}
R(\theta_1)R(\theta_2)=R(\theta_1+\theta_2).
```

This is the group property that makes phase evolution simple: performing one
rotation and then another produces a rotation whose angle is the sum of the
two angles.

Now consider a quarter-turn. The unit arrow at angle $\pi/2$ is

```{math}
R(\pi/2)=\mathrm{i}.
```

Applying two quarter-turns must give a half-turn, whose unit arrow is $-1$.
The desired composition rule therefore requires

```{math}
\mathrm{i}^2
=R(\pi/2)R(\pi/2)
=R(\pi)
=-1.
```

Thus $\mathrm{i}^2=-1$ is not an arbitrary algebraic rule. It records the
geometric fact that two quarter-turns make a half-turn. A complex number now
has two related roles: it represents an arrow carrying amplitude and phase,
and multiplication by it performs a scaling and a rotation.

Later we will discover the compact notation $R(\theta)=e^{\mathrm{i}\theta}$
from the Taylor series rather than assume it at the beginning. Phase is defined
modulo $2\pi$ and is undefined at $z=0$; $\operatorname{atan2}$ selects one
principal representative.

Complex conjugation reverses the phase:

```{math}
\bar z=z^*=x-\mathrm{i}y=r(\cos\theta-\mathrm{i}\sin\theta).
```

The notations $\bar z$ and $z^*$ mean the same thing. Mathematics often uses
the bar, while chemistry and physics frequently use the star.

Geometrically, conjugation reflects a point across the real axis. It leaves
the magnitude fixed, and

```{math}
zz^*=|z|^2.
```

```{figure} figures/02-complex-numbers/visual-02-coordinates-conjugate.svg
:alt: Cartesian and polar coordinates of a complex number beside its reflection under complex conjugation
:width: 96%

Cartesian and polar coordinates carry the same information. Conjugation
reflects the point, changing $\theta$ to $-\theta$ while preserving $r$.
```

## Complex arithmetic is geometry

The coordinate packaging preserves the vector addition introduced above:

```{math}
(x_1+\mathrm{i}y_1)+(x_2+\mathrm{i}y_2)
=(x_1+x_2)+\mathrm{i}(y_1+y_2).
```

Multiplication has a different geometric meaning. We can now verify the desired
rotation rule algebraically. Using $\mathrm{i}^2=-1$ and the angle-addition
formulas gives

```{math}
R(\theta_1)R(\theta_2)=R(\theta_1+\theta_2).
```

This is exactly the rule we wanted: composing rotations adds their angles. For
general complex numbers $z_1=r_1R(\theta_1)$ and
$z_2=r_2R(\theta_2)$,

```{math}
z_1z_2=r_1r_2R(\theta_1+\theta_2).
```

Multiplication therefore multiplies magnitudes and adds phases. One complex
multiplication performs a scaling and a rotation. For example,

```{math}
1+\mathrm{i}=\sqrt{2}\,R(\pi/4),
```

so multiplication by $1+\mathrm{i}$ scales by $\sqrt{2}$ and rotates by one
eighth of a complete turn.

Division reverses these operations:

```{math}
\frac{z_1}{z_2}
=\frac{r_1}{r_2}R(\theta_1-\theta_2).
```

This requires $z_2\neq0$. Division divides the magnitudes and subtracts the
phases. This is why polar form is usually the convenient form for
multiplication, division, powers, and roots, while Cartesian form is usually
convenient for addition.

At this point we have already built a group. A **group** is a collection of
operations that can be composed without leaving the collection, with an
identity operation and an inverse for every operation. Rotation also satisfies
the remaining group requirement, associativity: it does not matter how we
parenthesize a sequence of rotations. Here, rotating by $\theta_1$ and then by
$\theta_2$ produces another rotation, rotating by $\theta_1+\theta_2$; doing
nothing is the identity $R(0)$; and $R(-\theta)$ undoes $R(\theta)$.

The unit complex numbers form the group $U(1)$, while rotations of the plane
form $SO(2)$. The name $SO(2)$ means the **special orthogonal group in two
dimensions**: its matrices preserve lengths and angles and have determinant
$+1$, so they describe rotations rather than reflections. These two groups are
**isomorphic**: they are different mathematical objects with the same
composition structure. The correspondence is

```{math}
\cos\theta+\mathrm{i}\sin\theta
\quad\longleftrightarrow\quad
\begin{pmatrix}
\cos\theta & -\sin\theta\\
\sin\theta & \cos\theta
\end{pmatrix}.
```

Multiplication by the complex number on the left performs the same rotation
as multiplication by the matrix on the right. This provides a bridge to our
next topic, linear algebra. We do not need the group names to calculate, but
they show that complex phase is part of a broader mathematical structure
rather than an isolated trick. The same idea—identify transformations and
study how they compose—is the starting point for using symmetry throughout
physics and chemistry.

```{figure} figures/02-complex-numbers/visual-03-addition-multiplication.svg
:alt: Complex addition shown as a vector parallelogram and complex multiplication shown as scaling and rotation
:width: 96%

Addition combines displacements component by component. Multiplication changes
the magnitude and phase, and composition of rotations adds their angles.
```


## Euler's formula and phase

We can derive Euler's formula directly from the Taylor series that we used in
the previous lecture:

```{math}
e^{\mathrm{i}\theta}
=1+\mathrm{i}\theta+
\frac{(\mathrm{i}\theta)^2}{2!}+
\frac{(\mathrm{i}\theta)^3}{3!}+\cdots.
```

Separating the even and odd powers gives

```{math}
\begin{aligned}
e^{\mathrm{i}\theta}
&=\left(1-\frac{\theta^2}{2!}+\frac{\theta^4}{4!}-\cdots\right) \\
&\quad+\mathrm{i}\left(\theta-\frac{\theta^3}{3!}
+\frac{\theta^5}{5!}-\cdots\right) \\
&=\cos\theta+\mathrm{i}\sin\theta.
\end{aligned}
```

The exponential $e^{\mathrm{i}\theta}$ is therefore a point rotating around
the unit circle. Its real projection is $\cos\theta$ and its imaginary
projection is $\sin\theta$.

We can now identify the rotation we introduced geometrically with the complex
exponential:

```{math}
R(\theta)=e^{\mathrm{i}\theta},
\qquad
z=re^{\mathrm{i}\theta}.
```

The exponential notation makes the group rule almost automatic:

```{math}
e^{\mathrm{i}\theta_1}e^{\mathrm{i}\theta_2}
=e^{\mathrm{i}(\theta_1+\theta_2)}.
```

The Taylor series does more than prove an identity. As we keep more terms, its
trajectory in the complex plane approaches the unit circle.


Euler's formula also lets us solve for the trigonometric functions:

```{math}
\cos z=\frac{e^{\mathrm{i}z}+e^{-\mathrm{i}z}}{2},
\qquad
\sin z=\frac{e^{\mathrm{i}z}-e^{-\mathrm{i}z}}{2\mathrm{i}}.
```


These formulas are useful, but our main point today is the phase: multiplying
by $e^{\mathrm{i}\theta}$ rotates an amplitude, and multiplying two such
factors adds their phases.

## Complex waves and beating

We now return to the wave that motivated the complex plane. A real traveling
wave can be written as

```{math}
E(x,t)=E_0\cos(kx-\omega t+\phi).
```

We represent it by the complex wave

```{math}
\widetilde E(x,t)=E_0e^{\mathrm{i}(kx-\omega t+\phi)},
```

and remember that the physical field is its real part:

```{math}
E(x,t)=\operatorname{Re}\widetilde E(x,t).
```

The complex representation is a calculation tool. Differentiation becomes
multiplication,

```{math}
\frac{\partial \widetilde E}{\partial x}
=\mathrm{i}k\widetilde E,
\qquad
\frac{\partial \widetilde E}{\partial t}
=-\mathrm{i}\omega\widetilde E,
```

and we can add complex waves first and take the real part only at the end.
Much of physics is written in terms of complex amplitudes because phases
compose in exactly this way.

Beating is a simple example. Add two waves with nearby angular frequencies:

```{math}
e^{-\mathrm{i}\omega_1t}+e^{-\mathrm{i}\omega_2t}
=2e^{-\mathrm{i}\bar\omega t}
\cos\left(\frac{\Delta\omega\,t}{2}\right),
```

where

```{math}
\bar\omega=\frac{\omega_1+\omega_2}{2},
\qquad
\Delta\omega=\omega_1-\omega_2.
```

The factor $e^{-\mathrm{i}\bar\omega t}$ gives the fast oscillation, while
the cosine gives the slowly varying envelope. This is the beat signal we hear
from nearby musical frequencies or measure when two lasers illuminate the
same detector.

The optical field oscillates at the two original frequencies. A square-law
detector instead measures the magnitude squared, which contains their
difference frequency:

```{math}
\left|e^{-\mathrm{i}\omega_1t}+e^{-\mathrm{i}\omega_2t}\right|^2
=2+2\cos(\Delta\omega t).
```

Thus the detected beat angular frequency is $|\Delta\omega|$. This distinction
between the field and its measured intensity will matter again below.

```{code-cell} python
:tags: [hide-input]
import numpy as np
import matplotlib.pyplot as plt

phase = np.linspace(0, 2 * np.pi, 500)
time = np.linspace(0, 16 * np.pi, 2200)
omega_1, omega_2 = 1.125, 0.875
delta_omega = omega_1 - omega_2
wave_sum = np.cos(omega_1 * time) + np.cos(omega_2 * time)
envelope = 2 * np.cos(delta_omega * time / 2)

fig, axes = plt.subplots(2, 1, figsize=(9.0, 7.0), dpi=140)

axes[0].plot(phase, np.cos(phase), color="#8e6f3e", linewidth=2.6,
             label=r"$\operatorname{Re}e^{-i\tau}=\cos\tau$")
axes[0].plot(phase, -np.sin(phase), color="#4f6d7a", linewidth=2.3,
             label=r"$\operatorname{Im}e^{-i\tau}=-\sin\tau$")
axes[0].set(xlabel=r"phase $\tau$", ylabel="component",
            title="One rotating complex amplitude contains two quadratures",
            xticks=[0, np.pi/2, np.pi, 3*np.pi/2, 2*np.pi],
            xticklabels=["0", r"$\pi/2$", r"$\pi$", r"$3\pi/2$", r"$2\pi$"],
            ylim=(-1.2, 1.2))
axes[0].axhline(0, color="#777777", linewidth=1)
axes[0].legend(frameon=False, ncol=2, loc="upper center")
axes[0].grid(alpha=0.18)

axes[1].plot(time, wave_sum, color="#8e6f3e", linewidth=1.8,
             label=r"$\cos(\omega_1t)+\cos(\omega_2t)$")
axes[1].plot(time, envelope, "--", color="#4f6d7a", linewidth=2,
             label=r"signed pair $\pm2\cos(\Delta\omega t/2)$")
axes[1].plot(time, -envelope, "--", color="#4f6d7a", linewidth=2)
axes[1].set(xlabel="dimensionless time", ylabel="field", title="Nearby frequencies produce beating",
            xlim=(time[0], time[-1]), ylim=(-2.35, 2.35))
axes[1].axhline(0, color="#777777", linewidth=1)
axes[1].legend(frameon=False, loc="upper right")
axes[1].grid(alpha=0.18)

fig.tight_layout()
plt.show()
```

**What the plot shows.** The top panel separates the two quadratures of one
rotating complex amplitude. The lower panel adds two nearby frequencies; the
dashed curves are the signed pair $\pm2\cos(\Delta\omega t/2)$, while the
nonnegative envelope magnitude is $2|\cos(\Delta\omega t/2)|$. The signed
envelope has period $4\pi/|\Delta\omega|$, but a detector that responds to
amplitude magnitude or intensity sees successive beat maxima separated by
$2\pi/|\Delta\omega|$.


## Intensity and interference

A detector usually cannot follow the instantaneous oscillation of an optical
field. It measures an average over many cycles. For

```{math}
E(t)=E_0\cos(\omega t+\phi),
```

the average over one period is

```{math}
\begin{aligned}
\left\langle E(t)^2\right\rangle
&=\frac{1}{T}\int_0^T E_0^2\cos^2(\omega t+\phi)\,dt \\
&=\frac{E_0^2}{2}.
\end{aligned}
```

The corresponding complex wave has constant squared magnitude,

```{math}
|\widetilde E(t)|^2
=\widetilde E(t)\widetilde E(t)^*=E_0^2.
```

Therefore, when $E_0$ is the peak amplitude,

```{math}
\boxed{
\left\langle E(t)^2\right\rangle
=\frac{1}{2}|\widetilde E(t)|^2
}.
```

For a plane electromagnetic wave this gives

```{math}
\left\langle I\right\rangle
=\frac{1}{2}\epsilon_0c|\widetilde E_0|^2.
```

Now let two fields have the same frequency but a relative phase $\phi$:

```{math}
\widetilde E_1=E_{01}e^{\mathrm{i}(kx-\omega t)},
\qquad
\widetilde E_2=E_{02}e^{\mathrm{i}(kx-\omega t+\phi)}.
```

Their intensity is proportional to the squared magnitude of the total complex
amplitude:

For the equal-amplitude plot below, $I_0$ is the intensity of either field
alone, so the normalization makes the constructive maximum $I=4I_0$ and the
destructive minimum zero.

```{math}
\begin{aligned}
I&\propto|\widetilde E_1+\widetilde E_2|^2 \\
&=E_{01}^2+E_{02}^2+2E_{01}E_{02}\cos\phi.
\end{aligned}
```

```{code-cell} python
:tags: [hide-input]
import numpy as np
import matplotlib.pyplot as plt

cycle_phase = np.linspace(0, 4 * np.pi, 1000)
relative_phase = np.linspace(0, 2 * np.pi, 700)
normalized_intensity = np.cos(relative_phase / 2)**2

fig, axes = plt.subplots(1, 2, figsize=(11.0, 4.5), dpi=140)

axes[0].plot(cycle_phase, np.cos(cycle_phase)**2,
             color="#8e6f3e", linewidth=2.5, label=r"$E^2/E_0^2=\cos^2\theta$")
axes[0].axhline(0.5, color="#4f6d7a", linestyle="--", linewidth=2.2,
                label=r"time average $=1/2$")
axes[0].fill_between(cycle_phase, 0, np.cos(cycle_phase)**2,
                     color="#cfb991", alpha=0.25)
axes[0].set(xlabel=r"phase $\theta$", ylabel=r"$E^2/E_0^2$",
            title="A detector averages the squared real field",
            xlim=(0, 4*np.pi), ylim=(0, 1.08),
            xticks=[0, np.pi, 2*np.pi, 3*np.pi, 4*np.pi],
            xticklabels=["0", r"$\pi$", r"$2\pi$", r"$3\pi$", r"$4\pi$"])
axes[0].legend(frameon=False, loc="upper right")
axes[0].grid(alpha=0.18)

axes[1].plot(relative_phase, normalized_intensity,
             color="#8e6f3e", linewidth=3)
axes[1].scatter([0, np.pi, 2*np.pi], [1, 0, 1],
                color=["#4f6d7a", "#111111", "#4f6d7a"], s=55, zorder=4)
axes[1].annotate("constructive", (0, 1), xytext=(0.35, 0.83),
                 arrowprops={"arrowstyle": "->", "color": "#4f6d7a"})
axes[1].annotate("destructive", (np.pi, 0), xytext=(3.45, 0.22),
                 arrowprops={"arrowstyle": "->", "color": "#111111"})
axes[1].set(xlabel=r"relative phase $\phi$", ylabel=r"$I/(4I_0)$",
            title="Equal fields interfere according to relative phase",
            xlim=(0, 2*np.pi), ylim=(-0.04, 1.08),
            xticks=[0, np.pi/2, np.pi, 3*np.pi/2, 2*np.pi],
            xticklabels=["0", r"$\pi/2$", r"$\pi$", r"$3\pi/2$", r"$2\pi$"])
axes[1].text(np.pi/2, 0.58, r"$I/(4I_0)=\cos^2(\phi/2)$",
             ha="center", color="#4f6d7a")
axes[1].grid(alpha=0.18)

fig.tight_layout()
plt.show()
```

**What the plot shows.** The left panel shows the rapid oscillation of the
squared real field around its cycle average. The right panel shows how the
normalized intensity of two equal fields changes continuously from
constructive to destructive interference as their relative phase changes.

When $\phi=0$, the fields interfere constructively. When the amplitudes are
equal and $\phi=\pi$, they interfere destructively. In a double-slit
experiment, the two path lengths produce a phase difference

```{math}
\Delta\phi=k(r_2-r_1),
```

so the bright and dark fringes are a spatial map of relative phase.

This exposes the central physical distinction between global and relative
phase. Multiplying the entire field by a common phase does not change any
intensity:

```{math}
\left|e^{\mathrm{i}\alpha}
\left(E_{01}+E_{02}e^{\mathrm{i}\phi}\right)\right|^2
=\left|E_{01}+E_{02}e^{\mathrm{i}\phi}\right|^2.
```

The global phase $\alpha$ cancels, but the relative phase $\phi$ remains and
controls the interference. Phase becomes observable through comparisons.


## Homework


::::{admonition} Question 1

Representations of a complex number. Let

```{math}
z=-\sqrt{3}+\mathrm{i}.
```

1. Plot $z$ in the complex plane.
2. Calculate its magnitude and phase, choosing the phase between $-\pi$
   and $\pi$.
3. Write $z$ in polar and exponential form.
4. Calculate and plot $\bar z$. Explain what changed and what remained
   unchanged.

::::

::::{admonition} Question 2

Multiplication in Cartesian and polar forms. Let

```{math}
z_1=1+\mathrm{i},
\qquad
z_2=2-\mathrm{i}.
```

1. Multiply $z_1z_2$ directly in Cartesian form.
2. Write both $z_1$ and $z_2$ in polar form $r e^{\mathrm{i}\theta}$.
3. Multiply them again in polar form by multiplying their magnitudes and
   adding their phases.
4. Draw $z_1$, $z_2$, and their product $z_1z_2$ as vectors from the origin
   on the same two-dimensional complex plane.


::::

::::{admonition} Question 3

Let $z=x+\mathrm{i}y$ and multiply it by
$e^{\mathrm{i}\theta}=\cos\theta+\mathrm{i}\sin\theta$.
Write the result as $z'=x'+\mathrm{i}y'$.

1. Expand the product and identify $x'$ and $y'$.
2. Arrange your result in the form

   ```{math}
   \begin{pmatrix}x'\\y'\end{pmatrix}
   =
   \begin{pmatrix}?&?\\?&?\end{pmatrix}
   \begin{pmatrix}x\\y\end{pmatrix}.
   ```

3. For $\theta=\pi/2$, find where $z=1$ and $z=\mathrm{i}$ go,
   and sketch the rotation.

This matrix form is another representation of the rotation group in two
dimensions, $SO(2)$. Multiplying by the unit complex number
$e^{\mathrm{i}\theta}$ performs the same rotation: complex numbers let us
work with a single number instead of carrying around a $2\times2$ matrix.
Adding phases corresponds to composing rotations in either representation.

::::


::::{admonition} Question 4

Beating of two waves. Consider

```{math}
S(t)=e^{-\mathrm{i}\omega_1t}+e^{-\mathrm{i}\omega_2t}.
```

1. Factor $S(t)$ into a rapidly varying carrier and a slowly varying
   envelope.
2. Identify the carrier frequency and envelope frequency.
3. Calculate $|S(t)|^2$.
4. Determine the period of the signed field envelope and the period of the
   detected intensity beats.
5. Codex time: make a web app that lets you listen to two sine waves,
   individually and together, and plots each wave and their sum. Include
   controls for their frequencies $f_1$ and $f_2$, where $\omega_j=2\pi f_j$.
   Generate beating yourself by setting $f_1=1000\,\mathrm{Hz}$ and
   $f_2=1002\,\mathrm{Hz}$. Listen at low volume and compare the beat rate
   you hear with your calculation. Let the plot show both the rapid
   oscillations and the slower envelope by adjusting the displayed time range.


::::

::::{admonition} Question 5

Taylor approximation to two-slit path lengths. Two narrow slits are
located at $(0,\pm d/2)$, and a point on a distant screen is located at
$(L,y)$. The exact distances from the slits to the screen point are

```{math}
r_\pm=\sqrt{L^2+(y\mp d/2)^2}.
```

:::{figure} figures/01-series-and-limits/two-slit-paths.svg
:alt: A plane wave travels right through two slits separated by d. Paths r plus and r minus connect the slits to a point (L,y) on the screen.
:width: 100%

The incoming wave travels to the right. The upper and lower paths have lengths $r_+$ and $r_-$, respectively.
:::

1. Assuming $|y|\ll L$ and $|d|\ll L$, use a Taylor expansion to
   approximate both distances through the first nonvanishing correction.
2. Use these Taylor expansions to derive an expression for the path
   difference $\Delta r=r_- - r_+$.
3. Let $k=2\pi/\lambda$ and assume the two slits emit waves of equal
   strength and phase. First neglect the variation of amplitude with
   distance and write their sum as

   ```{math}
   e^{\mathrm{i}kr_-}+e^{\mathrm{i}kr_+}.
   ```

   Use your approximate path difference to calculate the intensity
   pattern on the screen as a function of $y$. Where are the bright and
   dark fringes?
4. Using the unexpanded distances, plot

   ```{math}
   \left|\frac{e^{\mathrm{i}kr_-}}{r_-}
   +\frac{e^{\mathrm{i}kr_+}}{r_+}\right|^2
   ```

   as a function of $y$. This is the exact expression within a model of
   two equal spherical-wave sources. Compare it with your approximate
   pattern, including a common amplitude factor $1/L$ in the approximate
   field so the scales agree. What does the approximation miss? The
   $1/r_\pm$ factors include the decay of wave amplitude with distance.

::::
