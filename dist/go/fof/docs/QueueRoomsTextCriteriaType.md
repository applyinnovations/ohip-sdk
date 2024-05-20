# QueueRoomsTextCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Resort context of the text message. | [optional] 
**MessageType** | Pointer to [**QueueRoomsTextMessageType**](QueueRoomsTextMessageType.md) |  | [optional] 
**MobileNumber** | Pointer to **string** | Mobile number that the text message will be delivered to. | [optional] 
**ReservationId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 

## Methods

### NewQueueRoomsTextCriteriaType

`func NewQueueRoomsTextCriteriaType() *QueueRoomsTextCriteriaType`

NewQueueRoomsTextCriteriaType instantiates a new QueueRoomsTextCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewQueueRoomsTextCriteriaTypeWithDefaults

`func NewQueueRoomsTextCriteriaTypeWithDefaults() *QueueRoomsTextCriteriaType`

NewQueueRoomsTextCriteriaTypeWithDefaults instantiates a new QueueRoomsTextCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *QueueRoomsTextCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *QueueRoomsTextCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *QueueRoomsTextCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *QueueRoomsTextCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetMessageType

`func (o *QueueRoomsTextCriteriaType) GetMessageType() QueueRoomsTextMessageType`

GetMessageType returns the MessageType field if non-nil, zero value otherwise.

### GetMessageTypeOk

`func (o *QueueRoomsTextCriteriaType) GetMessageTypeOk() (*QueueRoomsTextMessageType, bool)`

GetMessageTypeOk returns a tuple with the MessageType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessageType

`func (o *QueueRoomsTextCriteriaType) SetMessageType(v QueueRoomsTextMessageType)`

SetMessageType sets MessageType field to given value.

### HasMessageType

`func (o *QueueRoomsTextCriteriaType) HasMessageType() bool`

HasMessageType returns a boolean if a field has been set.

### GetMobileNumber

`func (o *QueueRoomsTextCriteriaType) GetMobileNumber() string`

GetMobileNumber returns the MobileNumber field if non-nil, zero value otherwise.

### GetMobileNumberOk

`func (o *QueueRoomsTextCriteriaType) GetMobileNumberOk() (*string, bool)`

GetMobileNumberOk returns a tuple with the MobileNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMobileNumber

`func (o *QueueRoomsTextCriteriaType) SetMobileNumber(v string)`

SetMobileNumber sets MobileNumber field to given value.

### HasMobileNumber

`func (o *QueueRoomsTextCriteriaType) HasMobileNumber() bool`

HasMobileNumber returns a boolean if a field has been set.

### GetReservationId

`func (o *QueueRoomsTextCriteriaType) GetReservationId() UniqueIDType`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *QueueRoomsTextCriteriaType) GetReservationIdOk() (*UniqueIDType, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *QueueRoomsTextCriteriaType) SetReservationId(v UniqueIDType)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *QueueRoomsTextCriteriaType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


