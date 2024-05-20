# RevenueTypeMappingList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RevenueTypeMappingList** | Pointer to [**[]RevenueTypeMappingType**](RevenueTypeMappingType.md) | Collection of multiple Revenue type mapping codes. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRevenueTypeMappingList

`func NewRevenueTypeMappingList() *RevenueTypeMappingList`

NewRevenueTypeMappingList instantiates a new RevenueTypeMappingList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRevenueTypeMappingListWithDefaults

`func NewRevenueTypeMappingListWithDefaults() *RevenueTypeMappingList`

NewRevenueTypeMappingListWithDefaults instantiates a new RevenueTypeMappingList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *RevenueTypeMappingList) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RevenueTypeMappingList) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RevenueTypeMappingList) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RevenueTypeMappingList) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRevenueTypeMappingList

`func (o *RevenueTypeMappingList) GetRevenueTypeMappingList() []RevenueTypeMappingType`

GetRevenueTypeMappingList returns the RevenueTypeMappingList field if non-nil, zero value otherwise.

### GetRevenueTypeMappingListOk

`func (o *RevenueTypeMappingList) GetRevenueTypeMappingListOk() (*[]RevenueTypeMappingType, bool)`

GetRevenueTypeMappingListOk returns a tuple with the RevenueTypeMappingList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueTypeMappingList

`func (o *RevenueTypeMappingList) SetRevenueTypeMappingList(v []RevenueTypeMappingType)`

SetRevenueTypeMappingList sets RevenueTypeMappingList field to given value.

### HasRevenueTypeMappingList

`func (o *RevenueTypeMappingList) HasRevenueTypeMappingList() bool`

HasRevenueTypeMappingList returns a boolean if a field has been set.

### GetWarnings

`func (o *RevenueTypeMappingList) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RevenueTypeMappingList) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RevenueTypeMappingList) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RevenueTypeMappingList) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


