Videogular Cuepoints example
============================

This is a simple example for using [Videogular Cuepoints][vg-cuepoints], derived from the [Videogular Controls example](http://www.videogular.com/examples/controls-plugin/). To use it, fetch dependencies through [Bower](http://bower.io/), and then serve the folder with a web server (such as the one built in to Python):

```sh
bower install
python -m SimpleHTTPServer
```

Open `index.html` in a Web browser (in this case at `http://localhost:8000/`). You should see a Videogular player with two red lines (the cuepoints) on its scrub bar.

Developing Videogular Cuepoints
-------------------------------

To use this example with a development version of Videogular Cuepoints, it's easiest to use the [`bower link`](http://bower.io/docs/api/#link) command. In your Videogular Cuepoints directory, run:

```sh
bower link
```

Then in this repository, run:

```sh
bower link videogular-cuepoints
```

Bower will now use the version of Videogular Cuepoints on your system.

[vg-cuepoints]: https://github.com/HarryCutts/videogular-cuepoints
