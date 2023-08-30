# PutChannelErrorsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Errors** | Pointer to [**ChannelErrorsErrors**](ChannelErrorsErrors.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutChannelErrorsRequest

`func NewPutChannelErrorsRequest() *PutChannelErrorsRequest`

NewPutChannelErrorsRequest instantiates a new PutChannelErrorsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutChannelErrorsRequestWithDefaults

`func NewPutChannelErrorsRequestWithDefaults() *PutChannelErrorsRequest`

NewPutChannelErrorsRequestWithDefaults instantiates a new PutChannelErrorsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetErrors

`func (o *PutChannelErrorsRequest) GetErrors() ChannelErrorsErrors`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *PutChannelErrorsRequest) GetErrorsOk() (*ChannelErrorsErrors, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *PutChannelErrorsRequest) SetErrors(v ChannelErrorsErrors)`

SetErrors sets Errors field to given value.

### HasErrors

`func (o *PutChannelErrorsRequest) HasErrors() bool`

HasErrors returns a boolean if a field has been set.

### GetWarnings

`func (o *PutChannelErrorsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutChannelErrorsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutChannelErrorsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutChannelErrorsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


