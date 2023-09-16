A tui file manager with Vim-like key mapping, written in Rust.\
Fast, simple, and easy to configure & use.

![screenshot](screenshot.png)

- [New Release](#new-release)
- [Get started](#get-started)
  - [Status](#status)
  - [Installation](#installation)
  - [Integrations](#integrations)
- [Usage](#usage)
- [Key Manual](#key-manual)
  - [Move cursor / Change directory](#move)
  - [Open a file](#open)
  - [Manage items](#manage)
  - [Change the view, search and others](#view)
- [Configuration](#configuration)

<a id="new-release"></a>

## v2.8.1 (2023-08-25)

### Fixed

- Fix help text.

## v2.8.0 (2023-08-25)

### Added

- `i{file name}<CR>` to create new file, and `I{dir name}<CR>` to create new directory.
- If zoxide is installed, whenever changing directory inside felix, `zoxide add` will be executed to add the directory or increment its rank in the zoxide database.
  - For this, `State` now has a new field `has_zoxide`, which is checked at startup.

### Changed

- config's `color` is now optional: By this, all config fields are optional.
  - Remove warning message when you launch felix without the config file.
- When opening file by default editor is failed, felix displays more accurate warning: `$EDITOR may not be set, or config file may be invalid.`.

### Removed

- Remove `syntect` and syntax highlighting in the preview area. This will improve build and start-up times, and resolve the handling of wide chars such as CJK.

## New Release

## v2.7.0 (2023-08-05)

### Changed

- Minimal supported rust version is now 1.67.1
- Upgrade dependencies.
- Update syntect version to v5.1.0. This fixes the handling of multibyte chars in the preview area.
- Allow file name `config.yml` in addition to `config.yaml` for the configuration.

## v2.6.0 (2023-07-22)

### Added

- Allow `<C-r>` in command line: Paste item name(s) in register. e.g. `<C-r>"` pastes item name in unnamed register.
- Allow wild card in command line: e.g. `:zip test *.md` works now.
- Ability to `cd {absolute/relative path}`.
- Ability to jump backward / forward (`<C-o>`, `<C-i>` respectively)

## v2.5.0 (2023-07-13)

### Added

- Ability to exit to LWD (last working directory): See Integrations for details.

For more details, see `CHANGELOG.md` in the
[repository](https://github.com/kyoheiu/felix).

<a id="get-started"></a>

## Get Started

<a id="status"></a>

### Status

| OS      | Status               |
| ------- | -------------------- |
| Linux   | works                |
| NetBSD  | works                |
| MacOS   | works                |
| Windows | not fully tested yet |

_For Windows users: From v1.3.0, it can be at least compiled on Windows (see
`.github/workflows/install_test.yml`.) If you're interested, Please try the
native build and report any problems._

<a id="installation"></a>

## Installation

| package    | installation command  | notes                                                                                                                                       |
| ---------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| crates.io  | `cargo install felix` | Minimal supported rustc version: **1.67.1**                                                                                                 |
| Arch Linux | `pacman -S felix-rs`  | The binary name is `felix` if you install via pacman. Alias `fx='felix'` if you want, as this document (and other installations) uses `fx`. |
| NetBSD     | `pkgin install felix` |                                                                                                                                             |

### From git repository

- Make sure that `gcc` is installed.
- MSRV(Minimum Supported rustc Version): **1.67.1**

Update Rust if rustc < 1.67.1:

```
rustup update
```

```
git clone https://github.com/kyoheiu/felix.git
cd felix
cargo install --path .
```

<a id="integrations"></a>

### Integrations

#### Exit to last working directory (LWD)

To export your LWD to the calling shell after exiting from `fx`, add the
following to your `.bashrc` or `.zshrc` or an equivalent depending on your
(POSIX) shell.\
_**Assuming the `fx` binary can be found in your `PATH`.**_

```sh
source <(command fx --init)
```

_If this is not set, exiting to LWD will fail and show the error message._

#### Others

In addition, you can use felix more conveniently by installing the following two
apps:

- [zoxide](https://github.com/ajeetdsouza/zoxide): A smarter `cd` command, which
  enables you to jump to a directory that matches the keyword in felix.
- [chafa](https://hpjansson.org/chafa/): Terminal graphics for the 21st century,
  by which you can preview images in felix. **_chafa must be v1.10.0 or
  later._**

These apps do not need any configuration to use with felix!

<a id="usage"></a>

## Usage

_If you install this app via pacman, the default binary name is `felix`._

```
`fx` => Show items in the current directory.
`fx <directory path>` => Show items in the directory.
Both relative and absolute path available.
```

### Options

```
`--help` | `-h` => Print help.
`--log`  | `-l` => Launch the app, automatically generating a log file in `{data_local_dir}/felix/log`.
`--init`        => Returns a shell script that can be sourced for shell integration.
```

<a id="key-manual"></a>

## Key Manual

<a id="move"></a>

### Move cursor / Change directory

| Key                      | Explanation                                                                                                                                                                                                                                                                    |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `j` / `<Down>`           | Go up. If the list exceeds max-row, it "scrolls" before the top of the list.                                                                                                                                                                                                   |
| `k` / `<Up>`             | Go down. If the list exceeds max-row, it "scrolls" before the bottom of the list.                                                                                                                                                                                              |
| `h` / `<Left>`           | Go to the parent directory if exists.                                                                                                                                                                                                                                          |
| `l` / `<Right>` / `<CR>` | Open a file or change the directory. Commands for the execution can be managed in the config file.                                                                                                                                                                             |
| `gg`                     | Go to the top.                                                                                                                                                                                                                                                                 |
| `G`                      | Go to the bottom.                                                                                                                                                                                                                                                              |
| `z<CR>`                  | Go to the home directory.                                                                                                                                                                                                                                                      |
| `z {keyword}<CR>`        | **_This command requires zoxide installed._** Jump to a directory that matches the keyword. Internally, felix calls [`zoxide query <keyword>`](https://man.archlinux.org/man/zoxide-query.1.en), so if the keyword does not match the zoxide database, this command will fail. |
| `:cd<CR>`                | Go to the home directory.                                                                                                                                                                                                                                                      |
| `:cd {path}<CR>`         | Go to the path.                                                                                                                                                                                                                                                                |
| `<C-o>`                  | Jump backward across directories.                                                                                                                                                                                                                                              |
| `<C-i>`                  | Jump forward across directories.                                                                                                                                                                                                                                               |
| `:trash<CR>`             | Go to the trash directory.                                                                                                                                                                                                                                                     |

<a id="open"></a>

### Open a file

| Key                    | Explanation                                                                                                                                                                                                              |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `l` / `Right` / `<CR>` | Open a file or change the directory. Commands for the execution can be managed in the config file.                                                                                                                       |
| `o`                    | Open a file in a new window. This enables you to use felix while working with the file. Works only if `exec` is set in the config file and the extension of the item matches one of the value.                           |
| `e`                    | Extract archived/compressed file to the current directory. Supported types: `gz`(Gzip), `tar.gz`, `xz`(lzma), `tar.xz`, `zst`(Zstandard), `tar.zst`, `tar`, zip file format and formats based on it(`zip`, `docx`, ...). |

<a id="manage"></a>

### Manage items

| Key                 | Explanation                                                                                                                                                                       |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `i{file name}<CR>`  | Create a new empty file.                                                                                                                                                          |
| `I{dir name}<CR>`   | Create a new empty directory.                                                                                                                                                     |
| `dd`                | Delete and yank item, which will go to the trash directory.                                                                                                                       |
| `yy`                | Yank item.                                                                                                                                                                        |
| `p`                 | Put yanked item(s) from register zero to the current directory. If the item with same name exists, copied item will be renamed with the suffix `\_{count}`, such as `test_1.txt`. |
| `"ayy`              | Yank item to register `a`.                                                                                                                                                        |
| `"add`              | Delete and yank item to register `a`.                                                                                                                                             |
| `"Ayy`              | Append item to register `a`.                                                                                                                                                      |
| `"Add`              | Delete and append item to register `a`.                                                                                                                                           |
| `"ap`               | Put item(s) from register `a`.                                                                                                                                                    |
| `V`                 | Switch to the linewise visual mode, where you can move cursor to select items.                                                                                                    |
| `d` (visual mode)   | Delete and yank selected items, and return to the normal mode.                                                                                                                    |
| `y` (visual mode)   | Yank selected items, and return to the normal mode.                                                                                                                               |
| `"ay` (visual mode) | Yank items to register `a`.                                                                                                                                                       |
| `"ad` (visual mode) | Delete and yank items to register `a`.                                                                                                                                            |
| `"Ay` (visual mode) | Append items to register `a`.                                                                                                                                                     |
| `"Ad` (visual mode) | Delete and append items to register `a`.                                                                                                                                          |
| `c`                 | Switch to the rename mode (enter the new name and press `<CR>` to rename).                                                                                                        |
| `u`                 | Undo put/delete/rename.                                                                                                                                                           |
| `<C-r>`             | Redo put/delete/rename.                                                                                                                                                           |

<a id="view"></a>

### Change the view, search and others

| Key                        | Explanation                                                                                                                                                                                               |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `v`                        | Toggle whether to show the item preview (text, image, or the contents tree) on the right half of the terminal. **_You must install [`chafa`](https://hpjansson.org/chafa/) in order to preview images._** |
| `:reg`                     | Show registers. To hide it, press `v`.                                                                                                                                                                    |
| `<Alt-j>` / `<Alt-<Down>>` | Scroll down the preview text.                                                                                                                                                                             |
| `<Alt-k>` / `<Alt-<Up>>`   | Scroll up the preview text.                                                                                                                                                                               |
| `s`                        | Toggle between vertical / horizontal split in the preview mode.                                                                                                                                           |
| `<BS>`                     | Toggle whether to show hidden items or not. This change remains after exit (stored in `.session`).                                                                                                        |
| `t`                        | Toggle sort order (by name <-> by modified time). This change remains after exit (same as above).                                                                                                         |
| `/{keyword}`               | Search items by the keyword.                                                                                                                                                                              |
| `n`                        | Go forward to the item that matches the keyword.                                                                                                                                                          |
| `N`                        | Go backward to the item that matches the keyword.                                                                                                                                                         |
| `:`                        | Switch to the command line. Type command and press Enter to execute it. You can use any command in the displayed directory, but some commands may fail, and the display may collapse during execution.    |
| `<C-r>a`                   | In the command line, paste item name in register `a`.                                                                                                                                                     |
| `:e<CR>`                   | Reload the current directory. Useful when something goes wrong.                                                                                                                                           |
| `:empty<CR>`               | Empty the trash directory. **Please think twice before this command.**                                                                                                                                    |
| `:h<CR>`                   | Show help. (scrolls by `j` / `k` or `<Up>` / `<Down>`)                                                                                                                                                    |
| `<Esc>`                    | Return to the normal mode.                                                                                                                                                                                |
| `:q<CR>`                   | Exit.                                                                                                                                                                                                     |
| `ZZ`                       | Exit without cd to last working directory (if `match_vim_exit_behavior` is `false`).                                                                                                                      |
| `ZQ`                       | cd into the last working directory and exit (if shell setting is ready and `match_vim_exit_behavior` is `false`).                                                                                         |

Note that items moved to the trash directory are prefixed with Unix time (like
`1633843993`) to avoid the name conflict. This prefix will be removed when put.

<a id="configuration"></a>

## Configuration

### Config file

If any config file is not found, or found one is broken, felix launches with the
default configuration, without creating new one.\
Note that the default editor is `$EDITOR`, so if you've not set it and do not have the config file, opening a
file will fail.

_Both `config.yaml` and `config.yml` work from v2.7.0_

### Trash directory and log file

Contrary to the config file, these directory and file will be automatically created.

### Linux

```
config file     : $XDG_CONFIG_HOME/felix/config.yaml(config.yml)
trash directory : $XDG_DATA_HOME/felix/Trash
log files       : $XDG_DATA_HOME/felix/log
```

### macOS

On macOS, felix looks for the config file in the following locations:

1. `$HOME/Library/Application Support/felix/config.yaml(config.yml)`
2. `$HOME/.config/felix/config.yaml(config.yml)`

```
trash directory : $HOME/Library/Application Support/felix/Trash
log files       : $HOME/Library/Application Support/felix/log
```

### Windows

```
config file     : $PROFILE\AppData\Roaming\felix\config.yaml(config.yml)
trash directory : $PROFILE\AppData\Local\felix\Trash
log files       : $PROFILE\AppData\Local\felix\log
```

### Default config

```
# Default exec command when opening file.
# If not set, will default to $EDITOR.
# default: nvim

# Whether to match the behavior of Vim's exit keybindings.
# false -> `ZZ` exits without `cd` to LWD(Last Working Directory) While `ZQ` to LWD
# true  -> vice versa
# If not set, will default to false.
# match_vim_exit_behavior: false

# key (the command you want to use when opening file): [values] (extensions)
# In the key, You can use arguments.
# exec:
#   zathura:
#     [pdf]
#  'feh -.':
#   [jpg, jpeg, png, gif, svg, hdr]

# The foreground color of directory, file and symlink.
# Pick one of the following:
#     Black            // 0
#     Red              // 1
#     Green            // 2
#     Yellow           // 3
#     Blue             // 4
#     Magenta          // 5
#     Cyan             // 6
#     White            // 7
#     LightBlack       // 8
#     LightRed         // 9
#     LightGreen       // 10
#     LightYellow      // 11
#     LightBlue        // 12
#     LightMagenta     // 13
#     LightCyan        // 14
#     LightWhite       // 15
#     Rgb(u8, u8, u8)
#     AnsiValue(u8)
# Default to LightCyan(dir), LightWhite(file), and LightYellow(symlink).
# color:
#   dir_fg: LightCyan
#   file_fg: LightWhite
#   symlink_fg: LightYellow
```

### Command settings

For example, If you write

```
default: nvim

exec:
  'feh -.':
    [jpg, jpeg, png, gif, svg]
  zathura:
    [pdf]
```

then, `.jpg`, `.jpeg`, `.png`, `.gif` and `.svg` files are opened by
`feh -. <file-name>`, `.pdf` files by `zathura <file-name>` and others by
`nvim <file-name>` .
