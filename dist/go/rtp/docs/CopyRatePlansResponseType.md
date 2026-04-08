# CopyRatePlansResponseType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CopyResponse** | Pointer to [**[]CopyRatePlansResponseTypeCopyResponseInner**](CopyRatePlansResponseTypeCopyResponseInner.md) | Hotel Code from which rate plans are being copied. | [optional] 
**IsError** | Pointer to **bool** | Does the response contains error? if true means request is not completed. | [optional] 

## Methods

### NewCopyRatePlansResponseType

`func NewCopyRatePlansResponseType() *CopyRatePlansResponseType`

NewCopyRatePlansResponseType instantiates a new CopyRatePlansResponseType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyRatePlansResponseTypeWithDefaults

`func NewCopyRatePlansResponseTypeWithDefaults() *CopyRatePlansResponseType`

NewCopyRatePlansResponseTypeWithDefaults instantiates a new CopyRatePlansResponseType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCopyResponse

`func (o *CopyRatePlansResponseType) GetCopyResponse() []CopyRatePlansResponseTypeCopyResponseInner`

GetCopyResponse returns the CopyResponse field if non-nil, zero value otherwise.

### GetCopyResponseOk

`func (o *CopyRatePlansResponseType) GetCopyResponseOk() (*[]CopyRatePlansResponseTypeCopyResponseInner, bool)`

GetCopyResponseOk returns a tuple with the CopyResponse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyResponse

`func (o *CopyRatePlansResponseType) SetCopyResponse(v []CopyRatePlansResponseTypeCopyResponseInner)`

SetCopyResponse sets CopyResponse field to given value.

### HasCopyResponse

`func (o *CopyRatePlansResponseType) HasCopyResponse() bool`

HasCopyResponse returns a boolean if a field has been set.

### GetIsError

`func (o *CopyRatePlansResponseType) GetIsError() bool`

GetIsError returns the IsError field if non-nil, zero value otherwise.

### GetIsErrorOk

`func (o *CopyRatePlansResponseType) GetIsErrorOk() (*bool, bool)`

GetIsErrorOk returns a tuple with the IsError field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsError

`func (o *CopyRatePlansResponseType) SetIsError(v bool)`

SetIsError sets IsError field to given value.

### HasIsError

`func (o *CopyRatePlansResponseType) HasIsError() bool`

HasIsError returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


