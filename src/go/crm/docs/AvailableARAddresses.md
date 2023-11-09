# AvailableARAddresses

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Addresses** | Pointer to [**[]AddressInfoType**](AddressInfoType.md) | Collection of Detailed information on an address for the customer. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewAvailableARAddresses

`func NewAvailableARAddresses() *AvailableARAddresses`

NewAvailableARAddresses instantiates a new AvailableARAddresses object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAvailableARAddressesWithDefaults

`func NewAvailableARAddressesWithDefaults() *AvailableARAddresses`

NewAvailableARAddressesWithDefaults instantiates a new AvailableARAddresses object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddresses

`func (o *AvailableARAddresses) GetAddresses() []AddressInfoType`

GetAddresses returns the Addresses field if non-nil, zero value otherwise.

### GetAddressesOk

`func (o *AvailableARAddresses) GetAddressesOk() (*[]AddressInfoType, bool)`

GetAddressesOk returns a tuple with the Addresses field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddresses

`func (o *AvailableARAddresses) SetAddresses(v []AddressInfoType)`

SetAddresses sets Addresses field to given value.

### HasAddresses

`func (o *AvailableARAddresses) HasAddresses() bool`

HasAddresses returns a boolean if a field has been set.

### GetLinks

`func (o *AvailableARAddresses) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AvailableARAddresses) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AvailableARAddresses) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AvailableARAddresses) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *AvailableARAddresses) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AvailableARAddresses) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AvailableARAddresses) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AvailableARAddresses) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


