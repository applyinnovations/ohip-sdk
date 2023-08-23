# ProfileTypeAddresses

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AddressInfo** | Pointer to [**[]AddressInfoType**](AddressInfoType.md) | Collection of Detailed information on an address for the customer. | [optional] 
**TotalRows** | Pointer to **int32** | Total number of rows queried | [optional] 

## Methods

### NewProfileTypeAddresses

`func NewProfileTypeAddresses() *ProfileTypeAddresses`

NewProfileTypeAddresses instantiates a new ProfileTypeAddresses object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileTypeAddressesWithDefaults

`func NewProfileTypeAddressesWithDefaults() *ProfileTypeAddresses`

NewProfileTypeAddressesWithDefaults instantiates a new ProfileTypeAddresses object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddressInfo

`func (o *ProfileTypeAddresses) GetAddressInfo() []AddressInfoType`

GetAddressInfo returns the AddressInfo field if non-nil, zero value otherwise.

### GetAddressInfoOk

`func (o *ProfileTypeAddresses) GetAddressInfoOk() (*[]AddressInfoType, bool)`

GetAddressInfoOk returns a tuple with the AddressInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddressInfo

`func (o *ProfileTypeAddresses) SetAddressInfo(v []AddressInfoType)`

SetAddressInfo sets AddressInfo field to given value.

### HasAddressInfo

`func (o *ProfileTypeAddresses) HasAddressInfo() bool`

HasAddressInfo returns a boolean if a field has been set.

### GetTotalRows

`func (o *ProfileTypeAddresses) GetTotalRows() int32`

GetTotalRows returns the TotalRows field if non-nil, zero value otherwise.

### GetTotalRowsOk

`func (o *ProfileTypeAddresses) GetTotalRowsOk() (*int32, bool)`

GetTotalRowsOk returns a tuple with the TotalRows field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalRows

`func (o *ProfileTypeAddresses) SetTotalRows(v int32)`

SetTotalRows sets TotalRows field to given value.

### HasTotalRows

`func (o *ProfileTypeAddresses) HasTotalRows() bool`

HasTotalRows returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


