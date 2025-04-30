# \OperaContentAPI

All URIs are relative to */med/config/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**EmailFolioReport**](OperaContentAPI.md#EmailFolioReport) | **Post** /folioReports/email | Create email folio report
[**GetCustomizedLetter**](OperaContentAPI.md#GetCustomizedLetter) | **Get** /customizedLetter/{letterId} | Return customized letter
[**GetEmailFile**](OperaContentAPI.md#GetEmailFile) | **Get** /emailFile/{emailId} | Return email blob file
[**GetFileAttachment**](OperaContentAPI.md#GetFileAttachment) | **Get** /fileAttachments | Return file attachment
[**GetFolioReport**](OperaContentAPI.md#GetFolioReport) | **Get** /hotels/{hotelId}/reservations/{reservationId}/folioReports | Return folio report
[**GetImage**](OperaContentAPI.md#GetImage) | **Get** /images | Return image
[**GetRegistrationCard**](OperaContentAPI.md#GetRegistrationCard) | **Get** /hotels/{hotelId}/reservations/{reservationId}/registrationCard | Return registration card
[**RemoveImage**](OperaContentAPI.md#RemoveImage) | **Delete** /images | Delete image
[**SetCustomizedLetter**](OperaContentAPI.md#SetCustomizedLetter) | **Put** /hotels/{hotelId}/reservations/{reservationId}/customizedLetter | Update customized letter
[**UploadFileAttachment**](OperaContentAPI.md#UploadFileAttachment) | **Post** /fileAttachments | Upload a file attachment
[**UploadImage**](OperaContentAPI.md#UploadImage) | **Post** /images | Upload image



## EmailFolioReport

> Status EmailFolioReport(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FolioReportToEmail(folioReportToEmail).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create email folio report



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/medcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    folioReportToEmail := *openapiclient.NewFolioReportToEmail() // FolioReportToEmail | Request to generate and email a folio report.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaContentAPI.EmailFolioReport(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FolioReportToEmail(folioReportToEmail).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaContentAPI.EmailFolioReport``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `EmailFolioReport`: Status
    fmt.Fprintf(os.Stdout, "Response from `OperaContentAPI.EmailFolioReport`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiEmailFolioReportRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **folioReportToEmail** | [**FolioReportToEmail**](FolioReportToEmail.md) | Request to generate and email a folio report. | 
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

Return customized letter



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/medcfg"
)

func main() {
    letterId := "letterId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    letterIdContext := "letterIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    letterIdtype := "letterIdtype_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaContentAPI.GetCustomizedLetter(context.Background(), letterId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).LetterIdContext(letterIdContext).LetterIdtype(letterIdtype).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaContentAPI.GetCustomizedLetter``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCustomizedLetter`: CustomizedLetter
    fmt.Fprintf(os.Stdout, "Response from `OperaContentAPI.GetCustomizedLetter`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
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

Return email blob file



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/medcfg"
)

func main() {
    emailId := "emailId_example" // string | Unique OPERA Email ID which is used to find an Email BLOB File from OPERA. This ID is a primary identification of an email file in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaContentAPI.GetEmailFile(context.Background(), emailId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaContentAPI.GetEmailFile``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetEmailFile`: EmailFile
    fmt.Fprintf(os.Stdout, "Response from `OperaContentAPI.GetEmailFile`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
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

Return file attachment



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/medcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    id := "id_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    idType := "idType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaContentAPI.GetFileAttachment(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Id(id).IdContext(idContext).IdType(idType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaContentAPI.GetFileAttachment``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFileAttachment`: *os.File
    fmt.Fprintf(os.Stdout, "Response from `OperaContentAPI.GetFileAttachment`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetFileAttachmentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
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

Return folio report



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/medcfg"
)

func main() {
    reservationId := "reservationId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservationIdContext := "reservationIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    reservationIdType := "reservationIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    folioWindowNo := int32(56) // int32 | Folio window number to generate (defaults to view 1). (optional)
    billNumber := float32(8.14) // float32 | Optional bill number to generate. (optional)
    folioType := "folioType_example" // string | Optional folio type. (optional)
    folioDate := time.Now() // string | Optional folio generation date - defaults to hotel business date. (optional)
    referenceCurrency := "referenceCurrency_example" // string | Folio currency code. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaContentAPI.GetFolioReport(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationIdContext(reservationIdContext).ReservationIdType(reservationIdType).FolioWindowNo(folioWindowNo).BillNumber(billNumber).FolioType(folioType).FolioDate(folioDate).ReferenceCurrency(referenceCurrency).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaContentAPI.GetFolioReport``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFolioReport`: FolioReport
    fmt.Fprintf(os.Stdout, "Response from `OperaContentAPI.GetFolioReport`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservationIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **reservationIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **folioWindowNo** | **int32** | Folio window number to generate (defaults to view 1). | 
 **billNumber** | **float32** | Optional bill number to generate. | 
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

Return image



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/medcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    linkId := "linkId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    linkIdContext := "linkIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    linkIdType := "linkIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    imageCode := "imageCode_example" // string | An enumeration of image codes such as Logo, RoomType, InvItem (optional)
    imageParameterCode := []string{"ImageParameterCode_example"} // []string | An enumeration of image parameter codes such as Logo, RoomType, InvItem (optional)
    imageParameterValue := []string{"Inner_example"} // []string | Image parameter value. (optional)
    languageCode := "languageCode_example" // string | Unique Code of language. (optional)
    imageStyle := "imageStyle_example" // string | An enumeration of image styles. (optional)
    imageId := "imageId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    imageIdContext := "imageIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    imageIdType := "imageIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    base64 := true // bool | True if the image to be returned as a base64String else if the image to be returned as the binary in MTOM attachment then false . (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaContentAPI.GetImage(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).LinkId(linkId).LinkIdContext(linkIdContext).LinkIdType(linkIdType).ImageCode(imageCode).ImageParameterCode(imageParameterCode).ImageParameterValue(imageParameterValue).LanguageCode(languageCode).ImageStyle(imageStyle).ImageId(imageId).ImageIdContext(imageIdContext).ImageIdType(imageIdType).Base64(base64).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaContentAPI.GetImage``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetImage`: Image
    fmt.Fprintf(os.Stdout, "Response from `OperaContentAPI.GetImage`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetImageRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **linkId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **linkIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **linkIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **imageCode** | **string** | An enumeration of image codes such as Logo, RoomType, InvItem | 
 **imageParameterCode** | **[]string** | An enumeration of image parameter codes such as Logo, RoomType, InvItem | 
 **imageParameterValue** | **[]string** | Image parameter value. | 
 **languageCode** | **string** | Unique Code of language. | 
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

Return registration card



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/medcfg"
)

func main() {
    reservationId := "reservationId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
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
    resp, r, err := apiClient.OperaContentAPI.GetRegistrationCard(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationIdContext(reservationIdContext).ReservationIdType(reservationIdType).Regenerate(regenerate).SignedOnly(signedOnly).Language(language).Template(template).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaContentAPI.GetRegistrationCard``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRegistrationCard`: RegistrationCard
    fmt.Fprintf(os.Stdout, "Response from `OperaContentAPI.GetRegistrationCard`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
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
    openapiclient "github.com/applyinnovations/ohip-sdk/medcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    imageCode := "imageCode_example" // string | An enumeration of image codes such as Logo, RoomType, InvItem (optional)
    imageSet := "imageSet_example" // string | Used for Character Strings, length 0 to 800. (optional)
    imageId := "imageId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    imageIdContext := "imageIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    imageIdType := "imageIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaContentAPI.RemoveImage(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ImageCode(imageCode).ImageSet(imageSet).ImageId(imageId).ImageIdContext(imageIdContext).ImageIdType(imageIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaContentAPI.RemoveImage``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveImage`: Status
    fmt.Fprintf(os.Stdout, "Response from `OperaContentAPI.RemoveImage`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiRemoveImageRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **imageCode** | **string** | An enumeration of image codes such as Logo, RoomType, InvItem | 
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

Update customized letter



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/medcfg"
)

func main() {
    reservationId := "reservationId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    customizedLetter := *openapiclient.NewCustomizedLetter() // CustomizedLetter | Request to save customized letter.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaContentAPI.SetCustomizedLetter(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CustomizedLetter(customizedLetter).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaContentAPI.SetCustomizedLetter``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetCustomizedLetter`: CustomizedLetterStatus
    fmt.Fprintf(os.Stdout, "Response from `OperaContentAPI.SetCustomizedLetter`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **customizedLetter** | [**CustomizedLetter**](CustomizedLetter.md) | Request to save customized letter. | 
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
    openapiclient "github.com/applyinnovations/ohip-sdk/medcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fileToUpload := *openapiclient.NewFileToUpload() // FileToUpload | Request to upload a file attachment.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaContentAPI.UploadFileAttachment(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FileToUpload(fileToUpload).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaContentAPI.UploadFileAttachment``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UploadFileAttachment`: Status
    fmt.Fprintf(os.Stdout, "Response from `OperaContentAPI.UploadFileAttachment`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUploadFileAttachmentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fileToUpload** | [**FileToUpload**](FileToUpload.md) | Request to upload a file attachment. | 
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

Upload image



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/medcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    imageToUpload := *openapiclient.NewImageToUpload() // ImageToUpload | Request to upload an image.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaContentAPI.UploadImage(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ImageToUpload(imageToUpload).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaContentAPI.UploadImage``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UploadImage`: Status
    fmt.Fprintf(os.Stdout, "Response from `OperaContentAPI.UploadImage`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUploadImageRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **imageToUpload** | [**ImageToUpload**](ImageToUpload.md) | Request to upload an image. | 
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

