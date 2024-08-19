# OverrideInstructionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Date** | Pointer to **string** | The date when the override was done. | [optional] 
**Description** | Pointer to **string** | The description of the restriction for which the override was done. | [optional] 
**Type** | Pointer to **string** | The type of override done. If done for Availability, then it will be AVAILABILITY. | [optional] 
**UserId** | Pointer to **string** | Login ID of the user who performed the override. | [optional] 

## Methods

### NewOverrideInstructionType

`func NewOverrideInstructionType() *OverrideInstructionType`

NewOverrideInstructionType instantiates a new OverrideInstructionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOverrideInstructionTypeWithDefaults

`func NewOverrideInstructionTypeWithDefaults() *OverrideInstructionType`

NewOverrideInstructionTypeWithDefaults instantiates a new OverrideInstructionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDate

`func (o *OverrideInstructionType) GetDate() string`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *OverrideInstructionType) GetDateOk() (*string, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *OverrideInstructionType) SetDate(v string)`

SetDate sets Date field to given value.

### HasDate

`func (o *OverrideInstructionType) HasDate() bool`

HasDate returns a boolean if a field has been set.

### GetDescription

`func (o *OverrideInstructionType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *OverrideInstructionType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *OverrideInstructionType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *OverrideInstructionType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetType

`func (o *OverrideInstructionType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *OverrideInstructionType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *OverrideInstructionType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *OverrideInstructionType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetUserId

`func (o *OverrideInstructionType) GetUserId() string`

GetUserId returns the UserId field if non-nil, zero value otherwise.

### GetUserIdOk

`func (o *OverrideInstructionType) GetUserIdOk() (*string, bool)`

GetUserIdOk returns a tuple with the UserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserId

`func (o *OverrideInstructionType) SetUserId(v string)`

SetUserId sets UserId field to given value.

### HasUserId

`func (o *OverrideInstructionType) HasUserId() bool`

HasUserId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


