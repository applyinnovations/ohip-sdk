# SuspendedAddresses

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**SuspendedAddressesInfo** | Pointer to [**SuspendedAddressesType**](SuspendedAddressesType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewSuspendedAddresses

`func NewSuspendedAddresses() *SuspendedAddresses`

NewSuspendedAddresses instantiates a new SuspendedAddresses object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSuspendedAddressesWithDefaults

`func NewSuspendedAddressesWithDefaults() *SuspendedAddresses`

NewSuspendedAddressesWithDefaults instantiates a new SuspendedAddresses object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *SuspendedAddresses) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *SuspendedAddresses) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *SuspendedAddresses) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *SuspendedAddresses) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetSuspendedAddressesInfo

`func (o *SuspendedAddresses) GetSuspendedAddressesInfo() SuspendedAddressesType`

GetSuspendedAddressesInfo returns the SuspendedAddressesInfo field if non-nil, zero value otherwise.

### GetSuspendedAddressesInfoOk

`func (o *SuspendedAddresses) GetSuspendedAddressesInfoOk() (*SuspendedAddressesType, bool)`

GetSuspendedAddressesInfoOk returns a tuple with the SuspendedAddressesInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuspendedAddressesInfo

`func (o *SuspendedAddresses) SetSuspendedAddressesInfo(v SuspendedAddressesType)`

SetSuspendedAddressesInfo sets SuspendedAddressesInfo field to given value.

### HasSuspendedAddressesInfo

`func (o *SuspendedAddresses) HasSuspendedAddressesInfo() bool`

HasSuspendedAddressesInfo returns a boolean if a field has been set.

### GetWarnings

`func (o *SuspendedAddresses) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *SuspendedAddresses) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *SuspendedAddresses) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *SuspendedAddresses) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


