# ReservationHousekeepingScheduleSearchType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | The hotel code where reservation is made. | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**BeginDate** | Pointer to **string** | Begin date from which to start fetching facility tasks. | [optional] 
**EndDate** | Pointer to **string** | End date for facility task schedule request. | [optional] 

## Methods

### NewReservationHousekeepingScheduleSearchType

`func NewReservationHousekeepingScheduleSearchType() *ReservationHousekeepingScheduleSearchType`

NewReservationHousekeepingScheduleSearchType instantiates a new ReservationHousekeepingScheduleSearchType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationHousekeepingScheduleSearchTypeWithDefaults

`func NewReservationHousekeepingScheduleSearchTypeWithDefaults() *ReservationHousekeepingScheduleSearchType`

NewReservationHousekeepingScheduleSearchTypeWithDefaults instantiates a new ReservationHousekeepingScheduleSearchType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ReservationHousekeepingScheduleSearchType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ReservationHousekeepingScheduleSearchType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ReservationHousekeepingScheduleSearchType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ReservationHousekeepingScheduleSearchType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReservationId

`func (o *ReservationHousekeepingScheduleSearchType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *ReservationHousekeepingScheduleSearchType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *ReservationHousekeepingScheduleSearchType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *ReservationHousekeepingScheduleSearchType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetBeginDate

`func (o *ReservationHousekeepingScheduleSearchType) GetBeginDate() string`

GetBeginDate returns the BeginDate field if non-nil, zero value otherwise.

### GetBeginDateOk

`func (o *ReservationHousekeepingScheduleSearchType) GetBeginDateOk() (*string, bool)`

GetBeginDateOk returns a tuple with the BeginDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBeginDate

`func (o *ReservationHousekeepingScheduleSearchType) SetBeginDate(v string)`

SetBeginDate sets BeginDate field to given value.

### HasBeginDate

`func (o *ReservationHousekeepingScheduleSearchType) HasBeginDate() bool`

HasBeginDate returns a boolean if a field has been set.

### GetEndDate

`func (o *ReservationHousekeepingScheduleSearchType) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *ReservationHousekeepingScheduleSearchType) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *ReservationHousekeepingScheduleSearchType) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *ReservationHousekeepingScheduleSearchType) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


