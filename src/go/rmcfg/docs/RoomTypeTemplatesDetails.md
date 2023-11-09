# RoomTypeTemplatesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**RoomTypeTemplates** | Pointer to [**RoomTypeTemplateType**](RoomTypeTemplateType.md) |  | [optional] 
**RoomTypeTemplatesSummary** | Pointer to [**RoomTypeTemplateSummaryType**](RoomTypeTemplateSummaryType.md) |  | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewRoomTypeTemplatesDetails

`func NewRoomTypeTemplatesDetails() *RoomTypeTemplatesDetails`

NewRoomTypeTemplatesDetails instantiates a new RoomTypeTemplatesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomTypeTemplatesDetailsWithDefaults

`func NewRoomTypeTemplatesDetailsWithDefaults() *RoomTypeTemplatesDetails`

NewRoomTypeTemplatesDetailsWithDefaults instantiates a new RoomTypeTemplatesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *RoomTypeTemplatesDetails) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *RoomTypeTemplatesDetails) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *RoomTypeTemplatesDetails) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *RoomTypeTemplatesDetails) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetHasMore

`func (o *RoomTypeTemplatesDetails) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *RoomTypeTemplatesDetails) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *RoomTypeTemplatesDetails) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *RoomTypeTemplatesDetails) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetLimit

`func (o *RoomTypeTemplatesDetails) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *RoomTypeTemplatesDetails) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *RoomTypeTemplatesDetails) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *RoomTypeTemplatesDetails) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetLinks

`func (o *RoomTypeTemplatesDetails) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoomTypeTemplatesDetails) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoomTypeTemplatesDetails) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoomTypeTemplatesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetOffset

`func (o *RoomTypeTemplatesDetails) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *RoomTypeTemplatesDetails) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *RoomTypeTemplatesDetails) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *RoomTypeTemplatesDetails) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetRoomTypeTemplates

`func (o *RoomTypeTemplatesDetails) GetRoomTypeTemplates() RoomTypeTemplateType`

GetRoomTypeTemplates returns the RoomTypeTemplates field if non-nil, zero value otherwise.

### GetRoomTypeTemplatesOk

`func (o *RoomTypeTemplatesDetails) GetRoomTypeTemplatesOk() (*RoomTypeTemplateType, bool)`

GetRoomTypeTemplatesOk returns a tuple with the RoomTypeTemplates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypeTemplates

`func (o *RoomTypeTemplatesDetails) SetRoomTypeTemplates(v RoomTypeTemplateType)`

SetRoomTypeTemplates sets RoomTypeTemplates field to given value.

### HasRoomTypeTemplates

`func (o *RoomTypeTemplatesDetails) HasRoomTypeTemplates() bool`

HasRoomTypeTemplates returns a boolean if a field has been set.

### GetRoomTypeTemplatesSummary

`func (o *RoomTypeTemplatesDetails) GetRoomTypeTemplatesSummary() RoomTypeTemplateSummaryType`

GetRoomTypeTemplatesSummary returns the RoomTypeTemplatesSummary field if non-nil, zero value otherwise.

### GetRoomTypeTemplatesSummaryOk

`func (o *RoomTypeTemplatesDetails) GetRoomTypeTemplatesSummaryOk() (*RoomTypeTemplateSummaryType, bool)`

GetRoomTypeTemplatesSummaryOk returns a tuple with the RoomTypeTemplatesSummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypeTemplatesSummary

`func (o *RoomTypeTemplatesDetails) SetRoomTypeTemplatesSummary(v RoomTypeTemplateSummaryType)`

SetRoomTypeTemplatesSummary sets RoomTypeTemplatesSummary field to given value.

### HasRoomTypeTemplatesSummary

`func (o *RoomTypeTemplatesDetails) HasRoomTypeTemplatesSummary() bool`

HasRoomTypeTemplatesSummary returns a boolean if a field has been set.

### GetTotalPages

`func (o *RoomTypeTemplatesDetails) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *RoomTypeTemplatesDetails) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *RoomTypeTemplatesDetails) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *RoomTypeTemplatesDetails) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetTotalResults

`func (o *RoomTypeTemplatesDetails) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *RoomTypeTemplatesDetails) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *RoomTypeTemplatesDetails) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *RoomTypeTemplatesDetails) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetWarnings

`func (o *RoomTypeTemplatesDetails) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoomTypeTemplatesDetails) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoomTypeTemplatesDetails) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoomTypeTemplatesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


