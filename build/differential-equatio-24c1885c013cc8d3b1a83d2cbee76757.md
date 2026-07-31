---
kernelspec:
  name: python3
  display_name: Python 3
---

# Differential equations with Python

## A damped, driven oscillator

```{code-cell} python
import numpy as np
import matplotlib.pyplot as plt
from scipy.integrate import solve_ivp

def oscillator(t, state, damping=0.25, drive=0.8, omega=1.15):
    x, velocity = state
    return velocity, -damping*velocity - x + drive*np.cos(omega*t)

solution = solve_ivp(oscillator, (0, 60), (0, 0), max_step=0.04, dense_output=True)
t = np.linspace(0, 60, 1800)
x, velocity = solution.sol(t)

fig, axes = plt.subplots(1, 2, figsize=(10, 4))
axes[0].plot(t, x)
axes[0].set(xlabel="time", ylabel="$x(t)$", title="Driven response")
axes[1].plot(x, velocity)
axes[1].set(xlabel="$x$", ylabel="$\\dot{x}$", title="Phase portrait")
fig.tight_layout()
plt.show()
```

## Sturm-Liouville modes and diffusion

For homogeneous Dirichlet boundaries on $0\leq x\leq 1$, the modes are
$\sin(n\pi x)$. Diffusion damps the high-frequency modes most rapidly.

```{code-cell} python
xgrid = np.linspace(0, 1, 500)
times = (0.0, 0.005, 0.02, 0.08)
coefficients = {1: 1.0, 3: 0.55, 7: -0.25}

fig, ax = plt.subplots(figsize=(7, 4))
for current_time in times:
    field = sum(amplitude*np.sin(n*np.pi*xgrid)*np.exp(-(n*np.pi)**2*current_time)
                for n, amplitude in coefficients.items())
    ax.plot(xgrid, field, label=f"t={current_time:g}")
ax.set(xlabel="$x$", ylabel="$u(x,t)$", title="Diffusion as modal damping")
ax.legend(frameon=False)
ax.grid(alpha=0.2)
plt.show()
```
