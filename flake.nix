{
  inputs.flake-utils.url = "github:numtide/flake-utils";
  inputs.nixpkgs.url = "github:NixOS/nixpkgs";

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;
          overlays = [ ];
        };

      in rec {
        devShell = pkgs.mkShell {
          buildInputs = with pkgs; [ nodejs yarn yarn2nix ];
          shellHook = "";
        };
      });
}
