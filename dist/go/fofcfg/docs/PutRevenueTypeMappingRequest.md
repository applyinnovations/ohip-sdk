# PutRevenueTypeMappingRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RevenueTypeMapping** | Pointer to [**RevenueTypeMappingType**](RevenueTypeMappingType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutRevenueTypeMappingRequest

`func NewPutRevenueTypeMappingRequest() *PutRevenueTypeMappingRequest`

NewPutRevenueTypeMappingRequest instantiates a new PutRevenueTypeMappingRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutRevenueTypeMappingRequestWithDefaults

`func NewPutRevenueTypeMappingRequestWithDefaults() *PutRevenueTypeMappingRequest`

NewPutRevenueTypeMappingRequestWithDefaults instantiates a new PutRevenueTypeMappingRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutRevenueTypeMappingRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutRevenueTypeMappingRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutRevenueTypeMappingRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutRevenueTypeMappingRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRevenueTypeMapping

`func (o *PutRevenueTypeMappingRequest) GetRevenueTypeMapping() RevenueTypeMappingType`

GetRevenueTypeMapping returns the RevenueTypeMapping field if non-nil, zero value otherwise.

### GetRevenueTypeMappingOk

`func (o *PutRevenueTypeMappingRequest) GetRevenueTypeMappingOk() (*RevenueTypeMappingType, bool)`

GetRevenueTypeMappingOk returns a tuple with the RevenueTypeMapping field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueTypeMapping

`func (o *PutRevenueTypeMappingRequest) SetRevenueTypeMapping(v RevenueTypeMappingType)`

SetRevenueTypeMapping sets RevenueTypeMapping field to given value.

### HasRevenueTypeMapping

`func (o *PutRevenueTypeMappingRequest) HasRevenueTypeMapping() bool`

HasRevenueTypeMapping returns a boolean if a field has been set.

### GetWarnings

`func (o *PutRevenueTypeMappingRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutRevenueTypeMappingRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutRevenueTypeMappingRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutRevenueTypeMappingRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


