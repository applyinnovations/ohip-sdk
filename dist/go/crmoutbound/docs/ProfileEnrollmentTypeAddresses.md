# ProfileEnrollmentTypeAddresses

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AddressInfo** | Pointer to [**[]AddressInfoType**](AddressInfoType.md) | Collection of Detailed information on an address for the customer. | [optional] 
**AllRowsFetched** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalRows** | Pointer to **int32** | Total number of rows queried | [optional] 

## Methods

### NewProfileEnrollmentTypeAddresses

`func NewProfileEnrollmentTypeAddresses() *ProfileEnrollmentTypeAddresses`

NewProfileEnrollmentTypeAddresses instantiates a new ProfileEnrollmentTypeAddresses object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileEnrollmentTypeAddressesWithDefaults

`func NewProfileEnrollmentTypeAddressesWithDefaults() *ProfileEnrollmentTypeAddresses`

NewProfileEnrollmentTypeAddressesWithDefaults instantiates a new ProfileEnrollmentTypeAddresses object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddressInfo

`func (o *ProfileEnrollmentTypeAddresses) GetAddressInfo() []AddressInfoType`

GetAddressInfo returns the AddressInfo field if non-nil, zero value otherwise.

### GetAddressInfoOk

`func (o *ProfileEnrollmentTypeAddresses) GetAddressInfoOk() (*[]AddressInfoType, bool)`

GetAddressInfoOk returns a tuple with the AddressInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddressInfo

`func (o *ProfileEnrollmentTypeAddresses) SetAddressInfo(v []AddressInfoType)`

SetAddressInfo sets AddressInfo field to given value.

### HasAddressInfo

`func (o *ProfileEnrollmentTypeAddresses) HasAddressInfo() bool`

HasAddressInfo returns a boolean if a field has been set.

### GetAllRowsFetched

`func (o *ProfileEnrollmentTypeAddresses) GetAllRowsFetched() bool`

GetAllRowsFetched returns the AllRowsFetched field if non-nil, zero value otherwise.

### GetAllRowsFetchedOk

`func (o *ProfileEnrollmentTypeAddresses) GetAllRowsFetchedOk() (*bool, bool)`

GetAllRowsFetchedOk returns a tuple with the AllRowsFetched field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllRowsFetched

`func (o *ProfileEnrollmentTypeAddresses) SetAllRowsFetched(v bool)`

SetAllRowsFetched sets AllRowsFetched field to given value.

### HasAllRowsFetched

`func (o *ProfileEnrollmentTypeAddresses) HasAllRowsFetched() bool`

HasAllRowsFetched returns a boolean if a field has been set.

### GetTotalRows

`func (o *ProfileEnrollmentTypeAddresses) GetTotalRows() int32`

GetTotalRows returns the TotalRows field if non-nil, zero value otherwise.

### GetTotalRowsOk

`func (o *ProfileEnrollmentTypeAddresses) GetTotalRowsOk() (*int32, bool)`

GetTotalRowsOk returns a tuple with the TotalRows field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalRows

`func (o *ProfileEnrollmentTypeAddresses) SetTotalRows(v int32)`

SetTotalRows sets TotalRows field to given value.

### HasTotalRows

`func (o *ProfileEnrollmentTypeAddresses) HasTotalRows() bool`

HasTotalRows returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


