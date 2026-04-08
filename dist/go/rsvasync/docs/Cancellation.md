# Cancellation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** |  | [optional] 
**Code** | Pointer to **string** |  | [optional] 
**CancellationNo** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Date** | Pointer to **string** | Date when reservation was last cancelled. | [optional] 

## Methods

### NewCancellation

`func NewCancellation() *Cancellation`

NewCancellation instantiates a new Cancellation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCancellationWithDefaults

`func NewCancellationWithDefaults() *Cancellation`

NewCancellationWithDefaults instantiates a new Cancellation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *Cancellation) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Cancellation) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Cancellation) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Cancellation) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetCode

`func (o *Cancellation) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *Cancellation) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *Cancellation) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *Cancellation) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetCancellationNo

`func (o *Cancellation) GetCancellationNo() UniqueIDType`

GetCancellationNo returns the CancellationNo field if non-nil, zero value otherwise.

### GetCancellationNoOk

`func (o *Cancellation) GetCancellationNoOk() (*UniqueIDType, bool)`

GetCancellationNoOk returns a tuple with the CancellationNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellationNo

`func (o *Cancellation) SetCancellationNo(v UniqueIDType)`

SetCancellationNo sets CancellationNo field to given value.

### HasCancellationNo

`func (o *Cancellation) HasCancellationNo() bool`

HasCancellationNo returns a boolean if a field has been set.

### GetDate

`func (o *Cancellation) GetDate() string`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *Cancellation) GetDateOk() (*string, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *Cancellation) SetDate(v string)`

SetDate sets Date field to given value.

### HasDate

`func (o *Cancellation) HasDate() bool`

HasDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


