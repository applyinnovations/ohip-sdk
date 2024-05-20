# AmenitiesMapping

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AmenitiesMapping** | Pointer to [**[]AmenityMappingType**](AmenityMappingType.md) | Information about an external system amenity mapping. | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAmenitiesMapping

`func NewAmenitiesMapping() *AmenitiesMapping`

NewAmenitiesMapping instantiates a new AmenitiesMapping object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAmenitiesMappingWithDefaults

`func NewAmenitiesMappingWithDefaults() *AmenitiesMapping`

NewAmenitiesMappingWithDefaults instantiates a new AmenitiesMapping object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmenitiesMapping

`func (o *AmenitiesMapping) GetAmenitiesMapping() []AmenityMappingType`

GetAmenitiesMapping returns the AmenitiesMapping field if non-nil, zero value otherwise.

### GetAmenitiesMappingOk

`func (o *AmenitiesMapping) GetAmenitiesMappingOk() (*[]AmenityMappingType, bool)`

GetAmenitiesMappingOk returns a tuple with the AmenitiesMapping field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmenitiesMapping

`func (o *AmenitiesMapping) SetAmenitiesMapping(v []AmenityMappingType)`

SetAmenitiesMapping sets AmenitiesMapping field to given value.

### HasAmenitiesMapping

`func (o *AmenitiesMapping) HasAmenitiesMapping() bool`

HasAmenitiesMapping returns a boolean if a field has been set.

### GetCount

`func (o *AmenitiesMapping) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *AmenitiesMapping) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *AmenitiesMapping) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *AmenitiesMapping) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetHasMore

`func (o *AmenitiesMapping) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *AmenitiesMapping) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *AmenitiesMapping) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *AmenitiesMapping) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetLimit

`func (o *AmenitiesMapping) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *AmenitiesMapping) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *AmenitiesMapping) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *AmenitiesMapping) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetLinks

`func (o *AmenitiesMapping) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AmenitiesMapping) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AmenitiesMapping) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AmenitiesMapping) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetOffset

`func (o *AmenitiesMapping) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *AmenitiesMapping) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *AmenitiesMapping) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *AmenitiesMapping) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetTotalPages

`func (o *AmenitiesMapping) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *AmenitiesMapping) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *AmenitiesMapping) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *AmenitiesMapping) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetTotalResults

`func (o *AmenitiesMapping) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *AmenitiesMapping) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *AmenitiesMapping) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *AmenitiesMapping) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetWarnings

`func (o *AmenitiesMapping) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AmenitiesMapping) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AmenitiesMapping) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AmenitiesMapping) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


