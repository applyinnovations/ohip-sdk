# OpenPaymentTokenExchange400Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CorrelationId** | Pointer to **string** | Unique identifier value that is attached to the request that allows reference to a particular transaction | [optional] 
**Detail** | Pointer to **string** | Detailed error message | [optional] 
**OerrorCode** | Pointer to **string** | Application specific error code | [optional] 
**OerrorDetails** | Pointer to [**[]ProblemDetail**](ProblemDetail.md) | Drill down to the details | [optional] 
**OerrorPath** | Pointer to **string** | JSON path to indicate where the error occurs | [optional] 
**Status** | Pointer to **int32** | HTTP status code | [optional] 
**Title** | **string** | Summary error message | 
**Type** | **string** | HTTP error code page | 

## Methods

### NewOpenPaymentTokenExchange400Response

`func NewOpenPaymentTokenExchange400Response(title string, type_ string, ) *OpenPaymentTokenExchange400Response`

NewOpenPaymentTokenExchange400Response instantiates a new OpenPaymentTokenExchange400Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOpenPaymentTokenExchange400ResponseWithDefaults

`func NewOpenPaymentTokenExchange400ResponseWithDefaults() *OpenPaymentTokenExchange400Response`

NewOpenPaymentTokenExchange400ResponseWithDefaults instantiates a new OpenPaymentTokenExchange400Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCorrelationId

`func (o *OpenPaymentTokenExchange400Response) GetCorrelationId() string`

GetCorrelationId returns the CorrelationId field if non-nil, zero value otherwise.

### GetCorrelationIdOk

`func (o *OpenPaymentTokenExchange400Response) GetCorrelationIdOk() (*string, bool)`

GetCorrelationIdOk returns a tuple with the CorrelationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorrelationId

`func (o *OpenPaymentTokenExchange400Response) SetCorrelationId(v string)`

SetCorrelationId sets CorrelationId field to given value.

### HasCorrelationId

`func (o *OpenPaymentTokenExchange400Response) HasCorrelationId() bool`

HasCorrelationId returns a boolean if a field has been set.

### GetDetail

`func (o *OpenPaymentTokenExchange400Response) GetDetail() string`

GetDetail returns the Detail field if non-nil, zero value otherwise.

### GetDetailOk

`func (o *OpenPaymentTokenExchange400Response) GetDetailOk() (*string, bool)`

GetDetailOk returns a tuple with the Detail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetail

`func (o *OpenPaymentTokenExchange400Response) SetDetail(v string)`

SetDetail sets Detail field to given value.

### HasDetail

`func (o *OpenPaymentTokenExchange400Response) HasDetail() bool`

HasDetail returns a boolean if a field has been set.

### GetOerrorCode

`func (o *OpenPaymentTokenExchange400Response) GetOerrorCode() string`

GetOerrorCode returns the OerrorCode field if non-nil, zero value otherwise.

### GetOerrorCodeOk

`func (o *OpenPaymentTokenExchange400Response) GetOerrorCodeOk() (*string, bool)`

GetOerrorCodeOk returns a tuple with the OerrorCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOerrorCode

`func (o *OpenPaymentTokenExchange400Response) SetOerrorCode(v string)`

SetOerrorCode sets OerrorCode field to given value.

### HasOerrorCode

`func (o *OpenPaymentTokenExchange400Response) HasOerrorCode() bool`

HasOerrorCode returns a boolean if a field has been set.

### GetOerrorDetails

`func (o *OpenPaymentTokenExchange400Response) GetOerrorDetails() []ProblemDetail`

GetOerrorDetails returns the OerrorDetails field if non-nil, zero value otherwise.

### GetOerrorDetailsOk

`func (o *OpenPaymentTokenExchange400Response) GetOerrorDetailsOk() (*[]ProblemDetail, bool)`

GetOerrorDetailsOk returns a tuple with the OerrorDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOerrorDetails

`func (o *OpenPaymentTokenExchange400Response) SetOerrorDetails(v []ProblemDetail)`

SetOerrorDetails sets OerrorDetails field to given value.

### HasOerrorDetails

`func (o *OpenPaymentTokenExchange400Response) HasOerrorDetails() bool`

HasOerrorDetails returns a boolean if a field has been set.

### GetOerrorPath

`func (o *OpenPaymentTokenExchange400Response) GetOerrorPath() string`

GetOerrorPath returns the OerrorPath field if non-nil, zero value otherwise.

### GetOerrorPathOk

`func (o *OpenPaymentTokenExchange400Response) GetOerrorPathOk() (*string, bool)`

GetOerrorPathOk returns a tuple with the OerrorPath field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOerrorPath

`func (o *OpenPaymentTokenExchange400Response) SetOerrorPath(v string)`

SetOerrorPath sets OerrorPath field to given value.

### HasOerrorPath

`func (o *OpenPaymentTokenExchange400Response) HasOerrorPath() bool`

HasOerrorPath returns a boolean if a field has been set.

### GetStatus

`func (o *OpenPaymentTokenExchange400Response) GetStatus() int32`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *OpenPaymentTokenExchange400Response) GetStatusOk() (*int32, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *OpenPaymentTokenExchange400Response) SetStatus(v int32)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *OpenPaymentTokenExchange400Response) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetTitle

`func (o *OpenPaymentTokenExchange400Response) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *OpenPaymentTokenExchange400Response) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *OpenPaymentTokenExchange400Response) SetTitle(v string)`

SetTitle sets Title field to given value.


### GetType

`func (o *OpenPaymentTokenExchange400Response) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *OpenPaymentTokenExchange400Response) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *OpenPaymentTokenExchange400Response) SetType(v string)`

SetType sets Type field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


