---
kernelspec:
  name: python3
  display_name: Python 3
---

# Series and complex numbers with Python

## Taylor approximation and truncation error

The exponential series

$$
e^x = \sum_{n=0}^{\infty}\frac{x^n}{n!}
$$

provides a direct view of convergence and truncation error.

```{code-cell} python
import math
import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-3, 3, 500)

def exp_partial_sum(x, order):
    result = np.zeros_like(x, dtype=float)
    for n in range(order + 1):
        result += x**n / math.factorial(n)
    return result

fig, axes = plt.subplots(1, 2, figsize=(10, 4))
for order in (1, 2, 4, 8, 14):
    approximation = exp_partial_sum(x, order)
    axes[0].plot(x, approximation, label=f"N={order}")
    axes[1].semilogy(x, np.maximum(np.abs(np.exp(x) - approximation), 1e-16), label=f"N={order}")

axes[0].plot(x, np.exp(x), "k--", linewidth=2, label="$e^x$")
axes[0].set(xlabel="$x$", ylabel="value", title="Taylor approximations")
axes[1].set(xlabel="$x$", ylabel="absolute error", title="Truncation error")
for ax in axes:
    ax.grid(alpha=0.25)
    ax.legend(frameon=False)
fig.tight_layout()
plt.show()
```

## Powers in the complex plane

Multiplication by $e^{i\theta}$ rotates a complex number, while raising a
complex number to a power multiplies its argument.

```{code-cell} python
theta = np.linspace(0, 2*np.pi, 17)[:-1]
z = np.exp(1j * theta)
w = z**3

fig, ax = plt.subplots(figsize=(5, 5))
ax.scatter(z.real, z.imag, label="$z$ on the unit circle")
for z0, w0 in zip(z, w):
    ax.plot([z0.real, w0.real], [z0.imag, w0.imag], color="0.75", linewidth=0.8)
ax.scatter(w.real, w.imag, marker="x", s=55, label="$z^3$")
ax.axhline(0, color="0.7", linewidth=0.8)
ax.axvline(0, color="0.7", linewidth=0.8)
ax.set(aspect="equal", xlabel="real part", ylabel="imaginary part", title="The map $z\\mapsto z^3$")
ax.legend(frameon=False)
plt.show()
```
