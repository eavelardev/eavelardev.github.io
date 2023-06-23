# apt install dev-essentials

The suggestions described here are considered based on the use of a clean WSL Ubuntu 
distribution.

## Config

Shorten paths in the `bash` prompt

```bash
echo "export PROMPT_DIRTRIM=1" >> ~/.bashrc 
```
Install `build-essential` to compile source code.

```bash
sudo apt install build-essential ffmpeg -y
```

Config `git`

```bash
git config --global user.name "Eduardo Avelar"
```

```bash
git config --global user.email eavelardev@gmail.com
```
Install miniconda for virtual envs

```
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh 
```

```
bash Miniconda3-latest-Linux-x86_64.sh 
```
```
Do you wish the installer to initialize Miniconda3
by running conda init? [yes|no]
[no] >>> yes
```
```
source ~/.bashrc
```
```
conda config --set auto_activate_base false
```
```
source ~/.bashrc
```

Create virtual env for general dev
```
conda create -n mldev python=3.9 -y
```

Get conda envs
```
conda info --envs
```

Set rulers for VS Code.
```
"editor.rulers": [94]
```
