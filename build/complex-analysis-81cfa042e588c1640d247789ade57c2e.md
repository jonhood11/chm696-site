---
kernelspec:
  name: python3
  display_name: Python 3
---

# Complex analysis with Python

## Magnitude and phase of an analytic function

```{code-cell} python
import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-2, 2, 450)
y = np.linspace(-2, 2, 450)
X, Y = np.meshgrid(x, y)
Z = X + 1j*Y
F = (Z - 1) / (Z + 0.6j)

fig, axes = plt.subplots(1, 2, figsize=(10, 4))
im0 = axes[0].imshow(np.log10(np.abs(F)), extent=[-2, 2, -2, 2], origin="lower", cmap="viridis")
axes[0].set_title("$\\log_{10}|f(z)|$")
fig.colorbar(im0, ax=axes[0], shrink=0.8)
im1 = axes[1].imshow(np.angle(F), extent=[-2, 2, -2, 2], origin="lower", cmap="twilight")
axes[1].set_title("$\\arg f(z)$")
fig.colorbar(im1, ax=axes[1], shrink=0.8)
for ax in axes:
    ax.set(xlabel="Re $z$", ylabel="Im $z$")
fig.tight_layout()
plt.show()
```

The zero at $z=1$ and pole at $z=-0.6i$ appear as opposite singular features
in the magnitude and phase plots.

## A numerical contour integral

```{code-cell} python
n = 20000
theta = np.linspace(0, 2*np.pi, n, endpoint=False)
z = 1.5*np.exp(1j*theta)
dz = 1j*z*(2*np.pi/n)
integral = np.sum(dz / (z - 0.4))
integral, 2j*np.pi
```
