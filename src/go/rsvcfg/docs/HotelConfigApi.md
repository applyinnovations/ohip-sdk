# \HotelConfigApi

All URIs are relative to */rsv/config/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ChangeCancellationPolicy**](HotelConfigApi.md#ChangeCancellationPolicy) | **Put** /cancelpolicy/{cancelpolicycode} | Change Cancellation policies in hotel level
[**ChangeDepositPolicy**](HotelConfigApi.md#ChangeDepositPolicy) | **Put** /depositpolicy/{depositpolicycode} | Change deposit policy in hotel level
[**ChangeGuaranteeCode**](HotelConfigApi.md#ChangeGuaranteeCode) | **Put** /guaranteeCodes/{guaranteeCode} | Change Guarantee Code
[**ChangeGuaranteeCodeSchedule**](HotelConfigApi.md#ChangeGuaranteeCodeSchedule) | **Put** /hotels/{hotelId}/guaranteeCodeSchedules/{policyScheduleId} | Change an schedule for guarantee codes 
[**ChangeMarketCode**](HotelConfigApi.md#ChangeMarketCode) | **Put** /hotels/{hotelId}/marketCodes/{marketcode} | Modify a Market Code 
[**ChangeMarketGroup**](HotelConfigApi.md#ChangeMarketGroup) | **Put** /hotels/{hotelId}/marketGroups/{marketGroupCode} | Change Market Group
[**ChangePolicySchedule**](HotelConfigApi.md#ChangePolicySchedule) | **Put** /hotels/{hotelId}/policyschedules/{policyscheduleId} | Change a Policy Schedule
[**ChangePreCheckInRules**](HotelConfigApi.md#ChangePreCheckInRules) | **Put** /hotels/{hotelId}/precheckinRules | Change Pre Check In rules
[**ChangeServiceRequestCodePriorities**](HotelConfigApi.md#ChangeServiceRequestCodePriorities) | **Put** /hotels/{hotelId}/serviceRequestCodes/{serviceRequestCode}/priorities | Change Service Request Code Priorities
[**ChangeServiceRequestCodes**](HotelConfigApi.md#ChangeServiceRequestCodes) | **Put** /hotels/{hotelId}/serviceRequestCodes | Change configuration service request codes
[**ChangeSourceCode**](HotelConfigApi.md#ChangeSourceCode) | **Put** /hotels/{hotelId}/sourceCodes/{sourceCode} | Update a Source Code
[**ChangeSourceGroup**](HotelConfigApi.md#ChangeSourceGroup) | **Put** /hotels/{hotelId}/sourceGroups/{sourceGroupCode} | Change a Source Group
[**ChangeTemplateCancellationPolicy**](HotelConfigApi.md#ChangeTemplateCancellationPolicy) | **Put** /cancelpolicytemplate/{cancelpolicytemplate} | Change template Cancellation policies
[**ChangeTemplateDepositPolicy**](HotelConfigApi.md#ChangeTemplateDepositPolicy) | **Put** /depositpolicytemplate/{depositpolicytemplate} | Change template deposit policy
[**ChangeTemplateGuaranteeCode**](HotelConfigApi.md#ChangeTemplateGuaranteeCode) | **Put** /guaranteeCodeTemplates/{guaranteeCode} | Change template Guarantee Code
[**ChangeTemplateMarketCode**](HotelConfigApi.md#ChangeTemplateMarketCode) | **Put** /marketCodeTemplates/{marketcode} | Update a Market Code Template
[**ChangeTemplateMarketGroup**](HotelConfigApi.md#ChangeTemplateMarketGroup) | **Put** /marketGroupTemplate/{marketGroupCode} | Change Market Group Template
[**ChangeTemplateSourceCode**](HotelConfigApi.md#ChangeTemplateSourceCode) | **Put** /templates/sourceCodes/{sourceCode} | Change a Template Source Code
[**ChangeTemplateSourceGroup**](HotelConfigApi.md#ChangeTemplateSourceGroup) | **Put** /templates/sourceGroups | Change Template Source Group
[**CopyGuaranteeCodeSchedules**](HotelConfigApi.md#CopyGuaranteeCodeSchedules) | **Put** /hotels/{hotelId}/guaranteeCodeSchedules/{policyScheduleId}/copy | Copy schedule s for guarantee codes 
[**CopyPolicySchedules**](HotelConfigApi.md#CopyPolicySchedules) | **Put** /hotels/{hotelId}/policyschedules/{policyscheduleId}/copy | Copy a Policy Schedule
[**CopyServiceRequestCodes**](HotelConfigApi.md#CopyServiceRequestCodes) | **Put** /hotels/{sourceHotelId}/serviceRequestCodes/copy |  copy configuration service request codes
[**DeleteCancellationPolicy**](HotelConfigApi.md#DeleteCancellationPolicy) | **Delete** /cancelpolicy/{cancelpolicycode} | Delete Cancellation policies in hotel level
[**DeleteDepositPolicy**](HotelConfigApi.md#DeleteDepositPolicy) | **Delete** /depositpolicy/{depositpolicycode} | Delete deposit policy in hotel level
[**DeleteGuaranteeCode**](HotelConfigApi.md#DeleteGuaranteeCode) | **Delete** /guaranteeCodes/{guaranteeCode} | Delete Guarantee Code
[**DeleteGuaranteeCodeSchedule**](HotelConfigApi.md#DeleteGuaranteeCodeSchedule) | **Delete** /hotels/{hotelId}/guaranteeCodeSchedules/{policyScheduleId} | Delete schedule for guarantee codes 
[**DeletePolicySchedule**](HotelConfigApi.md#DeletePolicySchedule) | **Delete** /hotels/{hotelId}/policyschedules/{policyscheduleId} | Delete Policy Schedule
[**DeleteTemplateCancellationPolicy**](HotelConfigApi.md#DeleteTemplateCancellationPolicy) | **Delete** /cancelpolicytemplate/{cancelpolicytemplate} | Delete template Cancellation policies
[**DeleteTemplateDepositPolicy**](HotelConfigApi.md#DeleteTemplateDepositPolicy) | **Delete** /depositpolicytemplate/{depositpolicytemplate} | Delete template deposit policy
[**DeleteTemplateGuaranteeCode**](HotelConfigApi.md#DeleteTemplateGuaranteeCode) | **Delete** /guaranteeCodeTemplates/{guaranteeCode} | Delete template Guarantee Code
[**GetCancellationPolicy**](HotelConfigApi.md#GetCancellationPolicy) | **Get** /cancelpolicies | Get Cancellation policies in hotel level
[**GetDepositPolicy**](HotelConfigApi.md#GetDepositPolicy) | **Get** /depositpolicies | Get deposit policies in hotel level
[**GetGuaranteeCodeSchedules**](HotelConfigApi.md#GetGuaranteeCodeSchedules) | **Get** /hotels/{hotelId}/guaranteeCodeSchedules | Get schedules for guarantee codes 
[**GetGuaranteeCodes**](HotelConfigApi.md#GetGuaranteeCodes) | **Get** /guaranteeCodes | Get guarantee codes
[**GetMarketCodes**](HotelConfigApi.md#GetMarketCodes) | **Get** /marketCodes | Get Market codes
[**GetMarketGroups**](HotelConfigApi.md#GetMarketGroups) | **Get** /marketGroups | Get Market Groups 
[**GetPolicySchedules**](HotelConfigApi.md#GetPolicySchedules) | **Get** /hotels/{hotelId}/policyschedules | Get policy schedules
[**GetPreCheckInRules**](HotelConfigApi.md#GetPreCheckInRules) | **Get** /hotels/{hotelId}/precheckinRules | Get Pre Check In rules
[**GetServiceRequestCode**](HotelConfigApi.md#GetServiceRequestCode) | **Get** /serviceRequestCodes | Get service request codes
[**GetServiceRequestCodePriorities**](HotelConfigApi.md#GetServiceRequestCodePriorities) | **Get** /hotels/{hotelId}/serviceRequestCodes/{serviceRequestCode}/priorities | Get Service Request Code Priorities
[**GetServiceRequestCodePriority**](HotelConfigApi.md#GetServiceRequestCodePriority) | **Get** /serviceRequestCodes/priorities | Get Service Request Code Priorities
[**GetServiceRequestCodes**](HotelConfigApi.md#GetServiceRequestCodes) | **Get** /hotels/{hotelId}/serviceRequestCodes | Get service request codes
[**GetSourceCodes**](HotelConfigApi.md#GetSourceCodes) | **Get** /hotels/{hotelId}/sourceCodes/ | Get Source Codes
[**GetSourceGroups**](HotelConfigApi.md#GetSourceGroups) | **Get** /hotels/{hotelId}/sourceGroups | Search for Source Groups 
[**GetTemplateCancellationPolicy**](HotelConfigApi.md#GetTemplateCancellationPolicy) | **Get** /cancelpolicytemplates | Get template Cancellation policies
[**GetTemplateDepositPolicy**](HotelConfigApi.md#GetTemplateDepositPolicy) | **Get** /depositpolicytemplates | Get template deposit policies
[**GetTemplateGuaranteeCodes**](HotelConfigApi.md#GetTemplateGuaranteeCodes) | **Get** /guaranteeCodeTemplates | Get template Guarantee Codes
[**GetTemplateMarketCodes**](HotelConfigApi.md#GetTemplateMarketCodes) | **Get** /marketCodeTemplates | Search for Market codes Template
[**GetTemplateMarketGroups**](HotelConfigApi.md#GetTemplateMarketGroups) | **Get** /marketGroupTemplates | Get  Market Group Templates
[**GetTemplateSourceCodes**](HotelConfigApi.md#GetTemplateSourceCodes) | **Get** /templates/sourceCodes | Get template Source Codes
[**GetTemplateSourceGroups**](HotelConfigApi.md#GetTemplateSourceGroups) | **Get** /templates/sourceGroups | Get Template Source Groups
[**PostCancellationPolicy**](HotelConfigApi.md#PostCancellationPolicy) | **Post** /cancelpolicy/{cancelpolicycode} | Create Cancellation policies in hotel level
[**PostDepositPolicy**](HotelConfigApi.md#PostDepositPolicy) | **Post** /depositpolicy/{depositpolicycode} | Create deposit policy in hotel level
[**PostGuaranteeCode**](HotelConfigApi.md#PostGuaranteeCode) | **Post** /guaranteeCodes | Create Guarantee Code
[**PostGuaranteeCodeSchedule**](HotelConfigApi.md#PostGuaranteeCodeSchedule) | **Post** /hotels/{hotelId}/guaranteeCodeSchedules | Create schedule for guarantee codes 
[**PostMarketCode**](HotelConfigApi.md#PostMarketCode) | **Post** /hotels/{hotelId}/marketCodes/{marketcode} | Create a new Market Code
[**PostMarketGroup**](HotelConfigApi.md#PostMarketGroup) | **Post** /hotels/{hotelId}/marketGroups/{marketGroupCode} | Create Market Group
[**PostNewPolicySchedule**](HotelConfigApi.md#PostNewPolicySchedule) | **Post** /hotels/{hotelId}/policyschedules | Create a Policy Schedule
[**PostPolicySchedule**](HotelConfigApi.md#PostPolicySchedule) | **Post** /hotels/{hotelId}/policyschedules/{policyscheduleId} | Create a Policy Schedule
[**PostPreCheckInRules**](HotelConfigApi.md#PostPreCheckInRules) | **Post** /hotels/{hotelId}/precheckinRules | Create Pre Check In rules
[**PostServiceRequestCodePriorities**](HotelConfigApi.md#PostServiceRequestCodePriorities) | **Post** /hotels/{hotelId}/serviceRequestCodes/{serviceRequestCode}/priorities | Create Service Request Code Priorities
[**PostServiceRequestCodes**](HotelConfigApi.md#PostServiceRequestCodes) | **Post** /hotels/{hotelId}/serviceRequestCodes | Create service request codes
[**PostSourceCode**](HotelConfigApi.md#PostSourceCode) | **Post** /hotels/{hotelId}/sourceCodes/ | Create a Source Code
[**PostSourceGroup**](HotelConfigApi.md#PostSourceGroup) | **Post** /hotels/{hotelId}/sourceGroups | Create a Source Group
[**PostTemplateCancellationPolicy**](HotelConfigApi.md#PostTemplateCancellationPolicy) | **Post** /cancelpolicytemplate/{cancelpolicytemplate} | Create template Cancellation policies
[**PostTemplateDepositPolicy**](HotelConfigApi.md#PostTemplateDepositPolicy) | **Post** /depositpolicytemplate/{depositpolicytemplate} | Create template deposit policy
[**PostTemplateGuaranteeCode**](HotelConfigApi.md#PostTemplateGuaranteeCode) | **Post** /guaranteeCodeTemplates/{guaranteeCode} | Create template Guarantee Code
[**PostTemplateMarketCode**](HotelConfigApi.md#PostTemplateMarketCode) | **Post** /marketCodeTemplates | Create Market Code Template
[**PostTemplateMarketGroup**](HotelConfigApi.md#PostTemplateMarketGroup) | **Post** /marketGroupTemplate/{marketGroupCode} | Create Market Group Template
[**PostTemplateSourceCode**](HotelConfigApi.md#PostTemplateSourceCode) | **Post** /templates/sourceCodes | Create a Template Source Code
[**PostTemplateSourceGroup**](HotelConfigApi.md#PostTemplateSourceGroup) | **Post** /templates/sourceGroups | Create a Template Source Group
[**RemoveMarketCode**](HotelConfigApi.md#RemoveMarketCode) | **Delete** /hotels/{hotelId}/marketCodes/{marketcode} | Delete a Market Code 
[**RemoveMarketGroup**](HotelConfigApi.md#RemoveMarketGroup) | **Delete** /hotels/{hotelId}/marketGroups/{marketGroupCode} | Delete a Market Group 
[**RemovePreCheckInRules**](HotelConfigApi.md#RemovePreCheckInRules) | **Delete** /hotels/{hotelId}/precheckinRules | Delete Pre Check In rules
[**RemoveServiceRequestCodePriorities**](HotelConfigApi.md#RemoveServiceRequestCodePriorities) | **Delete** /hotels/{hotelId}/serviceRequestCodes/{serviceRequestCode}/priorities | Delete Service Request Code Priorities
[**RemoveServiceRequestCodes**](HotelConfigApi.md#RemoveServiceRequestCodes) | **Delete** /hotels/{hotelId}/serviceRequestCodes | Delete configuration service request codes
[**RemoveSourceCode**](HotelConfigApi.md#RemoveSourceCode) | **Delete** /hotels/{hotelId}/sourceCodes/{sourceCode} | Delete a Source Code
[**RemoveSourceGroup**](HotelConfigApi.md#RemoveSourceGroup) | **Delete** /hotels/{hotelId}/sourceGroups/{sourceGroupCode} | Delete a Source Group
[**RemoveTemplateMarketCode**](HotelConfigApi.md#RemoveTemplateMarketCode) | **Delete** /marketCodeTemplates/{marketcode} | Delete a Market Code Template
[**RemoveTemplateMarketGroup**](HotelConfigApi.md#RemoveTemplateMarketGroup) | **Delete** /marketGroupTemplate/{marketGroupCode} | Delete market Group Template
[**RemoveTemplateSourceCode**](HotelConfigApi.md#RemoveTemplateSourceCode) | **Delete** /templates/sourceCodes/{sourceCode} | Delete a Template Source Code
[**RemoveTemplateSourceGroup**](HotelConfigApi.md#RemoveTemplateSourceGroup) | **Delete** /templates/sourceGroups | Delete a Template Source Group



## ChangeCancellationPolicy

> Status ChangeCancellationPolicy(ctx, cancelpolicycode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CancellationPolicyToBeChanged(cancellationPolicyToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Cancellation policies in hotel level



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    cancelpolicycode := "cancelpolicycode_example" // string | Unique Code of policy.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cancellationPolicyToBeChanged := *openapiclient.NewChangeCancellationPolicyRequest() // ChangeCancellationPolicyRequest | Request object that holds the details of Cancellation Policy to be changed.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.ChangeCancellationPolicy(context.Background(), cancelpolicycode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CancellationPolicyToBeChanged(cancellationPolicyToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.ChangeCancellationPolicy``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeCancellationPolicy`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.ChangeCancellationPolicy`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**cancelpolicycode** | **string** | Unique Code of policy. | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeCancellationPolicyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cancellationPolicyToBeChanged** | [**ChangeCancellationPolicyRequest**](ChangeCancellationPolicyRequest.md) | Request object that holds the details of Cancellation Policy to be changed. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ChangeDepositPolicy

> Status ChangeDepositPolicy(ctx, depositpolicycode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DepositPolicyToBeChanged(depositPolicyToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change deposit policy in hotel level



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    depositpolicycode := "depositpolicycode_example" // string | Unique Code of deposit policy.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    depositPolicyToBeChanged := *openapiclient.NewChangeDepositPolicyRequest() // ChangeDepositPolicyRequest | Request object that holds the details of hotel level Deposit Policy to be changed.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.ChangeDepositPolicy(context.Background(), depositpolicycode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DepositPolicyToBeChanged(depositPolicyToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.ChangeDepositPolicy``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeDepositPolicy`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.ChangeDepositPolicy`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**depositpolicycode** | **string** | Unique Code of deposit policy. | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeDepositPolicyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **depositPolicyToBeChanged** | [**ChangeDepositPolicyRequest**](ChangeDepositPolicyRequest.md) | Request object that holds the details of hotel level Deposit Policy to be changed. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ChangeGuaranteeCode

> Status ChangeGuaranteeCode(ctx, guaranteeCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GuaranteeCodeToBeChanged(guaranteeCodeToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Guarantee Code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    guaranteeCode := "guaranteeCode_example" // string | Unique Code of guarantee.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    guaranteeCodeToBeChanged := *openapiclient.NewChangeGuaranteeCodeRequest() // ChangeGuaranteeCodeRequest | Request object that holds the details of Guarantee Code to be changed.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.ChangeGuaranteeCode(context.Background(), guaranteeCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GuaranteeCodeToBeChanged(guaranteeCodeToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.ChangeGuaranteeCode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeGuaranteeCode`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.ChangeGuaranteeCode`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**guaranteeCode** | **string** | Unique Code of guarantee. | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeGuaranteeCodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **guaranteeCodeToBeChanged** | [**ChangeGuaranteeCodeRequest**](ChangeGuaranteeCodeRequest.md) | Request object that holds the details of Guarantee Code to be changed. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ChangeGuaranteeCodeSchedule

> Status ChangeGuaranteeCodeSchedule(ctx, policyScheduleId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GuaranteeCodeScheduleToBeChanged(guaranteeCodeScheduleToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change an schedule for guarantee codes 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    policyScheduleId := "policyScheduleId_example" // string | Unique ID of policy schedule.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    guaranteeCodeScheduleToBeChanged := *openapiclient.NewChangeGuaranteeCodeScheduleRequest() // ChangeGuaranteeCodeScheduleRequest | Changes the Guarantee Code schedule based on the details provided by the request.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.ChangeGuaranteeCodeSchedule(context.Background(), policyScheduleId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GuaranteeCodeScheduleToBeChanged(guaranteeCodeScheduleToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.ChangeGuaranteeCodeSchedule``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeGuaranteeCodeSchedule`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.ChangeGuaranteeCodeSchedule`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**policyScheduleId** | **string** | Unique ID of policy schedule. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeGuaranteeCodeScheduleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **guaranteeCodeScheduleToBeChanged** | [**ChangeGuaranteeCodeScheduleRequest**](ChangeGuaranteeCodeScheduleRequest.md) | Changes the Guarantee Code schedule based on the details provided by the request. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ChangeMarketCode

> Status ChangeMarketCode(ctx, marketcode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MarketCodeToBeChanged(marketCodeToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Modify a Market Code 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    marketcode := "marketcode_example" // string | Unique Code of market.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    marketCodeToBeChanged := *openapiclient.NewChangeMarketCodeRequest() // ChangeMarketCodeRequest | Request object that holds the details of Market Code to be changed.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.ChangeMarketCode(context.Background(), marketcode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MarketCodeToBeChanged(marketCodeToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.ChangeMarketCode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeMarketCode`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.ChangeMarketCode`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**marketcode** | **string** | Unique Code of market. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeMarketCodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **marketCodeToBeChanged** | [**ChangeMarketCodeRequest**](ChangeMarketCodeRequest.md) | Request object that holds the details of Market Code to be changed. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ChangeMarketGroup

> Status ChangeMarketGroup(ctx, marketGroupCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MarketGroupToBeChanged(marketGroupToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Market Group



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    marketGroupCode := "marketGroupCode_example" // string | Unique Code of market group.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    marketGroupToBeChanged := *openapiclient.NewChangeMarketGroupRequest() // ChangeMarketGroupRequest | Request object that holds the details of Market Group to be changed.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.ChangeMarketGroup(context.Background(), marketGroupCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MarketGroupToBeChanged(marketGroupToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.ChangeMarketGroup``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeMarketGroup`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.ChangeMarketGroup`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**marketGroupCode** | **string** | Unique Code of market group. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeMarketGroupRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **marketGroupToBeChanged** | [**ChangeMarketGroupRequest**](ChangeMarketGroupRequest.md) | Request object that holds the details of Market Group to be changed. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ChangePolicySchedule

> Status ChangePolicySchedule(ctx, policyscheduleId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PolicyScheduleToBeChanged(policyScheduleToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change a Policy Schedule



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    policyscheduleId := "policyscheduleId_example" // string | Unique ID of policy schedule.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    policyScheduleToBeChanged := *openapiclient.NewChangePolicyScheduleRequest() // ChangePolicyScheduleRequest | Changes the Policy schedule based on the details provided by the request.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.ChangePolicySchedule(context.Background(), policyscheduleId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PolicyScheduleToBeChanged(policyScheduleToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.ChangePolicySchedule``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangePolicySchedule`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.ChangePolicySchedule`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**policyscheduleId** | **string** | Unique ID of policy schedule. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangePolicyScheduleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **policyScheduleToBeChanged** | [**ChangePolicyScheduleRequest**](ChangePolicyScheduleRequest.md) | Changes the Policy schedule based on the details provided by the request. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ChangePreCheckInRules

> Status ChangePreCheckInRules(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PreCheckInRulesToBeChanged(preCheckInRulesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Pre Check In rules



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    preCheckInRulesToBeChanged := *openapiclient.NewChangePreCheckInRulesRequest() // ChangePreCheckInRulesRequest | Request object for modifying an existing Pre Check-In Rule
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.ChangePreCheckInRules(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PreCheckInRulesToBeChanged(preCheckInRulesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.ChangePreCheckInRules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangePreCheckInRules`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.ChangePreCheckInRules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangePreCheckInRulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **preCheckInRulesToBeChanged** | [**ChangePreCheckInRulesRequest**](ChangePreCheckInRulesRequest.md) | Request object for modifying an existing Pre Check-In Rule | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ChangeServiceRequestCodePriorities

> Status ChangeServiceRequestCodePriorities(ctx, serviceRequestCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ServiceRequestCodePrioritiesToBeChanged(serviceRequestCodePrioritiesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Service Request Code Priorities



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    serviceRequestCode := "serviceRequestCode_example" // string | Unique Code of service request.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    serviceRequestCodePrioritiesToBeChanged := *openapiclient.NewChangeServiceRequestCodePrioritiesRequest() // ChangeServiceRequestCodePrioritiesRequest | Request object for changing Service Request Code Priorities.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.ChangeServiceRequestCodePriorities(context.Background(), serviceRequestCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ServiceRequestCodePrioritiesToBeChanged(serviceRequestCodePrioritiesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.ChangeServiceRequestCodePriorities``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeServiceRequestCodePriorities`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.ChangeServiceRequestCodePriorities`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**serviceRequestCode** | **string** | Unique Code of service request. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeServiceRequestCodePrioritiesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **serviceRequestCodePrioritiesToBeChanged** | [**ChangeServiceRequestCodePrioritiesRequest**](ChangeServiceRequestCodePrioritiesRequest.md) | Request object for changing Service Request Code Priorities. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ChangeServiceRequestCodes

> Status ChangeServiceRequestCodes(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ServiceRequestCodesToBeChanged(serviceRequestCodesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change configuration service request codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    serviceRequestCodesToBeChanged := *openapiclient.NewChangeServiceRequestCodesRequest() // ChangeServiceRequestCodesRequest | Request object for changing existing service request codes.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.ChangeServiceRequestCodes(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ServiceRequestCodesToBeChanged(serviceRequestCodesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.ChangeServiceRequestCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeServiceRequestCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.ChangeServiceRequestCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeServiceRequestCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **serviceRequestCodesToBeChanged** | [**ChangeServiceRequestCodesRequest**](ChangeServiceRequestCodesRequest.md) | Request object for changing existing service request codes. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ChangeSourceCode

> Status ChangeSourceCode(ctx, sourceCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SourceCodeToBeChanged(sourceCodeToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Update a Source Code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    sourceCode := "sourceCode_example" // string | Unique Code of source.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    sourceCodeToBeChanged := *openapiclient.NewChangeSourceCodeRequest() // ChangeSourceCodeRequest | Request object that holds the details of Source Code to be changed.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.ChangeSourceCode(context.Background(), sourceCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SourceCodeToBeChanged(sourceCodeToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.ChangeSourceCode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeSourceCode`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.ChangeSourceCode`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceCode** | **string** | Unique Code of source. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeSourceCodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **sourceCodeToBeChanged** | [**ChangeSourceCodeRequest**](ChangeSourceCodeRequest.md) | Request object that holds the details of Source Code to be changed. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ChangeSourceGroup

> Status ChangeSourceGroup(ctx, sourceGroupCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SourceGroupToBeChanged(sourceGroupToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change a Source Group



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    sourceGroupCode := "sourceGroupCode_example" // string | Unique Code of source group.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    sourceGroupToBeChanged := *openapiclient.NewChangeSourceGroupRequest() // ChangeSourceGroupRequest | Request object that holds the details of Source Group to be changed.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.ChangeSourceGroup(context.Background(), sourceGroupCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SourceGroupToBeChanged(sourceGroupToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.ChangeSourceGroup``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeSourceGroup`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.ChangeSourceGroup`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceGroupCode** | **string** | Unique Code of source group. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeSourceGroupRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **sourceGroupToBeChanged** | [**ChangeSourceGroupRequest**](ChangeSourceGroupRequest.md) | Request object that holds the details of Source Group to be changed. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ChangeTemplateCancellationPolicy

> Status ChangeTemplateCancellationPolicy(ctx, cancelpolicytemplate).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateCancellationPolicyToBeChanged(templateCancellationPolicyToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change template Cancellation policies



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    cancelpolicytemplate := "cancelpolicytemplate_example" // string | Unique Code of policy template.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    templateCancellationPolicyToBeChanged := *openapiclient.NewChangeTemplateCancellationPolicyRequest() // ChangeTemplateCancellationPolicyRequest | Request object that holds the details of template Cancellation Policy to be changed.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.ChangeTemplateCancellationPolicy(context.Background(), cancelpolicytemplate).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateCancellationPolicyToBeChanged(templateCancellationPolicyToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.ChangeTemplateCancellationPolicy``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeTemplateCancellationPolicy`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.ChangeTemplateCancellationPolicy`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**cancelpolicytemplate** | **string** | Unique Code of policy template. | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeTemplateCancellationPolicyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **templateCancellationPolicyToBeChanged** | [**ChangeTemplateCancellationPolicyRequest**](ChangeTemplateCancellationPolicyRequest.md) | Request object that holds the details of template Cancellation Policy to be changed. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ChangeTemplateDepositPolicy

> Status ChangeTemplateDepositPolicy(ctx, depositpolicytemplate).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateDepositPolicyToBeChanged(templateDepositPolicyToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change template deposit policy



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    depositpolicytemplate := "depositpolicytemplate_example" // string | Unique Code of deposit policy template.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    templateDepositPolicyToBeChanged := *openapiclient.NewChangeTemplateDepositPolicyRequest() // ChangeTemplateDepositPolicyRequest | Request object that holds the details of template Deposit Policy to be changed.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.ChangeTemplateDepositPolicy(context.Background(), depositpolicytemplate).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateDepositPolicyToBeChanged(templateDepositPolicyToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.ChangeTemplateDepositPolicy``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeTemplateDepositPolicy`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.ChangeTemplateDepositPolicy`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**depositpolicytemplate** | **string** | Unique Code of deposit policy template. | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeTemplateDepositPolicyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **templateDepositPolicyToBeChanged** | [**ChangeTemplateDepositPolicyRequest**](ChangeTemplateDepositPolicyRequest.md) | Request object that holds the details of template Deposit Policy to be changed. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ChangeTemplateGuaranteeCode

> Status ChangeTemplateGuaranteeCode(ctx, guaranteeCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateGuaranteeCodeToBeChanged(templateGuaranteeCodeToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change template Guarantee Code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    guaranteeCode := "guaranteeCode_example" // string | Unique Code of Guarantee.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    templateGuaranteeCodeToBeChanged := *openapiclient.NewChangeTemplateGuaranteeCodeRequest() // ChangeTemplateGuaranteeCodeRequest | Request object that holds the details of template Guarantee Code to be changed.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.ChangeTemplateGuaranteeCode(context.Background(), guaranteeCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateGuaranteeCodeToBeChanged(templateGuaranteeCodeToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.ChangeTemplateGuaranteeCode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeTemplateGuaranteeCode`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.ChangeTemplateGuaranteeCode`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**guaranteeCode** | **string** | Unique Code of Guarantee. | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeTemplateGuaranteeCodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **templateGuaranteeCodeToBeChanged** | [**ChangeTemplateGuaranteeCodeRequest**](ChangeTemplateGuaranteeCodeRequest.md) | Request object that holds the details of template Guarantee Code to be changed. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ChangeTemplateMarketCode

> Status ChangeTemplateMarketCode(ctx, marketcode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateMarketCodeToBeChanged(templateMarketCodeToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Update a Market Code Template



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    marketcode := "marketcode_example" // string | Unique Code of market.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    templateMarketCodeToBeChanged := *openapiclient.NewChangeTemplateMarketCodeRequest() // ChangeTemplateMarketCodeRequest | Request object that holds the details of template Market Code to be changed.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.ChangeTemplateMarketCode(context.Background(), marketcode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateMarketCodeToBeChanged(templateMarketCodeToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.ChangeTemplateMarketCode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeTemplateMarketCode`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.ChangeTemplateMarketCode`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**marketcode** | **string** | Unique Code of market. | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeTemplateMarketCodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **templateMarketCodeToBeChanged** | [**ChangeTemplateMarketCodeRequest**](ChangeTemplateMarketCodeRequest.md) | Request object that holds the details of template Market Code to be changed. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ChangeTemplateMarketGroup

> Status ChangeTemplateMarketGroup(ctx, marketGroupCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateMarketGroupToBeChanged(templateMarketGroupToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Market Group Template



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    marketGroupCode := "marketGroupCode_example" // string | Unique Code of market group.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    templateMarketGroupToBeChanged := *openapiclient.NewChangeTemplateMarketGroupRequest() // ChangeTemplateMarketGroupRequest | Request object that holds the details of template Market Group to be changed.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.ChangeTemplateMarketGroup(context.Background(), marketGroupCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateMarketGroupToBeChanged(templateMarketGroupToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.ChangeTemplateMarketGroup``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeTemplateMarketGroup`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.ChangeTemplateMarketGroup`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**marketGroupCode** | **string** | Unique Code of market group. | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeTemplateMarketGroupRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **templateMarketGroupToBeChanged** | [**ChangeTemplateMarketGroupRequest**](ChangeTemplateMarketGroupRequest.md) | Request object that holds the details of template Market Group to be changed. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ChangeTemplateSourceCode

> Status ChangeTemplateSourceCode(ctx, sourceCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateSourceCodeToBeChanged(templateSourceCodeToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change a Template Source Code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    sourceCode := "sourceCode_example" // string | Unique Code of source.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    templateSourceCodeToBeChanged := *openapiclient.NewChangeTemplateSourceCodeRequest() // ChangeTemplateSourceCodeRequest | Request object that holds the details of template Source Code to be changed.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.ChangeTemplateSourceCode(context.Background(), sourceCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateSourceCodeToBeChanged(templateSourceCodeToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.ChangeTemplateSourceCode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeTemplateSourceCode`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.ChangeTemplateSourceCode`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceCode** | **string** | Unique Code of source. | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeTemplateSourceCodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **templateSourceCodeToBeChanged** | [**ChangeTemplateSourceCodeRequest**](ChangeTemplateSourceCodeRequest.md) | Request object that holds the details of template Source Code to be changed. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ChangeTemplateSourceGroup

> Status ChangeTemplateSourceGroup(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateSourceGroupToBeChanged(templateSourceGroupToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Template Source Group



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    templateSourceGroupToBeChanged := *openapiclient.NewChangeTemplateSourceGroupRequest() // ChangeTemplateSourceGroupRequest | Request object that holds the details of template Source Group to be changed.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.ChangeTemplateSourceGroup(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateSourceGroupToBeChanged(templateSourceGroupToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.ChangeTemplateSourceGroup``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeTemplateSourceGroup`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.ChangeTemplateSourceGroup`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiChangeTemplateSourceGroupRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **templateSourceGroupToBeChanged** | [**ChangeTemplateSourceGroupRequest**](ChangeTemplateSourceGroupRequest.md) | Request object that holds the details of template Source Group to be changed. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CopyGuaranteeCodeSchedules

> Status CopyGuaranteeCodeSchedules(ctx, policyScheduleId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CopyGuaranteeCodeSchedules(copyGuaranteeCodeSchedules).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Copy schedule s for guarantee codes 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    policyScheduleId := "policyScheduleId_example" // string | Unique ID of policy schedule.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    copyGuaranteeCodeSchedules := *openapiclient.NewCopyGuaranteeCodeSchedulesRequest() // CopyGuaranteeCodeSchedulesRequest | Request object that provides the criteria to copy Guarantee Code schedules to different hotels.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.CopyGuaranteeCodeSchedules(context.Background(), policyScheduleId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CopyGuaranteeCodeSchedules(copyGuaranteeCodeSchedules).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.CopyGuaranteeCodeSchedules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyGuaranteeCodeSchedules`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.CopyGuaranteeCodeSchedules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**policyScheduleId** | **string** | Unique ID of policy schedule. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCopyGuaranteeCodeSchedulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **copyGuaranteeCodeSchedules** | [**CopyGuaranteeCodeSchedulesRequest**](CopyGuaranteeCodeSchedulesRequest.md) | Request object that provides the criteria to copy Guarantee Code schedules to different hotels. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CopyPolicySchedules

> Status CopyPolicySchedules(ctx, policyscheduleId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CopyPolicySchedules(copyPolicySchedules).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Copy a Policy Schedule



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    policyscheduleId := "policyscheduleId_example" // string | Unique ID of policy schedule.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    copyPolicySchedules := *openapiclient.NewCopyPolicySchedulesRequest() // CopyPolicySchedulesRequest | Request object that provides the criteria to copy policy schedules to different hotels.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.CopyPolicySchedules(context.Background(), policyscheduleId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CopyPolicySchedules(copyPolicySchedules).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.CopyPolicySchedules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyPolicySchedules`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.CopyPolicySchedules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**policyscheduleId** | **string** | Unique ID of policy schedule. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCopyPolicySchedulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **copyPolicySchedules** | [**CopyPolicySchedulesRequest**](CopyPolicySchedulesRequest.md) | Request object that provides the criteria to copy policy schedules to different hotels. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CopyServiceRequestCodes

> Status CopyServiceRequestCodes(ctx, sourceHotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CopyServiceRequestCodes(copyServiceRequestCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

 copy configuration service request codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    sourceHotelId := "sourceHotelId_example" // string | Unique ID of source hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    copyServiceRequestCodes := *openapiclient.NewCopyServiceRequestCodesRequest() // CopyServiceRequestCodesRequest | List of the template service request code(s) to be copied.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.CopyServiceRequestCodes(context.Background(), sourceHotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CopyServiceRequestCodes(copyServiceRequestCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.CopyServiceRequestCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyServiceRequestCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.CopyServiceRequestCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceHotelId** | **string** | Unique ID of source hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCopyServiceRequestCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **copyServiceRequestCodes** | [**CopyServiceRequestCodesRequest**](CopyServiceRequestCodesRequest.md) | List of the template service request code(s) to be copied. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteCancellationPolicy

> Status DeleteCancellationPolicy(ctx, cancelpolicycode).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Cancellation policies in hotel level



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    cancelpolicycode := "cancelpolicycode_example" // string | Unique Code of policy.
    hotelId := "hotelId_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.DeleteCancellationPolicy(context.Background(), cancelpolicycode).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.DeleteCancellationPolicy``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCancellationPolicy`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.DeleteCancellationPolicy`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**cancelpolicycode** | **string** | Unique Code of policy. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCancellationPolicyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **hotelId** | **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteDepositPolicy

> Status DeleteDepositPolicy(ctx, depositpolicycode).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete deposit policy in hotel level



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    depositpolicycode := "depositpolicycode_example" // string | Unique Code of deposit policy.
    hotelId := "hotelId_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.DeleteDepositPolicy(context.Background(), depositpolicycode).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.DeleteDepositPolicy``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteDepositPolicy`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.DeleteDepositPolicy`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**depositpolicycode** | **string** | Unique Code of deposit policy. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteDepositPolicyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **hotelId** | **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteGuaranteeCode

> Status DeleteGuaranteeCode(ctx, guaranteeCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Guarantee Code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    guaranteeCode := "guaranteeCode_example" // string | Unique Code of guarantee.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.DeleteGuaranteeCode(context.Background(), guaranteeCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.DeleteGuaranteeCode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteGuaranteeCode`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.DeleteGuaranteeCode`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**guaranteeCode** | **string** | Unique Code of guarantee. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteGuaranteeCodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteGuaranteeCodeSchedule

> Status DeleteGuaranteeCodeSchedule(ctx, policyScheduleId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IdContext(idContext).Type_(type_).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete schedule for guarantee codes 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    policyScheduleId := "policyScheduleId_example" // string | Unique ID of policy schedule.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := "type__example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.DeleteGuaranteeCodeSchedule(context.Background(), policyScheduleId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IdContext(idContext).Type_(type_).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.DeleteGuaranteeCodeSchedule``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteGuaranteeCodeSchedule`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.DeleteGuaranteeCodeSchedule`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**policyScheduleId** | **string** | Unique ID of policy schedule. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteGuaranteeCodeScheduleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeletePolicySchedule

> Status DeletePolicySchedule(ctx, policyscheduleId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IdContext(idContext).Type_(type_).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Policy Schedule



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    policyscheduleId := "policyscheduleId_example" // string | Unique ID of policy schedule.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := "type__example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.DeletePolicySchedule(context.Background(), policyscheduleId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IdContext(idContext).Type_(type_).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.DeletePolicySchedule``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeletePolicySchedule`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.DeletePolicySchedule`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**policyscheduleId** | **string** | Unique ID of policy schedule. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeletePolicyScheduleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteTemplateCancellationPolicy

> Status DeleteTemplateCancellationPolicy(ctx, cancelpolicytemplate).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PolicyCode(policyCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete template Cancellation policies



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    cancelpolicytemplate := "cancelpolicytemplate_example" // string | Unique Code of policy template.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    policyCode := "policyCode_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.DeleteTemplateCancellationPolicy(context.Background(), cancelpolicytemplate).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PolicyCode(policyCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.DeleteTemplateCancellationPolicy``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteTemplateCancellationPolicy`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.DeleteTemplateCancellationPolicy`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**cancelpolicytemplate** | **string** | Unique Code of policy template. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteTemplateCancellationPolicyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **policyCode** | **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteTemplateDepositPolicy

> Status DeleteTemplateDepositPolicy(ctx, depositpolicytemplate).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PolicyCode(policyCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete template deposit policy



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    depositpolicytemplate := "depositpolicytemplate_example" // string | Unique Code of deposit policy template.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    policyCode := "policyCode_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.DeleteTemplateDepositPolicy(context.Background(), depositpolicytemplate).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PolicyCode(policyCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.DeleteTemplateDepositPolicy``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteTemplateDepositPolicy`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.DeleteTemplateDepositPolicy`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**depositpolicytemplate** | **string** | Unique Code of deposit policy template. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteTemplateDepositPolicyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **policyCode** | **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteTemplateGuaranteeCode

> Status DeleteTemplateGuaranteeCode(ctx, guaranteeCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete template Guarantee Code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    guaranteeCode := "guaranteeCode_example" // string | Unique Code of Guarantee.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.DeleteTemplateGuaranteeCode(context.Background(), guaranteeCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.DeleteTemplateGuaranteeCode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteTemplateGuaranteeCode`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.DeleteTemplateGuaranteeCode`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**guaranteeCode** | **string** | Unique Code of Guarantee. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteTemplateGuaranteeCodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCancellationPolicy

> CancellationPolicyDetails GetCancellationPolicy(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).PageNumber(pageNumber).HotelIds(hotelIds).PolicyCodeListCodes(policyCodeListCodes).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Cancellation policies in hotel level



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    pageNumber := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional)
    hotelIds := []string{"Inner_example"} // []string | Hotel code. (optional)
    policyCodeListCodes := []string{"Inner_example"} // []string |  (optional)
    includeInactive := true // bool | Indicator that tells whether to include inactive in search results. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.GetCancellationPolicy(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).PageNumber(pageNumber).HotelIds(hotelIds).PolicyCodeListCodes(policyCodeListCodes).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.GetCancellationPolicy``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCancellationPolicy`: CancellationPolicyDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.GetCancellationPolicy`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetCancellationPolicyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **pageNumber** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | 
 **hotelIds** | **[]string** | Hotel code. | 
 **policyCodeListCodes** | **[]string** |  | 
 **includeInactive** | **bool** | Indicator that tells whether to include inactive in search results. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CancellationPolicyDetails**](CancellationPolicyDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetDepositPolicy

> DepositPolicyDetails GetDepositPolicy(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).PageNumber(pageNumber).HotelIds(hotelIds).PolicyCodeListCodes(policyCodeListCodes).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get deposit policies in hotel level



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    pageNumber := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional)
    hotelIds := []string{"Inner_example"} // []string | Hotel code. (optional)
    policyCodeListCodes := []string{"Inner_example"} // []string |  (optional)
    includeInactive := true // bool | Indicator that tells whether to include inactive in search results. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.GetDepositPolicy(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).PageNumber(pageNumber).HotelIds(hotelIds).PolicyCodeListCodes(policyCodeListCodes).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.GetDepositPolicy``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetDepositPolicy`: DepositPolicyDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.GetDepositPolicy`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetDepositPolicyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **pageNumber** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | 
 **hotelIds** | **[]string** | Hotel code. | 
 **policyCodeListCodes** | **[]string** |  | 
 **includeInactive** | **bool** | Indicator that tells whether to include inactive in search results. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**DepositPolicyDetails**](DepositPolicyDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetGuaranteeCodeSchedules

> GuaranteeCodeSchedulesDetails GetGuaranteeCodeSchedules(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).Limit(limit).PageNumber(pageNumber).RatePlanCodes(ratePlanCodes).StartDate(startDate).EndDate(endDate).Duration(duration).GuaranteeCodes(guaranteeCodes).CreditRatingsCodes(creditRatingsCodes).SeasonsCodes(seasonsCodes).Inactive(inactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get schedules for guarantee codes 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelIds := []string{"Inner_example"} // []string | List of Hotels. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    pageNumber := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional)
    ratePlanCodes := []string{"Inner_example"} // []string |  (optional)
    startDate := time.Now() // string |  (optional)
    endDate := time.Now() // string |  (optional)
    duration := "duration_example" // string |  (optional)
    guaranteeCodes := []string{"Inner_example"} // []string |  (optional)
    creditRatingsCodes := []string{"Inner_example"} // []string |  (optional)
    seasonsCodes := []string{"Inner_example"} // []string |  (optional)
    inactive := true // bool | Is schedule Inactive? (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.GetGuaranteeCodeSchedules(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).Limit(limit).PageNumber(pageNumber).RatePlanCodes(ratePlanCodes).StartDate(startDate).EndDate(endDate).Duration(duration).GuaranteeCodes(guaranteeCodes).CreditRatingsCodes(creditRatingsCodes).SeasonsCodes(seasonsCodes).Inactive(inactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.GetGuaranteeCodeSchedules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetGuaranteeCodeSchedules`: GuaranteeCodeSchedulesDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.GetGuaranteeCodeSchedules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetGuaranteeCodeSchedulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelIds** | **[]string** | List of Hotels. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **pageNumber** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | 
 **ratePlanCodes** | **[]string** |  | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **duration** | **string** |  | 
 **guaranteeCodes** | **[]string** |  | 
 **creditRatingsCodes** | **[]string** |  | 
 **seasonsCodes** | **[]string** |  | 
 **inactive** | **bool** | Is schedule Inactive? | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**GuaranteeCodeSchedulesDetails**](GuaranteeCodeSchedulesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetGuaranteeCodes

> GuaranteeCodesDetails GetGuaranteeCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).PageNumber(pageNumber).HotelIds(hotelIds).GuaranteeCodes(guaranteeCodes).Inactive(inactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get guarantee codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    pageNumber := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional)
    hotelIds := []string{"Inner_example"} // []string |  (optional)
    guaranteeCodes := []string{"Inner_example"} // []string |  (optional)
    inactive := true // bool | Is Guarantee Code Inactive? (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.GetGuaranteeCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).PageNumber(pageNumber).HotelIds(hotelIds).GuaranteeCodes(guaranteeCodes).Inactive(inactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.GetGuaranteeCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetGuaranteeCodes`: GuaranteeCodesDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.GetGuaranteeCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetGuaranteeCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **pageNumber** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | 
 **hotelIds** | **[]string** |  | 
 **guaranteeCodes** | **[]string** |  | 
 **inactive** | **bool** | Is Guarantee Code Inactive? | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**GuaranteeCodesDetails**](GuaranteeCodesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetMarketCodes

> MarketCodesDetails GetMarketCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).PageNumber(pageNumber).HotelIds(hotelIds).MarketCodes(marketCodes).MarketGroupsCodes(marketGroupsCodes).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Market codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    pageNumber := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional)
    hotelIds := []string{"Inner_example"} // []string |  (optional)
    marketCodes := []string{"Inner_example"} // []string |  (optional)
    marketGroupsCodes := []string{"Inner_example"} // []string |  (optional)
    includeInactive := true // bool | Search inactive Market Codes. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.GetMarketCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).PageNumber(pageNumber).HotelIds(hotelIds).MarketCodes(marketCodes).MarketGroupsCodes(marketGroupsCodes).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.GetMarketCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMarketCodes`: MarketCodesDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.GetMarketCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetMarketCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **pageNumber** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | 
 **hotelIds** | **[]string** |  | 
 **marketCodes** | **[]string** |  | 
 **marketGroupsCodes** | **[]string** |  | 
 **includeInactive** | **bool** | Search inactive Market Codes. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**MarketCodesDetails**](MarketCodesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetMarketGroups

> MarketGroupsDetails GetMarketGroups(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).PageNumber(pageNumber).HotelIds(hotelIds).MarketCodes(marketCodes).MarketGroupsCodes(marketGroupsCodes).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Market Groups 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    pageNumber := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional)
    hotelIds := []string{"Inner_example"} // []string |  (optional)
    marketCodes := []string{"Inner_example"} // []string |  (optional)
    marketGroupsCodes := []string{"Inner_example"} // []string |  (optional)
    includeInactive := true // bool | Include inactive Market Groups or not. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.GetMarketGroups(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).PageNumber(pageNumber).HotelIds(hotelIds).MarketCodes(marketCodes).MarketGroupsCodes(marketGroupsCodes).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.GetMarketGroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMarketGroups`: MarketGroupsDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.GetMarketGroups`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetMarketGroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **pageNumber** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | 
 **hotelIds** | **[]string** |  | 
 **marketCodes** | **[]string** |  | 
 **marketGroupsCodes** | **[]string** |  | 
 **includeInactive** | **bool** | Include inactive Market Groups or not. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**MarketGroupsDetails**](MarketGroupsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPolicySchedules

> PolicySchedulesDetails GetPolicySchedules(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).Limit(limit).PageNumber(pageNumber).PolicyType(policyType).RatePlanCodes(ratePlanCodes).PolicyCodes(policyCodes).StartDate(startDate).EndDate(endDate).Duration(duration).GuaranteeCodes(guaranteeCodes).CreditRatingsCodes(creditRatingsCodes).SeasonsCodes(seasonsCodes).Id(id).IdContext(idContext).Type_(type_).Inactive(inactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get policy schedules



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelIds := []string{"Inner_example"} // []string | List of Hotels. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    pageNumber := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional)
    policyType := "policyType_example" // string | Simple type for Policy type. (optional)
    ratePlanCodes := []string{"Inner_example"} // []string |  (optional)
    policyCodes := []string{"Inner_example"} // []string |  (optional)
    startDate := time.Now() // string |  (optional)
    endDate := time.Now() // string |  (optional)
    duration := "duration_example" // string |  (optional)
    guaranteeCodes := []string{"Inner_example"} // []string |  (optional)
    creditRatingsCodes := []string{"Inner_example"} // []string |  (optional)
    seasonsCodes := []string{"Inner_example"} // []string |  (optional)
    id := "id_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := "type__example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    inactive := true // bool | Is schedule Inactive? (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.GetPolicySchedules(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).Limit(limit).PageNumber(pageNumber).PolicyType(policyType).RatePlanCodes(ratePlanCodes).PolicyCodes(policyCodes).StartDate(startDate).EndDate(endDate).Duration(duration).GuaranteeCodes(guaranteeCodes).CreditRatingsCodes(creditRatingsCodes).SeasonsCodes(seasonsCodes).Id(id).IdContext(idContext).Type_(type_).Inactive(inactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.GetPolicySchedules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPolicySchedules`: PolicySchedulesDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.GetPolicySchedules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPolicySchedulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelIds** | **[]string** | List of Hotels. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **pageNumber** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | 
 **policyType** | **string** | Simple type for Policy type. | 
 **ratePlanCodes** | **[]string** |  | 
 **policyCodes** | **[]string** |  | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **duration** | **string** |  | 
 **guaranteeCodes** | **[]string** |  | 
 **creditRatingsCodes** | **[]string** |  | 
 **seasonsCodes** | **[]string** |  | 
 **id** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **inactive** | **bool** | Is schedule Inactive? | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**PolicySchedulesDetails**](PolicySchedulesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPreCheckInRules

> PreCheckInRulesDetails GetPreCheckInRules(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Date(date).RuleType(ruleType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Pre Check In rules



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    date := time.Now() // string | Date from which rule type is affected (optional)
    ruleType := "ruleType_example" // string | The rule type on which the Internet Pre Check-In Rule is based. If a reservation has any of the following code, Pre CheckIn rule gets active for that reservation (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.GetPreCheckInRules(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Date(date).RuleType(ruleType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.GetPreCheckInRules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPreCheckInRules`: PreCheckInRulesDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.GetPreCheckInRules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPreCheckInRulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **date** | **string** | Date from which rule type is affected | 
 **ruleType** | **string** | The rule type on which the Internet Pre Check-In Rule is based. If a reservation has any of the following code, Pre CheckIn rule gets active for that reservation | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**PreCheckInRulesDetails**](PreCheckInRulesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetServiceRequestCode

> ServiceRequestCodesDetails GetServiceRequestCode(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).PageNumber(pageNumber).HotelIds(hotelIds).ServiceRequestCodes(serviceRequestCodes).WildCard(wildCard).Inactive(inactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get service request codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    pageNumber := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional)
    hotelIds := []string{"Inner_example"} // []string |  (optional)
    serviceRequestCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    inactive := true // bool | This flag consider inactive/active Service Request codes to search for. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.GetServiceRequestCode(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).PageNumber(pageNumber).HotelIds(hotelIds).ServiceRequestCodes(serviceRequestCodes).WildCard(wildCard).Inactive(inactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.GetServiceRequestCode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetServiceRequestCode`: ServiceRequestCodesDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.GetServiceRequestCode`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetServiceRequestCodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **pageNumber** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | 
 **hotelIds** | **[]string** |  | 
 **serviceRequestCodes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **inactive** | **bool** | This flag consider inactive/active Service Request codes to search for. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ServiceRequestCodesDetails**](ServiceRequestCodesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetServiceRequestCodePriorities

> ServiceRequestCodePrioritiesDetails GetServiceRequestCodePriorities(ctx, serviceRequestCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Service Request Code Priorities



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    serviceRequestCode := "serviceRequestCode_example" // string | Unique Code of service request.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fetchInactive := true // bool | Determines wether to fetch inactive records or not. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    description := "description_example" // string | Description of the code. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.GetServiceRequestCodePriorities(context.Background(), serviceRequestCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.GetServiceRequestCodePriorities``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetServiceRequestCodePriorities`: ServiceRequestCodePrioritiesDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.GetServiceRequestCodePriorities`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**serviceRequestCode** | **string** | Unique Code of service request. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetServiceRequestCodePrioritiesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fetchInactive** | **bool** | Determines wether to fetch inactive records or not. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **description** | **string** | Description of the code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ServiceRequestCodePrioritiesDetails**](ServiceRequestCodePrioritiesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetServiceRequestCodePriority

> ServiceRequestCodePrioritiesDetails GetServiceRequestCodePriority(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).ServiceRequestCodes(serviceRequestCodes).WildCard(wildCard).Description(description).HotelIds(hotelIds).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Service Request Code Priorities



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fetchInactive := true // bool | Determines wether to fetch inactive records or not. (optional)
    serviceRequestCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    description := "description_example" // string | Description of the code. (optional)
    hotelIds := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.GetServiceRequestCodePriority(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).ServiceRequestCodes(serviceRequestCodes).WildCard(wildCard).Description(description).HotelIds(hotelIds).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.GetServiceRequestCodePriority``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetServiceRequestCodePriority`: ServiceRequestCodePrioritiesDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.GetServiceRequestCodePriority`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetServiceRequestCodePriorityRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fetchInactive** | **bool** | Determines wether to fetch inactive records or not. | 
 **serviceRequestCodes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **description** | **string** | Description of the code. | 
 **hotelIds** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ServiceRequestCodePrioritiesDetails**](ServiceRequestCodePrioritiesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetServiceRequestCodes

> ServiceRequestCodesDetails GetServiceRequestCodes(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).PageNumber(pageNumber).ServiceRequestCodes(serviceRequestCodes).WildCard(wildCard).Inactive(inactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get service request codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    pageNumber := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional)
    serviceRequestCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    inactive := true // bool | This flag consider inactive/active Service Request codes to search for. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.GetServiceRequestCodes(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).PageNumber(pageNumber).ServiceRequestCodes(serviceRequestCodes).WildCard(wildCard).Inactive(inactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.GetServiceRequestCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetServiceRequestCodes`: ServiceRequestCodesDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.GetServiceRequestCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetServiceRequestCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **pageNumber** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | 
 **serviceRequestCodes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **inactive** | **bool** | This flag consider inactive/active Service Request codes to search for. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ServiceRequestCodesDetails**](ServiceRequestCodesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSourceCodes

> SourceCodesDetails GetSourceCodes(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).Limit(limit).PageNumber(pageNumber).SourceCodes(sourceCodes).SourceGroupsCodes(sourceGroupsCodes).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Source Codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelIds := []string{"Inner_example"} // []string | List of Hotels. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    pageNumber := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional)
    sourceCodes := []string{"Inner_example"} // []string |  (optional)
    sourceGroupsCodes := []string{"Inner_example"} // []string |  (optional)
    includeInactive := true // bool | Include inactive Source Codes or not. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.GetSourceCodes(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).Limit(limit).PageNumber(pageNumber).SourceCodes(sourceCodes).SourceGroupsCodes(sourceGroupsCodes).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.GetSourceCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSourceCodes`: SourceCodesDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.GetSourceCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSourceCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelIds** | **[]string** | List of Hotels. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **pageNumber** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | 
 **sourceCodes** | **[]string** |  | 
 **sourceGroupsCodes** | **[]string** |  | 
 **includeInactive** | **bool** | Include inactive Source Codes or not. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**SourceCodesDetails**](SourceCodesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSourceGroups

> SourceGroupsDetails GetSourceGroups(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).Limit(limit).PageNumber(pageNumber).SourceCodes(sourceCodes).SourceGroupsCodes(sourceGroupsCodes).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Search for Source Groups 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelIds := []string{"Inner_example"} // []string | List of Hotels. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    pageNumber := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional)
    sourceCodes := []string{"Inner_example"} // []string |  (optional)
    sourceGroupsCodes := []string{"Inner_example"} // []string |  (optional)
    includeInactive := true // bool | Include inactive Source Groups or not. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.GetSourceGroups(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).Limit(limit).PageNumber(pageNumber).SourceCodes(sourceCodes).SourceGroupsCodes(sourceGroupsCodes).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.GetSourceGroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSourceGroups`: SourceGroupsDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.GetSourceGroups`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSourceGroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelIds** | **[]string** | List of Hotels. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **pageNumber** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | 
 **sourceCodes** | **[]string** |  | 
 **sourceGroupsCodes** | **[]string** |  | 
 **includeInactive** | **bool** | Include inactive Source Groups or not. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**SourceGroupsDetails**](SourceGroupsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTemplateCancellationPolicy

> TemplateCancellationPolicyDetails GetTemplateCancellationPolicy(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).PageNumber(pageNumber).HotelIds(hotelIds).PolicyCodeListCodes(policyCodeListCodes).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get template Cancellation policies



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    pageNumber := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional)
    hotelIds := []string{"Inner_example"} // []string | Hotel code. (optional)
    policyCodeListCodes := []string{"Inner_example"} // []string |  (optional)
    includeInactive := true // bool | Indicator that tells whether to include inactive in search results. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.GetTemplateCancellationPolicy(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).PageNumber(pageNumber).HotelIds(hotelIds).PolicyCodeListCodes(policyCodeListCodes).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.GetTemplateCancellationPolicy``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTemplateCancellationPolicy`: TemplateCancellationPolicyDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.GetTemplateCancellationPolicy`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTemplateCancellationPolicyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **pageNumber** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | 
 **hotelIds** | **[]string** | Hotel code. | 
 **policyCodeListCodes** | **[]string** |  | 
 **includeInactive** | **bool** | Indicator that tells whether to include inactive in search results. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TemplateCancellationPolicyDetails**](TemplateCancellationPolicyDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTemplateDepositPolicy

> TemplateDepositPolicyDetails GetTemplateDepositPolicy(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).PageNumber(pageNumber).HotelIds(hotelIds).PolicyCodeListCodes(policyCodeListCodes).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get template deposit policies



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    pageNumber := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional)
    hotelIds := []string{"Inner_example"} // []string | Hotel code. (optional)
    policyCodeListCodes := []string{"Inner_example"} // []string |  (optional)
    includeInactive := true // bool | Indicator that tells whether to include inactive in search results. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.GetTemplateDepositPolicy(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).PageNumber(pageNumber).HotelIds(hotelIds).PolicyCodeListCodes(policyCodeListCodes).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.GetTemplateDepositPolicy``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTemplateDepositPolicy`: TemplateDepositPolicyDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.GetTemplateDepositPolicy`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTemplateDepositPolicyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **pageNumber** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | 
 **hotelIds** | **[]string** | Hotel code. | 
 **policyCodeListCodes** | **[]string** |  | 
 **includeInactive** | **bool** | Indicator that tells whether to include inactive in search results. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TemplateDepositPolicyDetails**](TemplateDepositPolicyDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTemplateGuaranteeCodes

> TemplateGuaranteeCodesDetails GetTemplateGuaranteeCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).PageNumber(pageNumber).GuaranteeCodes(guaranteeCodes).Inactive(inactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get template Guarantee Codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    pageNumber := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional)
    guaranteeCodes := []string{"Inner_example"} // []string |  (optional)
    inactive := true // bool | Is Guarantee Code Inactive? (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.GetTemplateGuaranteeCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).PageNumber(pageNumber).GuaranteeCodes(guaranteeCodes).Inactive(inactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.GetTemplateGuaranteeCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTemplateGuaranteeCodes`: TemplateGuaranteeCodesDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.GetTemplateGuaranteeCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTemplateGuaranteeCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **pageNumber** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | 
 **guaranteeCodes** | **[]string** |  | 
 **inactive** | **bool** | Is Guarantee Code Inactive? | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TemplateGuaranteeCodesDetails**](TemplateGuaranteeCodesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTemplateMarketCodes

> TemplateMarketCodesDetails GetTemplateMarketCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).PageNumber(pageNumber).TemplateMarketCodes(templateMarketCodes).TemplateMarketGroupsCodes(templateMarketGroupsCodes).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Search for Market codes Template



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    pageNumber := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional)
    templateMarketCodes := []string{"Inner_example"} // []string |  (optional)
    templateMarketGroupsCodes := []string{"Inner_example"} // []string |  (optional)
    includeInactive := true // bool | fetch inactive Market Codes. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.GetTemplateMarketCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).PageNumber(pageNumber).TemplateMarketCodes(templateMarketCodes).TemplateMarketGroupsCodes(templateMarketGroupsCodes).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.GetTemplateMarketCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTemplateMarketCodes`: TemplateMarketCodesDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.GetTemplateMarketCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTemplateMarketCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **pageNumber** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | 
 **templateMarketCodes** | **[]string** |  | 
 **templateMarketGroupsCodes** | **[]string** |  | 
 **includeInactive** | **bool** | fetch inactive Market Codes. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TemplateMarketCodesDetails**](TemplateMarketCodesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTemplateMarketGroups

> TemplateMarketGroupsDetails GetTemplateMarketGroups(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).PageNumber(pageNumber).TemplateMarketCodes(templateMarketCodes).TemplateMarketGroupsCodes(templateMarketGroupsCodes).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get  Market Group Templates



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    pageNumber := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional)
    templateMarketCodes := []string{"Inner_example"} // []string |  (optional)
    templateMarketGroupsCodes := []string{"Inner_example"} // []string |  (optional)
    includeInactive := true // bool | Include inactive template Market Groups or not. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.GetTemplateMarketGroups(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).PageNumber(pageNumber).TemplateMarketCodes(templateMarketCodes).TemplateMarketGroupsCodes(templateMarketGroupsCodes).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.GetTemplateMarketGroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTemplateMarketGroups`: TemplateMarketGroupsDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.GetTemplateMarketGroups`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTemplateMarketGroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **pageNumber** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | 
 **templateMarketCodes** | **[]string** |  | 
 **templateMarketGroupsCodes** | **[]string** |  | 
 **includeInactive** | **bool** | Include inactive template Market Groups or not. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TemplateMarketGroupsDetails**](TemplateMarketGroupsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTemplateSourceCodes

> TemplateSourceCodesDetails GetTemplateSourceCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).PageNumber(pageNumber).TemplateSourceCodes(templateSourceCodes).TemplateSourceGroupsCodes(templateSourceGroupsCodes).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get template Source Codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    pageNumber := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional)
    templateSourceCodes := []string{"Inner_example"} // []string |  (optional)
    templateSourceGroupsCodes := []string{"Inner_example"} // []string |  (optional)
    includeInactive := true // bool | Include inactive template Source Codes or not. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.GetTemplateSourceCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).PageNumber(pageNumber).TemplateSourceCodes(templateSourceCodes).TemplateSourceGroupsCodes(templateSourceGroupsCodes).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.GetTemplateSourceCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTemplateSourceCodes`: TemplateSourceCodesDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.GetTemplateSourceCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTemplateSourceCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **pageNumber** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | 
 **templateSourceCodes** | **[]string** |  | 
 **templateSourceGroupsCodes** | **[]string** |  | 
 **includeInactive** | **bool** | Include inactive template Source Codes or not. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TemplateSourceCodesDetails**](TemplateSourceCodesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTemplateSourceGroups

> TemplateSourceGroupsDetails GetTemplateSourceGroups(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).PageNumber(pageNumber).TemplateSourceCodes(templateSourceCodes).TemplateSourceGroupsCodes(templateSourceGroupsCodes).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Template Source Groups



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    pageNumber := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional)
    templateSourceCodes := []string{"Inner_example"} // []string |  (optional)
    templateSourceGroupsCodes := []string{"Inner_example"} // []string |  (optional)
    includeInactive := true // bool | Include inactive template Source Groups or not. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.GetTemplateSourceGroups(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).PageNumber(pageNumber).TemplateSourceCodes(templateSourceCodes).TemplateSourceGroupsCodes(templateSourceGroupsCodes).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.GetTemplateSourceGroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTemplateSourceGroups`: TemplateSourceGroupsDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.GetTemplateSourceGroups`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTemplateSourceGroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **pageNumber** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | 
 **templateSourceCodes** | **[]string** |  | 
 **templateSourceGroupsCodes** | **[]string** |  | 
 **includeInactive** | **bool** | Include inactive template Source Groups or not. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TemplateSourceGroupsDetails**](TemplateSourceGroupsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostCancellationPolicy

> Status PostCancellationPolicy(ctx, cancelpolicycode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CancellationPolicyCriteria(cancellationPolicyCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Cancellation policies in hotel level



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    cancelpolicycode := "cancelpolicycode_example" // string | Unique Code of policy.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cancellationPolicyCriteria := *openapiclient.NewPostCancellationPolicyRequest() // PostCancellationPolicyRequest | Request object that holds the details of Cancellation Policy to be created.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.PostCancellationPolicy(context.Background(), cancelpolicycode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CancellationPolicyCriteria(cancellationPolicyCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.PostCancellationPolicy``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCancellationPolicy`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.PostCancellationPolicy`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**cancelpolicycode** | **string** | Unique Code of policy. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostCancellationPolicyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cancellationPolicyCriteria** | [**PostCancellationPolicyRequest**](PostCancellationPolicyRequest.md) | Request object that holds the details of Cancellation Policy to be created. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostDepositPolicy

> Status PostDepositPolicy(ctx, depositpolicycode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DepositPolicyCriteria(depositPolicyCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create deposit policy in hotel level



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    depositpolicycode := "depositpolicycode_example" // string | Unique Code of deposit policy.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    depositPolicyCriteria := *openapiclient.NewPostDepositPolicyRequest() // PostDepositPolicyRequest | Request object that holds the details of hotel level Deposit Policy to be created.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.PostDepositPolicy(context.Background(), depositpolicycode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DepositPolicyCriteria(depositPolicyCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.PostDepositPolicy``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostDepositPolicy`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.PostDepositPolicy`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**depositpolicycode** | **string** | Unique Code of deposit policy. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostDepositPolicyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **depositPolicyCriteria** | [**PostDepositPolicyRequest**](PostDepositPolicyRequest.md) | Request object that holds the details of hotel level Deposit Policy to be created. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostGuaranteeCode

> Status PostGuaranteeCode(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GuaranteeCodeCriteria(guaranteeCodeCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Guarantee Code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    guaranteeCodeCriteria := *openapiclient.NewPostGuaranteeCodeRequest() // PostGuaranteeCodeRequest | Request object that holds the details of Guarantee Code to be created.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.PostGuaranteeCode(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GuaranteeCodeCriteria(guaranteeCodeCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.PostGuaranteeCode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostGuaranteeCode`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.PostGuaranteeCode`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostGuaranteeCodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **guaranteeCodeCriteria** | [**PostGuaranteeCodeRequest**](PostGuaranteeCodeRequest.md) | Request object that holds the details of Guarantee Code to be created. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostGuaranteeCodeSchedule

> Status PostGuaranteeCodeSchedule(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GuaranteeCodeScheduleCriteria(guaranteeCodeScheduleCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create schedule for guarantee codes 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    guaranteeCodeScheduleCriteria := *openapiclient.NewPostGuaranteeCodeScheduleRequest() // PostGuaranteeCodeScheduleRequest | Creates the Guarantee Code schedule based on the details provided by the request.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.PostGuaranteeCodeSchedule(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GuaranteeCodeScheduleCriteria(guaranteeCodeScheduleCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.PostGuaranteeCodeSchedule``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostGuaranteeCodeSchedule`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.PostGuaranteeCodeSchedule`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostGuaranteeCodeScheduleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **guaranteeCodeScheduleCriteria** | [**PostGuaranteeCodeScheduleRequest**](PostGuaranteeCodeScheduleRequest.md) | Creates the Guarantee Code schedule based on the details provided by the request. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostMarketCode

> Status PostMarketCode(ctx, marketcode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MarketCodeCriteria(marketCodeCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create a new Market Code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    marketcode := "marketcode_example" // string | Unique Code of market.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    marketCodeCriteria := *openapiclient.NewPostMarketCodeRequest() // PostMarketCodeRequest | Request object that holds the details of Market Code to be created.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.PostMarketCode(context.Background(), marketcode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MarketCodeCriteria(marketCodeCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.PostMarketCode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostMarketCode`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.PostMarketCode`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**marketcode** | **string** | Unique Code of market. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostMarketCodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **marketCodeCriteria** | [**PostMarketCodeRequest**](PostMarketCodeRequest.md) | Request object that holds the details of Market Code to be created. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostMarketGroup

> Status PostMarketGroup(ctx, marketGroupCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MarketGroupCriteria(marketGroupCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Market Group



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    marketGroupCode := "marketGroupCode_example" // string | Unique Code of market group.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    marketGroupCriteria := *openapiclient.NewPostMarketGroupRequest() // PostMarketGroupRequest | Request object that holds the details of Market Group to be created.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.PostMarketGroup(context.Background(), marketGroupCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MarketGroupCriteria(marketGroupCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.PostMarketGroup``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostMarketGroup`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.PostMarketGroup`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**marketGroupCode** | **string** | Unique Code of market group. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostMarketGroupRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **marketGroupCriteria** | [**PostMarketGroupRequest**](PostMarketGroupRequest.md) | Request object that holds the details of Market Group to be created. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostNewPolicySchedule

> Status PostNewPolicySchedule(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PolicyScheduleCriteria(policyScheduleCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create a Policy Schedule



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    policyScheduleCriteria := *openapiclient.NewPostNewPolicyScheduleRequest() // PostNewPolicyScheduleRequest | Creates the Policy schedule based on the details provided by the request.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.PostNewPolicySchedule(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PolicyScheduleCriteria(policyScheduleCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.PostNewPolicySchedule``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostNewPolicySchedule`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.PostNewPolicySchedule`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostNewPolicyScheduleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **policyScheduleCriteria** | [**PostNewPolicyScheduleRequest**](PostNewPolicyScheduleRequest.md) | Creates the Policy schedule based on the details provided by the request. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostPolicySchedule

> Status PostPolicySchedule(ctx, policyscheduleId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PolicyScheduleCriteria(policyScheduleCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create a Policy Schedule



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    policyscheduleId := "policyscheduleId_example" // string | Unique ID of policy schedule.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    policyScheduleCriteria := *openapiclient.NewPostNewPolicyScheduleRequest() // PostNewPolicyScheduleRequest | Creates the Policy schedule based on the details provided by the request.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.PostPolicySchedule(context.Background(), policyscheduleId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PolicyScheduleCriteria(policyScheduleCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.PostPolicySchedule``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostPolicySchedule`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.PostPolicySchedule`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**policyscheduleId** | **string** | Unique ID of policy schedule. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostPolicyScheduleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **policyScheduleCriteria** | [**PostNewPolicyScheduleRequest**](PostNewPolicyScheduleRequest.md) | Creates the Policy schedule based on the details provided by the request. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostPreCheckInRules

> Status PostPreCheckInRules(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PreCheckInRulesCriteria(preCheckInRulesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Pre Check In rules



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    preCheckInRulesCriteria := *openapiclient.NewPostPreCheckInRulesRequest() // PostPreCheckInRulesRequest | Request object for creating a Pre Check-In Rule
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.PostPreCheckInRules(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PreCheckInRulesCriteria(preCheckInRulesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.PostPreCheckInRules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostPreCheckInRules`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.PostPreCheckInRules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostPreCheckInRulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **preCheckInRulesCriteria** | [**PostPreCheckInRulesRequest**](PostPreCheckInRulesRequest.md) | Request object for creating a Pre Check-In Rule | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostServiceRequestCodePriorities

> Status PostServiceRequestCodePriorities(ctx, serviceRequestCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ServiceRequestCodePrioritiesCriteria(serviceRequestCodePrioritiesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Service Request Code Priorities



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    serviceRequestCode := "serviceRequestCode_example" // string | Unique Code of service request.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    serviceRequestCodePrioritiesCriteria := *openapiclient.NewPostServiceRequestCodePrioritiesRequest() // PostServiceRequestCodePrioritiesRequest | Request object for creating Service Request Code Priorities.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.PostServiceRequestCodePriorities(context.Background(), serviceRequestCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ServiceRequestCodePrioritiesCriteria(serviceRequestCodePrioritiesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.PostServiceRequestCodePriorities``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostServiceRequestCodePriorities`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.PostServiceRequestCodePriorities`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**serviceRequestCode** | **string** | Unique Code of service request. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostServiceRequestCodePrioritiesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **serviceRequestCodePrioritiesCriteria** | [**PostServiceRequestCodePrioritiesRequest**](PostServiceRequestCodePrioritiesRequest.md) | Request object for creating Service Request Code Priorities. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostServiceRequestCodes

> Status PostServiceRequestCodes(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ServiceRequestCodesCriteria(serviceRequestCodesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create service request codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    serviceRequestCodesCriteria := *openapiclient.NewPostServiceRequestCodesRequest() // PostServiceRequestCodesRequest | Request object for creating new service request codes.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.PostServiceRequestCodes(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ServiceRequestCodesCriteria(serviceRequestCodesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.PostServiceRequestCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostServiceRequestCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.PostServiceRequestCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostServiceRequestCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **serviceRequestCodesCriteria** | [**PostServiceRequestCodesRequest**](PostServiceRequestCodesRequest.md) | Request object for creating new service request codes. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostSourceCode

> Status PostSourceCode(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SourceCodeCriteria(sourceCodeCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create a Source Code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    sourceCodeCriteria := *openapiclient.NewPostSourceCodeRequest() // PostSourceCodeRequest | Request object that holds the details of Source Code to be created.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.PostSourceCode(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SourceCodeCriteria(sourceCodeCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.PostSourceCode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostSourceCode`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.PostSourceCode`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostSourceCodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **sourceCodeCriteria** | [**PostSourceCodeRequest**](PostSourceCodeRequest.md) | Request object that holds the details of Source Code to be created. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostSourceGroup

> Status PostSourceGroup(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SourceGroupCriteria(sourceGroupCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create a Source Group



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    sourceGroupCriteria := *openapiclient.NewPostSourceGroupRequest() // PostSourceGroupRequest | Request object that holds the details of Source Group to be created.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.PostSourceGroup(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SourceGroupCriteria(sourceGroupCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.PostSourceGroup``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostSourceGroup`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.PostSourceGroup`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostSourceGroupRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **sourceGroupCriteria** | [**PostSourceGroupRequest**](PostSourceGroupRequest.md) | Request object that holds the details of Source Group to be created. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostTemplateCancellationPolicy

> Status PostTemplateCancellationPolicy(ctx, cancelpolicytemplate).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateCancellationPolicyCriteria(templateCancellationPolicyCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create template Cancellation policies



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    cancelpolicytemplate := "cancelpolicytemplate_example" // string | Unique Code of policy template.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    templateCancellationPolicyCriteria := *openapiclient.NewPostTemplateCancellationPolicyRequest() // PostTemplateCancellationPolicyRequest | Request object that holds the details of template Cancellation Policy to be created.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.PostTemplateCancellationPolicy(context.Background(), cancelpolicytemplate).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateCancellationPolicyCriteria(templateCancellationPolicyCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.PostTemplateCancellationPolicy``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostTemplateCancellationPolicy`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.PostTemplateCancellationPolicy`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**cancelpolicytemplate** | **string** | Unique Code of policy template. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostTemplateCancellationPolicyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **templateCancellationPolicyCriteria** | [**PostTemplateCancellationPolicyRequest**](PostTemplateCancellationPolicyRequest.md) | Request object that holds the details of template Cancellation Policy to be created. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostTemplateDepositPolicy

> Status PostTemplateDepositPolicy(ctx, depositpolicytemplate).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateDepositPolicyCriteria(templateDepositPolicyCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create template deposit policy



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    depositpolicytemplate := "depositpolicytemplate_example" // string | Unique Code of deposit policy template.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    templateDepositPolicyCriteria := *openapiclient.NewPostTemplateDepositPolicyRequest() // PostTemplateDepositPolicyRequest | Request object that holds the details of template Deposit Policy to be created.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.PostTemplateDepositPolicy(context.Background(), depositpolicytemplate).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateDepositPolicyCriteria(templateDepositPolicyCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.PostTemplateDepositPolicy``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostTemplateDepositPolicy`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.PostTemplateDepositPolicy`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**depositpolicytemplate** | **string** | Unique Code of deposit policy template. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostTemplateDepositPolicyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **templateDepositPolicyCriteria** | [**PostTemplateDepositPolicyRequest**](PostTemplateDepositPolicyRequest.md) | Request object that holds the details of template Deposit Policy to be created. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostTemplateGuaranteeCode

> Status PostTemplateGuaranteeCode(ctx, guaranteeCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateGuaranteeCodeCriteria(templateGuaranteeCodeCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create template Guarantee Code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    guaranteeCode := "guaranteeCode_example" // string | Unique Code of Guarantee.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    templateGuaranteeCodeCriteria := *openapiclient.NewPostTemplateGuaranteeCodeRequest() // PostTemplateGuaranteeCodeRequest | Request object that holds the details of template Guarantee Code to be created.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.PostTemplateGuaranteeCode(context.Background(), guaranteeCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateGuaranteeCodeCriteria(templateGuaranteeCodeCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.PostTemplateGuaranteeCode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostTemplateGuaranteeCode`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.PostTemplateGuaranteeCode`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**guaranteeCode** | **string** | Unique Code of Guarantee. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostTemplateGuaranteeCodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **templateGuaranteeCodeCriteria** | [**PostTemplateGuaranteeCodeRequest**](PostTemplateGuaranteeCodeRequest.md) | Request object that holds the details of template Guarantee Code to be created. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostTemplateMarketCode

> Status PostTemplateMarketCode(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateMarketCodeCriteria(templateMarketCodeCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Market Code Template



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    templateMarketCodeCriteria := *openapiclient.NewPostTemplateMarketCodeRequest() // PostTemplateMarketCodeRequest | Request object that holds the details of template Market Code to be created.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.PostTemplateMarketCode(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateMarketCodeCriteria(templateMarketCodeCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.PostTemplateMarketCode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostTemplateMarketCode`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.PostTemplateMarketCode`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostTemplateMarketCodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **templateMarketCodeCriteria** | [**PostTemplateMarketCodeRequest**](PostTemplateMarketCodeRequest.md) | Request object that holds the details of template Market Code to be created. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostTemplateMarketGroup

> Status PostTemplateMarketGroup(ctx, marketGroupCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateMarketGroupCriteria(templateMarketGroupCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Market Group Template



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    marketGroupCode := "marketGroupCode_example" // string | Unique Code of market group.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    templateMarketGroupCriteria := *openapiclient.NewPostTemplateMarketGroupRequest() // PostTemplateMarketGroupRequest | Request object that holds the details of template Market Group to be created.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.PostTemplateMarketGroup(context.Background(), marketGroupCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateMarketGroupCriteria(templateMarketGroupCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.PostTemplateMarketGroup``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostTemplateMarketGroup`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.PostTemplateMarketGroup`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**marketGroupCode** | **string** | Unique Code of market group. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostTemplateMarketGroupRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **templateMarketGroupCriteria** | [**PostTemplateMarketGroupRequest**](PostTemplateMarketGroupRequest.md) | Request object that holds the details of template Market Group to be created. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostTemplateSourceCode

> Status PostTemplateSourceCode(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateSourceCodeCriteria(templateSourceCodeCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create a Template Source Code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    templateSourceCodeCriteria := *openapiclient.NewPostTemplateSourceCodeRequest() // PostTemplateSourceCodeRequest | Request object that holds the details of template Source Code to be created.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.PostTemplateSourceCode(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateSourceCodeCriteria(templateSourceCodeCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.PostTemplateSourceCode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostTemplateSourceCode`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.PostTemplateSourceCode`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostTemplateSourceCodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **templateSourceCodeCriteria** | [**PostTemplateSourceCodeRequest**](PostTemplateSourceCodeRequest.md) | Request object that holds the details of template Source Code to be created. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostTemplateSourceGroup

> Status PostTemplateSourceGroup(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateSourceGroupCriteria(templateSourceGroupCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create a Template Source Group



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    templateSourceGroupCriteria := *openapiclient.NewPostTemplateSourceGroupRequest() // PostTemplateSourceGroupRequest | Request object that holds the details of template Source Group to be created.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.PostTemplateSourceGroup(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateSourceGroupCriteria(templateSourceGroupCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.PostTemplateSourceGroup``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostTemplateSourceGroup`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.PostTemplateSourceGroup`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostTemplateSourceGroupRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **templateSourceGroupCriteria** | [**PostTemplateSourceGroupRequest**](PostTemplateSourceGroupRequest.md) | Request object that holds the details of template Source Group to be created. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RemoveMarketCode

> Status RemoveMarketCode(ctx, marketcode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete a Market Code 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    marketcode := "marketcode_example" // string | Unique Code of market.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.RemoveMarketCode(context.Background(), marketcode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.RemoveMarketCode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveMarketCode`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.RemoveMarketCode`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**marketcode** | **string** | Unique Code of market. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveMarketCodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RemoveMarketGroup

> Status RemoveMarketGroup(ctx, marketGroupCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete a Market Group 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    marketGroupCode := "marketGroupCode_example" // string | Unique Code of market group.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.RemoveMarketGroup(context.Background(), marketGroupCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.RemoveMarketGroup``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveMarketGroup`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.RemoveMarketGroup`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**marketGroupCode** | **string** | Unique Code of market group. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveMarketGroupRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RemovePreCheckInRules

> Status RemovePreCheckInRules(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RuleType(ruleType).StartDate(startDate).EndDate(endDate).Duration(duration).NewStartDate(newStartDate).NewEndDate(newEndDate).NewDuration(newDuration).Level(level).Type_(type_).SpecialsCodes(specialsCodes).MarketCodes(marketCodes).AbsoluteFlag(absoluteFlag).EndTime(endTime).StartTime(startTime).DaysBeforeArrival(daysBeforeArrival).DaysAfterBooking(daysAfterBooking).HoursPriorToCheckIn(hoursPriorToCheckIn).HoursPostCheckIn(hoursPostCheckIn).RatePlansCodes(ratePlansCodes).ReservationTypesCodes(reservationTypesCodes).VIPCodes(vIPCodes).OriginCodes(originCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Pre Check In rules



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    ruleType := []string{"RuleType_example"} // []string | The rule type on which the Internet Pre Check-In Rule is based. If a reservation has any of the following code, Pre CheckIn rule gets active for that reservation (optional)
    startDate := time.Now() // string |  (optional)
    endDate := time.Now() // string |  (optional)
    duration := "duration_example" // string |  (optional)
    newStartDate := time.Now() // string |  (optional)
    newEndDate := time.Now() // string |  (optional)
    newDuration := "newDuration_example" // string |  (optional)
    level := []string{"Inner_example"} // []string | Description type for Rule Details (optional)
    type_ := []string{"Inner_example"} // []string | Code type for Rule Details (optional)
    specialsCodes := []string{"Inner_example"} // []string |  (optional)
    marketCodes := []string{"Inner_example"} // []string |  (optional)
    absoluteFlag := true // bool | Absolute Flag value for Time Limit Rule. (optional)
    endTime := "endTime_example" // string | The latest possible Internet check-in time for a reservation based on the Time rule type (optional)
    startTime := "startTime_example" // string | The earliest possible Internet check-in time for a reservation based on the Time rule type (optional)
    daysBeforeArrival := int32(56) // int32 | The number of days before the arrival date that the reservation can be checked in through the Internet. A zero will mean the day of arrival (optional)
    daysAfterBooking := int32(56) // int32 | The number of days after the booking date that the reservation can be checked in over the Internet (optional)
    hoursPriorToCheckIn := int32(56) // int32 | Enter the number of hours before the property's official check-in time that the reservation will be eligible for Internet check in (optional)
    hoursPostCheckIn := int32(56) // int32 | Enter the number of hours after the property's official check-in time that the reservation will be eligible for Internet check in (optional)
    ratePlansCodes := []string{"Inner_example"} // []string |  (optional)
    reservationTypesCodes := []string{"Inner_example"} // []string |  (optional)
    vIPCodes := []string{"Inner_example"} // []string |  (optional)
    originCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.RemovePreCheckInRules(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RuleType(ruleType).StartDate(startDate).EndDate(endDate).Duration(duration).NewStartDate(newStartDate).NewEndDate(newEndDate).NewDuration(newDuration).Level(level).Type_(type_).SpecialsCodes(specialsCodes).MarketCodes(marketCodes).AbsoluteFlag(absoluteFlag).EndTime(endTime).StartTime(startTime).DaysBeforeArrival(daysBeforeArrival).DaysAfterBooking(daysAfterBooking).HoursPriorToCheckIn(hoursPriorToCheckIn).HoursPostCheckIn(hoursPostCheckIn).RatePlansCodes(ratePlansCodes).ReservationTypesCodes(reservationTypesCodes).VIPCodes(vIPCodes).OriginCodes(originCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.RemovePreCheckInRules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemovePreCheckInRules`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.RemovePreCheckInRules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemovePreCheckInRulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **ruleType** | **[]string** | The rule type on which the Internet Pre Check-In Rule is based. If a reservation has any of the following code, Pre CheckIn rule gets active for that reservation | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **duration** | **string** |  | 
 **newStartDate** | **string** |  | 
 **newEndDate** | **string** |  | 
 **newDuration** | **string** |  | 
 **level** | **[]string** | Description type for Rule Details | 
 **type_** | **[]string** | Code type for Rule Details | 
 **specialsCodes** | **[]string** |  | 
 **marketCodes** | **[]string** |  | 
 **absoluteFlag** | **bool** | Absolute Flag value for Time Limit Rule. | 
 **endTime** | **string** | The latest possible Internet check-in time for a reservation based on the Time rule type | 
 **startTime** | **string** | The earliest possible Internet check-in time for a reservation based on the Time rule type | 
 **daysBeforeArrival** | **int32** | The number of days before the arrival date that the reservation can be checked in through the Internet. A zero will mean the day of arrival | 
 **daysAfterBooking** | **int32** | The number of days after the booking date that the reservation can be checked in over the Internet | 
 **hoursPriorToCheckIn** | **int32** | Enter the number of hours before the property&#39;s official check-in time that the reservation will be eligible for Internet check in | 
 **hoursPostCheckIn** | **int32** | Enter the number of hours after the property&#39;s official check-in time that the reservation will be eligible for Internet check in | 
 **ratePlansCodes** | **[]string** |  | 
 **reservationTypesCodes** | **[]string** |  | 
 **vIPCodes** | **[]string** |  | 
 **originCodes** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RemoveServiceRequestCodePriorities

> Status RemoveServiceRequestCodePriorities(ctx, serviceRequestCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Service Request Code Priorities



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    serviceRequestCode := "serviceRequestCode_example" // string | Unique Code of service request.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.RemoveServiceRequestCodePriorities(context.Background(), serviceRequestCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.RemoveServiceRequestCodePriorities``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveServiceRequestCodePriorities`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.RemoveServiceRequestCodePriorities`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**serviceRequestCode** | **string** | Unique Code of service request. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveServiceRequestCodePrioritiesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RemoveServiceRequestCodes

> Status RemoveServiceRequestCodes(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ServiceRequestCode(serviceRequestCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete configuration service request codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    serviceRequestCode := []string{"Inner_example"} // []string | Service request code. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.RemoveServiceRequestCodes(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ServiceRequestCode(serviceRequestCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.RemoveServiceRequestCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveServiceRequestCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.RemoveServiceRequestCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveServiceRequestCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **serviceRequestCode** | **[]string** | Service request code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RemoveSourceCode

> Status RemoveSourceCode(ctx, sourceCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete a Source Code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    sourceCode := "sourceCode_example" // string | Unique Code of source.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.RemoveSourceCode(context.Background(), sourceCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.RemoveSourceCode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveSourceCode`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.RemoveSourceCode`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceCode** | **string** | Unique Code of source. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveSourceCodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RemoveSourceGroup

> Status RemoveSourceGroup(ctx, sourceGroupCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete a Source Group



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    sourceGroupCode := "sourceGroupCode_example" // string | Unique Code of source group.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.RemoveSourceGroup(context.Background(), sourceGroupCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.RemoveSourceGroup``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveSourceGroup`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.RemoveSourceGroup`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceGroupCode** | **string** | Unique Code of source group. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveSourceGroupRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RemoveTemplateMarketCode

> Status RemoveTemplateMarketCode(ctx, marketcode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateMarketCode(templateMarketCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete a Market Code Template



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    marketcode := "marketcode_example" // string | Unique Code of market.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    templateMarketCode := "templateMarketCode_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.RemoveTemplateMarketCode(context.Background(), marketcode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateMarketCode(templateMarketCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.RemoveTemplateMarketCode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveTemplateMarketCode`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.RemoveTemplateMarketCode`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**marketcode** | **string** | Unique Code of market. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveTemplateMarketCodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **templateMarketCode** | **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RemoveTemplateMarketGroup

> Status RemoveTemplateMarketGroup(ctx, marketGroupCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateMarketGroup(templateMarketGroup).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete market Group Template



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    marketGroupCode := "marketGroupCode_example" // string | Unique Code of market group.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    templateMarketGroup := "templateMarketGroup_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.RemoveTemplateMarketGroup(context.Background(), marketGroupCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateMarketGroup(templateMarketGroup).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.RemoveTemplateMarketGroup``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveTemplateMarketGroup`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.RemoveTemplateMarketGroup`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**marketGroupCode** | **string** | Unique Code of market group. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveTemplateMarketGroupRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **templateMarketGroup** | **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RemoveTemplateSourceCode

> Status RemoveTemplateSourceCode(ctx, sourceCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateSourceCode(templateSourceCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete a Template Source Code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    sourceCode := "sourceCode_example" // string | Unique Code of source.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    templateSourceCode := "templateSourceCode_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.RemoveTemplateSourceCode(context.Background(), sourceCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateSourceCode(templateSourceCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.RemoveTemplateSourceCode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveTemplateSourceCode`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.RemoveTemplateSourceCode`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceCode** | **string** | Unique Code of source. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveTemplateSourceCodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **templateSourceCode** | **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RemoveTemplateSourceGroup

> Status RemoveTemplateSourceGroup(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateSourceGroup(templateSourceGroup).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete a Template Source Group



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    templateSourceGroup := "templateSourceGroup_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.RemoveTemplateSourceGroup(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateSourceGroup(templateSourceGroup).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.RemoveTemplateSourceGroup``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveTemplateSourceGroup`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.RemoveTemplateSourceGroup`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiRemoveTemplateSourceGroupRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **templateSourceGroup** | **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

