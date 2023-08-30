# ValidatedAddress

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AddressValidationInfo** | Pointer to [**AddressType**](AddressType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewValidatedAddress

`func NewValidatedAddress() *ValidatedAddress`

NewValidatedAddress instantiates a new ValidatedAddress object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewValidatedAddressWithDefaults

`func NewValidatedAddressWithDefaults() *ValidatedAddress`

NewValidatedAddressWithDefaults instantiates a new ValidatedAddress object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddressValidationInfo

`func (o *ValidatedAddress) GetAddressValidationInfo() AddressType`

GetAddressValidationInfo returns the AddressValidationInfo field if non-nil, zero value otherwise.

### GetAddressValidationInfoOk

`func (o *ValidatedAddress) GetAddressValidationInfoOk() (*AddressType, bool)`

GetAddressValidationInfoOk returns a tuple with the AddressValidationInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddressValidationInfo

`func (o *ValidatedAddress) SetAddressValidationInfo(v AddressType)`

SetAddressValidationInfo sets AddressValidationInfo field to given value.

### HasAddressValidationInfo

`func (o *ValidatedAddress) HasAddressValidationInfo() bool`

HasAddressValidationInfo returns a boolean if a field has been set.

### GetLinks

`func (o *ValidatedAddress) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ValidatedAddress) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ValidatedAddress) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ValidatedAddress) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ValidatedAddress) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ValidatedAddress) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ValidatedAddress) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ValidatedAddress) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


