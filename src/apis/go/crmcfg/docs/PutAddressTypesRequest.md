# PutAddressTypesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AddressTypes** | Pointer to [**[]AddressTypeType**](AddressTypeType.md) | Communication Role Enumeration element. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutAddressTypesRequest

`func NewPutAddressTypesRequest() *PutAddressTypesRequest`

NewPutAddressTypesRequest instantiates a new PutAddressTypesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutAddressTypesRequestWithDefaults

`func NewPutAddressTypesRequestWithDefaults() *PutAddressTypesRequest`

NewPutAddressTypesRequestWithDefaults instantiates a new PutAddressTypesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddressTypes

`func (o *PutAddressTypesRequest) GetAddressTypes() []AddressTypeType`

GetAddressTypes returns the AddressTypes field if non-nil, zero value otherwise.

### GetAddressTypesOk

`func (o *PutAddressTypesRequest) GetAddressTypesOk() (*[]AddressTypeType, bool)`

GetAddressTypesOk returns a tuple with the AddressTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddressTypes

`func (o *PutAddressTypesRequest) SetAddressTypes(v []AddressTypeType)`

SetAddressTypes sets AddressTypes field to given value.

### HasAddressTypes

`func (o *PutAddressTypesRequest) HasAddressTypes() bool`

HasAddressTypes returns a boolean if a field has been set.

### GetLinks

`func (o *PutAddressTypesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutAddressTypesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutAddressTypesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutAddressTypesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutAddressTypesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutAddressTypesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutAddressTypesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutAddressTypesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


