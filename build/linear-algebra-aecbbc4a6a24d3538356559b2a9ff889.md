---
kernelspec:
  name: python3
  display_name: Python 3
---

# Linear algebra with Python

## A matrix as a geometric transformation

The columns of a matrix show where the coordinate basis vectors go. The image
of the unit circle shows stretching, compression, rotation, and reflection at
once.

```{code-cell} python
import numpy as np
import matplotlib.pyplot as plt

A = np.array([[2.0, 0.8], [0.3, 1.0]])
theta = np.linspace(0, 2*np.pi, 500)
circle = np.vstack((np.cos(theta), np.sin(theta)))
transformed = A @ circle

fig, axes = plt.subplots(1, 2, figsize=(9, 4))
axes[0].plot(circle[0], circle[1])
axes[0].quiver([0, 0], [0, 0], [1, 0], [0, 1], angles="xy", scale_units="xy", scale=1)
axes[0].set_title("Original basis and unit circle")
axes[1].plot(transformed[0], transformed[1])
axes[1].quiver([0, 0], [0, 0], A[0], A[1], angles="xy", scale_units="xy", scale=1)
axes[1].set_title("After multiplication by $A$")
for ax in axes:
    ax.set(aspect="equal", xlim=(-2.8, 2.8), ylim=(-2.2, 2.2), xlabel="$x$", ylabel="$y$")
    ax.grid(alpha=0.25)
fig.tight_layout()
plt.show()
```

## Eigenvectors and repeated application

```{code-cell} python
B = np.array([[1.8, 0.4], [0.4, 0.9]])
values, vectors = np.linalg.eigh(B)
v0 = np.array([1.0, 1.5])
trajectory = np.array([np.linalg.matrix_power(B, n) @ v0 for n in range(8)])

fig, ax = plt.subplots(figsize=(6, 5))
ax.plot(trajectory[:, 0], trajectory[:, 1], "o-", label="$B^n v_0$")
for value, vector in zip(values, vectors.T):
    ax.quiver(0, 0, vector[0], vector[1], angles="xy", scale_units="xy", scale=0.25,
              label=f"eigenvector, $\\lambda={value:.2f}$")
ax.set(xlabel="$x$", ylabel="$y$", title="Repeated multiplication aligns with the dominant eigenvector")
ax.grid(alpha=0.25)
ax.legend(frameon=False)
plt.show()
```
