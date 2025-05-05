# \ExternalSystemsConfigAPI

All URIs are relative to */int/config/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ClearCache**](ExternalSystemsConfigAPI.md#ClearCache) | **Delete** /externalSystems/config/cache | Operation to clear cache.
[**DeleteDeliveryMethods**](ExternalSystemsConfigAPI.md#DeleteDeliveryMethods) | **Delete** /deliveryMethods | Operation to remove delivery methods.
[**DeleteHotelInterface**](ExternalSystemsConfigAPI.md#DeleteHotelInterface) | **Delete** /hotels/{hotelId}/hotelInerface | Operation to remove hotel interface.
[**DeleteInterfaceAccount**](ExternalSystemsConfigAPI.md#DeleteInterfaceAccount) | **Delete** /hotels/{hotelId}/interfaces/{interfaceId}/accounts/{accountId} | Operation to remove interface account.
[**DeleteInterfaceMachine**](ExternalSystemsConfigAPI.md#DeleteInterfaceMachine) | **Delete** /machines/{machineId} | Operation to remove interface machine.
[**DeleteInterfaceRight**](ExternalSystemsConfigAPI.md#DeleteInterfaceRight) | **Delete** /interfaceRights | Operation to remove interface right.
[**DeleteInterfaceRoom**](ExternalSystemsConfigAPI.md#DeleteInterfaceRoom) | **Delete** /hotels/{hotelId}/interfaces/{interfaceId}/rooms | Operation to remove interface room.
[**DeleteInterfaceRoomStatus**](ExternalSystemsConfigAPI.md#DeleteInterfaceRoomStatus) | **Delete** /hotels/{hotelId}/interfaces/{interfaceId}/roomStatus | Operation to remove interface room status.
[**DeletePublisher**](ExternalSystemsConfigAPI.md#DeletePublisher) | **Delete** /externalSystems/{externalSystemCode}/hotels/{hotelId}/publishers | Operation to remove publisher.
[**GetConfiguredExternalDevices**](ExternalSystemsConfigAPI.md#GetConfiguredExternalDevices) | **Get** /configuredExternalDevices | Operation to fetch configured external devices.
[**GetDeliveryMethods**](ExternalSystemsConfigAPI.md#GetDeliveryMethods) | **Get** /deliveryMethods | Operation to fetch delivery methods.
[**GetExternalDatabaseAvailableProperties**](ExternalSystemsConfigAPI.md#GetExternalDatabaseAvailableProperties) | **Get** /interfaces/{interfaceId}/databases/{databaseId}/availableResorts | Operation to fetch external database available properties.
[**GetExternalDeviceConfigurations**](ExternalSystemsConfigAPI.md#GetExternalDeviceConfigurations) | **Get** /externalDevices/configurations | Operation to fetch external device configurations.
[**GetHotelInterfaceControllerRegistry**](ExternalSystemsConfigAPI.md#GetHotelInterfaceControllerRegistry) | **Get** /interfaceControllerRegistry | Operation to fetch hotel interface controller registry.
[**GetHotelInterfaceDetails**](ExternalSystemsConfigAPI.md#GetHotelInterfaceDetails) | **Get** /hotels/{hotelId}/logos/{logo} | Operation to fetch hotel interface details.
[**GetHotelInterfaceErrors**](ExternalSystemsConfigAPI.md#GetHotelInterfaceErrors) | **Get** /interfaceErrors | Operation to fetch hotel interface errors.
[**GetHotelInterfaceFailedMessages**](ExternalSystemsConfigAPI.md#GetHotelInterfaceFailedMessages) | **Get** /interfaceFailedMessages | Operation to fetch hotel interface failed messages.
[**GetHotelInterfaceSchemas**](ExternalSystemsConfigAPI.md#GetHotelInterfaceSchemas) | **Get** /interfaceSchemas | Operation to fetch hotel interface schemas.
[**GetHotelInterfaces**](ExternalSystemsConfigAPI.md#GetHotelInterfaces) | **Get** /hotelInterfaceTypes | Operation to fetch hotel interfaces.
[**GetInterfaceMachines**](ExternalSystemsConfigAPI.md#GetInterfaceMachines) | **Get** /machines | Operation to fetch interface machines.
[**GetInterfaceRights**](ExternalSystemsConfigAPI.md#GetInterfaceRights) | **Get** /interfaceRights | Operation to fetch interface rights.
[**GetInterfaceRoomStatuses**](ExternalSystemsConfigAPI.md#GetInterfaceRoomStatuses) | **Get** /hotels/{hotelId}/interfaces/{interfaceId}/roomStatus | Operation to fetch interface room statuses.
[**GetInterfaceRooms**](ExternalSystemsConfigAPI.md#GetInterfaceRooms) | **Get** /hotels/{hotelId}/interfaces/{interfaceId}/rooms | Operation to fetch interface rooms.
[**GetInterfaceUnitCharges**](ExternalSystemsConfigAPI.md#GetInterfaceUnitCharges) | **Get** /hotels/{hotelId}/interfaces/{interfaceId}/unitCharges | Operation to fetch interface unit charges.
[**GetPublishers**](ExternalSystemsConfigAPI.md#GetPublishers) | **Get** /externalSystems/{externalSystemCode}/publishers | Operation to fetch publishers.
[**GetUDFMappings**](ExternalSystemsConfigAPI.md#GetUDFMappings) | **Get** /udfMappings | Operation to send a response to the Look up of UDFs.
[**ImportInterfaceRooms**](ExternalSystemsConfigAPI.md#ImportInterfaceRooms) | **Post** /hotels/{hotelId}/interfaces/{interfaceId}/rooms/import | Operation to import interface rooms.
[**Ping**](ExternalSystemsConfigAPI.md#Ping) | **Get** /externalSystems/config/ping | Operation to ping.
[**PostDeliveryMethods**](ExternalSystemsConfigAPI.md#PostDeliveryMethods) | **Post** /deliveryMethods | Operation to create delivery methods.
[**PostHotelInterface**](ExternalSystemsConfigAPI.md#PostHotelInterface) | **Post** /hotelInerface | Operation to create hotel interface.
[**PostInterfaceAccount**](ExternalSystemsConfigAPI.md#PostInterfaceAccount) | **Post** /hotels/{hotelId}/interfaces/{interfaceId}/accounts | Operation to create interface account.
[**PostInterfaceRoom**](ExternalSystemsConfigAPI.md#PostInterfaceRoom) | **Post** /hotels/{hotelId}/interfaces/{interfaceId}/rooms | Operation to create interface room.
[**PostPublishers**](ExternalSystemsConfigAPI.md#PostPublishers) | **Post** /externalSystems/{externalSystemCode}/hotels/{hotelId}/publishers | Operation to create publishers.
[**PutDeliveryMethods**](ExternalSystemsConfigAPI.md#PutDeliveryMethods) | **Put** /deliveryMethods | Operation to change delivery methods.
[**PutExternalDeviceConfigurations**](ExternalSystemsConfigAPI.md#PutExternalDeviceConfigurations) | **Put** /externalDevices/configurations | Operation to change external device configurations.
[**PutHotelInterface**](ExternalSystemsConfigAPI.md#PutHotelInterface) | **Put** /hotelInerface | Operation to change hotel interface.
[**PutInterfaceAccount**](ExternalSystemsConfigAPI.md#PutInterfaceAccount) | **Put** /hotels/{hotelId}/interfaces/{interfaceId}/accounts/{accountId} | Operation to change interface account.
[**PutInterfaceMachine**](ExternalSystemsConfigAPI.md#PutInterfaceMachine) | **Put** /machines/{machineId} | Operation to change interface machine.
[**PutInterfaceRight**](ExternalSystemsConfigAPI.md#PutInterfaceRight) | **Put** /interfaceRights | Operation to change interface right.
[**PutInterfaceRoom**](ExternalSystemsConfigAPI.md#PutInterfaceRoom) | **Put** /hotels/{hotelId}/interfaces/{interfaceId}/rooms/{roomId} | Operation to change interface room.
[**PutInterfaceRoomStatus**](ExternalSystemsConfigAPI.md#PutInterfaceRoomStatus) | **Put** /hotels/{hotelId}/interfaces/{interfaceId}/roomStatus | Operation to change interface room status.
[**PutInterfaceUnitCharges**](ExternalSystemsConfigAPI.md#PutInterfaceUnitCharges) | **Put** /hotels/{hotelId}/interfaces/{interfaceId}/unitCharges | Operation to change interface unit charges.
[**PutUDFMapping**](ExternalSystemsConfigAPI.md#PutUDFMapping) | **Put** /udfMappings | Operation to send a response to the Change in UDF.



## ClearCache

> Status ClearCache(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to clear cache.



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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigAPI.ClearCache(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigAPI.ClearCache``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ClearCache`: Status
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigAPI.ClearCache`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiClearCacheRequest struct via the builder pattern


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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    type_ := "type__example" // string | Settings for Text Message Delivery of Queue Reservation status (optional)
    options := []string{"Options_example"} // []string | SFTP delivery configurations (optional)
    configurationId := []int32{int32(123)} // []int32 | Unique id associated with this configuration (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigAPI.DeleteDeliveryMethods(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).Type_(type_).Options(options).ConfigurationId(configurationId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigAPI.DeleteDeliveryMethods``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteDeliveryMethods`: Status
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigAPI.DeleteDeliveryMethods`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteDeliveryMethodsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    logo := "logo_example" // string | Hotel Interface Logo. On the database, this is also referred as DBF Logo. This is a three letter code followed by an underscore(_). This tells us which DBF files and log files with the prefix that IFC7 is going to create. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigAPI.DeleteHotelInterface(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Logo(logo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigAPI.DeleteHotelInterface``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteHotelInterface`: Status
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigAPI.DeleteHotelInterface`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
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


## DeleteInterfaceAccount

> Status DeleteInterfaceAccount(ctx, accountId, interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AutoBalance(autoBalance).PaymentMethod(paymentMethod).Account(account).AccountDescription(accountDescription).SalesOutlet(salesOutlet).TrxCode(trxCode).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to remove interface account.



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
    accountId := "accountId_example" // string | OPERA Id for Account
    interfaceId := "interfaceId_example" // string | OPERA Id for Logo
    hotelId := "hotelId_example" // string | OPERA Id for Property
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    autoBalance := true // bool | Auto balance flag of postings setup. (optional)
    paymentMethod := "paymentMethod_example" // string | Payment method of posting accounts in transaction codes setup. (optional)
    account := "account_example" // string | Account of posting accounts in transaction codes setup. (optional)
    accountDescription := "accountDescription_example" // string | Account description of posting accounts in transaction codes setup. (optional)
    salesOutlet := "salesOutlet_example" // string | Sales outlet of posting accounts in transaction codes setup. (optional)
    trxCode := "trxCode_example" // string | Transaction code of posting accounts in transaction codes setup. (optional)
    description := "description_example" // string | Description of posting accounts in transaction codes setup. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigAPI.DeleteInterfaceAccount(context.Background(), accountId, interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AutoBalance(autoBalance).PaymentMethod(paymentMethod).Account(account).AccountDescription(accountDescription).SalesOutlet(salesOutlet).TrxCode(trxCode).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigAPI.DeleteInterfaceAccount``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteInterfaceAccount`: Status
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigAPI.DeleteInterfaceAccount`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**accountId** | **string** | OPERA Id for Account | 
**interfaceId** | **string** | OPERA Id for Logo | 
**hotelId** | **string** | OPERA Id for Property | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteInterfaceAccountRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **autoBalance** | **bool** | Auto balance flag of postings setup. | 
 **paymentMethod** | **string** | Payment method of posting accounts in transaction codes setup. | 
 **account** | **string** | Account of posting accounts in transaction codes setup. | 
 **accountDescription** | **string** | Account description of posting accounts in transaction codes setup. | 
 **salesOutlet** | **string** | Sales outlet of posting accounts in transaction codes setup. | 
 **trxCode** | **string** | Transaction code of posting accounts in transaction codes setup. | 
 **description** | **string** | Description of posting accounts in transaction codes setup. | 
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


## DeleteInterfaceMachine

> Status DeleteInterfaceMachine(ctx, machineId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Machine(machine).Program(program).ControllerPort(controllerPort).VncPort(vncPort).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to remove interface machine.



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
    machineId := "machineId_example" // string | OPERA Id for machine
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    machine := "machine_example" // string | Unique Machine name of the running Interface. (optional)
    program := "program_example" // string | Path and name of the Interface program running on every Machine. (optional)
    controllerPort := int32(56) // int32 | Opera Interface controller (server) port for the connecting clients. (optional)
    vncPort := int32(56) // int32 | VNC server port for connecting to the VNC server. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigAPI.DeleteInterfaceMachine(context.Background(), machineId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Machine(machine).Program(program).ControllerPort(controllerPort).VncPort(vncPort).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigAPI.DeleteInterfaceMachine``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteInterfaceMachine`: Status
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigAPI.DeleteInterfaceMachine`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**machineId** | **string** | OPERA Id for machine | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteInterfaceMachineRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **machine** | **string** | Unique Machine name of the running Interface. | 
 **program** | **string** | Path and name of the Interface program running on every Machine. | 
 **controllerPort** | **int32** | Opera Interface controller (server) port for the connecting clients. | 
 **vncPort** | **int32** | VNC server port for connecting to the VNC server. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
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
    resp, r, err := apiClient.ExternalSystemsConfigAPI.DeleteInterfaceRight(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).Id(id).IdExtension(idExtension).IdContext(idContext).Type_(type_).Right(right).Code(code).Description(description).InterfaceRightDescription(interfaceRightDescription).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigAPI.DeleteInterfaceRight``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteInterfaceRight`: Status
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigAPI.DeleteInterfaceRight`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteInterfaceRightRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
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


## DeleteInterfaceRoom

> Status DeleteInterfaceRoom(ctx, interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomType(roomType).RoomNumber(roomNumber).LineNumber(lineNumber).OldLineNumber(oldLineNumber).Type_(type_).DataLine(dataLine).DataLineId(dataLineId).WakeUpCall(wakeUpCall).DoNotDisturb(doNotDisturb).ClassOfService(classOfService).DirectInwardDial(directInwardDial).MessageWaiting(messageWaiting).MaskDialNumber(maskDialNumber).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to remove interface room.



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
    interfaceId := "interfaceId_example" // string | OPERA Id for Logo
    hotelId := "hotelId_example" // string | OPERA Id for Property
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomType := "roomType_example" // string | Front Office Room Type. (optional)
    roomNumber := "roomNumber_example" // string | Front Office Room Number. (optional)
    lineNumber := "lineNumber_example" // string | External System's extension number. (optional)
    oldLineNumber := "oldLineNumber_example" // string | External System's extension number. It is used for editing a record. It is logically part of the record ID, and can actually be updated. (optional)
    type_ := "type__example" // string | Line Type of an Interface Room. (optional)
    dataLine := "dataLine_example" // string | Line Out (optional)
    dataLineId := "dataLineId_example" // string | Translation Table Id as defined in the IFC_CTRL table. It is also referred as Xlat Id. (optional)
    wakeUpCall := true // bool | Value to set/check if the wake up call funtionality is enabled/disabled for the particular line number. (optional)
    doNotDisturb := "doNotDisturb_example" // string | Do Not Disturb is set to available and freely switchable. (optional)
    classOfService := "classOfService_example" // string | Class Of Service is set to available and freely switchable. (optional)
    directInwardDial := "directInwardDial_example" // string | Direct Inward Dial is set to available and freely switchable. (optional)
    messageWaiting := "messageWaiting_example" // string | Message Waiting is set to available and freely switchable. (optional)
    maskDialNumber := "maskDialNumber_example" // string | Mask the dialled digits as per the room configuration. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigAPI.DeleteInterfaceRoom(context.Background(), interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomType(roomType).RoomNumber(roomNumber).LineNumber(lineNumber).OldLineNumber(oldLineNumber).Type_(type_).DataLine(dataLine).DataLineId(dataLineId).WakeUpCall(wakeUpCall).DoNotDisturb(doNotDisturb).ClassOfService(classOfService).DirectInwardDial(directInwardDial).MessageWaiting(messageWaiting).MaskDialNumber(maskDialNumber).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigAPI.DeleteInterfaceRoom``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteInterfaceRoom`: Status
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigAPI.DeleteInterfaceRoom`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**interfaceId** | **string** | OPERA Id for Logo | 
**hotelId** | **string** | OPERA Id for Property | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteInterfaceRoomRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomType** | **string** | Front Office Room Type. | 
 **roomNumber** | **string** | Front Office Room Number. | 
 **lineNumber** | **string** | External System&#39;s extension number. | 
 **oldLineNumber** | **string** | External System&#39;s extension number. It is used for editing a record. It is logically part of the record ID, and can actually be updated. | 
 **type_** | **string** | Line Type of an Interface Room. | 
 **dataLine** | **string** | Line Out | 
 **dataLineId** | **string** | Translation Table Id as defined in the IFC_CTRL table. It is also referred as Xlat Id. | 
 **wakeUpCall** | **bool** | Value to set/check if the wake up call funtionality is enabled/disabled for the particular line number. | 
 **doNotDisturb** | **string** | Do Not Disturb is set to available and freely switchable. | 
 **classOfService** | **string** | Class Of Service is set to available and freely switchable. | 
 **directInwardDial** | **string** | Direct Inward Dial is set to available and freely switchable. | 
 **messageWaiting** | **string** | Message Waiting is set to available and freely switchable. | 
 **maskDialNumber** | **string** | Mask the dialled digits as per the room configuration. | 
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


## DeleteInterfaceRoomStatus

> Status DeleteInterfaceRoomStatus(ctx, interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EntryCode(entryCode).Status(status).HousekeepingStatus(housekeepingStatus).CustomRoomTranslation(customRoomTranslation).Description(description).InterfaceRoomStatusId(interfaceRoomStatusId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to remove interface room status.



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
    interfaceId := "interfaceId_example" // string | OPERA id for Property
    hotelId := "hotelId_example" // string | OPERA id for Property
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    entryCode := "entryCode_example" // string | Entry code of a Hotel Interface Room Status. (optional)
    status := "status_example" // string | Room Status which is either Vacant (V) or Occupied (O). (optional)
    housekeepingStatus := "housekeepingStatus_example" // string | Housekeeping status of a room. (optional)
    customRoomTranslation := "customRoomTranslation_example" // string | Custom Room Translation of a Hotel Interface. It is a concatenation of a Status (V-Vacant or O-Occupied) and Housekeeping Status (IS-Inspected, CL-Clean, etc.) The delimiter is a period. Sample values are V.IS, V.CL, O.IS, O.CL. (optional)
    description := "description_example" // string | Description of the Hotel Interface Room Status. (optional)
    interfaceRoomStatusId := int32(56) // int32 | Row number to identify all the records belonging to a single group of Hotel Interface Room Status. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigAPI.DeleteInterfaceRoomStatus(context.Background(), interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EntryCode(entryCode).Status(status).HousekeepingStatus(housekeepingStatus).CustomRoomTranslation(customRoomTranslation).Description(description).InterfaceRoomStatusId(interfaceRoomStatusId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigAPI.DeleteInterfaceRoomStatus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteInterfaceRoomStatus`: Status
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigAPI.DeleteInterfaceRoomStatus`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**interfaceId** | **string** | OPERA id for Property | 
**hotelId** | **string** | OPERA id for Property | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteInterfaceRoomStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **entryCode** | **string** | Entry code of a Hotel Interface Room Status. | 
 **status** | **string** | Room Status which is either Vacant (V) or Occupied (O). | 
 **housekeepingStatus** | **string** | Housekeeping status of a room. | 
 **customRoomTranslation** | **string** | Custom Room Translation of a Hotel Interface. It is a concatenation of a Status (V-Vacant or O-Occupied) and Housekeeping Status (IS-Inspected, CL-Clean, etc.) The delimiter is a period. Sample values are V.IS, V.CL, O.IS, O.CL. | 
 **description** | **string** | Description of the Hotel Interface Room Status. | 
 **interfaceRoomStatusId** | **int32** | Row number to identify all the records belonging to a single group of Hotel Interface Room Status. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    subscriberHotelId := "subscriberHotelId_example" // string |  (optional)
    code := "code_example" // string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigAPI.DeletePublisher(context.Background(), hotelId, externalSystemCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SubscriberHotelId(subscriberHotelId).Code(code).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigAPI.DeletePublisher``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeletePublisher`: Status
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigAPI.DeletePublisher`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
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


## GetConfiguredExternalDevices

> FetchedConfiguredExternalDevices GetConfiguredExternalDevices(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).Active(active).Id(id).IdEditable(idEditable).Label(label).DeviceType(deviceType).DeviceCode(deviceCode).DeviceArea(deviceArea).DisplayName(displayName).MobileYN(mobileYN).DesktopYN(desktopYN).RegisterAddress(registerAddress).DeviceValue(deviceValue).ParameterName(parameterName).ParameterValue(parameterValue).IncludeInactive(includeInactive).FiscalPartnerCode(fiscalPartnerCode).PartnerCode(partnerCode).FetchInstruction(fetchInstruction).PartnerPayloadType(partnerPayloadType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch configured external devices.



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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string |  (optional)
    active := true // bool | Flag that indicates whether the device is active. (optional)
    id := "id_example" // string |  (optional)
    idEditable := true // bool |  (optional)
    label := "label_example" // string |  (optional)
    deviceType := "deviceType_example" // string |  (optional)
    deviceCode := "deviceCode_example" // string |  (optional)
    deviceArea := "deviceArea_example" // string | The area where the device is installed (optional)
    displayName := "displayName_example" // string | External device display name. (optional)
    mobileYN := true // bool | Indicator if device type is mobile or desktop. (optional)
    desktopYN := true // bool | Indicator if device type is mobile or desktop. (optional)
    registerAddress := "registerAddress_example" // string | The address which the Cash Register ID ( Device ID ) is associated with. (optional)
    deviceValue := "deviceValue_example" // string | External device Value. (optional)
    parameterName := "parameterName_example" // string | Name of the parameter. (optional)
    parameterValue := "parameterValue_example" // string | Value of the parameter. (optional)
    includeInactive := true // bool | Flag to choose to include inactive external devices or not. (optional)
    fiscalPartnerCode := "fiscalPartnerCode_example" // string | Used for fiscal partner codes. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    partnerCode := []string{"Inner_example"} // []string | Used for fiscal partner codes. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    fetchInstruction := "fetchInstruction_example" // string | Fetch instructions that can be used for all or partner specific. (optional)
    partnerPayloadType := "partnerPayloadType_example" // string | Used for searching a partner code configured with the specified fiscal payload type. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigAPI.GetConfiguredExternalDevices(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).Active(active).Id(id).IdEditable(idEditable).Label(label).DeviceType(deviceType).DeviceCode(deviceCode).DeviceArea(deviceArea).DisplayName(displayName).MobileYN(mobileYN).DesktopYN(desktopYN).RegisterAddress(registerAddress).DeviceValue(deviceValue).ParameterName(parameterName).ParameterValue(parameterValue).IncludeInactive(includeInactive).FiscalPartnerCode(fiscalPartnerCode).PartnerCode(partnerCode).FetchInstruction(fetchInstruction).PartnerPayloadType(partnerPayloadType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigAPI.GetConfiguredExternalDevices``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetConfiguredExternalDevices`: FetchedConfiguredExternalDevices
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigAPI.GetConfiguredExternalDevices`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetConfiguredExternalDevicesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **string** |  | 
 **active** | **bool** | Flag that indicates whether the device is active. | 
 **id** | **string** |  | 
 **idEditable** | **bool** |  | 
 **label** | **string** |  | 
 **deviceType** | **string** |  | 
 **deviceCode** | **string** |  | 
 **deviceArea** | **string** | The area where the device is installed | 
 **displayName** | **string** | External device display name. | 
 **mobileYN** | **bool** | Indicator if device type is mobile or desktop. | 
 **desktopYN** | **bool** | Indicator if device type is mobile or desktop. | 
 **registerAddress** | **string** | The address which the Cash Register ID ( Device ID ) is associated with. | 
 **deviceValue** | **string** | External device Value. | 
 **parameterName** | **string** | Name of the parameter. | 
 **parameterValue** | **string** | Value of the parameter. | 
 **includeInactive** | **bool** | Flag to choose to include inactive external devices or not. | 
 **fiscalPartnerCode** | **string** | Used for fiscal partner codes. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
 **partnerCode** | **[]string** | Used for fiscal partner codes. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
 **fetchInstruction** | **string** | Fetch instructions that can be used for all or partner specific. | 
 **partnerPayloadType** | **string** | Used for searching a partner code configured with the specified fiscal payload type. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FetchedConfiguredExternalDevices**](FetchedConfiguredExternalDevices.md)

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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | Property code. (optional)
    croCode := "croCode_example" // string | CRO code. (optional)
    usages := []string{"Usages_example"} // []string | Settings for Text Message Delivery of Queue Reservation status (optional)
    includeInactive := true // bool | If true this will include inactive records(This is only applicable for general SMTP delivery method ). (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigAPI.GetDeliveryMethods(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).CroCode(croCode).Usages(usages).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigAPI.GetDeliveryMethods``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetDeliveryMethods`: FetchedDeliveryMethods
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigAPI.GetDeliveryMethods`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetDeliveryMethodsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    includeInactive := true // bool | Flag that indicates to include inactive records. (optional)
    interfaceCodes := []string{"Inner_example"} // []string |  (optional)
    hotelIds := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigAPI.GetExternalDatabaseAvailableProperties(context.Background(), databaseId, interfaceId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeInactive(includeInactive).InterfaceCodes(interfaceCodes).HotelIds(hotelIds).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigAPI.GetExternalDatabaseAvailableProperties``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetExternalDatabaseAvailableProperties`: FetchedExternalDatabaseAvailableProperties
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigAPI.GetExternalDatabaseAvailableProperties`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
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


## GetExternalDeviceConfigurations

> FetchedExternalDeviceConfigurations GetExternalDeviceConfigurations(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).Active(active).Id(id).IdEditable(idEditable).Label(label).DeviceType(deviceType).DeviceCode(deviceCode).DeviceArea(deviceArea).DisplayName(displayName).MobileYN(mobileYN).DesktopYN(desktopYN).RegisterAddress(registerAddress).DeviceValue(deviceValue).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch external device configurations.



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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string |  (optional)
    active := true // bool | Flag that indicates whether the device is active. (optional)
    id := "id_example" // string |  (optional)
    idEditable := true // bool |  (optional)
    label := "label_example" // string |  (optional)
    deviceType := "deviceType_example" // string |  (optional)
    deviceCode := "deviceCode_example" // string |  (optional)
    deviceArea := "deviceArea_example" // string | The area where the device is installed (optional)
    displayName := "displayName_example" // string | External device display name. (optional)
    mobileYN := true // bool | Indicator if device type is mobile or desktop. (optional)
    desktopYN := true // bool | Indicator if device type is mobile or desktop. (optional)
    registerAddress := "registerAddress_example" // string | The address which the Cash Register ID ( Device ID ) is associated with. (optional)
    deviceValue := "deviceValue_example" // string | External device Value. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigAPI.GetExternalDeviceConfigurations(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).Active(active).Id(id).IdEditable(idEditable).Label(label).DeviceType(deviceType).DeviceCode(deviceCode).DeviceArea(deviceArea).DisplayName(displayName).MobileYN(mobileYN).DesktopYN(desktopYN).RegisterAddress(registerAddress).DeviceValue(deviceValue).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigAPI.GetExternalDeviceConfigurations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetExternalDeviceConfigurations`: FetchedExternalDeviceConfigurations
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigAPI.GetExternalDeviceConfigurations`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetExternalDeviceConfigurationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **string** |  | 
 **active** | **bool** | Flag that indicates whether the device is active. | 
 **id** | **string** |  | 
 **idEditable** | **bool** |  | 
 **label** | **string** |  | 
 **deviceType** | **string** |  | 
 **deviceCode** | **string** |  | 
 **deviceArea** | **string** | The area where the device is installed | 
 **displayName** | **string** | External device display name. | 
 **mobileYN** | **bool** | Indicator if device type is mobile or desktop. | 
 **desktopYN** | **bool** | Indicator if device type is mobile or desktop. | 
 **registerAddress** | **string** | The address which the Cash Register ID ( Device ID ) is associated with. | 
 **deviceValue** | **string** | External device Value. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FetchedExternalDeviceConfigurations**](FetchedExternalDeviceConfigurations.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetHotelInterfaceControllerRegistry

> FetchedHotelInterfaceControllerRegistry GetHotelInterfaceControllerRegistry(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Machine(machine).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch hotel interface controller registry.



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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    machine := "machine_example" // string | Used for Character Strings, length 0 to 40. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigAPI.GetHotelInterfaceControllerRegistry(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Machine(machine).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigAPI.GetHotelInterfaceControllerRegistry``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetHotelInterfaceControllerRegistry`: FetchedHotelInterfaceControllerRegistry
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigAPI.GetHotelInterfaceControllerRegistry`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetHotelInterfaceControllerRegistryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **machine** | **string** | Used for Character Strings, length 0 to 40. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FetchedHotelInterfaceControllerRegistry**](FetchedHotelInterfaceControllerRegistry.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetHotelInterfaceDetails

> FetchedHotelInterfaceDetails GetHotelInterfaceDetails(ctx, logo, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch hotel interface details.



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
    logo := "logo_example" // string | OPERA Id for Logo
    hotelId := "hotelId_example" // string | OPERA Id for Property
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Transaction codes of a Hotel Interface. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigAPI.GetHotelInterfaceDetails(context.Background(), logo, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigAPI.GetHotelInterfaceDetails``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetHotelInterfaceDetails`: FetchedHotelInterfaceDetails
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigAPI.GetHotelInterfaceDetails`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**logo** | **string** | OPERA Id for Logo | 
**hotelId** | **string** | OPERA Id for Property | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetHotelInterfaceDetailsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fetchInstructions** | **[]string** | Transaction codes of a Hotel Interface. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FetchedHotelInterfaceDetails**](FetchedHotelInterfaceDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetHotelInterfaceErrors

> FetchedHotelInterfaceErrors GetHotelInterfaceErrors(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).HotelIds(hotelIds).InterfaceTypes(interfaceTypes).LogoCodes(logoCodes).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch hotel interface errors.



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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    hotelIds := []string{"Inner_example"} // []string |  (optional)
    interfaceTypes := []string{"InterfaceTypes_example"} // []string | XML Posting Interface (optional)
    logoCodes := []string{"Inner_example"} // []string |  (optional)
    includeInactive := true // bool | If true this will set the criteria to include inactive records. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigAPI.GetHotelInterfaceErrors(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).HotelIds(hotelIds).InterfaceTypes(interfaceTypes).LogoCodes(logoCodes).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigAPI.GetHotelInterfaceErrors``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetHotelInterfaceErrors`: FetchedHotelInterfaceErrors
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigAPI.GetHotelInterfaceErrors`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetHotelInterfaceErrorsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **hotelIds** | **[]string** |  | 
 **interfaceTypes** | **[]string** | XML Posting Interface | 
 **logoCodes** | **[]string** |  | 
 **includeInactive** | **bool** | If true this will set the criteria to include inactive records. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FetchedHotelInterfaceErrors**](FetchedHotelInterfaceErrors.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetHotelInterfaceFailedMessages

> FetchedHotelInterfaceFailedMessages GetHotelInterfaceFailedMessages(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).HotelIds(hotelIds).InterfaceTypes(interfaceTypes).LogoCodes(logoCodes).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch hotel interface failed messages.



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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    hotelIds := []string{"Inner_example"} // []string |  (optional)
    interfaceTypes := []string{"InterfaceTypes_example"} // []string | XML Posting Interface (optional)
    logoCodes := []string{"Inner_example"} // []string |  (optional)
    includeInactive := true // bool | If true this will set the criteria to include inactive records. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigAPI.GetHotelInterfaceFailedMessages(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).HotelIds(hotelIds).InterfaceTypes(interfaceTypes).LogoCodes(logoCodes).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigAPI.GetHotelInterfaceFailedMessages``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetHotelInterfaceFailedMessages`: FetchedHotelInterfaceFailedMessages
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigAPI.GetHotelInterfaceFailedMessages`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetHotelInterfaceFailedMessagesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **hotelIds** | **[]string** |  | 
 **interfaceTypes** | **[]string** | XML Posting Interface | 
 **logoCodes** | **[]string** |  | 
 **includeInactive** | **bool** | If true this will set the criteria to include inactive records. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FetchedHotelInterfaceFailedMessages**](FetchedHotelInterfaceFailedMessages.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetHotelInterfaceSchemas

> FetchedHotelInterfaceSchemas GetHotelInterfaceSchemas(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).HotelIds(hotelIds).InterfaceTypes(interfaceTypes).LogoCodes(logoCodes).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch hotel interface schemas.



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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    hotelIds := []string{"Inner_example"} // []string |  (optional)
    interfaceTypes := []string{"InterfaceTypes_example"} // []string | XML Posting Interface (optional)
    logoCodes := []string{"Inner_example"} // []string |  (optional)
    includeInactive := true // bool | If true this will set the criteria to include inactive records. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigAPI.GetHotelInterfaceSchemas(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).HotelIds(hotelIds).InterfaceTypes(interfaceTypes).LogoCodes(logoCodes).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigAPI.GetHotelInterfaceSchemas``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetHotelInterfaceSchemas`: FetchedHotelInterfaceSchemas
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigAPI.GetHotelInterfaceSchemas`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetHotelInterfaceSchemasRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **hotelIds** | **[]string** |  | 
 **interfaceTypes** | **[]string** | XML Posting Interface | 
 **logoCodes** | **[]string** |  | 
 **includeInactive** | **bool** | If true this will set the criteria to include inactive records. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FetchedHotelInterfaceSchemas**](FetchedHotelInterfaceSchemas.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetHotelInterfaces

> FetchedHotelInterfaces GetHotelInterfaces(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).InterfaceTypes(interfaceTypes).LogosCodes(logosCodes).IncludeInactive(includeInactive).IncludeOutboundCode(includeOutboundCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelIds := []string{"Inner_example"} // []string |  (optional)
    interfaceTypes := []string{"InterfaceTypes_example"} // []string | XML Posting Interface (optional)
    logosCodes := []string{"Inner_example"} // []string |  (optional)
    includeInactive := true // bool | If true this will set the criteria to include inactive records. (optional)
    includeOutboundCode := true // bool | If true this will set the criteria to include interfaces that are configured to use outbound code. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigAPI.GetHotelInterfaces(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).InterfaceTypes(interfaceTypes).LogosCodes(logosCodes).IncludeInactive(includeInactive).IncludeOutboundCode(includeOutboundCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigAPI.GetHotelInterfaces``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetHotelInterfaces`: FetchedHotelInterfaces
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigAPI.GetHotelInterfaces`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetHotelInterfacesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelIds** | **[]string** |  | 
 **interfaceTypes** | **[]string** | XML Posting Interface | 
 **logosCodes** | **[]string** |  | 
 **includeInactive** | **bool** | If true this will set the criteria to include inactive records. | 
 **includeOutboundCode** | **bool** | If true this will set the criteria to include interfaces that are configured to use outbound code. | 
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


## GetInterfaceMachines

> []InterfaceMachineType GetInterfaceMachines(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch interface machines.



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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigAPI.GetInterfaceMachines(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigAPI.GetInterfaceMachines``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetInterfaceMachines`: []InterfaceMachineType
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigAPI.GetInterfaceMachines`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetInterfaceMachinesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**[]InterfaceMachineType**](InterfaceMachineType.md)

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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
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
    resp, r, err := apiClient.ExternalSystemsConfigAPI.GetInterfaceRights(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).Id(id).IdExtension(idExtension).IdContext(idContext).Type_(type_).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigAPI.GetInterfaceRights``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetInterfaceRights`: []InterfaceRightType
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigAPI.GetInterfaceRights`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetInterfaceRightsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
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


## GetInterfaceRoomStatuses

> []InterfaceRoomStatusType GetInterfaceRoomStatuses(ctx, interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch interface room statuses.



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
    interfaceId := "interfaceId_example" // string | OPERA id for Property
    hotelId := "hotelId_example" // string | OPERA id for Property
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigAPI.GetInterfaceRoomStatuses(context.Background(), interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigAPI.GetInterfaceRoomStatuses``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetInterfaceRoomStatuses`: []InterfaceRoomStatusType
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigAPI.GetInterfaceRoomStatuses`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**interfaceId** | **string** | OPERA id for Property | 
**hotelId** | **string** | OPERA id for Property | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetInterfaceRoomStatusesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**[]InterfaceRoomStatusType**](InterfaceRoomStatusType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetInterfaceRooms

> []InterfaceRoomType GetInterfaceRooms(ctx, interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FromRoom(fromRoom).ToRoom(toRoom).FromLineType(fromLineType).ToLineType(toLineType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch interface rooms.



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
    interfaceId := "interfaceId_example" // string | OPERA Id for Logo
    hotelId := "hotelId_example" // string | OPERA Id for Property
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fromRoom := "fromRoom_example" // string | From Room Number (optional)
    toRoom := "toRoom_example" // string | To Room Number (optional)
    fromLineType := "fromLineType_example" // string | From Line Type (optional)
    toLineType := "toLineType_example" // string | To Line Type (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigAPI.GetInterfaceRooms(context.Background(), interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FromRoom(fromRoom).ToRoom(toRoom).FromLineType(fromLineType).ToLineType(toLineType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigAPI.GetInterfaceRooms``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetInterfaceRooms`: []InterfaceRoomType
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigAPI.GetInterfaceRooms`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**interfaceId** | **string** | OPERA Id for Logo | 
**hotelId** | **string** | OPERA Id for Property | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetInterfaceRoomsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fromRoom** | **string** | From Room Number | 
 **toRoom** | **string** | To Room Number | 
 **fromLineType** | **string** | From Line Type | 
 **toLineType** | **string** | To Line Type | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**[]InterfaceRoomType**](InterfaceRoomType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetInterfaceUnitCharges

> FetchedInterfaceUnitCharges GetInterfaceUnitCharges(ctx, interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Logo(logo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch interface unit charges.



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
    interfaceId := "interfaceId_example" // string | OPERA id for Property
    hotelId := "hotelId_example" // string | OPERA id for Property
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    logo := "logo_example" // string | Hotel Interface Logo. On the database, this is also referred as DBF Logo. This is a three letter code followed by an underscore(_). This tells us which DBF files and log files with the prefix that IFC7 is going to create. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigAPI.GetInterfaceUnitCharges(context.Background(), interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Logo(logo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigAPI.GetInterfaceUnitCharges``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetInterfaceUnitCharges`: FetchedInterfaceUnitCharges
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigAPI.GetInterfaceUnitCharges`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**interfaceId** | **string** | OPERA id for Property | 
**hotelId** | **string** | OPERA id for Property | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetInterfaceUnitChargesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **logo** | **string** | Hotel Interface Logo. On the database, this is also referred as DBF Logo. This is a three letter code followed by an underscore(_). This tells us which DBF files and log files with the prefix that IFC7 is going to create. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FetchedInterfaceUnitCharges**](FetchedInterfaceUnitCharges.md)

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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigAPI.GetPublishers(context.Background(), externalSystemCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigAPI.GetPublishers``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPublishers`: FetchedPublishers
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigAPI.GetPublishers`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    type_ := "type__example" // string | A reference to the type of object defined by the Type for Reservation and Profile Type. (optional)
    uDFName := "uDFName_example" // string | Name of the user-defined function (UDF) field. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigAPI.GetUDFMappings(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Type_(type_).UDFName(uDFName).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigAPI.GetUDFMappings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetUDFMappings`: FetchedUDFMappings
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigAPI.GetUDFMappings`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetUDFMappingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
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


## ImportInterfaceRooms

> Status ImportInterfaceRooms(ctx, interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ImportInterfaceRooms(importInterfaceRooms).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to import interface rooms.



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
    interfaceId := "interfaceId_example" // string | OPERA Id for Logo
    hotelId := "hotelId_example" // string | OPERA Id for Property
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    importInterfaceRooms := *openapiclient.NewImportInterfaceRooms() // ImportInterfaceRooms | Request object for importing the Interface Rooms for a Hotel Interface record.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigAPI.ImportInterfaceRooms(context.Background(), interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ImportInterfaceRooms(importInterfaceRooms).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigAPI.ImportInterfaceRooms``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ImportInterfaceRooms`: Status
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigAPI.ImportInterfaceRooms`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**interfaceId** | **string** | OPERA Id for Logo | 
**hotelId** | **string** | OPERA Id for Property | 

### Other Parameters

Other parameters are passed through a pointer to a apiImportInterfaceRoomsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **importInterfaceRooms** | [**ImportInterfaceRooms**](ImportInterfaceRooms.md) | Request object for importing the Interface Rooms for a Hotel Interface record. | 
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


## Ping

> OperaVersion Ping(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to ping.



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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigAPI.Ping(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigAPI.Ping``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `Ping`: OperaVersion
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigAPI.Ping`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**OperaVersion**](OperaVersion.md)

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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    createDeliveryMethods := *openapiclient.NewCreateDeliveryMethods() // CreateDeliveryMethods | Request to create the delivery method for a property/HUB/Chain and its configurations.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigAPI.PostDeliveryMethods(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreateDeliveryMethods(createDeliveryMethods).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigAPI.PostDeliveryMethods``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostDeliveryMethods`: Status
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigAPI.PostDeliveryMethods`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostDeliveryMethodsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **createDeliveryMethods** | [**CreateDeliveryMethods**](CreateDeliveryMethods.md) | Request to create the delivery method for a property/HUB/Chain and its configurations. | 
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


## PostHotelInterface

> Status PostHotelInterface(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelInterface(hotelInterface).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create hotel interface.



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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelInterface := *openapiclient.NewHotelInterface() // HotelInterface | Request object for creating a new Hotel Interface.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigAPI.PostHotelInterface(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelInterface(hotelInterface).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigAPI.PostHotelInterface``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostHotelInterface`: Status
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigAPI.PostHotelInterface`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostHotelInterfaceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelInterface** | [**HotelInterface**](HotelInterface.md) | Request object for creating a new Hotel Interface. | 
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


## PostInterfaceAccount

> Status PostInterfaceAccount(ctx, interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreateInterfaceAccount(createInterfaceAccount).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create interface account.



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
    interfaceId := "interfaceId_example" // string | OPERA Id for Logo
    hotelId := "hotelId_example" // string | OPERA Id for Property
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    createInterfaceAccount := *openapiclient.NewCreateInterfaceAccount() // CreateInterfaceAccount | Request object for creating an Interface Account of a Hotel Interface record.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigAPI.PostInterfaceAccount(context.Background(), interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreateInterfaceAccount(createInterfaceAccount).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigAPI.PostInterfaceAccount``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostInterfaceAccount`: Status
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigAPI.PostInterfaceAccount`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**interfaceId** | **string** | OPERA Id for Logo | 
**hotelId** | **string** | OPERA Id for Property | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostInterfaceAccountRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **createInterfaceAccount** | [**CreateInterfaceAccount**](CreateInterfaceAccount.md) | Request object for creating an Interface Account of a Hotel Interface record. | 
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


## PostInterfaceRoom

> Status PostInterfaceRoom(ctx, interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreateInterfaceRoom(createInterfaceRoom).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create interface room.



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
    interfaceId := "interfaceId_example" // string | OPERA Id for Logo
    hotelId := "hotelId_example" // string | OPERA Id for Property
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    createInterfaceRoom := *openapiclient.NewCreateInterfaceRoom() // CreateInterfaceRoom | Request object for creating an Interface Room of a Hotel Interface record.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigAPI.PostInterfaceRoom(context.Background(), interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreateInterfaceRoom(createInterfaceRoom).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigAPI.PostInterfaceRoom``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostInterfaceRoom`: Status
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigAPI.PostInterfaceRoom`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**interfaceId** | **string** | OPERA Id for Logo | 
**hotelId** | **string** | OPERA Id for Property | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostInterfaceRoomRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **createInterfaceRoom** | [**CreateInterfaceRoom**](CreateInterfaceRoom.md) | Request object for creating an Interface Room of a Hotel Interface record. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    createPublishers := *openapiclient.NewCreatePublishers() // CreatePublishers | Request to create publishers.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigAPI.PostPublishers(context.Background(), hotelId, externalSystemCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreatePublishers(createPublishers).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigAPI.PostPublishers``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostPublishers`: Status
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigAPI.PostPublishers`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **createPublishers** | [**CreatePublishers**](CreatePublishers.md) | Request to create publishers. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    changeDeliveryMethods := *openapiclient.NewChangeDeliveryMethods() // ChangeDeliveryMethods | Request to change the delivery method for a property/HUB/Chain and its configurations.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigAPI.PutDeliveryMethods(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeDeliveryMethods(changeDeliveryMethods).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigAPI.PutDeliveryMethods``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutDeliveryMethods`: ChangedDeliveryMethods
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigAPI.PutDeliveryMethods`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutDeliveryMethodsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **changeDeliveryMethods** | [**ChangeDeliveryMethods**](ChangeDeliveryMethods.md) | Request to change the delivery method for a property/HUB/Chain and its configurations. | 
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


## PutExternalDeviceConfigurations

> ChangedExternalDeviceConfigurations PutExternalDeviceConfigurations(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeExternalDeviceConfigurations(changeExternalDeviceConfigurations).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change external device configurations.



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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    changeExternalDeviceConfigurations := *openapiclient.NewChangeExternalDeviceConfigurations() // ChangeExternalDeviceConfigurations | Request to change the external device activated for the hotel and its configurations.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigAPI.PutExternalDeviceConfigurations(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeExternalDeviceConfigurations(changeExternalDeviceConfigurations).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigAPI.PutExternalDeviceConfigurations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutExternalDeviceConfigurations`: ChangedExternalDeviceConfigurations
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigAPI.PutExternalDeviceConfigurations`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutExternalDeviceConfigurationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **changeExternalDeviceConfigurations** | [**ChangeExternalDeviceConfigurations**](ChangeExternalDeviceConfigurations.md) | Request to change the external device activated for the hotel and its configurations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChangedExternalDeviceConfigurations**](ChangedExternalDeviceConfigurations.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutHotelInterface

> Status PutHotelInterface(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelInterface(hotelInterface).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change hotel interface.



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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelInterface := *openapiclient.NewHotelInterface() // HotelInterface | Request object for updating a Hotel Interface.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigAPI.PutHotelInterface(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelInterface(hotelInterface).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigAPI.PutHotelInterface``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutHotelInterface`: Status
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigAPI.PutHotelInterface`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutHotelInterfaceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelInterface** | [**HotelInterface**](HotelInterface.md) | Request object for updating a Hotel Interface. | 
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


## PutInterfaceAccount

> ChangedInterfaceAccount PutInterfaceAccount(ctx, accountId, interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeInterfaceAccount(changeInterfaceAccount).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change interface account.



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
    accountId := "accountId_example" // string | OPERA Id for Account
    interfaceId := "interfaceId_example" // string | OPERA Id for Logo
    hotelId := "hotelId_example" // string | OPERA Id for Property
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    changeInterfaceAccount := *openapiclient.NewChangeInterfaceAccount() // ChangeInterfaceAccount | Request object for updating an Interface Account of a Hotel Interface record.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigAPI.PutInterfaceAccount(context.Background(), accountId, interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeInterfaceAccount(changeInterfaceAccount).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigAPI.PutInterfaceAccount``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutInterfaceAccount`: ChangedInterfaceAccount
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigAPI.PutInterfaceAccount`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**accountId** | **string** | OPERA Id for Account | 
**interfaceId** | **string** | OPERA Id for Logo | 
**hotelId** | **string** | OPERA Id for Property | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutInterfaceAccountRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **changeInterfaceAccount** | [**ChangeInterfaceAccount**](ChangeInterfaceAccount.md) | Request object for updating an Interface Account of a Hotel Interface record. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChangedInterfaceAccount**](ChangedInterfaceAccount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutInterfaceMachine

> ChangedInterfaceMachine PutInterfaceMachine(ctx, machineId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeInterfaceMachine(changeInterfaceMachine).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change interface machine.



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
    machineId := "machineId_example" // string | OPERA Id for machine
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    changeInterfaceMachine := *openapiclient.NewChangeInterfaceMachine() // ChangeInterfaceMachine | Request object for updating a Hotel Interface Machine. If it does not exist, then creates the Hotel Interface Machine.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigAPI.PutInterfaceMachine(context.Background(), machineId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeInterfaceMachine(changeInterfaceMachine).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigAPI.PutInterfaceMachine``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutInterfaceMachine`: ChangedInterfaceMachine
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigAPI.PutInterfaceMachine`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**machineId** | **string** | OPERA Id for machine | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutInterfaceMachineRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **changeInterfaceMachine** | [**ChangeInterfaceMachine**](ChangeInterfaceMachine.md) | Request object for updating a Hotel Interface Machine. If it does not exist, then creates the Hotel Interface Machine. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChangedInterfaceMachine**](ChangedInterfaceMachine.md)

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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    changeInterfaceRight := *openapiclient.NewChangeInterfaceRight() // ChangeInterfaceRight | Request object for updating a Hotel Interface Right. It will create the Hotel Interface Right if it does not exist on the database.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigAPI.PutInterfaceRight(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeInterfaceRight(changeInterfaceRight).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigAPI.PutInterfaceRight``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutInterfaceRight`: ChangedInterfaceRight
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigAPI.PutInterfaceRight`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutInterfaceRightRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **changeInterfaceRight** | [**ChangeInterfaceRight**](ChangeInterfaceRight.md) | Request object for updating a Hotel Interface Right. It will create the Hotel Interface Right if it does not exist on the database. | 
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


## PutInterfaceRoom

> ChangedInterfaceRoom PutInterfaceRoom(ctx, roomId, interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeInterfaceRoom(changeInterfaceRoom).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change interface room.



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
    roomId := "roomId_example" // string | 
    interfaceId := "interfaceId_example" // string | OPERA Id for Logo
    hotelId := "hotelId_example" // string | OPERA Id for Property
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    changeInterfaceRoom := *openapiclient.NewChangeInterfaceRoom() // ChangeInterfaceRoom | Request object for updating an Interface Room of a Hotel Interface record.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigAPI.PutInterfaceRoom(context.Background(), roomId, interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeInterfaceRoom(changeInterfaceRoom).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigAPI.PutInterfaceRoom``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutInterfaceRoom`: ChangedInterfaceRoom
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigAPI.PutInterfaceRoom`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**roomId** | **string** |  | 
**interfaceId** | **string** | OPERA Id for Logo | 
**hotelId** | **string** | OPERA Id for Property | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutInterfaceRoomRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **changeInterfaceRoom** | [**ChangeInterfaceRoom**](ChangeInterfaceRoom.md) | Request object for updating an Interface Room of a Hotel Interface record. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChangedInterfaceRoom**](ChangedInterfaceRoom.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutInterfaceRoomStatus

> ChangedInterfaceRoomStatus PutInterfaceRoomStatus(ctx, interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeInterfaceRoomStatus(changeInterfaceRoomStatus).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change interface room status.



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
    interfaceId := "interfaceId_example" // string | OPERA id for Property
    hotelId := "hotelId_example" // string | OPERA id for Property
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    changeInterfaceRoomStatus := *openapiclient.NewChangeInterfaceRoomStatus() // ChangeInterfaceRoomStatus | Request object for updating a Hotel Interface Room Status. If it does not exist, then creates the Hotel Interface Room Status.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigAPI.PutInterfaceRoomStatus(context.Background(), interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeInterfaceRoomStatus(changeInterfaceRoomStatus).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigAPI.PutInterfaceRoomStatus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutInterfaceRoomStatus`: ChangedInterfaceRoomStatus
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigAPI.PutInterfaceRoomStatus`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**interfaceId** | **string** | OPERA id for Property | 
**hotelId** | **string** | OPERA id for Property | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutInterfaceRoomStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **changeInterfaceRoomStatus** | [**ChangeInterfaceRoomStatus**](ChangeInterfaceRoomStatus.md) | Request object for updating a Hotel Interface Room Status. If it does not exist, then creates the Hotel Interface Room Status. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChangedInterfaceRoomStatus**](ChangedInterfaceRoomStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutInterfaceUnitCharges

> ChangedInterfaceUnitCharges PutInterfaceUnitCharges(ctx, interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeInterfaceUnitCharges(changeInterfaceUnitCharges).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change interface unit charges.



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
    interfaceId := "interfaceId_example" // string | OPERA id for Property
    hotelId := "hotelId_example" // string | OPERA id for Property
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    changeInterfaceUnitCharges := *openapiclient.NewChangeInterfaceUnitCharges() // ChangeInterfaceUnitCharges | Request object for updating Hotel Interface Unit Charges.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigAPI.PutInterfaceUnitCharges(context.Background(), interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeInterfaceUnitCharges(changeInterfaceUnitCharges).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigAPI.PutInterfaceUnitCharges``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutInterfaceUnitCharges`: ChangedInterfaceUnitCharges
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigAPI.PutInterfaceUnitCharges`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**interfaceId** | **string** | OPERA id for Property | 
**hotelId** | **string** | OPERA id for Property | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutInterfaceUnitChargesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **changeInterfaceUnitCharges** | [**ChangeInterfaceUnitCharges**](ChangeInterfaceUnitCharges.md) | Request object for updating Hotel Interface Unit Charges. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChangedInterfaceUnitCharges**](ChangedInterfaceUnitCharges.md)

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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    changeUDFMapping := *openapiclient.NewChangeUDFMapping() // ChangeUDFMapping | Self-contained Request object that is used when Updating UDFMapping.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExternalSystemsConfigAPI.PutUDFMapping(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeUDFMapping(changeUDFMapping).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExternalSystemsConfigAPI.PutUDFMapping``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutUDFMapping`: ChangedUDFMapping
    fmt.Fprintf(os.Stdout, "Response from `ExternalSystemsConfigAPI.PutUDFMapping`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutUDFMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **changeUDFMapping** | [**ChangeUDFMapping**](ChangeUDFMapping.md) | Self-contained Request object that is used when Updating UDFMapping. | 
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

