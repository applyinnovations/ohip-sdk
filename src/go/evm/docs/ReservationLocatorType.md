# ReservationLocatorType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockDates** | Pointer to [**DateTimeSpanType**](DateTimeSpanType.md) |  | [optional] 
**DateSpan** | Pointer to [**DateRangeType**](DateRangeType.md) |  | [optional] 
**LocatorBy** | Pointer to **string** | User that entered this Guest Locator. | [optional] 
**LocatorId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**LocatorOn** | Pointer to **string** | Date and time of the Guest Locator. | [optional] 
**LocatorText** | Pointer to **string** | The Locator Text for the guest. | [optional] 

## Methods

### NewReservationLocatorType

`func NewReservationLocatorType() *ReservationLocatorType`

NewReservationLocatorType instantiates a new ReservationLocatorType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationLocatorTypeWithDefaults

`func NewReservationLocatorTypeWithDefaults() *ReservationLocatorType`

NewReservationLocatorTypeWithDefaults instantiates a new ReservationLocatorType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockDates

`func (o *ReservationLocatorType) GetBlockDates() DateTimeSpanType`

GetBlockDates returns the BlockDates field if non-nil, zero value otherwise.

### GetBlockDatesOk

`func (o *ReservationLocatorType) GetBlockDatesOk() (*DateTimeSpanType, bool)`

GetBlockDatesOk returns a tuple with the BlockDates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockDates

`func (o *ReservationLocatorType) SetBlockDates(v DateTimeSpanType)`

SetBlockDates sets BlockDates field to given value.

### HasBlockDates

`func (o *ReservationLocatorType) HasBlockDates() bool`

HasBlockDates returns a boolean if a field has been set.

### GetDateSpan

`func (o *ReservationLocatorType) GetDateSpan() DateRangeType`

GetDateSpan returns the DateSpan field if non-nil, zero value otherwise.

### GetDateSpanOk

`func (o *ReservationLocatorType) GetDateSpanOk() (*DateRangeType, bool)`

GetDateSpanOk returns a tuple with the DateSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateSpan

`func (o *ReservationLocatorType) SetDateSpan(v DateRangeType)`

SetDateSpan sets DateSpan field to given value.

### HasDateSpan

`func (o *ReservationLocatorType) HasDateSpan() bool`

HasDateSpan returns a boolean if a field has been set.

### GetLocatorBy

`func (o *ReservationLocatorType) GetLocatorBy() string`

GetLocatorBy returns the LocatorBy field if non-nil, zero value otherwise.

### GetLocatorByOk

`func (o *ReservationLocatorType) GetLocatorByOk() (*string, bool)`

GetLocatorByOk returns a tuple with the LocatorBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocatorBy

`func (o *ReservationLocatorType) SetLocatorBy(v string)`

SetLocatorBy sets LocatorBy field to given value.

### HasLocatorBy

`func (o *ReservationLocatorType) HasLocatorBy() bool`

HasLocatorBy returns a boolean if a field has been set.

### GetLocatorId

`func (o *ReservationLocatorType) GetLocatorId() UniqueIDType`

GetLocatorId returns the LocatorId field if non-nil, zero value otherwise.

### GetLocatorIdOk

`func (o *ReservationLocatorType) GetLocatorIdOk() (*UniqueIDType, bool)`

GetLocatorIdOk returns a tuple with the LocatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocatorId

`func (o *ReservationLocatorType) SetLocatorId(v UniqueIDType)`

SetLocatorId sets LocatorId field to given value.

### HasLocatorId

`func (o *ReservationLocatorType) HasLocatorId() bool`

HasLocatorId returns a boolean if a field has been set.

### GetLocatorOn

`func (o *ReservationLocatorType) GetLocatorOn() string`

GetLocatorOn returns the LocatorOn field if non-nil, zero value otherwise.

### GetLocatorOnOk

`func (o *ReservationLocatorType) GetLocatorOnOk() (*string, bool)`

GetLocatorOnOk returns a tuple with the LocatorOn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocatorOn

`func (o *ReservationLocatorType) SetLocatorOn(v string)`

SetLocatorOn sets LocatorOn field to given value.

### HasLocatorOn

`func (o *ReservationLocatorType) HasLocatorOn() bool`

HasLocatorOn returns a boolean if a field has been set.

### GetLocatorText

`func (o *ReservationLocatorType) GetLocatorText() string`

GetLocatorText returns the LocatorText field if non-nil, zero value otherwise.

### GetLocatorTextOk

`func (o *ReservationLocatorType) GetLocatorTextOk() (*string, bool)`

GetLocatorTextOk returns a tuple with the LocatorText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocatorText

`func (o *ReservationLocatorType) SetLocatorText(v string)`

SetLocatorText sets LocatorText field to given value.

### HasLocatorText

`func (o *ReservationLocatorType) HasLocatorText() bool`

HasLocatorText returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


