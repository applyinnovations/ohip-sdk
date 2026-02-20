# DepartureReservationInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationExpectedDepartureTime** | Pointer to **string** | The departure Reservation Expected Departure Time. | [optional] 
**ReservationStatus** | Pointer to [**PMSResStatusType**](PMSResStatusType.md) |  | [optional] 

## Methods

### NewDepartureReservationInfoType

`func NewDepartureReservationInfoType() *DepartureReservationInfoType`

NewDepartureReservationInfoType instantiates a new DepartureReservationInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDepartureReservationInfoTypeWithDefaults

`func NewDepartureReservationInfoTypeWithDefaults() *DepartureReservationInfoType`

NewDepartureReservationInfoTypeWithDefaults instantiates a new DepartureReservationInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationExpectedDepartureTime

`func (o *DepartureReservationInfoType) GetReservationExpectedDepartureTime() string`

GetReservationExpectedDepartureTime returns the ReservationExpectedDepartureTime field if non-nil, zero value otherwise.

### GetReservationExpectedDepartureTimeOk

`func (o *DepartureReservationInfoType) GetReservationExpectedDepartureTimeOk() (*string, bool)`

GetReservationExpectedDepartureTimeOk returns a tuple with the ReservationExpectedDepartureTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationExpectedDepartureTime

`func (o *DepartureReservationInfoType) SetReservationExpectedDepartureTime(v string)`

SetReservationExpectedDepartureTime sets ReservationExpectedDepartureTime field to given value.

### HasReservationExpectedDepartureTime

`func (o *DepartureReservationInfoType) HasReservationExpectedDepartureTime() bool`

HasReservationExpectedDepartureTime returns a boolean if a field has been set.

### GetReservationStatus

`func (o *DepartureReservationInfoType) GetReservationStatus() PMSResStatusType`

GetReservationStatus returns the ReservationStatus field if non-nil, zero value otherwise.

### GetReservationStatusOk

`func (o *DepartureReservationInfoType) GetReservationStatusOk() (*PMSResStatusType, bool)`

GetReservationStatusOk returns a tuple with the ReservationStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationStatus

`func (o *DepartureReservationInfoType) SetReservationStatus(v PMSResStatusType)`

SetReservationStatus sets ReservationStatus field to given value.

### HasReservationStatus

`func (o *DepartureReservationInfoType) HasReservationStatus() bool`

HasReservationStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


