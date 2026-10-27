{
  description = "OHIP SDK generation toolchain";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-26.05";

  outputs = { nixpkgs, ... }:
    let
      systems = [ "x86_64-linux" "aarch64-linux" "aarch64-darwin" ];
      forAllSystems = nixpkgs.lib.genAttrs systems;
    in {
      # Node.js 22, Java 21 for OpenAPI Generator, Go 1.25 for the Go modules.
      devShells = forAllSystems (system:
        let pkgs = nixpkgs.legacyPackages.${system};
        in {
          default = pkgs.mkShell {
            packages = with pkgs; [ nodejs_22 jdk21_headless go_1_25 git jq ];
            GOTOOLCHAIN = "local";
          };
        });
    };
}
