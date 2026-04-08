# RoomTypesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomTypesSummary** | Pointer to [**[]RoomTypesSummaryType**](RoomTypesSummaryType.md) | Contains the results of a successful operation. | [optional] 
**RoomTypes** | Pointer to [**[]RoomTypesType**](RoomTypesType.md) | Collection of Room Type Templates and their information. | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRoomTypesDetails

`func NewRoomTypesDetails() *RoomTypesDetails`

NewRoomTypesDetails instantiates a new RoomTypesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomTypesDetailsWithDefaults

`func NewRoomTypesDetailsWithDefaults() *RoomTypesDetails`

NewRoomTypesDetailsWithDefaults instantiates a new RoomTypesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomTypesSummary

`func (o *RoomTypesDetails) GetRoomTypesSummary() []RoomTypesSummaryType`

GetRoomTypesSummary returns the RoomTypesSummary field if non-nil, zero value otherwise.

### GetRoomTypesSummaryOk

`func (o *RoomTypesDetails) GetRoomTypesSummaryOk() (*[]RoomTypesSummaryType, bool)`

GetRoomTypesSummaryOk returns a tuple with the RoomTypesSummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypesSummary

`func (o *RoomTypesDetails) SetRoomTypesSummary(v []RoomTypesSummaryType)`

SetRoomTypesSummary sets RoomTypesSummary field to given value.

### HasRoomTypesSummary

`func (o *RoomTypesDetails) HasRoomTypesSummary() bool`

HasRoomTypesSummary returns a boolean if a field has been set.

### GetRoomTypes

`func (o *RoomTypesDetails) GetRoomTypes() []RoomTypesType`

GetRoomTypes returns the RoomTypes field if non-nil, zero value otherwise.

### GetRoomTypesOk

`func (o *RoomTypesDetails) GetRoomTypesOk() (*[]RoomTypesType, bool)`

GetRoomTypesOk returns a tuple with the RoomTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypes

`func (o *RoomTypesDetails) SetRoomTypes(v []RoomTypesType)`

SetRoomTypes sets RoomTypes field to given value.

### HasRoomTypes

`func (o *RoomTypesDetails) HasRoomTypes() bool`

HasRoomTypes returns a boolean if a field has been set.

### GetTotalPages

`func (o *RoomTypesDetails) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *RoomTypesDetails) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *RoomTypesDetails) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *RoomTypesDetails) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetOffset

`func (o *RoomTypesDetails) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *RoomTypesDetails) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *RoomTypesDetails) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *RoomTypesDetails) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetLimit

`func (o *RoomTypesDetails) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *RoomTypesDetails) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *RoomTypesDetails) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *RoomTypesDetails) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetHasMore

`func (o *RoomTypesDetails) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *RoomTypesDetails) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *RoomTypesDetails) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *RoomTypesDetails) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *RoomTypesDetails) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *RoomTypesDetails) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *RoomTypesDetails) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *RoomTypesDetails) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetCount

`func (o *RoomTypesDetails) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *RoomTypesDetails) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *RoomTypesDetails) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *RoomTypesDetails) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetLinks

`func (o *RoomTypesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoomTypesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoomTypesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoomTypesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RoomTypesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoomTypesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoomTypesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoomTypesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


