---
kernelspec:
  name: python3
  display_name: Python 3
---

# Lagrange Multipliers: An Inclined-Plane Example

:::{admonition} Course-material provenance
:class: dropdown
This page was migrated from the CHM 696 course materials developed by Jonathan Hood and Lyudmila Slipchenko. Equations and examples remain under editorial review during the Fall 2026 website migration.
:::

## Learning goals

After this lecture, you should be able to:

- encode a holonomic constraint with a Lagrange multiplier;
- derive the constrained Euler--Lagrange equations;
- eliminate the multiplier to recover the physical motion; and
- relate the multiplier to the geometric constraint force.

## Setup

Consider a particle (block) of mass $m$ moving in the $xy$--plane. The straight line (inclined by angle $\alpha$ to the $x$--axis) is given by the holonomic constraint
```{math}
\phi(x,y)=y - x\tan\alpha = 0.
```
 Take $y$ positive upward and gravity $\mathbf{g}=(0,-g)$. Assume no friction.

Kinetic and potential energies are
```{math}
T=\tfrac12 m(\dot x^2+\dot y^2),\qquad V=m g y.
```
 Form the augmented Lagrangian with multiplier $\lambda$:
```{math}
\mathcal{L}=T-V+\lambda\phi
= \tfrac12 m(\dot x^2+\dot y^2)-m g y + \lambda\,(y - x\tan\alpha).
```


## Euler--Lagrange equations with a multiplier

Treating $x,y$ as independent coordinates, the Euler--Lagrange equations give
```{math}
\begin{aligned}
&\frac{d}{dt}(m\dot x)-\frac{\partial\mathcal{L}}{\partial x}=0
\quad\Longrightarrow\quad m\ddot x + \lambda \tan\alpha = 0,\\[6pt]
&\frac{d}{dt}(m\dot y)-\frac{\partial\mathcal{L}}{\partial y}=0
\quad\Longrightarrow\quad m\ddot y + m g - \lambda = 0,
\end{aligned}
```
 supplemented by the constraint
```{math}
y - x\tan\alpha = 0.
```


With this sign convention, $\lambda\nabla\phi$ is the constraint force in
Cartesian coordinates. The numerical value of $\lambda$ depends on how
$\phi$ is normalized, so it is not automatically the physical normal-force
magnitude.

## Eliminate the multiplier

Introduce the coordinate $s$ measured along the line (positive in the direction making angle $\alpha$ with the $x$--axis). The unit vector along the line is
```{math}
\mathbf{u}=(\cos\alpha,\sin\alpha),
```
 so the position on the line is $\mathbf{r}=s\mathbf{u}$, hence
```{math}
x = s\cos\alpha,\qquad y = s\sin\alpha,
```
 and
```{math}
\ddot x = \ddot s\cos\alpha,\qquad \ddot y = \ddot s\sin\alpha.
```


From the $x$--equation:
```{math}
m\ddot x + \lambda\tan\alpha = 0
\quad\Rightarrow\quad
m\ddot s\cos\alpha + \lambda\frac{\sin\alpha}{\cos\alpha}=0
```
 or
```{math}
m\ddot s\cos^2\alpha + \lambda\sin\alpha = 0. \tag{1}
```


From the $y$--equation:
```{math}
m\ddot y + m g - \lambda = 0
\quad\Rightarrow\quad
m\ddot s\sin\alpha + m g - \lambda = 0,
```
 so
```{math}
\lambda = m\ddot s\sin\alpha + m g. \tag{2}
```


Substitute (2) into (1):
```{math}
m\ddot s\cos^2\alpha + (m\ddot s\sin\alpha + m g)\sin\alpha = 0.
```
 Divide by $m$ and use $\cos^2\alpha+\sin^2\alpha=1$ to obtain
```{math}
\ddot s + g\sin\alpha = 0,
```
 hence
```{math}
\boxed{\ddot s = -\,g\sin\alpha.}
```


Thus the acceleration along the line (taking $s$ positive upslope) is $-g\sin\alpha$, i.e. the particle accelerates downhill with magnitude $g\sin\alpha$.

## Normal reaction

From $(2)$ we get
```{math}
\lambda = m\ddot s\sin\alpha + m g = m(-g\sin\alpha)\sin\alpha + m g
= m g(1-\sin^2\alpha) = m g\cos^2\alpha.
```
 The actual normal force magnitude (geometric normal) is
```{math}
N=\frac{\lambda}{\cos\alpha}=m g\cos\alpha,
```
 which is the familiar normal reaction on an inclined line.

## Summary

The constrained Euler--Lagrange system is
```{math}
\begin{cases}
m\ddot x + \lambda \tan\alpha = 0,\\[4pt]
m\ddot y + m g - \lambda = 0,\\[4pt]
y - x\tan\alpha = 0.
\end{cases}
```
 Eliminating $\lambda$ and using the coordinate $s$ along the line yields
```{math}
\ddot s = -g\sin\alpha,\qquad \lambda = m g\cos^2\alpha,
```
 and the physical normal force on the block is $N=mg\cos\alpha$.

## Candidate visualizations for review

These optional figures are placed after the worked derivation so they can be
evaluated without changing its logical flow.

```{code-cell} python
:tags: [hide-input]
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle, Arc
from matplotlib.transforms import Affine2D

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

### Geometry and force decomposition on the incline

One annotated diagram connects the coordinate constraint, the along-slope
direction, gravity, and the normal reaction used in the multiplier derivation.

```{code-cell} python
alpha = np.deg2rad(28)
tangent = np.array([np.cos(alpha), np.sin(alpha)])
normal = np.array([-np.sin(alpha), np.cos(alpha)])
center = 2.5*tangent + 0.28*normal

fig, ax = plt.subplots(figsize=(7.3, 5.0))
x = np.linspace(0,5.2,100)
ax.plot(x, x*np.tan(alpha), color=BLACK, linewidth=3)
block = Rectangle((-0.38,-0.23), 0.76, 0.46, facecolor=GOLD,
                  edgecolor=BLACK, linewidth=1.5)
block.set_transform(Affine2D().rotate(alpha).translate(*center) + ax.transData)
ax.add_patch(block)
ax.arrow(*center, 0, -1.25, width=0.035, head_width=0.18, head_length=0.16,
         color=BLACK, length_includes_head=True)
ax.arrow(*center, *(1.1*normal), width=0.035, head_width=0.18, head_length=0.16,
         color=DARK_GOLD, length_includes_head=True)
ax.arrow(*center, *(-0.82*tangent), width=0.028, head_width=0.15, head_length=0.14,
         color=GRAY, length_includes_head=True)
ax.text(*(center + np.array([0.15,-0.75])), "$m\mathbf g$")
ax.text(*(center + 0.65*normal + np.array([0.12,0.05])), "$N$")
ax.text(*(center - 0.55*tangent - 0.25*normal), "$mg\sin\alpha$")
ax.add_patch(Arc((0,0), 1.5, 1.5, theta1=0, theta2=np.degrees(alpha),
                 color=DARK_GOLD, linewidth=2))
ax.text(0.85, 0.16, "$\alpha$")
ax.set(aspect="equal", xlim=(-0.2,5.5), ylim=(-0.4,3.4),
       xlabel="$x$", ylabel="$y$", title="The multiplier force is normal to the constraint")
plt.show()
```

### The gradient of the constraint supplies the normal direction

Contours of $\phi(x,y)=y-x\tan\alpha$ are parallel lines. Its gradient is
perpendicular to every contour, so $\lambda\nabla\phi$ has exactly the geometry
required of a constraint force.

```{code-cell} python
alpha = np.deg2rad(32)
x = np.linspace(-1,4,250)
y = np.linspace(-1,3.2,220)
X, Y = np.meshgrid(x,y)
Phi = Y - X*np.tan(alpha)
point = np.array([2.2, 2.2*np.tan(alpha)])
gradient = np.array([-np.tan(alpha), 1.0])
gradient = gradient / np.linalg.norm(gradient)

fig, ax = plt.subplots(figsize=(7.2, 4.8))
contours = ax.contour(X,Y,Phi,levels=[-1,-0.5,0,0.5,1],colors=GRAY,linewidths=1)
ax.clabel(contours, inline=True, fmt=lambda value: rf"$\phi={value:g}$")
ax.contour(X,Y,Phi,levels=[0],colors=[BLACK],linewidths=3)
ax.scatter(*point, color=GOLD, edgecolor=BLACK, s=70, zorder=3)
ax.arrow(*point, *(1.15*gradient), width=0.035, head_width=0.18,
         head_length=0.16, color=DARK_GOLD, length_includes_head=True)
ax.text(*(point + 0.72*gradient + np.array([0.12,0.05])), r"$\nabla\phi$")
ax.set(aspect="equal", xlim=(-1,4), ylim=(-1,3.2), xlabel="$x$", ylabel="$y$",
       title="The constraint gradient is normal to the allowed path")
plt.show()
```

### Incline angle trades acceleration against normal force

Plotting both dimensionless quantities against angle gives immediate limiting
checks: a horizontal plane has maximum normal force and no downhill
acceleration, while a vertical plane has the opposite limits.

```{code-cell} python
angles = np.linspace(0,90,361)
radians = np.deg2rad(angles)

fig, ax = plt.subplots(figsize=(7.5, 4.4))
ax.plot(angles, np.sin(radians), color=BLACK, linewidth=2.5,
        label=r"downhill acceleration $|a|/g=\sin\alpha$")
ax.plot(angles, np.cos(radians), color=DARK_GOLD, linewidth=2.5,
        label=r"normal force $N/(mg)=\cos\alpha$")
ax.fill_between(angles, np.sin(radians), np.cos(radians), color=GOLD, alpha=0.18)
ax.set(xlabel="incline angle α (degrees)", ylabel="dimensionless magnitude",
       xlim=(0,90), ylim=(0,1.05), title="Changing angle redistributes gravity's components")
ax.legend(frameon=False)
plt.show()
```

### Motion along the constraint for several angles

With the same initial position and velocity, steeper inclines produce faster
downhill motion. Every trajectory still remains in the one-dimensional allowed
coordinate $s$.

```{code-cell} python
time = np.linspace(0,2.2,300)
g = 9.81
fig, axes = plt.subplots(1, 2, figsize=(9.7, 4.1))
for angle, color in zip([10,25,40,60], [GRAY,GOLD,DARK_GOLD,BLACK]):
    radians = np.deg2rad(angle)
    s = -0.5*g*np.sin(radians)*time**2
    axes[0].plot(time, s, color=color, linewidth=2, label=f"α = {angle}°")
    axes[1].plot(s*np.cos(radians), s*np.sin(radians), color=color, linewidth=2)
axes[0].set(xlabel="time (s)", ylabel="along-slope coordinate s (m)",
            title="one-dimensional motion")
axes[0].legend(frameon=False)
axes[1].set(aspect="equal", xlabel="$x$ (m)", ylabel="$y$ (m)",
            title="the same motion in the xy-plane")
fig.tight_layout()
plt.show()
```

---

*Migration source: `03_Linear_algebra/lagrange_multiplier.tex` from the archived Overleaf export.*
