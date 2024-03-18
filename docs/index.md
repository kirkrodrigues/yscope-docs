# YScope Docs

This is the hub for all of YScope's open-source documentation. From here, you can find docs for all
our open-source projects as well as other docs like format specifications, coding guidelines, etc.
[Contributions](#contributing) are welcome!

# Projects

Below are all our open-source projects (so far).

::::{grid} 1 1 2 2
:gutter: 2

:::{grid-item-card}
:link: https://github.com/y-scope/clp
clp
^^^
A tool that can compress logs with higher compression than general-purpose compressors while
allowing search without full decompression.
:::

:::{grid-item-card}
:link: https://github.com/y-scope/log-surgeon
log-surgeon
^^^
A customizable library for parsing logs efficiently and with high performance compared to
general-purpose regular expression engines.
:::

:::{grid-item-card}
:link: https://github.com/y-scope/yscope-log-viewer
yscope-log-viewer
^^^
A log viewer for logs that use CLP’s IR stream format including features like filtering by log level
and viewing large files.
:::
::::

## Logging libraries

The libraries below provide real-time compression into CLP's compressed intermediate representation
(IR).

::::{grid} 1 1 2 2
:gutter: 2

:::{grid-item-card}
:link: https://github.com/y-scope/clp-loglib-py
clp-loglib-py
^^^
A Python `logging` library providing lightweight and real-time compression into CLP's IR format.
:::

:::{grid-item-card}
:link: https://github.com/y-scope/log4j1-appenders
log4j1-appenders
^^^
Useful appenders for Log4j 1 including features like lightweight, real-time compression into CLP's
IR format.
:::

:::{grid-item-card}
:link: https://github.com/y-scope/logback-appenders
logback-appenders
^^^
Useful appenders for Logback including features like lightweight, real-time compression into CLP's
IR format.
:::
::::

## Log analytics libraries

The libraries below can be used to encode, decode, search, and analyze CLP IR files.

::::{grid} 1 1 2 2
:gutter: 2

:::{grid-item-card}
:link: clp-ffi-py/main
clp-ffi-py
^^^
A Python library for encoding, decoding, searching, and analyzing CLP IR files.
:::

:::{grid-item-card}
:link: https://github.com/y-scope/clp-ffi-go
clp-ffi-go
^^^
A Go library for encoding, decoding, searching, and analyzing CLP IR files.
:::
::::

# Contributing

To edit existing docs you can click the edit icon in the top right of the page
you want to edit. To create new docs, you can go to the relevant project's repo
and add pages to the `docs` folder. The repo for this documentation hub is
[here][yscope-docs]. 

[CLP]: https://github.com/y-scope/clp
[clp-ffi-java]: https://github.com/y-scope/clp-ffi-java
[log4j1-appenders]: https://github.com/y-scope/log4j1-appenders
[yscope-log-viewer]: https://github.com/y-scope/yscope-log-viewer
[yscope-docs]: https://github.com/y-scope/yscope-docs
