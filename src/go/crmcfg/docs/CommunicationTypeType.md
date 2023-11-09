# CommunicationTypeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Unique Communication Type Code. | [optional] 
**Description** | Pointer to **string** | Communication Type description. | [optional] 
**Role** | Pointer to [**CommunicationRoleType**](CommunicationRoleType.md) |  | [optional] 
**Sequence** | Pointer to **int32** | Communication Type sequence. | [optional] 
**TextEnabled** | Pointer to **bool** | Communication Type SMS Text Message enabled. | [optional] 

## Methods

### NewCommunicationTypeType

`func NewCommunicationTypeType() *CommunicationTypeType`

NewCommunicationTypeType instantiates a new CommunicationTypeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommunicationTypeTypeWithDefaults

`func NewCommunicationTypeTypeWithDefaults() *CommunicationTypeType`

NewCommunicationTypeTypeWithDefaults instantiates a new CommunicationTypeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *CommunicationTypeType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *CommunicationTypeType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *CommunicationTypeType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *CommunicationTypeType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *CommunicationTypeType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CommunicationTypeType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CommunicationTypeType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *CommunicationTypeType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetRole

`func (o *CommunicationTypeType) GetRole() CommunicationRoleType`

GetRole returns the Role field if non-nil, zero value otherwise.

### GetRoleOk

`func (o *CommunicationTypeType) GetRoleOk() (*CommunicationRoleType, bool)`

GetRoleOk returns a tuple with the Role field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRole

`func (o *CommunicationTypeType) SetRole(v CommunicationRoleType)`

SetRole sets Role field to given value.

### HasRole

`func (o *CommunicationTypeType) HasRole() bool`

HasRole returns a boolean if a field has been set.

### GetSequence

`func (o *CommunicationTypeType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *CommunicationTypeType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *CommunicationTypeType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *CommunicationTypeType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetTextEnabled

`func (o *CommunicationTypeType) GetTextEnabled() bool`

GetTextEnabled returns the TextEnabled field if non-nil, zero value otherwise.

### GetTextEnabledOk

`func (o *CommunicationTypeType) GetTextEnabledOk() (*bool, bool)`

GetTextEnabledOk returns a tuple with the TextEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTextEnabled

`func (o *CommunicationTypeType) SetTextEnabled(v bool)`

SetTextEnabled sets TextEnabled field to given value.

### HasTextEnabled

`func (o *CommunicationTypeType) HasTextEnabled() bool`

HasTextEnabled returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


