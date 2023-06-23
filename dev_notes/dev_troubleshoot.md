# Dev Troubleshooting Notes

Issue:
```bash
Failed to attach disk to WSL2: The system cannot find the file specified.
Error code: Wsl/Service/CreateInstance/MountVhd/ERROR_FILE_NOT_FOUND
```

Solution: unregister the distribution
```
wslconfig /u Ubuntu-22.04
```

Issue when install `opencv-python`
```
libGL.so.1: cannot open shared object file: No such file or directory
```

Solution:
```
sudo apt install libgl1
```

bash: ../lib/`libtinfo.so.6`: no version information available (required by bash)
```
ln -sf /lib/x86_64-linux-gnu/libtinfo.so.6 $CONDA_PREFIX/lib/libtinfo.so.6
```

libdevice not found at ./`libdevice.10.bc`. 
```
conda install -c nvidia cuda-nvcc=11.8 -y

echo 'export XLA_FLAGS="--xla_gpu_cuda_data_dir=$CONDA_PREFIX"' >> $CONDA_PREFIX/etc/conda/activate.d/env_vars.sh
```

Enable systemd in Ubuntu WSL (use snap). Add the following modification to `/etc/wsl.conf`, then restart your instance by running `wsl --shutdown` in PowerShell.
```
[boot]
systemd=true
```

Jupyter Books.
```
remove "sphinx_thebe" 
set html_theme_options={"search_bar_text": ""}
from site-packages/jupyter_book/config.py

add "jobs=8" to site-packages/jupyter_book/sphinx.py
```
