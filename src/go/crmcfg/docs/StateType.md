# StateType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CountryCode** | Pointer to **string** | The country which the state belongs to. | [optional] 
**Description** | Pointer to **string** | The description of the state. | [optional] 
**Sequence** | Pointer to **float32** | The sequence number of the state. | [optional] 
**StateCode** | Pointer to **string** | The code of the state. | [optional] 
**StateID** | Pointer to **float32** | Unique identifier of the state. | [optional] 

## Methods

### NewStateType

`func NewStateType() *StateType`

NewStateType instantiates a new StateType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStateTypeWithDefaults

`func NewStateTypeWithDefaults() *StateType`

NewStateTypeWithDefaults instantiates a new StateType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCountryCode

`func (o *StateType) GetCountryCode() string`

GetCountryCode returns the CountryCode field if non-nil, zero value otherwise.

### GetCountryCodeOk

`func (o *StateType) GetCountryCodeOk() (*string, bool)`

GetCountryCodeOk returns a tuple with the CountryCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountryCode

`func (o *StateType) SetCountryCode(v string)`

SetCountryCode sets CountryCode field to given value.

### HasCountryCode

`func (o *StateType) HasCountryCode() bool`

HasCountryCode returns a boolean if a field has been set.

### GetDescription

`func (o *StateType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *StateType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *StateType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *StateType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetSequence

`func (o *StateType) GetSequence() float32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *StateType) GetSequenceOk() (*float32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *StateType) SetSequence(v float32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *StateType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetStateCode

`func (o *StateType) GetStateCode() string`

GetStateCode returns the StateCode field if non-nil, zero value otherwise.

### GetStateCodeOk

`func (o *StateType) GetStateCodeOk() (*string, bool)`

GetStateCodeOk returns a tuple with the StateCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStateCode

`func (o *StateType) SetStateCode(v string)`

SetStateCode sets StateCode field to given value.

### HasStateCode

`func (o *StateType) HasStateCode() bool`

HasStateCode returns a boolean if a field has been set.

### GetStateID

`func (o *StateType) GetStateID() float32`

GetStateID returns the StateID field if non-nil, zero value otherwise.

### GetStateIDOk

`func (o *StateType) GetStateIDOk() (*float32, bool)`

GetStateIDOk returns a tuple with the StateID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStateID

`func (o *StateType) SetStateID(v float32)`

SetStateID sets StateID field to given value.

### HasStateID

`func (o *StateType) HasStateID() bool`

HasStateID returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


