# ShortReservation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationInfoList** | Pointer to [**[]ReservationInfoType**](ReservationInfoType.md) | Short reservation information response. | [optional] 
**ReservationsSummary** | Pointer to [**ReservationsSummaryType**](ReservationsSummaryType.md) |  | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewShortReservation

`func NewShortReservation() *ShortReservation`

NewShortReservation instantiates a new ShortReservation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewShortReservationWithDefaults

`func NewShortReservationWithDefaults() *ShortReservation`

NewShortReservationWithDefaults instantiates a new ShortReservation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationInfoList

`func (o *ShortReservation) GetReservationInfoList() []ReservationInfoType`

GetReservationInfoList returns the ReservationInfoList field if non-nil, zero value otherwise.

### GetReservationInfoListOk

`func (o *ShortReservation) GetReservationInfoListOk() (*[]ReservationInfoType, bool)`

GetReservationInfoListOk returns a tuple with the ReservationInfoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationInfoList

`func (o *ShortReservation) SetReservationInfoList(v []ReservationInfoType)`

SetReservationInfoList sets ReservationInfoList field to given value.

### HasReservationInfoList

`func (o *ShortReservation) HasReservationInfoList() bool`

HasReservationInfoList returns a boolean if a field has been set.

### GetReservationsSummary

`func (o *ShortReservation) GetReservationsSummary() ReservationsSummaryType`

GetReservationsSummary returns the ReservationsSummary field if non-nil, zero value otherwise.

### GetReservationsSummaryOk

`func (o *ShortReservation) GetReservationsSummaryOk() (*ReservationsSummaryType, bool)`

GetReservationsSummaryOk returns a tuple with the ReservationsSummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationsSummary

`func (o *ShortReservation) SetReservationsSummary(v ReservationsSummaryType)`

SetReservationsSummary sets ReservationsSummary field to given value.

### HasReservationsSummary

`func (o *ShortReservation) HasReservationsSummary() bool`

HasReservationsSummary returns a boolean if a field has been set.

### GetTotalPages

`func (o *ShortReservation) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *ShortReservation) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *ShortReservation) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *ShortReservation) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetOffset

`func (o *ShortReservation) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *ShortReservation) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *ShortReservation) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *ShortReservation) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetLimit

`func (o *ShortReservation) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *ShortReservation) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *ShortReservation) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *ShortReservation) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetHasMore

`func (o *ShortReservation) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *ShortReservation) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *ShortReservation) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *ShortReservation) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *ShortReservation) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *ShortReservation) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *ShortReservation) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *ShortReservation) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetCount

`func (o *ShortReservation) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *ShortReservation) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *ShortReservation) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *ShortReservation) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetLinks

`func (o *ShortReservation) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ShortReservation) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ShortReservation) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ShortReservation) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ShortReservation) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ShortReservation) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ShortReservation) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ShortReservation) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


