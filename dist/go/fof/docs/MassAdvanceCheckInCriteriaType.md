# MassAdvanceCheckInCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ETRComments** | Pointer to **string** | Comments relating to the Advance Checked In guest&#39;s return to the property to perform Check In | [optional] 
**ExpectedReturnTime** | Pointer to **string** | Time when the guest is expected to return to perform Check In | [optional] 
**HotelId** | Pointer to **string** | Resort to which the Reservation belongs. | [optional] 
**ReservationIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 

## Methods

### NewMassAdvanceCheckInCriteriaType

`func NewMassAdvanceCheckInCriteriaType() *MassAdvanceCheckInCriteriaType`

NewMassAdvanceCheckInCriteriaType instantiates a new MassAdvanceCheckInCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMassAdvanceCheckInCriteriaTypeWithDefaults

`func NewMassAdvanceCheckInCriteriaTypeWithDefaults() *MassAdvanceCheckInCriteriaType`

NewMassAdvanceCheckInCriteriaTypeWithDefaults instantiates a new MassAdvanceCheckInCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetETRComments

`func (o *MassAdvanceCheckInCriteriaType) GetETRComments() string`

GetETRComments returns the ETRComments field if non-nil, zero value otherwise.

### GetETRCommentsOk

`func (o *MassAdvanceCheckInCriteriaType) GetETRCommentsOk() (*string, bool)`

GetETRCommentsOk returns a tuple with the ETRComments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetETRComments

`func (o *MassAdvanceCheckInCriteriaType) SetETRComments(v string)`

SetETRComments sets ETRComments field to given value.

### HasETRComments

`func (o *MassAdvanceCheckInCriteriaType) HasETRComments() bool`

HasETRComments returns a boolean if a field has been set.

### GetExpectedReturnTime

`func (o *MassAdvanceCheckInCriteriaType) GetExpectedReturnTime() string`

GetExpectedReturnTime returns the ExpectedReturnTime field if non-nil, zero value otherwise.

### GetExpectedReturnTimeOk

`func (o *MassAdvanceCheckInCriteriaType) GetExpectedReturnTimeOk() (*string, bool)`

GetExpectedReturnTimeOk returns a tuple with the ExpectedReturnTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpectedReturnTime

`func (o *MassAdvanceCheckInCriteriaType) SetExpectedReturnTime(v string)`

SetExpectedReturnTime sets ExpectedReturnTime field to given value.

### HasExpectedReturnTime

`func (o *MassAdvanceCheckInCriteriaType) HasExpectedReturnTime() bool`

HasExpectedReturnTime returns a boolean if a field has been set.

### GetHotelId

`func (o *MassAdvanceCheckInCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *MassAdvanceCheckInCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *MassAdvanceCheckInCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *MassAdvanceCheckInCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReservationIdList

`func (o *MassAdvanceCheckInCriteriaType) GetReservationIdList() []UniqueIDType`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *MassAdvanceCheckInCriteriaType) GetReservationIdListOk() (*[]UniqueIDType, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *MassAdvanceCheckInCriteriaType) SetReservationIdList(v []UniqueIDType)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *MassAdvanceCheckInCriteriaType) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


