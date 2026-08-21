---
kernelspec:
  name: python3
  display_name: Python 3
---

# Optimization and singular value decomposition

## Gradient descent on a quadratic form

```{code-cell} python
import numpy as np
import matplotlib.pyplot as plt

H = np.array([[5.0, 1.5], [1.5, 1.2]])
b = np.array([-1.0, 0.5])

def objective(x):
    return 0.5 * x @ H @ x + b @ x

x = np.array([2.0, -2.0])
path = [x.copy()]
step = 0.18
for _ in range(30):
    x = x - step * (H @ x + b)
    path.append(x.copy())
path = np.array(path)

gx = np.linspace(-2.5, 2.5, 250)
gy = np.linspace(-2.5, 2.5, 250)
X, Y = np.meshgrid(gx, gy)
Z = np.array([[objective(np.array([xx, yy])) for xx in gx] for yy in gy])

fig, ax = plt.subplots(figsize=(6, 5))
ax.contour(X, Y, Z, levels=22, cmap="viridis")
ax.plot(path[:, 0], path[:, 1], "o-", color="tab:red", markersize=3, label="gradient descent")
ax.set(xlabel="$x_1$", ylabel="$x_2$", title="Optimization path")
ax.legend(frameon=False)
plt.show()
```

## Low-rank approximation

```{code-cell} python
t = np.linspace(0, 2*np.pi, 140)
M = (np.sin(t)[:, None] * np.cos(2*t)[None, :]
     + 0.35*np.cos(3*t)[:, None] * np.sin(t)[None, :])
U, singular_values, Vh = np.linalg.svd(M, full_matrices=False)

fig, axes = plt.subplots(1, 3, figsize=(11, 3.5))
axes[0].imshow(M, cmap="coolwarm", aspect="auto")
axes[0].set_title("Original matrix")
for ax, rank in zip(axes[1:], (1, 2)):
    approximation = (U[:, :rank] * singular_values[:rank]) @ Vh[:rank]
    ax.imshow(approximation, cmap="coolwarm", aspect="auto")
    ax.set_title(f"Rank-{rank} approximation")
for ax in axes:
    ax.set(xticks=[], yticks=[])
fig.tight_layout()
plt.show()

singular_values[:6]
```
