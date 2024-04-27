# CustomerTypeIdentifications

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**IdentificationInfo** | Pointer to [**[]IdentificationInfoType**](IdentificationInfoType.md) | Collection of detailed information on the identification of the customer. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 

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

### GetCount

`func (o *CustomerTypeIdentifications) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *CustomerTypeIdentifications) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *CustomerTypeIdentifications) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *CustomerTypeIdentifications) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetHasMore

`func (o *CustomerTypeIdentifications) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *CustomerTypeIdentifications) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *CustomerTypeIdentifications) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *CustomerTypeIdentifications) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

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

### GetTotalResults

`func (o *CustomerTypeIdentifications) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *CustomerTypeIdentifications) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *CustomerTypeIdentifications) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *CustomerTypeIdentifications) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


