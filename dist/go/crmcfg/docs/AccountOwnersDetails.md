# AccountOwnersDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Owners** | Pointer to [**[]OwnerType**](OwnerType.md) | Generic type for a list of owners. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAccountOwnersDetails

`func NewAccountOwnersDetails() *AccountOwnersDetails`

NewAccountOwnersDetails instantiates a new AccountOwnersDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountOwnersDetailsWithDefaults

`func NewAccountOwnersDetailsWithDefaults() *AccountOwnersDetails`

NewAccountOwnersDetailsWithDefaults instantiates a new AccountOwnersDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *AccountOwnersDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AccountOwnersDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AccountOwnersDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AccountOwnersDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetOwners

`func (o *AccountOwnersDetails) GetOwners() []OwnerType`

GetOwners returns the Owners field if non-nil, zero value otherwise.

### GetOwnersOk

`func (o *AccountOwnersDetails) GetOwnersOk() (*[]OwnerType, bool)`

GetOwnersOk returns a tuple with the Owners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwners

`func (o *AccountOwnersDetails) SetOwners(v []OwnerType)`

SetOwners sets Owners field to given value.

### HasOwners

`func (o *AccountOwnersDetails) HasOwners() bool`

HasOwners returns a boolean if a field has been set.

### GetWarnings

`func (o *AccountOwnersDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AccountOwnersDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AccountOwnersDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AccountOwnersDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


