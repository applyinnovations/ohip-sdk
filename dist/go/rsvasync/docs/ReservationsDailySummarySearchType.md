# ReservationsDailySummarySearchType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | The Hotel Code for which the reservation search will be performed. | [optional] 
**TimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**LastModifiedDate** | Pointer to [**LastModifiedDateType**](LastModifiedDateType.md) |  | [optional] 

## Methods

### NewReservationsDailySummarySearchType

`func NewReservationsDailySummarySearchType() *ReservationsDailySummarySearchType`

NewReservationsDailySummarySearchType instantiates a new ReservationsDailySummarySearchType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationsDailySummarySearchTypeWithDefaults

`func NewReservationsDailySummarySearchTypeWithDefaults() *ReservationsDailySummarySearchType`

NewReservationsDailySummarySearchTypeWithDefaults instantiates a new ReservationsDailySummarySearchType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ReservationsDailySummarySearchType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ReservationsDailySummarySearchType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ReservationsDailySummarySearchType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ReservationsDailySummarySearchType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetTimeSpan

`func (o *ReservationsDailySummarySearchType) GetTimeSpan() TimeSpanType`

GetTimeSpan returns the TimeSpan field if non-nil, zero value otherwise.

### GetTimeSpanOk

`func (o *ReservationsDailySummarySearchType) GetTimeSpanOk() (*TimeSpanType, bool)`

GetTimeSpanOk returns a tuple with the TimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeSpan

`func (o *ReservationsDailySummarySearchType) SetTimeSpan(v TimeSpanType)`

SetTimeSpan sets TimeSpan field to given value.

### HasTimeSpan

`func (o *ReservationsDailySummarySearchType) HasTimeSpan() bool`

HasTimeSpan returns a boolean if a field has been set.

### GetLastModifiedDate

`func (o *ReservationsDailySummarySearchType) GetLastModifiedDate() LastModifiedDateType`

GetLastModifiedDate returns the LastModifiedDate field if non-nil, zero value otherwise.

### GetLastModifiedDateOk

`func (o *ReservationsDailySummarySearchType) GetLastModifiedDateOk() (*LastModifiedDateType, bool)`

GetLastModifiedDateOk returns a tuple with the LastModifiedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifiedDate

`func (o *ReservationsDailySummarySearchType) SetLastModifiedDate(v LastModifiedDateType)`

SetLastModifiedDate sets LastModifiedDate field to given value.

### HasLastModifiedDate

`func (o *ReservationsDailySummarySearchType) HasLastModifiedDate() bool`

HasLastModifiedDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


