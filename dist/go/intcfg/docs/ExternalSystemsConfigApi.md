# \ExternalSystemsConfigApi

All URIs are relative to */int/config/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeleteDeliveryMethods**](ExternalSystemsConfigApi.md#DeleteDeliveryMethods) | **Delete** /deliveryMethods | Operation to remove delivery methods.
[**DeleteHotelInterface**](ExternalSystemsConfigApi.md#DeleteHotelInterface) | **Delete** /hotels/{hotelId}/hotelInerface | Operation to remove hotel interface.
[**DeleteInterfaceRight**](ExternalSystemsConfigApi.md#DeleteInterfaceRight) | **Delete** /interfaceRights | Operation to remove interface right.
[**DeletePublisher**](ExternalSystemsConfigApi.md#DeletePublisher) | **Delete** /externalSystems/{externalSystemCode}/hotels/{hotelId}/publishers | Operation to remove publisher.
[**GetDeliveryMethods**](ExternalSystemsConfigApi.md#GetDeliveryMethods) | **Get** /deliveryMethods | Operation to fetch delivery methods.
[**GetExternalDatabaseAvailableProperties**](ExternalSystemsConfigApi.md#GetExternalDatabaseAvailableProperties) | **Get** /interfaces/{interfaceId}/databases/{databaseId}/availableResorts | Operation to fetch external database available properties.
[**GetHotelInterfaces**](ExternalSystemsConfigApi.md#GetHotelInterfaces) | **Get** /hotelInterfaceTypes | Operation to fetch hotel interfaces.
[**GetInterfaceRights**](ExternalSystemsConfigApi.md#GetInterfaceRights) | **Get** /interfaceRights | Operation to fetch interface rights.
[**GetPublishers**](ExternalSystemsConfigApi.md#GetPublishers) | **Get** /externalSystems/{externalSystemCode}/publishers | Operation to fetch publishers.
[**GetUDFMappings**](ExternalSystemsConfigApi.md#GetUDFMappings) | **Get** /udfMappings | Operation to send a response to the Look up of UDFs.
[**PostDeliveryMethods**](ExternalSystemsConfigApi.md#PostDeliveryMethods) | **Post** /deliveryMethods | Operation to create delivery methods.
[**PostPublishers**](ExternalSystemsConfigApi.md#PostPublishers) | **Post** /externalSystems/{externalSystemCode}/hotels/{hotelId}/publishers | Operation to create publishers.
[**PutDeliveryMethods**](ExternalSystemsConfigApi.md#PutDeliveryMethods) | **Put** /deliveryMethods | Operation to change delivery methods.
[**PutInterfaceRight**](ExternalSystemsConfigApi.md#PutInterfaceRight) | **Put** /interfaceRights | Operation to change interface right.
[**PutUDFMapping**](ExternalSystemsConfigApi.md#PutUDFMapping) | **Put** /udfMappings | Operation to send a response to the Change in UDF.



## DeleteDeliveryMethods

> Status DeleteDeliveryMethods(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).Type_(type_).Options(options).ConfigurationId(configurationId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to remove delivery methods.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/intcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    type_ := "type__example" // string | Settings for Text Message Delivery of Queue Reservation status (optional)
    options := []string{"Options_example"} // []string | SFTP delivery configurations (optional)
    configurationId := []int32{int32(123)} // []int32 | Unique id associated with this configuration (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigApi.DeleteDeliveryMethods(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).Type_(type_).Options(options).ConfigurationId(configurationId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigApi.DeleteDeliveryMethods``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteDeliveryMethods`: Status
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigApi.DeleteDeliveryMethods`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteDeliveryMethodsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
 **type_** | **string** | Settings for Text Message Delivery of Queue Reservation status | 
 **options** | **[]string** | SFTP delivery configurations | 
 **configurationId** | **[]int32** | Unique id associated with this configuration | 
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


## DeleteHotelInterface

> Status DeleteHotelInterface(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Logo(logo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to remove hotel interface.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/intcfg"
)

func main() {
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    logo := "logo_example" // string | Hotel Interface Logo. On the database, this is also referred as DBF Logo. This is a three letter code followed by an underscore(_). This tells us which DBF files and log files with the prefix that IFC7 is going to create. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigApi.DeleteHotelInterface(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Logo(logo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigApi.DeleteHotelInterface``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteHotelInterface`: Status
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigApi.DeleteHotelInterface`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteHotelInterfaceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **logo** | **string** | Hotel Interface Logo. On the database, this is also referred as DBF Logo. This is a three letter code followed by an underscore(_). This tells us which DBF files and log files with the prefix that IFC7 is going to create. | 
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


## DeleteInterfaceRight

> Status DeleteInterfaceRight(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).Id(id).IdExtension(idExtension).IdContext(idContext).Type_(type_).Right(right).Code(code).Description(description).InterfaceRightDescription(interfaceRightDescription).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to remove interface right.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/intcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | Hotel Code to which the Interface Right belongs to. (optional)
    id := "id_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := "type__example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    right := int32(56) // int32 | Internal code for each allowed right of a Hotel Interface record. (optional)
    code := "code_example" // string | User defined code for an Interface Right. (optional)
    description := "description_example" // string | User defined description for an Interface Right. (optional)
    interfaceRightDescription := "interfaceRightDescription_example" // string | System Description of an allowed Interface Right. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigApi.DeleteInterfaceRight(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).Id(id).IdExtension(idExtension).IdContext(idContext).Type_(type_).Right(right).Code(code).Description(description).InterfaceRightDescription(interfaceRightDescription).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigApi.DeleteInterfaceRight``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteInterfaceRight`: Status
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigApi.DeleteInterfaceRight`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteInterfaceRightRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **string** | Hotel Code to which the Interface Right belongs to. | 
 **id** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **right** | **int32** | Internal code for each allowed right of a Hotel Interface record. | 
 **code** | **string** | User defined code for an Interface Right. | 
 **description** | **string** | User defined description for an Interface Right. | 
 **interfaceRightDescription** | **string** | System Description of an allowed Interface Right. | 
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


## DeletePublisher

> Status DeletePublisher(ctx, hotelId, externalSystemCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SubscriberHotelId(subscriberHotelId).Code(code).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to remove publisher.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/intcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Id used to find a property in OPERA.
    externalSystemCode := "externalSystemCode_example" // string | Unique OPERA Code used to find External System in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    subscriberHotelId := "subscriberHotelId_example" // string |  (optional)
    code := "code_example" // string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigApi.DeletePublisher(context.Background(), hotelId, externalSystemCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SubscriberHotelId(subscriberHotelId).Code(code).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigApi.DeletePublisher``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeletePublisher`: Status
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigApi.DeletePublisher`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Id used to find a property in OPERA. | 
**externalSystemCode** | **string** | Unique OPERA Code used to find External System in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeletePublisherRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **subscriberHotelId** | **string** |  | 
 **code** | **string** |  | 
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


## GetDeliveryMethods

> FetchedDeliveryMethods GetDeliveryMethods(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).CroCode(croCode).Usages(usages).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch delivery methods.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/intcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | Property code. (optional)
    croCode := "croCode_example" // string | CRO code. (optional)
    usages := []string{"Usages_example"} // []string | Settings for Text Message Delivery of Queue Reservation status (optional)
    includeInactive := true // bool | If true this will include inactive records(This is only applicable for general SMTP delivery method ). (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigApi.GetDeliveryMethods(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).CroCode(croCode).Usages(usages).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigApi.GetDeliveryMethods``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetDeliveryMethods`: FetchedDeliveryMethods
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigApi.GetDeliveryMethods`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetDeliveryMethodsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **string** | Property code. | 
 **croCode** | **string** | CRO code. | 
 **usages** | **[]string** | Settings for Text Message Delivery of Queue Reservation status | 
 **includeInactive** | **bool** | If true this will include inactive records(This is only applicable for general SMTP delivery method ). | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FetchedDeliveryMethods**](FetchedDeliveryMethods.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetExternalDatabaseAvailableProperties

> FetchedExternalDatabaseAvailableProperties GetExternalDatabaseAvailableProperties(ctx, databaseId, interfaceId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeInactive(includeInactive).InterfaceCodes(interfaceCodes).HotelIds(hotelIds).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch external database available properties.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/intcfg"
)

func main() {
    databaseId := "databaseId_example" // string | OPERA Id for Databsase
    interfaceId := "interfaceId_example" // string | OPERA Id for interface
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    includeInactive := true // bool | Flag that indicates to include inactive records. (optional)
    interfaceCodes := []string{"Inner_example"} // []string |  (optional)
    hotelIds := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigApi.GetExternalDatabaseAvailableProperties(context.Background(), databaseId, interfaceId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeInactive(includeInactive).InterfaceCodes(interfaceCodes).HotelIds(hotelIds).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigApi.GetExternalDatabaseAvailableProperties``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetExternalDatabaseAvailableProperties`: FetchedExternalDatabaseAvailableProperties
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigApi.GetExternalDatabaseAvailableProperties`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**databaseId** | **string** | OPERA Id for Databsase | 
**interfaceId** | **string** | OPERA Id for interface | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetExternalDatabaseAvailablePropertiesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **includeInactive** | **bool** | Flag that indicates to include inactive records. | 
 **interfaceCodes** | **[]string** |  | 
 **hotelIds** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FetchedExternalDatabaseAvailableProperties**](FetchedExternalDatabaseAvailableProperties.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetHotelInterfaces

> FetchedHotelInterfaces GetHotelInterfaces(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).InterfaceTypes(interfaceTypes).LogosCodes(logosCodes).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch hotel interfaces.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/intcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelIds := []string{"Inner_example"} // []string |  (optional)
    interfaceTypes := []string{"InterfaceTypes_example"} // []string | XML Posting Interface (optional)
    logosCodes := []string{"Inner_example"} // []string |  (optional)
    includeInactive := true // bool | If true this will set the criteria to include inactive records. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigApi.GetHotelInterfaces(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).InterfaceTypes(interfaceTypes).LogosCodes(logosCodes).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigApi.GetHotelInterfaces``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetHotelInterfaces`: FetchedHotelInterfaces
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigApi.GetHotelInterfaces`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetHotelInterfacesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelIds** | **[]string** |  | 
 **interfaceTypes** | **[]string** | XML Posting Interface | 
 **logosCodes** | **[]string** |  | 
 **includeInactive** | **bool** | If true this will set the criteria to include inactive records. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FetchedHotelInterfaces**](FetchedHotelInterfaces.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetInterfaceRights

> []InterfaceRightType GetInterfaceRights(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).Id(id).IdExtension(idExtension).IdContext(idContext).Type_(type_).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch interface rights.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/intcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    id := "id_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := "type__example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigApi.GetInterfaceRights(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).Id(id).IdExtension(idExtension).IdContext(idContext).Type_(type_).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigApi.GetInterfaceRights``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetInterfaceRights`: []InterfaceRightType
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigApi.GetInterfaceRights`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetInterfaceRightsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
 **id** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**[]InterfaceRightType**](InterfaceRightType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPublishers

> FetchedPublishers GetPublishers(ctx, externalSystemCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch publishers.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/intcfg"
)

func main() {
    externalSystemCode := "externalSystemCode_example" // string | Unique OPERA Code used to find External System in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigApi.GetPublishers(context.Background(), externalSystemCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigApi.GetPublishers``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPublishers`: FetchedPublishers
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigApi.GetPublishers`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**externalSystemCode** | **string** | Unique OPERA Code used to find External System in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPublishersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FetchedPublishers**](FetchedPublishers.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetUDFMappings

> FetchedUDFMappings GetUDFMappings(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Type_(type_).UDFName(uDFName).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to send a response to the Look up of UDFs.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/intcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    type_ := "type__example" // string | A reference to the type of object defined by the Type for Reservation and Profile Type. (optional)
    uDFName := "uDFName_example" // string | Name of the user-defined function (UDF) field. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigApi.GetUDFMappings(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Type_(type_).UDFName(uDFName).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigApi.GetUDFMappings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetUDFMappings`: FetchedUDFMappings
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigApi.GetUDFMappings`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetUDFMappingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **type_** | **string** | A reference to the type of object defined by the Type for Reservation and Profile Type. | 
 **uDFName** | **string** | Name of the user-defined function (UDF) field. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FetchedUDFMappings**](FetchedUDFMappings.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostDeliveryMethods

> Status PostDeliveryMethods(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreateDeliveryMethods(createDeliveryMethods).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create delivery methods.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/intcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    createDeliveryMethods := *openapiclient.NewPostDeliveryMethodsRequest() // PostDeliveryMethodsRequest | Request to create the delivery method for a property/HUB/Chain and its configurations.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigApi.PostDeliveryMethods(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreateDeliveryMethods(createDeliveryMethods).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigApi.PostDeliveryMethods``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostDeliveryMethods`: Status
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigApi.PostDeliveryMethods`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostDeliveryMethodsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **createDeliveryMethods** | [**PostDeliveryMethodsRequest**](PostDeliveryMethodsRequest.md) | Request to create the delivery method for a property/HUB/Chain and its configurations. | 
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


## PostPublishers

> Status PostPublishers(ctx, hotelId, externalSystemCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreatePublishers(createPublishers).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create publishers.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/intcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Id used to find a property in OPERA.
    externalSystemCode := "externalSystemCode_example" // string | Unique OPERA Code used to find External System in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    createPublishers := *openapiclient.NewPostPublishersRequest() // PostPublishersRequest | Request to create publishers.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigApi.PostPublishers(context.Background(), hotelId, externalSystemCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreatePublishers(createPublishers).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigApi.PostPublishers``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostPublishers`: Status
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigApi.PostPublishers`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Id used to find a property in OPERA. | 
**externalSystemCode** | **string** | Unique OPERA Code used to find External System in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostPublishersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **createPublishers** | [**PostPublishersRequest**](PostPublishersRequest.md) | Request to create publishers. | 
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


## PutDeliveryMethods

> ChangedDeliveryMethods PutDeliveryMethods(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeDeliveryMethods(changeDeliveryMethods).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change delivery methods.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/intcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    changeDeliveryMethods := *openapiclient.NewPutDeliveryMethodsRequest() // PutDeliveryMethodsRequest | Request to change the delivery method for a property/HUB/Chain and its configurations.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigApi.PutDeliveryMethods(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeDeliveryMethods(changeDeliveryMethods).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigApi.PutDeliveryMethods``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutDeliveryMethods`: ChangedDeliveryMethods
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigApi.PutDeliveryMethods`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutDeliveryMethodsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **changeDeliveryMethods** | [**PutDeliveryMethodsRequest**](PutDeliveryMethodsRequest.md) | Request to change the delivery method for a property/HUB/Chain and its configurations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChangedDeliveryMethods**](ChangedDeliveryMethods.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutInterfaceRight

> ChangedInterfaceRight PutInterfaceRight(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeInterfaceRight(changeInterfaceRight).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change interface right.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/intcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    changeInterfaceRight := *openapiclient.NewPutInterfaceRightRequest() // PutInterfaceRightRequest | Request object for updating a Hotel Interface Right. It will create the Hotel Interface Right if it does not exist on the database.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigApi.PutInterfaceRight(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeInterfaceRight(changeInterfaceRight).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigApi.PutInterfaceRight``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutInterfaceRight`: ChangedInterfaceRight
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigApi.PutInterfaceRight`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutInterfaceRightRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **changeInterfaceRight** | [**PutInterfaceRightRequest**](PutInterfaceRightRequest.md) | Request object for updating a Hotel Interface Right. It will create the Hotel Interface Right if it does not exist on the database. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChangedInterfaceRight**](ChangedInterfaceRight.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutUDFMapping

> ChangedUDFMapping PutUDFMapping(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeUDFMapping(changeUDFMapping).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to send a response to the Change in UDF.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/intcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    changeUDFMapping := *openapiclient.NewPutUDFMappingRequest() // PutUDFMappingRequest | Self-contained Request object that is used when Updating UDFMapping.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigApi.PutUDFMapping(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeUDFMapping(changeUDFMapping).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigApi.PutUDFMapping``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutUDFMapping`: ChangedUDFMapping
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigApi.PutUDFMapping`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutUDFMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **changeUDFMapping** | [**PutUDFMappingRequest**](PutUDFMappingRequest.md) | Self-contained Request object that is used when Updating UDFMapping. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChangedUDFMapping**](ChangedUDFMapping.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

