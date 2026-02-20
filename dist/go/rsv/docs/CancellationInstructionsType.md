# CancellationInstructionsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | Detailed description such as why reservation cannot be cancelled. | [optional] 
**DeleteResTraces** | Pointer to **bool** |  | [optional] 
**Status** | Pointer to **string** |  | [optional] 

## Methods

### NewCancellationInstructionsType

`func NewCancellationInstructionsType() *CancellationInstructionsType`

NewCancellationInstructionsType instantiates a new CancellationInstructionsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCancellationInstructionsTypeWithDefaults

`func NewCancellationInstructionsTypeWithDefaults() *CancellationInstructionsType`

NewCancellationInstructionsTypeWithDefaults instantiates a new CancellationInstructionsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *CancellationInstructionsType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CancellationInstructionsType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CancellationInstructionsType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *CancellationInstructionsType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDeleteResTraces

`func (o *CancellationInstructionsType) GetDeleteResTraces() bool`

GetDeleteResTraces returns the DeleteResTraces field if non-nil, zero value otherwise.

### GetDeleteResTracesOk

`func (o *CancellationInstructionsType) GetDeleteResTracesOk() (*bool, bool)`

GetDeleteResTracesOk returns a tuple with the DeleteResTraces field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeleteResTraces

`func (o *CancellationInstructionsType) SetDeleteResTraces(v bool)`

SetDeleteResTraces sets DeleteResTraces field to given value.

### HasDeleteResTraces

`func (o *CancellationInstructionsType) HasDeleteResTraces() bool`

HasDeleteResTraces returns a boolean if a field has been set.

### GetStatus

`func (o *CancellationInstructionsType) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *CancellationInstructionsType) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *CancellationInstructionsType) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *CancellationInstructionsType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


