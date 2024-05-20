# CateringEventChangeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChangeList** | Pointer to [**[]CateringEventChangeInfoType**](CateringEventChangeInfoType.md) |  | [optional] 
**RevenueChangeList** | Pointer to [**[]EventRevenueChangeType**](EventRevenueChangeType.md) | Event Revenue Changes Details | [optional] 
**StatusChangeList** | Pointer to [**[]EventStatusChangeType**](EventStatusChangeType.md) | Event Status Changes Details | [optional] 

## Methods

### NewCateringEventChangeType

`func NewCateringEventChangeType() *CateringEventChangeType`

NewCateringEventChangeType instantiates a new CateringEventChangeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCateringEventChangeTypeWithDefaults

`func NewCateringEventChangeTypeWithDefaults() *CateringEventChangeType`

NewCateringEventChangeTypeWithDefaults instantiates a new CateringEventChangeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChangeList

`func (o *CateringEventChangeType) GetChangeList() []CateringEventChangeInfoType`

GetChangeList returns the ChangeList field if non-nil, zero value otherwise.

### GetChangeListOk

`func (o *CateringEventChangeType) GetChangeListOk() (*[]CateringEventChangeInfoType, bool)`

GetChangeListOk returns a tuple with the ChangeList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChangeList

`func (o *CateringEventChangeType) SetChangeList(v []CateringEventChangeInfoType)`

SetChangeList sets ChangeList field to given value.

### HasChangeList

`func (o *CateringEventChangeType) HasChangeList() bool`

HasChangeList returns a boolean if a field has been set.

### GetRevenueChangeList

`func (o *CateringEventChangeType) GetRevenueChangeList() []EventRevenueChangeType`

GetRevenueChangeList returns the RevenueChangeList field if non-nil, zero value otherwise.

### GetRevenueChangeListOk

`func (o *CateringEventChangeType) GetRevenueChangeListOk() (*[]EventRevenueChangeType, bool)`

GetRevenueChangeListOk returns a tuple with the RevenueChangeList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueChangeList

`func (o *CateringEventChangeType) SetRevenueChangeList(v []EventRevenueChangeType)`

SetRevenueChangeList sets RevenueChangeList field to given value.

### HasRevenueChangeList

`func (o *CateringEventChangeType) HasRevenueChangeList() bool`

HasRevenueChangeList returns a boolean if a field has been set.

### GetStatusChangeList

`func (o *CateringEventChangeType) GetStatusChangeList() []EventStatusChangeType`

GetStatusChangeList returns the StatusChangeList field if non-nil, zero value otherwise.

### GetStatusChangeListOk

`func (o *CateringEventChangeType) GetStatusChangeListOk() (*[]EventStatusChangeType, bool)`

GetStatusChangeListOk returns a tuple with the StatusChangeList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusChangeList

`func (o *CateringEventChangeType) SetStatusChangeList(v []EventStatusChangeType)`

SetStatusChangeList sets StatusChangeList field to given value.

### HasStatusChangeList

`func (o *CateringEventChangeType) HasStatusChangeList() bool`

HasStatusChangeList returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


