# CustomerTypeIdentifications

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentificationInfo** | Pointer to [**[]IdentificationInfoType**](IdentificationInfoType.md) | Collection of detailed information on the identification of the customer. | [optional] 
**AllRowsFetched** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalRows** | Pointer to **int32** | Total number of rows queried | [optional] 

## Methods

### NewCustomerTypeIdentifications

`func NewCustomerTypeIdentifications() *CustomerTypeIdentifications`

NewCustomerTypeIdentifications instantiates a new CustomerTypeIdentifications object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustomerTypeIdentificationsWithDefaults

`func NewCustomerTypeIdentificationsWithDefaults() *CustomerTypeIdentifications`

NewCustomerTypeIdentificationsWithDefaults instantiates a new CustomerTypeIdentifications object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentificationInfo

`func (o *CustomerTypeIdentifications) GetIdentificationInfo() []IdentificationInfoType`

GetIdentificationInfo returns the IdentificationInfo field if non-nil, zero value otherwise.

### GetIdentificationInfoOk

`func (o *CustomerTypeIdentifications) GetIdentificationInfoOk() (*[]IdentificationInfoType, bool)`

GetIdentificationInfoOk returns a tuple with the IdentificationInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentificationInfo

`func (o *CustomerTypeIdentifications) SetIdentificationInfo(v []IdentificationInfoType)`

SetIdentificationInfo sets IdentificationInfo field to given value.

### HasIdentificationInfo

`func (o *CustomerTypeIdentifications) HasIdentificationInfo() bool`

HasIdentificationInfo returns a boolean if a field has been set.

### GetAllRowsFetched

`func (o *CustomerTypeIdentifications) GetAllRowsFetched() bool`

GetAllRowsFetched returns the AllRowsFetched field if non-nil, zero value otherwise.

### GetAllRowsFetchedOk

`func (o *CustomerTypeIdentifications) GetAllRowsFetchedOk() (*bool, bool)`

GetAllRowsFetchedOk returns a tuple with the AllRowsFetched field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllRowsFetched

`func (o *CustomerTypeIdentifications) SetAllRowsFetched(v bool)`

SetAllRowsFetched sets AllRowsFetched field to given value.

### HasAllRowsFetched

`func (o *CustomerTypeIdentifications) HasAllRowsFetched() bool`

HasAllRowsFetched returns a boolean if a field has been set.

### GetTotalRows

`func (o *CustomerTypeIdentifications) GetTotalRows() int32`

GetTotalRows returns the TotalRows field if non-nil, zero value otherwise.

### GetTotalRowsOk

`func (o *CustomerTypeIdentifications) GetTotalRowsOk() (*int32, bool)`

GetTotalRowsOk returns a tuple with the TotalRows field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalRows

`func (o *CustomerTypeIdentifications) SetTotalRows(v int32)`

SetTotalRows sets TotalRows field to given value.

### HasTotalRows

`func (o *CustomerTypeIdentifications) HasTotalRows() bool`

HasTotalRows returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


