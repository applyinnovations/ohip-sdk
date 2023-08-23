# \OperaContentApi

All URIs are relative to */med/config/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**EmailFolioReport**](OperaContentApi.md#EmailFolioReport) | **Post** /folioReports/email | Email folio report
[**GetCustomizedLetter**](OperaContentApi.md#GetCustomizedLetter) | **Get** /customizedLetter/{letterId} | Get customized letter
[**GetEmailFile**](OperaContentApi.md#GetEmailFile) | **Get** /emailFile/{emailId} | Get Email Blob File
[**GetFileAttachment**](OperaContentApi.md#GetFileAttachment) | **Get** /fileAttachments | Get file attachment
[**GetFolioReport**](OperaContentApi.md#GetFolioReport) | **Get** /hotels/{hotelId}/reservations/{reservationId}/folioReports | Get folio report
[**GetImage**](OperaContentApi.md#GetImage) | **Get** /images | Get image
[**GetRegistrationCard**](OperaContentApi.md#GetRegistrationCard) | **Get** /hotels/{hotelId}/reservations/{reservationId}/registrationCard | Get registration card
[**RemoveImage**](OperaContentApi.md#RemoveImage) | **Delete** /images | Delete image
[**SetCustomizedLetter**](OperaContentApi.md#SetCustomizedLetter) | **Put** /hotels/{hotelId}/reservations/{reservationId}/customizedLetter | Set customized letter
[**UploadFileAttachment**](OperaContentApi.md#UploadFileAttachment) | **Post** /fileAttachments | Upload a file attachment
[**UploadImage**](OperaContentApi.md#UploadImage) | **Post** /images | Upload an image



## EmailFolioReport

> Status EmailFolioReport(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FolioReportToEmail(folioReportToEmail).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Email folio report



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    folioReportToEmail := *openapiclient.NewEmailFolioReportRequest() // EmailFolioReportRequest | Request to generate and email a folio report.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaContentApi.EmailFolioReport(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FolioReportToEmail(folioReportToEmail).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaContentApi.EmailFolioReport``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `EmailFolioReport`: Status
    fmt.Fprintf(os.Stdout, "Response from `OperaContentApi.EmailFolioReport`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiEmailFolioReportRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **folioReportToEmail** | [**EmailFolioReportRequest**](EmailFolioReportRequest.md) | Request to generate and email a folio report. | 
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


## GetCustomizedLetter

> CustomizedLetter GetCustomizedLetter(ctx, letterId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).LetterIdContext(letterIdContext).LetterIdtype(letterIdtype).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get customized letter



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    letterId := "letterId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    letterIdContext := "letterIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    letterIdtype := "letterIdtype_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaContentApi.GetCustomizedLetter(context.Background(), letterId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).LetterIdContext(letterIdContext).LetterIdtype(letterIdtype).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaContentApi.GetCustomizedLetter``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCustomizedLetter`: CustomizedLetter
    fmt.Fprintf(os.Stdout, "Response from `OperaContentApi.GetCustomizedLetter`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**letterId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCustomizedLetterRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **letterIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **letterIdtype** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CustomizedLetter**](CustomizedLetter.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetEmailFile

> EmailFile GetEmailFile(ctx, emailId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Email Blob File



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    emailId := "emailId_example" // string | Unique OPERA Email ID which is used to find an Email BLOB File from OPERA. This ID is a primary identification of an email file in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaContentApi.GetEmailFile(context.Background(), emailId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaContentApi.GetEmailFile``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetEmailFile`: EmailFile
    fmt.Fprintf(os.Stdout, "Response from `OperaContentApi.GetEmailFile`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**emailId** | **string** | Unique OPERA Email ID which is used to find an Email BLOB File from OPERA. This ID is a primary identification of an email file in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetEmailFileRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**EmailFile**](EmailFile.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetFileAttachment

> *os.File GetFileAttachment(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Id(id).IdContext(idContext).IdType(idType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get file attachment



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    id := "id_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    idType := "idType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaContentApi.GetFileAttachment(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Id(id).IdContext(idContext).IdType(idType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaContentApi.GetFileAttachment``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFileAttachment`: *os.File
    fmt.Fprintf(os.Stdout, "Response from `OperaContentApi.GetFileAttachment`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetFileAttachmentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **id** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **idType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[***os.File**](File.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetFolioReport

> FolioReport GetFolioReport(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationIdContext(reservationIdContext).ReservationIdType(reservationIdType).FolioWindowNo(folioWindowNo).BillNumber(billNumber).FolioType(folioType).FolioDate(folioDate).ReferenceCurrency(referenceCurrency).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get folio report



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservationIdContext := "reservationIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    reservationIdType := "reservationIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    folioWindowNo := int32(56) // int32 | Folio window number to generate (defaults to view 1). (optional)
    billNumber := int32(56) // int32 | Optional bill number to generate. (optional)
    folioType := "folioType_example" // string | Optional folio type. (optional)
    folioDate := time.Now() // string | Optional folio generation date - defaults to hotel business date. (optional)
    referenceCurrency := "referenceCurrency_example" // string | Folio currency code. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaContentApi.GetFolioReport(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationIdContext(reservationIdContext).ReservationIdType(reservationIdType).FolioWindowNo(folioWindowNo).BillNumber(billNumber).FolioType(folioType).FolioDate(folioDate).ReferenceCurrency(referenceCurrency).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaContentApi.GetFolioReport``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFolioReport`: FolioReport
    fmt.Fprintf(os.Stdout, "Response from `OperaContentApi.GetFolioReport`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetFolioReportRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservationIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **reservationIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **folioWindowNo** | **int32** | Folio window number to generate (defaults to view 1). | 
 **billNumber** | **int32** | Optional bill number to generate. | 
 **folioType** | **string** | Optional folio type. | 
 **folioDate** | **string** | Optional folio generation date - defaults to hotel business date. | 
 **referenceCurrency** | **string** | Folio currency code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FolioReport**](FolioReport.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetImage

> Image GetImage(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).LinkId(linkId).LinkIdContext(linkIdContext).LinkIdType(linkIdType).ImageCode(imageCode).ImageParameterCode(imageParameterCode).ImageParameterValue(imageParameterValue).LanguageCode(languageCode).ImageStyle(imageStyle).ImageId(imageId).ImageIdContext(imageIdContext).ImageIdType(imageIdType).Base64(base64).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get image



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    linkId := "linkId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    linkIdContext := "linkIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    linkIdType := "linkIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    imageCode := "imageCode_example" // string |  (optional)
    imageParameterCode := []string{"ImageParameterCode_example"} // []string |  (optional)
    imageParameterValue := []string{"Inner_example"} // []string | Image parameter value. (optional)
    languageCode := "languageCode_example" // string |  (optional)
    imageStyle := "imageStyle_example" // string | An enumeration of image styles. (optional)
    imageId := "imageId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    imageIdContext := "imageIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    imageIdType := "imageIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    base64 := true // bool | True if the image to be returned as a base64String else if the image to be returned as the binary in MTOM attachment then false . (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaContentApi.GetImage(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).LinkId(linkId).LinkIdContext(linkIdContext).LinkIdType(linkIdType).ImageCode(imageCode).ImageParameterCode(imageParameterCode).ImageParameterValue(imageParameterValue).LanguageCode(languageCode).ImageStyle(imageStyle).ImageId(imageId).ImageIdContext(imageIdContext).ImageIdType(imageIdType).Base64(base64).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaContentApi.GetImage``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetImage`: Image
    fmt.Fprintf(os.Stdout, "Response from `OperaContentApi.GetImage`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetImageRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **linkId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **linkIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **linkIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **imageCode** | **string** |  | 
 **imageParameterCode** | **[]string** |  | 
 **imageParameterValue** | **[]string** | Image parameter value. | 
 **languageCode** | **string** |  | 
 **imageStyle** | **string** | An enumeration of image styles. | 
 **imageId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **imageIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **imageIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **base64** | **bool** | True if the image to be returned as a base64String else if the image to be returned as the binary in MTOM attachment then false . | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Image**](Image.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRegistrationCard

> RegistrationCard GetRegistrationCard(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationIdContext(reservationIdContext).ReservationIdType(reservationIdType).Regenerate(regenerate).SignedOnly(signedOnly).Language(language).Template(template).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get registration card



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservationIdContext := "reservationIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    reservationIdType := "reservationIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    regenerate := true // bool | Flag indicating whether a new registration card should be generated even if a signed card already exists. (optional)
    signedOnly := true // bool | Flag indicating whether return only the signed registrationCard if present. (optional)
    language := "language_example" // string | Optional language code to use for registration card generation. Default guest language will be applied if not specified. (optional)
    template := "template_example" // string | Optional registration card template code to use for registration card generation. Default template will be applied if not specified. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaContentApi.GetRegistrationCard(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationIdContext(reservationIdContext).ReservationIdType(reservationIdType).Regenerate(regenerate).SignedOnly(signedOnly).Language(language).Template(template).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaContentApi.GetRegistrationCard``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRegistrationCard`: RegistrationCard
    fmt.Fprintf(os.Stdout, "Response from `OperaContentApi.GetRegistrationCard`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRegistrationCardRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservationIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **reservationIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **regenerate** | **bool** | Flag indicating whether a new registration card should be generated even if a signed card already exists. | 
 **signedOnly** | **bool** | Flag indicating whether return only the signed registrationCard if present. | 
 **language** | **string** | Optional language code to use for registration card generation. Default guest language will be applied if not specified. | 
 **template** | **string** | Optional registration card template code to use for registration card generation. Default template will be applied if not specified. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RegistrationCard**](RegistrationCard.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RemoveImage

> Status RemoveImage(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ImageCode(imageCode).ImageSet(imageSet).ImageId(imageId).ImageIdContext(imageIdContext).ImageIdType(imageIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete image



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    imageCode := "imageCode_example" // string |  (optional)
    imageSet := "imageSet_example" // string | Used for Character Strings, length 0 to 800. (optional)
    imageId := "imageId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    imageIdContext := "imageIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    imageIdType := "imageIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaContentApi.RemoveImage(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ImageCode(imageCode).ImageSet(imageSet).ImageId(imageId).ImageIdContext(imageIdContext).ImageIdType(imageIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaContentApi.RemoveImage``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveImage`: Status
    fmt.Fprintf(os.Stdout, "Response from `OperaContentApi.RemoveImage`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiRemoveImageRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **imageCode** | **string** |  | 
 **imageSet** | **string** | Used for Character Strings, length 0 to 800. | 
 **imageId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **imageIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **imageIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
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


## SetCustomizedLetter

> CustomizedLetterStatus SetCustomizedLetter(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CustomizedLetter(customizedLetter).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Set customized letter



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    customizedLetter := *openapiclient.NewSetCustomizedLetterRequest() // SetCustomizedLetterRequest | Request to save customized letter.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaContentApi.SetCustomizedLetter(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CustomizedLetter(customizedLetter).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaContentApi.SetCustomizedLetter``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetCustomizedLetter`: CustomizedLetterStatus
    fmt.Fprintf(os.Stdout, "Response from `OperaContentApi.SetCustomizedLetter`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiSetCustomizedLetterRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **customizedLetter** | [**SetCustomizedLetterRequest**](SetCustomizedLetterRequest.md) | Request to save customized letter. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CustomizedLetterStatus**](CustomizedLetterStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UploadFileAttachment

> Status UploadFileAttachment(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FileToUpload(fileToUpload).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Upload a file attachment



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fileToUpload := *openapiclient.NewUploadFileAttachmentRequest() // UploadFileAttachmentRequest | Request to upload a file attachment.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaContentApi.UploadFileAttachment(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FileToUpload(fileToUpload).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaContentApi.UploadFileAttachment``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UploadFileAttachment`: Status
    fmt.Fprintf(os.Stdout, "Response from `OperaContentApi.UploadFileAttachment`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUploadFileAttachmentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fileToUpload** | [**UploadFileAttachmentRequest**](UploadFileAttachmentRequest.md) | Request to upload a file attachment. | 
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


## UploadImage

> Status UploadImage(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ImageToUpload(imageToUpload).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Upload an image



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    imageToUpload := *openapiclient.NewUploadImageRequest() // UploadImageRequest | Request to upload an image.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaContentApi.UploadImage(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ImageToUpload(imageToUpload).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaContentApi.UploadImage``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UploadImage`: Status
    fmt.Fprintf(os.Stdout, "Response from `OperaContentApi.UploadImage`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUploadImageRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **imageToUpload** | [**UploadImageRequest**](UploadImageRequest.md) | Request to upload an image. | 
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

