---
kernelspec:
  name: python3
  display_name: Python 3
---

# Machine learning with Python

## Linear regression and model complexity

```{code-cell} python
import numpy as np
import matplotlib.pyplot as plt

rng = np.random.default_rng(696)
x = np.linspace(-2, 2, 55)
y = 0.6 - 1.1*x + 0.75*x**2 + rng.normal(0, 0.45, x.size)

fig, ax = plt.subplots(figsize=(7, 4))
ax.scatter(x, y, color="k", s=18, label="data")
for degree in (1, 2, 12):
    coefficients = np.polyfit(x, y, degree)
    ax.plot(x, np.polyval(coefficients, x), label=f"degree {degree}")
ax.set(xlabel="$x$", ylabel="$y$", title="Underfitting, a useful model, and overfitting")
ax.legend(frameon=False)
plt.show()
```

## K-means clustering from first principles

```{code-cell} python
clouds = np.vstack([
    rng.normal((-1.4, -0.4), (0.45, 0.35), size=(90, 2)),
    rng.normal((1.1, -0.2), (0.4, 0.5), size=(90, 2)),
    rng.normal((0.1, 1.45), (0.5, 0.35), size=(90, 2)),
])
centers = clouds[[5, 105, 205]].copy()

for _ in range(25):
    distances = np.linalg.norm(clouds[:, None, :] - centers[None, :, :], axis=2)
    labels = np.argmin(distances, axis=1)
    new_centers = np.vstack([clouds[labels == k].mean(axis=0) for k in range(3)])
    if np.allclose(new_centers, centers):
        break
    centers = new_centers

fig, ax = plt.subplots(figsize=(6, 5))
ax.scatter(clouds[:, 0], clouds[:, 1], c=labels, cmap="viridis", s=18)
ax.scatter(centers[:, 0], centers[:, 1], c="red", marker="X", s=180, label="centers")
ax.set(xlabel="feature 1", ylabel="feature 2", title="K-means clustering")
ax.legend(frameon=False)
plt.show()
```
