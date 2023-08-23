# ValidatedAddresses

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AddressValidationsInfo** | Pointer to [**[]AddressValidationInfoType**](AddressValidationInfoType.md) | A collection of validated Addresses. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewValidatedAddresses

`func NewValidatedAddresses() *ValidatedAddresses`

NewValidatedAddresses instantiates a new ValidatedAddresses object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewValidatedAddressesWithDefaults

`func NewValidatedAddressesWithDefaults() *ValidatedAddresses`

NewValidatedAddressesWithDefaults instantiates a new ValidatedAddresses object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddressValidationsInfo

`func (o *ValidatedAddresses) GetAddressValidationsInfo() []AddressValidationInfoType`

GetAddressValidationsInfo returns the AddressValidationsInfo field if non-nil, zero value otherwise.

### GetAddressValidationsInfoOk

`func (o *ValidatedAddresses) GetAddressValidationsInfoOk() (*[]AddressValidationInfoType, bool)`

GetAddressValidationsInfoOk returns a tuple with the AddressValidationsInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddressValidationsInfo

`func (o *ValidatedAddresses) SetAddressValidationsInfo(v []AddressValidationInfoType)`

SetAddressValidationsInfo sets AddressValidationsInfo field to given value.

### HasAddressValidationsInfo

`func (o *ValidatedAddresses) HasAddressValidationsInfo() bool`

HasAddressValidationsInfo returns a boolean if a field has been set.

### GetLinks

`func (o *ValidatedAddresses) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ValidatedAddresses) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ValidatedAddresses) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ValidatedAddresses) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ValidatedAddresses) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ValidatedAddresses) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ValidatedAddresses) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ValidatedAddresses) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


