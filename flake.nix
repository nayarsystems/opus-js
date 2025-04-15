{
  description = "opus-js environment";
  nixConfig = {
    bash-prompt-prefix = "(opus-js)";
  };

  inputs = {
    nixpkgs.url = "nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    {
      self,
      flake-utils,
      nixpkgs,
      ...
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
        dependencies = [
          pkgs.git
          pkgs.nodePackages_latest.npm
          pkgs.nodePackages_latest.webpack
          pkgs.nodePackages_latest.webpack-cli
          pkgs.emscripten
          pkgs.nodejs_20

        ];
      in
      {
        #Workaround: https://github.com/NixOS/nixpkgs/issues/139943#issuecomment-930432045
        devShell = pkgs.mkShell {
          buildInputs = dependencies;
          shellHook = ''
            cp -r ${pkgs.emscripten}/share/emscripten/cache ~/.emscripten_cache
            chmod u+rwX -R ~/.emscripten_cache
            export EM_CACHE=~/.emscripten_cache

            export NODE_OPTIONS=--openssl-legacy-provider
          '';
        };
      }
    );
}
