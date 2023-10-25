# FetchedHotelInterfaceSchemas

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**Schemas** | Pointer to [**[]HotelInterfaceSchemaType**](HotelInterfaceSchemaType.md) | Collection of Hotel Interface Schemas. | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFetchedHotelInterfaceSchemas

`func NewFetchedHotelInterfaceSchemas() *FetchedHotelInterfaceSchemas`

NewFetchedHotelInterfaceSchemas instantiates a new FetchedHotelInterfaceSchemas object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFetchedHotelInterfaceSchemasWithDefaults

`func NewFetchedHotelInterfaceSchemasWithDefaults() *FetchedHotelInterfaceSchemas`

NewFetchedHotelInterfaceSchemasWithDefaults instantiates a new FetchedHotelInterfaceSchemas object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHasMore

`func (o *FetchedHotelInterfaceSchemas) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *FetchedHotelInterfaceSchemas) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *FetchedHotelInterfaceSchemas) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *FetchedHotelInterfaceSchemas) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetLimit

`func (o *FetchedHotelInterfaceSchemas) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *FetchedHotelInterfaceSchemas) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *FetchedHotelInterfaceSchemas) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *FetchedHotelInterfaceSchemas) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetLinks

`func (o *FetchedHotelInterfaceSchemas) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FetchedHotelInterfaceSchemas) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FetchedHotelInterfaceSchemas) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FetchedHotelInterfaceSchemas) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetOffset

`func (o *FetchedHotelInterfaceSchemas) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *FetchedHotelInterfaceSchemas) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *FetchedHotelInterfaceSchemas) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *FetchedHotelInterfaceSchemas) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetSchemas

`func (o *FetchedHotelInterfaceSchemas) GetSchemas() []HotelInterfaceSchemaType`

GetSchemas returns the Schemas field if non-nil, zero value otherwise.

### GetSchemasOk

`func (o *FetchedHotelInterfaceSchemas) GetSchemasOk() (*[]HotelInterfaceSchemaType, bool)`

GetSchemasOk returns a tuple with the Schemas field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchemas

`func (o *FetchedHotelInterfaceSchemas) SetSchemas(v []HotelInterfaceSchemaType)`

SetSchemas sets Schemas field to given value.

### HasSchemas

`func (o *FetchedHotelInterfaceSchemas) HasSchemas() bool`

HasSchemas returns a boolean if a field has been set.

### GetTotalPages

`func (o *FetchedHotelInterfaceSchemas) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *FetchedHotelInterfaceSchemas) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *FetchedHotelInterfaceSchemas) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *FetchedHotelInterfaceSchemas) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetTotalResults

`func (o *FetchedHotelInterfaceSchemas) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *FetchedHotelInterfaceSchemas) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *FetchedHotelInterfaceSchemas) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *FetchedHotelInterfaceSchemas) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetWarnings

`func (o *FetchedHotelInterfaceSchemas) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FetchedHotelInterfaceSchemas) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FetchedHotelInterfaceSchemas) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FetchedHotelInterfaceSchemas) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


