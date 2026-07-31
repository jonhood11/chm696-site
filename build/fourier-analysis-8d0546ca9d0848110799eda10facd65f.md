---
kernelspec:
  name: python3
  display_name: Python 3
---

# Fourier analysis with Python

## Building a square wave from harmonics

```{code-cell} python
import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-np.pi, np.pi, 1200)

def square_series(x, harmonics):
    result = np.zeros_like(x)
    for n in range(1, 2*harmonics, 2):
        result += np.sin(n*x) / n
    return 4 * result / np.pi

fig, ax = plt.subplots(figsize=(8, 4))
for harmonics in (1, 3, 10, 40):
    ax.plot(x, square_series(x, harmonics), label=f"{harmonics} odd terms")
ax.plot(x, np.where(x >= 0, 1, -1), "k--", linewidth=1, label="target")
ax.set(xlabel="$x$", ylabel="$f(x)$", title="Fourier approximation and the Gibbs phenomenon")
ax.legend(frameon=False, ncol=2)
ax.grid(alpha=0.2)
plt.show()
```

## Reading a spectrum with the discrete Fourier transform

```{code-cell} python
sample_rate = 500
time = np.arange(0, 2, 1/sample_rate)
signal = np.sin(2*np.pi*17*time) + 0.45*np.sin(2*np.pi*63*time + 0.4)
frequencies = np.fft.rfftfreq(time.size, d=1/sample_rate)
spectrum = 2*np.abs(np.fft.rfft(signal)) / time.size

fig, axes = plt.subplots(1, 2, figsize=(10, 3.7))
axes[0].plot(time[:250], signal[:250])
axes[0].set(xlabel="time", ylabel="signal", title="Time domain")
axes[1].stem(frequencies, spectrum, basefmt=" ")
axes[1].set(xlim=(0, 100), xlabel="frequency", ylabel="amplitude", title="Frequency domain")
fig.tight_layout()
plt.show()
```
