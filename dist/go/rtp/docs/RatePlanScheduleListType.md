# RatePlanScheduleListType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RatePlanSchedule** | Pointer to [**[]RatePlanSchedulesType**](RatePlanSchedulesType.md) | Rate plan schedule list. | [optional] 
**HotelId** | Pointer to **string** | Hotel code. | [optional] 
**RatePlanCode** | Pointer to **string** | Rate plan Code. | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 

## Methods

### NewRatePlanScheduleListType

`func NewRatePlanScheduleListType() *RatePlanScheduleListType`

NewRatePlanScheduleListType instantiates a new RatePlanScheduleListType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRatePlanScheduleListTypeWithDefaults

`func NewRatePlanScheduleListTypeWithDefaults() *RatePlanScheduleListType`

NewRatePlanScheduleListTypeWithDefaults instantiates a new RatePlanScheduleListType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRatePlanSchedule

`func (o *RatePlanScheduleListType) GetRatePlanSchedule() []RatePlanSchedulesType`

GetRatePlanSchedule returns the RatePlanSchedule field if non-nil, zero value otherwise.

### GetRatePlanScheduleOk

`func (o *RatePlanScheduleListType) GetRatePlanScheduleOk() (*[]RatePlanSchedulesType, bool)`

GetRatePlanScheduleOk returns a tuple with the RatePlanSchedule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanSchedule

`func (o *RatePlanScheduleListType) SetRatePlanSchedule(v []RatePlanSchedulesType)`

SetRatePlanSchedule sets RatePlanSchedule field to given value.

### HasRatePlanSchedule

`func (o *RatePlanScheduleListType) HasRatePlanSchedule() bool`

HasRatePlanSchedule returns a boolean if a field has been set.

### GetHotelId

`func (o *RatePlanScheduleListType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *RatePlanScheduleListType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *RatePlanScheduleListType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *RatePlanScheduleListType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetRatePlanCode

`func (o *RatePlanScheduleListType) GetRatePlanCode() string`

GetRatePlanCode returns the RatePlanCode field if non-nil, zero value otherwise.

### GetRatePlanCodeOk

`func (o *RatePlanScheduleListType) GetRatePlanCodeOk() (*string, bool)`

GetRatePlanCodeOk returns a tuple with the RatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCode

`func (o *RatePlanScheduleListType) SetRatePlanCode(v string)`

SetRatePlanCode sets RatePlanCode field to given value.

### HasRatePlanCode

`func (o *RatePlanScheduleListType) HasRatePlanCode() bool`

HasRatePlanCode returns a boolean if a field has been set.

### GetHasMore

`func (o *RatePlanScheduleListType) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *RatePlanScheduleListType) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *RatePlanScheduleListType) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *RatePlanScheduleListType) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *RatePlanScheduleListType) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *RatePlanScheduleListType) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *RatePlanScheduleListType) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *RatePlanScheduleListType) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetCount

`func (o *RatePlanScheduleListType) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *RatePlanScheduleListType) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *RatePlanScheduleListType) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *RatePlanScheduleListType) HasCount() bool`

HasCount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


