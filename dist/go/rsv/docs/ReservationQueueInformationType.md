# ReservationQueueInformationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TimeSpan** | Pointer to [**ReservationQueueInformationTypeTimeSpan**](ReservationQueueInformationTypeTimeSpan.md) |  | [optional] 
**GuestTextInfo** | Pointer to [**QueueTextInfoType**](QueueTextInfoType.md) |  | [optional] 
**Priority** | Pointer to **int32** | The Queue Priority given to this reservation. | [optional] 
**AverageQueueTimeToCheckIn** | Pointer to **int32** | The average time, in seconds, a reservation was on queue prior to Check-In. | [optional] 
**AverageQueueTimeCurrentReservations** | Pointer to **int32** | The average time, in seconds, of the reservations currently in queue. | [optional] 
**QueueDate** | Pointer to **string** | The Business date on which the reservation was due to arrive and is currently placed on Queue for Check In. | [optional] 

## Methods

### NewReservationQueueInformationType

`func NewReservationQueueInformationType() *ReservationQueueInformationType`

NewReservationQueueInformationType instantiates a new ReservationQueueInformationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationQueueInformationTypeWithDefaults

`func NewReservationQueueInformationTypeWithDefaults() *ReservationQueueInformationType`

NewReservationQueueInformationTypeWithDefaults instantiates a new ReservationQueueInformationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTimeSpan

`func (o *ReservationQueueInformationType) GetTimeSpan() ReservationQueueInformationTypeTimeSpan`

GetTimeSpan returns the TimeSpan field if non-nil, zero value otherwise.

### GetTimeSpanOk

`func (o *ReservationQueueInformationType) GetTimeSpanOk() (*ReservationQueueInformationTypeTimeSpan, bool)`

GetTimeSpanOk returns a tuple with the TimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeSpan

`func (o *ReservationQueueInformationType) SetTimeSpan(v ReservationQueueInformationTypeTimeSpan)`

SetTimeSpan sets TimeSpan field to given value.

### HasTimeSpan

`func (o *ReservationQueueInformationType) HasTimeSpan() bool`

HasTimeSpan returns a boolean if a field has been set.

### GetGuestTextInfo

`func (o *ReservationQueueInformationType) GetGuestTextInfo() QueueTextInfoType`

GetGuestTextInfo returns the GuestTextInfo field if non-nil, zero value otherwise.

### GetGuestTextInfoOk

`func (o *ReservationQueueInformationType) GetGuestTextInfoOk() (*QueueTextInfoType, bool)`

GetGuestTextInfoOk returns a tuple with the GuestTextInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestTextInfo

`func (o *ReservationQueueInformationType) SetGuestTextInfo(v QueueTextInfoType)`

SetGuestTextInfo sets GuestTextInfo field to given value.

### HasGuestTextInfo

`func (o *ReservationQueueInformationType) HasGuestTextInfo() bool`

HasGuestTextInfo returns a boolean if a field has been set.

### GetPriority

`func (o *ReservationQueueInformationType) GetPriority() int32`

GetPriority returns the Priority field if non-nil, zero value otherwise.

### GetPriorityOk

`func (o *ReservationQueueInformationType) GetPriorityOk() (*int32, bool)`

GetPriorityOk returns a tuple with the Priority field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriority

`func (o *ReservationQueueInformationType) SetPriority(v int32)`

SetPriority sets Priority field to given value.

### HasPriority

`func (o *ReservationQueueInformationType) HasPriority() bool`

HasPriority returns a boolean if a field has been set.

### GetAverageQueueTimeToCheckIn

`func (o *ReservationQueueInformationType) GetAverageQueueTimeToCheckIn() int32`

GetAverageQueueTimeToCheckIn returns the AverageQueueTimeToCheckIn field if non-nil, zero value otherwise.

### GetAverageQueueTimeToCheckInOk

`func (o *ReservationQueueInformationType) GetAverageQueueTimeToCheckInOk() (*int32, bool)`

GetAverageQueueTimeToCheckInOk returns a tuple with the AverageQueueTimeToCheckIn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAverageQueueTimeToCheckIn

`func (o *ReservationQueueInformationType) SetAverageQueueTimeToCheckIn(v int32)`

SetAverageQueueTimeToCheckIn sets AverageQueueTimeToCheckIn field to given value.

### HasAverageQueueTimeToCheckIn

`func (o *ReservationQueueInformationType) HasAverageQueueTimeToCheckIn() bool`

HasAverageQueueTimeToCheckIn returns a boolean if a field has been set.

### GetAverageQueueTimeCurrentReservations

`func (o *ReservationQueueInformationType) GetAverageQueueTimeCurrentReservations() int32`

GetAverageQueueTimeCurrentReservations returns the AverageQueueTimeCurrentReservations field if non-nil, zero value otherwise.

### GetAverageQueueTimeCurrentReservationsOk

`func (o *ReservationQueueInformationType) GetAverageQueueTimeCurrentReservationsOk() (*int32, bool)`

GetAverageQueueTimeCurrentReservationsOk returns a tuple with the AverageQueueTimeCurrentReservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAverageQueueTimeCurrentReservations

`func (o *ReservationQueueInformationType) SetAverageQueueTimeCurrentReservations(v int32)`

SetAverageQueueTimeCurrentReservations sets AverageQueueTimeCurrentReservations field to given value.

### HasAverageQueueTimeCurrentReservations

`func (o *ReservationQueueInformationType) HasAverageQueueTimeCurrentReservations() bool`

HasAverageQueueTimeCurrentReservations returns a boolean if a field has been set.

### GetQueueDate

`func (o *ReservationQueueInformationType) GetQueueDate() string`

GetQueueDate returns the QueueDate field if non-nil, zero value otherwise.

### GetQueueDateOk

`func (o *ReservationQueueInformationType) GetQueueDateOk() (*string, bool)`

GetQueueDateOk returns a tuple with the QueueDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueueDate

`func (o *ReservationQueueInformationType) SetQueueDate(v string)`

SetQueueDate sets QueueDate field to given value.

### HasQueueDate

`func (o *ReservationQueueInformationType) HasQueueDate() bool`

HasQueueDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


