# AGENTS.md

## CI

CI is Tekton Pipelines-as-Code on xlab (`.tekton/`) and follows the xlab CI
scripting standard ([Repository pipelines](https://github.com/applyinnovations/deployments/blob/main/clusters/xlab/manifests/tekton/README.md#repository-pipelines)): pipelines only wire Tasks
and call scripts in this repository, which hold the logic, run the same
locally and have tests (Bash for glue, Python for real logic). No inline logic
in YAML.
