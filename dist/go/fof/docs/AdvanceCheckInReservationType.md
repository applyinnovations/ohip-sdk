# AdvanceCheckInReservationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ETRComments** | Pointer to **string** | Comments relating to the Advance Checked In guest&#39;s return to the property | [optional] 
**ExpectedReturnTime** | Pointer to **string** | Time when the guest is expected to return to perform Check In | [optional] 
**HotelId** | Pointer to **string** | Resort to which the Reservation belongs. | [optional] 
**OptedForCommunication** | Pointer to **bool** | Indicates if the guest has opted for communications pertaining to this reservation. | [optional] 
**ReservationCommunication** | Pointer to [**ResCommunicationType**](ResCommunicationType.md) |  | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 

## Methods

### NewAdvanceCheckInReservationType

`func NewAdvanceCheckInReservationType() *AdvanceCheckInReservationType`

NewAdvanceCheckInReservationType instantiates a new AdvanceCheckInReservationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAdvanceCheckInReservationTypeWithDefaults

`func NewAdvanceCheckInReservationTypeWithDefaults() *AdvanceCheckInReservationType`

NewAdvanceCheckInReservationTypeWithDefaults instantiates a new AdvanceCheckInReservationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetETRComments

`func (o *AdvanceCheckInReservationType) GetETRComments() string`

GetETRComments returns the ETRComments field if non-nil, zero value otherwise.

### GetETRCommentsOk

`func (o *AdvanceCheckInReservationType) GetETRCommentsOk() (*string, bool)`

GetETRCommentsOk returns a tuple with the ETRComments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetETRComments

`func (o *AdvanceCheckInReservationType) SetETRComments(v string)`

SetETRComments sets ETRComments field to given value.

### HasETRComments

`func (o *AdvanceCheckInReservationType) HasETRComments() bool`

HasETRComments returns a boolean if a field has been set.

### GetExpectedReturnTime

`func (o *AdvanceCheckInReservationType) GetExpectedReturnTime() string`

GetExpectedReturnTime returns the ExpectedReturnTime field if non-nil, zero value otherwise.

### GetExpectedReturnTimeOk

`func (o *AdvanceCheckInReservationType) GetExpectedReturnTimeOk() (*string, bool)`

GetExpectedReturnTimeOk returns a tuple with the ExpectedReturnTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpectedReturnTime

`func (o *AdvanceCheckInReservationType) SetExpectedReturnTime(v string)`

SetExpectedReturnTime sets ExpectedReturnTime field to given value.

### HasExpectedReturnTime

`func (o *AdvanceCheckInReservationType) HasExpectedReturnTime() bool`

HasExpectedReturnTime returns a boolean if a field has been set.

### GetHotelId

`func (o *AdvanceCheckInReservationType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *AdvanceCheckInReservationType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *AdvanceCheckInReservationType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *AdvanceCheckInReservationType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetOptedForCommunication

`func (o *AdvanceCheckInReservationType) GetOptedForCommunication() bool`

GetOptedForCommunication returns the OptedForCommunication field if non-nil, zero value otherwise.

### GetOptedForCommunicationOk

`func (o *AdvanceCheckInReservationType) GetOptedForCommunicationOk() (*bool, bool)`

GetOptedForCommunicationOk returns a tuple with the OptedForCommunication field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOptedForCommunication

`func (o *AdvanceCheckInReservationType) SetOptedForCommunication(v bool)`

SetOptedForCommunication sets OptedForCommunication field to given value.

### HasOptedForCommunication

`func (o *AdvanceCheckInReservationType) HasOptedForCommunication() bool`

HasOptedForCommunication returns a boolean if a field has been set.

### GetReservationCommunication

`func (o *AdvanceCheckInReservationType) GetReservationCommunication() ResCommunicationType`

GetReservationCommunication returns the ReservationCommunication field if non-nil, zero value otherwise.

### GetReservationCommunicationOk

`func (o *AdvanceCheckInReservationType) GetReservationCommunicationOk() (*ResCommunicationType, bool)`

GetReservationCommunicationOk returns a tuple with the ReservationCommunication field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationCommunication

`func (o *AdvanceCheckInReservationType) SetReservationCommunication(v ResCommunicationType)`

SetReservationCommunication sets ReservationCommunication field to given value.

### HasReservationCommunication

`func (o *AdvanceCheckInReservationType) HasReservationCommunication() bool`

HasReservationCommunication returns a boolean if a field has been set.

### GetReservationId

`func (o *AdvanceCheckInReservationType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *AdvanceCheckInReservationType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *AdvanceCheckInReservationType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *AdvanceCheckInReservationType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


