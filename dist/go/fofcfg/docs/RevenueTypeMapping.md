# RevenueTypeMapping

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RevenueTypeMapping** | Pointer to [**RevenueTypeMappingType**](RevenueTypeMappingType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRevenueTypeMapping

`func NewRevenueTypeMapping() *RevenueTypeMapping`

NewRevenueTypeMapping instantiates a new RevenueTypeMapping object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRevenueTypeMappingWithDefaults

`func NewRevenueTypeMappingWithDefaults() *RevenueTypeMapping`

NewRevenueTypeMappingWithDefaults instantiates a new RevenueTypeMapping object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *RevenueTypeMapping) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RevenueTypeMapping) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RevenueTypeMapping) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RevenueTypeMapping) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRevenueTypeMapping

`func (o *RevenueTypeMapping) GetRevenueTypeMapping() RevenueTypeMappingType`

GetRevenueTypeMapping returns the RevenueTypeMapping field if non-nil, zero value otherwise.

### GetRevenueTypeMappingOk

`func (o *RevenueTypeMapping) GetRevenueTypeMappingOk() (*RevenueTypeMappingType, bool)`

GetRevenueTypeMappingOk returns a tuple with the RevenueTypeMapping field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueTypeMapping

`func (o *RevenueTypeMapping) SetRevenueTypeMapping(v RevenueTypeMappingType)`

SetRevenueTypeMapping sets RevenueTypeMapping field to given value.

### HasRevenueTypeMapping

`func (o *RevenueTypeMapping) HasRevenueTypeMapping() bool`

HasRevenueTypeMapping returns a boolean if a field has been set.

### GetWarnings

`func (o *RevenueTypeMapping) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RevenueTypeMapping) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RevenueTypeMapping) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RevenueTypeMapping) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


