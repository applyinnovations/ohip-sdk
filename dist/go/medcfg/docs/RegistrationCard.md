# RegistrationCard

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RegistrationCard** | Pointer to [**RegistrationCardType**](RegistrationCardType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRegistrationCard

`func NewRegistrationCard() *RegistrationCard`

NewRegistrationCard instantiates a new RegistrationCard object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRegistrationCardWithDefaults

`func NewRegistrationCardWithDefaults() *RegistrationCard`

NewRegistrationCardWithDefaults instantiates a new RegistrationCard object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRegistrationCard

`func (o *RegistrationCard) GetRegistrationCard() RegistrationCardType`

GetRegistrationCard returns the RegistrationCard field if non-nil, zero value otherwise.

### GetRegistrationCardOk

`func (o *RegistrationCard) GetRegistrationCardOk() (*RegistrationCardType, bool)`

GetRegistrationCardOk returns a tuple with the RegistrationCard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegistrationCard

`func (o *RegistrationCard) SetRegistrationCard(v RegistrationCardType)`

SetRegistrationCard sets RegistrationCard field to given value.

### HasRegistrationCard

`func (o *RegistrationCard) HasRegistrationCard() bool`

HasRegistrationCard returns a boolean if a field has been set.

### GetLinks

`func (o *RegistrationCard) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RegistrationCard) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RegistrationCard) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RegistrationCard) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RegistrationCard) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RegistrationCard) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RegistrationCard) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RegistrationCard) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


