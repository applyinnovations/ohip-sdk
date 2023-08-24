module ohiptest

go 1.21.0

replace github.com/applyinnovations/ohip-sdk/rsv => ../src/apis/go/rsv

replace github.com/applyinnovations/ohip-sdk/oauth => ../src/apis/go/oauth

require github.com/applyinnovations/ohip-sdk/rsv v0.0.0-00010101000000-000000000000

require github.com/applyinnovations/ohip-sdk/oauth v0.0.0-00010101000000-000000000000 // indirect
